<template>
    <div class="contentC">
        <div class="banner">
            <Banner></Banner>
        </div>
    </div>
</template>

<script>
    import  Banner from "../components/banner"
    export default {
        components:{
            Banner
        },
        name: "Ccom",
        created(){
        }
    }
</script>

<style scoped>
    .contentC{
        width:100%;
    }
    .banner{
        height:260px;
        width:100%;
    }
</style>