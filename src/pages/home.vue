<template lang="html">
  <v-app>
    <titlebar/>
    <login/>
    <bottomnavigation/>
  </v-app>
</template>

<script>
/* eslint-disable */
import bottomnavigation from '@/components/BottomNavigation.vue'
import titlebar from '@/components/Titlebar.vue'
import signup from '@/components/Signup.vue'
export default {
  components:{
    bottomnavigation,
    titlebar,
    signup
  }
}
</script>

<style lang="css">
</style>
