<template lang="html">
  <v-app>
    <titlebar showbackarrow='true'></titlebar>
    <searchbar style="margin-top: 50px"/>
    <v-content>
      <productlist/>
    </v-content>
    <v-footer>
      <bottomcart/>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable */
import bottomcart from '@/components/BottomCart.vue'
import titlebar from '@/components/Titlebar.vue'
import searchbar from '@/components/SearchBar.vue'
import productlist from '@/components/ProductList.vue'
export default {
  components:{
    titlebar,
    searchbar,
    productlist,
    bottomcart
  }
}
</script>

<style lang="css">
</style>
