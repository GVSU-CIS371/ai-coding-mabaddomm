<template>
  <div>
    <h1>Live Prices</h1>
    <div class="grid">
      <div class="stock" v-for="stock in stocks" :key="stock.symbol">
        <h3>{{ stock.symbol }}</h3>
        <p>{{ stock.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const stocks = [
  { symbol: 'AAPL', price: 175 },
  { symbol: 'TSLA', price: 250 },
  { symbol: 'AMZN', price: 130 }
]
</script>