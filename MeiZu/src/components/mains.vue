<template>
        <div class="main">
            <div class="banner">
                <div class="nav">
                    <div class="logo">
                         <img src="../assets/image/logo.png" width="125" alt="">                       
                    </div>
                    <div class="head-1">
                        <ul>
                            <li class="h_n_1"><a href="#">手机</a></li>
                            <li><a href="#">声学</a></li>
                            <li><router-link to="/parts">配件</router-link></li>
                            <li><a href="#">Lipro</a></li>
                            <li><a href="#">PANDAER</a></li>
                            <li><a href="#">Flyme</a></li>
                            <li><a href="#">服务</a></li>
                            <li><a href="#">社区</a></li>
                            <li><a href="#">企业服务</a></li>
                            <li><a href="#">APP下载</a></li>
                        </ul>
                    </div>
                    <div class="head-2">
                        <div class="search">
                            <input class="search-input" type="text" placeholder="魅族&nbsp;18">
                            <a href="#"><img src="../assets/image/sousuo.png" alt=""></a>
                        </div>
                        <div class="head_user">
                            <div class="info_all">
                                <div><a target="_blank" href="#">立即登录</a></div>
                                <div><a target="_blank" href="#">立即注册</a></div>
                                <!-- <div><a target="_blank" href="#">我的订单</a></div> -->
                                <div><router-link  to="/dingdan">我的订单</router-link> </div>
                                <div><a target="_blank" href="#">M码通道</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="head_cart">
                        <div class="head_cart_list">
                            <div>登录后可显示<br>
                                你账号中已加入的商品哦~</div>
                        </div>
                        <em>0</em>
                    </div>
                </div>
            </div>
        </div>

</template>
<script>
    import useRouter from 'vue-router'
    export default {
        name: 'mains',
    }
</script>
<style>

</style>