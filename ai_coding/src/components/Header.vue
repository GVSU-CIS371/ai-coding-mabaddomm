<template>
  <nav class="nav">
    <h2 class="logo">StockApp</h2>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/prices">Prices</router-link>
      <router-link to="/search">Search</router-link>
      <router-link to="/watchlist">Watchlist</router-link>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #222;
  color: white;
}

.links a {
  margin-left: 15px;
  color: white;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}
</style>