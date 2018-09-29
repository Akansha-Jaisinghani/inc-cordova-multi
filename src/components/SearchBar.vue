<template>
  <v-container pb-0 class="search_back">
    <v-layout>
      <v-flex>
        <v-text-field
          placeholder="Search for a product"
          hint="For example fruits, vegetables, packed foods"
          append-icon="search"
          type="text"
          outline
          single-line
          color="#1e88e5"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
  .search_back {
    background-color: white;
  }
</style>
