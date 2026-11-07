export interface ServiceItem {
  id: string;
  name: string;
  category: 'makeup' | 'mehndi' | 'facial' | 'skincare' | 'haircare' | 'pedicure';
  tagline: string;
  description: string;
  highlights: string[];
  pricePlaceholder: string;
  durationPlaceholder: string;
  photoPlaceholderNote: string;
}

export interface CourseItem {
  id: string;
  title: string;
  level: string;
  tagline: string;
  description: string;
  curriculum: string[];
  audience: string;
  feePlaceholder: string;
  durationPlaceholder: string;
  batchInfoPlaceholder: string;
}

export interface ReviewItem {
  author: string;
  rating: number;
  source: string;
  text: string;
  highlight: string;
  serviceMentioned: string;
}

export const SITE_CONFIG = {
  businessName: "Monik's Salon & Academy",
  legalName: "Monik's Salon & Academy",
  category: "Beauty Salon & Makeup Academy",
  tagline: "Your Beauty, Your Confidence",
  phoneRaw: "084460 03385",
  phoneInternational: "+91 84460 03385",
  phoneTel: "+918446003385",
  whatsappNumber: "918446003385",
  whatsappDefaultMessage: "Hello Monik's Salon & Academy, I would like to enquire about your services and book an appointment.",
  address: {
    street: "M.G Road, Bazar Peth, near Ratrani, Navipeth (located in Budget Food Store)",
    locality: "Navipeth, Mahad",
    city: "Mahad",
    district: "Raigad",
    state: "Maharashtra",
    postalCode: "402301",
    country: "India",
    countryCode: "IN",
    plusCode: "3CJH+HF Mahad, Maharashtra",
    landmark: "Near Ratrani, located in Budget Food Store"
  },
  geo: {
    latitude: 18.0833,
    longitude: 73.4167
  },
  mapsUrl: "https://maps.app.goo.gl/8NsTWvWWMr4qrPrL6",
  googleRating: 4.7,
  totalReviews: 218,
  ownership: "Women-Owned Business",
  openingHours: {
    summary: "10:00 AM – 8:00 PM Daily",
    weekdays: "10:00 AM – 8:00 PM",
    sundays: "Opens 9:00 AM – 8:00 PM (Early opening on Sundays)",
    festivalNotice: "Hours may vary during festivals such as Diwali. Please call or WhatsApp ahead to confirm appointment slots."
  },
  socialLinks: {
    instagramPlaceholder: "[Instagram Link to be supplied by owner]",
    facebookPlaceholder: "[Facebook Link to be supplied by owner]"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "makeup",
    name: "Professional Makeup",
    category: "makeup",
    tagline: "Flawless, skin-tone-matched looks for bridal and special celebrations",
    description: "Every complexion is unique. Our makeup application focuses on precision skin-tone matching, high-definition blending, and long-lasting elegance tailored for weddings, receptions, and parties.",
    highlights: [
      "Custom skin-tone-matched foundation & contouring",
      "Bridal, engagement, and reception glam",
      "Daytime & evening party makeup",
      "Weightless, camera-ready finish"
    ],
    pricePlaceholder: "[Price on Consultation / Inquire for custom package]",
    durationPlaceholder: "[Duration: 60 – 120 mins depending on occasion]",
    photoPlaceholderNote: "Owner to supply real photos of bridal and party makeup clients"
  },
  {
    id: "self-makeup",
    name: "Self-Makeup Guidance",
    category: "makeup",
    tagline: "Master everyday elegance and occasion makeup for yourself",
    description: "Personalized step-by-step guidance designed to empower you with the right techniques, tool handling, and shade selection so you can create your own stunning looks anytime.",
    highlights: [
      "Face mapping and undertone identification",
      "Essential product selection for your skin type",
      "Eye makeup, eyeliner, and lip shaping techniques",
      "Fast 15-minute everyday glam routines"
    ],
    pricePlaceholder: "[Session Fee: Inquire for rates]",
    durationPlaceholder: "[Duration: Individual or small group batches]",
    photoPlaceholderNote: "Owner to supply real photos of student self-makeup sessions"
  },
  {
    id: "mehndi",
    name: "Mehndi Designs",
    category: "mehndi",
    tagline: "Intricate traditional and contemporary henna artistry",
    description: "Artistic henna applications crafted with organic cones for rich, deep stain color. From delicate minimalist motifs to elaborate bridal arm and foot patterns.",
    highlights: [
      "Bridal full-hand and leg mehndi",
      "Arabic, Indo-Western, and floral patterns",
      "Festival mehndi (Diwali, Karwa Chauth, Eid)",
      "Pure, skin-friendly natural henna cones"
    ],
    pricePlaceholder: "[Price per hand/design: Inquire for details]",
    durationPlaceholder: "[Duration: 30 mins to 3 hours depending on pattern]",
    photoPlaceholderNote: "Owner to supply real photos of actual bridal and festive henna work"
  },
  {
    id: "hydra-facial",
    name: "Facial & Hydra Facial",
    category: "facial",
    tagline: "Deep hydration, pore cleansing, and glowing revitalization",
    description: "Revitalize exhausted skin with our specialized hydra facial and therapeutic facial treatments. Designed to extract impurities, infuse essential moisture, and boost skin elasticity.",
    highlights: [
      "Gentle exfoliation and deep pore cleansing",
      "Intense hydration infusion for radiant glow",
      "Custom treatments for oily, dry, or sensitive skin",
      "Soothing lymphatic facial massage"
    ],
    pricePlaceholder: "[Treatment Fee: Inquire for menu]",
    durationPlaceholder: "[Duration: 45 – 75 mins]",
    photoPlaceholderNote: "Owner to supply real photos of facial care suite and treatment setup"
  },
  {
    id: "skincare",
    name: "Customized Skin Care",
    category: "skincare",
    tagline: "Targeted skin therapies and expert product education",
    description: "Clear, healthy skin begins with understanding what your skin needs. We assess your barrier health and recommend nourishing treatments alongside practical daily regimens.",
    highlights: [
      "Comprehensive skin type assessment",
      "Clear product ingredient breakdown without confusing jargon",
      "Hydration and glow-restoring masks",
      "Sun damage and pigmentation care guidance"
    ],
    pricePlaceholder: "[Session Fee: Inquire for details]",
    durationPlaceholder: "[Duration: 45 – 60 mins]",
    photoPlaceholderNote: "Owner to supply real photos of skin consultation and products used"
  },
  {
    id: "haircare",
    name: "Hair Care & Styling",
    category: "haircare",
    tagline: "Deep conditioning, nourishment, and hair rejuvenation",
    description: "Revitalize dry, frizzy, or dull hair with intensive nourishing treatments. From deep hydration spas to celebratory hair styling, we keep your tresses soft, glossy, and strong.",
    highlights: [
      "Deep moisture hair spas and conditioning wraps",
      "Scalp revitalization and gentle massage",
      "Event hairstyling, curls, and traditional updos",
      "Home-care maintenance advice for lasting shine"
    ],
    pricePlaceholder: "[Treatment Fee: Inquire for menu]",
    durationPlaceholder: "[Duration: 45 – 90 mins]",
    photoPlaceholderNote: "Owner to supply real photos of hair spa and event hairstyling work"
  },
  {
    id: "pedicure",
    name: "Deluxe Pedicure",
    category: "pedicure",
    tagline: "Relaxing foot soak, exfoliation, and nail grooming",
    description: "Treat tired feet to a soothing session of warm aromatic soaking, scrub exfoliation, cuticle care, heel smoothing, and relaxing foot massage.",
    highlights: [
      "Aromatic sanitizing foot bath",
      "Gentle heel scrub and dead skin removal",
      "Nail shaping, cuticle trimming, and buffing",
      "Pressure-point foot and calf massage"
    ],
    pricePlaceholder: "[Service Fee: Inquire for rates]",
    durationPlaceholder: "[Duration: 45 mins]",
    photoPlaceholderNote: "Owner to supply real photos of pedicure station and grooming kit"
  }
];

export const COURSES: CourseItem[] = [
  {
    id: "basic-makeup",
    title: "Basic Makeup Certification Course",
    level: "Beginner to Intermediate",
    tagline: "Learn the fundamentals of professional makeup artistry with hands-on practice",
    description: "A comprehensive foundation program for aspiring makeup artists and beauty enthusiasts. Covers facial anatomy, color theory, product chemistry, and application methods.",
    curriculum: [
      "Skin preparation, priming, and undertone identification",
      "Foundation matching across Indian skin tones without ashy cast",
      "Concealing, color correcting, and cream contouring",
      "Eye makeup fundamentals: blending, eyeliner precision, mascara",
      "Daywear, corporate glam, and festive evening looks",
      "Sanitation, brush hygiene, and professional kit assembly"
    ],
    audience: "Beginners wanting to launch a salon career or master professional makeup artistry",
    feePlaceholder: "[Course Fee: Placeholder - Inquire for current batch fees]",
    durationPlaceholder: "[Duration: Placeholder - e.g. 2 to 4 weeks]",
    batchInfoPlaceholder: "[Batch Schedule: Placeholder - Inquire for upcoming start dates]"
  },
  {
    id: "self-makeup-course",
    title: "Self-Makeup Personal Masterclass",
    level: "Beginner Friendly",
    tagline: "Discover your best features and master everyday confidence in your own look",
    description: "Designed for women who want to learn how to do their own makeup easily, quickly, and with high confidence for work, family functions, and celebrations.",
    curriculum: [
      "Analyzing your face structure and choosing the right products",
      "Everyday 10-minute fresh makeup routine",
      "Occasion transformation: glamming up from day to evening",
      "Flawless lipstick application and natural brow definition",
      "Personal makeup bag audit: keeping what works and discarding what doesn't"
    ],
    audience: "Working women, college students, and homemakers looking for personal grooming mastery",
    feePlaceholder: "[Workshop Fee: Placeholder - Inquire for batch rates]",
    durationPlaceholder: "[Duration: Placeholder - e.g. 2-day weekend intensive]",
    batchInfoPlaceholder: "[Batch Schedule: Placeholder - Flexible weekend and weekday slots]"
  },
  {
    id: "basic-mehndi",
    title: "Basic Mehndi Artistry Classes",
    level: "Beginner",
    tagline: "Build steady cone control and master intricate henna design elements",
    description: "Friendly, patient guidance where you are taught like a friend. Start from fundamental strokes, dots, and lines and progress to complete wrist and palm layouts.",
    curriculum: [
      "Mehndi cone grip, posture, and pressure control",
      "Basic motifs: peacocks, petals, mandalas, checks, and paisleys",
      "Border composition and layout balancing on hands",
      "Bridal mehndi basics and symmetry principles",
      "Natural henna preparation tips and stain darkening secrets"
    ],
    audience: "Anyone passionate about henna art, festival designs, or starting a bridal mehndi service",
    feePlaceholder: "[Class Fee: Placeholder - Inquire for rates]",
    durationPlaceholder: "[Duration: Placeholder - e.g. 10 to 15 practical sessions]",
    batchInfoPlaceholder: "[Batch Schedule: Placeholder - Morning & afternoon options]"
  },
  {
    id: "skin-hair-demo",
    title: "Skin Care & Hair Care Demo Sessions",
    level: "All Levels",
    tagline: "Practical live demonstrations on product efficacy, routines, and client care",
    description: "Interactive demo sessions demonstrating exact product usage, skin barrier protection, hydra facial techniques, and deep hair conditioning treatments.",
    curriculum: [
      "Live demonstration of professional skin facial steps",
      "Product ingredient breakdown: hyaluronic acid, serums, masks",
      "Hair texture analysis and treatment selection",
      "Home maintenance guides to give your clients",
      "Q&A session addressing common hair fall, dryness, and pigmentation concerns"
    ],
    audience: "Salon apprentices, junior stylists, and individuals seeking holistic grooming education",
    feePlaceholder: "[Demo Session Fee: Placeholder - Inquire for seat availability]",
    durationPlaceholder: "[Duration: Placeholder - e.g. 1-day immersive demo]",
    batchInfoPlaceholder: "[Batch Schedule: Placeholder - Announced monthly]"
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    author: "Siddhi K.",
    rating: 5,
    source: "Google Review",
    text: "The session covered skin care, hair care, and self makeup in thorough detail. The skin care demo gave superb results, and Monika ma'am explained every product clearly without any rush.",
    highlight: "Skin care demo gave superb results & products clearly explained",
    serviceMentioned: "Skin Care, Hair Care & Self Makeup Session"
  },
  {
    author: "Pooja J.",
    rating: 5,
    source: "Google Review",
    text: "Loved the program and learning basic makeup steps! The teaching was straightforward, welcoming, and gave me so much confidence in doing my own makeup.",
    highlight: "Loved learning basic makeup steps with confidence",
    serviceMentioned: "Basic Makeup Training"
  },
  {
    author: "Srushti U.",
    rating: 5,
    source: "Google Review",
    text: "Took a basic mehndi class, gained confidence, and was taught like a friend, not a teacher. The environment is so positive and comfortable for every student.",
    highlight: "Taught like a friend, not a teacher — gained real confidence",
    serviceMentioned: "Basic Mehndi Classes"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "sparkles",
    title: "Skin-Tone-Matched Perfection",
    description: "No cookie-cutter looks. We precisely match makeup to your unique undertone for an organic, glowing finish."
  },
  {
    icon: "wallet",
    title: "Pocket-Friendly Pricing",
    description: "Luxury treatments and premium education at fair, honest rates suited for our local community in Mahad."
  },
  {
    icon: "heart-handshake",
    title: "Taught Like a Friend",
    description: "A warm, patient, and welcoming atmosphere where questions are celebrated and you learn at your own pace."
  },
  {
    icon: "badge-check",
    title: "4.7★ Google Reputation",
    description: "Backed by 218 genuine local reviews praising our friendly staff, clean space, and reliable artistry."
  },
  {
    icon: "shield-check",
    title: "Women-Owned & Safe Space",
    description: "A secure, comfortable, and respectful environment where every woman feels relaxed and pampered."
  },
  {
    icon: "award",
    title: "Comprehensive Academy",
    description: "From beginner self-grooming to certified makeup and mehndi techniques, learn hands-on from professionals."
  }
];

export const REQUIRED_PHOTOS_LIST = [
  { category: "Hero Background", description: "High-resolution video clip or photo of the salon exterior/interior or model makeup in progress" },
  { category: "Bridal Makeup", description: "Real photographs of bridal makeup, party makeup, and close-up finish" },
  { category: "Mehndi / Henna", description: "Real photographs of front and back hand bridal and festival henna patterns" },
  { category: "Facial / Hydra Facial", description: "Photos of facial treatment room, hydra facial setup, and skincare applications" },
  { category: "Hair Care", description: "Photographs of hair spa, washing station, and event hairstyles" },
  { category: "Academy Classes", description: "Real photos of classroom sessions, students practicing mehndi and makeup" },
  { category: "Salon Interior & Team", description: "Photographs of the salon entrance on M.G Road, reception, and Monika ma'am with staff" }
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "Where is Monik's Salon & Academy located?",
    answer: "We are located at M.G Road, Bazar Peth, near Ratrani, inside Budget Food Store, Navipeth, Mahad, Maharashtra 402301."
  },
  {
    question: "What are your opening hours?",
    answer: "We are open daily from 10:00 AM to 8:00 PM (opening early at 9:00 AM on Sundays). Opening hours may vary during festive seasons like Diwali, so please contact us in advance to confirm."
  },
  {
    question: "Do you accept walk-ins or is an appointment required?",
    answer: "Walk-ins are welcome subject to stylist availability, but we strongly recommend booking in advance via WhatsApp or phone (+91 84460 03385) to guarantee your preferred slot."
  },
  {
    question: "What beauty courses does Monik's Academy offer?",
    answer: "Monik's Academy offers practical beauty courses including Basic Makeup Certification, Self-Makeup Masterclasses, Basic Mehndi Artistry, and Skin Care & Hair Care live demo sessions."
  },
  {
    question: "Are the academy courses suitable for complete beginners?",
    answer: "Yes, absolutely! Our courses are designed specifically for beginners. As our students say in their reviews, you are 'taught like a friend, not a teacher' in a patient and welcoming environment."
  },
  {
    question: "How can I inquire about bridal makeup packages and pricing?",
    answer: "Every bride and occasion is unique. You can click 'WhatsApp Us' or call +91 84460 03385 for a complimentary consultation and personalized package details tailored to your wedding functions."
  }
];

