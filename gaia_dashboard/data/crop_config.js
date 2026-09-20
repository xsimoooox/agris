const CROP_CONFIG = {
    argan: {
        id: "argan",
        name: "Argan",
        display: "Arganier",
        terroir: "Fruits de l'Arganier",
        production: "Fruits de l'Arganier",
        botanical: "Argania spinosa",
        icon: "🌳",
        score: 67,
        kpi_targets: {
            health: "68/100",
            ndvi: "0.38",
            ndvi_optimal: "0.75",
            stress: "245",
            regen: "82%",
            soil_mo: "0.82%",
            density: "1.52 g/cm³",
            porosity: "38%",
            ph: "6.8"
        },
        reference: {
            ref: "AS/ARG-2024/789654-V.A",
            client: "Coopérative Souss-Massa",
            ia_model: "AGRISCIENCE-DeepArgan v2.3",
            module: "HARMONIA-Argan v4.2"
        },
        recommendations: [
            {
                title: "Optimisation de l'irrigation d'appoint",
                desc: "Ajuster l'irrigation localisée aux périodes de nouaison pour favoriser le remplissage des noix d'arganier."
            },
            {
                title: "Amendement calcique et organique",
                desc: "Rehausser le taux de matière organique dans l'horizon 0-30cm pour renforcer la résistance aux stress thermiques."
            },
            {
                title: "Taille de régénération ciblée",
                desc: "Aérer le houppier des arganiers adultes pour maximiser l'interception lumineuse et limiter l'échauffement foliaire."
            }
        ]
    },
    majhoul: {
        id: "majhoul",
        name: "Dattes Majhoul",
        display: "Datte Majhoul",
        terroir: "Palmeraie Majhoul d'Erfoud",
        production: "Production de dattes Majhoul",
        botanical: "Phoenix dactylifera cv. 'Majhoul'",
        icon: "🌴",
        score: 71,
        kpi_targets: {
            health: "75/100",
            ndvi: "0.48",
            ndvi_optimal: "0.80",
            stress: "190",
            regen: "86%",
            soil_mo: "1.10%",
            density: "1.45 g/cm³",
            porosity: "42%",
            ph: "7.4"
        },
        reference: {
            ref: "AS/MAJ-2024/991234-V.M",
            client: "Domaine Palmier Tafilalet",
            ia_model: "AGRISCIENCE-DeepPalm v3.2",
            module: "HARMONIA-Dates v4.2"
        },
        recommendations: [
            {
                title: "Pilotage hydrique haute précision",
                desc: "Adapter les apports en eau au stade de grossissement du régime pour optimiser le calibre et la teneur en sucre."
            },
            {
                title: "Protection et ensachage des régimes",
                desc: "Protéger les fruits contre le soleil direct et les vents sableux du désert pour préserver la cuticule."
            },
            {
                title: "Nutrition potassique renforcée",
                desc: "Apport régulier d'engrais riche en potassium pour favoriser la texture moelleuse et la conservation des dattes."
            }
        ]
    },
    olivier: {
        id: "olivier",
        name: "Olivier",
        display: "Olivier",
        terroir: "Oliveraie du Saïss & Haouz",
        production: "Huile d'olive et olives de table",
        botanical: "Olea europaea L.",
        icon: "🫒",
        score: 74,
        kpi_targets: {
            health: "78/100",
            ndvi: "0.52",
            ndvi_optimal: "0.78",
            stress: "165",
            regen: "88%",
            soil_mo: "1.45%",
            density: "1.38 g/cm³",
            porosity: "44%",
            ph: "7.2"
        },
        reference: {
            ref: "AS/OLI-2024/654120-V.O",
            client: "Domaine Oléicole Saïss",
            ia_model: "AGRISCIENCE-DeepOlive v2.4",
            module: "HARMONIA-Olea v4.2"
        },
        recommendations: [
            {
                title: "Irrigation déficitaire régulée (RDI)",
                desc: "Moduler les apports d'eau après durcissement du noyau pour stimuler la concentration en polyphénols sans pénaliser le rendement."
            },
            {
                title: "Surveillance de la mouche de l'olive (Bactrocera)",
                desc: "Activer le piégeage préventif et les traitements biocontrôle avant l'oviposition sur les drupes."
            },
            {
                title: "Équilibre azote-bore foliaire",
                desc: "Pulvérisation de bore avant floraison pour sécuriser la fécondation et limiter la coulure florale."
            }
        ]
    },
    agrumes: {
        id: "agrumes",
        name: "Agrumes",
        display: "Agrumes",
        terroir: "Vergers d'agrumes du Gharb & Berkane",
        production: "Cémentines, oranges et mandarines",
        botanical: "Citrus sinensis & Citrus reticulata",
        icon: "🍊",
        score: 72,
        kpi_targets: {
            health: "76/100",
            ndvi: "0.58",
            ndvi_optimal: "0.82",
            stress: "175",
            regen: "84%",
            soil_mo: "1.60%",
            density: "1.34 g/cm³",
            porosity: "46%",
            ph: "6.7"
        },
        reference: {
            ref: "AS/AGR-2024/431980-V.C",
            client: "Coopérative Agrumicole Berkane",
            ia_model: "AGRISCIENCE-DeepCitrus v2.1",
            module: "HARMONIA-Citrus v4.2"
        },
        recommendations: [
            {
                title: "Gestion du stress salin et drainage",
                desc: "Contrôler la conductivité électrique du sol et planifier des lessivages fractionnés pour protéger le système racinaire."
            },
            {
                title: "Optimisation de la fertirrigation NPK",
                desc: "Adapter le ratio azote/potasse pour garantir un équilibre parfait entre coloration de l'écorce et acidité du jus."
            },
            {
                title: "Contrôle préventif des acariens et cochenilles",
                desc: "Maintenir l'humidité sous frondaison et introduire des auxiliaires de lutte biologique indigènes."
            }
        ]
    },
    vigne: {
        id: "vigne",
        name: "Vigne",
        display: "Vigne",
        terroir: "Vignobles des Coteaux de l'Atlas",
        production: "Raisin de table et viticulture",
        botanical: "Vitis vinifera L.",
        icon: "🍇",
        score: 76,
        kpi_targets: {
            health: "80/100",
            ndvi: "0.62",
            ndvi_optimal: "0.85",
            stress: "155",
            regen: "89%",
            soil_mo: "1.35%",
            density: "1.36 g/cm³",
            porosity: "45%",
            ph: "7.0"
        },
        reference: {
            ref: "AS/VIG-2024/778120-V.V",
            client: "Domaine Viticole de Meknès",
            ia_model: "AGRISCIENCE-DeepVitis v3.0",
            module: "HARMONIA-Vitis v4.2"
        },
        recommendations: [
            {
                title: "Effeuillage et maîtrise de la canopée",
                desc: "Dégager la zone des grappes pour favoriser une maturité homogène et limiter les risques d'oïdium et botrytis."
            },
            {
                title: "Gestion de l'équilibre hydrique à la véraison",
                desc: "Instaurer un léger stress hydrique contrôlé à la véraison pour stimuler la concentration aromatique et l'anthocyanine."
            },
            {
                title: "Enherbement maîtrisé des inter-rangs",
                desc: "Semer un couvert de légumineuses pour fixer l'azote biologique et protéger la structure des sols en pente."
            }
        ]
    },
    cereales: {
        id: "cereales",
        name: "Céréales",
        display: "Céréales",
        terroir: "Grandes cultures du Chaouia & Doukkala",
        production: "Blé dur, blé tendre et orge",
        botanical: "Triticum durum & Hordeum vulgare",
        icon: "🌾",
        score: 69,
        kpi_targets: {
            health: "70/100",
            ndvi: "0.45",
            ndvi_optimal: "0.78",
            stress: "210",
            regen: "80%",
            soil_mo: "1.20%",
            density: "1.46 g/cm³",
            porosity: "40%",
            ph: "7.3"
        },
        reference: {
            ref: "AS/CER-2024/312890-V.C",
            client: "Groupement Céréalier Chaouia",
            ia_model: "AGRISCIENCE-DeepCereal v1.9",
            module: "HARMONIA-Grains v4.2"
        },
        recommendations: [
            {
                title: "Fractionnement des apports azotés",
                desc: "Synchroniser le 2ème et 3ème apport d'azote avec les stades tallage et montaison pour maximiser le taux protéique."
            },
            {
                title: "Surveillance satellite de l'indice foliaire",
                desc: "Détecter précocement les zones de jaunisse nanisante et intervenir de manière ciblée par pulvérisation localisée."
            },
            {
                title: "Semis direct sous couvert végétal",
                desc: "Limiter l'érosion éolienne et préserver l'humidité résiduelle du profil de sol durant les périodes sèches."
            }
        ]
    },
    maraichage: {
        id: "maraichage",
        name: "Maraîchage",
        display: "Maraîchage",
        terroir: "Cultures maraîchères de Chtouka & Loukkos",
        production: "Tomates, poivrons, courgettes et oignons",
        botanical: "Solanum lycopersicum & Allium cepa",
        icon: "🍅",
        score: 78,
        kpi_targets: {
            health: "82/100",
            ndvi: "0.68",
            ndvi_optimal: "0.88",
            stress: "140",
            regen: "91%",
            soil_mo: "2.10%",
            density: "1.28 g/cm³",
            porosity: "48%",
            ph: "6.5"
        },
        reference: {
            ref: "AS/MAR-2024/889210-V.M",
            client: "Agropôle Chtouka Aït Baha",
            ia_model: "AGRISCIENCE-DeepMarket v2.5",
            module: "HARMONIA-Horti v4.2"
        },
        recommendations: [
            {
                title: "Pilotage automatisé du goutte-à-goutte",
                desc: "Irriguer par micro-doses fractionnées en corrélation directe avec le rayonnement global et l'humidité sous serre."
            },
            {
                title: "Bio-solarisation et santé microbiologique",
                desc: "Désinfecter naturellement les buttes par solarisation estivale et réensemencer en champignons mycorhiziens bénéfiques."
            },
            {
                title: "Équilibrage calcium-potassium",
                desc: "Prévenir la nécrose apicale ('cul noir') par des pulvérisations foliaires régulières de calcium assimilable."
            }
        ]
    },
    fruits_rouges: {
        id: "fruits_rouges",
        name: "Fruits rouges",
        display: "Fruits rouges",
        terroir: "Petits fruits du Gharb & Larache",
        production: "Fraises, framboises et myrtilles",
        botanical: "Fragaria ananassa & Rubus idaeus",
        icon: "🍓",
        score: 80,
        kpi_targets: {
            health: "84/100",
            ndvi: "0.72",
            ndvi_optimal: "0.90",
            stress: "130",
            regen: "92%",
            soil_mo: "2.30%",
            density: "1.25 g/cm³",
            porosity: "50%",
            ph: "6.2"
        },
        reference: {
            ref: "AS/BER-2024/902140-V.B",
            client: "Domaine Fruits Rouges Larache",
            ia_model: "AGRISCIENCE-DeepBerry v3.1",
            module: "HARMONIA-Berries v4.2"
        },
        recommendations: [
            {
                title: "Maintien d'une zone racinaire aérée et acide",
                desc: "Ajuster l'acidification de la solution nutritive à pH 5.8–6.2 pour une assimilation optimale du fer et du manganèse."
            },
            {
                title: "Gestion de l'ombrage et hygrométrie",
                desc: "Déployer les toiles d'ombrage thermique dès que la température dépasse 30°C pour préserver la fermeté des baies."
            },
            {
                title: "Surveillance active du thrips et botrytis",
                desc: "Lâchers d'acariens prédateurs (Amblyseius) et aération continue des tunnels plastiques."
            }
        ]
    },
    amandier: {
        id: "amandier",
        name: "Amandier",
        display: "Amandier",
        terroir: "Vergers de l'Oriental & Anti-Atlas",
        production: "Amandes douces et décortiquées",
        botanical: "Prunus dulcis (Mill.)",
        icon: "🌰",
        score: 70,
        kpi_targets: {
            health: "73/100",
            ndvi: "0.46",
            ndvi_optimal: "0.76",
            stress: "195",
            regen: "83%",
            soil_mo: "1.15%",
            density: "1.44 g/cm³",
            porosity: "41%",
            ph: "7.6"
        },
        reference: {
            ref: "AS/AMA-2024/541290-V.A",
            client: "Association Amandiers Tafraout",
            ia_model: "AGRISCIENCE-DeepAlmond v2.0",
            module: "HARMONIA-Nuts v4.2"
        },
        recommendations: [
            {
                title: "Gestion des gelées printanières tardives",
                desc: "Activer les brassages d'air et l'aspersion antigel lors des chutes de température au stade floraison précoce."
            },
            {
                title: "Nutrition zinc et bore post-récolte",
                desc: "Effectuer une pulvérisation foliaire nutritive après récolte pour consolider les réserves des bourgeons floraux d'hiver."
            },
            {
                title: "Taille d'éclaircie bisannuelle",
                desc: "Favoriser la pénétration de la lumière au centre de l'arbre pour stimuler l'induction florale sur les bouquets de mai."
            }
        ]
    },
    grenadier: {
        id: "grenadier",
        name: "Grenadier",
        display: "Grenadier",
        terroir: "Vergers de Beni Mellal & Tadla",
        production: "Grenades fraîches et jus naturel",
        botanical: "Punica granatum L.",
        icon: "🌳",
        score: 73,
        kpi_targets: {
            health: "76/100",
            ndvi: "0.50",
            ndvi_optimal: "0.78",
            stress: "170",
            regen: "86%",
            soil_mo: "1.30%",
            density: "1.39 g/cm³",
            porosity: "43%",
            ph: "7.4"
        },
        reference: {
            ref: "AS/GRE-2024/619840-V.G",
            client: "Domaine Sefri Beni Mellal",
            ia_model: "AGRISCIENCE-DeepPome v2.2",
            module: "HARMONIA-Punica v4.2"
        },
        recommendations: [
            {
                title: "Régularité stricte de l'irrigation pour éviter l'éclatement",
                desc: "Maintenir une humidité du sol constante pendant le grossissement des arilles afin d'empêcher les variations de turgescence."
            },
            {
                title: "Application d'argile kaolin protectrice",
                desc: "Pulvériser un écran minéral à base de kaolin pour prémunir les fruits contre les brûlures solaires ('coup de soleil')."
            },
            {
                title: "Apport en potassium et magnésium",
                desc: "Renforcer la coloration rubis des arilles et l'épaisseur de l'écorce pour garantir une excellente conservation post-récolte."
            }
        ]
    },
    figuier: {
        id: "figuier",
        name: "Figuier",
        display: "Figuier",
        terroir: "Terroir de Taounate & Al Hoceima",
        production: "Figues fraîches et figues séchées",
        botanical: "Ficus carica L.",
        icon: "🌿",
        score: 75,
        kpi_targets: {
            health: "77/100",
            ndvi: "0.54",
            ndvi_optimal: "0.80",
            stress: "160",
            regen: "87%",
            soil_mo: "1.40%",
            density: "1.37 g/cm³",
            porosity: "45%",
            ph: "7.1"
        },
        reference: {
            ref: "AS/FIG-2024/721340-V.F",
            client: "Coopérative Nabout Taounate",
            ia_model: "AGRISCIENCE-DeepFig v2.0",
            module: "HARMONIA-Ficus v4.2"
        },
        recommendations: [
            {
                title: "Caprification et pollinisation assistée",
                desc: "Organiser l'apport de caprifigues saines au moment réceptif des sycones pour assurer un taux de nouaison maximal."
            },
            {
                title: "Protection contre la mouche de la figue (Silba adipata)",
                desc: "Mettre en place des pièges à phéromones dès l'amorce du grossissement pour éliminer les piqûres larvaires."
            },
            {
                title: "Taille de nettoyage et paillage au pied",
                desc: "Éliminer les rejets faibles et pailler le pied des troncs pour maintenir une fraîcheur racinaire durable."
            }
        ]
    },
    pecher: {
        id: "pecher",
        name: "Pêcher",
        display: "Pêcher",
        terroir: "Vergers de Sefrou & Moyen Atlas",
        production: "Pêches, nectarines et pavies",
        botanical: "Prunus persica (L.) Batsch",
        icon: "🍑",
        score: 74,
        kpi_targets: {
            health: "78/100",
            ndvi: "0.56",
            ndvi_optimal: "0.82",
            stress: "165",
            regen: "87%",
            soil_mo: "1.50%",
            density: "1.35 g/cm³",
            porosity: "46%",
            ph: "6.8"
        },
        reference: {
            ref: "AS/PEC-2024/819340-V.P",
            client: "Vergers Fruitier Sefrou",
            ia_model: "AGRISCIENCE-DeepPeach v2.2",
            module: "HARMONIA-Prunus v4.2"
        },
        recommendations: [
            {
                title: "Éclaircissage manuel précoce des fruits",
                desc: "Conserver un fruit tous les 15 cm sur rameau pour délester l'arbre et garantir des calibres supérieurs (A/AA)."
            },
            {
                title: "Contrôle de la cloque du pêcher (Taphrina deformans)",
                desc: "Traitement cuprique préventif strict à la chute des feuilles et au débourrement avant l'ouverture des boutons."
            },
            {
                title: "Irrigation d'appoint régulée en phase de grossissement",
                desc: "Soutenir la phase d'expansion cellulaire sans excès pour éviter les éclatements du noyau."
            }
        ]
    },
    pommier: {
        id: "pommier",
        name: "Pommier",
        display: "Pommier",
        terroir: "Vergers de haute altitude de Midelt & Asni",
        production: "Pommes Golden, Gala et Starking",
        botanical: "Malus domestica Borkh.",
        icon: "🍏",
        score: 77,
        kpi_targets: {
            health: "80/100",
            ndvi: "0.60",
            ndvi_optimal: "0.84",
            stress: "150",
            regen: "89%",
            soil_mo: "1.65%",
            density: "1.32 g/cm³",
            porosity: "47%",
            ph: "6.9"
        },
        reference: {
            ref: "AS/POM-2024/920410-V.M",
            client: "Domaine Arboricole Midelt",
            ia_model: "AGRISCIENCE-DeepApple v2.8",
            module: "HARMONIA-Malus v4.2"
        },
        recommendations: [
            {
                title: "Filets paragrêle et protection dynamique",
                desc: "Déployer les structures de filets pour préserver l'intégrité de l'épiderme et tamiser l'insolation excessive estivale."
            },
            {
                title: "Apports répétés de chlorure de calcium foliaire",
                desc: "Pulvériser 5 à 7 fois dès la nouaison pour éliminer les risques de bitter-pit ('taches amères') en chambre froide."
            },
            {
                title: "Surveillance continue de la tavelure et du carpocapse",
                desc: "Associer stations météo connectées et modèles prédictifs d'humectation foliaire pour un traitement ciblé à l'heure près."
            }
        ]
    },
    legumineuses: {
        id: "legumineuses",
        name: "Légumineuses",
        display: "Légumineuses",
        terroir: "Grandes plaines fertiles du Gharb & Saïss",
        production: "Fèves, lentilles, pois chiches et féveroles",
        botanical: "Cicer arietinum & Vicia faba",
        icon: "🌱",
        score: 72,
        kpi_targets: {
            health: "75/100",
            ndvi: "0.52",
            ndvi_optimal: "0.80",
            stress: "185",
            regen: "94%",
            soil_mo: "1.35%",
            density: "1.41 g/cm³",
            porosity: "44%",
            ph: "7.2"
        },
        reference: {
            ref: "AS/LEG-2024/491020-V.L",
            client: "Union des Producteurs de Légumineuses",
            ia_model: "AGRISCIENCE-DeepPulse v2.0",
            module: "HARMONIA-Rhizo v4.2"
        },
        recommendations: [
            {
                title: "Inoculation rhizobienne des semences",
                desc: "Inoculer avec Rhizobium leguminosarum pour démultiplier la fixation symbiotique de l'azote atmosphérique."
            },
            {
                title: "Protection préventive contre l'anthracnose et l'orobanche",
                desc: "Respecter des rotations culturales longues de 4 ans minimum et utiliser des variétés certifiées tolérantes."
            },
            {
                title: "Désherbage mécanique précoce à la herse étrille",
                desc: "Détruire les adventices dès la levée sans endommager le pivot racinaire des plantules."
            }
        ]
    },
    aromatiques: {
        id: "aromatiques",
        name: "Plantes aromatiques",
        display: "Plantes aromatiques",
        terroir: "Cultures PAM de l'Atlas & Ouarzazate",
        production: "Romarin, thym, verveine, lavande et menthe",
        botanical: "Rosmarinus officinalis & Thymus vulgaris",
        icon: "🌿",
        score: 79,
        kpi_targets: {
            health: "82/100",
            ndvi: "0.55",
            ndvi_optimal: "0.82",
            stress: "145",
            regen: "93%",
            soil_mo: "1.25%",
            density: "1.39 g/cm³",
            porosity: "45%",
            ph: "7.5"
        },
        reference: {
            ref: "AS/PAM-2024/639180-V.A",
            client: "Coopérative PAM Aromas Atlas",
            ia_model: "AGRISCIENCE-DeepAroma v2.4",
            module: "HARMONIA-Aroma v4.2"
        },
        recommendations: [
            {
                title: "Récolte au pic d'huiles essentielles",
                desc: "Planifier la coupe lors des journées ensoleillées après dissipation de la rosée pour une teneur maximale en principes actifs."
            },
            {
                title: "Irrigation solaire déficitaire modérée",
                desc: "Un stress hydrique léger et contrôlé en pré-récolte stimule la biosynthèse des composés terpéniques et aromatiques."
            },
            {
                title: "Séchage thermique doux et aéré sous abri",
                desc: "Maintenir une température inférieure à 38°C pour préserver la pigmentation naturelle et la volatilité aromatique."
            }
        ]
    }
};

/**
 * Normalizes input key to existing CROP_CONFIG id or creates dynamic config for custom crops.
 */
function normalizeCropKey(raw) {
    if (!raw) return 'argan';
    const clean = raw.toString().trim().toLowerCase();
    
    // Exact match
    if (CROP_CONFIG[clean]) return clean;

    // Common synonyms / variations
    if (clean.includes('argan')) return 'argan';
    if (clean.includes('medjool') || clean.includes('majhoul') || clean.includes('datte') || clean.includes('palmier')) return 'majhoul';
    if (clean.includes('oliv') || clean.includes('zeyt') || clean.includes('zait')) return 'olivier';
    if (clean.includes('agrum') || clean.includes('citrus') || clean.includes('orange') || clean.includes('clementin')) return 'agrumes';
    if (clean.includes('vign') || clean.includes('raisin') || clean.includes('vin')) return 'vigne';
    if (clean.includes('cereal') || clean.includes('ble') || clean.includes('orge')) return 'cereales';
    if (clean.includes('maraich') || clean.includes('tomat') || clean.includes('legume')) return 'maraichage';
    if (clean.includes('rouge') || clean.includes('frais') || clean.includes('frambois') || clean.includes('myrtill')) return 'fruits_rouges';
    if (clean.includes('amand') || clean.includes('amande') || clean.includes('louz')) return 'amandier';
    if (clean.includes('grenad') || clean.includes('roman')) return 'grenadier';
    if (clean.includes('figu') || clean.includes('figue') || clean.includes('karmous')) return 'figuier';
    if (clean.includes('pech') || clean.includes('nectarin') || clean.includes('khokh')) return 'pecher';
    if (clean.includes('pomm') || clean.includes('pomme') || clean.includes('teffah')) return 'pommier';
    if (clean.includes('legumin') || clean.includes('feve') || clean.includes('lentill') || clean.includes('pois')) return 'legumineuses';
    if (clean.includes('aromat') || clean.includes('romarin') || clean.includes('thym') || clean.includes('menth') || clean.includes('pam')) return 'aromatiques';

    return clean;
}

/**
 * Returns full configuration object for any crop (predefined or custom).
 */
function getCropConfig(cropIdOrName) {
    const norm = normalizeCropKey(cropIdOrName);
    if (CROP_CONFIG[norm]) {
        return CROP_CONFIG[norm];
    }

    // Dynamic builder for "Autre culture" (e.g., Avocat, Caroubier, Banane, etc.)
    const rawName = (cropIdOrName || 'Culture agricole').trim();
    const displayName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    const cleanId = rawName.toLowerCase().replace(/[^a-z0-9]/g, '_');

    return {
        id: cleanId,
        name: displayName,
        display: displayName,
        terroir: `Terroir agricole ciblée (${displayName})`,
        production: `Production de ${displayName}`,
        botanical: `${displayName} (Culture spécifique)`,
        icon: "🌱",
        score: 72,
        kpi_targets: {
            health: "76/100",
            ndvi: "0.52",
            ndvi_optimal: "0.80",
            stress: "170",
            regen: "86%",
            soil_mo: "1.40%",
            density: "1.38 g/cm³",
            porosity: "44%",
            ph: "6.9"
        },
        reference: {
            ref: `AS/CUST-${cleanId.toUpperCase().slice(0, 4)}/884120-V.P`,
            client: "Exploitation Agricole Partenaire",
            ia_model: `AGRISCIENCE-CustomCrop v2.4`,
            module: "HARMONIA-Adaptive v4.2"
        },
        recommendations: [
            {
                title: `Optimisation hydrique pour ${displayName}`,
                desc: `Ajuster la programmation d'irrigation selon les besoins végétatifs spécifiques de votre culture (${displayName}) et la dynamique d'évapotranspiration mesurée par satellite.`
            },
            {
                title: `Équilibre du sol et apports organiques`,
                desc: `Favoriser l'aération de l'horizon racinaire et maintenir un apport équilibré en matière organique pour soutenir le rendement de ${displayName}.`
            },
            {
                title: `Suivi sanitaire préventif haute résolution`,
                desc: `Surveiller les indices spectraux multi-temporels pour anticiper tout foyer d'anomalie ou de carence minérale sur votre parcelle.`
            }
        ]
    };
}

function getSelectedCrop() {
    const urlParams = new URLSearchParams(window.location.search);
    let crop = urlParams.get('crop');
    
    if (crop) {
        crop = crop.trim();
        localStorage.setItem('selectedCrop', crop);
        return crop;
    }
    
    return localStorage.getItem('selectedCrop') || 'argan';
}

function setSelectedCrop(cropId) {
    if (!cropId) return;
    localStorage.setItem('selectedCrop', cropId.toString().trim());
}
