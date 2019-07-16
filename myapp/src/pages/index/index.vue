<template>
   <div>
      <button @click="onClick" >anniu</button>
      <transition name="fade">
         <div :is="Comment"></div>
         <!--<h1 v-show="show">enter</h1>-->
      </transition>

   </div>

</template>

<script>
   import  Ccom from "../../components/c"
   import  Dcom from "../../components/d"
   import Vue from "vue"

   export default {
      components: {
      Ccom,
      Dcom
   },
        name: "index",
       data(){
           return{
              show:true,
              Comment:"ccom"
           }
       },
       created(){
           console.log(this)
       },
       methods:{
          onClick(){
             if(this.Comment==="Ccom"){
                this.Comment="Dcom"
             }else{
                this.Comment="Ccom"
             }
          }
       }
    }
</script>

<style scoped>
   /*.fade-enter-active, .fade-leave-active {*/
      /*transition: opacity 2s;*/
   /*}*/
   /*.fade-enter, .fade-leave-to  {*/
      /*opacity: 0;*/
   /*}*/
</style>