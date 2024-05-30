<template>
    <header>
      Todo List
    </header>

    <router-view/>

    <footer>
      le bas
    </footer>
</template>

<style>
html, body{
  height: 100%;
}

#app{
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>