<template>
  <!-- 找不到路由預設會走這一支 -->
  <div>
    <h1 v-if="error.statusCode === 404">您的頁面不存在</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>
