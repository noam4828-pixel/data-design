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
    hashtags: ['#butteryellow', '#summer2026', '#fashion', '#butteryellowoutfit'],
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
        items: [
          { name: 'Button-down shirt', image: keyItemImg('Button-down-shirt.png'), imageFit: 'cover' },
          { name: 'Tailored shorts', image: keyItemImg('Tailored-shorts.png'), imageFit: 'cover' },
          { name: 'Sneakers shoes', image: keyItemImg('Sneakers-shoes.png'), imageFit: 'cover' },
        ],
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
    gallery: [
      img('wedge-thongs.jpg'),
      img('wedge-thongs2.png'),
      img('wedge-thongs3.png'),
      img('wedge-thongs4.png'),
      img('wedge-thongs5.png'),
    ],
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
    image: img('cherry-red.png'),
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
    image: img('mesh-ballet.png'),
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
    image: img('skirt-over-pants.png'),
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
    image: img('modern-boho.png'),
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
    image: img('corporate-sleek.png'),
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
    image: img('crochet-look.png'),
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
    image: img('slouchy-xl-bags.png'),
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
    image: img('cyber-shades.png'),
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
    image: img('knit-polo.png'),
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
    image: img('deep-aubergine.png'),
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
    image: img('statement-belts.png'),
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
    image: img('capri-pants.png'),
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
    title: 'METALLIC SNEAKERS',
    status: 'RISING',
    image: img('metallic-sneakers.png'),
    description:
      'Chrome and silver sneakers step into the spotlight, adding a futuristic sheen to off-duty looks. Once a niche statement, the metallic finish is fast becoming the season’s go-to way to elevate denim and tailoring alike.',
    palette: [
      { hex: '#C7CACE' },
      { hex: '#8A9196' },
      { hex: '#5A6066' },
      { hex: '#D9DCE0' },
      { hex: '#3A3E42' },
      { hex: '#14161A' },
    ],

    keyItems: [
      { brand: 'ADIDAS', name: 'Metallic runner', category: 'Shoes', price: '499.90 ₪', image: keyItemImg('metallic-sneakers-1.jpg') },
      { brand: 'ZARA', name: 'Chrome trainer', category: 'Shoes', price: '229.90 ₪', image: keyItemImg('metallic-sneakers-2.jpg') },
      { brand: 'NIKE', name: 'Silver low-top', category: 'Shoes', price: '549.90 ₪', image: keyItemImg('metallic-sneakers-3.jpg') },
    ],
    tiktokSentiment: 84,
    pinterestVolume: 38,
  },
  {
    id: 23,
    number: '23',
    title: 'OVERSIZED TRENCH COATS',
    status: 'HOT/EMERGING',
    image: img('oversized-trench-coats.png'),
    description:
      'The trench goes big — dropped shoulders and floor-skimming hems turn the wardrobe classic into a statement layer. Belted loosely over everything from denim to slip dresses, the oversized cut brings effortless drama to transitional dressing.',
    palette: [
      { hex: '#C7A97E' },
      { hex: '#E3D6BE' },
      { hex: '#8A6E4B' },
      { hex: '#4A3B29' },
      { hex: '#A88A63' },
      { hex: '#23190F' },
    ],

    keyItems: [
      { brand: 'MANGO', name: 'Belted trench coat', category: 'Outerwear', price: '399.90 ₪', image: keyItemImg('oversized-trench-coats-1.jpg') },
      { brand: 'ZARA', name: 'Long trench', category: 'Outerwear', price: '349.90 ₪', image: keyItemImg('oversized-trench-coats-2.jpg') },
      { brand: 'COS', name: 'Wide-leg trouser', category: 'Pants', price: '279.90 ₪', image: keyItemImg('oversized-trench-coats-3.jpg') },
    ],
    tiktokSentiment: 79,
    pinterestVolume: 44,
  },
  {
    id: 24,
    number: '24',
    title: 'BIKER JACKETS',
    status: 'RISING',
    image: img('biker-jackets.png'),
    description:
      'The moto jacket returns with attitude — cropped leather, asymmetric zips, and hardware detailing bring an edge to soft, feminine pieces. Thrown over slip dresses or tailoring, it is the season’s favourite way to toughen up a look.',
    palette: [
      { hex: '#1C1B1E' },
      { hex: '#3A383C' },
      { hex: '#6B2A2E' },
      { hex: '#B8B4AE' },
      { hex: '#4E4A50' },
      { hex: '#0A090B' },
    ],

    keyItems: [
      { brand: 'ZARA', name: 'Faux leather biker', category: 'Outerwear', price: '299.90 ₪', image: keyItemImg('biker-jackets-1.jpg') },
      { brand: 'MANGO', name: 'Cropped moto jacket', category: 'Outerwear', price: '359.90 ₪', image: keyItemImg('biker-jackets-2.jpg') },
      { brand: 'PULL&BEAR', name: 'Straight-leg jeans', category: 'Denim', price: '139.90 ₪', image: keyItemImg('biker-jackets-3.jpg') },
    ],
    tiktokSentiment: 82,
    pinterestVolume: 41,
  },
  {
    id: 25,
    number: '25',
    title: 'WIDE-LEG JEANS',
    status: 'PEAK',
    image: img('wide-leg-jeans.png'),
    forecast: 'declining',
    description:
      'Denim goes long and loose — a high-rise, floor-grazing wide leg becomes the season’s default silhouette. Effortless with everything from cropped knits to heels, it has fully replaced the skinny as the everyday jean.',
    tagline:
      "The extreme oversized silhouette is losing momentum. If you're buying, don't stock up—stick to one high-quality pair or transition into a relaxed-straight fit.",
    palette: [
      { hex: '#3B5169' },
      { hex: '#6E88A3' },
      { hex: '#A9BED0' },
      { hex: '#E4E0D5' },
      { hex: '#26333F' },
      { hex: '#12181E' },
    ],

    keyItems: [
      { brand: 'LEVI’S', name: 'Ribcage wide leg', category: 'Denim', price: '429.90 ₪', image: keyItemImg('wide-leg-jeans-1.jpg') },
      { brand: 'ZARA', name: 'Full-length jean', category: 'Denim', price: '159.90 ₪', image: keyItemImg('wide-leg-jeans-2.jpg') },
      { brand: 'COS', name: 'Cropped knit', category: 'Knitwear', price: '199.90 ₪', image: keyItemImg('wide-leg-jeans-3.jpg') },
    ],
    tiktokSentiment: 90,
    pinterestVolume: 47,
  },
  {
    id: 26,
    number: '26',
    title: 'COWBOY BOOTS',
    status: 'RISING',
    image: img('cowboy-boots.png'),
    description:
      'Western is back in the rotation — pointed toes, stacked heels, and decorative stitching bring a cowboy edge to everyday looks. Worn under maxi dresses or cropped jeans, the boot adds instant attitude to soft summer staples.',
    palette: [
      { hex: '#B07C4A' },
      { hex: '#7A4E2A' },
      { hex: '#E4CBA3' },
      { hex: '#4A2E18' },
      { hex: '#C99A66' },
      { hex: '#1E120A' },
    ],

    keyItems: [
      { brand: 'ZARA', name: 'Western ankle boot', category: 'Shoes', price: '299.90 ₪', image: keyItemImg('cowboy-boots-1.jpg') },
      { brand: 'MANGO', name: 'Denim maxi skirt', category: 'Skirts', price: '199.90 ₪', image: keyItemImg('cowboy-boots-2.jpg') },
      { brand: 'H&M', name: 'Suede fringe bag', category: 'Accessories', price: '129.90 ₪', image: keyItemImg('cowboy-boots-3.jpg') },
    ],
    tiktokSentiment: 76,
    pinterestVolume: 39,
  },
  {
    id: 27,
    number: '27',
    title: 'CHUNKY SILVER RINGS',
    status: 'HOT/EMERGING',
    image: img('chunky-silver-rings.png'),
    description:
      'Bold silver hardware takes over hands — stacked chunky rings in molten, sculptural shapes replace dainty gold. Piled across every finger, they add a cool, tactile edge to minimalist and maximalist looks alike.',
    palette: [
      { hex: '#C9CDD2' },
      { hex: '#9AA0A6' },
      { hex: '#6C7278' },
      { hex: '#E2E5E8' },
      { hex: '#43474C' },
      { hex: '#17191C' },
    ],

    keyItems: [
      { brand: 'PANDORA', name: 'Chunky signet ring', category: 'Accessories', price: '249.90 ₪', image: keyItemImg('chunky-silver-rings-1.jpg') },
      { brand: 'ZARA', name: 'Molten ring set', category: 'Accessories', price: '69.90 ₪', image: keyItemImg('chunky-silver-rings-2.jpg') },
      { brand: 'MEJURI', name: 'Dome ring', category: 'Accessories', price: '399.90 ₪', image: keyItemImg('chunky-silver-rings-3.jpg') },
    ],
    tiktokSentiment: 80,
    pinterestVolume: 43,
  },
  {
    id: 28,
    number: '28',
    title: 'ANIMAL PRINT DENIM',
    status: 'RISING',
    image: img('animal-print-denim.png'),
    description:
      'Denim gets wild — leopard and zebra washes turn the everyday jean into the outfit’s main event. Balanced against plain knits and neutral tailoring, the print reads as playful rather than loud.',
    palette: [
      { hex: '#C79A5B' },
      { hex: '#7A5A32' },
      { hex: '#E6D6B8' },
      { hex: '#3B2C1A' },
      { hex: '#A8823F' },
      { hex: '#171008' },
    ],

    keyItems: [
      { brand: 'ZARA', name: 'Leopard wide-leg jean', category: 'Denim', price: '199.90 ₪', image: keyItemImg('animal-print-denim-1.jpg') },
      { brand: 'MANGO', name: 'Printed denim jacket', category: 'Outerwear', price: '259.90 ₪', image: keyItemImg('animal-print-denim-2.jpg') },
      { brand: 'COS', name: 'Ribbed knit tank', category: 'Tops', price: '129.90 ₪', image: keyItemImg('animal-print-denim-3.jpg') },
    ],
    tiktokSentiment: 78,
    pinterestVolume: 40,
  },
  {
    id: 29,
    number: '29',
    title: 'MARY JANE SHOES',
    status: 'RISING',
    image: img('mary-jane-shoes.png'),
    description:
      'The schoolgirl staple grows up — rounded toes and a single strap bring a demure, retro charm to everything from slip dresses to wide-leg trousers. Flat or heeled, the Mary Jane is the season’s sweetest way to finish a look.',
    palette: [
      { hex: '#1B1A1D' },
      { hex: '#3E3A3B' },
      { hex: '#8C6A72' },
      { hex: '#C9B9BD' },
      { hex: '#5A4E52' },
      { hex: '#0B0A0C' },
    ],

    keyItems: [
      { brand: 'ZARA', name: 'Patent Mary Jane', category: 'Shoes', price: '199.90 ₪', image: keyItemImg('mary-jane-shoes-1.jpg') },
      { brand: 'MANGO', name: 'Slip midi dress', category: 'Dresses', price: '229.90 ₪', image: keyItemImg('mary-jane-shoes-2.jpg') },
      { brand: 'COS', name: 'Sheer ankle sock', category: 'Accessories', price: '39.90 ₪', image: keyItemImg('mary-jane-shoes-3.jpg') },
    ],
    tiktokSentiment: 81,
    pinterestVolume: 45,
  },
]
