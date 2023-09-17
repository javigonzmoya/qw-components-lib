const PRE = {
  COLOR: { label: 'Color', match: 'color' },
  FONTFAMILY: { label: 'FontFamily', match: 'font-family' },
  FONTSIZE: { label: 'FontSize', match: 'font-size' },
  FONTWEIGHT: { label: 'FontWeight', match: 'font-weight' },
  LINEHEIGHT: { label: 'LineHeight', match: 'line-height' },
  LETTERSPACING: { label: 'LetterSpacing', match: 'letter-spacing' },
  SPACING: { label: 'Spacing', match: 'spacing' },
  BORDER: { label: 'Border', match: 'border' },
  OPACITY: { label: 'Opacity', match: 'opacity' },
  SHADOW: { label: 'Shadow', match: 'shadow' },
};

const getPresenter = (value) => {
  if (value.includes(PRE.COLOR.match)) {
    return PRE.COLOR.label;
  } else if (value.includes(PRE.FONTFAMILY.match)) {
    return PRE.FONTFAMILY.label;
  } else if (value.includes(PRE.FONTSIZE.match)) {
    return PRE.FONTSIZE.label;
  } else if (value.includes(PRE.FONTWEIGHT.match)) {
    return PRE.FONTWEIGHT.label;
  } else if (value.includes(PRE.LINEHEIGHT.match)) {
    return PRE.LINEHEIGHT.label;
  } else if (value.includes(PRE.LETTERSPACING.match)) {
    return PRE.LETTERSPACING.label;
  } else if (value.includes(PRE.SPACING.match)) {
    return PRE.SPACING.label;
  } else if (value.includes(PRE.BORDER.match)) {
    return PRE.BORDER.label;
  } else if (value.includes(PRE.OPACITY.match)) {
    return PRE.OPACITY.label;
  } else if (value.includes(PRE.SHADOW.match)) {
    return PRE.SHADOW.label;
  } else {
    return 'Others';
  }
};

export const getTokensDoc = (value) => {
  const presenter = getPresenter(value);
  return `/**
      * @tokens ${presenter}
      * @presenter ${presenter}
      */\n`;
};

export const END_TOKENS_DOCS = `/**
* @tokens-end
*/`;
