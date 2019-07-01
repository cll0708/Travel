<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/list"></router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
   width:100%;
}
</style>
