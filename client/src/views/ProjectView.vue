<template>
  <div v-if="!isLoading" class="word-editor">
    <div
        class="editor"
        contenteditable="true"
        ref="editor"
        @input="onInput"
    ></div>
    <!-- <div class="toolbar">
      <button @click="wrapSelection('bold')">Жирный</button>
      <span>Лист {{ currentPage + 1 }} / {{ pages.length }}</span>
      <button @click="prevPage" :disabled="currentPage === 0">←</button>
      <button @click="nextPage" :disabled="currentPage === pages.length - 1">→</button>
    </div> -->
    <div class="toolbar">
      <div class="tools__buttons"><img
          src="data:image/png;base64,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"
          alt="settings--v1">
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACeUlEQVR4nO2dz24TMRCH5wBvAefCU/aAsFtKQBw8Uh4BVIkT9D2AxwBE/5zIwcgbDhCSbZfV+rddf580p4ySmfl5PF5FWpsBAAAAAAAAAADclXTy1Dy8Mg9fzMONeczLtnBjKX42jytbP3+iWyjr9UNL8bV53OiLElVWcl/Z8fGD+sX3eDGDAuRZWAof64qwXfn6xH1Wtqq45ze97eQDtjE/PaogAKvfDomQwsvpBehOO/LVlmdp5XQ0vQDxWp6oz9RSuKohQH8QS8fV+csDECPPXx6AGHn+8gDEyPP/nwDSs8eWwnk3pIp5fN97Zk4D/YfEN7aA906AbTG/7fH93n021n9ofO0JEM57/N+N9h8aX4MCXPX4X472HxofAvxRhBR+jPZHgFs6oBugBwv6drQ/AtwmwOlRN0D/LehXe3PyaLQ/AtxhCJXTSxmgZQ8vVlZyXzHTQP+/BGQGLBu/b6egpeHq/OUBiJHnLw9AjDz/sUNu6TY56gR95oYAEQHkq9DpAH0hnC1IXwwXGDMgIoB8FXrLHaD+vqmRx4sAGQGU0AFiEGCH2kMUAXZAAPEpyOkABPCWj6FOByCA0wGZUxBbUG5zBtRGHi8CZARQQgeIQYAdeA7gOcCaHsLOkzACOB2QeRJmC8rMAOcfMYZwc6eg2sjjRYCMAEroADEIIAYBxCCAGARoXYD+Fyq1bpfTC8Cri/NhAcKnCgLE1QxWWp6lpfBiegHKtR28vj7vKf7POq+vL9AFeU8HnFk1ynUdKX6Qt7zPxEotqt8jU35w2wkt36ax6VZ+9eLvzoRyc8T2aqcW7ha4/p3rWb09HwAAAAAAAAAAbAH8Arde6tWGpwg/AAAAAElFTkSuQmCC"
            alt="web-design"></div>
      <div class="toolbar__row">

        <img @click="prevPage"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABu0lEQVR4nO3dvUoDURDF8RH8QH3oBYt7Cxkkkrswr6AWNlYq+DIWCoJFrFcSK0GjTXI2O/8fLIRtMpwzWba5xAwAAAD4mfuxtdJbqx/Wl4X1ta3uYQuWQff1wfo6fL/K5Ta+Pjf/Lfw6WCtv6vHyht+vrlf1iJnDH6yVqh4zb/h9ubWIA/WoUw3/fv3m1zubzY7Uo06PE74O4QsRvhDhCxE+4efkvO0QfkrO5hN+Ss7mE35KzuYTfkrO5hN+Ss7mE35KzuYTfkrO5hN+Ss7mE35KzuYTfkrO5hN+Ss7mE35KzuYTfkr+z5MpV92hetRpanVG+CrDsGetvHMsaLQFlBsOxW1aK/P1j6B6bV23v/E50oruxPr6RAnqElp5/OOANI8jSpi64JegF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgF5SgRwkjQAkjQAkjQAkjQAkjcH5+ykmdXSih1TP1mMlLKM/qEXOX0MqLerzcJbR6oR4t29vR/OsweVmsPvOHnqIT/csLAADYzvsEG/eT/bmYGb8AAAAASUVORK5CYII="
             alt="forward--v1">
        <input v-model="currentPage">
        <div>из</div>
        <div>{{ pages.length }}</div>
        <img @click="nextPage"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABl0lEQVR4nO3dsUoDQRSF4auFUfCdt5sBIciiM02K9Ke0EF9IsLBSg+UKayUqdnvW3P+D1A73v64BWSYCAAAATtvtRbSyi1YP0etztHIV47ghylJa2UWv05dPK/dEWMIwnEYvb98CEGFBrbz8GIAISwWo178GIMICxnEzP/OJYKThLHq5+yPCQ+yHc+cxj5uI4Cci+IkIfiKCn4jgJyL4iQh+IoKfiOAnIviJCH4igp+I4Cci+IkIfiKCn4jgJyL4iQh+IoKfiOAnIviJCH4igp+I4Cci+IkIfkRYASKsABFWgAgrQIQV4E2dfxOhuo+Z+3HU6pP7iMn/HpRH9xFzP4J6Le5jHqeR12V9+BpqxPCNGL4Rwzdi+EYMn+HnJP4VyfBTEpvP8FMSm8/wUxKbz/BTEpvP8FMSm8/wUxKbz/BTEpvP8FMSm8/wUxKbz/BTEpvP8FMSm8/wUxKbz/BTGnkzxavVG27Rc96m2uZ7hLlH0hjgnUs8nXrZc4Oq0+1wOUf4/E14na+35Upzg2k6cfxYAAAQuXwAW86RfBeSYUUAAAAASUVORK5CYII="
             alt="forward--v1">
      </div>
      <button @click="saveProject">Сохранить</button>
      <div class="tools__buttons">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEpklEQVR4nO2dTY8UVRSGT4wbjbJQoyhu/APgT1ASRUWQjbBzZfxg49JlK06fU6ATM3SfU05g5S9QULfCTwD5GD82gitNRoNI/Ipj7q1Bm2Gqq7hVXXeq7/skN5n0pDt9z7117lv3vnWaCAAAAAAAAABSJl/YQcqHSfkLUrlMxtd9c3+71yx7k0ZHH4v9NeeP5Q8eIpOMVP4gk7WK9heZLNP42PbYX3s+sOx5Uv6lRuA3tp/Jsj2xv36/ybPXSfnvgOAXrXjva7G70U8s27OeTsKCPzkImu2N3Z1+MT62PTDtlKejE8NHYnerPyh/1GLwbzaN3a3+SE1rIfXcnor+pOWFR2N3b+ujfLg6mPIVqeyj8eA+39zfxhdqDMIbsbu39VH5vDL4J4/ef9v73GtVg6ByOkqfeoXJ19NnMr9Y/l7eXzEAlzvtSy9RvjY1iC7llLE02FaRgq512pe5HICTm6Sfm2AAWkB5pSKN7Ct971heQgpqgvIhMlmtWAMubHoVuNmvchGLcAjjhSfJ+Gx9Xe/UDu/3A+Gam/lVwYcM3YQRP0gmeaMNN9yIBTAY3O13KZV/mnng/187RiFfdf4w2e1vproKfNFWyd5/mJJmKXucVD7uOPDFdnTOL1CyLA/uJZUjZHyj8+AXm3qvUuKy8krwzPUL9PAAqfwQlHaUn6UkGd+prNzY+CzlsusWtaSyVOsqctvOyuM0c/6osay84q+aMtyplrOeqHxKyt8UthT5lYwvkfFn/gw5yT3/QVNZ6Wd2NnWjDZSQy1Nkci5cpchpOv7eE2UfD2YlK93e/JifK/18UEIhK99pICtXSeUtn7aSo9Rbyd+R8Sm/wE2zb2gLstIt1En6bFzna7kN+IaXfJOBymVXY1nppGmShHor3c2PDg/MVFbOPU29lRY8491VdMSvF8nSlrfS7vjKgaycgbdyrUbg3Rbz7tjzbp69lWslLWFZ2aW30jbO+JRlZSxvpf23yCYsK2N6K83vsScsK6N7K3ml0770EngrIwNv5Tx7KxkpqPEi3MRbaViE25Ghod5KKzk0BxPgRmwLoGwzvxO2ybSErYhN7BuuVkJng7BGxuexGTdJnj2D7ejYFF6dOAcyxu+mfSBz68FMQDriq42PJJW/pzw7GDsEW2VNUO+brAya/EYqH9KJxQfaO5SXM5CtDuebdI/rOx+l91N6X+X1dZ/lJ8X/pphataEtxakznB80ZHHxHjJ5uxg8yNb41kTlf8KuCGcMQ0mx5uQw58ZnMLiLVF4hkx/DZSvs6c0ZuSdZ2BrJVpOXKx/Q8D5W+RZ1Q8vwslXOBMtW5S9JhzuDHlFyjhA3CVAjjtx2yMH1WR0mW929iz8k4qsBn4G6oS09TxDeUDe0RdnaZBBQN3QCHT69vnXd5dWAuqHtytaghrqhJc8Vu01ClKuJig53eulZO6+jbuhscDdhVSXLUDc0srEMdUNnDLytkVHUDY09ACsVawDqhvbW24ri3ZG9rShfXwP8gMOcelsVdUNjeltRNzSatzX5uqFxva2J1w2N6m1NuW7orH7M0/j3GinH+V/xY57deVtRNxQAAAAAAABArfIvedIGEOAIG2UAAAAASUVORK5CYII=" alt="share">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC20lEQVR4nO3dO4gTURQG4N8HioU2CnYiNr6wshDdwkYEi7UQEQsRsbKzEhshIMw9E3DBsLknht3CTkjjC0RFQbC1EEtBLAS3ENTdVXFFHZnZ7BZZs0kmk0zu3P+D04XcyX/mzAxMMgGIiIiIiIhGUS0Yg8ozWPkOlWj1Mt8WXxseyXuzixO+Nb86B99SVhZwyxzOe/PdZ83znsNfboJ5mvfmu0+TQ0q6BqjM57357tPU4S8WsQFuU04AG+A15QSwAV5TTgAb4DXlBLABXlNOABvgNeUEsAFeU04AG+A15QSwAV5TTgAb4DXlBLABXlNOABvgNeUEsAFeU04AG+A15QSwAV5TTgAb4LRaeAZqZvrek3XYZWZQDU7DeU6GL82fOMlHOM+a97kHqanrFZyn5uYIBBn1XuYNVHbBeY3GOli57dyeP2m2ojBKpbVQmXZkz3+JSmkLCieK1jhwOHqB6fJmFJqV6yMQdLSirHmEiYlN8ILK1RE77DxApbIRXlG5MiJ7/h2USuvhJWsuQeVPjuFPJRcIXrNyDtb8zqEBNYa/RMOzqR5Jk77Ky2tTk5VxqPk5hPDDpSWplYYnoObHAMO/tmJNamGDo7BmLuOT7V9Yudy6FK3+jLjZjMKPT/AX265FbagchDWf+g7fyvl2S1AntWBfclMkVfiyABuc6rgGdaDl3VDzobcGxFdT5mSnt6Zu1WQnVN51GX78kL9jXb83dake7oA1bzsc87/yga2DNBVsb94q/F8DPqNqDg10fQJQv7ENVh627PmvUQ/2MJ9h3l2rBWOoygVYcxyN0gaGT0RERERERESUkWq4P/n+ZFb3aYtds7ByP7mbl4nJ8EDyb0T5f7DIsZpPsutb/F9c+X+YyNF6ksHPi4b6lcGoUBVnF2fIBoijDeAhKOqzAY/RN56Eo5Thz2VzEo7Fl1Rq7kHlS+7HVR35ijO6CxvuzSZ8IiIiIiJCwfwD8eHF8Ux4/NsAAAAASUVORK5CYII=" alt="download--v2">
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import router from "@/router";

export default {
  data() {
    return {
      fullContent: '',
      currentPage: 1,
      project: null,
      isLoading: true,
    };
  },
  watch: {
    currentPage() {
      this.updateFullContent();
      this.renderPage();
    }
  },
  async created() {
    try {
      const response = await axios.post("http://localhost:5000/project/getProject", {
        project_id: this.$route.params.project_id
      });
      this.project = response.data;
      this.fullContent = response.data.text || '';
      this.isLoading = false;
      this.$nextTick(() => {
        this.renderPage();
        this.$refs.editor.addEventListener('keydown', this.handleTab);
      });
    } catch (err) {
      console.error("Ошибка при загрузке проекта:", err);
    }
  },
  beforeDestroy() {
    this.$refs.editor?.removeEventListener('keydown', this.handleTab);
  },
  methods: {
    handleTab(e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        const sel = window.getSelection();
        const range = sel.getRangeAt(0);
        const tabNode = document.createTextNode('\u00A0\u00A0\u00A0\u00A0');
        range.insertNode(tabNode);
        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode);
        sel.removeAllRanges();
        sel.addRange(range);
        this.onInput();
      }
    },
    parseToHTML(text) {
      if (!text) return '';
      return text
          .replace(/<bold>(.*?)<\/bold>/gi, '<span class="bold">$1</span>')
          .replace(/<italic>(.*?)<\/italic>/gi, '<span class="italic">$1</span>');
    },
    parseToTags(html) {
      return html
          .replace(/<span class="bold">(.*?)<\/span>/gi, '<bold>$1</bold>')
          .replace(/<span class="italic">(.*?)<\/span>/gi, '<italic>$1</italic>');
    },
    renderPage() {
      const raw = this.pages[this.currentPage];
      this.$refs.editor.innerHTML = this.parseToHTML(raw);
    },
    updateFullContent() {
      const rawHTML = this.$refs.editor.innerHTML;
      const rawWithTags = this.parseToTags(rawHTML);
      const pages = [...this.pages];
      pages[this.currentPage] = rawWithTags;
      this.fullContent = pages.join('---PAGEBREAK---');
    },
    onInput() {
      this.updateFullContent();
      this.$nextTick(() => {
        const el = this.$refs.editor;
        if (el.scrollHeight > el.clientHeight) {
          this.splitOverflowingPage();
        }
      });
    },
    splitOverflowingPage() {
      const currentHTML = this.parseToTags(this.$refs.editor.innerHTML);
      const textContent = this.$refs.editor.innerText;
      const mid = Math.floor(textContent.length / 2);

      const beforeText = textContent.slice(0, mid);
      const afterText = textContent.slice(mid);

      const pages = [...this.pages];
      pages[this.currentPage] = beforeText;
      pages.splice(this.currentPage + 1, 0, afterText);

      this.fullContent = pages.join('---PAGEBREAK---');
      this.currentPage++;
      this.renderPage();
    },
    wrapSelection(tag) {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;
      const range = selection.getRangeAt(0);
      const selectedText = range.extractContents();

      const span = document.createElement('span');
      span.className = tag;
      span.appendChild(selectedText);

      range.insertNode(span);
      this.onInput();
    },
    prevPage() {
      this.updateFullContent();
      if (this.currentPage > 0) {
        this.currentPage--;
        this.renderPage();
      }
    },
    async saveProject() {
      const response = await axios.post("http://localhost:5000/project/saveProject", {
        project_id: this.$route.params.project_id,
        text: this.fullContent
      });
      if (response.data.status === 200) {
        this.$router.push('/projects')
      }
    },
    nextPage() {
      this.updateFullContent();
      if (this.currentPage < this.pages.length - 1) {
        this.currentPage++;
        this.renderPage();
      }
    },
  },
  computed: {
    pages() {
      return this.fullContent.split('---PAGEBREAK---');
    },
  },
};

</script>

<style>
.word-editor {
  background: #e5e5e5;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
}

.editor {
  width: 794px; /* A4 ширина при 96dpi */
  height: 1123px; /* A4 высота при 96dpi */
  padding: 96px; /* стандартные поля — 2.54 см */
  margin: auto;
  margin-bottom: 5vh;
  border: 1px solid #ccc;
  background: white;
  font-family: 'Times New Roman', serif;
  font-size: 16px; /* 12pt в px */
  line-height: 1.15; /* Word default */
  overflow-y: hidden;
  white-space: pre-wrap;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  tab-size: 4;
}

.editor::before {
  content: "";
  display: block;
  height: 0;
  width: 100%;
  tab-size: 4;
}


.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}
</style>
