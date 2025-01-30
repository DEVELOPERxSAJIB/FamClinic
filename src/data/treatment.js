import treatment1 from "../assets/images/treatment/treatment-1.jpg";
import treatment2 from "../assets/images/treatment/treatment-2.jpg";
import treatment3 from "../assets/images/treatment/treatment-3.jpg";
import treatment4 from "../assets/images/treatment/treatment-4.jpg";
import treatment5 from "../assets/images/treatment/treatment-5.jpg";
import treatment6 from "../assets/images/treatment/treatment-6.jpg";
import treatment7 from "../assets/images/treatment/treatment-7.jpg";
import treatment8 from "../assets/images/treatment/treatment-8.jpg";
import treatment9 from "../assets/images/treatment/treatment-9.jpg";
import treatment10 from "../assets/images/treatment/treatment-10.jpg";
import treatment11 from "../assets/images/treatment/treatment-11.jpg";
import treatment12 from "../assets/images/treatment/treatment-12.jpg";
import treatment13 from "../assets/images/treatment/treatment-13.jpg";
import treatment14 from "../assets/images/treatment/treatment-14.jpg";
import treatment15 from "../assets/images/treatment/treatment-15.jpg";
import treatment16 from "../assets/images/treatment/treatment-16.jpg";
import treatment17 from "../assets/images/treatment/treatment-17.jpg";

const treatments = [
  {
    id: "1",
    name: "Laser Therapy",
    slug: "laser-therapy",
    image: treatment1,
    price: "100",
    duration: "1 hr",
    description:
      "A highly effective treatment using concentrated beams of light to target various skin concerns, including pigmentation, acne scars, and fine lines.",
    benefits: [
      "Reduces hyperpigmentation",
      "Improves skin texture",
      "Stimulates collagen",
      "Enhances radiance with minimal downtime.",
    ],
    subcategory: [],
  },
  {
    id: "2",
    name: "Basic Cleansing",
    slug: "basic-cleansing",
    image: treatment2,
    price: "50",
    duration: "30 min",
    description:
      "A refreshing facial to remove impurities, makeup residues, and excess oils. Ideal for maintaining everyday skin health.",
    benefits: [
      "Leaves skin feeling fresh",
      "Prevents clogged pores",
      "Maintains a smooth, glowing complexion.",
    ],
    subcategory: [],
  },
  {
    id: "3",
    name: "Deep Cleansing",
    slug: "deep-cleansing",
    image: treatment3,
    price: "80",
    duration: "1 hr",
    description:
      "An advanced treatment that deeply cleanses the skin by removing impurities from within the pores. This includes exfoliation, steaming, and extractions.",
    benefits: [
      "Reduces breakouts",
      "Improves circulation",
      "Gives your skin a healthy glow.",
    ],
    subcategory: [],
  },
  {
    id: "4",
    name: "Dermapen",
    slug: "dermapen",
    image: treatment4,
    price: "120",
    duration: "45 min",
    description:
      "A microneedling treatment that stimulates collagen and elastin production to reduce the appearance of scars, wrinkles, and uneven skin tone.",
    benefits: [
      "Diminishes scars",
      "Improves skin texture",
      "Boosts absorption of skincare products.",
    ],
    subcategory: [],
  },
  {
    id: "5",
    name: "BioPeeling",
    slug: "biopeeling",
    image: treatment5,
    price: "90",
    duration: "1 hr",
    description:
      "A natural exfoliation treatment using botanical ingredients to remove dead skin cells and promote regeneration.",
    benefits: [
      "Brightens dull skin",
      "Reduces pigmentation",
      "Smooths out texture for a refreshed appearance.",
    ],
    subcategory: [],
  },
  {
    id: "6",
    name: "Carbon Peeling",
    slug: "carbon-peeling",
    image: treatment6,
    price: "110",
    duration: "1 hr",
    description:
      'Known as the "Hollywood Peel," this treatment uses a carbon mask and laser to exfoliate the skin and improve its appearance.',
    benefits: ["Reduces oiliness", "Enhances skin clarity", "Minimizes pores."],
    subcategory: [],
  },
  {
    id: "7",
    name: "HydraFacial",
    slug: "hydrafacial",
    image: treatment7,
    price: "130",
    duration: "1 hr",
    description:
      "A multi-step facial that combines cleansing, exfoliation, hydration, and protection, leaving skin nourished and radiant.",
    benefits: [
      "Provides intense hydration",
      "Reduces fine lines",
      "Leaves skin glowing.",
    ],
    subcategory: [],
  },
  {
    id: "8",
    name: "Cryolipolysis",
    slug: "cryolipolysis",
    image: treatment8,
    price: "200",
    duration: "2 hr",
    description:
      "A fat-freezing body contouring treatment that eliminates stubborn fat.",
    benefits: [
      "Non-invasive",
      "Targets localized fat areas",
      "Sculpts body contours without surgery.",
    ],
    subcategory: [],
  },
  {
    id: "9",
    name: "Mesotherapy",
    slug: "mesotherapy",
    image: treatment9,
    price: "150",
    duration: "45 min",
    description:
      "A treatment involving the injection of vitamins and hyaluronic acid into the skin to address aging, pigmentation, and dehydration.",
    benefits: [
      "Deeply hydrates",
      "Rejuvenates",
      "Stimulates collagen production for long-term skin health.",
    ],
    subcategory: [],
  },
  {
    id: "10",
    name: "Plasma Therapy",
    slug: "plasma-therapy",
    image: treatment10,
    price: "180",
    duration: "1 hr",
    description:
      "Uses plasma energy to tighten and rejuvenate skin, and can also promote hair growth in thinning areas.",
    benefits: [
      "Tightens skin",
      "Reduces wrinkles",
      "Stimulates hair growth",
      "Provides a non-surgical solution.",
    ],
    subcategory: [],
  },
  {
    id: "11",
    name: "Tattoo Removal",
    slug: "tattoo-removal",
    image: treatment11,
    price: "250",
    duration: "2 hr",
    description:
      "Advanced laser technology to safely remove tattoos of various sizes and colors.",
    benefits: ["Gradual fading", "Minimal risk of scarring."],
    subcategory: [],
  },
  {
    id: "12",
    name: "Mole & Cyst Removal",
    slug: "mole-cyst-removal",
    image: treatment12,
    price: "220",
    duration: "1 hr",
    description:
      "Safe and efficient removal of moles and cysts for aesthetic or medical reasons.",
    benefits: [
      "Improves appearance",
      "Minimizes irritation",
      "Requires minimal recovery time.",
    ],
    subcategory: [],
  },
  {
    id: "13",
    name: "Teeth Whitening",
    slug: "teeth-whitening",
    image: treatment13,
    price: "150",
    duration: "1 hr",
    description:
      "Professional whitening treatments to remove stains and brighten your smile.",
    benefits: [
      "Removes stubborn stains",
      "Brightens teeth",
      "Boosts confidence.",
    ],
    subcategory: [],
  },
  {
    id: "14",
    name: "Botox & Fillers",
    slug: "botox-fillers",
    image: treatment14,
    price: "300",
    duration: "1 hr",
    description:
      "Non-invasive injectables that smooth wrinkles and restore volume to the face.",
    benefits: [
      "Smooths fine lines",
      "Restores youthful volume",
      "Provides natural-looking enhancements.",
    ],
    subcategory: [],
  },
  {
    id: "15",
    name: "Massages",
    slug: "massages",
    image: treatment15,
    price: "40",
    description:
      "Relax and rejuvenate with a variety of therapeutic massages designed to relieve tension, improve circulation, and promote overall well-being.",
    benefits: [
      "Reduces stress and anxiety",
      "Eases muscle pain and tension",
      "Improves blood circulation",
      "Enhances overall relaxation",
    ],
    subcategory: [
      { name: "Chinese massage", price: "40", duration: "30 min" },
      { name: "Deep Tissue Massage", price: "40", duration: "30 min" },
      { name: "Lomi Lomi Massage", price: "40", duration: "30 min" },
      { name: "Lymphatic Drainage", price: "40", duration: "30 min" },
      { name: "Trigger Point Massage", price: "50", duration: "30 min" },
    ],
  },
  {
    id: "16",
    name: "Eyebrows & Eyelashes",
    slug: "eyebrows-&-eyelashes",
    image: treatment16,
    price: "30",
    description:
      "Enhance your natural beauty with professional eyebrow and eyelash treatments for a more defined, fuller, and polished look.",
    benefits: [
      "Defines and shapes eyebrows",
      "Enhances natural lash volume",
      "Creates a long-lasting polished look",
      "Boosts confidence with minimal daily maintenance",
    ],
    subcategory: [
      { name: "Eyebrow Thread & Tint", price: "30", duration: "30 min" },
      { name: "Eyebrow Tint", price: "20", duration: "20 min" },
      { name: "Eyebrow Threading", price: "15", duration: "15 min" },
    ],
  },
  {
    id: "17",
    name: "Manicure & Pedicure",
    slug: "manicure-&-pedicure",
    image: treatment17,
    price: "30",
    description:
      "Keep your hands and feet looking flawless with expert manicure and pedicure services, designed for both beauty and nail health.",
    benefits: [
      "Strengthens and nourishes nails",
      "Softens skin and cuticles",
      "Enhances overall nail appearance",
      "Provides relaxation and self-care",
    ],
    subcategory: [
      { name: "Russian Manicure (Women)", price: "30", duration: "20 min" },
      { name: "Manicure (Men)", price: "35", duration: "20 min" },
      { name: "Pedicure", price: "40", duration: "30 min" },
      { name: "Nail Repair", price: "5", duration: "10 min" },
      { name: "Gel Polish - Pedicure", price: "60", duration: "1 hr" },
    ],
  },
];

export default treatments;
