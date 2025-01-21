import treatment1 from "../assets/images/treatment/treatment-1.jpg";
import treatment2 from "../assets/images/treatment/treatment-2.jpg";
import treatment3 from "../assets/images/treatment/treatment-3.jpg";

const treatments = [
  {
    id: "1",
    name: "De services",
    slug: "de-services ",
    image: treatment1,
    description: `Onze behandelingen in de categorie "Injectables"`,
    subcategory: [],
  },
  {
    id: "2",
    name: "Laser therapie",
    slug: "laser-therapie",
    image: treatment2,
    description: `Onze behandelingen in de categorie "Injectables"`,
    subcategory: [],
  },
  {
    id: "3",
    name: "Gezicht behandeling",
    slug: "gezicht-behandeling",
    image: treatment3,
    description: `Onze behandelingen in de categorie "Injectables"`,
    subcategory: [
      {
        name: "basis reinigings",
        slug: "basis-reinigings",
      },
      {
        name: "diepte reiniging",
        slug: "diepte-reiniging",
      },
      {
        name: "Dermapen",
        slug: "dermapen",
      },
      {
        name: "BioPeeling",
        slug: "biopeeling",
      },
      {
        name: "Carbon peeling",
        slug: "carbon-peeling",
      },
    ],
  },
  {
    id: "4",
    name: "Hydrafacial",
    slug: "hydrafacial",
    image: treatment3,
    description: `Onze behandelingen in de categorie "Injectables"`,
    subcategory: [],
  },
  {
    id: "5",
    name: "Cryolipolise",
    slug: "cryolipolise",
    image: treatment2,
    description: `Onze behandelingen in de categorie "Injectables"`,
    subcategory: [],
  },
  {
    id: "6",
    name: "Mesotherapie",
    slug: "mesotherapie",
    image: treatment1,
    description: `Onze behandelingen in de categorie "Injectables"`,
    subcategory: [],
  },
  {
    id: "7",
    name: "Plasma",
    slug: "plasma",
    image: treatment3,
    description: `Onze behandelingen in de categorie "Injectables"`,
    subcategory: [],
  },
  {
    id: "8",
    name: "Tatto verwijderen",
    slug: "tatto-verwijderen",
    image: treatment2,
    description: `Onze behandelingen in de categorie "Injectables"`,
    subcategory: [],
  },
];

export default treatments;
