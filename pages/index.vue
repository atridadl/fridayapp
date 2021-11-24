<template>
  <div class="container">
    <div>
      <span class="flex intro justify-center">
        <img src="@/assets/logo.svg" alt="">
        <div class="hidden md:block">
          <h1 class="title">
            <b>friday</b>app
          </h1>
        </div>
      </span>
      <h2 class="subtitle intro">
        Lightweight Sprint Reprospective Tool
      </h2>
      <router-link
        to="/retro"
        class="button"
      >
        Enter
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.intro {
  animation: 1s intro;
}

@keyframes intro {
  from {
      opacity: 0;
  }
  50% {
      transform: scale(0.5);
      opacity: 0.25;
  }
  75% {
      transform: scale(1.25);
      opacity: 0.50;
  }
  to {
      transform: scale(1);
      opacity: 1;
  }
}
</style>
