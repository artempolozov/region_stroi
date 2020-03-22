<template>
    <div class="views--home container" style="height: 800px">
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
    </div>
</template>

<script>

export default {
    components: {       
    },
    data() {
        return {};
    },
    computed: {

    },
    methods: {

    }
};
</script>
<style>
    .container div {
        height: 30px;
        width: 60px;
    }

    .container div:nth-of-type(1) {
        color: red;
    }
    .container div:nth-of-type(2) {
        color: blue;
    }
</style>
