import axios from 'axios';
import { ref } from 'vue';

const getMovie = () => {
 const movie = ref({});
 const movieImages = ref([]);
 const movieVideo = ref({});
 const error = ref("");
 const loading = ref(false);
 
 const loadMovie = async(id) => {
   console.log("passed id " + id);
   loading.value = true;
   axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=26f0eed9969ead4a3f4b73785cca8e70&append_to_response=images,videos`)
    .then(res => {
        movieVideo.value = res.data.videos.results[0]
        movie.value = res.data;
        movieImages.value = res.data.images.backdrops.slice(0, 9);
        loading.value = false;
        console.log(res);
    }).catch(err => {
        error.value = err.message;
        loading.value = false;
    });
 }

 return { movie, movieImages, movieVideo, loading, loadMovie };
}

export default getMovie;