<script setup>
import ImageOrPlaceholder from '../../ImageOrPlaceholder.vue';
const props = defineProps(['movie', 'genres']);
</script>

<template>
    <router-link :to="{ name: 'MoviesShow', params: { id: movie['id'] } }">
        <image-or-placeholder :result="movie" size="w200" my_key="poster_path" />
    </router-link>
    <div class="mt-2">
      <div class="text-sm text-gray-500 truncate dark:text-gray-400">{{ genres }}</div>
    </div>
</template>