<template>
  <div class="mx-auto">
    <div class="w-full max-w-xs mx-auto mt-8">
      <div class="alert" v-if="errorMessage!==''">{{errorMessage}}</div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="sendRegister">
        <h1 class="text-gray-700 font-bold mt-4 mb-8 text-xl">Registrasi</h1>
        <!-- Username -->
        <div class="mb-4">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="username"
            >Nama</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
        </div>
        <!-- Password -->
        <div class="mb-4">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="password"
            >Password</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
          />
        </div>
        <!-- Full Name -->
        <div class="mb-4">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="username"
            >Nama Lengkap</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
        </div>
        <!-- Phone Number -->
        <div class="mb-4">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="username"
            >Nomer Telfon</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
        </div>
        <!-- Email -->
        <div class="mb-6">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="username"
            >Email</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
        </div>
        <div class="flex items-center justify-between">
          <router-link to="/dashboard" class="w-full">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Registrasi
            </button>
          </router-link>
        </div>
        <div class="mt-4">
          <router-link to="/login" class="text-blue-500 font-bold"
            >Batal</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
  export default {
    name: "Register",
    data(){
      return{
        full_name: "",
        username: "",
        password: "",
        email: "",
        phone_number: "",
      }
    },
    created() {
    // this.reqLogin();
    },
    computed: {
    ...mapState("Auth", ["errorMessage"]),
    },
    methods:{
      ...mapActions("Auth", ["reqRegister"]),
      sendRegister(e){
         e.preventDefault();
         const error = [];
         if (this.full_name === "") error.push("Full name Required");
         if (this.username === "") error.push("Username Required");
         if (this.password === "") error.push("Password name Required");
         if (this.email === "") error.push("email name Required");
         if (this.phone_number === "") error.push("Phone number Required");
         if (error.length > 0) {
           alert(error.join(",\r\n"));
           } else {
             const payload ={
               full_name: this.full_name,
               username: this.username,
               password: this.password,
               email: this.email,
               phone_number: this.phone_number,
             };
             this.reqRegister(payload)
          }
        return false;
      }
    }
  };
</script>
