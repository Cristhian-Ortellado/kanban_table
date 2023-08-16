<script setup>
const props = defineProps({ type: String });
</script>
<template>
  <div class="my-4">
    <span
      :class="{
        'text-pink-500 bg-pink-100': type == 'bug',
        'text-yellow-600 bg-yellow-100': type == 'feature',
      }"
      class="h-6 my-10 p-3 text-xs font-semibold rounded-full"
    >
      <slot></slot>
    </span>
  </div>
</template>
