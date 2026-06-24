export const properties = [
  // --- BEACHFRONT ---
  {
    id: 1,
    title: "The Glass House Malibu",
    description: "Perched directly over the Pacific Ocean, this architectural masterpiece features floor-to-ceiling glass walls, a private infinity pool, and panoramic ocean vistas.",
    location: "Malibu, California",
    category: "beachfront",
    price: 1450,
    rating: 4.96,
    reviewsCount: 142,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "6 guests · 3 bedrooms · 3 beds · 3.5 baths",
    amenities: ["Ocean View", "Infinity Pool", "Private Beach", "Chef Kitchen"],
    host: {
      name: "Alexandra",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: true
    }
  },
  {
    id: 2,
    title: "Amalfi Cliffside Pavilion",
    description: "An elegant, historical stone villa carved out of the Amalfi cliffs. Enjoy private cove access, terrace dining, and breathtaking sunset panoramas.",
    location: "Positano, Italy",
    category: "beachfront",
    price: 1850,
    rating: 4.98,
    reviewsCount: 89,
    images: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "4 guests · 2 bedrooms · 2 beds · 2 baths",
    amenities: ["Cliffside Deck", "Outdoor Pizza Oven", "Private Cove", "Hot Tub"],
    host: {
      name: "Giovanni",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: true
    }
  },

  // --- MANSIONS ---
  {
    id: 3,
    title: "The Obsidian Estate",
    description: "A dark-toned concrete and steel architectural marvel. Features a 10-car garage, underground cinema, spa, and a cantilevered swimming pool.",
    location: "Beverly Hills, California",
    category: "mansions",
    price: 3200,
    rating: 4.92,
    reviewsCount: 36,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "12 guests · 6 bedrooms · 8 beds · 7.5 baths",
    amenities: ["Home Cinema", "Spa Room", "Wine Cellar", "Helipad"],
    host: {
      name: "Marcus",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: true
    }
  },
  {
    id: 4,
    title: "Palazzo di Lucente",
    description: "Neo-classical Italian style mansion with marble interiors, formal gardens, fountains, and a personal butler service.",
    location: "Lake Como, Italy",
    category: "mansions",
    price: 4500,
    rating: 4.99,
    reviewsCount: 54,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "14 guests · 7 bedrooms · 10 beds · 9 baths",
    amenities: ["Lake Dock", "Personal Chef", "Formal Gardens", "Tennis Court"],
    host: {
      name: "Isabella",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: true
    }
  },

  // --- TRENDING ---
  {
    id: 5,
    title: "Skyline Duplex Penthouse",
    description: "Modern duplex penthouse overlooking the Central Park. Fully automated smart home with double-height living room and skylights.",
    location: "New York City, New York",
    category: "trending",
    price: 950,
    rating: 4.89,
    reviewsCount: 215,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "4 guests · 2 bedrooms · 2 beds · 2.5 baths",
    amenities: ["Skyline Views", "Smart Automation", "Steam Shower", "Gym Access"],
    host: {
      name: "Christian",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: false
    }
  },
  {
    id: 11,
    title: "Tokyo Shibuya Highrise Loft",
    description: "A futuristic industrial penthouse inside Shibuya's skyline. Fully custom steel design with 180-degree glass views and smart projection mappings.",
    location: "Shibuya, Tokyo",
    category: "trending",
    price: 880,
    rating: 4.93,
    reviewsCount: 175,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "3 guests · 1 bedroom · 2 beds · 1 bath",
    amenities: ["City Skyline View", "Heated Balcony", "Smart Projector", "Pocket WiFi"],
    host: {
      name: "Kenji",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: true
    }
  },

  // --- DESIGN ---
  {
    id: 6,
    title: "Zen Minimalist Sanctuary",
    description: "A peaceful concrete and timber villa combining Scandinavian and Japanese design. Features a quiet rock garden and tea room.",
    location: "Kyoto, Japan",
    category: "design",
    price: 850,
    rating: 4.95,
    reviewsCount: 112,
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "4 guests · 2 bedrooms · 3 tatami beds · 2 baths",
    amenities: ["Tea Room", "Zen Garden", "Onsen Tub", "Tatami Mats"],
    host: {
      name: "Kenji",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: true
    }
  },
  {
    id: 7,
    title: "The Origami Concrete Villa",
    description: "An architectural marvel created out of folded raw concrete, sitting inside a secluded pine forest. Features natural light tunnels.",
    location: "Sintra, Portugal",
    category: "design",
    price: 1100,
    rating: 4.97,
    reviewsCount: 74,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "6 guests · 3 bedrooms · 4 beds · 3 baths",
    amenities: ["Forest View", "Heated Pool", "Architectural Tour", "Sound System"],
    host: {
      name: "Filipa",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: true
    }
  },

  // --- COUNTRYSIDE ---
  {
    id: 8,
    title: "Le Domaine de la Lavande",
    description: "An 18th-century stone farmhouse surrounded by organic lavender fields. Features antique furnishings and an outdoor pool.",
    location: "Provence, France",
    category: "countryside",
    price: 780,
    rating: 4.91,
    reviewsCount: 164,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "8 guests · 4 bedrooms · 5 beds · 4 baths",
    amenities: ["Lavender Field", "Wine Tasting", "Stone Fireplace", "Private Pool"],
    host: {
      name: "Pierre & Marie",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: true
    }
  },
  {
    id: 12,
    title: "Tuscany Olive Grove Villa",
    description: "A serene rustic villa sitting amidst rolling olive trees and private vineyards. Experience al fresco terrace dining, private pool swimming, and tuscan estate wines.",
    location: "Siena, Italy",
    category: "countryside",
    price: 890,
    rating: 4.96,
    reviewsCount: 92,
    images: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "6 guests · 3 bedrooms · 4 beds · 3 baths",
    amenities: ["Olive Orchard View", "Private Pool", "Wine Cellar", "Outdoor Dining"],
    host: {
      name: "Giovanni",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: true
    }
  },

  // --- CABINS ---
  {
    id: 9,
    title: "Summit A-Frame Peak Cabin",
    description: "A luxury black A-frame cabin tucked in the snowy evergreens. Experience ultimate cozy living with hot tub, fireplace, and dramatic peak vistas.",
    location: "Aspen, Colorado",
    category: "cabins",
    price: 650,
    rating: 4.88,
    reviewsCount: 310,
    images: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "4 guests · 2 bedrooms · 2 beds · 1.5 baths",
    amenities: ["Peak Views", "Outdoor Hot Tub", "Wood Fireplace", "Ski-in Access"],
    host: {
      name: "Jordan",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: true
    }
  },
  {
    id: 10,
    title: "Nordic Glass Fjord Cabin",
    description: "A dramatic glass cabin cantilevered over a freezing fjord. Features heated flooring, private sauna, and Aurora Borealis views.",
    location: "Lofoten, Norway",
    category: "cabins",
    price: 920,
    rating: 4.97,
    reviewsCount: 148,
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    details: "2 guests · 1 bedroom · 1 bed · 1 bath",
    amenities: ["Fjord Views", "Private Sauna", "Heated Floors", "Aurora Glass Ceiling"],
    host: {
      name: "Aria",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      superhost: true
    }
  }
];
