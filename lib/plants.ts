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
{
  id: "areca-palm",
  name: "Areca Palm",
  scientificName: "Dypsis lutescens",
  category: "Palm",
  careLevel: "Moderate",

  shortDescription:
    "A graceful tropical palm with feathery, arching fronds that brings a lush and natural feel to homes, offices and spacious indoor areas.",

  description:
    "Areca Palm is a popular tropical palm valued for its elegant, feathery fronds and naturally lush appearance. Its clumping growth habit makes it an attractive choice for adding height and greenery to indoor spaces, balconies and sheltered outdoor areas. With bright indirect light, consistent watering and warm conditions, Areca Palm can develop into a beautiful statement plant.",

  image: "/plants/areca-palm.jpg",

  light: "Bright indirect light",
  water: "About once a week, allowing the top layer of soil to dry slightly",
  temperature: "65–80°F",

  careGuide: [
    "Place your Areca Palm in bright, indirect light. It can tolerate some gentle direct morning sunlight, but strong afternoon sunlight can scorch the fronds.",

    "Water when the top layer of soil begins to dry. Water thoroughly until excess water drains from the bottom of the container, then allow the plant to drain completely.",

    "Avoid allowing the root ball to remain constantly saturated. Use a container with drainage holes and a well-draining potting mix to help prevent problems associated with excess moisture.",

    "Areca Palm prefers warm conditions and should be protected from cold drafts, sudden temperature changes and prolonged exposure to strong air-conditioning.",

    "The plant appreciates moderate to higher humidity. If the indoor environment is particularly dry, increasing humidity around the plant can help maintain healthier-looking foliage.",

    "Feed during the active growing season with a balanced palm or indoor-plant fertilizer according to the product instructions. Avoid excessive fertilization.",

    "Trim completely brown or damaged fronds with clean pruning shears. Avoid repeatedly cutting partially green fronds because the plant can continue using healthy portions of the foliage.",

    "Rotate the pot occasionally so that all sides of the plant receive balanced light. This can encourage more even growth."
  ],

  propagation: [
    {
      method: "Division",
      description:
        "Areca Palm is commonly propagated by carefully dividing established clumps. During repotting, separate sections that have their own roots and stems, then plant each division into an appropriate container with well-draining soil."
    },
    {
      method: "Seed",
      description:
        "Areca Palms can also be grown from seed, although seed propagation takes considerably longer than division and requires suitable warmth, moisture and growing conditions."
    }
  ],

  benefits: [
    {
      title: "Tropical Appearance",
      description:
        "Its feathery, arching fronds create a lush tropical look that can transform the appearance of an indoor or sheltered outdoor space."
    },
    {
      title: "Statement Plant",
      description:
        "Areca Palm can add height and structure to a room, making it particularly useful for larger living areas, offices and entrance spaces."
    },
    {
      title: "Versatile Placement",
      description:
        "With appropriate light and temperature, Areca Palm can work well in homes, offices, balconies and sheltered outdoor spaces."
    },
    {
      title: "Fast-Growing Under Good Conditions",
      description:
        "When provided with suitable light, water, warmth and nutrition, Areca Palm can produce vigorous new growth."
    },
    {
      title: "Adds Natural Texture",
      description:
        "Its multiple stems and fine, feather-like fronds provide a distinctive texture that complements a wide range of interior styles."
    }
  ]
},
{
  id: "anthurium",
  name: "Anthurium",
  scientificName: "Anthurium andraeanum",
  category: "Flowering Plant",
  careLevel: "Moderate",
  shortDescription:
    "A striking tropical plant known for its glossy heart-shaped leaves and colourful, long-lasting flowers.",
  description:
    "Anthurium is a tropical flowering plant admired for its glossy, heart-shaped foliage and distinctive blooms. Its colourful flowers, which can appear in shades such as red, pink, white and orange depending on the variety, make it an excellent choice for adding a vibrant tropical touch to homes, offices and other warm indoor spaces. With bright indirect light, consistent moisture and good humidity, Anthurium can continue producing attractive foliage and flowers throughout the year.",
  image: "/plants/anthurium.jpg",
  light: "Bright indirect light",
  water: "About once a week, allowing the top inch of soil to dry slightly",
  temperature: "65–80°F",
  careGuide: [
    "Place your Anthurium in bright, indirect light. Good light encourages healthy foliage and flowering, while strong direct sunlight can scorch the leaves.",
    "Water when the top inch of soil feels slightly dry. Water thoroughly until excess water drains from the bottom of the pot, then allow the plant to drain completely.",
    "Avoid keeping the soil constantly saturated. Anthuriums prefer consistent moisture but can develop root problems when their roots remain in waterlogged soil.",
    "Use a loose, well-draining potting mix that allows air to reach the roots. A mixture containing materials such as orchid bark, perlite and quality potting soil can provide suitable drainage and aeration.",
    "Anthuriums appreciate warm, humid conditions. Keep the plant away from cold drafts, sudden temperature changes and prolonged exposure to strong air-conditioning.",
    "Feed during the active growing season with a balanced indoor-plant fertilizer according to the product instructions. Avoid excessive fertilization.",
    "Remove yellow, damaged or fading leaves and flowers using clean scissors or pruning shears. Cutting spent flowers can help keep the plant looking neat.",
    "Wipe the broad leaves occasionally with a soft, damp cloth to remove dust and help maintain their glossy appearance.",
    "Rotate the pot occasionally so that the plant receives balanced light and develops more evenly."
  ],
  propagation: [
    {
      method: "Division",
      description:
        "Mature Anthurium plants can be propagated by division when they have developed multiple stems or growth points. Carefully separate sections of the plant with healthy roots attached and place each division into a suitable well-draining potting mix."
    },
    {
      method: "Stem Cuttings",
      description:
        "Anthurium can also be propagated from suitable stem sections. A healthy section containing an appropriate growth point can be placed in a suitable propagation medium and kept warm and slightly moist while roots develop."
    },
    {
      method: "Seeds",
      description:
        "Anthurium can be grown from seed, although seed propagation is slower and more involved than division. Seeds should be fresh and provided with warm, humid conditions for successful germination."
    }
  ],
  benefits: [
    {
      title: "Beautiful Flowers",
      description:
        "Anthurium produces distinctive colourful blooms that can add a vibrant tropical character to indoor spaces."
    },
    {
      title: "Glossy Foliage",
      description:
        "Its large, heart-shaped leaves provide attractive greenery even when the plant is not flowering."
    },
    {
      title: "Long-Lasting Blooms",
      description:
        "With suitable growing conditions, Anthurium flowers can remain attractive for an extended period, making the plant a popular decorative choice."
    },
    {
      title: "Tropical Character",
      description:
        "Its combination of colourful flowers and glossy foliage creates a strong tropical aesthetic for homes, offices and other warm spaces."
    },
    {
      title: "Excellent Gift Plant",
      description:
        "Anthurium's attractive flowers and relatively compact growth make it a popular choice for gifting and special occasions."
    }
  ]
},
{
  id: "swiss-cheese-plant",
  name: "Swiss Cheese Plant",
  scientificName: "Monstera adansonii",
  category: "Tropical Plant",
  careLevel: "Moderate",
  shortDescription:
    "A tropical climbing plant known for its distinctive perforated leaves and lush, fast-growing foliage.",
  description:
    "Swiss Cheese Plant is a popular tropical houseplant admired for its naturally perforated leaves, which develop distinctive holes as the plant matures. Its vining and climbing growth habit makes it an excellent choice for shelves, hanging planters, moss poles and other vertical displays. With bright indirect light, consistent moisture, warmth and good humidity, Monstera adansonii can produce vigorous new growth and beautifully patterned foliage.",
  image: "/plants/swiss-cheese-plant.jpg",
  light: "Bright indirect light",
  water: "About once a week, allowing the top 1–2 inches of soil to dry slightly",
  temperature: "65–80°F",
  careGuide: [
    "Place your Swiss Cheese Plant in bright, indirect light. It can tolerate moderate indirect light, but brighter conditions generally support stronger growth and more pronounced leaf development.",
    "Avoid prolonged exposure to intense direct sunlight because strong sunlight can scorch the foliage and cause pale or brown patches on the leaves.",
    "Water when the top 1–2 inches of soil feels dry. Water thoroughly until excess water drains from the bottom of the pot, then allow the plant to drain completely.",
    "Avoid keeping the soil constantly saturated. Use a container with drainage holes and a loose, well-draining potting mix to help maintain healthy roots.",
    "Provide warm conditions and protect the plant from cold drafts, sudden temperature changes and prolonged exposure to strong air-conditioning.",
    "Swiss Cheese Plant appreciates moderate to high humidity. Good humidity can support healthy foliage and reduce stress in warm indoor environments.",
    "Because Monstera adansonii is a climbing plant, provide a moss pole, trellis or another suitable support if you want it to grow upward. It can also be allowed to trail from a hanging container.",
    "Feed during the active growing season with a balanced houseplant fertilizer according to the product instructions. Avoid excessive feeding.",
    "Remove yellow, damaged or severely unhealthy leaves with clean scissors. Wipe the foliage occasionally with a soft, damp cloth to remove accumulated dust.",
    "Rotate the plant occasionally so that different sides receive balanced light and growth remains more even."
  ],
  propagation: [
    {
      method: "Stem Cuttings",
      description:
        "The easiest way to propagate Swiss Cheese Plant is through stem cuttings containing at least one healthy node. Place the cutting in water or a suitable propagation medium and provide warmth, moisture and indirect light until roots develop."
    },
    {
      method: "Water Propagation",
      description:
        "A healthy cutting with a node can be placed in clean water with the node submerged while keeping the leaves above the water. Once a good root system develops, transfer the cutting into a well-draining potting mix."
    },
    {
      method: "Air Layering",
      description:
        "Established Monstera adansonii can also be propagated through air layering. A healthy node is encouraged to produce roots while still attached to the parent plant before the rooted section is separated and planted."
    }
  ],
  benefits: [
    {
      title: "Distinctive Leaves",
      description:
        "Its naturally perforated leaves give Swiss Cheese Plant a unique appearance that immediately stands out among common houseplants."
    },
    {
      title: "Fast-Growing Under Good Conditions",
      description:
        "With suitable light, warmth, moisture and nutrition, Swiss Cheese Plant can produce vigorous new vines and foliage."
    },
    {
      title: "Great for Vertical Displays",
      description:
        "Its climbing growth habit makes it an excellent choice for moss poles, trellises and other vertical plant supports."
    },
    {
      title: "Works as a Trailing Plant",
      description:
        "The flexible vines can also cascade beautifully from hanging planters, shelves and elevated plant displays."
    },
    {
      title: "Easy to Propagate",
      description:
        "Healthy stem cuttings containing nodes can be rooted relatively easily, allowing established plants to produce new plants."
    }
  ]
},
{
  id: "caladium",
  name: "Caladium",
  scientificName: "Caladium bicolor",
  category: "Ornamental Plant",
  careLevel: "Moderate",
  shortDescription:
    "A colourful tropical ornamental plant known for its striking heart-shaped leaves in shades of green, pink, red and white.",
  description:
    "Caladium is a tropical ornamental plant prized for its vibrant, heart-shaped foliage and dramatic colour combinations. Depending on the variety, its leaves can display shades of green, pink, red, white and contrasting veins or patterns. Caladium makes a beautiful addition to homes, shaded patios, balconies and outdoor garden displays where it can receive bright filtered light and warm, humid conditions.",
  image: "/plants/caladium.jpg",
  light: "Bright indirect or filtered light",
  water: "About 1–2 times a week, keeping the soil lightly and consistently moist",
  temperature: "65–85°F",
  careGuide: [
    "Place your Caladium in bright, filtered or indirect light. Strong direct afternoon sunlight can scorch its delicate leaves, while insufficient light may reduce the intensity of its colours.",
    "Keep the soil lightly and consistently moist during active growth. Water when the surface of the soil begins to dry, but avoid allowing the plant to remain in soggy soil.",
    "Water thoroughly until excess water drains from the bottom of the container. Empty any standing water from the saucer to reduce the risk of root problems.",
    "Use a rich but well-draining potting mix. A container with drainage holes is important because Caladium needs moisture while still requiring good drainage around its roots.",
    "Caladium thrives in warm and humid conditions. Protect it from cold temperatures, cold drafts and sudden changes in its growing environment.",
    "Provide additional humidity when the surrounding air is particularly dry. This can help the foliage remain healthier and more attractive.",
    "Feed during the active growing season with a balanced fertilizer according to the product instructions. Avoid excessive fertilizer, which can damage the roots or contribute to weak growth.",
    "Remove yellowing, damaged or fading leaves with clean scissors. Regular removal of unhealthy foliage helps maintain a neat appearance.",
    "Caladium naturally grows from underground tubers. Depending on the growing conditions and variety, the plant may slow down or enter dormancy when conditions become less favourable.",
    "Avoid unnecessary disturbance of the tubers during active growth. When repotting or dividing, handle the underground structures carefully to prevent damage."
  ],
  propagation: [
    {
      method: "Tuber Division",
      description:
        "Caladium is commonly propagated by dividing its underground tubers. A healthy mature tuber can be separated into sections, with each section containing a viable growing point, then planted in a suitable well-draining growing medium."
    },
    {
      method: "Seeds",
      description:
        "Caladium can also be grown from seed, although seed-grown plants may vary in their leaf colours and patterns and generally take longer to develop into mature plants."
    }
  ],
  benefits: [
    {
      title: "Vibrant Foliage",
      description:
        "Caladium is valued for its colourful leaves, which can feature striking combinations of green, pink, red and white."
    },
    {
      title: "Excellent Ornamental Plant",
      description:
        "Its dramatic foliage makes Caladium an attractive choice for decorating homes, patios, balconies, shaded gardens and plant displays."
    },
    {
      title: "Wide Range of Colours",
      description:
        "Different Caladium varieties offer a wide range of leaf colours, patterns and vein combinations, making them highly versatile for decorative planting."
    },
    {
      title: "Great for Shaded Spaces",
      description:
        "Caladium performs well in bright filtered or indirect light, making it useful for areas where direct sunlight is limited."
    },
    {
      title: "Easy to Multiply",
      description:
        "Established Caladium can be propagated through suitable tuber division, allowing healthy plants to produce additional plants."
    }
  ]
},
{
  id: "pin-stripe-calathea",
  name: "Pin-Stripe Calathea",
  scientificName: "Goeppertia ornata",
  category: "Indoor Plant",
  careLevel: "Moderate",
  shortDescription:
    "A striking tropical foliage plant known for its dark green leaves decorated with delicate pink or white pinstripes.",
  description:
    "Pin-Stripe Calathea is a tropical foliage plant admired for its beautifully patterned leaves and elegant upright growth. Its dark green foliage is marked with fine pink or pale stripes, creating a distinctive ornamental appearance. It performs best in warm, humid conditions with bright indirect or filtered light and evenly moist, well-draining soil, making it a beautiful choice for homes, offices and sheltered indoor spaces.",
  image: "/plants/pin-stripe-calathea.jpg",
  light: "Bright indirect to moderate filtered light",
  water: "About once a week, keeping the soil lightly and consistently moist",
  temperature: "65–80°F",
  careGuide: [
    "Place your Pin-Stripe Calathea in bright, indirect or filtered light. Avoid strong direct sunlight, which can scorch or fade its patterned leaves.",
    "Water when the top layer of soil begins to dry, while keeping the root area lightly and consistently moist. Avoid allowing the plant to dry out completely for extended periods.",
    "Water thoroughly until excess water drains from the bottom of the pot. Do not allow the plant to sit in standing water, as consistently waterlogged soil can damage the roots.",
    "Use a loose, well-draining potting mix that retains some moisture without becoming saturated. A container with drainage holes is essential.",
    "Pin-Stripe Calathea prefers warm conditions and should be protected from cold drafts, sudden temperature changes and prolonged exposure to strong air-conditioning.",
    "Provide moderate to high humidity where possible. Higher humidity can help the leaves maintain a healthier appearance, particularly in dry indoor environments.",
    "Feed during the active growing season with a balanced indoor-plant fertilizer according to the product instructions. Avoid over-fertilizing.",
    "Remove yellow, brown or severely damaged leaves with clean scissors. Trim individual damaged leaves close to the base of the plant while avoiding healthy growth.",
    "Wipe the leaves gently with a soft, damp cloth when necessary to remove dust. Handle the foliage carefully because the leaves can be delicate.",
    "Rotate the pot occasionally so that the plant receives balanced light and maintains more even growth."
  ],
  propagation: [
    {
      method: "Division",
      description:
        "The most practical way to propagate Pin-Stripe Calathea is through division. When a mature plant has multiple established growth points, carefully separate sections with healthy roots attached and plant each division into its own container."
    },
    {
      method: "Root Division During Repotting",
      description:
        "Propagation by division is best carried out when repotting an established plant. Separate naturally formed sections of the root and plant them immediately into a suitable, well-draining potting mix."
    }
  ],
  benefits: [
    {
      title: "Striking Foliage",
      description:
        "The distinctive pin-striped pattern gives this Calathea an elegant appearance that stands out among indoor foliage plants."
    },
    {
      title: "Decorative Indoor Plant",
      description:
        "Its patterned leaves make it an attractive choice for bedrooms, living rooms, offices and other sheltered indoor spaces."
    },
    {
      title: "Tropical Appearance",
      description:
        "The combination of lush foliage and intricate leaf markings brings a natural tropical character to indoor plant displays."
    },
    {
      title: "Pet-Friendly Choice",
      description:
        "Calatheas are generally considered non-toxic to cats and dogs, making them a popular option for households with pets."
    },
    {
      title: "Unique Leaf Patterns",
      description:
        "Each leaf contributes to the plant's ornamental appeal through its combination of deep green colouring and contrasting stripes."
    }
  ]
},
{
  id: "furry-feather-calathea",
  name: "Furry Feather Calathea",
  scientificName: "Calathea rufibarba",
  category: "Indoor Plant",
  careLevel: "Moderate",
  shortDescription:
    "An elegant tropical houseplant with long, wavy green leaves, velvety undersides and beautiful reddish-purple colouring.",
  description:
    "Furry Feather Calathea is a distinctive tropical foliage plant admired for its long, narrow, gently wavy leaves and soft, velvety texture. Also known as Velvet Calathea, this ornamental plant features rich green upper leaf surfaces and reddish-purple undersides covered with fine hairs. Native to Brazil, it thrives in warm, humid environments with indirect light and consistently moist, well-draining soil. Its graceful growth habit makes it a beautiful addition to living rooms, offices and sheltered indoor spaces.",
  image: "/plants/furry-feather-calathea.jpg",
  light: "Medium to bright indirect light",
  water: "When the top inch of soil begins to dry",
  temperature: "65–80°F (18–27°C)",
  careGuide: [
    "Place your Furry Feather Calathea in medium to bright indirect light. Avoid prolonged direct sunlight because intense sunlight can scorch its delicate leaves.",
    "Water when the top inch of soil begins to dry. Keep the soil lightly and consistently moist during active growth without allowing it to become waterlogged.",
    "Use a well-draining potting mix that retains some moisture. A mixture containing coco coir or peat, perlite and organic matter can support healthy root development.",
    "Ensure the container has drainage holes so excess water can escape. Never allow the plant to remain in standing water.",
    "Maintain moderate to high humidity, ideally around 60% or higher when practical. A humidifier or grouping plants together can help in dry indoor environments.",
    "Keep the plant in warm conditions between 65–80°F (18–27°C). Protect it from cold drafts, sudden temperature changes and strong air-conditioning.",
    "Use rainwater, filtered water or other low-mineral water if your tap water causes persistent brown leaf tips.",
    "Feed lightly during active growth with a balanced indoor-plant fertilizer diluted according to the manufacturer's instructions. Avoid excessive fertilization.",
    "Remove yellowing or damaged leaves using clean scissors, cutting close to the base without damaging healthy stems.",
    "Clean dusty leaves gently with a soft, damp cloth. Avoid harsh leaf-shine products that may damage the delicate foliage.",
    "Repot when the roots become crowded, preferably during active growth. Choose a container only slightly larger than the existing root system.",
    "Observe the leaves for signs of stress, including curling, crispy edges or yellowing, and adjust watering, humidity and light conditions as needed."
  ],
  propagation: [
    {
      method: "Division",
      description:
        "Furry Feather Calathea is most reliably propagated by dividing a healthy, mature plant. During repotting, gently separate established clumps, ensuring each division has healthy roots and several leaves. Plant each section in a suitable potting mix and maintain warmth and humidity while it becomes established."
    },
    {
      method: "Rhizome Division",
      description:
        "Established plants develop underground rhizomes that can be separated carefully when the plant has multiple healthy growth points. Each division should retain sufficient roots and foliage to support new growth."
    }
  ],
  benefits: [
    {
      title: "Unique Velvety Foliage",
      description:
        "Its softly textured leaves and fine hairs distinguish Furry Feather Calathea from many other tropical houseplants."
    },
    {
      title: "Beautiful Leaf Contrast",
      description:
        "The combination of rich green upper surfaces and reddish-purple undersides creates a striking ornamental display."
    },
    {
      title: "Elegant Indoor Decoration",
      description:
        "Its upright, arching foliage brings natural texture and tropical character to living rooms, offices and indoor plant collections."
    },
    {
      title: "Pet-Friendly Plant",
      description:
        "Furry Feather Calathea is generally considered non-toxic to cats and dogs, making it a popular ornamental choice for pet-owning households."
    },
    {
      title: "Suitable for Indirect Light",
      description:
        "It grows well in medium to bright indirect light, making it suitable for indoor areas protected from intense direct sunlight."
    },
    {
      title: "Natural Leaf Movement",
      description:
        "Like many plants in the prayer plant family, its leaves can change position between day and night in response to natural light cycles."
    }
  ]
},

{
  id: "never-never-plant",
  name: "Never Never Plant",
  scientificName: "Ctenanthe setosa",
  category: "Indoor Plant",
  careLevel: "Moderate",
  shortDescription:
    "An elegant tropical houseplant featuring elongated silver-green leaves, striking dark green patterns and beautiful purple undersides.",
  description:
    "Never Never Plant (Ctenanthe setosa) is a beautiful tropical foliage plant admired for its elongated leaves, silvery-green colouring and distinctive dark green patterns. Native to Brazil, this member of the prayer plant family (Marantaceae) displays attractive purple-toned leaf undersides and gentle leaf movements throughout the day. It is particularly well suited to warm, humid indoor environments with filtered light. With proper watering, humidity and care, Never Never Plant brings an elegant tropical appearance to homes, offices and indoor plant collections.",
  image: "/plants/never-never-plant.jpg",
  light: "Medium to bright indirect light",
  water: "When the top 1 inch of soil begins to dry",
  temperature: "65–80°F (18–27°C)",
  careGuide: [
    "Place your Never Never Plant in medium to bright indirect light. Avoid prolonged direct sunlight, which can scorch its leaves and fade their distinctive patterns.",
    "Water when the top inch of soil begins to dry. Keep the potting mix lightly and consistently moist during active growth, but avoid allowing the roots to remain waterlogged.",
    "Use a loose, well-draining potting mix that retains some moisture. A combination of coco coir or peat, perlite and organic matter can provide a suitable growing environment.",
    "Choose a pot with drainage holes to allow excess water to escape. Empty any water that collects in the saucer after watering.",
    "Maintain moderate to high humidity. Never Never Plant appreciates humid conditions, especially in rooms where air-conditioning makes the air dry.",
    "Keep the plant in warm temperatures between 65–80°F (18–27°C). Protect it from cold drafts, sudden temperature changes and direct airflow from air conditioners.",
    "Use rainwater, filtered water or other low-mineral water if your tap water causes persistent brown leaf tips or edges.",
    "Feed lightly during active growth with a balanced indoor-plant fertilizer according to the product instructions. Reduce feeding when growth slows.",
    "Remove yellowing, damaged or dry leaves with clean scissors. Cut unwanted leaves close to the base while avoiding healthy stems.",
    "Clean dusty foliage gently with a soft, damp cloth to maintain the appearance of the patterned leaves.",
    "Rotate the container occasionally to encourage even growth and prevent the plant from leaning strongly toward its light source.",
    "Repot when the root system becomes crowded, preferably during active growth. Avoid using an excessively large container, which can retain too much moisture.",
    "Monitor for common indoor pests such as spider mites and mealybugs, particularly when indoor humidity is low."
  ],
  propagation: [
    {
      method: "Division",
      description:
        "Never Never Plant is most reliably propagated through division. During repotting, carefully separate a healthy, mature plant into smaller clumps, ensuring that each section retains established roots and several healthy leaves. Replant each division in a suitable moist, well-draining potting mix."
    },
    {
      method: "Rhizome Division",
      description:
        "Established Ctenanthe setosa plants develop underground rhizomes. Healthy sections with viable growth points and attached roots can be carefully separated and planted individually. Maintain warmth, indirect light and adequate humidity while the divisions establish."
    }
  ],
  benefits: [
    {
      title: "Beautiful Patterned Foliage",
      description:
        "Its elongated silver-green leaves with contrasting dark green markings create a striking decorative appearance."
    },
    {
      title: "Attractive Purple Undersides",
      description:
        "The purple-toned undersides of the leaves add colour and visual interest, particularly when the foliage changes position."
    },
    {
      title: "Natural Leaf Movement",
      description:
        "As a member of the prayer plant family, Never Never Plant can move its leaves in response to daily light cycles, creating a dynamic display."
    },
    {
      title: "Excellent Indoor Decoration",
      description:
        "Its upright growth and patterned foliage make it an attractive addition to living rooms, offices and indoor tropical plant collections."
    },
    {
      title: "Pet-Friendly Choice",
      description:
        "Ctenanthe setosa is generally regarded as non-toxic to cats and dogs, making it a popular choice for pet-owning households."
    },
    {
      title: "Suitable for Filtered Light",
      description:
        "Never Never Plant grows well in indirect or filtered light, making it useful for indoor spaces protected from harsh direct sunlight."
    }
  ]
},

{
  id: "dumb-cane",
  name: "Dumb Cane",
  scientificName: "Dieffenbachia seguine",
  category: "Indoor Plant",
  careLevel: "Easy to Moderate",
  shortDescription:
    "A striking tropical houseplant with large, beautifully variegated leaves featuring rich green, cream and pale-yellow patterns.",
  description:
    "Dumb Cane (Dieffenbachia seguine) is a popular tropical foliage plant admired for its large, decorative leaves and distinctive green, cream and pale-yellow variegation. Native to tropical regions of the Americas, this attractive houseplant brings lush greenery and a bold ornamental appearance to homes, offices and sheltered indoor spaces. It grows best in warm conditions with bright indirect light, moderate humidity and well-draining soil. Although relatively easy to maintain, Dumb Cane contains irritating calcium oxalate crystals and should be kept away from children and pets.",
  image: "/plants/dumb-cane.jpg",
  light: "Medium to bright indirect light",
  water: "When the top 1–2 inches of soil feels dry",
  temperature: "65–85°F (18–29°C)",
  careGuide: [
    "Place your Dumb Cane in medium to bright indirect light. Bright filtered light helps maintain healthy growth and attractive leaf variegation.",
    "Avoid prolonged direct sunlight, particularly strong afternoon sunlight, because it can scorch the leaves and cause brown patches.",
    "Water when the top 1–2 inches of soil feels dry. Water thoroughly until excess water drains from the bottom of the pot.",
    "Avoid keeping the soil constantly saturated. Dumb Cane prefers moderate moisture but may develop root rot when grown in waterlogged conditions.",
    "Use a loose, well-draining indoor potting mix containing organic matter. A mixture with perlite or similar drainage materials can help maintain suitable root aeration.",
    "Choose a container with drainage holes and empty any standing water from the saucer after watering.",
    "Maintain warm temperatures between 65–85°F (18–29°C). Protect the plant from cold drafts, sudden temperature changes and prolonged exposure to strong air-conditioning.",
    "Dumb Cane appreciates moderate to high humidity, although established plants can adapt to normal indoor conditions.",
    "Feed during the active growing season with a balanced indoor-plant fertilizer according to the manufacturer's instructions. Avoid excessive fertilization.",
    "Wipe dusty leaves gently with a soft, damp cloth to keep the foliage clean and attractive.",
    "Remove yellow, damaged or unhealthy leaves using clean pruning shears. Wear gloves when pruning to avoid contact with the irritating sap.",
    "Rotate the container occasionally to encourage balanced growth and prevent the plant from leaning toward its light source.",
    "Repot when the roots become crowded, preferably during active growth. Use a container only slightly larger than the existing root system.",
    "Inspect the plant regularly for common pests such as spider mites, mealybugs and scale insects.",
    "Keep Dumb Cane away from children and pets. Its leaves and stems contain calcium oxalate crystals that can cause painful irritation if chewed or swallowed."
  ],
  propagation: [
    {
      method: "Stem Cuttings",
      description:
        "Dumb Cane can be propagated using healthy stem cuttings containing viable nodes. Cut a suitable stem section using clean pruning tools and place it in water or a moist, well-draining propagation medium. Keep the cutting warm and in bright indirect light until roots and new growth develop. Wear gloves when handling cut stems because the sap can irritate the skin."
    },
    {
      method: "Cane Cuttings",
      description:
        "Mature Dumb Cane plants often develop thick, cane-like stems. Healthy stem sections containing nodes can be cut and placed horizontally or vertically in a suitable propagation medium. Maintain warmth and light moisture while new roots and shoots develop."
    },
    {
      method: "Division",
      description:
        "Established plants that produce multiple rooted shoots can sometimes be divided during repotting. Carefully separate healthy sections with attached roots and replant them in individual containers."
    }
  ],
  benefits: [
    {
      title: "Beautiful Variegated Foliage",
      description:
        "Its large green leaves with cream and pale-yellow markings create an attractive tropical display."
    },
    {
      title: "Statement Indoor Plant",
      description:
        "Dumb Cane can develop into a bold ornamental plant that adds height, structure and greenery to indoor spaces."
    },
    {
      title: "Suitable for Indirect Light",
      description:
        "It performs well in medium to bright indirect light, making it suitable for many indoor environments."
    },
    {
      title: "Relatively Easy to Maintain",
      description:
        "With suitable light, moderate watering and well-draining soil, Dumb Cane can be maintained without highly specialized equipment."
    },
    {
      title: "Easy to Propagate",
      description:
        "Healthy stem sections and established rooted shoots can be used to produce additional plants."
    },
    {
      title: "Attractive Tropical Appearance",
      description:
        "Its broad foliage and upright growth habit bring a lush tropical character to homes, offices and plant collections."
    }
  ]
},

{
  id: "amoena",
  name: "Amoena",
  scientificName: "Dieffenbachia amoena",
  category: "Indoor Plant",
  careLevel: "Easy to Moderate",
  shortDescription:
    "A bold tropical foliage plant admired for its large green leaves, striking cream-coloured variegation and impressive upright growth.",
  description:
    "Amoena, commonly known as Giant Dumb Cane, is a striking ornamental Dieffenbachia admired for its broad, beautifully patterned leaves and lush tropical appearance. Often sold under the horticultural name Dieffenbachia amoena, this plant is especially popular for its dramatic green foliage decorated with pale cream or yellow-green markings. With suitable care, Amoena can develop into a substantial statement plant for living rooms, offices, reception areas and sheltered tropical spaces. It thrives in warm conditions with medium to bright indirect light, moderate humidity and well-draining soil. Like other Dieffenbachia plants, Amoena contains irritating calcium oxalate crystals and must be kept away from children and pets.",
  image: "/plants/amoena.jpg",
  light: "Medium to bright indirect light",
  water: "When the top 1–2 inches of soil feels dry",
  temperature: "65–85°F (18–29°C)",
  careGuide: [
    "Position your Amoena in medium to bright indirect light. Bright filtered light encourages healthy foliage and helps maintain attractive leaf variegation.",
    "Avoid prolonged exposure to harsh direct sunlight, especially strong afternoon sunlight, because it can scorch the leaves and damage their appearance.",
    "Water when the top 1–2 inches of soil feels dry. Water thoroughly until excess moisture drains from the bottom of the pot.",
    "Avoid keeping the potting mix constantly saturated. Excessive moisture can contribute to root rot and yellowing leaves.",
    "Use a loose, nutrient-rich, well-draining indoor potting mix. Adding perlite or another suitable drainage material can improve aeration around the roots.",
    "Always grow Amoena in a container with drainage holes and empty any standing water from the saucer after watering.",
    "Maintain warm growing conditions between 65–85°F (18–29°C). Protect the plant from cold drafts, sudden temperature changes and prolonged exposure to strong air-conditioning.",
    "Provide moderate humidity where possible. Although established plants can tolerate ordinary indoor humidity, very dry air may contribute to brown leaf edges.",
    "Feed during active growth with a balanced indoor-plant fertilizer according to the manufacturer's instructions. Avoid excessive fertilization.",
    "Wipe the large leaves occasionally with a soft, damp cloth to remove dust and maintain their attractive appearance.",
    "Remove yellowing, damaged or unhealthy leaves with clean pruning shears. Wear gloves while pruning because Dieffenbachia sap can irritate the skin and eyes.",
    "Rotate the container occasionally so that the plant receives balanced light and develops an even growth habit.",
    "Repot when the roots become crowded, preferably during active growth. Choose a container only slightly larger than the existing root system.",
    "Inspect the foliage and stems regularly for common indoor pests such as mealybugs, spider mites and scale insects.",
    "Keep the plant away from children and pets. Chewing or swallowing its leaves or stems can cause painful irritation of the mouth and throat."
  ],
  propagation: [
    {
      method: "Stem Cuttings",
      description:
        "Amoena can be propagated using healthy stem cuttings containing viable nodes. Cut a suitable stem section with clean pruning tools and place it in water or a moist, well-draining propagation medium. Keep the cutting warm and in bright indirect light while roots develop. Wear gloves when handling cut stems because the sap is irritating."
    },
    {
      method: "Cane Cuttings",
      description:
        "Mature Amoena plants may develop thick, cane-like stems. Healthy sections containing nodes can be placed horizontally or vertically in a suitable propagation medium. Maintain warmth and light moisture until roots and new shoots develop."
    },
    {
      method: "Division",
      description:
        "Established plants that produce multiple rooted shoots can sometimes be propagated through division. Carefully separate healthy rooted sections during repotting and plant them in individual containers."
    }
  ],
  benefits: [
    {
      title: "Bold Variegated Foliage",
      description:
        "Amoena produces large ornamental leaves with beautiful combinations of green and pale cream markings."
    },
    {
      title: "Impressive Statement Plant",
      description:
        "Its substantial foliage and upright growth can create a strong decorative focal point in spacious indoor environments."
    },
    {
      title: "Tropical Interior Appeal",
      description:
        "The lush foliage adds natural texture and a tropical atmosphere to living rooms, offices and reception areas."
    },
    {
      title: "Suitable for Indirect Light",
      description:
        "Amoena grows well in medium to bright indirect light, making it suitable for indoor areas protected from intense sunlight."
    },
    {
      title: "Relatively Easy to Maintain",
      description:
        "With appropriate watering, warmth and drainage, Amoena can be maintained without complicated growing equipment."
    },
    {
      title: "Can Be Propagated",
      description:
        "Healthy stem sections and rooted shoots can be used to grow additional plants when suitable propagation conditions are provided."
    }
  ]
},

{
  id: "song-of-india",
  name: "Song of India",
  scientificName: "Dracaena reflexa",
  category: "Indoor Plant",
  careLevel: "Easy to Moderate",
  shortDescription:
    "A beautiful tropical foliage plant featuring narrow green leaves with bright yellow margins and an elegant upright growth habit.",
  description:
    "Song of India (Dracaena reflexa 'Song of India') is a striking tropical ornamental plant admired for its narrow, arching green leaves bordered with vibrant yellow or cream-coloured variegation. Its dense foliage and upright, branching growth make it an attractive addition to homes, offices, reception areas and sheltered outdoor spaces. Native forms of Dracaena reflexa occur in islands of the western Indian Ocean, and the variegated Song of India selection is widely cultivated for ornamental use. With bright indirect light, well-draining soil and moderate watering, this resilient plant can maintain its colourful appearance for many years.",
  image: "/plants/song-of-india.jpg",
  light: "Bright indirect light",
  water: "When the top 1–2 inches of soil feels dry",
  temperature: "65–85°F (18–29°C)",
  careGuide: [
    "Place your Song of India in bright indirect light to maintain healthy growth and vibrant yellow-green leaf variegation.",
    "The plant can tolerate moderate indirect light, but insufficient light may result in slower growth and less pronounced leaf colouring.",
    "Avoid sudden exposure to intense direct sunlight, especially strong afternoon sunlight, which may scorch the leaves.",
    "Water when the top 1–2 inches of soil feels dry. Water thoroughly and allow excess water to drain completely.",
    "Avoid keeping the soil constantly wet. Song of India is sensitive to prolonged waterlogging, which can contribute to root rot and yellowing leaves.",
    "Use a loose, well-draining potting mix containing organic matter and drainage materials such as perlite.",
    "Choose a container with drainage holes and avoid allowing water to accumulate in the saucer.",
    "Maintain warm temperatures between 65–85°F (18–29°C). Protect the plant from cold drafts, sudden temperature changes and prolonged exposure to strong air-conditioning.",
    "Song of India generally adapts to normal indoor humidity, although moderate humidity can help maintain attractive foliage.",
    "Feed during active growth with a balanced indoor-plant fertilizer according to the manufacturer's instructions. Avoid excessive feeding.",
    "Wipe dusty leaves gently with a soft, damp cloth to keep the foliage clean and attractive.",
    "Prune leggy or overgrown stems using clean pruning shears to encourage a more compact and branching growth habit.",
    "Remove yellowing, damaged or unhealthy leaves when necessary to maintain a neat appearance.",
    "Rotate the pot occasionally so that the plant receives balanced light and develops evenly.",
    "Repot when the roots become crowded, preferably during active growth. Use a container only slightly larger than the existing root system.",
    "Inspect the plant periodically for common pests such as mealybugs, scale insects and spider mites.",
    "Keep Song of India away from cats and dogs because Dracaena plants contain compounds that can cause illness if ingested."
  ],
  propagation: [
    {
      method: "Stem Cuttings",
      description:
        "Song of India can be propagated using healthy stem cuttings containing viable nodes. Cut a suitable stem section with clean pruning shears and place it in water or a moist, well-draining propagation medium. Keep the cutting warm and in bright indirect light until roots develop."
    },
    {
      method: "Tip Cuttings",
      description:
        "Healthy growing tips can be removed from established stems and rooted in water or a suitable propagation medium. Once a healthy root system develops, transfer the cutting into a container with well-draining soil."
    },
    {
      method: "Air Layering",
      description:
        "Larger established stems can sometimes be propagated through air layering. Encourage roots to develop around a suitable stem section while it remains attached to the parent plant, then separate and pot the rooted section."
    }
  ],
  benefits: [
    {
      title: "Beautiful Variegated Foliage",
      description:
        "Its bright yellow-edged green leaves create an attractive ornamental display and add colour to indoor plant collections."
    },
    {
      title: "Elegant Upright Growth",
      description:
        "Song of India develops an attractive branching structure that can add height and visual interest to homes, offices and reception areas."
    },
    {
      title: "Relatively Low Maintenance",
      description:
        "With suitable lighting, moderate watering and good drainage, Song of India can be maintained without complicated care requirements."
    },
    {
      title: "Versatile Decorative Plant",
      description:
        "It can be grown in containers indoors or in sheltered outdoor locations where temperatures and lighting conditions are suitable."
    },
    {
      title: "Can Be Pruned and Shaped",
      description:
        "Its stems can be pruned to manage height, encourage branching and maintain a fuller ornamental appearance."
    },
    {
      title: "Easy to Propagate",
      description:
        "Healthy stem and tip cuttings can be rooted to produce additional plants under suitable growing conditions."
    }
  ]
},

{
  id: "corn-plant",
  name: "Corn Plant",
  scientificName: "Dracaena fragrans",
  category: "Indoor Plant",
  careLevel: "Easy",
  shortDescription:
    "A resilient tropical foliage plant with broad, arching green leaves and upright woody stems, ideal for adding natural greenery to indoor spaces.",
  description:
    "Corn Plant (Dracaena fragrans) is a popular tropical ornamental plant admired for its broad, arching leaves and upright, cane-like stems. Native to tropical Africa, this adaptable houseplant brings a lush, architectural appearance to homes, offices, reception areas and sheltered indoor spaces. Depending on the cultivar, its foliage may be solid green or decorated with yellow or cream-coloured stripes. Corn Plant grows best in medium to bright indirect light, well-draining soil and warm conditions. Its relatively low-maintenance nature makes it an excellent choice for both beginner and experienced plant owners.",
  image: "/plants/corn-plant.jpg",
  light: "Medium to bright indirect light",
  water: "When the top 1–2 inches of soil feels dry",
  temperature: "65–80°F (18–27°C)",
  careGuide: [
    "Place your Corn Plant in medium to bright indirect light. It can tolerate lower light conditions, although growth may become slower and variegated cultivars may lose some colour intensity.",
    "Avoid prolonged exposure to strong direct sunlight, particularly intense afternoon sunlight, because it can scorch the leaves.",
    "Water when the top 1–2 inches of soil feels dry. Water thoroughly until excess water drains from the bottom of the container.",
    "Avoid overwatering. Corn Plant is sensitive to consistently saturated soil, which can contribute to root rot and yellowing foliage.",
    "Use a loose, well-draining indoor potting mix containing organic matter and drainage materials such as perlite.",
    "Choose a container with drainage holes and empty excess water from the saucer after watering.",
    "Maintain warm temperatures between 65–80°F (18–27°C). Protect the plant from cold drafts, sudden temperature changes and prolonged exposure to strong air-conditioning.",
    "Corn Plant generally adapts well to normal indoor humidity, although moderate humidity can help maintain healthier-looking foliage.",
    "If leaf tips become brown, check for inconsistent watering, dry air, excess fertilizer or sensitivity to minerals and fluoride in tap water. Filtered or rainwater may help when water quality is the cause.",
    "Feed lightly during active growth with a balanced indoor-plant fertilizer according to the manufacturer's instructions. Avoid excessive fertilization.",
    "Wipe dusty leaves occasionally with a soft, damp cloth to keep the foliage clean and attractive.",
    "Remove yellowing, damaged or unhealthy leaves using clean pruning shears.",
    "Prune excessively tall stems if necessary to control height and encourage new shoots to develop below the cut.",
    "Rotate the container occasionally to encourage balanced growth and prevent the plant from leaning strongly toward its light source.",
    "Repot when the roots become crowded, preferably during active growth. Select a container only slightly larger than the existing root system.",
    "Inspect the plant regularly for common indoor pests such as spider mites, mealybugs and scale insects.",
    "Keep Corn Plant away from cats and dogs because Dracaena plants contain compounds that can cause illness if ingested."
  ],
  propagation: [
    {
      method: "Stem Cuttings",
      description:
        "Corn Plant can be propagated using healthy stem sections containing viable nodes. Cut a suitable section with clean pruning shears and place it in water or a moist, well-draining propagation medium. Maintain warmth and bright indirect light while roots develop."
    },
    {
      method: "Cane Cuttings",
      description:
        "Mature Corn Plants develop thick, woody canes that can be cut into sections for propagation. Each section should contain viable growth points and can be placed horizontally or vertically in a suitable growing medium. Keep the medium lightly moist while roots and new shoots develop."
    },
    {
      method: "Top Cuttings",
      description:
        "A healthy leafy top can be removed from a mature stem and rooted in water or a suitable propagation medium. Once established, the cutting can be transferred into well-draining potting soil."
    },
    {
      method: "Air Layering",
      description:
        "Larger Corn Plant stems can also be propagated through air layering. Encourage roots to form around a suitable stem section while it remains attached to the parent plant, then separate and pot the rooted section."
    }
  ],
  benefits: [
    {
      title: "Low-Maintenance Houseplant",
      description:
        "Corn Plant is relatively easy to maintain with suitable light, moderate watering and good drainage, making it a practical choice for indoor plant owners."
    },
    {
      title: "Attractive Tropical Foliage",
      description:
        "Its broad, arching leaves create a lush tropical appearance that adds natural texture and greenery to indoor spaces."
    },
    {
      title: "Excellent Statement Plant",
      description:
        "Its upright, cane-like stems can add height and structure to living rooms, offices, hallways and reception areas."
    },
    {
      title: "Adaptable to Indoor Lighting",
      description:
        "Corn Plant can tolerate a range of indirect lighting conditions, although brighter filtered light generally supports stronger growth."
    },
    {
      title: "Can Be Pruned and Shaped",
      description:
        "Mature stems can be pruned to manage plant height and encourage new shoots, allowing the plant to maintain an attractive growth habit."
    },
    {
      title: "Easy to Propagate",
      description:
        "Healthy stem sections, cane cuttings and leafy tops can be used to produce additional plants under suitable growing conditions."
    }
  ]
},

{
  id: "crown-of-thorns",
  name: "Crown of Thorns",
  scientificName: "Euphorbia milii",
  category: "Flowering Succulent",
  careLevel: "Easy",
  shortDescription:
    "A resilient flowering succulent with thorny stems, attractive green leaves and colourful, long-lasting floral bracts.",
  description:
    "Crown of Thorns (Euphorbia milii) is a distinctive flowering succulent admired for its thorny stems, bright green foliage and colourful floral bracts. Native to Madagascar, this hardy ornamental plant can produce flowers throughout much of the year when grown in suitable warm, sunny conditions. Its colourful bracts may appear in shades of red, pink, yellow, white or orange depending on the variety. Crown of Thorns is an excellent choice for sunny patios, balconies, outdoor container gardens and bright indoor spaces. It prefers abundant sunlight, well-draining soil and careful watering. Because the plant has sharp thorns and produces irritating milky latex sap, it should be handled carefully and kept away from children and pets.",
  image: "/plants/crown-of-thorns.jpg",
  light: "Full sun to bright direct light",
  water: "When the top 1–2 inches of soil has dried",
  temperature: "65–90°F (18–32°C)",
  careGuide: [
    "Place Crown of Thorns in a bright location receiving several hours of direct sunlight daily. Adequate sunlight encourages healthy growth and abundant flowering.",
    "When moving a plant from shade into strong sunlight, introduce direct sun gradually to reduce the risk of leaf scorch.",
    "Water thoroughly when the top 1–2 inches of soil has dried. Allow excess water to drain completely and reduce watering when growth slows or conditions are cooler.",
    "Avoid keeping the soil constantly wet. Crown of Thorns is drought tolerant once established but can develop root rot in waterlogged conditions.",
    "Use a fast-draining cactus or succulent potting mix. Adding coarse mineral materials such as perlite or pumice can improve drainage.",
    "Grow the plant in a container with drainage holes. Avoid leaving standing water in saucers or decorative outer pots.",
    "Maintain warm growing conditions. Crown of Thorns performs well in tropical climates but should be protected from prolonged cold conditions.",
    "Provide good air circulation, especially during humid or rainy periods, to help prevent moisture-related problems.",
    "Feed lightly during active growth with a balanced fertilizer according to the manufacturer's instructions. Avoid excessive fertilization.",
    "Remove faded flowers, dead leaves and damaged stems when necessary to maintain a neat appearance.",
    "Wear protective gloves and eye protection when pruning or taking cuttings. The plant produces a milky latex sap that can irritate skin and cause serious eye irritation.",
    "Use clean pruning tools when trimming overgrown stems. Avoid touching your face or eyes while handling the plant.",
    "Rotate container-grown plants occasionally to encourage balanced growth and even sunlight exposure.",
    "Inspect the plant regularly for common pests such as mealybugs and scale insects.",
    "Keep Crown of Thorns away from children and pets because of its sharp thorns and toxic, irritating latex sap."
  ],
  propagation: [
    {
      method: "Stem Cuttings",
      description:
        "Crown of Thorns is commonly propagated through stem cuttings. Wearing protective gloves and eye protection, take a healthy stem cutting using clean pruning tools. Allow the irritating milky latex to stop flowing and let the cut surface dry and callus before placing the cutting in a well-draining succulent propagation mix. Keep the medium only lightly moist while roots develop."
    },
    {
      method: "Seed Propagation",
      description:
        "Crown of Thorns can also be propagated from seeds. Sow fresh seeds in a suitable well-draining growing medium and maintain warm conditions with controlled moisture. Seed propagation is generally slower and less predictable than stem cuttings."
    }
  ],
  benefits: [
    {
      title: "Colourful Floral Display",
      description:
        "Crown of Thorns produces attractive floral bracts in shades of red, pink, yellow, white and orange, depending on the variety."
    },
    {
      title: "Drought Tolerant",
      description:
        "Its succulent growth allows established plants to tolerate periods of dryness, making it suitable for gardeners who prefer less frequent watering."
    },
    {
      title: "Suitable for Sunny Spaces",
      description:
        "Crown of Thorns thrives in bright sunlight and can be grown in sunny patios, balconies and outdoor container gardens."
    },
    {
      title: "Long Flowering Potential",
      description:
        "With sufficient sunlight, warmth and appropriate care, Crown of Thorns can produce colourful displays during much of the year."
    },
    {
      title: "Distinctive Ornamental Appearance",
      description:
        "Its combination of thorny stems, green leaves and colourful bracts creates an unusual decorative appearance."
    },
    {
      title: "Easy to Propagate",
      description:
        "Healthy stem cuttings can be rooted to produce additional plants when handled safely and provided with suitable growing conditions."
    }
  ]
},

{
  id: "mother-of-millions",
  name: "Mother of Millions",
  scientificName: "Kalanchoe delagoensis",
  category: "Succulent",
  careLevel: "Easy",
  shortDescription:
    "A fascinating succulent with narrow, tubular leaves that produce tiny baby plantlets, creating a distinctive and unusual ornamental appearance.",
  description:
    "Mother of Millions (Kalanchoe delagoensis) is a distinctive succulent native to Madagascar, admired for its upright stems, narrow tubular leaves and remarkable ability to produce miniature plantlets along its leaf tips. These small plantlets can detach and develop into new plants, giving the species its memorable common name. Its foliage is typically green to grey-green with darker markings, and mature plants may produce clusters of hanging, bell-shaped flowers in warm reddish or orange tones. Mother of Millions thrives in bright light, warm conditions and well-draining soil. Although easy to grow, it spreads readily and contains toxic compounds, so it is best maintained in containers away from children, pets and grazing animals.",
  image: "/plants/mother-of-millions.jpg",
  light: "Bright light to full sun",
  water: "When the soil has dried substantially",
  temperature: "60–85°F (16–29°C)",
  careGuide: [
    "Place Mother of Millions in a bright location receiving plenty of sunlight. Several hours of direct sunlight can encourage compact, healthy growth.",
    "Introduce the plant gradually to strong direct sunlight if it has previously been grown in shade to reduce the risk of leaf scorch.",
    "Allow the potting mix to dry substantially between waterings. As a succulent, Mother of Millions stores water in its leaves and tolerates periods of dryness.",
    "When watering, thoroughly moisten the soil and allow excess water to drain completely. Reduce watering during periods of slower growth.",
    "Avoid keeping the soil consistently wet because excessive moisture can cause root rot.",
    "Use a fast-draining cactus or succulent potting mix. Adding perlite, pumice or coarse mineral material can improve drainage.",
    "Grow the plant in a container with drainage holes and avoid allowing water to accumulate in decorative pots or saucers.",
    "Maintain warm growing conditions and protect the plant from prolonged cold temperatures.",
    "Provide good air circulation, especially during humid or rainy periods, to reduce moisture-related problems.",
    "Feed sparingly during active growth with a balanced succulent fertilizer according to the manufacturer's instructions.",
    "Remove dry, damaged or unhealthy leaves using clean scissors or pruning tools.",
    "Monitor the plant for tiny plantlets developing along the leaf tips. These can fall into nearby pots or garden soil and establish new plants.",
    "Remove unwanted plantlets regularly to prevent uncontrolled spreading.",
    "Keep the plant in a contained growing area, particularly where it could spread into nearby gardens or natural environments.",
    "Inspect periodically for common succulent pests such as mealybugs and scale insects.",
    "Keep Mother of Millions away from children, pets and grazing animals because it contains toxic cardiac glycosides.",
    "Do not dispose of living plantlets or cuttings in natural areas or open garden spaces where they may establish new plants."
  ],
  propagation: [
    {
      method: "Plantlets",
      description:
        "Mother of Millions naturally produces miniature plantlets near the tips of its leaves. These plantlets can detach and root when they contact suitable soil. For controlled propagation, carefully collect a few healthy plantlets and place them on a well-draining succulent growing medium. Maintain warmth, bright indirect light and light moisture while they establish."
    },
    {
      method: "Stem Cuttings",
      description:
        "Healthy stem sections can also be used for propagation. Cut a suitable stem using clean tools and allow the cut surface to dry and callus before placing it in a well-draining succulent potting mix. Water cautiously until roots develop."
    },
    {
      method: "Seeds",
      description:
        "Mother of Millions can reproduce from seeds produced after flowering. However, propagation from naturally formed plantlets is generally much easier and faster. Seed production can also contribute to unwanted spreading."
    }
  ],
  benefits: [
    {
      title: "Unique Natural Propagation",
      description:
        "The plant produces miniature plantlets along its leaves, making it a fascinating example of vegetative reproduction."
    },
    {
      title: "Low-Maintenance Succulent",
      description:
        "Mother of Millions requires relatively infrequent watering and grows well in bright conditions with suitable drainage."
    },
    {
      title: "Distinctive Leaf Structure",
      description:
        "Its narrow, tubular leaves and upright stems create an unusual architectural appearance."
    },
    {
      title: "Interesting Ornamental Display",
      description:
        "The combination of patterned foliage and developing plantlets makes Mother of Millions an eye-catching addition to contained succulent collections."
    },
    {
      title: "Drought Tolerant",
      description:
        "Its succulent leaves store water, allowing established plants to tolerate dry periods."
    },
    {
      title: "Potential for Colourful Flowers",
      description:
        "Mature plants may produce clusters of attractive hanging flowers under suitable growing conditions."
    }
  ]
},

{
  id: "donkey-ears",
  name: "Donkey Ears",
  scientificName: "Kalanchoe gastonis-bonnieri",
  category: "Succulent",
  careLevel: "Easy",
  shortDescription:
    "An unusual ornamental succulent with large, fleshy, spotted leaves that can produce miniature plantlets along their margins.",
  description:
    "Donkey Ears (Kalanchoe gastonis-bonnieri) is a distinctive succulent native to Madagascar, admired for its large, elongated leaves and unusual ornamental appearance. Its fleshy foliage is typically green to grey-green with reddish-brown or purple markings that may become more pronounced under suitable light conditions. Mature leaves can produce miniature plantlets near their tips, allowing the plant to reproduce naturally. Donkey Ears thrives in warm conditions with bright light, well-draining soil and careful watering. Its dramatic foliage makes it an attractive choice for sunny patios, balconies, succulent collections and outdoor container gardens. Like other Kalanchoe species, it should be kept away from pets and grazing animals because ingestion may be harmful.",
  image: "/plants/donkey-ears.jpg",
  light: "Bright light to partial sun",
  water: "When the soil has dried substantially",
  temperature: "60–85°F (16–29°C)",
  careGuide: [
    "Place Donkey Ears in a bright location with plenty of natural light. Gentle direct morning sunlight can support healthy growth and attractive leaf colouring.",
    "Avoid suddenly exposing a shade-grown plant to intense afternoon sunlight. Introduce stronger light gradually to reduce the risk of leaf scorch.",
    "Allow the soil to dry substantially between waterings. Donkey Ears stores water in its fleshy leaves and generally tolerates short periods of dryness better than prolonged wet conditions.",
    "Water thoroughly when needed, allowing excess water to drain completely from the bottom of the container.",
    "Avoid overwatering because constantly saturated soil can contribute to root rot and unhealthy foliage.",
    "Use a fast-draining cactus or succulent potting mix. Adding perlite, pumice or coarse mineral material can improve drainage.",
    "Grow the plant in a container with drainage holes. Avoid allowing standing water to accumulate in saucers or decorative pots.",
    "Maintain warm growing conditions and protect the plant from prolonged exposure to cold temperatures.",
    "Provide good air circulation, particularly during humid or rainy periods, to reduce moisture-related problems.",
    "Feed lightly during active growth with a balanced succulent fertilizer according to the manufacturer's instructions.",
    "Remove dry, damaged or unhealthy leaves using clean pruning tools.",
    "Monitor mature leaves for developing plantlets. These may detach and establish themselves in nearby soil.",
    "Remove unwanted plantlets regularly if you want to control the plant's spread within your garden or container collection.",
    "Inspect the plant periodically for common succulent pests such as mealybugs and scale insects.",
    "Keep Donkey Ears away from children, pets and grazing animals because Kalanchoe plants contain compounds that may be toxic if ingested.",
    "Repot when the plant becomes crowded or outgrows its container, preferably during active growth."
  ],
  propagation: [
    {
      method: "Plantlets",
      description:
        "Donkey Ears can produce miniature plantlets near the tips or margins of mature leaves. Once these plantlets develop sufficiently, they can be carefully separated and placed in a well-draining succulent growing medium. Keep them warm and provide bright indirect light with cautious watering until established."
    },
    {
      method: "Stem Cuttings",
      description:
        "Healthy stem sections can be used for propagation. Cut a suitable section using clean pruning tools, allow the cut surface to dry and callus, then plant it in a fast-draining succulent mix. Water sparingly until roots develop."
    },
    {
      method: "Leaf Propagation",
      description:
        "Healthy mature leaves may sometimes be used for propagation, particularly when they already carry developing plantlets. Allow detached leaf material to dry appropriately and place it on a suitable propagation medium while monitoring for new growth."
    }
  ],
  benefits: [
    {
      title: "Distinctive Spotted Foliage",
      description:
        "Its large green to grey-green leaves with reddish-brown markings create an unusual and attractive ornamental appearance."
    },
    {
      title: "Unique Natural Propagation",
      description:
        "Mature leaves can produce miniature plantlets, making Donkey Ears an interesting plant for observing vegetative reproduction."
    },
    {
      title: "Drought Tolerant",
      description:
        "Its fleshy succulent leaves store water, allowing established plants to tolerate periods of dryness."
    },
    {
      title: "Excellent Container Plant",
      description:
        "Donkey Ears can be grown in containers on bright balconies, patios and other warm outdoor spaces."
    },
    {
      title: "Bold Ornamental Appearance",
      description:
        "Its broad, elongated foliage gives it a distinctive architectural form that stands out in succulent collections."
    },
    {
      title: "Relatively Low Maintenance",
      description:
        "With suitable light, well-draining soil and careful watering, Donkey Ears can be maintained without complicated care requirements."
    }
  ]
},

{
  id: "lemon-barrel-cactus",
  name: "Lemon Barrel Cactus",
  scientificName: "Kroenleinia grusonii",
  category: "Cactus",
  careLevel: "Easy",
  shortDescription:
    "A distinctive rounded cactus with prominent golden-yellow spines, deep ribs and an attractive architectural appearance.",
  description:
    "Lemon Barrel Cactus, more commonly known as Golden Barrel Cactus, is a striking ornamental cactus admired for its rounded green body, pronounced ribs and dense golden-yellow spines. Originally described as Echinocactus grusonii and now also classified as Kroenleinia grusonii, this slow-growing species is native to central Mexico. Young plants have a compact, globular shape, while mature specimens can become larger and more barrel-like. Its sculptural appearance makes it an excellent choice for sunny patios, balconies, cactus collections and decorative container gardens. Lemon Barrel Cactus thrives in bright sunlight, warm conditions and exceptionally well-draining soil. Although relatively easy to maintain, its sharp spines require careful handling.",
  image: "/plants/lemon-barrel-cactus.jpg",
  light: "Full sun to very bright light",
  water: "When the potting mix has dried completely",
  temperature: "65–90°F (18–32°C)",
  careGuide: [
    "Place Lemon Barrel Cactus in a location receiving abundant sunlight. Established plants generally grow best with several hours of direct sunlight each day.",
    "Introduce newly purchased or shade-grown plants gradually to strong direct sunlight to prevent sunburn or damage to the cactus surface.",
    "Allow the potting mix to dry completely between waterings. Lemon Barrel Cactus stores water in its stem and is highly sensitive to prolonged waterlogging.",
    "When watering, thoroughly moisten the potting mix and allow excess water to drain completely. Reduce watering during periods of slower growth or prolonged cloudy weather.",
    "Use a fast-draining cactus potting mix containing substantial mineral material such as pumice, perlite, coarse sand or suitable gravel.",
    "Choose a container with drainage holes. Avoid decorative pots that trap excess water around the roots.",
    "Protect container-grown plants from prolonged heavy rainfall, especially during humid or rainy periods when the potting mix may remain wet for too long.",
    "Maintain warm growing conditions and protect the cactus from prolonged cold, particularly when the soil is wet.",
    "Provide good airflow around the plant to help reduce moisture-related problems.",
    "Feed sparingly during active growth using a cactus or succulent fertilizer according to the manufacturer's instructions.",
    "Avoid excessive fertilization because it can encourage weak or unnatural growth.",
    "Handle the cactus carefully because its long, rigid spines can puncture skin. Use thick protective gloves, folded cardboard or suitable handling tools when repotting.",
    "Remove accumulated debris from around the cactus using a soft brush or suitable tool rather than touching the spines directly.",
    "Repot only when necessary, preferably during active growth. Choose a container slightly larger than the root system.",
    "Inspect the plant periodically for mealybugs, scale insects and signs of root problems.",
    "Keep the cactus away from young children and pets because its sharp spines can cause physical injury.",
    "Be patient with growth. Lemon Barrel Cactus is naturally slow-growing and may take many years to develop into a large specimen."
  ],
  propagation: [
    {
      method: "Seed Propagation",
      description:
        "Lemon Barrel Cactus is most commonly propagated from seeds. Sow fresh seeds on a suitable sterile, well-draining cactus growing medium and maintain warm conditions with controlled moisture and bright indirect light during germination. Seedlings should be introduced gradually to stronger sunlight as they mature."
    },
    {
      method: "Offsets",
      description:
        "Although Lemon Barrel Cactus is generally solitary, occasional offsets may develop, particularly on mature or damaged plants. If a healthy offset forms, it may be separated carefully and allowed to callus before planting in a well-draining cactus mix. Offset propagation is uncommon compared with growing this species from seed."
    }
  ],
  benefits: [
    {
      title: "Distinctive Architectural Shape",
      description:
        "Its rounded body and pronounced ribs create a sculptural appearance that stands out in cactus collections and decorative plant displays."
    },
    {
      title: "Beautiful Golden Spines",
      description:
        "The dense golden-yellow spines give Lemon Barrel Cactus its characteristic appearance and make it an attractive ornamental specimen."
    },
    {
      title: "Drought Tolerant",
      description:
        "Its water-storing stem allows established plants to tolerate extended dry periods when grown under suitable conditions."
    },
    {
      title: "Excellent for Sunny Spaces",
      description:
        "Lemon Barrel Cactus is well suited to bright patios, balconies, rock gardens and sunny outdoor container displays."
    },
    {
      title: "Relatively Low Maintenance",
      description:
        "With abundant light, careful watering and excellent drainage, this cactus requires relatively little routine maintenance."
    },
    {
      title: "Long-Lived Ornamental Plant",
      description:
        "With appropriate care, Lemon Barrel Cactus can remain an attractive specimen for many years, gradually developing a larger and more impressive form."
    }
  ]
},




]
