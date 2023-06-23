<template>
    <div>
      <div class="grid-container">
        <div v-for="(pedido, index) in pedidos" :key="index" class="card">
          <h3>{{ pedido.nome }}</h3>
          <p>{{ pedido.descricaoCombo || pedido.descricaoPorcao }}</p>
          <p>Status: {{ pedido.status }}</p>
          <p>Número do Pedido: {{ pedido.numeroPedido }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { usePedidoStore } from '../store/pedidoStore'; // Importa a store do Pinia
  
  const pedidoStore = usePedidoStore(); // Instancia a store do Pinia
  
  const pedidos = pedidoStore.pedidos; // Obtém a lista de pedidos da store
  const fetchPedidos = pedidoStore.fetchPedidos; // Chama a action para buscar os pedidos da API
  
  fetchPedidos(); // Chama a action para buscar os pedidos ao montar o componente
  </script>
  
  <style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Define 4 colunas na grade */
    gap: 20px; /* Define um espaçamento entre os cards */
  }
  
  .card {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 4px;
  }
  </style>
  