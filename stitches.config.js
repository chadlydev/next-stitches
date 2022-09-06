import { createStitches } from '@stitches/react';

import {
  BORDER,
  TYPOGRAPHY,
  SIZE,
  SPACE,
  BREAKPOINTS,
  UTILS,
  Z_INDICES,
  SHADOWS,
  TRANSITIONS,
  COLORS
} from '@tokens';

// Stitches Config
export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config
} = createStitches({
  theme: {
    colors: { ...COLORS.light },
    space: { ...SPACE },
    sizes: { ...SPACE, ...SIZE },
    fontSizes: { ...TYPOGRAPHY.sizes },
    fonts: { ...TYPOGRAPHY.fonts },
    fontWeights: { ...TYPOGRAPHY.weights },
    lineHeights: { ...TYPOGRAPHY.lineHeights },
    letterSpacings: { ...TYPOGRAPHY.letterSpacings },
    borderWidths: { ...BORDER.widths },
    borderStyles: { ...BORDER.styles },
    radii: { ...BORDER.radius },
    shadows: { ...SHADOWS },
    zIndices: { ...Z_INDICES },
    transitions: { ...TRANSITIONS }
  },
  media: { ...BREAKPOINTS },
  utils: { ...UTILS },
  prefix: 'stitches'
});

// Light Theme
export const lightTheme = createTheme({
  colors: { ...COLORS.light }
});

// Dark Theme
export const darkTheme = createTheme({
  colors: { ...COLORS.dark }
});

// CSS Reset
export const globalReset = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },

  '*': {
    m: '0'
  },

  'html, body': {
    h: '$full'
  },

  body: {
    backgroundColor: '$appBg',
    color: '$textContrast',
    ff: '$inter',
    lh: '$md',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'auto',
    textRendering: 'optimizeSpeed'
  },

  'img, picture, video, canvas, svg': {
    d: 'block',
    maxW: '$full'
  },

  'input, button, textarea, select, a': {
    font: 'inherit'
  },

  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word'
  },

  '#__next': {
    isolation: 'isolate'
  },

  'html:focus-within': {
    scrollBehavior: 'smooth'
  },

  '@media (prefers-reduced-motion:reduce)': {
    'html:focus-within': {
      scrollBehavior: 'auto'
    },
    '*, *::before, *::after': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important'
    }
  }
});
