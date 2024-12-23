<template>
    <div class="common-container">
        <slot></slot>
        <img src="../assets/home/wave.png" class="wave">
    </div>
</template>

<script>
    export default {
        name: "common-container"
    }
</script>

<style scoped lang="less">
    .common-container {
        position: relative;
        background-color: #B33929;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .wave {
        width: 100%;
        height: 65px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 9999;
    }
</style>
