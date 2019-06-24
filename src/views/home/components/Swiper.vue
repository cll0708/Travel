<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: "HomeSwiper",
    data () {
      return{
        swiperOption: {
          pagination:'.swiper-pagination',
          loop: true
        },
        swiperList:[{
          id:'0001',
          imgUrl:'http://img1.imgtn.bdimg.com/it/u=3893146502,314297687&fm=26&gp=0.jpg'
        },{
          id:'0002',
          imgUrl:'http://img5.imgtn.bdimg.com/it/u=8685675,2171717858&fm=26&gp=0.jpg'
        },{
          id:'0003',
          imgUrl:'http://img1.imgtn.bdimg.com/it/u=1435544959,881026782&fm=26&gp=0.jpg'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height:0
    padding-bottom:56.28%
    background:#ccc
   .swiper-img
      width: 100%

</style>