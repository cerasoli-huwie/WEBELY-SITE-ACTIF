/**
 * WEBELY ACQUISITION SYSTEM — V6.5 CONTROLLER
 * 1. Multi-Step Interactive Client Wizard (Step 1 -> Step 2 -> Step 3 -> Step 4 -> Finito!)
 * 2. Real-Time iPhone iOS SMS Banner + Notion CRM Contact Page Sync & Row Flash
 * 3. Site-Wide Scroll Reveal (IntersectionObserver), Cursor Spotlight & Hero Parallax
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveWorkbench();
  initRoiCalculator();
  initFaqAccordion();
  initAuditModal();
  initFloatingCta();
  initMobileNav();
  initMicroInteractions();
});

/* ==========================================================================
   1. MULTI-STEP INTERACTIVE CLIENT WIZARD + IPHONE SMS + NOTION CRM
   ========================================================================== */
function getTradeSvgIcon(iconKey) {
  const ICONS = {
    // HVAC
    pac: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="5"/><path d="M12 7v10M7 12h10"/><path d="M16 8l-8 8"/></svg>`,
    clim: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="9" rx="2"/><line x1="6" y1="18" x2="6" y2="20"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="18" y1="18" x2="18" y2="20"/><line x1="6" y1="14" x2="18" y2="14"/></svg>`,
    boiler: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="2" width="12" height="20" rx="6"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="6" y1="15" x2="18" y2="15"/><circle cx="12" cy="6" r="1.5"/></svg>`,
    chaufferie: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M6 9v6a3 3 0 0 0 3 3h6"/><path d="M18 15V9a3 3 0 0 0-3-3H9"/></svg>`,

    // Renovation
    'house-reno': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    extension: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/><line x1="6" y1="12" x2="6" y2="12.01"/><line x1="6" y1="16" x2="6" y2="16.01"/><line x1="12" y1="6" x2="12" y2="6.01"/><line x1="16" y1="6" x2="16" y2="6.01"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="16" y1="10" x2="16" y2="10.01"/></svg>`,
    bath: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6h6a2 2 0 0 1 2 2v2H7V8a2 2 0 0 1 2-2z"/><path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3z"/><line x1="6" y1="20" x2="5" y2="22"/><line x1="18" y1="20" x2="19" y2="22"/></svg>`,
    combles: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 12 22 12 12 2"/><rect x="8" y="12" width="8" height="9"/><rect x="10" y="5" width="4" height="4"/></svg>`,

    // Toiture
    'roof-tiles': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 9 12 16 22 9 12 2"/><polyline points="2 15 12 22 22 15"/></svg>`,
    'roof-insul': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="2" y1="6" x2="22" y2="6"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="18" x2="22" y2="18"/><polygon points="12 2 2 6 22 6 12 2"/></svg>`,
    'roof-flat': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="10" width="18" height="10" rx="2"/><line x1="3" y1="7" x2="21" y2="7"/><line x1="7" y1="7" x2="7" y2="10"/><line x1="17" y1="7" x2="17" y2="10"/></svg>`,
    'roof-zinc': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14h12a4 4 0 0 0 4-4V4"/><line x1="4" y1="18" x2="16" y2="18"/></svg>`,

    // Solaire & Elec
    'solar-panel': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="14" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="3" x2="9" y2="17"/><line x1="15" y1="3" x2="15" y2="17"/><line x1="12" y1="17" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>`,
    'elec-box': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="8" y1="6" x2="10" y2="6"/><line x1="14" y1="6" x2="16" y2="6"/><circle cx="12" cy="18" r="1"/></svg>`,
    'elec-rewire': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    'ev-charger': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="10" height="16" rx="2"/><path d="M9 8v4"/><path d="M14 9h2a2 2 0 0 1 2 2v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9l-3-3"/></svg>`,

    // Generic Housing / Emitters
    house: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    villa: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10l8-6 8 6v10H4V10z"/><rect x="9" y="14" width="6" height="6"/></svg>`,
    building: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><path d="M10 22v-4h4v4"/></svg>`,
    blueprint: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    radiator: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><line x1="7" y1="5" x2="7" y2="19"/><line x1="11" y1="5" x2="11" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="3" y1="14" x2="21" y2="14"/></svg>`,
    floorheat: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h14a3 3 0 0 1 0 6H7a3 3 0 0 0 0 6h14"/></svg>`,
    euro: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    calendar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
  };
  return ICONS[iconKey] || ICONS.pac;
}

const SECTORS_DATA = {
  hvac: {
    name: 'Pompe à Chaleur & HVAC',
    shortSmsTag: 'Projet PAC',
    formBadge: 'Simulateur Officiel Primes & Devis 2026',
    formTitle: 'Quelle installation thermique souhaitez-vous chiffrer ?',
    formSub: 'Calcul immédiat sans engagement • Réponse certifiée par un installateur agréé sous 24h.',
    submitText: 'Calculer mes primes & Recevoir mon étude gratuite',
    step3TabName: 'Émetteurs',
    question1: 'Quel équipement thermique souhaitez-vous chiffrer ?',
    helper1: 'Sélectionnez le projet principal envisagé pour votre habitation :',
    choices: [
      { title: 'Pompe à chaleur Air/Eau', sub: 'Remplacement chaudière fioul / gaz', badge: 'Primes jusqu\'à 6 000 € • TVA 6%', icon: 'pac' },
      { title: 'Climatisation réversible (Air/Air)', sub: 'Chauffage hiver & fraîcheur été A+++', badge: 'Confort 4 Saisons A+++', icon: 'clim' },
      { title: 'Boiler thermodynamique', sub: 'Eau chaude sanitaire économique (-70%)', badge: 'Prime Régionale 2026', icon: 'boiler' },
      { title: 'Chaufferie complète & Rénovation', sub: 'PAC + Plancher chauffant / Radiateurs', badge: 'Bilan Global PEB', icon: 'chaufferie' }
    ],
    question2: 'Quelle est la situation de votre logement ?',
    helper2: 'Permet de calculer votre taux de TVA (6 % vs 21 %) et le montant de vos primes régionales :',
    eligibilities: [
      { title: 'Maison individuelle de plus de 10 ans', sub: 'Propriétaire occupant • Éligible TVA 6 % et primes régionales maximales', badge: 'TVA 6% & Primes Max', icon: 'house', val: 'Maison > 10 ans (TVA 6% & Primes)' },
      { title: 'Maison récente (moins de 10 ans)', sub: 'Remplacement de système ou optimisation de performance énergétique', badge: 'TVA 21%', icon: 'villa', val: 'Logement < 10 ans (TVA 21%)' },
      { title: 'Appartement en copropriété', sub: 'Climatisation réversible ou PAC avec accord de copropriété', badge: 'Accord Copro', icon: 'building', val: 'Appartement copropriété' },
      { title: 'Nouvelle construction / Projet sur plan', sub: 'Dimensionnement complet conforme aux normes PEB / RT2020', badge: 'Norme PEB A+', icon: 'blueprint', val: 'Nouvelle construction PEB' }
    ],
    question3: 'Quels sont vos émetteurs de chaleur actuels ?',
    helper3: 'Indispensable pour dimensionner la température d\'eau et le rendement de la pompe à chaleur :',
    step3Choices: [
      { title: 'Radiateurs traditionnels en fonte ou acier', sub: 'Haute température (65°C - 75°C) • Nécessite PAC haute température', badge: 'Haute Température', icon: 'radiator', val: 'Radiateurs Haute Température' },
      { title: 'Radiateurs basse température récents', sub: 'Eau à 45°C - 55°C • Idéal pour PAC moyenne température à haut rendement', badge: 'Basse Température', icon: 'radiator', val: 'Radiateurs Basse Température' },
      { title: 'Plancher chauffant hydraulique (Chauffage au sol)', sub: 'Basse température (35°C) • Rendement COP optimal supérieur à 4,5', badge: 'COP > 4.5', icon: 'floorheat', val: 'Plancher chauffant hydraulique' },
      { title: 'Chauffage électrique / Aucun circuit d\'eau', sub: 'Convecteurs directs • Idéal pour installation d\'une PAC Air/Air', badge: 'Solution Air/Air', icon: 'elec-rewire', val: 'Convecteurs électriques' }
    ],
    defaultTicket: 12500,
    defaultMargin: 40
  },
  renovation: {
    name: 'Rénovation Générale',
    shortSmsTag: 'Chantier Rénovation',
    formBadge: 'Simulateur Chiffrage & Aides Travaux 2026',
    formTitle: 'Quelle est la nature principale de votre chantier ?',
    formSub: 'Chiffrage précis selon vos prestations avec déplacement technique offert sous 24h.',
    submitText: 'Valider mon projet & Recevoir mon devis détaillé',
    step3TabName: 'Budget',
    question1: 'Quelle est la nature principale de votre chantier ?',
    helper1: 'Sélectionnez le type d\'intervention prioritaire pour votre bien :',
    choices: [
      { title: 'Rénovation complète de bâtiment', sub: 'Transformation lourde maison ou appartement de A à Z', badge: 'Tous corps d\'état', icon: 'house-reno' },
      { title: 'Extension / Agrandissement maçonné', sub: 'Création d\'annexe, surélévation ou ouverture porteur', badge: 'Gros Œuvre & Finition', icon: 'extension' },
      { title: 'Salle de bains clé en main', sub: 'Plomberie, carrelage, douche italienne et sanitaires', badge: 'Clé en main', icon: 'bath' },
      { title: 'Aménagement complet de combles', sub: 'Isolation toiture, plancher, cloisons Gyproc et Velux', badge: 'Surface Habitable', icon: 'combles' }
    ],
    question2: 'Quel est le statut de votre bien immobilier ?',
    helper2: 'Permet d\'adapter l\'application de la TVA réduite et des aides :',
    eligibilities: [
      { title: 'Propriétaire occupant (> 10 ans)', sub: 'Taux de TVA réduit à 6 % sur main-d\'œuvre et matériaux', badge: 'TVA 6% Réduite', icon: 'house', val: 'Propriétaire occupant (> 10 ans)' },
      { title: 'Achat en cours / Compromis signé', sub: 'Chiffrage prioritaire pour validation de votre prêt bancaire', badge: 'Dossier Prêt', icon: 'blueprint', val: 'Achat en cours (Compromis signé)' },
      { title: 'Investissement locatif / Rapport', sub: 'Optimisation de rentabilité et travaux de valorisation', badge: 'Investisseur', icon: 'building', val: 'Investissement locatif' },
      { title: 'Bâtiment de moins de 10 ans', sub: 'Travaux d\'aménagement et parachèvements intérieurs', badge: 'TVA 21%', icon: 'villa', val: 'Bien < 10 ans' }
    ],
    question3: 'Quelle est votre enveloppe budgétaire estimée ?',
    helper3: 'Permet de calibrer les matériaux et le niveau de prestation attendu :',
    step3Choices: [
      { title: '15 000 € – 35 000 €', sub: 'Rénovation ciblée (Salle de bain, cuisine, combles)', badge: 'Délai < 2 mois', icon: 'euro', val: '15k – 35k €' },
      { title: '35 000 € – 75 000 €', sub: 'Rénovation substantielle ou extension de surface moyenne', badge: 'Délai sous 3 mois', icon: 'euro', val: '35k – 75k €' },
      { title: '+ 75 000 €', sub: 'Rénovation globale complète tous corps d\'état', badge: 'Chantier complet', icon: 'euro', val: '+ 75k €' },
      { title: 'En cours de chiffrage / Selon devis', sub: 'Souhaite une visite technique pour évaluer le budget exact', badge: 'Visite Gratuite', icon: 'calendar', val: 'À définir sur visite' }
    ],
    defaultTicket: 25000,
    defaultMargin: 35
  },
  toiture: {
    name: 'Toiture & Isolation',
    shortSmsTag: 'Devis Toiture',
    formBadge: 'Diagnostic Toiture & Primes Isolation 2026',
    formTitle: 'Quel type de travaux de toiture envisagez-vous ?',
    formSub: 'Estimation conforme aux normes d\'isolation thermique et calcul officiel de vos primes.',
    submitText: 'Vérifier mes primes & Demander une visite technique',
    step3TabName: 'Surface',
    question1: 'Quel type de travaux de toiture envisagez-vous ?',
    helper1: 'Sélectionnez les travaux principaux requis sur votre couverture :',
    choices: [
      { title: 'Rénovation complète de couverture', sub: 'Tuiles terre cuite, ardoises naturelles, sous-toiture', badge: 'Garantie Décennale', icon: 'roof-tiles' },
      { title: 'Isolation thermique Sarking (Primes)', sub: 'Isolation continue par l\'extérieur R ≥ 5 • Primes max', badge: 'Primes Isolation', icon: 'roof-insul' },
      { title: 'Toiture plate / Plateforme EPDM', sub: 'Étanchéité monocouche sans joint, isolant PIR et zinc', badge: 'Étanchéité 50 ans', icon: 'roof-flat' },
      { title: 'Charpente, Zinguerie & Velux', sub: 'Corniches, gouttières zinc, fenêtres de toit et faîtage', badge: 'Finitions Zinguerie', icon: 'roof-zinc' }
    ],
    question2: 'Quel est l\'état et l\'ancienneté de votre toiture ?',
    helper2: 'Détermine votre priorité d\'intervention et vos aides financières :',
    eligibilities: [
      { title: 'Toiture ancienne (> 20 ans) à rénover', sub: 'Bénéficiez des primes régionales isolation et du taux TVA 6 %', badge: 'Primes Maximales', icon: 'house', val: 'Toiture > 20 ans (Primes Max)' },
      { title: 'Infiltration d\'eau / Fuite urgente constatée', sub: 'Nécessite un diagnostic technique rapide et sécurisation', badge: 'Visite Urgente', icon: 'villa', val: 'Fuite urgente constatée' },
      { title: 'Toiture en bon état, isolation seule', sub: 'Pose d\'isolant sous toiture ou Sarking pour conformité PEB', badge: 'Audit Thermique', icon: 'building', val: 'Isolation seule (Toiture saine)' },
      { title: 'Nouvelle annexe ou extension sur plan', sub: 'Pose de charpente, couverture neuve ou plateforme EPDM', badge: 'Sur Plan', icon: 'blueprint', val: 'Nouvelle construction' }
    ],
    question3: 'Quelle est la surface approximative de votre toiture ?',
    helper3: 'Permet de dimensionner le métré carré de couverture et d\'isolation :',
    step3Choices: [
      { title: 'Moins de 90 m²', sub: 'Petite toiture mitoyenne de ville ou toiture plate', badge: 'Budget optimisé', icon: 'roof-flat', val: 'Toiture < 90 m²' },
      { title: '90 m² à 160 m²', sub: 'Toiture standard de maison 2 ou 3 façades', badge: 'Format Standard', icon: 'roof-tiles', val: 'Toiture 90 – 160 m²' },
      { title: 'Plus de 160 m²', sub: 'Grande toiture de villa 4 façades ou immeuble', badge: 'Grande Surface', icon: 'roof-insul', val: 'Grande toiture (+ 160 m²)' },
      { title: 'Surface exacte à mesurer sur place', sub: 'Le métreur calculera la surface précise lors de la visite', badge: 'Métré Offert', icon: 'calendar', val: 'À mesurer sur place' }
    ],
    defaultTicket: 18500,
    defaultMargin: 38
  },
  electricite: {
    name: 'Électricité & Solaire',
    shortSmsTag: 'Projet Solaire / Élec',
    formBadge: 'Simulateur Solaire & Conformité RGIE 2026',
    formTitle: 'Quelle installation électrique souhaitez-vous réaliser ?',
    formSub: 'Dimensionnement personnalisé et simulation d\'autoconsommation immédiate.',
    submitText: 'Recevoir mon étude de rendement & mon devis',
    step3TabName: 'Facture',
    question1: 'Quelle installation électrique souhaitez-vous réaliser ?',
    helper1: 'Sélectionnez la prestation souhaitée pour votre logement :',
    choices: [
      { title: 'Photovoltaïque + Batterie domestique', sub: 'Autoconsommation solaire, réduction de facture jusqu\'à 75 %', badge: 'Rentabilité ~4 ans', icon: 'solar-panel' },
      { title: 'Mise en conformité RGIE & Nouveau tableau', sub: 'Schémas unifilaires, mise à la terre et contrôle agréé', badge: 'Contrôle Agréé RGIE', icon: 'elec-box' },
      { title: 'Rénovation électrique complète', sub: 'Recâblage complet maison, appareillage et domotique', badge: 'Normes Belges RGIE', icon: 'elec-rewire' },
      { title: 'Borne de recharge véhicule électrique', sub: 'Borne 11 kW / 22 kW connectée avec délestage dynamique', badge: 'Recharge Intelligente', icon: 'ev-charger' }
    ],
    question2: 'Quelle est votre situation actuelle ?',
    helper2: 'Permet de dimensionner votre raccordement et votre besoin de puissance :',
    eligibilities: [
      { title: 'Propriétaire souhaitant baisser ses factures', sub: 'Étude d\'orientation de toiture et dimensionnement de puissance', badge: 'Autoconsommation', icon: 'house', val: 'Propriétaire (Autoconsommation)' },
      { title: 'Rapport d\'infraction RGIE suite à un achat', sub: 'Mise aux normes obligatoire avec levée des remarques sous 18 mois', badge: 'Attestation Obligatoire', icon: 'blueprint', val: 'Rapport d\'infraction RGIE reçu' },
      { title: 'Maison en cours de rénovation lourde', sub: 'Remplacement tableau triphasé et création de nouveaux circuits', badge: 'TVA 6% si > 10 ans', icon: 'villa', val: 'Rénovation complète' },
      { title: 'Bâtiment professionnel / PME', sub: 'Installation de forte puissance et optimisation de puissance souscrite', badge: 'Sur Mesure', icon: 'building', val: 'Bâtiment professionnel' }
    ],
    question3: 'Quel est le montant moyen de votre facture annuelle d\'électricité ?',
    helper3: 'Indispensable pour calculer la rentabilité exacte de votre installation solaire :',
    step3Choices: [
      { title: 'Moins de 1 600 € / an', sub: 'Consommation modérée • Installation 8 à 10 panneaux (~3 kWc)', badge: 'Profil Éco', icon: 'solar-panel', val: '< 1 600 € / an' },
      { title: '1 600 € à 3 200 € / an', sub: 'Famille standard • Installation 12 à 18 panneaux + batterie (~5 kWc)', badge: 'Profil Familial', icon: 'solar-panel', val: '1 600 € – 3 200 € / an' },
      { title: 'Plus de 3 200 € / an', sub: 'Grande consommation (PAC / Véhicule électrique) • 20+ panneaux (~8 kWc)', badge: 'Grosse Conso', icon: 'ev-charger', val: '> 3 200 € / an' },
      { title: 'Non applicable / Projet sans panneaux', sub: 'Conformité RGIE ou borne de recharge seule', badge: 'Prestation Élec', icon: 'elec-box', val: 'Mise aux normes sans solaire' }
    ],
    defaultTicket: 9500,
    defaultMargin: 38
  }
};

const liveState = {
  currentStep: 1,
  project: 'Rénovation intérieure et extérieure',
  cp: '',
  surface: 'Toute la maison',
  delay: 'Dès que possible',
  name: '',
  phone: '',
  stage: 'Nouveau lead'
};

function initLiveWorkbench() {
  // 1. Sector Switcher Dock (4 Cards Above)
  const sectorBtns = document.querySelectorAll('.sector-btn');
  sectorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sectorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sector = btn.dataset.sector;

      // Map sector to relevant trade pills in Step 1
      const tradeMap = {
        hvac: 'Chauffage, ventilation, climatisation',
        renovation: 'Rénovation intérieure et extérieure',
        toiture: 'Toitures',
        electricite: 'Électricité'
      };

      const targetTrade = tradeMap[sector] || 'Rénovation intérieure et extérieure';
      const pills = document.querySelectorAll('#sim-trades-pills .contractor-pill');
      pills.forEach(p => {
        if (p.dataset.trade === targetTrade) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });

      liveState.project = targetTrade;
      syncLiveCrmPanel('notion-row-project');
      goToContractorStep(1);
    });
  });

  // 2. Stepper Item clicks (1, 2, 3)
  document.querySelectorAll('.contractor-step-item').forEach(item => {
    item.addEventListener('click', () => {
      const step = parseInt(item.dataset.stepper, 10);
      if (step) goToContractorStep(step);
    });
  });

  // 3. Navigation Buttons ([data-goto-step])
  document.querySelectorAll('[data-goto-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.dataset.gotoStep, 10);
      if (step) goToContractorStep(step);
    });
  });

  // 4. Step 1: Trades Pills Selection (Multi-select or Single select)
  const tradePills = document.querySelectorAll('#sim-trades-pills .contractor-pill');
  tradePills.forEach(pill => {
    pill.addEventListener('click', () => {
      pill.classList.toggle('active');
      const actives = Array.from(document.querySelectorAll('#sim-trades-pills .contractor-pill.active'));
      if (actives.length === 0) {
        // Keep at least clicked active
        pill.classList.add('active');
        liveState.project = pill.dataset.trade;
      } else {
        liveState.project = actives.map(p => p.dataset.trade).join(', ');
      }
      syncLiveCrmPanel('notion-row-project');
    });
  });

  // 5. Step 2: Commune input & Surface pills
  const inputCommune = document.getElementById('sim-input-commune');
  if (inputCommune) {
    inputCommune.addEventListener('input', (e) => {
      liveState.cp = e.target.value.trim();
      syncLiveCrmPanel('notion-row-cp');
    });
  }

  const surfacePills = document.querySelectorAll('#sim-surface-pills .contractor-pill');
  surfacePills.forEach(pill => {
    pill.addEventListener('click', () => {
      surfacePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      liveState.surface = pill.dataset.surface;
      syncLiveCrmPanel('notion-row-elig');
    });
  });

  // 6. Step 3: Timing pills & Contact Inputs
  const timingPills = document.querySelectorAll('#sim-timing-pills .contractor-pill');
  timingPills.forEach(pill => {
    pill.addEventListener('click', () => {
      timingPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      liveState.delay = pill.dataset.timing;
      syncLiveCrmPanel('notion-row-budget');
    });
  });

  const inputName = document.getElementById('sim-input-name');
  const inputPhone = document.getElementById('sim-input-phone');

  if (inputName) {
    inputName.addEventListener('input', (e) => {
      liveState.name = e.target.value.trim();
      syncLiveCrmPanel();
    });
  }

  if (inputPhone) {
    inputPhone.addEventListener('input', (e) => {
      liveState.phone = e.target.value.trim();
      syncLiveCrmPanel('notion-row-phone');
    });
  }

  // 7. Quick-fill button
  const quickFillBtn = document.getElementById('sim-quick-fill-btn');
  if (quickFillBtn) {
    quickFillBtn.addEventListener('click', () => {
      liveState.name = 'Laurent Vermeersch';
      liveState.phone = '+32 475 88 19 42';
      liveState.cp = '1410 Waterloo';
      liveState.surface = 'Toute la maison';
      liveState.delay = 'Dès que possible';

      if (inputName) inputName.value = liveState.name;
      if (inputPhone) inputPhone.value = liveState.phone;
      if (inputCommune) inputCommune.value = liveState.cp;

      // Set surface & timing active pills
      surfacePills.forEach(p => {
        p.classList.toggle('active', p.dataset.surface === 'Toute la maison');
      });
      timingPills.forEach(p => {
        p.classList.toggle('active', p.dataset.timing === 'Dès que possible');
      });

      syncLiveCrmPanel('notion-row-phone');
    });
  }

  // 8. Submit button -> Transitions to Step 4 (Confirmation)
  const submitBtn = document.getElementById('sim-submit-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      // Provide realistic defaults if user clicks directly
      if (!liveState.name) liveState.name = 'Laurent Vermeersch';
      if (!liveState.phone) liveState.phone = '+32 475 88 19 42';
      if (!liveState.cp) liveState.cp = '1410 Waterloo';
      if (!liveState.project) liveState.project = 'Rénovation intérieure et extérieure';
      if (!liveState.surface) liveState.surface = 'Toute la maison';
      if (!liveState.delay) liveState.delay = 'Dès que possible';

      liveState.stage = 'Chantier signé ✓';
      syncLiveCrmPanel('notion-row-status');
      goToContractorStep(4);

      // Trigger iPhone alert banner and Notion card flash
      const smsBanner = document.getElementById('live-sms-toast');
      const notionCard = document.getElementById('notion-crm-card');
      if (smsBanner) {
        smsBanner.classList.remove('sms-pending');
        smsBanner.classList.add('sms-dispatched');
        setTimeout(() => smsBanner.classList.remove('sms-dispatched'), 1800);
      }
      if (notionCard) {
        notionCard.style.boxShadow = '0 0 0 2px rgba(16, 185, 129, 0.7), 0 28px 65px -15px rgba(0, 0, 0, 0.85)';
        setTimeout(() => { notionCard.style.boxShadow = ''; }, 1800);
      }
    });
  }

  // 9. Restart Button (Step 4)
  const restartBtn = document.getElementById('wizard-restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      resetSimulation();
    });
  }

  // 10. Notion status switcher buttons
  const stageBtns = document.querySelectorAll('#crm-stage-buttons .notion-status-btn');
  stageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stageBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      liveState.stage = btn.dataset.stage;
      flashNotionRow('notion-row-status');
    });
  });

  // Initial render
  syncLiveCrmPanel();
}

function goToContractorStep(stepNumber) {
  liveState.currentStep = stepNumber;

  // Toggle step panes
  document.querySelectorAll('.contractor-step-pane').forEach(pane => {
    const paneStep = parseInt(pane.dataset.step, 10);
    pane.classList.toggle('active', paneStep === stepNumber);
  });

  // Update Stepper Row indicators (bars & active state)
  document.querySelectorAll('.contractor-step-item').forEach(item => {
    const s = parseInt(item.dataset.stepper, 10);
    item.classList.remove('active', 'completed');
    if (stepNumber === 4 || s < stepNumber) {
      item.classList.add('completed');
    } else if (s === stepNumber) {
      item.classList.add('active');
    }
  });

  // Update Step 4 Confirmation Recap with Structured Client Confirmation Message
  const finishRecap = document.getElementById('contractor-finish-recap');
  if (finishRecap && stepNumber === 4) {
    const clientName = liveState.name || 'Laurent Vermeersch';
    const clientPhone = liveState.phone || '+32 475 88 19 42';
    const clientCp = liveState.cp || '1410 Waterloo';
    const clientWorks = liveState.project || 'Rénovation intérieure et extérieure';
    const clientSurf = liveState.surface || 'Toute la maison';
    const clientTiming = liveState.delay || 'Dès que possible';

    finishRecap.innerHTML = `
      <div class="conf-card">
        <div class="conf-header">
          <div class="conf-badge-dossier">
            <span class="conf-dot"></span>
            <span>DOSSIER D'ESTIMATION N° WEB-2026-849</span>
          </div>
          <span class="conf-timestamp">Enregistré • 100% Exclusif</span>
        </div>

        <div class="conf-greeting">
          <strong>Bonjour ${clientName},</strong>
          <p class="conf-subtext">Votre demande de chiffrage a bien été transmise à notre bureau technique. Voici l'accusé de réception officiel de votre projet :</p>
        </div>

        <div class="conf-summary-grid">
          <div class="conf-summary-cell">
            <span class="conf-cell-label">PRESTATION(S)</span>
            <span class="conf-cell-val">${clientWorks}</span>
          </div>
          <div class="conf-summary-cell">
            <span class="conf-cell-label">LOCALISATION DU CHANTIER</span>
            <span class="conf-cell-val">${clientCp}</span>
          </div>
          <div class="conf-summary-cell">
            <span class="conf-cell-label">SURFACE CONCERNÉE</span>
            <span class="conf-cell-val">${clientSurf}</span>
          </div>
          <div class="conf-summary-cell">
            <span class="conf-cell-label">DÉBUT SOUHAITÉ</span>
            <span class="conf-cell-val">${clientTiming}</span>
          </div>
          <div class="conf-summary-cell conf-cell-full">
            <span class="conf-cell-label">NUMÉRO DE CONTACT POUR LE RAPPEL</span>
            <span class="conf-cell-val phone-highlight">📞 ${clientPhone}</span>
          </div>
        </div>

        <div class="conf-next-steps-card">
          <div class="conf-next-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>PROCHAINE ÉTAPE : RAPPEL GARANTI SOUS 24H OUVRÉES</span>
          </div>
          <p class="conf-next-desc">
            Notre métreur analyse vos éléments et vous appelle au <strong>${clientPhone}</strong> pour convenir de votre visite d'estimation offerte sur place.
          </p>
        </div>

        <div class="conf-guarantees-row">
          <div class="conf-guarantee-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Données confidentielles</span>
          </div>
          <div class="conf-guarantee-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Visite &amp; devis 100% offerts</span>
          </div>
          <div class="conf-guarantee-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/></svg>
            <span>Sans engagement</span>
          </div>
        </div>
      </div>
    `;
  }
}

function resetSimulation() {
  liveState.project = 'Rénovation intérieure et extérieure';
  liveState.cp = '';
  liveState.surface = 'Toute la maison';
  liveState.delay = 'Dès que possible';
  liveState.name = '';
  liveState.phone = '';
  liveState.stage = 'En attente...';

  const inCommune = document.getElementById('sim-input-commune');
  const inName = document.getElementById('sim-input-name');
  const inPhone = document.getElementById('sim-input-phone');
  if (inCommune) inCommune.value = '';
  if (inName) inName.value = '';
  if (inPhone) inPhone.value = '';

  // Reset pills
  const tradePills = document.querySelectorAll('#sim-trades-pills .contractor-pill');
  tradePills.forEach((p, i) => {
    p.classList.toggle('active', i === 0);
  });

  const surfacePills = document.querySelectorAll('#sim-surface-pills .contractor-pill');
  surfacePills.forEach(p => {
    p.classList.toggle('active', p.dataset.surface === 'Toute la maison');
  });

  const timingPills = document.querySelectorAll('#sim-timing-pills .contractor-pill');
  timingPills.forEach(p => {
    p.classList.toggle('active', p.dataset.timing === 'Dès que possible');
  });

  const stageBtns = document.querySelectorAll('#crm-stage-buttons .notion-status-btn');
  stageBtns.forEach((b, i) => b.classList.toggle('active', i === 0));

  const smsBanner = document.getElementById('live-sms-toast');
  if (smsBanner) {
    smsBanner.classList.add('sms-pending');
    smsBanner.classList.remove('sms-dispatched');
  }

  goToContractorStep(1);
  syncLiveCrmPanel();
}

function flashNotionRow(rowId) {
  if (!rowId) return;
  const row = document.getElementById(rowId);
  if (!row) return;
  row.classList.remove('row-flashed');
  void row.offsetWidth; // Force reflow
  row.classList.add('row-flashed');
}

function syncLiveCrmPanel(flashedRowId) {
  const elSmsTitle = document.getElementById('live-sms-title');
  const elSms = document.getElementById('live-sms-summary');
  const elApp = document.getElementById('live-sms-appname');
  const elTime = document.getElementById('live-sms-time');
  const elCrumbName = document.getElementById('notion-crumb-name');
  const elDossierAvatar = document.getElementById('dossier-avatar');
  const elDossierName = document.getElementById('dossier-name');
  const elEmailConf = document.getElementById('live-email-confirmation');
  const toast = document.getElementById('live-sms-toast');

  const valPhone = document.getElementById('crm-val-phone');
  const valCp = document.getElementById('crm-val-cp');
  const elProject = document.getElementById('crm-field-project');
  const elElig = document.getElementById('crm-field-elig');
  const elBudget = document.getElementById('crm-field-budget');

  // 1. Name & Avatar & Breadcrumb
  if (liveState.name) {
    const words = liveState.name.trim().split(/\s+/);
    const initials = words.length >= 2
      ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
      : (words[0].substring(0, 2)).toUpperCase();

    if (elCrumbName) elCrumbName.textContent = liveState.name;
    if (elDossierAvatar) elDossierAvatar.textContent = initials;
    if (elDossierName) {
      elDossierName.textContent = liveState.name;
      elDossierName.classList.remove('is-placeholder');
    }
  } else {
    if (elCrumbName) elCrumbName.textContent = 'Nouvelle fiche (En attente...)';
    if (elDossierAvatar) elDossierAvatar.textContent = '⏳';
    if (elDossierName) {
      elDossierName.textContent = 'Nom du client en attente...';
      elDossierName.classList.add('is-placeholder');
    }
  }

  // 2. Phone GSM
  if (valPhone) {
    valPhone.innerHTML = liveState.phone
      ? `<span class="notion-link" id="crm-field-phone">${liveState.phone}</span>`
      : `<span class="notion-empty-placeholder" id="crm-field-phone">— En attente (Étape 3)</span>`;
  }

  // 3. Commune
  if (valCp) {
    valCp.innerHTML = liveState.cp
      ? `<span class="notion-tag gray" id="crm-field-cp">${liveState.cp}</span>`
      : `<span class="notion-empty-placeholder" id="crm-field-cp">— En attente (Étape 2)</span>`;
  }

  // 4. Project Selection (Step 1)
  if (elProject) {
    if (liveState.project) {
      elProject.className = 'notion-tag purple';
      elProject.textContent = liveState.project;
    } else {
      elProject.className = 'notion-empty-placeholder';
      elProject.textContent = "— Choisissez à l'étape 1";
    }
  }

  // 5. Surface (Step 2)
  if (elElig) {
    if (liveState.surface) {
      elElig.className = 'notion-tag blue';
      elElig.textContent = liveState.surface;
    } else {
      elElig.className = 'notion-empty-placeholder';
      elElig.textContent = "— Choisissez à l'étape 2";
    }
  }

  // 6. Délai souhaité (Step 3)
  if (elBudget) {
    if (liveState.delay) {
      elBudget.className = 'notion-tag green';
      elBudget.textContent = liveState.delay;
    } else {
      elBudget.className = 'notion-empty-placeholder';
      elBudget.textContent = "— Choisissez à l'étape 3";
    }
  }

  // 7. Status Switcher Buttons Synchronization
  if (liveState.stage) {
    const stageBtns = document.querySelectorAll('#crm-stage-buttons .notion-status-btn');
    stageBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.stage === liveState.stage);
    });
  }

  // 8. SMS Notification Banner (Phone Alert)
  if (toast) {
    if (liveState.name) {
      toast.classList.remove('sms-pending');
      if (elApp) elApp.textContent = 'MESSAGES • NOTIFICATION LEAD IMMÉDIATE';
      if (elTime) elTime.textContent = 'maintenant';
      if (elSmsTitle) elSmsTitle.textContent = `🚨 Nouveau lead qualifié — ${liveState.name}${liveState.cp ? ` (${liveState.cp})` : ''}`;
      if (elSms) {
        elSms.innerHTML = `
          <div style="font-weight: 600; margin-bottom: 2px;">🔨 ${liveState.project || 'Rénovation'} (${liveState.surface || 'Toute la maison'})</div>
          <div style="opacity: 0.9; margin-bottom: 2px;">⏱ Début souhaité : ${liveState.delay || 'Dès que possible'}</div>
          <div style="color: #6ee7b7; font-weight: 700;">📞 Rappeler au : ${liveState.phone || 'Non renseigné'}</div>
          <div style="font-size: 11px; opacity: 0.75; margin-top: 3px;">✓ Dossier #WEB-2026-849 créé dans le CRM • Rappel sous 24h</div>
        `;
      }
    } else {
      toast.classList.add('sms-pending');
      if (elApp) elApp.textContent = 'MESSAGES • EN ATTENTE DU SIMULATEUR';
      if (elTime) elTime.textContent = 'en attente';
      if (elSmsTitle) elSmsTitle.textContent = '⏳ En attente des réponses du prospect...';
      if (elSms) {
        elSms.textContent = liveState.project
          ? `Projet « ${liveState.project} » • En attente des coordonnées à l'étape 3...`
          : "Répondez aux questions à gauche : l'alerte sur votre téléphone et la fiche CRM se synchronisent automatiquement.";
      }
    }
  }

  // 9. Notion Bottom Callout
  if (elEmailConf) {
    if (liveState.name) {
      elEmailConf.innerHTML = `✓ <strong>Dossier #WEB-2026-849 enregistré</strong>.<br>Confirmation officielle transmise à <strong>${liveState.name}</strong> (${liveState.phone || 'en attente'}). Alerte reçue sur votre téléphone. Rappel sous 24h planifié.`;
    } else if (liveState.phone || liveState.cp) {
      elEmailConf.innerHTML = `Saisie en cours : Localisation (${liveState.cp || 'en attente'}) • Contact (${liveState.phone || 'en attente'}).`;
    } else {
      elEmailConf.textContent = 'En attente : remplissez le simulateur à gauche pour voir la fiche CRM et l\'alerte téléphone se synchroniser en direct.';
    }
  }

  if (flashedRowId) {
    flashNotionRow(flashedRowId);
  }

  if (toast && liveState.name) {
    toast.style.transform = 'scale(1.018)';
    setTimeout(() => {
      toast.style.transform = 'scale(1)';
    }, 200);
  }
}

/* ==========================================================================
   2. SITE-WIDE EXPERT MICRO-INTERACTIONS, SPOTLIGHT & SCROLL REVEAL
   ========================================================================== */
function initMicroInteractions() {
  // 1. Staggered Scroll Reveal via IntersectionObserver
  const revealSelectors = [
    '.hero-index-cell',
    '.section-head-split',
    '.matrix-cell',
    '.journey-node',
    '.offer-investment-card',
    '.deliverable-module',
    '.calculator-wrapper',
    '.comparison-card',
    '.roadmap-card',
    '.faq-item',
    '.final-cta-card'
  ];

  const elementsToReveal = document.querySelectorAll(revealSelectors.join(', '));
  elementsToReveal.forEach((el, idx) => {
    el.classList.add('reveal-on-scroll');
    // Stagger sibling items within grids
    const siblingIndex = Array.from(el.parentElement ? el.parentElement.children : []).indexOf(el);
    if (siblingIndex > 0 && siblingIndex < 6) {
      el.style.transitionDelay = `${siblingIndex * 75}ms`;
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elementsToReveal.forEach(el => observer.observe(el));
  } else {
    elementsToReveal.forEach(el => el.classList.add('is-visible'));
  }

  // 2. Dynamic Cursor-Tracking Spotlight on Cards
  const spotlightCards = document.querySelectorAll(
    '.matrix-cell, .journey-node, .deliverable-module, .comparison-card, .roadmap-card'
  );

  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 3. Subtle 3D Parallax on Hero Studio Image
  const heroSection = document.querySelector('.hero-section');
  const heroImg = document.querySelector('.hero-studio-full-img');
  if (heroSection && heroImg) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      heroImg.style.animation = 'none';
      heroImg.style.transform = `translate3d(${relX * -14}px, ${relY * -10}px, 0) rotateY(${relX * 4}deg) rotateX(${relY * -3}deg)`;
    });
    heroSection.addEventListener('mouseleave', () => {
      heroImg.style.transform = '';
      heroImg.style.animation = '';
    });
  }
}

/* ==========================================================================
   3. INTERACTIVE ROI CALCULATOR
   ========================================================================== */
function initRoiCalculator() {
  const ticketInput = document.getElementById('calc-ticket');
  const marginInput = document.getElementById('calc-margin');
  const mediaInput = document.getElementById('calc-media');

  if (!ticketInput) return;

  [ticketInput, marginInput, mediaInput].forEach(input => {
    input.addEventListener('input', calculateRoi);
  });

  calculateRoi();
}

function calculateRoi() {
  const ticket = parseFloat(document.getElementById('calc-ticket').value) || 12500;
  const margin = parseFloat(document.getElementById('calc-margin').value) || 40;
  const media = parseFloat(document.getElementById('calc-media').value) || 600;

  document.getElementById('display-ticket').textContent = ticket.toLocaleString('fr-BE') + ' €';
  document.getElementById('display-margin').textContent = margin + ' %';
  document.getElementById('display-media').textContent = media.toLocaleString('fr-BE') + ' €';

  const webelyMonthly = 490;
  const totalMonthlySpend = webelyMonthly + media;
  const grossProfitPerJob = ticket * (margin / 100);

  const totalQuarterInvest = 1990 + (3 * totalMonthlySpend);
  const jobsToBreakevenQuarter = (totalQuarterInvest / grossProfitPerJob).toFixed(1);
  const netProfitWith2Jobs = (2 * grossProfitPerJob) - totalQuarterInvest;

  document.getElementById('calc-result-jobs').textContent = `${jobsToBreakevenQuarter} chantier`;
  document.getElementById('calc-row-monthly-spend').textContent = totalMonthlySpend.toLocaleString('fr-BE') + ' € HT / mois';
  document.getElementById('calc-row-margin-unit').textContent = '+ ' + Math.round(grossProfitPerJob).toLocaleString('fr-BE') + ' €';
  document.getElementById('calc-row-quarter-invest').textContent = totalQuarterInvest.toLocaleString('fr-BE') + ' € HT';

  const profitBadge = document.getElementById('calc-net-profit');
  if (profitBadge) {
    if (netProfitWith2Jobs > 0) {
      profitBadge.textContent = `+ ${Math.round(netProfitWith2Jobs).toLocaleString('fr-BE')} € de marge nette estimée dès 2 chantiers signés sur le trimestre !`;
      profitBadge.style.color = '#10b981';
    } else {
      profitBadge.textContent = `Rentabilité atteinte dès le 2e chantier signé sur le trimestre.`;
      profitBadge.style.color = '#a78bfa';
    }
  }
}

/* ==========================================================================
   4. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      const isOpen = parent.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isOpen) {
        parent.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. 10-MINUTE DISCOVERY CALL MODAL & STICKY CTA
   ========================================================================== */
function initAuditModal() {
  const modal = document.getElementById('audit-modal');
  const openBtns = document.querySelectorAll('.trigger-audit-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  const modalForm = document.getElementById('modal-audit-form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalForm.innerHTML = `
        <div style="text-align: center; padding: 24px 8px;">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(16, 185, 129, 0.14); border: 1px solid rgba(16, 185, 129, 0.35); color: #10b981; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h4 style="font-family: var(--font-display); font-size: 19px; color: #ffffff; margin-bottom: 8px;">Demande d'appel de 10 min enregistrée</h4>
          <p style="font-size: 13.5px; color: #9d9db5; margin-bottom: 18px;">
            Notre équipe vous recontacte très rapidement pour faire le point sur votre secteur d'activité.
          </p>
          <button type="button" class="btn btn-secondary" onclick="document.getElementById('audit-modal').classList.remove('open'); document.body.style.overflow='';" style="font-size: 13px;">
            Fermer
          </button>
        </div>
      `;
    });
  }
}

function initFloatingCta() {
  const bar = document.getElementById('floating-cta-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 380) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  }, { passive: true });
}

function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (!menuBtn || !drawer) return;

  const closeDrawer = () => {
    menuBtn.classList.remove('is-open');
    drawer.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  };

  menuBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('is-open');
    menuBtn.classList.toggle('is-open', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      closeDrawer();
    }
  }, { passive: true });
}

