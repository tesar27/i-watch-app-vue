<script setup>
import getPopularMovies from '@/composables/Movies'
import MovieCard from '@/composables/Movies/components/MovieCard'

const { popularMovies, loading, loadPopularMovies } = getPopularMovies();

onBeforeMount(() => {
    loadPopularMovies();

});

onMounted(() => {
    window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
            loading.value = true;
            setTimeout(() => {
                loadPopularMovies();
            }, 500);
        }
    };
});

</script>
<template>
    <h1> All Movies </h1>
</template>