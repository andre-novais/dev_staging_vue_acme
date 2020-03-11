<template>
    <div>
        <div id="receitas_custos" class="grafico"/>  
        <div id="entrada_saida" class="grafico"/>
    </div>
</template>

<script>
var moment =require('moment')
import {epoch_to_month} from '../funcoes/epoch_to_month'
import {desenha} from '../funcoes/desenha_grafico_linha'
import {Grafico} from '../funcoes/Grafico'

export default {
    data(){
        return {
            list : []
        }
    },
    created(){
        
    },
    mounted () {
        
        this.$http.get("https://projeto-acme.herokuapp.com/financeiro", {headers: {'Access-Control-Allow-Origin': "*"}})
            .then(res =>{
                this.list = epoch_to_month(res["body"])
                
                var receitas_custos = new Grafico('receitas e custos variaveis');

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
                
            })

    },
    methods : {
        desenha:desenha
    }
}
</script>

<style scoped>
.grafico {
    width : 60vw;
    height : 50vh;
    max-width: 500px;
    max-height: 400px;
}

</style>