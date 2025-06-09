<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  props: {
    book: Object
  },
  methods:{
    async deleteBook(){
      const response = await axios.post("http://localhost:5000/book/deleteBook", {
        //@ts-ignore
        book_id: this.book.book_id,
      });
      this.$emit("deleteBookFromList",response.data.book_id);
    }
  }
})
</script>

<template>
  <div class="book">
    <img v-if="book.cover !== undefined" :src="require('./root/zalupa_kon9I_tu-a9I/server/static/img' + book.cover)" alt="">
    <div class="book__stats">
      <div class="book__name">{{ book.name }}</div>
      <div class="book__authors">{{ book.authors }}</div>
    </div>
    <router-link :to="{name:'book',params:{book_id:book.book_id},}">
      <button>Читать</button>
    </router-link>
    <button @click="deleteBook">Удалить</button>
  </div>
</template>

<style scoped lang="scss">

</style>