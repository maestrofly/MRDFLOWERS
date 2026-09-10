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
}
]
