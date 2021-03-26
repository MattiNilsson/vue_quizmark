<template>
  <div id="app">
    <div class="bg"></div>
    <header><h1>quizmakr</h1></header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
}
body{
  margin: 0;
}
.bg{
  background-image: url("./assets/vueBackground.jpg");
  background-size: 700px;
  background-repeat: repeat;
  width: 100vw;
  height: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.2;
}
*{
  box-sizing: border-box;
  font-family: monospace;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

header{
  height: 50px;
  width: 100vw;
  position: absolute;
  top: 0;
  background: rgb(61, 150, 201);
  margin-bottom: 50px;
  border-bottom: 2px solid black;
}

header h1{
  position: relative;
  top: -15px;
  color: white;
}
</style>
