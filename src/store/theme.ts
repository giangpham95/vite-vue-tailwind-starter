import * as pinia from 'pinia'

export const useTheme = pinia.defineStore('theme', {
  state: () => ({ theme: '' }),
  actions: {
    setTheme(theme: string) {
      this.theme = theme
      localStorage.setItem('theme', theme)
    },

    initTheme() {
      const cacheTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : false
      const userPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (cacheTheme) this.setTheme(cacheTheme)
      else if (userPreferDark) this.setTheme('dark')
      else this.setTheme('light')
    },

    toggleTheme() {
      switch (localStorage.theme) {
        case 'light':
          this.setTheme('dark')
          break
        default:
          this.setTheme('light')
          break
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
/* if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
} */
