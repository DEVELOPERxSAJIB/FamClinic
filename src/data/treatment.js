import treatment1 from "../assets/images/treatment/treatment-1.jpg";
import treatment2 from "../assets/images/treatment/treatment-2.jpg";
import treatment8 from "../assets/images/treatment/treatment-8.jpg";
import treatment9 from "../assets/images/treatment/treatment-9.jpg";
import treatment10 from "../assets/images/treatment/treatment-10.jpg";
import treatment11 from "../assets/images/treatment/treatment-11.jpg";
import treatment12 from "../assets/images/treatment/treatment-12.jpg";
import treatment13 from "../assets/images/treatment/treatment-13.jpg";
import botox from "../assets/images/treatment/botox.jpg";
import fillers from "../assets/images/treatment/fillers.jpg";
import treatment15 from "../assets/images/treatment/treatment-15.jpg";
import treatment16 from "../assets/images/treatment/treatment-16.jpg";
import treatment17 from "../assets/images/treatment/treatment-17.jpg";
import treatmentLemon from "../assets/images/treatment/treatment-lemon.jpg";

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
    subcategory: [
      {
        name: "Full face and neck",
        price: "100",
        duration: "",
      },
      {
        name: "Sideburns",
        price: "35",
        duration: "",
      },
      {
        name: "Upper lip",
        price: "35",
        duration: "",
      },
      {
        name: "Onderlip",
        price: "35",
        duration: "",
      },
      {
        name: "Jawline",
        price: "35",
        duration: "",
      },
      {
        name: "Chin",
        price: "35",
        duration: "",
      },
      {
        name: "Cheeks",
        price: "35",
        duration: "",
      },
      {
        name: "Eyebrows",
        price: "35",
        duration: "",
      },
      {
        name: "Hals",
        price: "35",
        duration: "",
      },
      {
        name: "Vrouwen",
        price: "230",
        duration: "",
      },
      {
        name: "Manen",
        price: "300",
        duration: "",
      },
      {
        name: "Armpits",
        price: "40",
        duration: "",
      },
      {
        name: "Hands",
        price: "20",
        duration: "",
      },
      {
        name: "Upper arms",
        price: "45",
        duration: "",
      },
      {
        name: "Lower arms",
        price: "45",
        duration: "",
      },
      {
        name: "Full arms",
        price: "80",
        duration: "",
      },
      {
        name: "Shoulders",
        price: "40",
        duration: "",
      },
      {
        name: "Upper back",
        price: "40",
        duration: "",
      },
      {
        name: "Lower back",
        price: "40",
        duration: "",
      },
      {
        name: "Full back",
        price: "70",
        duration: "",
      },
      {
        name: "Chest",
        price: "45",
        duration: "",
      },
      {
        name: "Abdomen",
        price: "45",
        duration: "",
      },
      {
        name: "Chest and Abdomen",
        price: "80",
        duration: "",
      },
      {
        name: "Navel line",
        price: "20",
        duration: "",
      },
      {
        name: "Upper legs",
        price: "60",
        duration: "",
      },
      {
        name: "Lower legs",
        price: "60",
        duration: "",
      },
      {
        name: "Foots",
        price: "20",
        duration: "",
      },
      {
        name: "Full legs",
        price: "100",
        duration: "",
      },
      {
        name: "Brazilian",
        price: "50",
        duration: "",
      },
      {
        name: "Bikini line",
        price: "30",
        duration: "",
      },
      {
        name: "Buttocks",
        price: "50",
        duration: "",
      },
      {
        name: "Buttocks line",
        price: "30",
        duration: "",
      },
      {
        name: "Gehele BIkini",
        price: "80",
        duration: "",
      },
    ],
  },
  {
    id: "2",
    name: "Cleansing",
    slug: "cleansing",
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
    subcategory: [
      {
        name : "Basic Cleansing",
        price: "60",
        duration: "",
      },
      {
        name : "Deep Cleansing",
        price: "57",
        duration: "",
      },
      {
        name : "Acne treatment",
        price: "150",
        duration: "",
      },
      {
        name : "Dermapen",
        price: "130",
        duration: "",
      },
      {
        name : "Bio Peeling",
        price: "125",
        duration: "",
      },
      {
        name : "Algen Peeling",
        price: "130",
        duration: "",
      },
      {
        name : "Chemische Peeling",
        price: "150",
        duration: "",
      },
      {
        name : "Carbonic Peeling",
        price: "130",
        duration: "",
      },
      {
        name : "Fruitzuur Peeling",
        price: "130",
        duration: "",
      },
    ],
  },
  {
    id: "3",
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
    subcategory: [
      {
        name: "For hair loss",
        price: "130",
        duration: "",
      },
      {
        name: "Under-eye",
        price: "125",
        duration: "",
      },
      {
        name: "Face",
        price: "130",
        duration: "",
      }
    ],
  },
  {
    id: "4",
    name: "Plasma Treatments",
    slug: "plasma-treatments",
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
    subcategory: [
      {
        "name" : "Face",
        "price": "150",
        "duration": ""
      },
      {
        "name" : "Hair loss",
        "price": "150",
        "duration": ""
      },
      {
        "name" : "Gold PRP",
        "price": "175",
        "duration": ""
      }
    ],
  },
  {
    id: "5",
    name: "Tattoo Removal",
    slug: "tattoo-removal",
    image: treatment11,
    price: "250",
    duration: "2 hr",
    description:
      "Advanced laser technology to safely remove tattoos of various sizes and colors.",
    benefits: ["Gradual fading", "Minimal risk of scarring."],
    subcategory: [
      {
        name: "1 tot 10 centimeter",
        price: "40",
        duration: "",
      },
      {
        name: "10 tot 30 centimeter",
        price: "80",
        duration: "",
      },
      {
        name: "5 tot 50 centimeter",
        price: "100",
        duration: "",
      }
    ],
  },
  {
    id: "6",
    name: "Cryolipolysis",
    slug: "cryolipolysis",
    image: treatment8,
    price: "100",
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
    id: "14",
    name: "Lemon Bottle Behandeling",
    slug: "lemon-bottle-behandeling",
    image: treatmentLemon,
    price: "125",
    duration: "",
    description:
      "A non-invasive fat-dissolving treatment designed to contour and refine body shape by targeting stubborn fat deposits.",
    benefits: [
      "Effectively reduces localized fat",
      "Non-surgical and minimally invasive",
      "Enhances body contours with natural-looking results",
      "Promotes a smoother, more toned appearance",
    ],
    subcategory: [],
  },  
  {
    id: "7",
    name: "Teeth Whitening",
    slug: "teeth-whitening",
    image: treatment13,
    price: "80",
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
    id: "8",
    name: "Mole & Cyst Removal",
    slug: "mole-cyst-removal",
    image: treatment12,
    price: "25",
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
    id: "9",
    name: "Botox",
    slug: "botox",
    image: botox,
    price: "40",
    description:
      "Non-invasive injectables that smooth wrinkles and restore volume to the face.",
    benefits: [
      "Smooths fine lines",
      "restores youthful volume",
      "provides natural-looking enhancements",
    ],
    subcategory: [
      { name: "1 zone", price: "90", duration: "" },
      { name: "2 zones ", price: "170", duration: "" },
      { name: "3 zones", price: "250", duration: "" },
    ],
  },
  {
    id: "10",
    name: "Fillers",
    slug: "fillers",
    image: fillers,
    price: "40",
    description:
      "Non-invasive injectables that smooth wrinkles and restore volume to the face.",
    benefits: [
      "Smooths fine lines",
      "restores youthful volume",
      "provides natural-looking enhancements",
    ],
    subcategory: [
      { name: "Desolving", price: "130", duration: "" },
      { name: "1 ML", price: "200", duration: "" },
      { name: "2 ML", price: "380", duration: "" },
      { name: "3 ML", price: "460", duration: "" },
      { name: "4 ML", price: "740", duration: "" },
    ],
  },
  {
    id: "11",
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
    id: "12",
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
    id: "13",
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
      { name: "Nail Repair", price: "05", duration: "10 min" },
      { name: "Gel Polish - Pedicure", price: "60", duration: "1 hr" },
    ],
  },

];

export default treatments;
