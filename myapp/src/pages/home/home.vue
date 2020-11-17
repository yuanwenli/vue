<template>
    <div class="content">
        <div class="contentLeft">
            <div class="menuItem">
                <router-link to="/home/a">
                    <span class="menuName">菜单1</span>
                </router-link>
            </div>
            <div class="menuItem">
                <router-link to="/home/b">
                    <span class="menuName">efdsfsdfsdfsdfsdfsdf
                    </span>
                </router-link>
            </div>
            <div class="menuItem">菜单3</div>
            <div class="menuItem">菜单4</div>
            <div class="menuItem">菜单5</div>
            <div class="menuItem">菜单6</div>
        </div>
        <div class="contentRight">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import Vue from "vue"
    import HelloWorld from "../../components/HelloWorld"
    export default {
        name: "home",
        components:{
            HelloWorld,
        },
        data(){
           return{
               value:"我的学生",
               list:[
                   {
                   name:"zhangsan",
                   age:55
                   },
                   {
                       name:"lisi",
                       age:22
                   }
               ]
           }
        },
        methods:{
            getEvent(msg){
                console.log(msg)
            }
        }
    }
</script>

<style scoped>
.content{
    width:100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;

}
    .contentLeft{
        width:15%;
        background: #2F3C5E;
        color: white;
    }
    .menuItem{
        height:45px;
        line-height: 45px;
    }
    .menuItem a{
        text-decoration: none;
    }
    .menuName{
        text-decoration: none;
        color: white;
    }
    .contentRight{
        width:85%;
        height: 100%;

    }
</style>