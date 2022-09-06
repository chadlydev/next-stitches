export const UTILS = {
  // Margin
  m: (value) => ({
    margin: value
  }),
  mt: (value) => ({
    marginBlockStart: value
  }),
  mr: (value) => ({
    marginInlineEnd: value
  }),
  mb: (value) => ({
    marginBlockEnd: value
  }),
  ml: (value) => ({
    marginInlineStart: value
  }),
  mx: (value) => ({
    marginInline: value
  }),
  my: (value) => ({
    marginBlock: value
  }),

  // Padding
  p: (value) => ({
    padding: value
  }),
  pt: (value) => ({
    paddingBlockStart: value
  }),
  pr: (value) => ({
    paddingInlineEnd: value
  }),
  pb: (value) => ({
    paddingBlockEnd: value
  }),
  pl: (value) => ({
    paddingInlineStart: value
  }),
  px: (value) => ({
    paddingInline: value
  }),
  py: (value) => ({
    paddingBlock: value
  }),

  // Background
  bg: (value) => ({
    background: value
  }),
  bgColor: (value) => ({
    backgroundColor: value
  }),
  bgGradient: (value) => ({
    backgroundImage: `linear-gradient(${value})`
  }),

  // Typography
  fs: (value) => ({
    fontSize: value
  }),
  ff: (value) => ({
    fontFamily: value
  }),
  fw: (value) => ({
    fontWeight: value
  }),
  lh: (value) => ({
    lineHeight: value
  }),
  ls: (value) => ({
    letterSpacing: value
  }),
  ta: (value) => ({
    textAlign: value
  }),
  td: (value) => ({
    textDecoration: value
  }),
  tt: (value) => ({
    textTransform: value
  }),
  va: (value) => ({
    verticalAlign: value
  }),

  // Layout, width and height
  w: (value) => ({
    width: value
  }),
  minW: (value) => ({
    minWidth: value
  }),
  maxW: (value) => ({
    maxWidth: value
  }),
  h: (value) => ({
    height: value
  }),
  minH: (value) => ({
    minHeight: value
  }),
  maxH: (value) => ({
    maxHeight: value
  }),
  size: (value) => ({
    width: value,
    height: value
  }),
  d: (value) => ({
    display: value
  }),
  pos: (value) => ({
    position: value
  }),
  radii: (value) => ({
    borderRadius: value
  })
};
