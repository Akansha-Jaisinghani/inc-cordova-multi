<template>
  <v-container>
    <v-layout>
      <v-flex>
          <v-bottom-nav
            :active.sync="bottomNav"
            :value="true"
            absolute
            color="transparent">
                <v-btn
                  class="btn-item"
                  :to="`${item.link}`"
                  v-for="item in buttonitem"
                  :key="item.link"
                  flat light>
                          <span>{{item.title}}</span>
                          <v-icon>{{item.icon}}</v-icon>
                </v-btn>
          </v-bottom-nav>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
  export default {
    data () {
      return {
        bottomNav: 'home',
        buttonitem:[
          {icon:'home',link:'home',title:'Home'},
          {icon:'shopping_cart',link:'cart',title:'Cart'},
          {icon:'account_circle',link:'account',title:'Account'},
        ]
      }
    }
  }
</script>
<style media="screen">
  .btn-item {

  }
</style>
