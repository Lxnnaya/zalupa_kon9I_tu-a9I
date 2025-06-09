<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import Book from "../components/book.vue";
import {mapGetters} from "vuex";

interface BookType {
  book_id: number;
  name: string;
  authors: string;
  cover: string;
  pdf: string;
}

export default defineComponent({
  components: {Book},
  data() {
    return {
      name: '',
      authors: '',
      books: [] as BookType[],
      cover: null as File | null,
      pdf: null as File | null,
      booksCreateMenuPosition: false
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    handleFileUploadPdf(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files) {
        const file = input.files[0];
        if (file.type === 'application/pdf') {
          this.pdf = file;
        } else {
          alert("Загрузите файл PDF.");
        }
      }
    },
    deleteBookFromList(book_id: string) {
      //@ts-ignore
      this.books = this.books.filter((book: { book_id: string }) => book.book_id !== book_id);
    },
    handleFileUploadCover(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files) {
        const file = input.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/png') {
          this.cover = file;
        } else {
          alert("Загрузите изображение (JPEG или PNG).");
        }
      }
    },
    async createBook() {
      if (!this.name || !this.authors || !this.pdf || !this.cover) {
        alert("Пожалуйста, заполните все поля и загрузите файлы.");
        return;
      }

      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("authors", this.authors);
      formData.append("pdf", this.pdf);
      formData.append("cover", this.cover);

      try {
        const response = await axios.post("http://localhost:5000/book/createBook", formData);
        this.books.push(response.data);
        alert("Книга успешно добавлена!");
      } catch (error) {
        alert("Ошибка загрузки книги.");
      }
    },
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:5000/book/getBooks");
      this.books = response.data;
    } catch (error) {
      console.error("Ошибка загрузки книг:", error);
    }
  }
})
</script>

<template>
  <div class="books">
    <div :style="booksCreateMenuPosition ? { bottom: '-5vh' } : { bottom: '-33vh' }" class="create__menu_swapping">
      <div @click="booksCreateMenuPosition = !booksCreateMenuPosition" class="create__menu_img">
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACx0lEQVR4nO3d3+ffVRwH8O8qS2v6aUoyyWS6yUgkYqSLiIjRxYguYhdd7KKL3ewquqh8L7oY36tddVNXXXUREYkkkkiSmbbEstVq1doeefPZ1fqe91W93l6f5+MveHq++fw473NeZ2MjIiIiIiIiIhrBzXgD53ARJ3BLda61gJ143/VOVGdrDzfhPf/ul+p8reFGvGN756sztoUbcNLYW9U5W8IObM2U/8H0xVydtWv5b8+U/zFurc7aEl6fKf8T7K7O2RJemyn/c9xZnbMlHJ8p/wvcVZ2zJRydKf9L3F2dsyW8MlP+N7i3OmdLeAlXB+V/i/uqc7aEF3FlUP4pPFCdsyUcwt+D8k/jweqcLeF5XB6U/yP2V+dsCc/hr0H5P+Hh6pwt4Wn8MSj/ZxyoztkSnsKlQfnn8Wh1zpbwBH4dlH8Bj1XnbAmPT2+tBuX/hierc7aEA6vP9e38joPVOVvCI6vdC9v5E89U52wJ+1e/5UflP1udsyU8hDOD8qd/v4eqc7aEffhhpvwXqnO2hL34flD+tOh2uDpnS7gf3w3Kn5abX67O2RLuwdcz5R+pztkS9uArY69W52wJd6x2KIwcq87ZEm7HZzPlH6/O2RJuw6cz5b9ZnbMl7MJHM+VvVudsaTqJgg9nyt+a9nVWZ+16NGjaiZzyF7pZ9uS0l78k3DrA2UH5705HiDYiD6CtfAQVy5fwAuRn6ALkj9gCZCliAbIYtwBZjl6AvJBZgLySXIC8lF8A2ZZSTzZm1ZOtifVkc2492Z5eTw5o1JMjSvXkkF49OaZaTw5q15NRBfVkWEc9GVdTTwY21ZORZfVkaF89GVtZTwa31pPRxfVkeHf5A9iR8fXLeAhbMydzcoHDAq4w2fxPQ6w785f4XKjOuO7XWF3M0dj/5yHszEVuyzgqtbkag3ntKsNd1bkiIiIiIiIiNtbSP3lOGpF87908AAAAAElFTkSuQmCC"
            alt="less-than">
      </div>
      <div class="books__create_menu">
        <input v-model="name" placeholder="Название" type="text">
        <input v-model="authors" placeholder="Авторы" type="text">
        <input @change="handleFileUploadCover" type="file">
        <input @change="handleFileUploadPdf" type="file">
        <button @click="createBook">Отправить</button>
      </div>
    </div>
    <div class="books__search">
      <img
          src="data:image/png;base64,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"
          alt="search--v1">
      <input placeholder="Найти учебник или текст" type="text">
    </div>
    <div class="books__container">
      <book
          v-for="book in books"
          :book="book"
          :key="book.book_id"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.create__menu_swapping{
  position:fixed !important;
  right:0 !important;
}
</style>
