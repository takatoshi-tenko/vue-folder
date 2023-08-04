import { ref, computed } from "vue";
import { defineStore } from "pinia";

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

interface State {
  counter: number;
}

export const useCounterStore = defineStore({
  id: "counter",
  state: (): State => {
    return {
      counter: 0,
    };
  },
  getters: {
    doubleCount: (state): number => {
      return state.counter * 2;
    },
  },
  actions: {
    incrementCount(): void {
      this.counter++;
    },
  },
});
