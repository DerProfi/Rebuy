<template>
  <div class="container">
    <button class="button">{{ title }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<style scoped>
.container {
  display: inline;
}
</style>
