<script lang="ts">
 import {defineComponent} from "vue";
 import axios from "axios";
 import router from "@/router";

 export default defineComponent({
   data(){
     return{
       email:'',
       password:'',
       passwordConfirm:''
     }
   },
   methods:{
     async registration(){
       const response = await axios.post("http://localhost:5000/auth/registration", {
         email:this.email,
         password:this.password,
         passwordConfirm:this.passwordConfirm
       });
       if(response.data.success){
         router.push('/login')
       }
     }
   }
 })
</script>

<template>
  <div style="position: relative;width: 100%;height: 100vh;">
    <div class="auth__panel">
      <div class="auth__panel_name">Edu<span>Shelf</span></div>
      <div class="auth__panel_title">Крупнейшая база учебников машиностроения</div>
      <div>
        <input placeholder="Эл.почта" v-model="email">
      </div>
      <div>
        <input placeholder="Пароль" v-model="password">
      </div>
      <div>
        <input placeholder="Подтвердите пароль" v-model="passwordConfirm">
      </div>
      <div class="auth__panel_links">
        <router-link :to="'/login'">Уже есть аккаунт?</router-link>
      </div>
      <button @click="registration">Зарегестрироваться</button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>