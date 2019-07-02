<template>
  <div>
    <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="bannerImgs"
    >
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import axios from 'axios'
  export default {
    name: "Detail",
    components:{
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data(){
      return{
        sightName:'',
        bannerImg:'',
        bannerImgs:[],
        list:[]
      }
    },
    methods:{
      getDataInfo(){
        axios.get('/mock/detail.json',{
          params:{
            id: this.$route.params.id
          }
        }).then((data)=>{
          console.log(data.data)
          let res = data.data;
          if(res.ret){
            this.sightName = res.data.sightName;
            this.bannerImg = res.data.bannerImg;
            this.list = res.data.categoryList;
            this.bannerImgs = res.data.gallaryImgs;
          }
        })
      }
    },
    mounted(){
      this.getDataInfo();
    }
  }
</script>

<style lang="stylus" scoped>
   .content
     height 50rem
</style>