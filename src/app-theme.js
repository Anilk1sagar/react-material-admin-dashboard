import { createMuiTheme } from '@material-ui/core/styles';

const AppTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1A73E8',
    },
    secondary: {
      main: '#131414',
    },
  },
  props: {
    MuiTextField: {
      size: 'small',
      variant: 'outlined',
      margin: 'normal',
      color: 'secondary',
      fullWidth: true
    },
    MuiRadio: {
      color: 'primary',
      size: 'small'
    }
  }
});

export default AppTheme;