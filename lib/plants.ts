export type LightLevel =
  | "low"
  | "medium"
  | "bright-indirect"
  | "direct-sun"

export type CareLevel =
  | "easy"
  | "moderate"
  | "advanced"

export type WaterLevel =
  | "low"
  | "moderate"
  | "high"


export interface Plant {
  id: string
  name: string
  scientificName: string
  category: string
  careLevel: string

  shortDescription: string
  description: string

  image: string

  light: string
  water: string
  temperature: string

  careGuide: string[]

  propagation: {
    method: string
    description: string
  }[]

  benefits: {
    title: string
    description: string
  }[]
}

export const plants: Plant[] = [
  {
  id: "aloe-vera",
  name: "Aloe Vera",
  scientificName: "Aloe barbadensis miller",
  category: "Succulent",
  careLevel: "Easy",

  shortDescription:
    "A hardy, low-maintenance succulent known for its fleshy leaves and distinctive architectural shape.",

  description:
    "Aloe Vera is a resilient succulent that makes an excellent choice for homes, offices and other bright indoor spaces. Its thick, fleshy leaves store water, allowing the plant to tolerate periods of dryness. With the right light, well-draining soil and careful watering, Aloe Vera can remain healthy and attractive with relatively little maintenance.",

  image: "/plants/aloe-vera.jpg",

  light: "Bright indirect light",
  water: "Every 2–3 weeks",
  temperature: "60–85°F",

  careGuide: [
    "Place Aloe Vera in a bright location where it receives plenty of indirect sunlight. A few hours of gentle direct morning sunlight can also be beneficial.",
    "Allow the soil to dry out completely between waterings. Aloe Vera stores water in its leaves and is more tolerant of dry conditions than consistently wet soil.",
    "When watering, thoroughly moisten the soil and allow excess water to drain away completely. Avoid allowing the plant to sit in standing water.",
    "Use a well-draining succulent or cactus potting mix. A container with drainage holes is important to prevent excess moisture around the roots.",
    "Remove damaged, dry or unhealthy leaves with clean scissors when necessary to keep the plant looking tidy and healthy."
  ],

  propagation: [
    {
      method: "Offsets",
      description:
        "Aloe Vera can be propagated from offsets, also called pups, that develop around the base of a mature plant. Carefully separate a healthy offset with some roots attached and allow any damaged area to dry before planting it in well-draining soil."
    },
    {
      method: "Leaf or stem propagation",
      description:
        "Leaf propagation is generally less reliable for Aloe Vera than propagating healthy offsets. For the best chance of success, use established pups from a mature plant."
    }
  ],

  benefits: [
    {
      title: "Low Maintenance",
      description:
        "Aloe Vera is well suited to plant owners who prefer a plant that does not require frequent watering."
    },
    {
      title: "Water Efficient",
      description:
        "Its fleshy leaves store water, allowing the plant to tolerate periods of dryness."
    },
    {
      title: "Great for Bright Spaces",
      description:
        "Its structured growth and distinctive leaves can add natural character to bright homes, offices and workspaces."
    },
    {
      title: "Easy to Propagate",
      description:
        "Mature Aloe Vera plants can produce offsets that can be separated and grown into new plants."
    }
  ]
},

  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    category: "Indoor",
    careLevel: "Easy",
    shortDescription: "Popular houseplant with unique split leaves",
    description:
      "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its large, glossy, perforated leaves. It's a popular choice for indoor spaces due to its dramatic appearance and relatively easy care requirements.",
    image: "/plants/monstera deliciosa.jpg",
    light: "Bright indirect",
    water: "Weekly",
    temperature: "65-85°F",
    careGuide: [
      "Place in bright, indirect light. Avoid direct sunlight as it can burn the leaves.",
      "Water when the top 1-2 inches of soil feels dry to the touch, typically once a week.",
      "Use well-draining soil and a pot with drainage holes.",
      "Maintain humidity around 60% if possible. Mist occasionally or use a humidifier.",
      "Feed with a balanced houseplant fertilizer during the growing season (spring and summer).",
    ],
    propagation: [
      {
        method: "Stem Cuttings",
        description:
          "Cut a stem with at least one node and one leaf. Place in water until roots develop (usually 2-3 weeks), then transfer to soil.",
      },
      {
        method: "Air Layering",
        description:
          "Make a small incision on the stem below a node, wrap with damp sphagnum moss, and cover with plastic. Once roots form, cut below the roots and pot.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description: "Monstera plants help filter indoor air by removing toxins like formaldehyde and benzene.",
      },
      {
        title: "Stress Reduction",
        description: "Studies show that indoor plants like Monstera can reduce stress levels and improve mood.",
      },
      {
        title: "Humidity Improvement",
        description: "Monstera plants release moisture through transpiration, which can improve air humidity levels.",
      },
    ],
  },

  {
    id: "snake-plant",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    category: "Indoor",
    careLevel: "Easy",
    shortDescription: "Nearly indestructible plant with upright leaves",
    description:
      "The Snake Plant, also known as Mother-in-Law's Tongue, is one of the most tolerant houseplants you can find. With its stiff, upright leaves and ability to survive in various conditions, it's perfect for beginners or busy plant owners.",
    image: "/plants/snakeplant.jpg",
    light: "Low to bright indirect",
    water: "Every 2-3 weeks",
    temperature: "60-85°F",
    careGuide: [
      "Can tolerate low light but grows best in bright, indirect light.",
      "Allow soil to dry completely between waterings, typically every 2-3 weeks.",
      "Use well-draining soil, preferably a cactus or succulent mix.",
      "Tolerates low humidity, making it perfect for most indoor environments.",
      "Fertilize lightly 2-3 times per year during the growing season.",
    ],
    propagation: [
      {
        method: "Leaf Cuttings",
        description:
          "Cut a leaf into 2-3 inch sections, remembering which end was closest to the roots. Plant the bottom end about 1 inch deep in soil and keep slightly moist until new growth appears.",
      },
      {
        method: "Division",
        description:
          "When repotting, separate the plant into smaller sections, ensuring each has healthy roots and leaves. Replant in separate containers.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description:
          "One of the best plants for removing toxins like formaldehyde and benzene from indoor air, even at night.",
      },
      {
        title: "Oxygen Production",
        description: "Unlike most plants, snake plants release oxygen at night, making them excellent bedroom plants.",
      },
      {
        title: "Feng Shui Benefits",
        description:
          "In Feng Shui, snake plants are believed to bring protective energy and remove negative chi from spaces.",
      },
    ],
  },
  {
    id: "pothos",
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    category: "Indoor",
    careLevel: "Easy",
    shortDescription: "Trailing vine with heart-shaped leaves",
    description:
      "Pothos, also known as Devil's Ivy, is a versatile trailing plant with heart-shaped leaves that come in various patterns including golden, marble, and neon. It's incredibly adaptable and can thrive in a variety of indoor conditions.",
    image: "/plants/pothos.jpg",
    light: "Low to bright indirect",
    water: "Every 1-2 weeks",
    temperature: "65-85°F",
    careGuide: [
      "Adaptable to various light conditions, from low light to bright indirect light.",
      "Allow the top inch of soil to dry out between waterings, typically every 1-2 weeks.",
      "Use a standard potting mix with good drainage.",
      "Tolerates normal household humidity but appreciates occasional misting.",
      "Fertilize monthly during the growing season with a balanced houseplant fertilizer.",
    ],
    propagation: [
      {
        method: "Stem Cuttings in Water",
        description:
          "Cut a stem below a node, ensuring there are 1-3 leaves attached. Place in water and wait for roots to develop (usually 1-2 weeks), then transfer to soil.",
      },
      {
        method: "Stem Cuttings in Soil",
        description:
          "Cut a stem with at least one node, dip in rooting hormone (optional), and plant directly in moist soil. Keep soil lightly moist until new growth appears.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description:
          "Pothos effectively removes indoor air pollutants like formaldehyde, benzene, and carbon monoxide.",
      },
      {
        title: "Stress Reduction",
        description:
          "The presence of indoor plants like Pothos has been linked to reduced stress levels and improved mood.",
      },
      {
        title: "Versatile Decor",
        description:
          "Can be displayed in hanging baskets, trained to climb, or allowed to trail along shelves, adding greenery to any space.",
      },
    ],
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    category: "Indoor",
    careLevel: "Moderate",
    shortDescription: "Elegant flowering plant with glossy leaves",
    description:
      "The Peace Lily is a popular flowering houseplant known for its elegant white blooms and glossy green leaves. It's valued not only for its beauty but also for its air-purifying qualities and ability to thrive in lower light conditions.",
    image: "/plants/peace_lily.jpg",
    light: "Low to medium indirect",
    water: "Weekly",
    temperature: "65-80°F",
    careGuide: [
      "Thrives in low to medium indirect light. Can tolerate fluorescent lighting.",
      "Keep soil consistently moist but not soggy. Water when the top of the soil feels dry.",
      "Use a well-draining potting mix rich in organic matter.",
      "Prefers higher humidity. Mist regularly or place on a pebble tray with water.",
      "Fertilize every 6-8 weeks during the growing season with a balanced houseplant fertilizer.",
    ],
    propagation: [
      {
        method: "Division",
        description:
          "When repotting, gently separate the plant into smaller sections, ensuring each has healthy roots and leaves. Replant in separate containers with fresh potting mix.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description:
          "One of NASA's top air-purifying plants, removing toxins like ammonia, benzene, formaldehyde, and trichloroethylene.",
      },
      {
        title: "Humidity Improvement",
        description: "Releases moisture into the air, helping to improve humidity levels in dry indoor environments.",
      },
      {
        title: "Indicator Plant",
        description:
          "Visibly droops when it needs water, making it an excellent indicator plant for watering schedules.",
      },
    ],
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    category: "Indoor",
    careLevel: "Moderate",
    shortDescription: "Trendy plant with large, violin-shaped leaves",
    description:
      "The Fiddle Leaf Fig is a popular indoor tree known for its large, violin-shaped leaves. It makes a dramatic statement in any space and has become a staple in interior design. While beautiful, it requires consistent care to thrive.",
    image: "/plants/fiddleleaffig.jpg",
    light: "Bright indirect",
    water: "Every 7-10 days",
    temperature: "65-75°F",
    careGuide: [
      "Place in bright, indirect light. Some direct morning sun is beneficial, but avoid harsh afternoon sun.",
      "Water when the top 1-2 inches of soil are dry, typically every 7-10 days. Ensure even moisture throughout the pot.",
      "Use well-draining soil, preferably a mix designed for indoor trees or ficus plants.",
      "Prefers moderate to high humidity. Mist leaves regularly or use a humidifier.",
      "Fertilize monthly during the growing season with a balanced houseplant fertilizer.",
    ],
    propagation: [
      {
        method: "Stem Cuttings",
        description:
          "Take a 6-8 inch cutting with at least two leaves. Remove the bottom leaf and place the cutting in water or moist soil. Keep warm and humid until roots develop.",
      },
      {
        method: "Air Layering",
        description:
          "Make a small incision on the stem, apply rooting hormone, wrap with damp sphagnum moss, and cover with plastic. Once roots form, cut below the roots and pot.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description: "Helps filter indoor air pollutants, improving air quality in your home or office.",
      },
      {
        title: "Visual Impact",
        description: "Creates a dramatic focal point in interior spaces, adding height and architectural interest.",
      },
      {
        title: "Biophilic Connection",
        description:
          "Large-leaved plants like the Fiddle Leaf Fig help create a stronger connection to nature, reducing stress and improving wellbeing.",
      },
    ],
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    category: "Indoor",
    careLevel: "Easy",
    shortDescription: "Low-maintenance plant with glossy leaves",
    description:
      "The ZZ Plant is known for its glossy, dark green leaves and extremely forgiving nature. It can survive in low light and with infrequent watering, making it perfect for beginners, offices, or anyone with a busy lifestyle.",
    image: "/plants/zz.jpg",
    light: "Low to bright indirect",
    water: "Every 2-3 weeks",
    temperature: "65-85°F",
    careGuide: [
      "Tolerates low light conditions but grows best in medium to bright indirect light.",
      "Allow soil to dry completely between waterings, typically every 2-3 weeks. It's better to underwater than overwater.",
      "Use well-draining soil, preferably a cactus or succulent mix.",
      "Adapts to normal household humidity levels.",
      "Fertilize lightly 2-3 times per year during the growing season.",
    ],
    propagation: [
      {
        method: "Leaf Cuttings",
        description:
          "Remove a healthy leaf with a small portion of the stem attached. Let it callus for a day, then plant in well-draining soil. Be patient, as it can take several months for new growth to appear.",
      },
      {
        method: "Division",
        description:
          "When repotting, carefully separate the rhizomes (underground stems) and plant in separate containers. Ensure each division has healthy roots and stems.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description: "Removes toxins like xylene, toluene, and benzene from indoor air.",
      },
      {
        title: "Stress Reduction",
        description:
          "Low-maintenance nature means less stress about plant care, while still providing the psychological benefits of indoor greenery.",
      },
      {
        title: "Drought Tolerance",
        description:
          "Stores water in its rhizomes, allowing it to survive extended periods without watering—perfect for travelers or forgetful plant owners.",
      },
    ],
  },
  {
  id: "spider-plant",
  name: "Spider Plant",
  scientificName: "Chlorophytum comosum",
  category: "Indoor Plant",
  careLevel: "Easy",

  shortDescription:
    "A fast-growing, adaptable houseplant known for its arching leaves and baby plantlets that grow from long stems.",

  description:
    "Spider Plant is one of the most adaptable and beginner-friendly houseplants you can grow. Its long, arching leaves create a graceful display, while mature plants produce long stems carrying small baby plantlets, giving the plant its distinctive spider-like appearance. It is well suited to homes, offices and other indoor spaces and can thrive with relatively simple care.",

  image: "/plants/spider-plant.jpg",

  light: "Bright indirect to moderate indirect light",
  water: "About once a week, or when the top 1–2 inches of soil feels dry",
  temperature: "60–80°F",

  careGuide: [
    "Place your Spider Plant in bright, indirect light for strong, healthy growth. It can tolerate moderate or lower light, although growth may be slower and variegated leaves may become less pronounced.",
    
    "Water when the top 1–2 inches of soil feels dry. Water thoroughly until excess water drains from the bottom of the pot, then empty any water collected in the saucer.",
    
    "Use a well-draining, general-purpose indoor potting mix. Choose a container with drainage holes to reduce the risk of waterlogged soil and root problems.",
    
    "Spider Plants generally adapt well to normal indoor humidity. If the air is particularly dry, especially during periods of heavy air conditioning, slightly increasing humidity can help maintain healthy foliage.",
    
    "Feed during the active growing season with a balanced houseplant fertilizer according to the product instructions. Avoid excessive fertilization, which can contribute to brown leaf tips.",
    
    "Remove dry or damaged leaves with clean scissors. You can also trim brown tips for appearance while keeping the healthy portion of the leaf intact.",
    
    "Spider Plants naturally produce long stems with baby plantlets as they mature. These can be left attached for a fuller cascading appearance or used for propagation."
  ],

  propagation: [
    {
      method: "Plantlets (Spiderettes)",
      description:
        "The easiest way to propagate a Spider Plant is from the small plantlets that develop on long stems from a mature plant. Once a plantlet has developed roots, carefully separate it from the stem and place it in a small container filled with well-draining potting mix."
    },
    {
      method: "Rooting in Water",
      description:
        "A young plantlet can also be placed in water with its developing roots submerged while keeping the leaves above the water. Once a stronger root system develops, transfer the plantlet into well-draining soil."
    },
    {
      method: "Division",
      description:
        "Large, mature Spider Plants can be divided into smaller sections. Carefully separate the root mass into sections with healthy roots and foliage, then plant each division in its own container."
    }
  ],

  benefits: [
    {
      title: "Beginner Friendly",
      description:
        "Spider Plant is adaptable and relatively easy to care for, making it a good choice for new plant owners."
    },
    {
      title: "Fast Growing",
      description:
        "With suitable light, watering and growing conditions, Spider Plants can produce new foliage and plantlets relatively quickly."
    },
    {
      title: "Easy to Propagate",
      description:
        "Mature plants naturally produce baby plantlets that can be rooted and grown into new Spider Plants."
    },
    {
      title: "Great for Homes and Offices",
      description:
        "Its cascading foliage works well on shelves, desks, plant stands and hanging planters, making it versatile for indoor spaces."
    },
    {
      title: "Attractive Cascading Growth",
      description:
        "The long arching leaves and hanging plantlets give Spider Plant a distinctive, full and dynamic appearance."
    }
  ]
},
{
  id: "chinese-evergreen",
  name: "Chinese Evergreen",
  scientificName: "Aglaonema spp.",
  category: "Indoor Plant",
  careLevel: "Easy",

  shortDescription:
    "A versatile, shade-tolerant indoor plant valued for its attractive foliage and ability to adapt to a range of indoor conditions.",

  description:
    "Chinese Evergreen is a popular indoor plant known for its attractive foliage, adaptability and relatively easy care. Different Aglaonema varieties can display green, silver, cream or patterned leaves, making them an excellent way to add texture and colour to homes, offices and other indoor spaces. They generally prefer warm conditions, moderate to bright indirect light and evenly moist but well-draining soil.",

  image: "/plants/chinese-evergreen.jpg",

  light: "Low to bright indirect light",
  water: "About once a week, allowing the top layer of soil to dry slightly",
  temperature: "65–80°F",

  careGuide: [
    "Place your Chinese Evergreen in low to bright indirect light. Avoid strong, prolonged direct sunlight because it can scorch the leaves. Variegated varieties generally benefit from brighter indirect light to maintain their patterns.",
    
    "Water when the top layer of soil feels slightly dry. Water thoroughly until excess water drains from the bottom of the pot, then allow the plant to drain completely.",
    
    "Avoid keeping the soil constantly waterlogged. Use a pot with drainage holes and a well-draining indoor potting mix to help maintain a healthy root environment.",
    
    "Chinese Evergreen prefers warm indoor conditions and generally performs best away from cold drafts, strong air-conditioning and sudden temperature changes.",
    
    "Normal household humidity is usually suitable, although the plant can appreciate additional humidity when the surrounding air is particularly dry.",
    
    "Feed during the active growing season with a balanced indoor-plant fertilizer according to the product instructions. Avoid excessive feeding.",
    
    "Remove yellow, damaged or aging leaves with clean scissors. Regularly wiping the leaves with a soft, damp cloth can also help keep the foliage clean and attractive."
  ],

  propagation: [
    {
      method: "Stem Cuttings",
      description:
        "Chinese Evergreen can be propagated from healthy stem cuttings. Cut a section of stem containing healthy growth and place it in water or a suitable propagation medium until roots develop. Once the roots are established, transfer the cutting into well-draining potting soil."
    },
    {
      method: "Division",
      description:
        "Mature Chinese Evergreen plants can sometimes be divided when repotting. Carefully separate sections of the plant with their own roots and foliage, then plant each division into a suitable container."
    }
  ],

  benefits: [
    {
      title: "Beginner Friendly",
      description:
        "Chinese Evergreen is adaptable and relatively easy to maintain, making it a suitable choice for people who are new to indoor plants."
    },
    {
      title: "Tolerates Lower Light",
      description:
        "Many Aglaonema varieties can adapt to lower-light indoor environments, although growth and leaf colour can vary depending on the variety and available light."
    },
    {
      title: "Attractive Foliage",
      description:
        "Its foliage can feature different shades of green, silver, cream and natural patterns, providing visual interest without relying on flowers."
    },
    {
      title: "Suitable for Indoor Spaces",
      description:
        "Its adaptable growth makes Chinese Evergreen a practical choice for homes, offices and other warm indoor environments."
    },
    {
      title: "Easy to Propagate",
      description:
        "Established plants can be propagated through stem cuttings or division, allowing healthy plants to produce new specimens."
    }
  ]
},
]
