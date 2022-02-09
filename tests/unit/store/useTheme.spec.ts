import { createPinia, setActivePinia } from 'pinia'
import { useTheme } from '@/store/theme'

function setDarkPreference(dark: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn(() => {
      return {
        matches: dark,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }
    }),
  })
}

describe('Theme Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.removeItem('theme')
  })

  describe('initTheme', () => {
    describe('window.media prefer light', () => {
      beforeAll(() => {
        setDarkPreference(false)
      })

      afterAll(() => {
        jest.fn().mockReset()
      })

      it('Init theme light when localstorage have no cached theme', () => {
        const themeEngine = useTheme()
        themeEngine.initTheme()
        expect(themeEngine.theme).toBe('light')
      })

      it('Init theme light when localstorage have cached theme "light"', () => {
        localStorage.setItem('theme', 'light')
        const themeEngine = useTheme()
        themeEngine.initTheme()
        expect(themeEngine.theme).toBe('light')
      })

      it('Init theme dark when localstorage have cached theme "dark"', () => {
        localStorage.setItem('theme', 'dark')
        const themeEngine = useTheme()
        themeEngine.initTheme()
        expect(themeEngine.theme).toBe('dark')
      })
    })

    describe('window.media prefer dark', () => {
      beforeAll(() => {
        setDarkPreference(true)
      })

      afterAll(() => {
        jest.fn().mockReset()
      })

      it('Init theme light when localstorage have no cached theme', () => {
        const themeEngine = useTheme()
        themeEngine.initTheme()
        expect(themeEngine.theme).toBe('dark')
      })

      it('Init theme light when localstorage have cached theme "light"', () => {
        localStorage.setItem('theme', 'light')
        const themeEngine = useTheme()
        themeEngine.initTheme()
        expect(themeEngine.theme).toBe('light')
      })

      it('Init theme dark when localstorage have cached theme "dark"', () => {
        localStorage.setItem('theme', 'dark')
        const themeEngine = useTheme()
        themeEngine.initTheme()
        expect(themeEngine.theme).toBe('dark')
      })
    })
  })

  describe('toggleTheme', () => {
    it('change to "light" if localstorage.theme is "dark"', () => {
      localStorage.setItem('theme', 'dark')
      const themeEngine = useTheme()
      themeEngine.toggleTheme()
      expect(themeEngine.theme).toBe('light')
    })

    it('change to "dark" if localstorage.theme is "light"', () => {
      localStorage.setItem('theme', 'light')
      const themeEngine = useTheme()
      themeEngine.toggleTheme()
      expect(themeEngine.theme).toBe('dark')
    })

    it('change to "light" if localstorage.theme is null', () => {
      localStorage.removeItem('theme')
      const themeEngine = useTheme()
      themeEngine.toggleTheme()
      expect(themeEngine.theme).toBe('light')
    })
  })
})
