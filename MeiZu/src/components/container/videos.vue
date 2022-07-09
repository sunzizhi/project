<template lang="">
    <div class="video_bigbox">
        <div class="video_position">
            <div class="video_title">
                <h3>精彩视频</h3>
            </div>
            <div class=video_box>
                <ul>
                    <li v-for="d in img" :key="index" class="video_product">
                        <a href="#">
                            <div class="video_img"><img :src="require(`@/assets/image/${d.img_src}`)" alt="" width="303">
                            </div>
                            <div class="play">
                                <img :src="require(`@/assets/image/${d.img_src2}`)" alt="" width="30">
                            </div>
                            <p>{{d.text}}</p>
                        </a>                        
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
    import { onMounted, reactive ,toRefs} from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    export default {
        name: 'videos',
        setup() {
            let data = reactive({img:[]})
            onMounted(() => {
                axios.get('/mock/video.json').then(response => {
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