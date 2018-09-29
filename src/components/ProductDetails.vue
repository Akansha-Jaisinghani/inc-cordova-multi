<template>
  <v-layout justify-center>
    <v-flex xs12 sm8>
        <v-img
          src="https://images.unsplash.com/photo-1460400355256-e87506dcec4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83fa71ea4b3e18340f85c88633a8c3f0&auto=format&fit=crop&w=750&q=80"
          height="175px"
        ></v-img>
        <v-card-title class="cyan darken-1">
          <span class="headline white--text">Product Name</span>
          <v-spacer></v-spacer>
          <span class="headline white--text">₹ Product-price</span>
        </v-card-title>

        <v-flex outline background-color="blue" text-xs-center>

            Quantity
            <div class="quantity-toggle">
              <button @click="decrement()">&mdash;</button>
              <input type="text" :value="quantity" readonly>
              <button @click="increment()">&#xff0b;</button>
            </div>

          <v-overflow-btn
          :items="dropdown_unit"
          label="Kg/Gm/Packets"
          target="#dropdown-example"
          >
          <v-divider inset></v-divider>
        </v-overflow-btn>
          </v-flex>
          <v-flex row justify-center>
            <v-btn
            block
            large
            color="primary">
            Add To Cart
          </v-btn>
          </v-flex>

      </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        quantity: 1,
        dropdown_unit: [
          { text: 'KiloGrams' },
          { text: 'Grams' },
          { text: 'Packets' },
          { text: 'Litres' }
        ]
      }
    },
    methods: {
      increment () {
        this.quantity++
      },
      decrement () {
        if (this.quantity === 1) {
          alert('Negative quantity not allowed')
        } else {
          this.quantity--
        }
      }
    }
  }
</script>
<style>
.quantity-toggle {
  text-align: center;
}
  input {
    border: 0;
    border-top: $border;
    border-bottom: $border;
    width: 2.5rem;
    text-align: center;
    padding: 0 .5rem;
  }

  button {
    border: $border;
    padding: .5rem;
    background: #f5f5f5;
    color: #888;
    font-size: 1rem;
    cursor: pointer;
  }

</style>
