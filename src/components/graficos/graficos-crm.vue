<template>
    <div class="container">
        <div class="col-sm-6 justify-content-center align-items-center">
            <div id="contagem_clientes" class="grafico col-sm-12 quadro rounded"/>  
        </div>
        <!-- <div class="col-sm-6">
            <div id="entrada_saida" class="grafico col-sm-12 quadro  rounded"/>
        </div> -->
    </div>
</template>

<script>

var moment =require('moment')
import {epoch_to_month} from '../funcoes/epoch_to_month'
import {Grafico} from '../funcoes/Grafico'
import {cont_pot_categoria} from '../funcoes/cont_pot_categoria'

export default {
    data(){
        return {
            list : [],
            outra_list:[]
        }
    },
    created(){
        
    },
    mounted () {
        
        this.$http.get("https://projeto-acme.herokuapp.com/crm", {headers: {'Access-Control-Allow-Origin': "*"}})
            .then(res =>{
                this.list = epoch_to_month(res["body"])
                
                var contagem_clientes = new Grafico('Total de Clientes');

                contagem_clientes.setSeriesByFunc(this.list,cont_pot_categoria,'total de clientes','line')

                contagem_clientes.desenha('contagem_clientes');
                })
                

                //cont_pot_categoria(this.list)
                
                /* var receitas_custos = new Grafico('receitas e custos variaveis');

                receitas_custos.setSeries(
                    this.list.filter(json=>json['ds_tipificacao']=='receita'),
                    'occured_at',
                    'vl_valor',
                    'receitas',
                    'line'
                );
                receitas_custos.setSeries(
                    this.list.filter(json=>json['ds_tipificacao']=='custo'),
                    'occured_at',
                    'vl_valor',
                    'custos',
                    'line'
                );
                receitas_custos.desenha('receitas_custos')
                receitas_custos.chart.yAxis(0).labels().format('R${%value}')
                
                var entrada_saida = new Grafico('Funding e Necessidade de Caixa');
                entrada_saida.setSeries(
                    this.list.filter(json=>json['ds_tipificacao']=='entrada_com_contrapartida'),
                    'occured_at',   
                    'vl_valor',
                    'Funding',
                    'line'
                );
                entrada_saida.setSeries(
                    this.list.filter(json=>json['ds_tipificacao']=='despesa'),
                    'occured_at',
                    'vl_valor',
                    'Despendio Administrativo',
                    'line'
                );
                entrada_saida.desenha('entrada_saida');
                entrada_saida.chart.yAxis(0).labels().format('R${%value}')
                
            }) */
        this.outra_list = cont_pot_categoria(this.list)
    }
}
</script>

<style scoped>
.grafico {
    width : 60vw;
    max-width: 500px;
    min-width: 300px;
}

.quadro{
    background-color: coral;
    padding: 0.5vw;    
}

</style>