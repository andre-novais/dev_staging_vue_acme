<template>
  <div id="app">
    <div>
      <div id='graph_container container'>
        <div class="row justify-content-center align-items-center">
          <div class="col-sm-2" v-for="component in list_comp" :key="component.name">
            <button class="btn btn-primary" @click="get_component(component.comp)">{{ component.name }}</button>
          </div>
          
        </div>
        <div class="container">
           <div class="row" id='grafico_resultado' :is='comp'></div>
        </div>
         
      </div>
    </div>
  </div>
</template>


<script>
import graficosfinanceiros from './components/graficos/graficos-financeiros.vue'
import graficoscrm from './components/graficos/graficos-crm.vue'

export default {
  name: 'App',
  components: {
    graficosfinanceiros,
    graficoscrm
  },
  data(){
    return {
      comp : null,
      graficosfinanceiros,
      graficoscrm,
      list_comp : [
        {'name':'Financeiro','comp': graficosfinanceiros},
        {'name':'crm','comp': graficoscrm}]
    }
  },
  methods : {
    get_component(comp){
      this.comp = comp
    }
  }
}
</script>

<style>

body{
  background-color: blueviolet;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#graph_container{
  text-align: center;
  display: inline-block;  
}
#grafico_resultado{
  margin-top: 0.5vw;
}
</style>
