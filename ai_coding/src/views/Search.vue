<template>
  <div class="search">
    <h1>Search</h1>

    <input v-model="query" placeholder="Search stocks..." />

    <div class="results">
      <div v-for="stock in filtered" :key="stock.symbol" class="item">
        {{ stock.symbol }}
        <button @click="add(stock)">+ Watch</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const query = ref('')

const stocks = [
  { symbol: 'AAPL' },
  { symbol: 'TSLA' },
  { symbol: 'AMZN' }
]

const filtered = computed(() => {
  if (!query.value) return []
  return stocks.filter(s =>
    s.symbol.toLowerCase().includes(query.value.toLowerCase())
  )
})

const add = (stock) => {
  console.log('Add to watchlist:', stock)
}
</script>

<style scoped>
.search {
  padding: 20px;
}

input {
  padding: 10px;
  width: 300px;
}

.results {
  margin-top: 15px;
}

.item {
  margin-bottom: 10px;
}
</style>