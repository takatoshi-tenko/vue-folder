import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

const createStore = () => {
  return new Vuex.Store({
    state: function(){
        return {
            message: 'count number.',
            counter: 0,
        };
    },
    mutations: {
      doit: function(state) {
        var n = Math.floor(Math.random() * 10);
        state.counter += n;
        state.message = 'add ' + n + '.';
      },
      reset: function(state) {
        state.counter = 0;
        state.message = "reset now.";
      },
    },
    // plugins: [
    //   createPersistedState(),
    // ],
  })
}

export default createStore
