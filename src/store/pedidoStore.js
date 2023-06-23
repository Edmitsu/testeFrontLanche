import { defineStore } from 'pinia';

export const pedidoStore = defineStore('pedidos', {
  state: () => ({
    pedidos: [],
  }),
  actions: {
    async fetchPedidos() {
      try {
        const response = await fetch('http://localhost:3000/pedidos'); 
        const data = await response.json();
        this.pedidos = data;
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    },
  },
});
