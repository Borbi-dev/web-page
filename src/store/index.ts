import { createStore } from "vuex";

export default createStore({
  state: {
    url: 'http://localhost:1337',
  },
  getters: {},
  mutations: {},
  actions: {
    async fetch({state}, {link})
    {
      try {
        const response = await fetch(`${state.url}${link}?populate=*`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
          }
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
    
        const json = await response.json();
        return json;
      } catch (error) {
        alert('Try again later!');
        throw error;
      }
    },
  },
  modules: {},
});
