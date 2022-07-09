<template>
    <div class="center">
        <ul>
            <li v-for="i in img " :key="index">
                <a href="#">
                    <img :src="require(`@/assets/image/${i.img_src}`)" class="goodimage" width="130" alt="">
                    <h2 class="item-title" style="line-height: 30px; text-align: center ; color: #333;">{{i.h2_t}}</h2>
                    <p>{{i.text}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    import { onMounted, reactive, toRefs } from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    export default {
        name: 'center',
        setup() {
            let data = reactive({ img: [] })
            onMounted(() => {
                axios.get('/mock/center.json').then(response => {
                    // console.log(response.data);
                    // tex=response.data;
                    data.img = response.data
                    // console.log(tex)
                });
            })
            return {
                ...toRefs(data)
            }
        }
    }
</script>
<style>

</style>