<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'M PLUS Rounded 1c', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  padding: 16px;
  max-width: 800px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
