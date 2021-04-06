<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <Feedback></Feedback>
    <router-view name="slider"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
  import Feedback from "./components/Feedback";
  export default {
    components: {
      Feedback
    },
    computed: {
      defaultViewKey: function() {
        return this.$route.name;
      }
    }
  }
</script>
<style>
  @font-face {
    font-family: HelveticaNeueCyr;
    src: url('./assets/HelveticaNeueCyr-Heavy.otf');
    font-weight: bold;
  }
  @font-face {
    font-family: HelveticaNeueCyr;
    src: url('./assets/HelveticaNeueCyr-Medium.otf');
    font-weight: 500;
  }
  @font-face {
    font-family: HelveticaNeueCyr;
    src: url('./assets/HelveticaNeueCyr-Roman.otf');
    font-weight: normal;
  }

  html, body {
    height: 100%;
    background: url(./assets/background.png);
    background-size: 100%;
  }
  body {
    margin: initial;
    font-family: HelveticaNeueCyr;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  #app-content {
    flex: 1 0 auto;
    margin-top: 155px;
    /*max-width: 980px;*/
    align-self: center;
    width: -webkit-fill-available;
  }
</style>