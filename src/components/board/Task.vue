<script setup>
import Tag from "./Tag.vue";

//props
defineProps({
  title: String,
  description: String,
  author: String,
  tag: String,
});
</script>
<template>
  <div class="m-2 rounded bg-[#ffff] p-4">
    <!-- Tag -->
    <Tag :type="tag">{{ tag }}</Tag>

    <!-- Title -->
    <h2 class="font-semibold my-2">{{ title }}</h2>

    <!-- Description -->
    <p class="font-light">
      {{ description }}
    </p>

    <h4 class="my-2 font-semibold">Assigned to:</h4>

    <div class="flex gap-5 items-center mt-3 font-normal">
      <img
        class="h-10 rounded-full"
        src="https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512"
        alt=""
      />
      {{ author }}
    </div>
  </div>
</template>
