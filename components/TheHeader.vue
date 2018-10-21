<template>
  <div id="header">
    <site-header />
    <div class="row m0 logo_line">
      <div class="container">
        <div class="row">
          <div class="col-sm-5">
            <span class="site-title">AA 电单车</span>
          </div>
          <div class="col-sm-7 searchSec">
            <div class="fleft searchForm">
              <form action="#" method="get">
                <div class="input-group">
                  <input id="search_param" type="hidden" name="search_param" value="all">
                  <input type="search" class="form-control" placeholder="查找">
                  <div class="input-group-btn searchFilters">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span id="searchFilterValue">所有分类</span>
                      <i class="fa fa-angle-down" />
                    </button>
                  </div>
                  <!-- /btn-group -->
                  <span class="input-group-btn searchIco">
                    <button class="btn btn-default" type="submit">
                      <i class="fa fa-search" />
                    </button>
                  </span>
                </div>
                <!-- /input-group -->
              </form>
            </div>
            <div class="fleft wishlistCompare">
              <ul class="nav">
                <li>
                  <a href="#">
                  <i class="fa fa-heart" /> 心愿单 (3)</a>
                </li>
                <li>
                  <a href="#">
                  <i class="fa fa-exchange" /> 大家喜欢 (2)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Affix>
      <nav class="navbar navbar-default m0 navbar-static-top">
        <div class="container-fluid container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNav">
              <i class="fa fa-bars" /> Navigation
            </button>
          </div>

          <div id="mainNav" class="collapse navbar-collapse">
            <ul class="nav navbar-nav a-nav">
              <li class="active" @click="activeMenu='index'">
                <a href="/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">首页</a>
              </li>
              <li @click="activeMenu='bike'">
                <a href="/bike">电单车</a>
              </li>
              <li class="dropdown">
                <a href="/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">信用卡</a>
              </li>
              <li class="dropdown">
                <a href="/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">行业新闻</a>
              </li>
              <li class="dropdown megaMenu">
                <a href="/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">活动</a>
              </li>
              <li class="dropdown">
                <a href="/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">优惠券</a>
              </li>
              <li>
                <a href="/">配件</a>
              </li>
              <li>
                <a href="#">视频</a>
              </li>
              <li>
                <a href="contact.html">联系我们</a>
              </li>
            </ul>
          </div>

          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
      </nav>
    </Affix>
    <div class="row topFeatures m0">
      <div class="container">
        <ul class="nav nav-justified text-center">
          <li><img src="~assets/img/icons/returns.png" alt="">一年保修</li>
          <li><img src="~assets/img/icons/delivery-car.png" alt="">厂商直供</li>
          <li><img src="~assets/img/icons/tel24-7.png" alt="">客服支持</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import NavSwiper from './NavSwiper.vue'
import ShopHeader from './ShopHeader.vue'
import UserHoverCard from './UserHoverCard.vue'
import SiteHeader from 'components/site/SiteHeader.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      showCart: false,
      userCart: false,
      activeMenu: 'index'
    }
  },
  components: {
    NavSwiper,
    ShopHeader,
    UserHoverCard,
    SiteHeader
  },
  methods: {
    ...mapMutations({
      logout: 'logout'
    })
  },
  computed: {
    ...mapState(['login', 'user']),
    // activeMenu() {
    //   // return this.$router.match(location).name;
    //   return 'asf'
    // },
    cartTotal() {
      return this.$store.state.cartTotal
    }
  },
  mounted() {
    console.log('看看这个route')
    console.log(this.$router.match(location).name)
  }
}
</script>

<style lang="stylus">
@import '../style/var.styl';

.site-title {
  font-size: 36px;
  color: #33AC41;
  font-weight: bold;
  top: 10px;
  position: absolute;
}

.navbar-nav {
  font-size: 14px;
  font-weight: bold;
}

.navarea-shop {
  height: 120px;

  .capsule1 {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .shop-nav {
    width: 100vw;
    height: 60px;
    background: white;
    display: flex;
    align-items: center;
    border-bottom: 1px solid linear-gradient(to right, #f3005c, #ffde00);
  }

  ul {
    padding-left: 0;
    display: flex;
    list-style: none outside none;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 0 50px;
  }

  a, a:visited, a:active {
    text-decoration: none;
    color: black;
  }

  .cartitem {
    position: relative;
    float: right;
    margin-left: 15px;
  }

  .cartcount {
    font-family: 'Barlow', sans-serif;
    position: absolute;
    background: #ff2211;
    color: white;
    text-align: center;
    padding-top: 4px;
    width: 20px;
    height: 20px;
    font-size: 10px;
    margin: -5px 0 0 20px;
    border-radius: 1000px;
    font-weight: 700;
  }
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(5px);
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: all 10s ease;
}

.fade-enter, .fade-leave-to { /* .fade-leave-active below version 2.1.8 */
  transform: translateX(5px);
  opacity: 1;
}

#header {
  margin-bottom: 20px;
}

.header-wce {
  height: 20px;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.person-eqd {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
