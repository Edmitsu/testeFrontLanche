import { defineStore } from 'pinia';

export const comboStore = defineStore('combos', {
  state: () => ({
    combos: [],
  }),
  actions: {
    async fetchCombos() {
      try {
        const response = await fetch('http://localhost:3000/combos'); 
        const data = await response.json();
        this.combos = data;
      } catch (error) {
        console.error('Erro ao buscar combos:', error);
      }
    },
  },
});
