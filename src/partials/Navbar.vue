<script setup>
import { onBeforeMount, onUpdated, ref, watch } from "vue";


const search = ref("");
const searchbar = ref(null);
const isOpen = ref(false);
const checked = ref();

watch(checked, () => {
    if ("theme" in localStorage) {
        localStorage.theme = checked.value ? "light" : "dark";
    }
});

onBeforeMount(() => {
    checked.value = localStorage.theme === 'light' ? true : false;
});

const updatePage = () => {
    location.reload();
};

</script>
<template>
    <nav class="border-b border-gray-800">
        <div class="container flex flex-col items-center justify-between px-4 py-6 md:flex-row">
            <ul class="flex flex-col items-center md:flex-row ">
                <li class="hover:text-gray-400">
                    <router-link to="/" class="flex items-center space-x-2">
                    Home
                    </router-link>
                    </li>
                <li class="mt-3 md:ml-6 md:mt-0 hover:text-gray-400">
                   <router-link :to="{ name: 'About' }">Movies</router-link>
                </li> 
                <li class="mt-3 md:ml-6 md:mt-0 hover:text-gray-400">Actors</li>
                <li class="mt-3 md:ml-6 md:mt-0 hover:text-gray-400">TV Shows</li>
            </ul>
            <div class="flex flex-col items-center md:flex-row">
                <div class="mt-3 md:ml-4 md:mt-0">
                    <label for="toogleA" class="flex items-center cursor-pointer">
                    <div class="relative">
                        <input 
                        id="toogleA"
                        type="checkbox" 
                        class="sr-only"
                        v-model="checked"
                        @change="updatePage"
                        />
                        <!-- line -->
                        <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                        <!-- dot -->
                        <div
                          class="absolute w-6 h-6 transition bg-mywhite rounded-full shadow dot -left-1 -top-1"
                        ></div>
                    </div>
                    <div class="ml-3 font-medium text-gray-300 light:text-gray-700">
                        <span v-if="checked">Light</span>
                        <span v-else>Dark</span>
                    </div>
                    </label>
                    </div>
                </div>
            </div>
        <hr class="border-1 border-myyellow">
    </nav>
</template>