<template>
    <div class="container">
        <center />
        <phone />
        <shengxue />
        <peijian />
        <flyme />
        <videos />
    </div>
</template>
<script>
    import center from './center'
    import flyme from './flyme'
    import peijian from './peijian'
    import videos from './videos'
    import phone from './phone'
    import shengxue from './shengxue'

    export default {
        name: 'container',
        components: {
            center, flyme, peijian, phone, videos, shengxue
        }
    }
</script>
<style lang="">

</style>