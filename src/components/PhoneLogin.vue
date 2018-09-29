<template>
    <v-container>
      <v-layout>
        <v-flex>
          <br/><br/>
          <v-text-field
            ref = "Phone"
            prepend-icon="phone"
            type="number"
            v-model = "phone"
            v-validate="`required|digits:10`"
            label="+91-XXX-YYY-ZZZZ"
            required
          >
          </v-text-field><br/>
          <v-text-field
            prepend-icon="key"
            v-model="password"
            name="input-10-1"
            v-validate="`required|digits:4`"
            label="Password"

          ></v-text-field>
          <br/><br>
          <v-btn outline justify-end row depressed color="primary">Log in</v-btn>
          <br/><br/>  <br/><br/>
          <v-btn
          large block depressed color="primary"
          >
            <i class="fas fa-envelope"></i>&nbsp;
            Log in with Email
          </v-btn>
          <v-btn large block depressed color="primary">Create a New Account</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        phone: '',
        password: '',
        show1: true,

      }
    }
  }
</script>
