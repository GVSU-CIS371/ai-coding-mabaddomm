<template>
  <div class="home">

    <!-- Carousel -->
    <section class="carousel">
      <div class="slide">📈 Track Real-Time Stock Prices</div>
      <div class="slide">🔍 Search and Discover Stocks</div>
      <div class="slide">⭐ Build Your Watchlist</div>
    </section>

    <!-- Signup Strip -->
    <section class="signup">
      <p>Create an account to track your favorite stocks.</p>
      <button>Sign Up</button>
    </section>

    <!-- Feature Cards -->
    <section class="features">
      <div class="card" @click="$router.push('/prices')">
        <h3>Live Prices</h3>
        <p>View real-time stock data</p>
      </div>

      <div class="card" @click="$router.push('/search')">
        <h3>Search</h3>
        <p>Find stocks instantly</p>
      </div>

      <div class="card" @click="$router.push('/watchlist')">
        <h3>Watchlist</h3>
        <p>Track your favorites</p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

/* Carousel */
.carousel {
  display: flex;
  overflow-x: auto;
}

.slide {
  min-width: 100%;
  padding: 60px;
  background: #111;
  color: white;
  text-align: center;
  font-size: 24px;
}

/* Signup */
.signup {
  text-align: center;
  padding: 20px;
  background: #f5f5f5;
}

/* Features */
.features {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.card {
  width: 30%;
  padding: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  text-align: center;
  transition: 0.2s;
}

.card:hover {
  background: #eee;
}
</style>