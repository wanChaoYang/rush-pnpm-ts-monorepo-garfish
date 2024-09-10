<template>
  <div id="frame" class="page-view">
    <h1>父应用顶部</h1>
    <button
      @click="changeMenu(item.url)"
      :key="item.url"
      v-for="item in menuList"
    >
      {{ item.name }}
    </button>
    <div id="subApp"></div>
  </div>
</template>
<script setup lang="ts">
//  import {useRouter} from 'vue-router'
// const router = useRouter()
const menuList = [
  {
    name: "vue子应用",
    url: "/vue-app/home",
  },
  {
    name: "react子应用",
    url: "/react-app/home",
  },
];
const baseUrl = "/apps";
const changeMenu = (url: string) => {
  if (window.Garfish) {
    window.Garfish.router.push({ path: `${baseUrl}${url}`, basename: "/" });
    //  router.push(`${baseUrl}${url}`)
  }
};
</script>
