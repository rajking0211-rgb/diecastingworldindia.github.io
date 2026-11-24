/**
 * DIECAST WORLD INDIA - CORE APPLICATION ENGINE
 * Brand: Diecast World India (Deepa Shah - Mumbai)
 * Features:
 *  - Light Theme by default with instant Dark Mode switcher
 *  - Castly-inspired Racing Cars Hero Gallery & Carousel
 *  - Direct Search Product Filtering (hides hero section on search & shows products directly after navbar)
 *  - "The Collector Garage" Hold & Consolidate Shipping System
 *  - 1-Click WhatsApp Direct Ordering (9022676722 / 9699676722)
 *  - Pre-Order Token Booking & Drops Calendar
 *  - Interactive Cart, Modals & Toast System
 */

// Official Business Constants
// Clean Vector SVG Icons
const ICONS = {
  cart: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  box: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  eye: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  search: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  sun: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  close: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  car: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
  wheel: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="2" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="22" y2="12"/></svg>',
  unlock: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>',
  shield: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
  check: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  alert: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
  truck: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  bolt: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
};

const BUSINESS_INFO = {
  name: "Diecast World India",
  tagline: "COLLECT • CONNECT • CELEBRATE",
  partner: "Deepa Shah",
  phones: ["7666676722", "9022676722", "9699676722"],
  primaryWhatsApp: "919022676722",
  secondaryWhatsApp: "919699676722",
  email: "diecastworldindia@gmail.com",
  address: "12, 1st Floor, Jai Kisan CHS, Plot No.296, Pantnagar, Ghatkopar (East), Mumbai - 400075",
  instagramUrl: "https://www.instagram.com/diecast_world_india?fqnt=aHRmdTl0azZ4NzJl",
  instagramHandle: "@diecast_world_india"
};

// Collector Products Database
const PRODUCTS = [
  {
    id: "DWI-001",
    title: "Mini GT #522 - Nissan Skyline GT-R (R34) V-Spec II N1 White",
    brand: "Mini GT",
    scale: "1:64",
    price: 1499,
    originalPrice: 1699,
    status: "in_stock",
    badge: "Bestseller",
    badgeType: "stock-in",
    chassis: "Diecast Metal",
    wheels: "Real Rider Rubber",
    opening: "Fixed (Precision Sealed)",
    packaging: "Sealed Blister Card + Protector",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=700&q=80",
    description: "Iconic N1 homologation spec of the Godzilla R34. Featuring razor-sharp front aero, factory white racing finish, gold Brembo calipers, and authentic twin-turbo badge details.",
    stockQty: 8
  },
  {
    id: "DWI-002",
    title: "Kaido House x Mini GT #075 - Datsun 510 Pro Street OG Orange",
    brand: "Kaido House",
    scale: "1:64",
    price: 2399,
    originalPrice: 2699,
    status: "hot_drop",
    badge: "Opening Hood",
    badgeType: "hot-drop",
    chassis: "Diecast Metal Base & Body",
    wheels: "Alloy Chrome Rim + Rubber",
    opening: "Full Opening Hood & Detailed Engine",
    packaging: "Collector Magnetic Flip-Top Box",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=700&q=80",
    description: "Designed by Jun Imai. Showcases a custom twin-carb inline engine bay, wide flared fenders, rolled roll cage, and stunning multi-stage metallic burnt orange livery.",
    stockQty: 3
  },
  {
    id: "DWI-003",
    title: "Pop Race - Pandem Toyota GR Yaris Advan Livery",
    brand: "Pop Race",
    scale: "1:64",
    price: 1899,
    originalPrice: 2099,
    status: "in_stock",
    badge: "Full Openings",
    badgeType: "stock-in",
    chassis: "Diecast Zinc Alloy",
    wheels: "Yokohama Advan Slicks",
    opening: "Opening Engine Hood & Rear Hatch",
    packaging: "Clear Acrylic Display Case with Base",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    description: "The hottest rally pocket-rocket fitted with Pandem widebody kit and iconic red-black Advan racing livery. Both hood and rear hatch open smoothly.",
    stockQty: 5
  },
  {
    id: "DWI-004",
    title: "Inno64 - Honda Civic Ferio EG9 #15 Idemitsu Motion MAC Tools",
    brand: "Inno64",
    scale: "1:64",
    price: 1999,
    originalPrice: 2299,
    status: "in_stock",
    badge: "Acrylic Case",
    badgeType: "chase-tag",
    chassis: "Diecast High Detail",
    wheels: "Racing Slicks with Decals",
    opening: "Fixed Body / Detailed Roll Cage",
    packaging: "Premium Acrylic Display Case with Custom Screwed Plaque",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=700&q=80",
    description: "Famous JTCC circuit racer. Includes extra set of custom gold racing wheels, replacement decals, and velvet base presentation.",
    stockQty: 4
  },
  {
    id: "DWI-005",
    title: "Hot Wheels RLC Exclusive - 1993 Ford Mustang Cobra R",
    brand: "Hot Wheels",
    scale: "1:64",
    price: 3499,
    originalPrice: 3999,
    status: "hot_drop",
    badge: "RLC Limited Drop",
    badgeType: "hot-drop",
    chassis: "Full Metal/Metal",
    wheels: "Real Riders 5-Spoke Chrome",
    opening: "Opening Hood with 5.0L Engine",
    packaging: "Kar Keepers Clamshell + Numbered Holo Seal",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=700&q=80",
    description: "Red Line Club official release in mirror-like Spectraflame Vibrant Red. Limited allocation strictly restricted to 1 unit per collector.",
    stockQty: 2
  },
  {
    id: "DWI-006",
    title: "Tarmac Works - Porsche 911 GT3 R #911 Manthey Racing Grello",
    brand: "Tarmac Works",
    scale: "1:64",
    price: 1799,
    originalPrice: 1999,
    status: "in_stock",
    badge: "Nurburgring Hero",
    badgeType: "stock-in",
    chassis: "Diecast Metal",
    wheels: "BBS Racing Monoblock",
    opening: "Sealed Motorsport Casting",
    packaging: "Window Box + Collector Card",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=700&q=80",
    description: "The fan-favorite 'Grello' high-downforce Porsche 911 GT3 R that conquered the 24 Hours of Nurburgring. Features flawless neon yellow & green livery print.",
    stockQty: 6
  },
  {
    id: "DWI-007",
    title: "Mini GT #612 - Pagani Utopia Bianco Rinascimento",
    brand: "Mini GT",
    scale: "1:64",
    price: 1549,
    originalPrice: 1749,
    status: "in_stock",
    badge: "Hypercar",
    badgeType: "stock-in",
    chassis: "Diecast Chassis & Body",
    wheels: "Turbine Style Wheels + Rubber",
    opening: "Sealed Precision Mold",
    packaging: "Sealed Blister Box",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=700&q=80",
    description: "Horacio Pagani's twin-turbo V12 masterpiece recreated with photorealistic quad-exhaust tips, interior gated shifter visibility, and fine etched wing mirrors.",
    stockQty: 7
  },
  {
    id: "DWI-008",
    title: "Almost Real - Land Rover Defender 90 Camel Trophy 1989",
    brand: "Almost Real",
    scale: "1:64",
    price: 2199,
    originalPrice: 2499,
    status: "in_stock",
    badge: "Official Dealer",
    badgeType: "chase-tag",
    chassis: "Diecast Heavyweight",
    wheels: "Deep Tread Offroad Rubber",
    opening: "Working Suspensions",
    packaging: "Acrylic Display Case with Sand Base",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80",
    description: "Diecast World India is an authorized showcase for Almost Real. Featuring authentic sand-glow paint, rooftop luggage rack, jerry cans, and recovery ladder accessories.",
    stockQty: 4
  },
  {
    id: "DWI-009",
    title: "Bburago Signature - Ferrari 296 GTB Rosso Corsa (1:43)",
    brand: "Bburago",
    scale: "1:43",
    price: 1299,
    originalPrice: 1499,
    status: "in_stock",
    badge: "1:43 Scale",
    badgeType: "stock-in",
    chassis: "Diecast Metal",
    wheels: "Pirelli P-Zero Tread Rubber",
    opening: "Detailed Engine Cover Window",
    packaging: "Signature Hard Acrylic Case",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=700&q=80",
    description: "Official Ferrari licensed 1:43 scale model. Ferrari shield tampo prints on front fenders, silver brake calipers, and authentic cockpit instrumentation.",
    stockQty: 5
  },
  {
    id: "DWI-010",
    title: "Solido - Nissan GT-R R35 Liberty Walk Metallic Blue (1:18)",
    brand: "Solido",
    scale: "1:18",
    price: 5999,
    originalPrice: 6699,
    status: "in_stock",
    badge: "1:18 Showcase",
    badgeType: "hot-drop",
    chassis: "Diecast Metal Body",
    wheels: "Posable Steerable Front Wheels",
    opening: "Opening Doors with Full Interior",
    packaging: "Large Window Collector Box",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=700&q=80",
    description: "Centerpiece 1:18 scale model for your collector garage. Features LB Works flared arches, massive carbon-look GT wing, roll cage, and functional steering mechanism.",
    stockQty: 3
  },
  {
    id: "DWI-011",
    title: "Kaido House x Mini GT #089 - Chevy Silverado Dually Kaido Works",
    brand: "Kaido House",
    scale: "1:64",
    price: 2599,
    originalPrice: 2899,
    status: "pre_order",
    badge: "Pre-Order Jan '27",
    badgeType: "pre-order",
    chassis: "Diecast Metal Slammed Base",
    wheels: "Dually 6-Wheel Custom Setup",
    opening: "Opening Hood + Drop Tailgate",
    packaging: "Kaido House Magnetic Sealed Box",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80",
    description: "Upcoming international drop. Extreme slammed stance dually truck with custom Kaido Works bed rack. Lock yours with a token advance of ₹499.",
    deposit: 499,
    preOrderETA: "Late January 2027",
    stockQty: 10
  },
  {
    id: "DWI-012",
    title: "Pop Race - Singer DLS Metallic Forest Green / Tan Interior",
    brand: "Pop Race",
    scale: "1:64",
    price: 1849,
    originalPrice: 2099,
    status: "pre_order",
    badge: "Pre-Order Feb '27",
    badgeType: "pre-order",
    chassis: "Diecast Metal",
    wheels: "Fuchs Inspired Alloy Wheels",
    opening: "Opening Rear Engine Bay & Front Hood",
    packaging: "Acrylic Display Case",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    description: "Reimagined 911 air-cooled beauty. Full carbon fiber weave textures on roof and wing, delicate leather interior detailing. Reserve now with ₹399 token.",
    deposit: 399,
    preOrderETA: "Mid February 2027",
    stockQty: 12
  },
  {
    id: "DWI-013",
    title: "Morepost - Japanese Underground RWB Parking Garage with LED Lights",
    brand: "Accessories",
    scale: "Accessories",
    price: 2799,
    originalPrice: 3299,
    status: "in_stock",
    badge: "Diorama LED",
    badgeType: "chase-tag",
    chassis: "High Density Acrylic + PVC",
    wheels: "Fits 6-8 1:64 Scale Cars",
    opening: "USB Powered Ceiling LED Lights",
    packaging: "Protective Flatpack with Guide",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=700&q=80",
    description: "Turn your diecast cars into a photogenic Tokyo garage. Features weathered concrete textures, graffiti wall decals, warning stripes, and bright overhead LED lighting.",
    stockQty: 5
  },
  {
    id: "DWI-014",
    title: "Diecast World India - 5-Layer Blister Card Protectors (Pack of 10)",
    brand: "Accessories",
    scale: "Accessories",
    price: 499,
    originalPrice: 650,
    status: "in_stock",
    badge: "Mint Armor",
    badgeType: "stock-in",
    chassis: "Ultra-Clear Acid-Free 0.5mm PET",
    wheels: "UV Resistant Coating",
    opening: "Snug Fit Clamshell with Hanging Tab",
    packaging: "Pack of 10 Pieces",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=700&q=80",
    description: "Protect your expensive Hot Wheels Premiums, Car Culture, and Mini GT blister cards from corner dog-ears, soft edges, and dust.",
    stockQty: 25
  }
];

// App State Management
let currentFilter = {
  scale: "all",
  brand: "all",
  status: "all",
  search: "",
  sort: "featured"
};

let cart = JSON.parse(localStorage.getItem("dwi_cart")) || [];
let garageBag = JSON.parse(localStorage.getItem("dwi_garage")) || [];
let wishlist = JSON.parse(localStorage.getItem("dwi_wishlist")) || [];
// Checkout & Payment State
let checkoutCustomerInfo = null;
let currentPaymentScreenshot = null;
let currentPayTab = "upi";

// ==========================================================================
// CINEMATIC RACING CARS SHOWCASE GALLERY CONTROLLER (Castly-inspired)
// ==========================================================================
let currentShowcaseSlide = 0;
let showcaseTimer = null;

function getTotalShowcaseSlides() {
  const slides = document.querySelectorAll(".showcase-slide");
  return slides.length || 10;
}

function initShowcaseGallery() {
  startShowcaseTimer();
  const el = document.getElementById("racingShowcaseGallery");
  if (el) {
    el.addEventListener("mouseenter", pauseShowcaseTimer);
    el.addEventListener("mouseleave", startShowcaseTimer);
  }
}

function startShowcaseTimer() {
  pauseShowcaseTimer();
  // Auto-rotate racing car images exactly every 2s (2000ms) as requested
  showcaseTimer = setInterval(() => {
    nextShowcaseSlide();
  }, 2000);
}

function pauseShowcaseTimer() {
  if (showcaseTimer) {
    clearInterval(showcaseTimer);
    showcaseTimer = null;
  }
}

function nextShowcaseSlide() {
  const total = getTotalShowcaseSlides();
  jumpToShowcase((currentShowcaseSlide + 1) % total);
}

function prevShowcaseSlide() {
  const total = getTotalShowcaseSlides();
  jumpToShowcase((currentShowcaseSlide - 1 + total) % total);
}

function jumpToShowcase(index) {
  const total = getTotalShowcaseSlides();
  currentShowcaseSlide = (index + total) % total;
  const slides = document.querySelectorAll(".showcase-slide");
  slides.forEach((s, idx) => {
    s.classList.toggle("active", idx === currentShowcaseSlide);
  });
  const dots = document.querySelectorAll(".showcase-dot");
  dots.forEach((d, idx) => {
    d.classList.toggle("active", idx === currentShowcaseSlide);
  });
  // Reset the 2s interval on user click
  startShowcaseTimer();
}

// ==========================================================================
// CASTLY-INSPIRED RACING CARS HERO CAROUSEL CONTROLLER
// ==========================================================================
let currentHeroSlide = 0;
const totalHeroSlides = 6;
let heroSlideTimer = null;

function initHeroSlider() {
  startHeroSlideTimer();
  const wrap = document.getElementById("heroSliderWrap");
  if (wrap) {
    wrap.addEventListener("mouseenter", pauseHeroSlideTimer);
    wrap.addEventListener("mouseleave", startHeroSlideTimer);
  }
}

function startHeroSlideTimer() {
  pauseHeroSlideTimer();
  heroSlideTimer = setInterval(() => {
    nextHeroSlide();
  }, 5500);
}

function pauseHeroSlideTimer() {
  if (heroSlideTimer) {
    clearInterval(heroSlideTimer);
    heroSlideTimer = null;
  }
}

function jumpToHeroSlide(index) {
  currentHeroSlide = (index + totalHeroSlides) % totalHeroSlides;
  
  // Update slide visibility
  const slides = document.querySelectorAll(".hero-slide");
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === currentHeroSlide);
  });

  // Update dots
  const dots = document.querySelectorAll(".hero-dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentHeroSlide);
  });


}

function nextHeroSlide() {
  jumpToHeroSlide(currentHeroSlide + 1);
}

function prevHeroSlide() {
  jumpToHeroSlide(currentHeroSlide - 1);
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initShowcaseGallery();
  initHeroSlider();
  initScrollReveal();
  renderCatalog();
  renderPreorderTable();
  updateCartCounters();
  setupEventListeners();
  setupKeyboardShortcuts();
});

// ==========================================================================
// RENDER PRODUCT CATALOG & DIRECT SEARCH VIEW CONTROLLER
// ==========================================================================
function renderCatalog() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const isSearching = currentFilter.search.trim().length > 0;
  const heroSection = document.getElementById("heroSection");
  const pillarsSection = document.getElementById("collectorPillarsSection");

  // Filtering
  let filtered = PRODUCTS.filter(item => {
    // Scale Filter
    if (currentFilter.scale !== "all" && item.scale.toLowerCase() !== currentFilter.scale.toLowerCase()) {
      return false;
    }
    // Brand Filter
    if (currentFilter.brand !== "all" && item.brand.toLowerCase() !== currentFilter.brand.toLowerCase()) {
      return false;
    }
    // Status Filter
    if (currentFilter.status !== "all" && item.status !== currentFilter.status) {
      return false;
    }
    // Search Query
    if (isSearching) {
      const q = currentFilter.search.toLowerCase();
      const match = item.title.toLowerCase().includes(q) ||
                    item.brand.toLowerCase().includes(q) ||
                    item.scale.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  // Sorting
  if (currentFilter.sort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentFilter.sort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentFilter.sort === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  // DIRECT SEARCH DISPLAY CONTROL:
  // Hide hero and showcase to show products directly after navbar without any banner
  const showcaseSection = document.getElementById("racingShowcaseGallery");
  if (isSearching) {
    if (showcaseSection) showcaseSection.style.display = "none";
    if (heroSection) heroSection.style.display = "none";
    if (pillarsSection) pillarsSection.style.display = "none";
  } else {
    if (showcaseSection) showcaseSection.style.display = "block";
    if (heroSection) heroSection.style.display = "block";
    if (pillarsSection) pillarsSection.style.display = "block";
  }

  // Update Result Count
  const countEl = document.getElementById("catalogCount");
  if (countEl) countEl.innerText = `${filtered.length} Collectibles Found`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: 12px; border: 1.5px dashed var(--gold-primary); box-shadow: var(--shadow-card);">
        <div class="empty-state-icon">${ICONS.car}</div>
        <h3 style="color: var(--text-main); margin-bottom: 8px;">No Models Found for "${currentFilter.search}"</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">Try adjusting your search query, scale, or brand filter.</p>
        <button class="btn-primary-gold" onclick="clearSearch()">${ICONS.close} Clear Search & View All Drops</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const isPreOrder = item.status === "pre_order";
    const savePercent = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
    
    return `
      <div class="product-card" data-id="${item.id}">
        <div class="product-badge-stack">
          <span class="p-badge ${item.badgeType}">${item.badge}</span>
          ${isPreOrder ? `<span class="p-badge pre-order">ETA: ${item.preOrderETA.split(" ")[0]}</span>` : ''}
        </div>
        <span class="p-scale-tag">${item.scale}</span>

        <div class="product-img-box" onclick="openQuickView('${item.id}')">
          <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='assets/images/logo.png'" />
          <button class="quick-view-btn" onclick="event.stopPropagation(); openQuickView('${item.id}')">
            ${ICONS.eye} Quick View
          </button>
        </div>

        <div class="product-details">
          <div class="product-brand-row">
            <span>${item.brand}</span>
            <span>${item.chassis}</span>
          </div>

          <h4 class="product-title" onclick="openQuickView('${item.id}')">${item.title}</h4>

          <div class="product-features-row">
            <span class="feat-pill">${ICONS.wheel} ${item.wheels.split(" ")[0]} Rubber</span>
            <span class="feat-pill">${ICONS.box} ${item.packaging.split(" ")[0]}</span>
            ${item.opening.includes("Opening") ? `<span class="feat-pill feat-pill-green">${ICONS.unlock} ${item.opening.split(" ")[0]}</span>` : ''}
          </div>

          <div class="product-price-row">
            <span class="current-price">₹${item.price.toLocaleString("en-IN")}</span>
            <span class="original-price">₹${item.originalPrice.toLocaleString("en-IN")}</span>
            <span class="save-badge">Save ${savePercent}%</span>
          </div>

          <div class="product-actions-group">
            <button class="btn-card-cart btn-card-cart-primary" onclick="addToCart('${item.id}')">
              ${ICONS.cart} ${isPreOrder ? 'Book Token' : 'Add to Cart'}
            </button>
            <button class="btn-card-hold" onclick="addToGarageBag('${item.id}')">
              ${ICONS.box} Hold in Garage
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Clear Search and Restore Hero Section
function clearSearch() {
  const searchInput = document.getElementById("navSearchInput");
  if (searchInput) searchInput.value = "";
  currentFilter.search = "";
  renderCatalog();
  const heroSection = document.getElementById("heroSection");
  if (heroSection) {
    heroSection.style.display = "block";
    heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Render Upcoming Pre-Orders Table
function renderPreorderTable() {
  const tbody = document.getElementById("preorderTableBody");
  if (!tbody) return;

  const preorders = PRODUCTS.filter(p => p.status === "pre_order" || p.status === "hot_drop");

  tbody.innerHTML = preorders.map(item => `
    <tr>
      <td data-label="Model & Brand">
        <div class="preorder-item-cell">
          <img src="${item.image}" alt="${item.title}" class="preorder-item-thumb" />
          <div class="preorder-item-info">
            <strong class="preorder-item-title">${item.title}</strong>
            <div class="preorder-item-sub">${item.brand} • Scale ${item.scale}</div>
          </div>
        </div>
      </td>
      <td data-label="Scale"><span class="p-scale-tag" style="position: static;">${item.scale}</span></td>
      <td data-label="Expected MRP"><strong class="preorder-price-val">₹${item.price.toLocaleString("en-IN")}</strong></td>
      <td data-label="Advance Token"><span class="preorder-token-val">₹${item.deposit || 499}</span> <small class="preorder-token-note">(Refundable on delay)</small></td>
      <td data-label="Arrival Window"><span class="preorder-eta-badge">${item.preOrderETA || "Q1 2027"}</span></td>
      <td data-label="Action">
        <button class="btn-primary-gold preorder-reserve-btn" onclick="addToCart('${item.id}', true)">
          Reserve Model
        </button>
      </td>
    </tr>
  `).join("");
}

// Quick View Modal
function openQuickView(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const modal = document.getElementById("quickViewModal");
  const modalContent = document.getElementById("quickViewContent");
  if (!modal || !modalContent) return;

  const saveAmount = item.originalPrice - item.price;

  modalContent.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; padding: 25px;">
      <!-- Product Images & Trust Badges -->
      <div>
        <div style="background: var(--product-img-bg); border-radius: 12px; border: 1px solid var(--border-color); padding: 20px; display: flex; align-items: center; justify-content: center; min-height: 280px; margin-bottom: 16px;">
          <img src="${item.image}" alt="${item.title}" style="max-width: 100%; max-height: 240px; object-fit: contain;" />
        </div>
        
        <div style="background: rgba(217, 119, 6, 0.08); border: 1px solid rgba(217, 119, 6, 0.25); border-radius: 8px; padding: 12px; font-size: 0.78rem;">
          <strong style="color: var(--gold-primary); display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            ${ICONS.shield} 5-Layer Mint Packaging Armor
          </strong>
          <span style="color: var(--text-muted);">
            Double-box, bubble wrap & edge protectors. If your blister card bends or cracks during Mumbai-to-door transit, we replace or refund instantly.
          </span>
        </div>
      </div>

      <!-- Specs & Purchase -->
      <div style="display: flex; flex-direction: column;">
        <div style="display: flex; gap: 6px; margin-bottom: 8px;">
          <span class="p-badge ${item.badgeType}">${item.badge}</span>
          <span class="p-scale-tag" style="position: static;">Scale ${item.scale}</span>
        </div>

        <h3 style="font-size: 1.3rem; color: var(--text-main); margin-bottom: 6px; line-height: 1.3;">${item.title}</h3>
        <p style="font-size: 0.85rem; color: var(--gold-primary); font-weight: 700; text-transform: uppercase; margin-bottom: 14px;">
          Brand: ${item.brand} • SKU: ${item.id}
        </p>

        <div style="display: flex; align-items: baseline; gap: 10px; margin-bottom: 16px;">
          <span style="font-size: 1.8rem; font-weight: 900; color: var(--crimson-primary);">₹${item.price.toLocaleString("en-IN")}</span>
          <span style="font-size: 1rem; color: var(--text-dim); text-decoration: line-through;">₹${item.originalPrice.toLocaleString("en-IN")}</span>
          <span style="background: rgba(16, 185, 129, 0.15); color: #059669; font-size: 0.78rem; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
            Save ₹${saveAmount}
          </span>
        </div>

        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px; line-height: 1.5;">
          ${item.description}
        </p>

        <!-- Technical Collector Spec Sheet -->
        <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px; margin-bottom: 20px; font-size: 0.82rem;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div><span style="color: var(--text-dim);">Chassis:</span> <strong style="color: var(--text-main);">${item.chassis}</strong></div>
            <div><span style="color: var(--text-dim);">Tires:</span> <strong style="color: var(--text-main);">${item.wheels}</strong></div>
            <div><span style="color: var(--text-dim);">Openings:</span> <strong style="color: var(--text-main);">${item.opening}</strong></div>
            <div><span style="color: var(--text-dim);">Packaging:</span> <strong style="color: var(--text-main);">${item.packaging}</strong></div>
          </div>
        </div>

        <!-- Action CTAs -->
        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: auto;">
          <button class="btn-primary-gold" style="width: 100%; justify-content: center; font-size: 1rem; padding: 13px;" onclick="addToCart('${item.id}'); closeModal('quickViewModal');">
            ${ICONS.cart} Add to Cart
          </button>
          <button class="btn-card-hold" style="padding: 10px 0; font-size: 0.85rem; width: 100%; justify-content: center;" onclick="addToGarageBag('${item.id}'); closeModal('quickViewModal');">
            ${ICONS.box} Hold in Garage (Consolidate Shipping)
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

// Cart Management
function addToCart(productId, isPreOrderToken = false) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const existing = cart.find(ci => ci.id === productId);
  if (existing) {
    if (existing.qty < (item.stockQty || 5)) {
      existing.qty++;
      showToast(`Increased quantity for ${item.title}`);
    } else {
      showToast(`Max quantity limit reached for this release.`);
      return;
    }
  } else {
    cart.push({
      id: item.id,
      title: item.title,
      price: isPreOrderToken ? (item.deposit || 499) : item.price,
      fullPrice: item.price,
      isToken: isPreOrderToken,
      scale: item.scale,
      brand: item.brand,
      image: item.image,
      qty: 1
    });
    showToast(`Added ${item.title} to Cart!`);
  }

  saveCart();
  updateCartCounters();
  renderCartDrawer();
  openDrawer("cartDrawer");
}

function updateCartQty(productId, delta) {
  const index = cart.findIndex(ci => ci.id === productId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
    showToast("Item removed from cart");
  }
  saveCart();
  updateCartCounters();
  renderCartDrawer();
}

function saveCart() {
  localStorage.setItem("dwi_cart", JSON.stringify(cart));
}

function updateCartCounters() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById("cartCountBadge");
  if (badge) badge.innerText = count;

  const garageCount = garageBag.length;
  const garageBadge = document.getElementById("garageCountBadge");
  if (garageBadge) garageBadge.innerText = garageCount;
}

function renderCartDrawer() {
  const container = document.getElementById("cartDrawerItems");
  const subtotalEl = document.getElementById("cartSubtotal");
  const grandTotalEl = document.getElementById("cartGrandTotal");
  const discountRow = document.getElementById("cartDiscountRow");
  const discountValEl = document.getElementById("cartDiscountVal");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px;">
        <div class="empty-state-icon">${ICONS.cart}</div>
        <h4 style="color: var(--text-main); margin-bottom: 6px;">Your Cart is Empty</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 20px;">Explore our rare 1:64 drops and book your grails!</p>
        <button class="btn-primary-gold" onclick="closeDrawer('cartDrawer')">Start Shopping</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = "₹0";
    if (grandTotalEl) grandTotalEl.innerText = "₹0";
    if (discountRow) discountRow.style.display = "none";
    return;
  }

  let subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const shipping = subtotal >= 999 ? 0 : (subtotal > 0 ? 99 : 0);
  const grandTotal = subtotal + shipping;

  container.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
      <div class="cart-item-info">
        <h5>${item.title}</h5>
        <div style="font-size: 0.75rem; color: var(--text-dim); margin-bottom: 4px;">Scale: ${item.scale} ${item.isToken ? '• Advance Token' : ''}</div>
        <div class="item-price">₹${(item.price * item.qty).toLocaleString("en-IN")}</div>
        
        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-main); min-width: 20px; text-align: center;">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
          <button onclick="updateCartQty('${item.id}', -${item.qty})" style="background: none; border: none; color: #ef4444; font-size: 0.75rem; margin-left: auto; cursor: pointer;">Remove</button>
        </div>
      </div>
    </div>
  `).join("");

  if (subtotalEl) subtotalEl.innerText = `₹${subtotal.toLocaleString("en-IN")}`;
  if (grandTotalEl) grandTotalEl.innerText = `₹${grandTotal.toLocaleString("en-IN")}`;

  if (discountRow) discountRow.style.display = "none";
}

// Collector Garage Hold Bag Logic
function addToGarageBag(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const exists = garageBag.find(g => g.id === productId);
  if (exists) {
    showToast("Model is already in your Garage Hold!");
  } else {
    garageBag.push({
      id: item.id,
      title: item.title,
      price: item.price,
      scale: item.scale,
      image: item.image,
      addedDate: new Date().toLocaleDateString("en-IN")
    });
    localStorage.setItem("dwi_garage", JSON.stringify(garageBag));
    updateCartCounters();
    showToast(`Saved to Collector Garage Hold!`);
    renderGarageDrawer();
  }
}

function removeFromGarage(productId) {
  garageBag = garageBag.filter(g => g.id !== productId);
  localStorage.setItem("dwi_garage", JSON.stringify(garageBag));
  updateCartCounters();
  renderGarageDrawer();
  showToast("Removed from Garage Hold");
}

function renderGarageDrawer() {
  const container = document.getElementById("garageDrawerItems");
  const countEl = document.getElementById("garageTotalHoldCount");
  const valueEl = document.getElementById("garageTotalHoldVal");
  if (!container) return;

  const totalVal = garageBag.reduce((sum, g) => sum + g.price, 0);

  if (countEl) countEl.innerText = garageBag.length;
  if (valueEl) valueEl.innerText = `₹${totalVal.toLocaleString("en-IN")}`;

  if (garageBag.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px;">
        <div class="empty-state-icon">${ICONS.box}</div>
        <h4 style="color: var(--text-main); margin-bottom: 6px;">Your Collector Garage is Empty</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.4;">
          Hold models safely at our Mumbai hub for up to 45 days and combine shipments later.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = garageBag.map(item => `
    <div class="cart-item-row" style="border-left: 3px solid #10b981;">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
      <div class="cart-item-info">
        <h5>${item.title}</h5>
        <div style="font-size: 0.72rem; color: #059669; font-weight:700;">Locked on: ${item.addedDate} • Scale ${item.scale}</div>
        <div class="item-price">₹${item.price.toLocaleString("en-IN")}</div>
        <button onclick="removeFromGarage('${item.id}')" style="background: none; border: none; color: #ef4444; font-size: 0.75rem; cursor: pointer; margin-top: 6px;">Release Item</button>
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// 3-STEP CHECKOUT & PAYMENT FLOW (UPI APPS, QR CODE & MANDATORY SCREENSHOT)
// ==========================================================================

function getCartGrandTotal() {
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const shipping = subtotal >= 999 ? 0 : (subtotal > 0 ? 99 : 0);
  return subtotal + shipping;
}

// Step 1: Open Checkout Modal & Reset Form
function initiateStandardCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  // Reset steps
  const step1 = document.getElementById("checkoutStepDetails");
  const step2 = document.getElementById("checkoutStepPayment");
  const step3 = document.getElementById("checkoutStepSuccess");
  if (step1) step1.style.display = "block";
  if (step2) step2.style.display = "none";
  if (step3) step3.style.display = "none";

  // Reset screenshot upload state
  currentPaymentScreenshot = null;
  const ssInput = document.getElementById("paymentScreenshotInput");
  if (ssInput) ssInput.value = "";
  const dropLabel = document.getElementById("dropzoneLabel");
  if (dropLabel) dropLabel.style.display = "flex";
  const prevBox = document.getElementById("screenshotPreviewContainer");
  if (prevBox) prevBox.style.display = "none";
  const dropzone = document.getElementById("screenshotDropzone");
  if (dropzone) dropzone.classList.remove("has-file", "highlight-error");
  const utrInput = document.getElementById("paymentUtrNumber");
  if (utrInput) utrInput.value = "";

  openModal("checkoutModal");
}

// Step 1 -> Step 2: Validate shipping & proceed to Payment
function goToPaymentStep() {
  const name = document.getElementById("custName")?.value.trim() || "";
  const phone = document.getElementById("custPhone")?.value.trim() || "";
  const address = document.getElementById("custAddress")?.value.trim() || "";
  const city = document.getElementById("custCity")?.value.trim() || "";
  const pincode = document.getElementById("custPincode")?.value.trim() || "";
  const deliveryModeRadio = document.querySelector('input[name="deliveryMode"]:checked');
  const deliveryMode = deliveryModeRadio ? deliveryModeRadio.value : "standard";

  if (!name || !phone || !address || !city || !pincode) {
    showToast("Please enter complete delivery details.");
    return;
  }

  if (phone.replace(/[^0-9]/g, "").length < 10) {
    showToast("Please enter a valid 10-digit mobile number.");
    return;
  }

  checkoutCustomerInfo = {
    name,
    phone,
    address,
    city,
    pincode,
    deliveryMode
  };

  const total = getCartGrandTotal();
  const amtDisplay = document.getElementById("checkoutAmountDisplay");
  if (amtDisplay) amtDisplay.innerText = "₹" + total.toLocaleString("en-IN");

  const modeDisplay = document.getElementById("checkoutModeDisplay");
  if (modeDisplay) {
    modeDisplay.innerText = deliveryMode === "hold" ? "Collector Garage Hold" : "Doorstep Dispatch";
  }

  const step1 = document.getElementById("checkoutStepDetails");
  const step2 = document.getElementById("checkoutStepPayment");
  if (step1) step1.style.display = "none";
  if (step2) step2.style.display = "block";
}

// Step 2 -> Step 1: Back to shipping
function backToShippingDetails() {
  const step1 = document.getElementById("checkoutStepDetails");
  const step2 = document.getElementById("checkoutStepPayment");
  if (step1) step1.style.display = "block";
  if (step2) step2.style.display = "none";
}

// Payment Tabs Switcher: UPI App vs QR Code
function switchPayTab(tab) {
  currentPayTab = tab;
  const tabUpi = document.getElementById("tabBtnUpi");
  const tabQr = document.getElementById("tabBtnQr");
  const viewUpi = document.getElementById("viewPayUpi");
  const viewQr = document.getElementById("viewPayQr");

  if (tab === "upi") {
    if (tabUpi) tabUpi.classList.add("active");
    if (tabQr) tabQr.classList.remove("active");
    if (viewUpi) viewUpi.style.display = "block";
    if (viewQr) viewQr.style.display = "none";
  } else {
    if (tabUpi) tabUpi.classList.remove("active");
    if (tabQr) tabQr.classList.add("active");
    if (viewUpi) viewUpi.style.display = "none";
    if (viewQr) viewQr.style.display = "block";
  }
}

// Copy UPI ID helper
function copyUpiId() {
  const upiId = "9022676722@okaxis";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(upiId).then(() => {
      showToast("UPI ID copied: " + upiId);
    }).catch(() => {
      fallbackCopyText(upiId);
    });
  } else {
    fallbackCopyText(upiId);
  }
}

function fallbackCopyText(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  showToast("UPI ID copied: " + text);
}

// Trigger UPI Deep Link on mobile / Intent
function triggerUpiIntent(appName, event) {
  if (event) event.preventDefault();
  const total = getCartGrandTotal();
  const upiId = "9022676722@okaxis";
  const payeeName = encodeURIComponent("Diecast World India");
  const note = encodeURIComponent("Diecast World Collector Order");
  const upiUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${total}&cu=INR&tn=${note}`;

  copyUpiId();
  showToast(`Opening ${appName} (₹${total.toLocaleString("en-IN")}) or use UPI ID: ${upiId}`);

  // If on mobile device, attempt to open the UPI handler
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = upiUrl;
  }
}

// Handle Payment Screenshot Upload (MANDATORY)
function handleScreenshotSelected(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showToast("Please select a valid image file (PNG, JPG, WebP).");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    currentPaymentScreenshot = {
      name: file.name,
      size: file.size,
      dataUrl: dataUrl
    };

    const prevImg = document.getElementById("screenshotPreviewImg");
    if (prevImg) prevImg.src = dataUrl;

    const fileNameEl = document.getElementById("previewFileName");
    if (fileNameEl) fileNameEl.innerText = file.name;

    const dropLabel = document.getElementById("dropzoneLabel");
    if (dropLabel) dropLabel.style.display = "none";

    const prevBox = document.getElementById("screenshotPreviewContainer");
    if (prevBox) prevBox.style.display = "flex";

    const dropzone = document.getElementById("screenshotDropzone");
    if (dropzone) {
      dropzone.classList.add("has-file");
      dropzone.classList.remove("highlight-error");
    }

    showToast("Payment screenshot attached! Now click Submit Proof to place order.");
  };
  reader.readAsDataURL(file);
}

// Final Submit with Mandatory Payment Screenshot Verification
function submitOrderWithPaymentProof() {
  if (!checkoutCustomerInfo) {
    goToPaymentStep();
    return;
  }

  // MANDATORY VALIDATION: Screenshot MUST be uploaded
  if (!currentPaymentScreenshot) {
    const dropzone = document.getElementById("screenshotDropzone");
    if (dropzone) {
      dropzone.classList.add("highlight-error");
      setTimeout(() => dropzone.classList.remove("highlight-error"), 800);
      dropzone.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    showToast("Payment screenshot is mandatory to place your order!");
    return;
  }

  const total = getCartGrandTotal();
  const orderNum = "DWI-" + Math.floor(100000 + Math.random() * 900000);
  const utr = document.getElementById("paymentUtrNumber")?.value.trim() || "";

  const orderRecord = {
    orderId: orderNum,
    date: new Date().toLocaleString("en-IN"),
    customer: checkoutCustomerInfo,
    items: [...cart],
    total: total,
    paymentMethod: currentPayTab === "qr" ? "UPI QR Code" : "UPI App",
    utrNumber: utr,
    screenshotName: currentPaymentScreenshot.name,
    screenshotData: currentPaymentScreenshot.dataUrl,
    status: "Payment Verification Pending"
  };

  // Save order to LocalStorage for admin panel integration
  try {
    const existingOrders = JSON.parse(localStorage.getItem("dwi_orders") || "[]");
    existingOrders.unshift(orderRecord);
    localStorage.setItem("dwi_orders", JSON.stringify(existingOrders));
  } catch (err) {
    console.warn("Storage quota note:", err);
  }

  // Clear cart
  cart = [];
  saveCart();
  updateCartCounters();
  renderCartDrawer();
  closeDrawer("cartDrawer");

  // Populate Step 3 Success Screen
  const successOrderEl = document.getElementById("successOrderId");
  if (successOrderEl) successOrderEl.innerText = "#" + orderNum;

  const successNameEl = document.getElementById("successCustomerName");
  if (successNameEl) successNameEl.innerText = checkoutCustomerInfo.name;

  const successPhoneEl = document.getElementById("successCustomerPhone");
  if (successPhoneEl) successPhoneEl.innerText = checkoutCustomerInfo.phone;

  const successAmountEl = document.getElementById("successTotalAmount");
  if (successAmountEl) successAmountEl.innerText = "₹" + total.toLocaleString("en-IN");

  // Transition to Step 3
  const step2 = document.getElementById("checkoutStepPayment");
  const step3 = document.getElementById("checkoutStepSuccess");
  if (step2) step2.style.display = "none";
  if (step3) step3.style.display = "block";

  showToast(`Order #${orderNum} Placed! Screenshot submitted for admin verification.`);
}

function closeCheckoutSuccess() {
  closeModal("checkoutModal");
  showToast("Thank you for choosing Diecast World India!");
}

// ==========================================================================
// DRAWER & MODAL CONTROLLERS (Cart, Garage, QuickView, Checkout)
// ==========================================================================

function openDrawer(drawerId) {
  const backdrop = document.getElementById("drawerBackdrop");
  const drawer = document.getElementById(drawerId);
  if (backdrop && drawer) {
    backdrop.classList.add("active");
    drawer.classList.add("active");
    document.body.style.overflow = "hidden";
    if (drawerId === "garageDrawer") renderGarageDrawer();
    if (drawerId === "cartDrawer") renderCartDrawer();
  }
}

function closeDrawer(drawerId) {
  const backdrop = document.getElementById("drawerBackdrop");
  const drawer = document.getElementById(drawerId);
  if (backdrop && drawer) {
    backdrop.classList.remove("active");
    drawer.classList.remove("active");
    const anyActiveDrawer = document.querySelector(".drawer-pane.active");
    if (!anyActiveDrawer) {
      document.body.style.overflow = "";
    }
  }
}

function closeAllDrawers() {
  document.querySelectorAll(".drawer-pane").forEach(d => d.classList.remove("active"));
  const backdrop = document.getElementById("drawerBackdrop");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}


function openCardLightbox() {
  openModal("businessCardModal");
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("active");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

function requestGarageDispatch() {
  if (garageBag.length === 0) {
    showToast("Your garage hold is empty!");
    return;
  }
  showToast("Dispatch request received! Combined shipment scheduled.");
  closeDrawer("garageDrawer");
}



// Filter Event Handlers
function setScaleFilter(scale) {
  currentFilter.scale = scale;
  document.querySelectorAll(".scale-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.scale === scale);
  });
  renderCatalog();
}

function setBrandFilter(brand) {
  currentFilter.brand = brand;
  document.querySelectorAll(".brand-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.brand === brand);
  });
  renderCatalog();
}

function setStatusFilter(status) {
  currentFilter.status = status;
  document.querySelectorAll(".filter-chip-btn").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.status === status);
  });
  renderCatalog();
}

function setSortOption(sort) {
  currentFilter.sort = sort;
  renderCatalog();
}

function resetAllFilters() {
  currentFilter = {
    scale: "all",
    brand: "all",
    status: "all",
    search: "",
    sort: "featured"
  };
  const searchInput = document.getElementById("navSearchInput");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".scale-tab").forEach(t => t.classList.toggle("active", t.dataset.scale === "all"));
  document.querySelectorAll(".brand-btn").forEach(b => b.classList.toggle("active", b.dataset.brand === "all"));
  document.querySelectorAll(".filter-chip-btn").forEach(c => c.classList.toggle("active", c.dataset.status === "all"));
  renderCatalog();
}

// Toast System
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-icon-wrap">${ICONS.car}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Setup Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById("navSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentFilter.search = e.target.value;
      renderCatalog();
      
      // If user typed a search query and is scrolled down, smoothly focus catalog
      if (currentFilter.search.trim().length > 0 && window.scrollY > 80) {
        const catalog = document.getElementById("catalogSection");
        if (catalog) {
          catalog.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  }

  // Backdrop click to close drawers
  const backdrop = document.getElementById("drawerBackdrop");
  if (backdrop) {
    backdrop.addEventListener("click", closeAllDrawers);
  }

  // Backdrop click to close any open modal
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });
}

// Setup Keyboard Shortcuts (e.g. '/' to focus search, Esc to clear search or close modals)
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      const s = document.getElementById("navSearchInput");
      if (s) {
        s.focus();
        s.select();
      }
    } else if (e.key === "Escape") {
      const searchInput = document.getElementById("navSearchInput");
      if (searchInput && searchInput.value.trim() !== "") {
        clearSearch();
      }
      closeAllDrawers();
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
    }
  });
}


// Luxury Automotive Scroll Reveal Observer
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-scale-up');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}
