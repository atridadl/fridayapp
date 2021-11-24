<template>
  <div>
    <a
      v-if="!darkMode"
    >
      <moon-icon
        size="1.5x"
        class="iconButton themeIcon"
        @click="darkMode = true"
      />
    </a>
    <a
      v-else
    >
      <sun-icon
        size="1.5x"
        class="iconButton themeIcon"
        @click="darkMode = false"
      />
    </a>
    <Nuxt />
  </div>
</template>

<script>
import {
  MoonIcon,
  SunIcon
} from 'vue-feather-icons'

export default {
  components: {
    MoonIcon,
    SunIcon
  },
  data: () => ({
    darkMode: false
  }),
  watch: {
    darkMode () {
      if (this.darkMode) {
        localStorage.setItem('theme', 'dark')
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        localStorage.setItem('theme', 'light')
        document.documentElement.setAttribute('data-theme', 'light')
      }
    }
  },
  mounted () {
    const theme = localStorage.getItem('theme')

    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      this.darkMode = true
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      this.darkMode = false
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

:root {
    --bg-color: #ffffff;
    --text-color: #35495e;

    --button-color: #ffffff;
    --button-text-color: #35495e;
    --button-border-color: #35495e;
    --button-hover-color: #35495e;
    --button-text-hover-color: #ffffff;
    --button-border-hover-color: #ffffff;

    --card-background-color: #ffffff;
    --card-border-color: #35495e;
    --card-text-color: #35495e;
}
[data-theme="dark"] {
    --bg-color: #35495e;
    --text-color: #ffffff;

    --button-color: #35495e;
    --button-text-color: #ffffff;
    --button-border-color: #ffffff;
    --button-hover-color: #ffffff;
    --button-text-hover-color: #35495e;
    --button-border-hover-color: #35495e;

    --card-background-color: #ffffff;
    --card-border-color: #ffffff;
    --card-text-color: #35495e;
}

body {
  background-color: var(--bg-color);
}

legend,label,h1,h2,h3,h4,h5,h6,p {
  color: var(--text-color);
}

svg {
  display: inherit;
}

/* Attempting to make this look reasonable on mobile */
@media only screen and (min-width: 768px) {
  .subtitle {
    font-weight: 300;
    font-size: 36px;
    color: var(--text-color);
    padding-bottom: 15px;
    word-wrap: normal;
    max-width: 40vw;
    margin: auto;
  }

  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: var(--text-color);
    letter-spacing: 1px;
  }
}

@media only screen and (max-width: 768px) {
  .subtitle {
    font-weight: 300;
    font-size: 24px;
    color: var(--text-color);
    padding-bottom: 15px;
    word-wrap: normal;
    max-width: 40vw;
    margin: auto;
  }

  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 64px;
    color: var(--text-color);
    letter-spacing: 1px;
  }
}

.iconButton {
  color: var(--button-text-color);
}

.iconButton:hover {
  filter: invert(0.5);
  cursor: pointer;
}

.navIcon {
  position: absolute;
  top: 10px;
  left: 10px;
}

.themeIcon {
  position: absolute;
  top: 10px;
  right: 10px;
}

.button {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid var(--button-border-color);
  color: var(--button-text-color);
  background-color: var(--button-color);
  text-decoration: none;
  padding: 10px 30px;
}

.button:hover {
  border: 1px solid var(--button-border-hover-color);
  color: var(--button-text-hover-color);
  background-color: var(--button-hover-color);
}
</style>
