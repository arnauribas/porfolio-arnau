<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>  
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue'

  export default {
    name: 'App',
    components: {
      HeaderComponent
    }
  }
</script>

<style>
  @import './assets/css/style.css';
  @import './assets/css/word.css';
</style>
