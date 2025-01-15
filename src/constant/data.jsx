import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'

// icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

// properties data
export const PROPERTIES = [
  {
    title: "Villa Assinie Bord de Mer",
    image: img1,
    category: "Villa",
    address: "Route de la Plage, Assinie",
    country: "Côte d'Ivoire",
    city: "Assinie",
    area: 450,
    price: 45, // 45 millions de FCFA
    description:
      "Une villa de luxe avec vue sur l'océan, idéale pour des vacances ou une résidence permanente.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
    },
  },
  {
    title: "Appartement Moderne au Plateau",
    image: img2,
    category: "Appartement",
    address: "Boulevard Lagunaire, Plateau",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    area: 120,
    price: 15, // 15 millions de FCFA
    description:
      "Un appartement moderne au cœur du centre d'affaires avec une vue imprenable sur la lagune.",
    facilities: {
      bedrooms: 2,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Maison Familiale à Grand-Bassam",
    image: img3,
    category: "Maison",
    address: "Quartier France, Grand-Bassam",
    country: "Côte d'Ivoire",
    city: "Grand-Bassam",
    area: 350,
    price: 25, // 25 millions de FCFA
    description:
      "Une maison spacieuse et paisible, parfaite pour une vie de famille dans une ville historique.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Résidence Élégante à Cocody",
    image: img4,
    category: "Résidence",
    address: "Rue des Jardins, Cocody",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    area: 300,
    price: 60, // 60 millions de FCFA
    description:
      "Une résidence élégante avec des équipements modernes et un cadre verdoyant.",
    facilities: {
      bedrooms: 5,
      bathrooms: 4,
      parkings: 3,
    },
  },
  {
    title: "Retraite Rustique à Yamoussoukro",
    image: img5,
    category: "Maison",
    address: "Quartier des Lacs, Yamoussoukro",
    country: "Côte d'Ivoire",
    city: "Yamoussoukro",
    area: 280,
    price: 20, // 20 millions de FCFA
    description:
      "Une charmante maison rustique avec une vue sur les célèbres lacs aux crocodiles.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Penthouse avec Vue sur la Lagune",
    image: img3,
    category: "Penthouse",
    address: "Riviera 3, Cocody",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    area: 200,
    price: 90, // 90 millions de FCFA
    description:
      "Un penthouse de luxe avec une terrasse panoramique et une vue imprenable sur la lagune.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
    },
  },
  {
    title: "Lodge de Montagne à Man",
    image: img2,
    category: "Maison",
    address: "Colline du Tonkpi, Man",
    country: "Côte d'Ivoire",
    city: "Man",
    area: 320,
    price: 35, // 35 millions de FCFA
    description:
      "Un lodge paisible entouré de montagnes, parfait pour les amoureux de la nature.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Appartement Bord de Lagune à Treichville",
    image: img5,
    category: "Appartement",
    address: "Avenue 16, Treichville",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    area: 150,
    price: 12, // 12 millions de FCFA
    description:
      "Un appartement confortable avec un accès facile au centre-ville et une vue sur la lagune.",
    facilities: {
      bedrooms: 2,
      bathrooms: 1,
      parkings: 1,
    },
  },
  {
    title: "Villa Sérénité à Bouaké",
    image: img4,
    category: "Villa",
    address: "Quartier Air France, Bouaké",
    country: "Côte d'Ivoire",
    city: "Bouaké",
    area: 400,
    price: 30, // 30 millions de FCFA
    description:
      "Une villa paisible et moderne, idéale pour les familles cherchant le confort en toute sérénité.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
    },
  },
];



// properties data
export const BLOGS = [
  {
    title: "Havre de Paix à Assinie",
    image: blog1,
    category: "Villa",
  },
  {
    title: "Évasion au Bord de la Lagune d'Abidjan",
    image: blog2,
    category: "Appartement",
  },
  {
    title: "Retraite en Soleil à Grand-Bassam",
    image: blog3,
    category: "Maison",
  },
  {
    title: "Élégance Urbaine au Plateau",
    image: blog4,
    category: "Propriété",
  }
];



// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "En savoir plus",
    links: [
      "À propos de nous",
      "Nos dernières propriétés",
      "Offres spéciales",
      "Résidences populaires",
      "FAQ",
      "Politique de confidentialité",
    ],
  },
  {
    title: "Notre communauté",
    links: [
      "Conditions générales",
      "Offres spéciales",
      "Avis des clients",
    ],
  },
];


export const FOOTER_CONTACT_INFO = {
  title: "Contactez-nous",
  links: [
    { label: "Tel", value: "+225 01 23 45 67 89" }, // Exemple de numéro ivoirien
    { label: "Adresse email", value: "contact@casacentral.ci" }, // Domaine spécifique à la Côte d'Ivoire
  ],
};


export const SOCIALS = {
  title: "Suivez-nous",
  links: [
    { icon: <FaFacebook />, id: "facebook" },
    { icon: <FaInstagram />, id: "instagram" },
    { icon: <FaTwitter />, id: "twitter" },
    { icon: <FaYoutube />, id: "youtube" },
    { icon: <FaLinkedin />, id: "linkedin" },
  ],
};