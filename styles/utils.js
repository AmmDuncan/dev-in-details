export const primary = (value) => (props) => props.theme?.palette.primary[value];

export const grey = (value) => (props) => props.theme?.palette.grey[value];

export const fontSize = (value) => (props) => props.theme.typography.fontSizes[value];

export const media = (direction, value) => (props) => props.theme.media[direction](value);
