<template>
  <div id="app">
    <div>
      <div id='graph_container' class="container">
        <div class="container">
          <button class="btn btn-primary" @click="get_component()">Financeiro</button>
        </div>
          <div class="row" id='grafico_resultado' :is='comp'></div>
      </div>
    </div>
  </div>
</template>


<script>
import graficosfinanceiros from './components/graficos/graficos-financeiros.vue'

export default {
  name: 'App',
  components: {
    graficosfinanceiros
  },
  data(){
    return {
      comp : null
    }
  },
  methods : {
    get_component(){
      this.comp = graficosfinanceiros
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
