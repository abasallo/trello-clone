import { createTheme } from '@material-ui/core/styles'

export const customMUITheme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#FFFFFF',
        margin: '3px',
        '&:hover': {
          backgroundColor: '#E00201',
          color: '#FFFFFF'
        }
      }
    }
  }
})
