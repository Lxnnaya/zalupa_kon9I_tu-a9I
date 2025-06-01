<script lang="ts">

import {defineComponent} from "vue";
import axios from "axios";
import project from "@/components/project.vue";
import {mapGetters} from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters(['user'])
  },
  components: {project},
  data() {
    return {
      projects: null,
      projectCreateModal: false,
      projectName:'',
      coopProjects:false
    }
  },
  methods:{
    async createProject(){
      const response:any = await axios.post("http://localhost:5000/project/createProject", {
        name:this.projectName,
        user_id: this.user.user_id
      });
      this.projectCreateModal = false;
      //@ts-ignore
      this.projects.push(response.data);
    }
  },
  async created() {
    if (this.user !== null) {
      try {
        const response = await axios.post("http://localhost:5000/project/getProjects", {
          user_id: this.user.user_id
        });
        this.projects = response.data;
      } catch (error) {
        console.error("Ошибка загрузки книг:", error);
      }
    }
  },
  watch: {
    async user(val) {
      if (val !== null) {
        const response = await axios.post("http://localhost:5000/project/getProjects", {
          user_id: this.user.user_id
        });
        this.projects = response.data;
      }
    }
  }
})
</script>

<template>
  <div class="projects__view">
    <div v-if="projectCreateModal" class="project__create_modal">
      <div class="create__modal_row">
        <input v-model="projectName" placeholder="Название">
        <img
            src="data:image/png;base64,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"
            alt="settings--v1">
      </div>
      <div class="create__modal_link">Ссылка для доступа:<span>http:</span></div>
      <button @click="createProject">Создать</button>
    </div>
    <div v-if="projects !== null && projects.length>0">
      <div class="projects__header">
        <div class="projects__search"></div>
        <div class="projects__buttons">
          <div>Мои проекты</div>
          <div>Совместный доступ</div>
        </div>
      </div>
      <div class="project__container">
        <div class="project__table">
          <div>Название</div>
          <div>Дата изменения</div>
          <div>Дата создания</div>
        </div>
        <project
            v-for="project in projects"
            :project="project"
            :key="project.project_id"
        />
      </div>
    </div>
    <div v-if="projects !== null && projects.length === 0">
      <div class="project__offer">
        Попробуйте создать первый проект!
        <button @click="projectCreateModal = true">Создать проект</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>