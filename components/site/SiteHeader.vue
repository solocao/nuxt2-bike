<template>
  <div class="site-header">
    <div class="container">
      <div class="c-nav c-fleft">
        <span>
          <nuxt-link to="/">首页</nuxt-link>
        </span>
        <span>
          <nuxt-link to="/">关于我们</nuxt-link>
        </span>
        <span>
          <nuxt-link to="/">联系我们</nuxt-link>
        </span>
      </div>
      <div class="c-nav c-fright">
        <span>
          <user-dropdown v-if="login" />
          <nuxt-link v-else class="error-link" to="/user/login">登录</nuxt-link>
        </span>
        <span>
          <nuxt-link to="/shop/cart">购物车</nuxt-link>
        </span>
        <span>
          <nuxt-link to="/shop/cart">订单</nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import UserDropdown from 'components/user/UserDropdown.vue'

export default {
  computed: {
    ...mapState(['login', 'user'])
  },
  components: {
    UserDropdown
  }
}
</script>



<style lang="less" scoped>
.site-header {
  .c-fleft {
    float: left;
  }
  .c-fright {
    float: right;
  }
  a {
    color: #505050 !important;
    &:hover {
      color: #59a94f !important;
    }
  }
  .c-nav {
    display: flex;
    span {
      margin-left: 15px;
      margin-right: 15px;
      height: 30px;
      line-height: 30px;
      vertical-align: middle;
    }
  }
}
</style>
