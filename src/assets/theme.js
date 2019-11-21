import { createMuiTheme } from '@material-ui/core/styles';

// Cadmium Green: #12693C
// Rifle Green: #3D4D2F
// Silver Sand: #BDC1C9
// Asparagus: #84AD5B
// Bone: #D9E3C8

const palette = {
  primary: { main: '#09d3ac' },
  secondary: { main: '#81C784' },
  text: {
    primary: '#282c34',
    secondary: 'white',
  },
};
const themeName = 'Caribbean Green De York Death Adder';

export default createMuiTheme({ palette, themeName });
