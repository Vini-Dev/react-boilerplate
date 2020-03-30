const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export default {
  mobile: `(min-width: ${size.mobileS}px) and (max-width: ${size.tablet}px)`,
  desktop: `(min-width: ${size.tablet}px) and (max-width: ${size.desktop}px)`,
};
