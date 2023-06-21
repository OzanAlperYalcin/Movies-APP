import store from '@/store'
import { _setTheme } from '.'

export const setTheme = (theme) => store.dispatch(_setTheme(theme))