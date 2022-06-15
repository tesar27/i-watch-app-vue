<script setup>
 import getMovie from "./composables/getMovie";
 import { onBeforeMount, ref } from "vue";
 import getGenres from "./composables/getGenres";
 import getMovieGenres from "./composables/getMovieGenres";
  import ImageOrPlaceholder from "../ImageOrPlaceholder.vue";

 const props = defineProps(["id"]);
 const { movie, movieImages, movieVideo, loading, loadMovie } = getMovie();
 const { genres, loadGenres } = getGenres();

 onBeforeMount(() => {
  loadMovie(props.id);
  loadGenres();
  //loadMovieCredits(props.id);
 });

</script>
<template>
  <div v-if="loading">Loading...</div>
  <div class="border-b">
    <div class="container flex flex-col px-4 py-16 mx-auto md:flex-row">
        <div class="flex-none">
            <image-or-placeholder
             :result="movie"
             size="w400"
             my_key="poster_path"
            />
        </div>
        <div class="md:ml-24">
            <h2 class="mt-4 text-4xl font-semibold md:mt-0">
                {{ movie["title"] }}
            </h2>
            <div class="flex flex-wrap items-center mt-4">
                <span class="ml-1"> {{ movie["vote_average"] * 10 }}% </span>
                <span class="mx-2"> | </span>
                <span>
                </span>
            </div>

            <p class="mt-8 dark:text-gray-700 text-gray-300">{{ movie["overview"] }}</p>

            <div class="mt-12">
                <h4> Featured Crew</h4>
                <div class="flex mt-4">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>