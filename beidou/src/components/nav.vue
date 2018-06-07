<template lang="html">
  <div>
    <ul class="row indexNav no-margin-left no-margin-right">
      <li class="Navli" :class="" v-for="(list, i) in menuList">
        <router-link :to="list.path" class="Navlia">{{ list.name }}</router-link>
        <div class="dropdownMenu" v-if="list.children">
            <ul>
              <li v-for="(childList, i) in list.children"><router-link :to="childList.path">{{ childList.name }}</router-link></li>
            </ul>
        </div>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import menuList from '../assets/js/menuList.js'

export default {
  data(){
    return {
      menuList: menuList
    }
  }
}
</script>

<style lang="scss" scoped>
.indexNav {
  list-style: none;
  height: 50px;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  background-color: #b2d4dd;
  margin-bottom: 0;
  padding-left: 0;
  margin: 0;
  li.Navli.active {
    background: url(../assets/imgs/Bd_Dy_navIco_03.png) no-repeat top;
  }
  li.Navli:hover{
    .dropdownMenu {
      display: block;
    }
  }
  li.Navli {
    position: relative;
    float: left;
    height: 50px;
    padding: 0;
    -webkit-box-flex: 1;
    a.Navlia {
      display: inline-block;
      width: 100%;
      height: 50px;
      padding: 0 5px;
      background: url(../assets/imgs/bigDipper_dian171124.png) no-repeat left center;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      color: #3e6373;
      transition: all .25s;
      -moz-transition: all .25s;
      -webkit-transition: all .25s;
      -o-transition: all .25s;
      text-decoration: none;
    }
    .dropdownMenu {
      display: none;
      position: absolute;
      width: 100%;
      min-width: 100px;
      top: 49px;
      left: 0;
      background-color: #eaf2fd;
      border-top: 1px solid #0d5084;
      z-index: 100;
      ul {
        list-style-type: none;
        width: 100%;
        padding-left: 0;
        li {
          width: 100%;
          height: 55px;
          a {
            display: inline-block;
            width: 100%;
            height: 55px;
            line-height: 55px;
            font-size: 16px;
            color: #4d4d4d;
            text-align: center;
            text-decoration: none;
          }
        }
        li:hover {
          a {
            background-color: #d7e6fb;
            color: #0e5283;
          }
        }
      }
    }
  }
  li.Navli:nth-child(3){
    -webkit-box-flex:1.5;
  }
  li.Navli:first-child{
    a{
      background: none;
    }
  }
}

</style>
