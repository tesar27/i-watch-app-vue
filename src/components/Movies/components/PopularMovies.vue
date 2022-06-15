<script setup>
 import { defineComponent, onMounted } from "vue";
 import MovieCard from './MovieCard.vue';
 import getPopularMovies from '../composables/getPopularMovies';
 import getGenres from '../composables/getGenres';
 import getMovieGenres from '../composables/getMovieGenres';

 const { popularMovies, loading, loadPopularMovies } = getPopularMovies();
 const { genres, loadGenres } = getGenres();
 
 console.log(popularMovies);

 onMounted(() => {
    loadPopularMovies();
    loadGenres();
 });


</script>
<template>
 <div class="container px-4 pt-10 mx-auto">
  <div>
   <h2 class="pb-6 text-lg font-semibold tracking-wider uppercase text-myyellow"> Popular Movies</h2>
   <div v-if="loading"> Loading... </div>
   <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    <div 
      class="mt-3"
      v-for="popularMovie in popularMovies"
      :key="popularMovie.id"
    >
     <MovieCard
      :movie="popularMovie"
      :genres="getMovieGenres(genres, popularMovie.genre_ids)"
     />
    </div>  
   </div>
  </div>
 </div>       
        
</template>