<template>
  <v-container pt-2 pb-0 pl-4 pr-4>
    <v-flex>
      <v-card
        height="140px"
        hover="true">
        <v-layout>
          <v-flex>
            <v-img
              class="image_product"
              src="http://torchesdesignstudio.com/wp-content/uploads/2016/04/dummy-post-square-1-thegem-blog-masonry.jpg">
            </v-img>
          </v-flex>
          <v-flex>
            <v-card-title>
              <div>
                <div class="product_name">Product_1</div>
                <div class="product_price">Rs. 50.00</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-container>
</template>

<style>
  .image_product {
    margin: 2.5px;
    height: 135px;
    width: 150px;
  }
  .product_name {
    font-size: 25px;
    margin-bottom: 20px;
  }
  .product_price {
    font-size: 18px;
  }
</style>
