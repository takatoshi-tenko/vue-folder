<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useWeatherStore } from "@/stores/weather";
import type { City } from "@/stores/weather";

const weatherStore = useWeatherStore();
weatherStore.prepareCityList();

const cityList = computed((): Map<string, City> => {
  return weatherStore.cityList;
});
</script>

<template>
  <div>
    <section>
      <h2>都市リスト</h2>
      <ul>
        <li v-for="[id, city] in cityList" :key="id">
          <RouterLink :to="{ name: 'WeatherInfo', params: { id: id } }">
            {{ city.name }}の天気
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>
