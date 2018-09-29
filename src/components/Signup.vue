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
                  <v-btn
                    icon
                    large
                    :href="Help"
                    target="_blank"
                    slot="activator"
                  >
                    <v-icon large>help</v-icon>
                  </v-btn>
                  <span>help</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                  prepend-icon="person"
                  name="name"
                  label="Name"
                  id="name"
                  type="text"
                  :rules="[rules.required, rules.name]"
                  v-validate="'required'">
                  </v-text-field>

                  <v-text-field
                  prepend-icon="email"
                  name="email"
                  label="Email Id"
                  type="email"
                  v-validate="`required|email`"
                  >

                  </v-text-field>
                  <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  v-model="password"
                  v-validate="`required`"
                  ref="password">
                </v-text-field>
                  <v-text-field
                  prepend-icon="lock"
                  name="cpassword"
                  label="Confirm Password"
                  id="cpassword"
                  type="password"
                  v-validate="'confirmed:password'"
                >
                  </v-text-field>
                  <v-card-actions>

                    <v-btn
                    large
                    depressed
                    block
                    color="primary"
                    >Sign Up</v-btn>
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
      }
    },
    computed: {
    }
  }
  </script>
