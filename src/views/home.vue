<template>
  <div class="home" ref="home">
  </div>
</template>

<script setup lang="ts">
import markdownIt from 'markdown-it'
import { onMounted, ref } from 'vue'

const home = ref<HTMLElement | null>(null)


onMounted(async () => {
  const md = markdownIt()
  
  const response = await fetch('/md');
  const result = md.render(await response.text());
  home.value!.innerHTML = result
})


</script>

<style lang="scss" scoped>
.home {
  color: $color-primary;
  width: 100%;
}
</style>