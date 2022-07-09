<template>
    <div class="container">
        <!-- <img src="../../assets/image/parts_banner.jpg" alt="" class="parts_banner"> -->
        <div class="container_top">
            <a href="#" class="container_top_left">
                配件
            </a>
            <div class="container_top_right">
                <a >推荐</a>
                <a >
                    新品
                </a>
                <button @click="paixu">
                    价格
                </button>
            </div>
        </div>
        <div class="parts_container">
            <div class="containers">
                <div class="container_img" v-for="i in img" :key="index">
                    <img :src="require(`@/assets/image/${i.img_src}`)" alt="">
                    <p class="title">{{i.title}}</p>
                    <h3 class="text">{{i.text}}</h3>
                    <br>
                    <p class="price"><em>￥</em><span>{{i.price}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { onMounted, reactive, toRefs, computed } from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    export default {

        name: 'parts',
        setup() {
            let data = reactive({ img: [] })
            let datas = reactive({ price_s: [] })
            onMounted(() => {
                axios.get('/mock/parts.json').then(response => {
                    // console.log(response.data);
                    // tex=response.data;
                    data.img = response.data
                    datas.price_s = response.data
                    // console.log(
                    //     datas.price_s.sort(function (a, b) {
                    //     return Number(b.price) - Number(a.price);
                    // })
                    // )
                    // datas.price_s = datas.price_s.sort(function (a, b) {
                    //     return Number(b.price) - Number(a.price);
                    // });
                })
            })
            let p = 1
            function paixu() {

                if (p == 1) {
                    data.img = data.img.sort(function (a, b) {
                        return Number(b.price) - Number(a.price);
                    });
                    return p = 2
                    console.log(p)
                } else {
                    data.img = data.img.sort(function (a, b) {
                        return Number(a.price) - Number(b.price);
                    });
                    return p = 1
                    console.log(p)
                    // console.log(data.img)
                }
            }

            // datas.price_s = computed(() => {
            //     const d=datas.price_s.sort(function (a,b) {
            //         return Date.parse(b.price) - Date.parse(a.price);
            //     })
            //     return datas.price_s
            // });

            return {
                ...toRefs(data, datas), paixu
            }
        }

    }
</script>
<style scoped>
    body {
        background-color: red;
    }

    /* .parts_banner {
        width: 100%;
        height: 450px;
    } */

    .containers {
        clear: both;
        margin: 0 auto;
        width: 1264px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .container_img {
        width: 403px;
        height: 556px;
        text-align: center;
        background-color: white;
        margin-bottom: 20px;
    }

    .container_img:hover {
        box-shadow: 3px 3px 15px rgb(214, 211, 211);
    }

    .container_img img {
        width: 320px;
        height: 320px;
    }

    .title {
        width: 403px;
        height: 34.5px;
        line-height: 34.5px;
        overflow: hidden;
        color: black;
    }

    .text {
        width: 270px;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        overflow: hidden;
        font-size: rgb(100, 100, 100);
    }

    .price {
        color: red;
    }

    .price em {
        font-size: 16px;
    }

    .price span {
        font-size: 26px;
    }

    .container_top {
        margin: 50px auto;
        width: 1264px;
        padding-bottom: 30px;
    }

    .container_top a {
        float: left;
    }

    .container_top_right {
        float: right;
    }

    .container_top_right a {
        padding: 0 15px;
    }

    .container_top_left {
        float: left;
        font-size: 30px;
    }
    button{
        border: none;
        font-size: 16px;
        background-color:  rgb(110, 164, 205);
        color: white;
        padding: 0 8px;
        border-radius: 8px;
    }
</style>