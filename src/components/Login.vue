<template>
    <v-container>
      <v-layout>
        <v-flex>
          <br/><br/>
          <v-text-field
            ref = "email"
            v-model = "email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field><br/>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <br/><br/><br/>
          <v-btn large block depressed color="primary">Log in</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        show1: true,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Minimum 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      }
    }
  }
</script>
