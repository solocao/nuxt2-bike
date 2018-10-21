<template>
  <div class="user-dropdown">
    <Dropdown>
      <a href="javascript:void(0)">
        {{ user.name }}
        <Icon type="ios-arrow-down" />
      </a>
      <DropdownMenu slot="list">
        <DropdownItem class="c-drop-item">退出</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>
<style lang="less" scoped>
.user-dropdown {
  .ivu-dropdown {
    a {
      color: #505050 !important;
      &:hover {
        color: #59a94f !important;
      }
    }
  }
  .c-drop-item {
    padding-top: 0px;
    padding-bottom: 0px;
    display: flex;
    justify-content: center;
  }
}
</style>
