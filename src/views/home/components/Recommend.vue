<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    data(){
      return{
        recommendList:[{
          id:'0001',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          title:'故宫',
          desc:'东方宫殿建筑代表，世界宫殿建筑典范'
        },{
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          title:'故宫',
          desc:'东方宫殿建筑代表，世界宫殿建筑典范'
        },{
          id:'0003',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          title:'故宫',
          desc:'东方宫殿建筑代表，世界宫殿建筑典范'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
     margin-top  .2rem
     line-height .8rem
     background  #eee
     text-indent .2rem
  .item
     display flex
     height 1.9rem
     overflow hidden
     .item-img
        width 1.7rem
        heigth 1.7rem
        padding .1rem
     .item-info
        flex 1
        padding .1rem
        min-width 0
        .item-title
           font-size .32rem
           line-height .54rem
           ellipse()
        .item-desc
           line-height .4rem
           color #ccc
           ellipse()
        .item-button
            margin-top .16rem
            line-height .44rem
            color #fff
            background #ff9300
            border-radius .06rem
            padding 0 .2rem

</style>