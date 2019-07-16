<template>
    <div class="itemContent">
        <div class="itemMenu">
            <div class="menuItem">
                <router-link to="/home/a/c">
                    <span class="menuName">菜单1</span>
                </router-link>
            </div>
            <div class="menuItem">
                <router-link to="/home/a/d">
                    <span class="menuName">菜单2
                    </span>
                </router-link>
            </div>
        </div>
        <div class="content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Acom"
    }
</script>

<style scoped>
   .itemContent{
       width:100%;
       height: 100%;
       display: flex;
   }
    .itemMenu{
        width:12%;
        background: #475C8A;
        height: 100%;
    }
    .content{
        width:88%;
        padding: 0 20px 0 ;
    }
   .menuItem a{
       color: #000;
       text-decoration: navy;
       height: 30px;
       line-height: 30px;
   }
</style>