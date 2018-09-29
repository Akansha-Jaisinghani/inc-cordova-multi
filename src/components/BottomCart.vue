<template>
  <v-layout>
    <v-flex>
      <v-bottom-nav
        height="100px"
        :value="true"
        fixed
        color="#f5f5f5">
          <v-flex>
            <div class="cart">
              <center>
                <v-icon style="font-size: 31px;" color="blue">shopping_cart</v-icon>
                <span class="cart_name">Your Cart</span>
                <span class="cart_quantity">({{n}})</span>
              </center>
            </div>
          </v-flex>
      </v-bottom-nav>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        n: 10
      }
    }
  }
</script>

<style>
  .cart_name {
    color: #1e88e5;
    font-size: 30px;
    margin-left: 15px;
  }
  .cart_quantity {
    color: #1e88e5;
    font-size: 25px;
    margin-left: 15px;
  }
  .cart {
    margin-top: 25px;
  }
</style>
