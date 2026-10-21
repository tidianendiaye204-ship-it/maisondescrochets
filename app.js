/**
 * MAISON DES CROCHETS - DAKAR
 * Application Logic, Products Data, Cart & WhatsApp Ordering System
 * Mode: Prix sur demande (pas de prix affichés) • Icônes vectorielles professionnelles
 */

// Global Configuration
const CONFIG = {
  brandName: "Maison des Crochet",
  whatsappNumber: "221766540318", // Format international direct Sénégal (+221 76 654 03 18)
  whatsappNumberAlt: "221777148530",
  phoneDisplay: "76 654 03 18",
  phoneIntl: "+221766540318",
  email: "mdiarradiop20@gmail.com",
  address: "Parcelles Assainies – Unité 18, Dakar, Sénégal",
  instagram: "https://www.instagram.com/maison_des_crochets",
  tiktok: "https://www.tiktok.com/@maison_des_crochets"
};

// Reusable Professional SVG Icons
const SVG_ICONS = {
  whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.101.005.232-.039.362.274.145.347.492 1.2.535 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>`,
  heartOutline: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFilled: `<svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-bordeaux)" stroke="var(--color-bordeaux)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  play: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>`,
  pause: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
  sparkle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`,
  clock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  bag: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  close: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
};

// Real Products Catalog with User's Authentic Photos (NO PRICES)
const PRODUCTS = [
  {
    id: "robe-bebe",
    title: "Robe Bébé Fleurie & Bandeau",
    category: "bebes",
    categoryLabel: "Bébés & Enfants",
    description: "Adorable robe au crochet bicolore blanc crème et rouge carmin ornée d’une fleur en relief, accompagnée de son bandeau fleuri assorti. 100% coton doux respectueux de la peau délicate de bébé.",
    image: "images/robe-bebe.jpg",
    sizes: ["Naissance (0-3 mois)", "3-6 mois", "6-12 mois", "12-18 mois", "18-24 mois", "Sur-mesure"],
    colors: ["Blanc & Rouge (Photo)", "Écru & Rose poudré", "Blanc & Jaune soleil", "Tout Blanc baptême"],
    badge: "Bestseller Fait Main",
    featured: true
  },
  {
    id: "robe-sirene-bordeaux",
    title: "Robe Sirène Longue & Accessoires",
    category: "robes",
    categoryLabel: "Robes & Ensembles",
    description: "Somptueuse robe longue sirène en maille bordeaux avec bretelles fleuries, dos nu à lacets délicats et base évasée ajourée. Disponible seule ou avec sac et sandales à talons assortis.",
    image: "images/robe-sirene-bordeaux.jpg",
    sizes: ["Taille XS", "Taille S", "Taille M", "Taille L", "Taille XL", "Sur-mesure exact"],
    colors: ["Bordeaux royal (Photo)", "Noir profond", "Écru naturel", "Terracotta d'Afrique", "Bleu nuit"],
    badge: "Haute Création",
    featured: true
  },
  {
    id: "top-granny",
    title: "Top Granny Squares Bicolore",
    category: "hauts",
    categoryLabel: "Hauts & Tops",
    description: "Top dos nu emblématique en carrés au crochet bordeaux et beige écru, finition en pointe losange et liens croisés dans le dos. Style bohème chic parfait avec jean, pantalon palazzo ou jupe.",
    image: "images/top-granny.jpg",
    altImage: "images/portrait-modele.jpg",
    sizes: ["Taille Unique Ajustable", "Taille S/M", "Taille L/XL", "Sur-mesure"],
    colors: ["Bordeaux & Beige (Photo)", "Noir & Blanc cassé", "Terracotta & Écru", "Couleurs personnalisées"],
    badge: "Coup de Cœur",
    featured: true
  },
  {
    id: "ensemble-marron",
    title: "Ensemble Haut Cœur & Short Moka",
    category: "ensembles",
    categoryLabel: "Ensembles & Vêtements",
    description: "Ensemble deux-pièces comprenant un haut à encolure cœur à bretelles douces et un short assorti avec lien de serrage, crochetés dans un fil brun moka chaleureux et respirant. Livré avec sa mini-pochette.",
    image: "images/ensemble-marron.jpg",
    sizes: ["Taille S", "Taille M", "Taille L", "Sur-mesure"],
    colors: ["Brun Moka (Photo)", "Vert Kaki", "Sable du désert", "Noir élégant"],
    badge: "Fait Main Dakar",
    featured: true
  },
  {
    id: "chaussures-crochet",
    title: "Baskets & Chaussures au Crochet",
    category: "chaussures",
    categoryLabel: "Chaussures & Baskets",
    description: "Création exclusive : chaussures souples entièrement crochetées à la main avec semelle confortable, lacets intégrés et motifs fleuris en relief sur les côtés. Allure artisanale chic et moderne.",
    image: "images/chaussures-crochet.jpg",
    sizes: ["Pointure 36", "Pointure 37", "Pointure 38", "Pointure 39", "Pointure 40", "Pointure 41", "Pointure 42"],
    colors: ["Brun chocolat & Fleur blanche (Photo)", "Beige écru", "Noir & Blanc", "Bordeaux"],
    badge: "Innovation",
    featured: true
  },
  {
    id: "ensemble-rouge-rose",
    title: "Ensemble Brassière & Jupe Rouge et Rose",
    category: "ensembles",
    categoryLabel: "Ensembles & Vêtements",
    description: "Ensemble pétillant associant une brassière à bretelles croisées et une jupe courte évasée à rayures bicolores rouge carmin et rose bonbon. Lien noué à la taille et festons crochetés.",
    image: "images/ensemble-rouge-rose.jpg",
    sizes: ["Taille XS", "Taille S", "Taille M", "Taille L", "Sur-mesure"],
    colors: ["Rouge vif & Rose (Photo)", "Bordeaux & Nude", "Orange & Jaune", "Noir & Beige"],
    badge: "Tendance d'été",
    featured: false
  },
  {
    id: "sac-totebag-coeurs",
    title: "Sac Tote Bag Carrés Cœurs",
    category: "sacs",
    categoryLabel: "Sacs & Accessoires",
    description: "Grand sac cabas tote bag confectionné en carrés granny au crochet bicolores avec cœurs contrastés. Anses robustes crochetées, idéal pour les sorties, les cours ou la plage.",
    image: "images/sac-totebag-coeurs.jpg",
    sizes: ["Taille Standard (35x38 cm)", "Grand format cabas (42x45 cm)"],
    colors: ["Corail & Blanc (Photo)", "Rose & Écru", "Noir & Blanc", "Tons personnalisés"],
    badge: "Accessoire Phare",
    featured: false
  },
  {
    id: "protege-casque",
    title: "Protège-Casque Audio Araignée",
    category: "sacs",
    categoryLabel: "Sacs & Accessoires",
    description: "Housse de protection pour casque audio supra-auriculaire au crochet couleur crème, ornée d’une araignée noire tissée en 3D. Original, protecteur et ultra tendance pour la musique et le style.",
    image: "images/protege-casque.jpg",
    sizes: ["Taille universelle extensible pour casque audio"],
    colors: ["Crème & Araignée Noire (Photo)", "Tout Noir", "Gris & Rouge"],
    badge: "Design Original",
    featured: false
  }
];

// Video Reels (Nos créations en mouvement)
const VIDEOS = [
  {
    id: "v1",
    title: "Top Granny Squares porté",
    category: "Hauts & Tops",
    src: "images/video-1.mp4",
    poster: "images/top-granny.jpg",
    desc: "Découvrez le tombé fluide et les détails des finitions dans le dos."
  },
  {
    id: "v2",
    title: "Ensemble Rouge & Rose en mouvement",
    category: "Ensembles",
    src: "images/video-2.mp4",
    poster: "images/ensemble-rouge-rose.jpg",
    desc: "Aperçu de la jupe courte et du haut croisé sous la lumière naturelle."
  },
  {
    id: "v3",
    title: "Détails de la maille à l'Atelier",
    category: "Savoir-faire",
    src: "images/video-3.mp4",
    poster: "images/robe-sirene-bordeaux.jpg",
    desc: "La précision des points et la régularité du travail fait main à Dakar."
  },
  {
    id: "v4",
    title: "La Robe Bébé Fleurie",
    category: "Bébés & Enfants",
    src: "images/video-4.mp4",
    poster: "images/robe-bebe.jpg",
    desc: "Douceur des matières et délicatesse du bandeau fleuri."
  },
  {
    id: "v5",
    title: "Accessoires & Sacs Crochetés",
    category: "Accessoires",
    src: "images/video-5.mp4",
    poster: "images/sac-totebag-coeurs.jpg",
    desc: "Texture et souplesse de notre collection de sacs et accessoires."
  },
  {
    id: "v6",
    title: "Shooting & Présentation des pièces",
    category: "Lookbook",
    src: "images/video-6.mp4",
    poster: "images/portrait-modele.jpg",
    desc: "Chaque pièce raconte une histoire de passion et d'élégance."
  }
];

// State Management
let currentFilter = "all";
let searchQuery = "";
let cart = JSON.parse(localStorage.getItem("mdc_cart") || "[]");
let activeOrderProduct = null;

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderVideos();
  updateCartBadge();
  setupEventListeners();
  setupConfigurator();
});

// Render Products Grid (No Prices, Prominent WhatsApp Button)
function renderProducts() {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = currentFilter === "all" || p.category === currentFilter;
    const matchesSearch = searchQuery === "" || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <p style="font-size: 1.15rem; color: var(--ink-secondary); margin-bottom: 14px;">Aucun modèle ne correspond à votre recherche « ${searchQuery} ».</p>
        <button class="btn btn-outline btn-sm" onclick="resetFilters()">Réinitialiser les filtres</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const inCart = cart.some(item => item.id === p.id);
    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-media">
          <div class="product-badges">
            <span class="product-badge badge-artisan">${p.badge || 'Fait Main'}</span>
          </div>
          <button class="wishlist-toggle ${inCart ? 'active' : ''}" onclick="toggleWishlistItem('${p.id}', event)" title="${inCart ? 'Retirer de ma sélection' : 'Ajouter à ma sélection'}" aria-label="Ajouter à ma sélection">
            ${inCart ? SVG_ICONS.heartFilled : SVG_ICONS.heartOutline}
          </button>
          <img src="${p.image}" alt="${p.title}" loading="lazy" onclick="openProductModal('${p.id}')">
        </div>
        <div class="product-info">
          <div class="product-category">${p.categoryLabel}</div>
          <h3 class="product-title" onclick="openProductModal('${p.id}')" style="cursor:pointer;">${p.title}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-footer">
            <div class="product-craft-tag">
              ${SVG_ICONS.clock}
              <span>Fait main sur-mesure</span>
            </div>
            <div class="product-actions">
              <button class="btn btn-whatsapp btn-order-direct" onclick="openProductOrderModal('${p.id}')" title="Commander ${p.title} sur WhatsApp">
                ${SVG_ICONS.whatsapp}
                <span>Commander</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Render Videos Showcase
function renderVideos() {
  const container = document.getElementById("videosScroll");
  if (!container) return;

  container.innerHTML = VIDEOS.map((v, idx) => `
    <div class="video-card">
      <video id="video-player-${idx}" playsinline loop preload="metadata" poster="${v.poster}">
        <source src="${v.src}" type="video/mp4">
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
      <div class="video-overlay">
        <span class="video-tag">${v.category}</span>
        <div class="video-details">
          <h4>${v.title}</h4>
          <p>${v.desc}</p>
        </div>
      </div>
      <div class="video-controls">
        <button class="video-play-toggle" onclick="toggleVideoPlayback('video-player-${idx}', this)" aria-label="Lire la vidéo">
          ${SVG_ICONS.play}
        </button>
      </div>
    </div>
  `).join("");
}

// Video Playback Toggle
function toggleVideoPlayback(videoId, btn) {
  const video = document.getElementById(videoId);
  if (!video) return;

  // Pause all other playing videos
  document.querySelectorAll(".video-card video").forEach(v => {
    if (v.id !== videoId && !v.paused) {
      v.pause();
      const parentBtn = v.closest(".video-card")?.querySelector(".video-play-toggle");
      if (parentBtn) parentBtn.innerHTML = SVG_ICONS.play;
    }
  });

  if (video.paused) {
    video.play();
    btn.innerHTML = SVG_ICONS.pause;
  } else {
    video.pause();
    btn.innerHTML = SVG_ICONS.play;
  }
}

// Filter Tabs Handling
function setFilter(cat) {
  currentFilter = cat;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === cat);
  });
  renderProducts();
}

function resetFilters() {
  currentFilter = "all";
  searchQuery = "";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === "all");
  });
  renderProducts();
}

// Setup Event Listeners
function setupEventListeners() {
  // Mobile Hamburger Toggle
  const hamburger = document.getElementById("hamburgerBtn");
  const mainNav = document.getElementById("mainNav");
  if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });

    // Close when clicking nav links on mobile
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
      });
    });
  }

  // Filter Buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setFilter(btn.dataset.filter);
    });
  });

  // Search Input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Cart / Wishlist Drawer Buttons
  const cartBtn = document.getElementById("cartToggleBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const drawerBackdrop = document.getElementById("drawerBackdrop");

  if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeCartDrawer);
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", (e) => {
      if (e.target === drawerBackdrop) closeCartDrawer();
    });
  }

  // FAQ Accordions
  document.querySelectorAll(".faq-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.closest(".faq-item");
      const wasActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
      if (!wasActive) item.classList.add("active");
    });
  });
}

// Product Quick View Modal (NO PRICES)
function openProductModal(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  const modal = document.getElementById("productModal");
  const body = document.getElementById("productModalBody");
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; align-items: start;">
      <div style="border-radius: var(--radius-md); overflow: hidden; background: #F8F3EC; border: 1px solid var(--border-light);">
        <img src="${p.image}" alt="${p.title}" style="width: 100%; height: auto; object-fit: cover;">
      </div>
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--color-bordeaux); letter-spacing: 0.08em;">${p.categoryLabel}</span>
        <h2 style="font-size: 1.8rem; font-family: var(--font-serif); margin: 0;">${p.title}</h2>
        
        <div style="display: inline-flex; align-items: center; gap: 8px; font-size: 0.88rem; font-weight: 700; color: var(--color-terracotta);">
          ${SVG_ICONS.sparkle}
          <span>Confection 100% fait main à Dakar • Pièce personnalisable</span>
        </div>

        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--ink-secondary); margin: 0;">${p.description}</p>
        
        <div>
          <h4 style="font-size: 0.88rem; font-weight: 700; margin-bottom: 8px;">Tailles disponibles :</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${p.sizes.map(s => `<span style="font-size: 0.8rem; padding: 4px 10px; background: #FAF7F2; border: 1px solid var(--border-light); border-radius: var(--radius-full);">${s}</span>`).join("")}
          </div>
        </div>

        <div>
          <h4 style="font-size: 0.88rem; font-weight: 700; margin-bottom: 8px;">Couleurs & Options :</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${p.colors.map(c => `<span style="font-size: 0.8rem; padding: 4px 10px; background: var(--color-cream); border: 1px solid var(--border-accent); border-radius: var(--radius-full); color: var(--color-bordeaux); font-weight: 600;">${c}</span>`).join("")}
          </div>
        </div>

        <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 10px;">
          <button class="btn btn-whatsapp" onclick="closeModal('productModal'); openProductOrderModal('${p.id}');">
            ${SVG_ICONS.whatsapp}
            Commander sur WhatsApp
          </button>
          <button class="btn btn-outline btn-sm" onclick="toggleWishlistItem('${p.id}'); closeModal('productModal');">
            ${cart.some(i => i.id === p.id) ? 'Retirer de ma sélection' : 'Ajouter à ma sélection'}
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
}

// Open Dedicated WhatsApp Order Modal (NO PRICES)
function openProductOrderModal(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  activeOrderProduct = p;
  const modal = document.getElementById("orderModal");
  const body = document.getElementById("orderModalBody");
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="display: flex; align-items: center; gap: 14px; padding-bottom: 14px; border-bottom: 1px solid var(--border-light);">
      <img src="${p.image}" alt="${p.title}" style="width: 70px; height: 70px; border-radius: var(--radius-sm); object-fit: cover;">
      <div>
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 4px;">${p.title}</h4>
        <span class="product-badge badge-artisan" style="display:inline-block;">Fait main sur-mesure</span>
      </div>
    </div>

    <form id="productOrderForm" onsubmit="submitWhatsAppOrder(event)">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <label style="font-size: 0.88rem; font-weight: 700; display: block; margin-bottom: 6px;">1. Choisissez votre taille / pointure :</label>
          <select id="orderSizeSelect" class="config-input" required>
            ${p.sizes.map((s, idx) => `<option value="${s}" ${idx === 0 ? 'selected' : ''}>${s}</option>`).join("")}
          </select>
        </div>

        <div>
          <label style="font-size: 0.88rem; font-weight: 700; display: block; margin-bottom: 6px;">2. Teinte / Couleur souhaitée :</label>
          <select id="orderColorSelect" class="config-input" required>
            ${p.colors.map((c, idx) => `<option value="${c}" ${idx === 0 ? 'selected' : ''}>${c}</option>`).join("")}
          </select>
        </div>

        <div>
          <label style="font-size: 0.88rem; font-weight: 700; display: block; margin-bottom: 6px;">3. Note personnalisée ou précision (facultatif) :</label>
          <input type="text" id="orderCustomNote" class="config-input" placeholder="Ex: Livraison aux Almadies, besoin pour vendredi...">
        </div>

        <div style="background: #FAF7F2; padding: 14px; border-radius: var(--radius-sm); border: 1px dashed var(--border-accent); font-size: 0.85rem;">
          <p style="margin-bottom: 4px; font-weight: 700; color: var(--ink-primary); display:flex; align-items:center; gap:6px;">
            ${SVG_ICONS.sparkle} Aperçu de votre message WhatsApp :
          </p>
          <p id="whatsappMessagePreview" style="font-style: italic; color: var(--ink-secondary); white-space: pre-wrap; font-size: 0.83rem; margin: 0;"></p>
        </div>

        <button type="submit" class="btn btn-whatsapp" style="width: 100%; font-size: 1.05rem; padding: 14px;">
          ${SVG_ICONS.whatsapp}
          Ouvrir WhatsApp & Envoyer ma Commande
        </button>
      </div>
    </form>
  `;

  // Live update preview
  const sizeSelect = document.getElementById("orderSizeSelect");
  const colorSelect = document.getElementById("orderColorSelect");
  const noteInput = document.getElementById("orderCustomNote");

  const updatePreview = () => {
    const previewEl = document.getElementById("whatsappMessagePreview");
    if (!previewEl) return;
    const size = sizeSelect ? sizeSelect.value : "";
    const color = colorSelect ? colorSelect.value : "";
    const note = noteInput && noteInput.value.trim() ? `\n• Précision : ${noteInput.value.trim()}` : "";
    
    previewEl.textContent = `Bonjour Maison des Crochets, je souhaite commander la création :
• Modèle : ${p.title}
• Taille : ${size}
• Teinte : ${color}${note}

Pouvez-vous me confirmer la disponibilité et le délai de confection pour une livraison à Dakar ? Merci !`;
  };

  if (sizeSelect) sizeSelect.addEventListener("change", updatePreview);
  if (colorSelect) colorSelect.addEventListener("change", updatePreview);
  if (noteInput) noteInput.addEventListener("input", updatePreview);

  updatePreview();
  modal.classList.add("open");
}

function submitWhatsAppOrder(e) {
  e.preventDefault();
  if (!activeOrderProduct) return;

  const size = document.getElementById("orderSizeSelect")?.value || "";
  const color = document.getElementById("orderColorSelect")?.value || "";
  const note = document.getElementById("orderCustomNote")?.value.trim() || "";

  let msg = `Bonjour Maison des Crochets, je souhaite commander la création :\n• Modèle : ${activeOrderProduct.title}\n• Taille : ${size}\n• Teinte : ${color}`;
  if (note) msg += `\n• Précision : ${note}`;
  msg += `\n\nPouvez-vous me confirmer la disponibilité et le délai de confection pour une livraison à Dakar ? Merci !`;

  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
  closeModal("orderModal");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("open");
}

// Cart / Selection Drawer Functions (NO PRICES)
function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById("drawerBackdrop");
  if (drawer) drawer.classList.add("open");
}

function closeCartDrawer() {
  const drawer = document.getElementById("drawerBackdrop");
  if (drawer) drawer.classList.remove("open");
}

function toggleWishlistItem(productId, event) {
  if (event) event.stopPropagation();
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  const idx = cart.findIndex(item => item.id === productId);
  if (idx > -1) {
    cart.splice(idx, 1);
    showToast(`« ${p.title} » retiré de votre sélection`);
  } else {
    cart.push({
      id: p.id,
      title: p.title,
      categoryLabel: p.categoryLabel,
      image: p.image
    });
    showToast(`« ${p.title} » ajouté à votre sélection`);
  }

  localStorage.setItem("mdc_cart", JSON.stringify(cart));
  updateCartBadge();
  renderProducts();
  if (document.getElementById("drawerBackdrop")?.classList.contains("open")) {
    renderCartDrawer();
  }
}

function removeFromCart(productId) {
  const idx = cart.findIndex(item => item.id === productId);
  if (idx > -1) {
    const title = cart[idx].title;
    cart.splice(idx, 1);
    localStorage.setItem("mdc_cart", JSON.stringify(cart));
    updateCartBadge();
    renderProducts();
    renderCartDrawer();
    showToast(`« ${title} » retiré`);
  }
}

function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (badge) {
    badge.textContent = cart.length;
    badge.style.display = cart.length > 0 ? "flex" : "none";
  }
}

function renderCartDrawer() {
  const container = document.getElementById("drawerItems");
  const countEl = document.getElementById("drawerTotalCount");
  const checkoutBtn = document.getElementById("drawerCheckoutBtn");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--ink-secondary);">
        <div style="margin-bottom: 12px; color: var(--color-terracotta);">${SVG_ICONS.bag}</div>
        <p style="font-weight: 700; margin-bottom: 6px;">Votre sélection est vide</p>
        <p style="font-size: 0.88rem; color: var(--ink-muted);">Cliquez sur les cœurs pour composer votre sélection de créations au crochet.</p>
      </div>
    `;
    if (countEl) countEl.textContent = "0 article";
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.style.opacity = "0.5";
    }
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.title}</h4>
        <div style="font-size: 0.8rem; color: var(--color-terracotta); font-weight: 600;">Fait main sur-mesure</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Supprimer" aria-label="Supprimer">
        ${SVG_ICONS.close}
      </button>
    </div>
  `).join("");

  if (countEl) countEl.textContent = `${cart.length} création(s)`;
  if (checkoutBtn) {
    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = "1";
    checkoutBtn.onclick = sendCartWhatsAppOrder;
  }
}

function sendCartWhatsAppOrder() {
  if (cart.length === 0) return;

  const itemsText = cart.map((item, i) => `${i + 1}. ${item.title}`).join("\n");

  const msg = `Bonjour Maison des Crochets, je souhaite commander l'ensemble des créations suivantes de ma sélection :\n\n${itemsText}\n\nPouvez-vous m'indiquer la disponibilité et le délai de confection pour une livraison à Dakar ? Merci !`;

  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
  closeCartDrawer();
}

// Custom Order Configurator ("Studio Sur-Mesure")
function setupConfigurator() {
  const modelOptions = document.querySelectorAll(".model-option");
  const colorSwatches = document.querySelectorAll(".swatch-item");
  const sizeSelect = document.getElementById("configSizeSelect");
  const customNotes = document.getElementById("configCustomNotes");

  let selectedModel = "Haut dos nu / Crop top";
  let selectedColor = "Terracotta & Beige";
  let selectedSize = "Taille Standard M";

  const updateSummary = () => {
    const summaryModel = document.getElementById("summaryModel");
    const summaryColor = document.getElementById("summaryColor");
    const summarySize = document.getElementById("summarySize");

    if (summaryModel) summaryModel.textContent = selectedModel;
    if (summaryColor) summaryColor.textContent = selectedColor;
    if (summarySize) summarySize.textContent = selectedSize;
  };

  modelOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      modelOptions.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      selectedModel = opt.dataset.model || opt.textContent.trim();
      updateSummary();
    });
  });

  colorSwatches.forEach(swatch => {
    swatch.addEventListener("click", () => {
      colorSwatches.forEach(s => s.classList.remove("active"));
      swatch.classList.add("active");
      selectedColor = swatch.dataset.color || swatch.textContent.trim();
      updateSummary();
    });
  });

  if (sizeSelect) {
    sizeSelect.addEventListener("change", () => {
      selectedSize = sizeSelect.value;
      updateSummary();
    });
  }

  const submitBtn = document.getElementById("configSubmitBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const note = customNotes ? customNotes.value.trim() : "";
      let msg = `Bonjour Maison des Crochets, je souhaite faire réaliser une création sur-mesure personnalisée :\n\n• Type de création : ${selectedModel}\n• Teinte & Fil : ${selectedColor}\n• Mensurations / Taille : ${selectedSize}`;
      if (note) msg += `\n• Détails & Souhaits : ${note}`;
      msg += `\n\nPouvez-vous me préciser les délais de confection pour Dakar ? Merci !`;

      const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank");
    });
  }

  updateSummary();
}

// Toast Feedback with Clean SVG Icon
function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span style="display:flex;align-items:center;gap:8px;">${SVG_ICONS.check} ${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
