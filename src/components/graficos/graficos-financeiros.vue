<template>
    <div>
        <div id="container" class="grafico">  
        </div>
    </div>
</template>


<script>
var moment =require('moment')
import {epoch_to_month} from '../funcoes/epoch_to_month'
import {desenha} from '../funcoes/desenha_grafico_linha'

export default {
    data(){
        return {
            list : []
        }
    },
    created(){
        this.$http.get("https://projeto-acme.herokuapp.com/financeiro", {headers: {'Access-Control-Allow-Origin': "*"}})
            .then(res =>this.list = epoch_to_month(res["body"]))
    },
    mounted () {
        setTimeout(()=>{desenha_financeiro_por_categoria(this.list)},1000)
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