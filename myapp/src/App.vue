<template>
  <div id="app">
    <div class="header">
      <div class="headerItem"><router-link to="/index">首页</router-link></div>
      <div class="headerItem"><router-link to="/">我的家</router-link></div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width:100%;

}
  .header{
    height:10%;
    line-height: 60px;
    width:100%;
    justify-content: left;
    display: flex;
    background: #44A9F9;
  }
  .headerItem{
    width: 10%;
  }
  .content{
    height:90%

  }
</style>
