<template>
  <v-layout>
    <v-img
                 :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                 :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                 aspect-ratio="1"
                 class="grey lighten-2"
               >
                 <v-layout
                   slot="placeholder"
                   fill-height
                   align-center
                   justify-center
                   ma-0
                 >
                 </v-layout>
               </v-img>
 </v-layout>
</template>
