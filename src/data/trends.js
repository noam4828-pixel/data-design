// Drop your own editorial photo at public/images/trends/<filename> using this
// exact filename — the app falls back to a clean palette-tinted placeholder
// (no broken-image icon, no stock photo) until the file exists.
const img = (filename) => `/images/trends/${filename}`

// Drop key-piece product photos at public/images/keyitems/<filename>.
const keyItemImg = (filename) => `/images/keyitems/${filename}`

export const trends = [
  {
    id: 1,
    number: '01',
    title: 'BUTTER YELLOW',
    status: 'HOT/EMERGING',
    image: img('butter-yellow.jpg'),
    gallery: [
      img('butter-yellow.jpg'),
      img('butter-yellow2.png'),
      img('butter-yellow3.png'),
      img('butter-yellow4.png'),
      img('butter-yellow5.png'),
    ],
    description:
      "The season's new neutral. 'Butter Yellow' has officially replaced traditional whites and creams, offering a soft, sophisticated warmth to the minimalist wardrobe. Driven by Paris runways and viral TikTok styling loops, it is celebrated for its effortless versatility and seamless pairing with rich earthy tones.",
    tagline:
      'A new neutral. Even after the social media hype cools down, this tone remains a timeless wardrobe staple.',
    palette: [
      {
        hex: '#A3BCC9',
        gallery: [
          img('colorpallete/babyblue2.png'),
          img('colorpallete/babyblue1.png'),
          img('colorpallete/babyblue3.png'),
          img('colorpallete/babyblue4.png'),
          img('colorpallete/babyblue5.png'),
          img('colorpallete/babyblue6.png'),
        ],
      },
      {
        hex: '#3D2722',
        gallery: [
          img('brown-yellow1.png'),
          img('brown-yellow2.png'),
          img('brown-yellow3.png'),
          img('brown-yellow4.png'),
          img('brown-yellow5.png'),
          img('brown-yellow6.png'),
        ],
      },
      {
        hex: '#FCD3D9',
        gallery: [
          img('colorpallete/pink2.png'),
          img('colorpallete/pink1.png'),
          img('colorpallete/pink3.png'),
          img('colorpallete/pink4.png'),
          img('colorpallete/pink5.png'),
          img('colorpallete/pink6.png'),
        ],
      },
      {
        hex: '#810614',
        gallery: [
          img('colorpallete/red2.png'),
          img('colorpallete/red1.png'),
          img('colorpallete/red3.png'),
          img('colorpallete/red4.png'),
          img('colorpallete/red5.png'),
          img('colorpallete/red6.png'),
        ],
      },
    ],

    keyItems: [
      { brand: 'ZARA', name: 'Midi satin dress', category: 'Dresses', price: '239.90 ₪', image: keyItemImg('saten-dress.png') },
      { brand: 'ZARA', name: 'Short sleeve cardigan', category: 'Knitwear', price: '129.90 ₪', image: keyItemImg('Short-sleeve-cardigan.png') },
      { brand: 'MANGO', name: 'Wrap skirt', category: 'Skirts', price: '279.90 ₪', image: keyItemImg('Wrap-Skirt.png') },
      { brand: 'MANGO', name: 'Asymmetrical Top', category: 'Tops', price: '139.90 ₪', image: keyItemImg('Asymmetrical-Top-mango-2.png'), imageFit: 'cover' },
      { brand: 'ADDICT', name: 'Baloon pants', category: 'Pants', price: '99 ₪', image: keyItemImg('Baloon-pants-addict.png') },
      { brand: 'REVOLVE', name: 'Chino Sport Cap', category: 'Accessories', price: '146 ₪', image: keyItemImg('chino-sport-cap.jpg') },
      { brand: 'ADA', name: 'Sequin Knit Top', category: 'Tops', price: '149.90 ₪', image: keyItemImg('sequin-knit-top.jpg') },
      { brand: 'ADIDAS', name: 'SL72 OG Shoes', category: 'Shoes', price: '449.90 ₪', image: keyItemImg('sl72-og-shoes.jpg') },
    ],
    tiktokSentiment: 88,
    pinterestVolume: 42,
    // "How to Adopt It" — three curated sub-collections. The last one is a
    // name-only "shop your closet" row.
    collections: [
      {
        title: 'The Statement Piece',
        items: [
          { brand: 'ZARA', name: 'Midi satin dress', price: '239.90 ₪', image: keyItemImg('saten-dress.png') },
          { brand: 'ZARA', name: 'Short sleeve cardigan', price: '129.90 ₪', image: keyItemImg('Short-sleeve-cardigan.png') },
          { brand: 'MANGO', name: 'Wrap skirt', price: '279.90 ₪', image: keyItemImg('Wrap-Skirt.png') },
        ],
      },
      {
        title: 'The Smart Twist',
        items: [
          { brand: 'REVOLVE', name: 'Chino Sport Cap', price: '146 ₪', image: keyItemImg('sportcap.png'), imageFit: 'cover' },
          { brand: 'ADIDAS', name: 'SL72 OG Shoes', price: '449.90 ₪', image: keyItemImg('adidas.png'), imageFit: 'cover' },
          { brand: 'COS', name: 'Mini cavatelli clutch bag', price: '279.90 ₪', image: keyItemImg('cos2.png'), imageFit: 'cover' },
        ],
      },
      {
        title: 'Shop Your Closet',
        nameOnly: true,
        items: [{ name: 'Button-down shirt' }, { name: 'Tailored shorts' }, { name: 'Sneakers shoes' }],
      },
    ],
    // "Spotted on social" — viral clips. `url` cards open the original post and
    // show a play button + platform icon; image-only entries are placeholders.
    social: [
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@vanessatiiu/video/7529961511264062726',
        author: 'vanessatiiu',
        image: '/social/tiktok-vanessatiiu.jpg',
      },
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@babyboofashion/video/7643628577812090132',
        author: 'babyboofashion',
        image: '/social/tiktok-babyboofashion.jpg',
      },
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@katelynscart/video/7616526069914537230',
        author: 'katelynscart',
        image: '/social/tiktok-katelynscart.jpg',
      },
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@costesfashion/video/7639353674623454496',
        author: 'costesfashion',
        image: '/social/tiktok-costesfashion.jpg',
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/Dachbzku9sJ/',
        author: 'vogue',
        image: '/social/ig-dachbzku9sj.jpg',
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/p/C5djfdRPygs/',
        author: 'nikakes',
        image: '/social/ig-c5djfdrpygs.jpg',
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/p/DVdvkZIjKIl/',
        image: '/social/ig-dvdvkzijkil.jpg',
      },
      {
        platform: 'tiktok',
        url: 'https://www.tiktok.com/@loloblogger.k/video/7509918586312363282',
        author: 'loloblogger.k',
        image: '/social/tiktok-loloblogger-k.jpg',
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/p/DNEDMUTMcWD/',
        image: '/social/ig-dnedmutmcwd.jpg',
      },
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'BUBBLE HEMS',
    status: 'PEAK',
    image: img('bubble-hems.png'),
    gallery: [
      img('bubble-hems.png'),
      img('bubble-hems2.png'),
      img('bubble-hems3.png'),
      img('bubble-hems4.png'),
      img('bubble-hems5.png'),
    ],
    description:
      "Volume is the language of the season. Bubble hems balloon outward before cinching sharply at the ankle, turning everyday trousers and skirts into architectural statements. Once a runway curiosity, the silhouette has settled into mainstream wardrobes via relaxed linen separates and breezy summer tailoring.",
    palette: [
      { hex: '#EDE7DD' },
      { hex: '#2B2B2B' },
      { hex: '#C9B79C' },
      { hex: '#7C8471' },
      { hex: '#5A4A3C' },
      { hex: '#D8C8B8' },
    ],

    keyItems: [
      { brand: 'H&M', name: 'Tailored short', category: 'Shorts', price: '129.90 ₪', image: keyItemImg('bubble-hems-1.jpg') },
      { brand: 'COS', name: 'Ribbed tank', category: 'Tops', price: '259.90 ₪', image: keyItemImg('bubble-hems-2.jpg') },
      { brand: 'UNIQLO', name: 'Relaxed blazer', category: 'Outerwear', price: '129.90 ₪', image: keyItemImg('bubble-hems-3.jpg') },
    ],
    tiktokSentiment: 94,
    pinterestVolume: 49,
  },
  {
    id: 3,
    number: '03',
    title: 'WEDGE THONGS',
    status: 'RISING',
    image: img('wedge-thongs.jpg'),
    description:
      "A nostalgic 2000s shape returns with a modern lift. The wedge thong sandal pairs the comfort of a flip-flop with the elevation of a platform, becoming the off-duty shoe of choice for warm-weather dressing. Expect them in tan leathers, woven raffia, and high-shine patents alike.",
    palette: [
      { hex: '#D9A06B' },
      { hex: '#2E2A26' },
      { hex: '#B0795A' },
      { hex: '#7A6A58' },
      { hex: '#C7A77E' },
      { hex: '#3F3633' },
    ],

    keyItems: [
      { brand: 'COS', name: 'Pleated skirt', category: 'Skirts', price: '279.90 ₪', image: keyItemImg('wedge-thongs-1.jpg') },
      { brand: 'UNIQLO', name: 'Tailored short', category: 'Shorts', price: '149.90 ₪', image: keyItemImg('wedge-thongs-2.jpg') },
      { brand: 'MASSIMO DUTTI', name: 'Ribbed tank', category: 'Tops', price: '279.90 ₪', image: keyItemImg('wedge-thongs-3.jpg') },
    ],
    tiktokSentiment: 67,
    pinterestVolume: 20,
  },
  {
    id: 4,
    number: '04',
    title: 'SHEER DRESSING',
    status: 'RISING',
    image: img('sheer-dressing.png'),
    description:
      'Transparency moves from eveningwear into daily rotation. Sheer overlays, mesh panels, and gauzy fabrications are layered over solid foundations, offering texture and intrigue without ever feeling exposed.',
    palette: [
      { hex: '#EDEDEA' },
      { hex: '#2C2C2C' },
      { hex: '#BFC2C7' },
      { hex: '#8A8D91' },
      { hex: '#D6D2C4' },
      { hex: '#4B4B4B' },
    ],

    keyItems: [
      { brand: 'UNIQLO', name: 'Relaxed blazer', category: 'Outerwear', price: '169.90 ₪', image: keyItemImg('sheer-dressing-1.jpg') },
      { brand: 'MASSIMO DUTTI', name: 'Pleated skirt', category: 'Skirts', price: '299.90 ₪', image: keyItemImg('sheer-dressing-2.jpg') },
      { brand: 'ZARA', name: 'Tailored short', category: 'Shorts', price: '169.90 ₪', image: keyItemImg('sheer-dressing-3.jpg') },
    ],
    tiktokSentiment: 57,
    pinterestVolume: 27,
  },
  {
    id: 5,
    number: '05',
    title: 'TAILORED BERMUDAS',
    status: 'STABLE',
    image: img('tailored-bermudas.png'),
    description:
      'The knee-length short graduates into formal wardrobes. Crisp creases, suiting fabrics, and a tailored rise make bermudas a credible substitute for trousers in warm-weather offices and city evenings.',
    palette: [
      { hex: '#E7DCC8' },
      { hex: '#322C26' },
      { hex: '#A89A7E' },
      { hex: '#5E564A' },
      { hex: '#C2B49A' },
      { hex: '#3A332C' },
    ],

    keyItems: [
      { brand: 'MASSIMO DUTTI', name: 'Ribbed tank', category: 'Tops', price: '319.90 ₪', image: keyItemImg('tailored-bermudas-1.jpg') },
      { brand: 'ZARA', name: 'Relaxed blazer', category: 'Outerwear', price: '189.90 ₪', image: keyItemImg('tailored-bermudas-2.jpg') },
      { brand: 'MANGO', name: 'Pleated skirt', category: 'Skirts', price: '319.90 ₪', image: keyItemImg('tailored-bermudas-3.jpg') },
    ],
    tiktokSentiment: 73,
    pinterestVolume: 39,
  },
  {
    id: 6,
    number: '06',
    title: 'LACE TRIM',
    status: 'STABLE',
    image: img('lace-trim.png'),
    description:
      'Delicate lace edging reappears on hemlines, collars, and camisole straps, softening otherwise minimal pieces with a romantic, vintage-leaning detail.',
    palette: [
      { hex: '#F2EFE9' },
      { hex: '#1E1E1E' },
      { hex: '#CBB8A6' },
      { hex: '#7D6F63' },
      { hex: '#E3D9CC' },
      { hex: '#4A413A' },
    ],

    keyItems: [
      { brand: 'ZARA', name: 'Tailored short', category: 'Shorts', price: '209.90 ₪', image: keyItemImg('lace-trim-1.jpg') },
      { brand: 'MANGO', name: 'Ribbed tank', category: 'Tops', price: '339.90 ₪', image: keyItemImg('lace-trim-2.jpg') },
      { brand: 'H&M', name: 'Relaxed blazer', category: 'Outerwear', price: '209.90 ₪', image: keyItemImg('lace-trim-3.jpg') },
    ],
    tiktokSentiment: 63,
    pinterestVolume: 25,
  },
  {
    id: 7,
    number: '07',
    title: 'FAUX LAYERING',
    status: 'RISING',
    image: img('faux-layering.jpg'),
    description:
      'Mock-layered pieces fake the look of a camisole under a sheer top or a shirt under a sweater, delivering depth and dimension without the bulk of actually layering.',
    palette: [
      { hex: '#F0E9E4' },
      { hex: '#23211F' },
      { hex: '#A6A9AD' },
      { hex: '#6E6258' },
      { hex: '#D2C2B4' },
      { hex: '#3D3935' },
    ],

    keyItems: [
      { brand: 'MANGO', name: 'Pleated skirt', category: 'Skirts', price: '99.90 ₪', image: keyItemImg('faux-layering-1.jpg') },
      { brand: 'H&M', name: 'Tailored short', category: 'Shorts', price: '229.90 ₪', image: keyItemImg('faux-layering-2.jpg') },
      { brand: 'COS', name: 'Ribbed tank', category: 'Tops', price: '99.90 ₪', image: keyItemImg('faux-layering-3.jpg') },
    ],
    tiktokSentiment: 69,
    pinterestVolume: 27,
  },
  {
    id: 8,
    number: '08',
    title: 'RAW DENIM',
    status: 'PEAK',
    image: img('raw-denim.png'),
    description:
      'Unwashed, rigid denim returns to the forefront, prized for the way it molds uniquely to the wearer over time. Indigo-heavy and unembellished, it signals a return to craft over distress.',
    palette: [
      { hex: '#1F2B3A' },
      { hex: '#0E1620' },
      { hex: '#3C4F66' },
      { hex: '#7E8C9A' },
      { hex: '#101010' },
      { hex: '#A9B4BD' },
    ],

    keyItems: [
      { brand: 'H&M', name: 'Relaxed blazer', category: 'Outerwear', price: '249.90 ₪', image: keyItemImg('raw-denim-1.jpg') },
      { brand: 'COS', name: 'Pleated skirt', category: 'Skirts', price: '119.90 ₪', image: keyItemImg('raw-denim-2.jpg') },
      { brand: 'UNIQLO', name: 'Tailored short', category: 'Shorts', price: '249.90 ₪', image: keyItemImg('raw-denim-3.jpg') },
    ],
    tiktokSentiment: 88,
    pinterestVolume: 49,
  },
  {
    id: 9,
    number: '09',
    title: 'UTILITY TECH',
    status: 'HOT/EMERGING',
    image: img('utility-tech.jpg'),
    description:
      'Technical fabrications meet utilitarian detailing — cargo pockets, adjustable straps, and matte hardware bring a gorpcore practicality to otherwise streamlined silhouettes.',
    palette: [
      { hex: '#6B7460' },
      { hex: '#2A2D24' },
      { hex: '#8C9580' },
      { hex: '#454A3C' },
      { hex: '#B8BCA8' },
      { hex: '#1B1C16' },
    ],

    keyItems: [
      { brand: 'COS', name: 'Ribbed tank', category: 'Tops', price: '139.90 ₪', image: keyItemImg('utility-tech-1.jpg') },
      { brand: 'UNIQLO', name: 'Relaxed blazer', category: 'Outerwear', price: '269.90 ₪', image: keyItemImg('utility-tech-2.jpg') },
      { brand: 'MASSIMO DUTTI', name: 'Pleated skirt', category: 'Skirts', price: '139.90 ₪', image: keyItemImg('utility-tech-3.jpg') },
    ],
    tiktokSentiment: 87,
    pinterestVolume: 30,
  },
  {
    id: 10,
    number: '10',
    title: 'CHERRY RED',
    status: 'HOT/EMERGING',
    image: img('cherry-red.jpg'),
    description:
      'A saturated, high-energy red moves beyond accent status into full outfit territory, worn head-to-toe as a confident departure from quiet luxury neutrals.',
    palette: [
      { hex: '#A3192D' },
      { hex: '#2B0A0E' },
      { hex: '#D94F5C' },
      { hex: '#5C1620' },
      { hex: '#F2C6CB' },
      { hex: '#160506' },
    ],

    keyItems: [
      { brand: 'UNIQLO', name: 'Tailored short', category: 'Shorts', price: '289.90 ₪', image: keyItemImg('cherry-red-1.jpg') },
      { brand: 'MASSIMO DUTTI', name: 'Ribbed tank', category: 'Tops', price: '159.90 ₪', image: keyItemImg('cherry-red-2.jpg') },
      { brand: 'ZARA', name: 'Relaxed blazer', category: 'Outerwear', price: '289.90 ₪', image: keyItemImg('cherry-red-3.jpg') },
    ],
    tiktokSentiment: 83,
    pinterestVolume: 37,
  },
  {
    id: 11,
    number: '11',
    title: 'MESH BALLET',
    status: 'RISING',
    image: img('mesh-ballet.jpg'),
    description:
      'Ballet flats reappear in sheer mesh uppers, blending the balletcore aesthetic with a delicate, almost-bare look that pairs equally well with tulle skirts and tailored trousers.',
    palette: [
      { hex: '#F3EDEE' },
      { hex: '#2D2A2B' },
      { hex: '#E5C7CD' },
      { hex: '#8C7A7E' },
      { hex: '#C9A8AF' },
      { hex: '#403639' },
    ],

    keyItems: [
      { brand: 'MASSIMO DUTTI', name: 'Pleated skirt', category: 'Skirts', price: '179.90 ₪', image: keyItemImg('mesh-ballet-1.jpg') },
      { brand: 'ZARA', name: 'Tailored short', category: 'Shorts', price: '309.90 ₪', image: keyItemImg('mesh-ballet-2.jpg') },
      { brand: 'MANGO', name: 'Ribbed tank', category: 'Tops', price: '179.90 ₪', image: keyItemImg('mesh-ballet-3.jpg') },
    ],
    tiktokSentiment: 71,
    pinterestVolume: 34,
  },
  {
    id: 12,
    number: '12',
    title: 'SKIRT OVER PANTS',
    status: 'RISING',
    image: img('skirt-over-pants.jpg'),
    description:
      'A mini or midi skirt is layered directly over trousers, creating a hybrid silhouette that has migrated from street-style outliers into a recognizable seasonal staple.',
    palette: [
      { hex: '#D9C7AE' },
      { hex: '#2E2B26' },
      { hex: '#8B6F4E' },
      { hex: '#54483A' },
      { hex: '#C2A878' },
      { hex: '#1D1A16' },
    ],

    keyItems: [
      { brand: 'ZARA', name: 'Relaxed blazer', category: 'Outerwear', price: '329.90 ₪', image: keyItemImg('skirt-over-pants-1.jpg') },
      { brand: 'MANGO', name: 'Pleated skirt', category: 'Skirts', price: '199.90 ₪', image: keyItemImg('skirt-over-pants-2.jpg') },
      { brand: 'H&M', name: 'Tailored short', category: 'Shorts', price: '329.90 ₪', image: keyItemImg('skirt-over-pants-3.jpg') },
    ],
    tiktokSentiment: 61,
    pinterestVolume: 20,
  },
  {
    id: 13,
    number: '13',
    title: 'MODERN BOHO',
    status: 'STABLE',
    image: img('modern-boho.jpg'),
    description:
      'Bohemian staples — paisley prints, fringe, and flowing silhouettes — are reworked with cleaner lines and a restrained palette, trading festival excess for everyday wearability.',
    palette: [
      { hex: '#C9A36A' },
      { hex: '#3A2C1E' },
      { hex: '#8E6F4E' },
      { hex: '#6B4A33' },
      { hex: '#E3CBA0' },
      { hex: '#241B12' },
    ],

    keyItems: [
      { brand: 'MANGO', name: 'Ribbed tank', category: 'Tops', price: '219.90 ₪', image: keyItemImg('modern-boho-1.jpg') },
      { brand: 'H&M', name: 'Relaxed blazer', category: 'Outerwear', price: '89.90 ₪', image: keyItemImg('modern-boho-2.jpg') },
      { brand: 'COS', name: 'Pleated skirt', category: 'Skirts', price: '219.90 ₪', image: keyItemImg('modern-boho-3.jpg') },
    ],
    tiktokSentiment: 77,
    pinterestVolume: 32,
  },
  {
    id: 14,
    number: '14',
    title: 'CORPORATE SLEEK',
    status: 'PEAK',
    image: img('corporate-sleek.jpg'),
    description:
      'Sharp shoulders, monochrome suiting, and polished accessories define a corporate aesthetic stripped of excess — power dressing rebuilt for a quieter, more deliberate era.',
    palette: [
      { hex: '#1C1C1E' },
      { hex: '#3A3A3C' },
      { hex: '#8E8E93' },
      { hex: '#C7C7CC' },
      { hex: '#E5E5EA' },
      { hex: '#0A0A0B' },
    ],

    keyItems: [
      { brand: 'H&M', name: 'Tailored short', category: 'Shorts', price: '109.90 ₪', image: keyItemImg('corporate-sleek-1.jpg') },
      { brand: 'COS', name: 'Ribbed tank', category: 'Tops', price: '239.90 ₪', image: keyItemImg('corporate-sleek-2.jpg') },
      { brand: 'UNIQLO', name: 'Relaxed blazer', category: 'Outerwear', price: '109.90 ₪', image: keyItemImg('corporate-sleek-3.jpg') },
    ],
    tiktokSentiment: 94,
    pinterestVolume: 49,
  },
  {
    id: 15,
    number: '15',
    title: 'CROCHET LOOK',
    status: 'RISING',
    image: img('crochet-look.jpg'),
    description:
      'Hand-crafted crochet texture spreads from beachwear into tops, dresses, and accessories, valued for its tactile, artisanal quality in an increasingly digital wardrobe.',
    palette: [
      { hex: '#EADFC4' },
      { hex: '#2B271E' },
      { hex: '#B79A6B' },
      { hex: '#6E5C3F' },
      { hex: '#D8C49B' },
      { hex: '#19160F' },
    ],

    keyItems: [
      { brand: 'COS', name: 'Pleated skirt', category: 'Skirts', price: '259.90 ₪', image: keyItemImg('crochet-look-1.jpg') },
      { brand: 'UNIQLO', name: 'Tailored short', category: 'Shorts', price: '129.90 ₪', image: keyItemImg('crochet-look-2.jpg') },
      { brand: 'MASSIMO DUTTI', name: 'Ribbed tank', category: 'Tops', price: '259.90 ₪', image: keyItemImg('crochet-look-3.jpg') },
    ],
    tiktokSentiment: 73,
    pinterestVolume: 20,
  },
  {
    id: 16,
    number: '16',
    title: 'SLOUCHY XL BAGS',
    status: 'HOT/EMERGING',
    image: img('slouchy-bags.jpg'),
    description:
      'Oversized, unstructured bags slump rather than stand, prioritizing soft volume and capacity over rigid shape — a deliberate counterpoint to years of structured top-handles.',
    palette: [
      { hex: '#4A3B30' },
      { hex: '#1A1410' },
      { hex: '#7C6650' },
      { hex: '#2E2520' },
      { hex: '#A98F71' },
      { hex: '#0F0C09' },
    ],

    keyItems: [
      { brand: 'UNIQLO', name: 'Relaxed blazer', category: 'Outerwear', price: '149.90 ₪', image: keyItemImg('slouchy-bags-1.jpg') },
      { brand: 'MASSIMO DUTTI', name: 'Pleated skirt', category: 'Skirts', price: '279.90 ₪', image: keyItemImg('slouchy-bags-2.jpg') },
      { brand: 'ZARA', name: 'Tailored short', category: 'Shorts', price: '149.90 ₪', image: keyItemImg('slouchy-bags-3.jpg') },
    ],
    tiktokSentiment: 89,
    pinterestVolume: 37,
  },
  {
    id: 17,
    number: '17',
    title: 'CYBER SHADES',
    status: 'RISING',
    image: img('cyber-shades.jpg'),
    description:
      'Wraparound frames and mirrored lenses bring a Y2K, futuristic edge to eyewear, favored for their bold, sculptural presence against otherwise minimal outfits.',
    palette: [
      { hex: '#0E0E10' },
      { hex: '#3D8FB0' },
      { hex: '#1B1B1D' },
      { hex: '#7FD1E0' },
      { hex: '#2A2A2D' },
      { hex: '#C7EAF0' },
    ],

    keyItems: [
      { brand: 'MASSIMO DUTTI', name: 'Ribbed tank', category: 'Tops', price: '299.90 ₪', image: keyItemImg('cyber-shades-1.jpg') },
      { brand: 'ZARA', name: 'Relaxed blazer', category: 'Outerwear', price: '169.90 ₪', image: keyItemImg('cyber-shades-2.jpg') },
      { brand: 'MANGO', name: 'Pleated skirt', category: 'Skirts', price: '299.90 ₪', image: keyItemImg('cyber-shades-3.jpg') },
    ],
    tiktokSentiment: 74,
    pinterestVolume: 34,
  },
  {
    id: 18,
    number: '18',
    title: 'KNIT POLO',
    status: 'STABLE',
    image: img('knit-polo.jpg'),
    description:
      'The knit polo bridges casual and smart-casual wardrobes, its ribbed collar and fine-gauge yarn offering a more elevated alternative to the classic cotton tee.',
    palette: [
      { hex: '#D6CDBF' },
      { hex: '#2A2722' },
      { hex: '#8C8275' },
      { hex: '#54493D' },
      { hex: '#B7AC98' },
      { hex: '#161412' },
    ],

    keyItems: [
      { brand: 'ZARA', name: 'Tailored short', category: 'Shorts', price: '189.90 ₪', image: keyItemImg('knit-polo-1.jpg') },
      { brand: 'MANGO', name: 'Ribbed tank', category: 'Tops', price: '319.90 ₪', image: keyItemImg('knit-polo-2.jpg') },
      { brand: 'H&M', name: 'Relaxed blazer', category: 'Outerwear', price: '189.90 ₪', image: keyItemImg('knit-polo-3.jpg') },
    ],
    tiktokSentiment: 69,
    pinterestVolume: 25,
  },
  {
    id: 19,
    number: '19',
    title: 'DEEP AUBERGINE',
    status: 'HOT/EMERGING',
    image: img('deep-aubergine.jpg'),
    description:
      'A near-black purple emerges as the season\'s richest neutral, lending depth to outerwear, knitwear, and accessories without straying into overt color.',
    palette: [
      { hex: '#3A2233' },
      { hex: '#150A12' },
      { hex: '#6B4159' },
      { hex: '#2A1721' },
      { hex: '#9C7188' },
      { hex: '#0C0509' },
    ],

    keyItems: [
      { brand: 'MANGO', name: 'Pleated skirt', category: 'Skirts', price: '339.90 ₪', image: keyItemImg('deep-aubergine-1.jpg') },
      { brand: 'H&M', name: 'Tailored short', category: 'Shorts', price: '209.90 ₪', image: keyItemImg('deep-aubergine-2.jpg') },
      { brand: 'COS', name: 'Ribbed tank', category: 'Tops', price: '339.90 ₪', image: keyItemImg('deep-aubergine-3.jpg') },
    ],
    tiktokSentiment: 92,
    pinterestVolume: 37,
  },
  {
    id: 20,
    number: '20',
    title: 'STATEMENT BELTS',
    status: 'RISING',
    image: img('statement-belts.jpg'),
    description:
      'Oversized buckles and contrast leathers turn the belt into a focal point rather than an afterthought, cinching everything from tailored coats to relaxed denim.',
    palette: [
      { hex: '#6B5B43' },
      { hex: '#241D14' },
      { hex: '#A9916B' },
      { hex: '#3C3022' },
      { hex: '#D6C4A0' },
      { hex: '#120E08' },
    ],

    keyItems: [
      { brand: 'H&M', name: 'Relaxed blazer', category: 'Outerwear', price: '229.90 ₪', image: keyItemImg('statement-belts-1.jpg') },
      { brand: 'COS', name: 'Pleated skirt', category: 'Skirts', price: '99.90 ₪', image: keyItemImg('statement-belts-2.jpg') },
      { brand: 'UNIQLO', name: 'Tailored short', category: 'Shorts', price: '229.90 ₪', image: keyItemImg('statement-belts-3.jpg') },
    ],
    tiktokSentiment: 65,
    pinterestVolume: 34,
  },
  {
    id: 21,
    number: '21',
    title: 'CAPRI PANTS',
    status: 'PEAK',
    image: img('capri-pants.jpg'),
    description:
      'Cropped just below the calf, capri pants make a confident 2000s comeback, styled close to the leg with platform shoes for a deliberately retro silhouette.',
    palette: [
      { hex: '#C9C2B3' },
      { hex: '#2D2A24' },
      { hex: '#8F8576' },
      { hex: '#4F493E' },
      { hex: '#E0DACB' },
      { hex: '#171510' },
    ],

    keyItems: [
      { brand: 'COS', name: 'Ribbed tank', category: 'Tops', price: '119.90 ₪', image: keyItemImg('capri-pants-1.jpg') },
      { brand: 'UNIQLO', name: 'Relaxed blazer', category: 'Outerwear', price: '249.90 ₪', image: keyItemImg('capri-pants-2.jpg') },
      { brand: 'MASSIMO DUTTI', name: 'Pleated skirt', category: 'Skirts', price: '119.90 ₪', image: keyItemImg('capri-pants-3.jpg') },
    ],
    tiktokSentiment: 87,
    pinterestVolume: 35,
  },
  {
    id: 22,
    number: '22',
    title: 'PLEATED MIDI',
    status: 'STABLE',
    image: img('pleated-midi.jpg'),
    description:
      'Fine, knife-edge pleating gives motion and structure to the midi skirt, a quiet workhorse silhouette that continues to anchor transitional wardrobes.',
    palette: [
      { hex: '#E2DCCB' },
      { hex: '#2B2820' },
      { hex: '#A89A7A' },
      { hex: '#5C5343' },
      { hex: '#CFC4A4' },
      { hex: '#15130E' },
    ],

    keyItems: [
      { brand: 'UNIQLO', name: 'Tailored short', category: 'Shorts', price: '269.90 ₪', image: keyItemImg('pleated-midi-1.jpg') },
      { brand: 'MASSIMO DUTTI', name: 'Ribbed tank', category: 'Tops', price: '139.90 ₪', image: keyItemImg('pleated-midi-2.jpg') },
      { brand: 'ZARA', name: 'Relaxed blazer', category: 'Outerwear', price: '269.90 ₪', image: keyItemImg('pleated-midi-3.jpg') },
    ],
    tiktokSentiment: 71,
    pinterestVolume: 32,
  },
  {
    id: 23,
    number: '23',
    title: 'CHUNKY LOAFERS',
    status: 'RISING',
    image: img('chunky-loafers.jpg'),
    description:
      'A heavier, lugged sole reinvents the classic loafer with a sporty undertone, grounding tailored and feminine looks alike in something deliberately unrefined.',
    palette: [
      { hex: '#3A2E22' },
      { hex: '#13100C' },
      { hex: '#6E5A42' },
      { hex: '#241C14' },
      { hex: '#A48A66' },
      { hex: '#0A0806' },
    ],

    keyItems: [
      { brand: 'MASSIMO DUTTI', name: 'Pleated skirt', category: 'Skirts', price: '159.90 ₪', image: keyItemImg('chunky-loafers-1.jpg') },
      { brand: 'ZARA', name: 'Tailored short', category: 'Shorts', price: '289.90 ₪', image: keyItemImg('chunky-loafers-2.jpg') },
      { brand: 'MANGO', name: 'Ribbed tank', category: 'Tops', price: '159.90 ₪', image: keyItemImg('chunky-loafers-3.jpg') },
    ],
    tiktokSentiment: 56,
    pinterestVolume: 34,
  },
  {
    id: 24,
    number: '24',
    title: 'SILK SCARVES',
    status: 'HOT/EMERGING',
    image: img('silk-scarves.jpg'),
    description:
      'Printed silk scarves move off the neck and onto bags, belt loops, and hair, becoming a flexible, low-commitment way to introduce pattern into a pared-back wardrobe.',
    palette: [
      { hex: '#B23A48' },
      { hex: '#221013' },
      { hex: '#D98C95' },
      { hex: '#5C2730' },
      { hex: '#EFC9CD' },
      { hex: '#100709' },
    ],

    keyItems: [
      { brand: 'ZARA', name: 'Relaxed blazer', category: 'Outerwear', price: '309.90 ₪', image: keyItemImg('silk-scarves-1.jpg') },
      { brand: 'MANGO', name: 'Pleated skirt', category: 'Skirts', price: '179.90 ₪', image: keyItemImg('silk-scarves-2.jpg') },
      { brand: 'H&M', name: 'Tailored short', category: 'Shorts', price: '309.90 ₪', image: keyItemImg('silk-scarves-3.jpg') },
    ],
    tiktokSentiment: 87,
    pinterestVolume: 30,
  },
]
