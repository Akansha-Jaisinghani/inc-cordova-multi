<template lang="html">
  <div class="">
  <v-toolbar fixed flat>
    <v-btn v-if="showbackarrow" outline color="blue"><font-awesome-icon icon="arrow-left"/>&nbsp;Back</v-btn>
    <v-spacer></v-spacer>
    <v-btn outline color="blue">Help&nbsp;<font-awesome-icon icon="question-circle" /></v-btn>
  </v-toolbar>
  <v-content>
    <router-view></router-view>
  </v-content>
</div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
