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
      const response = await axios.post("http://localhost:5000/book/getBook", {
        book_id: this.$route.params.book_id,
      });
      this.book = response.data;
      const filePath = `http://localhost:5000/static/pdf/${response.data.pdf}`; // Путь на вашем сервере
      const viewer = "https://mozilla.github.io/pdf.js/web/viewer.html";

      // передаём файл через URL параметр
      this.pdfViewerUrl = `${viewer}?file=${encodeURIComponent(filePath)}`;
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
