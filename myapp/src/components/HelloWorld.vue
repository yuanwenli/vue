<template>
  <div class="hello">
    <h1>{{myvalue}}---{{msg }}</h1>
    <!--<slot name="header"> noheader</slot>-->
    <!--<input v-model="msg" />-->
    <!--<slot name="footer"> nofooter</slot>-->
    <Banner :data="imgList"></Banner>
  </div>
</template>

<script>
  import  Banner from "./banner"
  export default {
    components: {
      Banner,
    },
  props:['data','myvalue'],
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgList:[
        {
          src: require('../assets/u=272991589,982518946&fm=26&gp=0.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/u=1354954254,833678641&fm=26&gp=0.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        }, {
          src: require('../assets/u=2065435793,2179017780&fm=15&gp=0.jpg'),
          href: 'detail/analysis'
        }, {
          src: require('../assets/u=3417980944,547658005&fm=26&gp=0.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        }, {
          src: require('../assets/u=3641461756,1709147429&fm=15&gp=0.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        }, {
          src: require('../assets/u=4095572230,2553662148&fm=26&gp=0.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
      ]
    }
  },
  methods:{
    onClick(){
      this.$emit('commonEvent',this.msg)
    }
  },
  created(){
    console.log(this.myvalue)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
