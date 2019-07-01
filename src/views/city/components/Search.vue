<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
            class="search-item border-bottom"
            v-for="item in list"
            :key="item.id"
            @click="handleCity(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
         没有找到匹配内容
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import { mapMutations } from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    name: "CitySearch",
    props:{
      cities: Object
    },
    data(){
      return{
        keyword:'',
        list:[],
        timer:null
      }
    },
    computed:{
      hasNoData(){
        return !this.list.length
      }
    },
    watch:{
      keyword(){
        if(this.timer){
          clearTimeout(this.timer)
        }
        if(!this.keyword){
          this.list = [];
          return
        }
        this.timer = setTimeout(()=>{
          const result = [];
          for (let k in this.cities){
            this.cities[k].forEach((item)=>{
              if(item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1){
                result.push(item)
              }
            })
          }
          this.list = result;
        },100)
      }
    },
    methods: {
      handleCity (city) {
        this.changeCity(city);
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    mounted(){
      this.scroll = new Bscroll(this.$refs.search)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl';
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
       box-sizing border-box
       width 100%
       height .62rem
       line-height .62rem
       padding 0 .1rem
       text-align center
       border-radius .06rem
       color #666
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
      padding-left .2rem
      line-height .62rem
      color #666
      background #fff



</style>