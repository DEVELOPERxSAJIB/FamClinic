import headerEn from "./en/components/header.json";
import footerEn from "./en/components/footer.json";
import testimonialEn from "./en/components/about/testimonial.json";
import homeEn from "./en/home.json";
import aboutEn from "./en/about.json";

import headerNl from "./nl/components/header.json";
import footerNl from "./nl/components/footer.json";
import testimonialNl from "./nl/components/about/testimonial.json";
import homeNl from "./nl/home.json";
import aboutNl from "./nl/about.json";

// Merge the contents of home.json into global.json
const resources = {
  en: {
    global: {
      ...headerEn,
      ...footerEn,
      ...testimonialEn,
      ...homeEn,
      ...aboutEn,
    },
  },
  nl: {
    global: {
      ...headerNl,
      ...footerNl,
      ...testimonialNl,
      ...homeNl,
      ...aboutNl,
    },
  },
};

export default resources;
