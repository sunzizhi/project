<template lang="">
    <div id="flyme_bigbox" class="flyme_bigbox">
        <div class="flyme_position">
            <div class="flyme_title">
                <h3>Flyme</h3>
            </div>
            <div class="flyme_info">
                <div v-for="i in img" :key="index" :class="i.name">
                    <img :src="require(`@/assets/image/${i.img_src3}`)" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { onMounted, reactive ,toRefs} from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
export default {
    name:'flyme',
    setup() {
            let data = reactive({img:[]})
            onMounted(() => {
                axios.get('/mock/flyme.json').then(response => {
                    // console.log(response.data);
                    // tex=response.data;
                    data.img= response.data
                    // console.log(tex)
                });
            })
            return {
                ...toRefs(data)
            }
        }
}
</script>
<style lang="">
    
</style>