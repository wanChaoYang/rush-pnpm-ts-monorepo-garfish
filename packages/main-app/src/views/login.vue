<template>
  <div>login</div>
  <button @click="handlerPage">登录</button>
</template>
<script lang="tsx" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const handlerPage = () => {
  router.push("/apps");
};
</script>
