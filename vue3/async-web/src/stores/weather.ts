import { defineStore } from "pinia";

export interface City {
  name: string;
  q: string;
}

interface State {
  cityList: Map<string, City>;
  selectedCity: City;
  isLoading: boolean;
  weatherDescription: string;
}

export const useWeatherStore = defineStore({
  id: "weather",
  state: (): State => {
    return {
      cityList: new Map<string, City>(),
      selectedCity: {
        name: "",
        q: "",
      },
      isLoading: true,
      weatherDescription: "",
    };
  },
  getters: {},
  actions: {
    prepareCityList() {
      this.cityList.set("Osaka", {
        name: "大阪",
        q: "Osaka",
      });
      this.cityList.set("Kobe", {
        name: "神戸",
        q: "Kobe",
      });
      this.cityList.set("Himeji", {
        name: "姫路",
        q: "Himeji",
      });
    },
    async receiveWeatherInfo(id: string) {
      this.selectedCity = this.cityList.get(id) as City;
      const weatherInfoUrl = "https://api.openweathermap.org/geo/1.0/direct";
      const params: {
        q: string;
        appId: string;
      } = {
        q: this.selectedCity.q,
        appId: "84c24117ac7cbebfe1b2825e73829b62",
      };
      const queryParams = new URLSearchParams(params);
      const urlFull = `${weatherInfoUrl}?${queryParams}`;
      console.log(urlFull);
      const response = await fetch(urlFull);
      const weatherInfoJSON = await response.json();
      const weatherArray = weatherInfoJSON.weather;
      const weather = weatherArray[0];
      this.weatherDescription = weather.description;
      this.isLoading = false;
    },
  },
});
