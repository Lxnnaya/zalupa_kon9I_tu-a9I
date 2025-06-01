<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<style lang="scss">
@import 'styles/style.scss';
</style>
<script lang="ts">
import MainLayout from "./layouts/MainLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";
import {mapGetters} from "vuex";
import axios from "axios";
import store from "@/store";

export default {
  components: {
    MainLayout,
    AuthLayout,
  },
  computed: {
    ...mapGetters(["user"]),
    //@ts-ignore
    layout() {
      //@ts-ignore
      return (this.$route.meta.layout || "auth") + "-layout";
    },
  },
  async created() {
    const authId = localStorage.getItem("auth_id");
    if (authId) {
      try {
        const response = await axios.post(`http://localhost:5000/auth/connect`, {
          user_id: authId,
        });
        store.dispatch("user", response.data);
      }catch (e){
        console.error(e);
      }
    }
  }
}
</script>