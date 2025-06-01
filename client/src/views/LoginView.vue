<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import store from "@/store";

export default defineComponent({
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    async login(){
      const response = await axios.post("http://localhost:5000/auth/login", {
        email:this.email,
        password:this.password,
      });
      this.$router.push("/");
      store.dispatch("user", response.data);
      const user = jwtDecode(response.data); //@ts-ignore
      localStorage.setItem("auth_id", user.user_id);
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
      <div class="auth__panel_links">
        <router-link :to="'/'">Забыли пароль?</router-link>
        <router-link :to="'/registration'">Нет аккаунта?</router-link>
      </div>
      <button @click="login">Войти</button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>