<template>
<v-app>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-14">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Aapki Seva Mein</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <v-btn icon large :href="Help" target="_blank" slot="activator">
                  <v-icon large>help</v-icon>
                </v-btn>
                <span>Help</span>
              </v-tooltip>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-flex xs12>
                  <v-text-field value="Phone No." readonly></v-text-field>
                </v-flex>

                <v-layout row wrap>
                  <v-flex xs2 sm2>
                    <v-text-field prepend-inner-icon="call" label="+91" single-line readonly outline></v-text-field>
                  </v-flex>

                  <v-flex xs6 sm10 fixed>
                    <v-text-field type="number" label="Enter your No. here" single-line outline v-model="phone" v-validate="`required|digits:10`"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-card-actions>
                  <v-btn large depressed block color="primary">Submit</v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</v-app>
</template>
<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        phone: '',

      }
    },
    computed: {
    }
  }
  </script>
