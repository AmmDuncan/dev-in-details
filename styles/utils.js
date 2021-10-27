export const primary = (value) => (props) => {
  return props.theme?.palette.primary[value];
};

export const fontSize = (value) => (props) => props.theme.typography.fontSizes[value];

export const media = (direction, value) => (props) => props.theme.media[direction](value);
