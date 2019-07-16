<template>
    <div class="banner-show" @mouseover="clearInv" @mouseout="runInv">
        <div class="banner-img">
          <a :href="data[nowIndex].href">
            <transition :name="slidetrans">
              <img v-if="isShow" :src="data[nowIndex].src">
            </transition>
            <transition :name="slideTransold">
              <img v-if="!isShow" :src="data[nowIndex].src">
            </transition>
          </a>
        </div>
      <div class="banner-footer">
        <div class="footer-title">{{data[nowIndex].title}}</div>
        <div class="footer-list">
          <div @click="goto(preIndex)"><</div>
          <div class="list-item" v-for="(item,i) in data" :class="{'list-item-active':i===nowIndex}" @click="goto(i)">{{i}}</div>
          <div @click="goto(nexIndex)">></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        props:{
          data:{

            type: Array,
            default: []
          },
        },
      data(){
          return{
            slidetrans:"slide-trans",
            slideTransold:"slide-trans-old",
            isShow:true,
            nowIndex:0
          }
      },
      computed:{
        preIndex(){
            if(this.nowIndex===0){
              return this.data.length-1
            }else{
              return this.nowIndex-1
            }
        },
        nexIndex(){
          if(this.nowIndex===this.data.length-1){
            return 0
          }else{
            return this.nowIndex+1
          }
        }
      },
      watch: {
        nowIndex(n,o){
          console.log(n,o)
          if(o<n){
            this.slidetrans="lide-trans"
            this.slideTransold="slide-trans-old"

          }else{
            this.slidetrans="lide-transPre"
            this.slideTransold="slide-trans-oldPre"
          }
        }
      },
      methods:{
        runInv () {
          this.invId = setInterval(() => {
            this.goto(this.nexIndex)
          }, 2000)
        },
          goto(index){
                this.isShow=false
                const oldIndex=this.nowIndex
                setTimeout(() => {
                  this.isShow = true
                  this.nowIndex = index
                }, 10)
          },
        clearInv(){
          clearInterval(this.invId)
        }
      },
      created() {
          this.runInv()
      },
      // mounted () {
      //   this.runInv();
      // }
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
  .slide-transPre-enter {
    transform: translateX(-900px);
  }
  .slide-trans-oldPre-leave-active {
    transition: all .5s;
    transform: translateX(900px);
  }
  .banner-show{
    width:800px;
    height:300px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;

  }
  .banner-img {
    width: 100%;
    height:100%;

  }
  .banner-img a{
    width:100%
  }
  .banner-img img{
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .banner-footer{
    position: absolute;
    bottom: -0px;
    width:100%;
    background: gray;
    height: 30px;
    line-height: 30px;
    display: flex;
  }
  .footer-title{
    width:50%;

  }
  .footer-list{
    width:50%;
    display: flex;
    height: 30px;
    justify-content: flex-end;
    margin-right: 30px;
  }
  .list-item{
    height: 20px;
    width:20px;
    line-height: 20px;
    border-radius: 50%;
    margin: 5px 2px;
    background: white;

  }
  .list-item-active{
    color: red;
  }
</style>
