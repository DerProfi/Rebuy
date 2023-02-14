<template>
  <div>
    <button>{{ title }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<style scoped></style>
