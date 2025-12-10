import { Product } from './types';

export const BRANDS = ['Chanel', 'Dior', 'Tom Ford', 'Creed', 'YSL', 'Père-Fumes Private Collection'];
export const SCENT_TYPES = ['Floral', 'Woody', 'Oriental', 'Fresh', 'Citrus', 'Spicy'];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Black Opium',
    brand: 'YSL',
    price: 130,
    gender: 'Women',
    scentType: 'Oriental',
    description: 'A captivating blend of coffee, vanilla, and white flowers, delivering a modern, addictive feminine scent.',
    image: '/public/Black Opium.png',
    rating: 4.8,
    reviews: 2100,
    notes: ['Coffee', 'Vanilla', 'White Flowers', 'Cedarwood'],
    sizes: [
      { label: '30ml', price: 90 },
      { label: '50ml', price: 130 },
      { label: '90ml', price: 170 }
    ]
  },
  {
    id: '2',
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    price: 145,
    gender: 'Men',
    scentType: 'Woody',
    description: 'A tribute to masculine freedom with citrus, dry woods, and a magnetic aromatic signature.',
    image: '/public/Bleu de Chanel.png',
    rating: 4.9,
    reviews: 5000,
    notes: ['Citrus', 'Sandalwood', 'Cedar', 'Ginger'],
    sizes: [
      { label: '50ml', price: 110 },
      { label: '100ml', price: 145 },
      { label: '150ml', price: 190 }
    ]
  },
  {
    id: '3',
    name: 'Dior Sauvage Eau de Parfum',
    brand: 'Dior',
    price: 165,
    gender: 'Men',
    scentType: 'Spicy',
    description: 'A powerful, refined interpretation with bergamot brightness wrapped in warm ambroxan and spicy depth.',
    image: '/public/Dior Sauvage Eau de Parfum.png',
    rating: 4.9,
    reviews: 6800,
    notes: ['Bergamot', 'Star Anise', 'Nutmeg', 'Vanilla'],
    sizes: [
      { label: '60ml', price: 165 },
      { label: '100ml', price: 210 }
    ]
  }
];

export const CONTACT_INFO = {
  address: "Haret Hreik, Beirut, Lebanon",
  phone: "70719335",
  hours: {
    weekdays: "Tuesday–Friday: 4:00 PM – 11:00 PM",
    saturday: "Saturday: 4:00 PM – 11:00 PM",
    monday: "Monday: 4:00 PM – 11:00 PM",
    sunday: "Sunday: Closed"
  }
};