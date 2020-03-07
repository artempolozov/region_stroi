<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <router-view name="slider"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
  export default {
    computed: {
      defaultViewKey: function() {
        return this.$route.name;
      }
    }
  }
</script>
<style>
  @font-face {
    font-family: HelveticaNeue;
    src: url('./assets/HelveticaNeue.ttf');
  }

  html, body {
    background: #ebebeb;
    height: 100%;
  }
  body {
    margin: initial;
    font-family: HelveticaNeue;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  #app-content {
    flex: 1 0 auto;
    margin-top: 155px;
    max-width: 980px;
    align-self: center;
    width: -webkit-fill-available;
  }
</style>