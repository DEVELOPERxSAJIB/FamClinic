import headerEn from "./en/components/header.json";
import footerEn from "./en/components/footer.json";
import testimonialEn from "./en/components/about/testimonial.json";
import teamMemberEn from "./en/components/about/teamMember.json"
import homeEn from "./en/home.json";
import aboutEn from "./en/about.json";
import treatmentEn from "./en/treatment.json"
import priceEn from "./en/price.json"
import contactEn from "./en/contact.json"

import headerNl from "./nl/components/header.json";
import footerNl from "./nl/components/footer.json";
import testimonialNl from "./nl/components/about/testimonial.json";
import teamMemberNl from "./nl/components/about/teamMember.json"
import homeNl from "./nl/home.json";
import aboutNl from "./nl/about.json";
import treatmentNl from "./nl/treatment.json"
import priceNl from "./nl/price.json"
import contactNl from "./nl/contact.json"



// Merge the contents of home.json into global.json
const resources = {
  en: {
    global: {
      ...headerEn,
      ...footerEn,
      ...testimonialEn,
      ...teamMemberEn,
      ...homeEn,
      ...aboutEn,
      ...treatmentEn,
      ...priceEn,
      ...contactEn,
    },
  },
  nl: {
    global: {
      ...headerNl,
      ...footerNl,
      ...testimonialNl,
      ...teamMemberNl,
      ...homeNl,
      ...aboutNl,
      ...treatmentNl,
      ...priceNl,
      ...contactNl,
    },
  },
};

export default resources;
