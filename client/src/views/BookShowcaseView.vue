<template>
  <div class="pdf-wrapper">
    <iframe
        :src="pdfViewerUrl"
        class="pdf-viewer"
        frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pdfViewerUrl: "",
      book: null,
    };
  },
  async created() {
    try {
      const response = await axios.post("http://localhost:5000/book/getBook", { // Запрос к серверу на express для получения информации об учебнике
        book_id: this.$route.params.book_id,
      });
      this.book = response.data; // Объект с информацией об учебнике
      const filePath = `http://localhost:5000/static/pdf/${response.data.pdf}`; // Путь к папке с учебниками на сервере
      const viewer = "https://mozilla.github.io/pdf.js/web/viewer.html"; // Путь от библиотеки,позволяющей вставлять файлы формата pdf на страницу

      this.pdfViewerUrl = `${viewer}?file=${encodeURIComponent(filePath)}`; // Путь к файлу pdf на сервере,требуюемый для библиотеки
    } catch (error) {
      console.error("Ошибка при загрузке данных книги:", error);
    }
  },
};
</script>

<style scoped>
.pdf-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.pdf-viewer {
  width: 100%;
  height: 100%;
}
</style>
