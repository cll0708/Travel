<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  export default {
    name: "City",
    components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data(){
      return{
        cities:{},
        hotCities:[],
        letter:''
      }
    },
    methods:{
      getCityInfo(){
        axios.get('/mock/city.json').then((res)=> {
          //console.log(res)
          res = res.data
          console.log(res)
          if(res.ret && res.data){
            const { cities, hotCities } = res.data;
            this.cities = cities;
            this.hotCities = hotCities;

          }
        })
      },
      handleChange(letter){
       // console.log(letter)
        this.letter = letter;
      }
    },
    mounted(){
      this.getCityInfo()
    }
  }
</script>

<style lang="stylus" scoped>

</style>