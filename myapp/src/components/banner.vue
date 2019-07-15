<template>
    <div class="slide-show"  @mouseover="clearInter" @mouseout="autoMove">
        <div class="slide-img">
            <a :href="slides[nowIndex].href">
                <transition name="slide-trans">
                    <img v-if="isShow" :src="slides[nowIndex].src">
                </transition>
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src="slides[nowIndex].src">
                </transition>
            </a>
        </div>
        <div class="banner-footer">
            <div class="banner-title">{{slides[nowIndex].title}}</div>
            <div class="banner-list">
                <div @click="goto(preIndex)"><</div>
                <div @click="goto(index)" class="list-item" :class="{onActive:nowIndex===index}" v-for="(item,index) in slides">{{index}}</div>
                <div @click="goto(nexIndex)">></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "banner",
        data(){
            return{
                isShow:true,
                nowIndex:0,
                slides:  [
                {
                    src: require('../assets/slideShow/pic1.jpg'),
                    title: 'xxx1',
                    href: 'detail/analysis'
                },
                {
                    src: require('../assets/slideShow/pic2.jpg'),
                    title: 'xxx2',
                    href: 'detail/count'
                },
                {
                    src: require('../assets/slideShow/pic3.jpg'),
                    title: 'xxx3',
                    href: 'http://xxx.xxx.com'
                },
                {
                    src: require('../assets/slideShow/pic4.jpg'),
                    title: 'xxx4',
                    href: 'detail/forecast'
                }
            ],
            }
        },
        computed:{
            preIndex(){
                if(this.nowIndex===0){
                    return this.slides.length-1
                }else{
                   return this.nowIndex-1
                }
            },
            nexIndex(){
                if(this.nowIndex===this.slides.length-1){
                    return 0
                }else{
                    return this.nowIndex+1
                }
            }
        },
        methods:{
            clearInter(){
                clearInterval(this.inter)
            },
            goto(index){
                this.nowIndex=index
            },
            autoMove(){
                this.inter=setInterval(()=>{
                   this.goto(this.nexIndex)
                },2000)
            }
        },
        created(){
        },
        mounted(){
            this.autoMove()
        }

    }
</script>

<style scoped>
    .slide-trans-enter-active {
        transition: all .5s;
    }
    .slide-trans-enter {
        transform: translateX(900px);
    }
    .slide-trans-old-leave-active {
        transition: all .5s;
        transform: translateX(-900px);
    }
    .slide-show{
        height:100%;
        width:100%;
        overflow: hidden;
        position: relative;


    }
    .slide-img{
        width:0;
    }
    .slide-img a{
        width:100%;
        height:100%;
    }
    .slide-show img{
        height:100%;
        width:100%;
        position: absolute;
        top: 0;
    }
    .banner-footer{
        position: absolute;
        bottom:0;
        width:100%;
        height:30px;
        line-height: 30px;
        background: #73695c;
        display: flex;
    }
    .banner-title{
        width:50%;
        text-align: left;
        padding-left: 30px;
    }
    .banner-list{
        width:50%;
        height:30px;
        line-height: 30px;
        display: flex;
        align-items: center;
        padding-right: 30px;
        justify-content: flex-end;
    }
    .list-item{
        width:20px;
        height:20px;
        margin:0 7px  0 7px;
        line-height: 20px;
        border-radius: 50%;
        background: #8bc34a;
        cursor: pointer;
    }
    .onActive{
        color: red;
    }
</style>