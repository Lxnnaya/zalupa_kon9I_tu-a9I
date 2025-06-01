<script lang="ts">
 import {defineComponent} from "vue";

 export default defineComponent({
   props: {
     project:Object
   }
 })
</script>

<template>
  <router-link :to="{
          name: 'project',
          params: {
            project_id: project.project_id,
          },
        }">
    <div class="project">
      <img class="project__favorite"
           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFc0lEQVR4nO2dTYgcRRTHn4nREIMoEvCQBPToRUXwooJgrh7D5uQxh1XwGE92YJ16jZvdpJOpN3QuXtTAHBNYdHPxoHiKJwUPKokHwSSbqBv8CCQjVTWjbKZ7pmuqeqq65/2gLssm/X9V71W9el3VC8AwDMMwDMMwDMMwTOxk2aNAYh2k2NKNcA36ySOhZS0OJM4A4WBHk3g6tKzFIE8Pg8R/xgdA3IWzK8+Eltd+CM+Pdf7/LQ8tbzG9nzgKYvD+AUdBSO8njoIYvH/AURDS+4mjYL7eL8Vd3YoH4nxNahaMfKL35xMHh/cFHqApHTxtgJgavX8ER0FNUMXphaOgBnLLqYWjwDNkubhyFHgkn3Fh5SjwBM2YWnIUeCB3TCs5Chwhx40VR4EDuadNFUfBjJCnsgJHQZVOSvYB4YsgxRKQSECKC14La5MLeBeGz1zSGpSW1kL4JHTTV4HwOBCmIPESEP4IhPdqLS3blrAJb4HEL4cFvhMg8U0gfBaSZBdEjzqTo8Qa0Se0EcoYKf6w6ICB94Ka3Uuckib+BonfAWF/6EBvAeFL0E32e+3DuXizbZOOJWX7KLBtc4ga7d36INTtGg0ZlHjfGWf9ErP568Zb+uRenu9xHwB14mz+BtzWxw19GGAcaD2MA+GahwHQZy/9i5PiPhBeBSk2QeI5kGIZCI+AXDnkLrrMlpVD5hliefjMzaGG+zXZeMNdNOFNNyHiDhBeiTr1ywtSYqXZaHcZhOvu4qQ4Vcmbpbj2nzcTvq09TS2CTSdPD2tblE2jqDG2VomaVT9HwaXYmDIAm/r3FoVM98nmlD7Z8NcnZiG7OOWBn8FHyV5oO/1QfcGDAOH7ILiAgERjezRC5kh0NkcnaBFtjVbYItkYvcBFsK0xQttsU+MEt9GWxgpvkw1NNqDfYO2NN6TfQM0eCngbURTwmqTVu2Ek1qP87kTjO7/6INwMLdG8v21j51cbhN9Dy9MaWtv5I8wbpaIBuBJamnn1WKjtCLQG84qyyMs+CS0NCD8t0bYMrYHE2WIj8f3Q0vRL+GJtGbSGsvenUiyFlgaUHiuZgj6H1qBOERQZ2f3ghdDS9HGU4gG4Cq3AnLkZPzuqjnXkEZwNil2fM8rLi6efaxALhD8Xauzh89B4mjDHyojXqNqyDJUZxYI5zRdnllZbnq32BrHQE+9Eu0+JcqeZpQeBsDes46jW0z9r407dicHgISDcLjRulg47J57SN3NI/FkwXaibMDl0P3x6xmPrRdPkHW1DY/FlWDfZb64Aid9KPHXn/60G6XTyRDBHiQbX0M6TfSDxXZDi1+kdPzZ/b4HEk5Alj1d6lhTfFG8WO29AYylb3NTCPIk836MvAkr8xbrjxwfiho6eaa8TzaWMuJMFb+mdSk2LSJJdQHgUpPjBuePHm9psHYckebhE68no02Vr1Gar0Kj02FjHS7EEUnxv0aH3QOLHutlck1XPUM968CppEzaMtRThSK8TZalqWbusi2gjep3n9EVqq8t24lsdbaNkoHVFuUlFrtXVx6DXeQUIv7Cbz9Wl6M5rpc/spS8PL4/brBFf64VWaSoawMYW5cqKcCbdu2zn8eIr6OHrlZ+tflf9G/uo2o62bG5N+Zw6mHmasGW26a0lRbnSIlyl9pPOWPr93c46zCbrqOUC34KiXHkRbvZU0QWXFLeRRbmynaXLZskHs23yGliUKzvwtLPjt4DS93QGMm/UM9Wzq30LI/wBMs/fmNgGKVasCmZ1oTQoLWUZkLdvPswb84mYBxezv/TPs84BiI2sc8D8dT6lsY7PzswbM9euDUP8OkhBjSjtZulBrdVoVn8q8ZSfDy8xDMMwDMMwDMMwDDDwL+9Crm9JGRzmAAAAAElFTkSuQmCC"
           alt="star--v1">
      <div class="project__name">Курсовая работа</div>
      <div class="project__creation_time">13.04.2025/15:57</div>
      <div>13.04.2025/15:55</div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>