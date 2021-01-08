const products = [
    {
        "_id": "5fd0957aed26a20a7819d22c",
        "name": "Dragon BCD",
        "category": "Scuba Diving",
        "price": 599,
        "image": "http://localhost:1000/public/dragonBCD-mares.jpg",
        "company": "Mares"
    },
    {
        "_id": "5fd4a0d091b89f4344f29936",
        "name": "Twin Fin Board",
        "category": "Surfing",
        "price": 1100,
        "image": "http://localhost:1000/public/dhd-twin-fin-surf-board.jpg",
        "company": "DHD"
    },
    {
        "_id": "5fd4a0e391b89f4344f29937",
        "name": "Eron Board",
        "category": "Surfing",
        "price": 1250,
        "image": "http://localhost:1000/public/eron--board-inter-surf.jpg",
        "company": "Inter Surf"
    },
    {
        "_id": "5fd4a0fa91b89f4344f29938",
        "name": "Zoom Snorkel",
        "category": "Freediving",
        "price": 19,
        "image": "http://localhost:1000/public/omer-zoom-snorkel.jpg",
        "company": "OMER"
    },
    {
        "_id": "5fe89dd30f48464608e0d40f",
        "name": "Razor Apnea Fins",
        "company": "Mares",
        "category": "Freediving",
        "price": 170,
        "image": "http://localhost:1000/public/mares-razor-apnea-freedive-fin.jpg"
    },
    {
        "_id": "5fe89e83e1815b09d4244255",
        "name": "Viper Mask",
        "company": "Mares",
        "category": "Freediving",
        "price": 80,
        "image": "http://localhost:1000/public/viper-mask-mares.jpg"
    },
    {
        "_id": "5fef430f08a8455f8cd8e5b6",
        "name": "Xenos Suit",
        "company": "Fourth Element",
        "category": "Scuba Diving",
        "price": 420,
        "image": "http://localhost:1000/public/xenos-suit-fourthElement.jpg"
    },
    {
        "_id": "5fef43cb08a8455f8cd8e5b7",
        "name": "Metal Speargun",
        "company": "Salvimar",
        "category": "Spearfishing",
        "price": 340,
        "image": "http://localhost:1000/public/salvimar-metal.jpg"
    },
    {
        "_id": "5fef470008a8455f8cd8e5b8",
        "name": "SUP Foil Board",
        "company": "NSP",
        "category": "Kitesurfing",
        "price": 540,
        "image": "http://localhost:1000/public/SUPfoil-board-nsp.jpg"
    },
    {
        "_id": "5fef487508a8455f8cd8e5b9",
        "name": "RPM Kite",
        "company": "Slingshot",
        "category": "Kitesurfing",
        "price": 640,
        "image": "http://localhost:1000/public/RPM-kite-slingshot.jpg"
    },
    {
        "_id": "5ff64d619a6de4353c78ba75",
        "name": "Kai Mask",
        "company": "Adventure at Nature",
        "category": "Scuba Diving",
        "price": 65,
        "image": "http://localhost:1000/public/adventure-at-nature-kai-frameless-dive-mask.jpg"
    },
    {
        "_id": "5ff64dbc9a6de4353c78ba76",
        "name": "New Matrix",
        "company": "Mares",
        "category": "Scuba Diving",
        "price": 570,
        "image": "http://localhost:1000/public/mares-diving-computer-matrix.jpg"
    },
    {
        "_id": "5ff64e859a6de4353c78ba77",
        "name": "Avanti FF Fins",
        "company": "Mares",
        "category": "Scuba Diving",
        "price": 69,
        "image": "http://localhost:1000/public/mares-avanti-superchannel-ff-fins.jpg"
    },
    {
        "_id": "5ff64f82d6901d2260540679",
        "name": "Avanti OH Fins",
        "company": "Mares",
        "category": "Scuba Diving",
        "price": 115,
        "image": "http://localhost:1000/public/avanti-superchannel-oh-mares.png"
    },
    {
        "_id": "5ff64fb1d6901d226054067a",
        "name": "Avanti Plana Quattro Fins",
        "company": "Mares",
        "category": "Scuba Diving",
        "price": 160,
        "image": "http://localhost:1000/public/mares-plana-avanti-quattro-fins.jpg"
    },
    {
        "_id": "5ff65200d6901d226054067b",
        "name": "Helios Suit",
        "company": "Fourth Element",
        "category": "Scuba Diving",
        "price": 350,
        "image": "http://localhost:1000/public/fourth-element-helios-5.jpg"
    },
    {
        "_id": "5ff652b7d6901d226054067c",
        "name": "Streamer Manta Suit",
        "company": "Mares",
        "category": "Scuba Diving",
        "price": 80,
        "image": "http://localhost:1000/public/mares-steamer-manta.jpg"
    },
    {
        "_id": "5ff6537fd6901d226054067d",
        "name": "Hooded Vest Men",
        "company": "Fourth Element",
        "category": "Freediving",
        "price": 120,
        "image": "http://localhost:1000/public/fourth-element-men-thermocline-hooded-vest.jpg"
    },
    {
        "_id": "5ff6538cd6901d226054067e",
        "name": "Hooded Vest Women",
        "company": "Fourth Element",
        "category": "Freediving",
        "price": 120,
        "image": "http://localhost:1000/public/fourth-element-womens-thermocline-hooded-vest.jpg"
    },
    {
        "_id": "5ff65481d6901d226054067f",
        "name": "Yam Mask",
        "company": "Adventure at Nature",
        "category": "Scuba Diving",
        "price": 55,
        "image": "http://localhost:1000/public/adventure-at-nature-yam-dive-mask.jpg"
    },
    {
        "_id": "5ff654c5d6901d2260540680",
        "name": "Aria QR Full Face Mask",
        "company": "Ocean Reef",
        "category": "Scuba Diving",
        "price": 110,
        "image": "http://localhost:1000/public/ariaQR-ocean-reef-full-face-mask.jpg"
    },
    {
        "_id": "5ff65557d6901d2260540681",
        "name": "Dual Regulator ADJ",
        "company": "Mares",
        "category": "Scuba Diving",
        "price": 425,
        "image": "http://localhost:1000/public/mares-dual-adj-52x-regulator.jpg"
    },
    {
        "_id": "5ff656bdd6901d2260540682",
        "name": "Oasi Buoy",
        "company": "Best Hunter",
        "category": "Spearfishing",
        "price": 140,
        "image": "http://localhost:1000/public/oasi-buoy-hunter.jpg"
    },
    {
        "_id": "5ff656f0d6901d2260540683",
        "name": "Weights Belt",
        "company": "Salvimar",
        "category": "Freediving",
        "price": 18,
        "image": "http://localhost:1000/public/weight-belt-salvimar.jpg"
    },
    {
        "_id": "5ff65738d6901d2260540684",
        "name": "Tech Sphere Buoy",
        "company": "Mares",
        "category": "Freediving",
        "price": 89,
        "image": "http://localhost:1000/public/mares-tech-sphere.jpg"
    },
    {
        "_id": "5ff657a5d6901d2260540685",
        "name": "Ergo Splash Snorkel",
        "company": "Mares",
        "category": "Freediving",
        "price": 40,
        "image": "http://localhost:1000/public/mares-ergo-splash-snorkel.jpg"
    },
    {
        "_id": "5ff6581bd6901d2260540686",
        "name": "Concorde Fins",
        "company": "Mares",
        "category": "Freediving",
        "price": 115,
        "image": "http://localhost:1000/public/mares-concorde-fins.jpg"
    },
    {
        "_id": "5ff65870d6901d2260540687",
        "name": "Mantra Carbon Fins",
        "company": "Cetma",
        "category": "Freediving",
        "price": 500,
        "image": "http://localhost:1000/public/carbon-fins-mantra-cetma.jpg"
    },
    {
        "_id": "5ff658c0d6901d2260540688",
        "name": "Edge Carbon Fins",
        "company": "Cetma",
        "category": "Freediving",
        "price": 500,
        "image": "http://localhost:1000/public/carbon-fins-edge-cetma.jpg"
    },
    {
        "_id": "5ff65942d6901d2260540689",
        "name": "Trinity Mask",
        "company": "Salvimar",
        "category": "Freediving",
        "price": 80,
        "image": "http://localhost:1000/public/salvimar-trinity-mask.jpg"
    },
    {
        "_id": "5ff65b38d6901d226054068a",
        "name": "Water Vest Black",
        "company": "Sooruz",
        "category": "Kitesurfing",
        "price": 135,
        "image": "http://localhost:1000/public/water-vest-open-sooruz.jpg"
    },
    {
        "_id": "5ff65b7fd6901d226054068b",
        "name": "Water Vest Red",
        "company": "Sooruz",
        "category": "Kitesurfing",
        "price": 135,
        "image": "http://localhost:1000/public/water-vest-open-red-sooruz.jpg"
    },
    {
        "_id": "5ff65c0fd6901d226054068c",
        "name": "Top Thermo",
        "company": "Sooruz",
        "category": "Surfing",
        "price": 60,
        "image": "http://localhost:1000/public/sooruz-top-ls-thermo.jpg"
    },
    {
        "_id": "5ff65c66d6901d226054068d",
        "name": "Fighter Top",
        "company": "Sooruz",
        "category": "Surfing",
        "price": 47,
        "image": "http://localhost:1000/public/e17-sooruz-fighter-top.jpg"
    },
    {
        "_id": "5ff65cc1d6901d226054068e",
        "name": "Trilastic Short",
        "company": "Mares",
        "category": "Surfing",
        "price": 50,
        "image": "http://localhost:1000/public/mares-short_sleeve_trilastic.jpg"
    },
    {
        "_id": "5ff661aed6901d226054068f",
        "name": "Fighting Fish Board",
        "company": "NSP",
        "category": "Surfing",
        "price": 1080,
        "image": "http://localhost:1000/public/nsp-surf-board-fighting-fish.jpg"
    },
    {
        "_id": "5ff66207d6901d2260540690",
        "name": "FTS 2",
        "company": "FTS",
        "category": "Surfing",
        "price": 899,
        "image": "http://localhost:1000/public/fts-2-surf-board.jpg"
    },
    {
        "_id": "5ff6626cd6901d2260540691",
        "name": "Timmy Patterson Board",
        "company": "Twinner",
        "category": "Surfing",
        "price": 670,
        "image": "http://localhost:1000/public/timmy-patterson-twinner.jpg"
    },
    {
        "_id": "5ff662c2d6901d2260540692",
        "name": "Love Child Board",
        "company": "Modern",
        "category": "Surfing",
        "price": 345,
        "image": "http://localhost:1000/public/modern-love-child-surf-board.jpg"
    },
    {
        "_id": "5ff6633bd6901d2260540693",
        "name": "Mick Fanning Fins",
        "company": "FCS",
        "category": "Surfing",
        "price": 70,
        "image": "http://localhost:1000/public/fcs-ii-mick-fanning-tri-fins.jpg"
    },
    {
        "_id": "5ff6635cd6901d2260540694",
        "name": "Super Tubes 8 Leash",
        "company": "Shapers",
        "category": "Surfing",
        "price": 20,
        "image": "http://localhost:1000/public/lish-super-tubes-8.jpg"
    },
    {
        "_id": "5ff663d1d6901d2260540695",
        "name": "Reefer Boots Split Toe",
        "company": "Rip Curl",
        "category": "Surfing",
        "price": 70,
        "image": "http://localhost:1000/public/rip-curl-reefer-boots-15mm-split-toe.jpg"
    },
    {
        "_id": "5ff66545d6901d2260540696",
        "name": "Jet NP Airgun",
        "company": "Mares",
        "category": "Spearfishing",
        "price": 220,
        "image": "http://localhost:1000/public/mares.jpg"
    },
    {
        "_id": "5ff6656ad6901d2260540697",
        "name": "Laser Open Speargun",
        "company": "Pathos",
        "category": "Spearfishing",
        "price": 405,
        "image": "http://localhost:1000/public/laser_open_carbon-pathos.jpg"
    },
    {
        "_id": "5ff6658fd6901d2260540698",
        "name": "Hero Speargun",
        "company": "Salvimar",
        "category": "Spearfishing",
        "price": 459,
        "image": "http://localhost:1000/public/salvimar-hero-speargun.jpg"
    },
    {
        "_id": "5ff665f0d6901d2260540699",
        "name": "Rubber Extreme",
        "company": "Sigalsub",
        "category": "Spearfishing",
        "price": 4,
        "image": "http://localhost:1000/public/sigalsub-spear-fishing-rubber-extreme.jpg"
    },
    {
        "_id": "5ff6668ed6901d226054069a",
        "name": "Amara Illusion Socks",
        "company": "Mares",
        "category": "Spearfishing",
        "price": 39,
        "image": "http://localhost:1000/public/mares-illusion-amara-sock.jpg"
    },
    {
        "_id": "5ff666a9d6901d226054069b",
        "name": "Amara Illusion Gloves",
        "company": "Mares",
        "category": "Spearfishing",
        "price": 39,
        "image": "http://localhost:1000/public/illusion-gloves-mares.jpg"
    },
    {
        "_id": "5ff6670bd6901d226054069c",
        "name": "Speed 4 Prongs",
        "company": "Salvimar",
        "category": "Spearfishing",
        "price": 15,
        "image": "http://localhost:1000/public/salvi-mar-speed-4-prongs.jpg"
    },
    {
        "_id": "5ff66789d6901d226054069d",
        "name": "Camo Suit",
        "company": "Polosub",
        "category": "Spearfishing",
        "price": 395,
        "image": "http://localhost:1000/public/camo-suit-polosub.jpg"
    },
    {
        "_id": "5ff6680ad6901d226054069e",
        "name": "Abyss Suit",
        "company": "Salvimar",
        "category": "Spearfishing",
        "price": 140,
        "image": "http://localhost:1000/public/salvimar-abyss-rash-guard-suit.jpg"
    },
    {
        "_id": "5ff66884d6901d226054069f",
        "name": "Attack Gun Bag",
        "company": "Mares",
        "category": "Spearfishing",
        "price": 80,
        "image": "http://localhost:1000/public/attack_gun_bag.jpg"
    },
    {
        "_id": "5ff71e19b1f3e239189184c1",
        "name": "Fisherman Overall with Boots",
        "company": "Lion",
        "category": "Fishing",
        "price": 75,
        "image": "http://localhost:1000/public/lion-fishermen-overall-with-boots.jpg"
    },
    {
        "_id": "5ff71ebcb1f3e239189184c2",
        "name": "Skimmer Spinning Rod",
        "company": "Maya",
        "category": "Fishing",
        "price": 69,
        "image": "http://localhost:1000/public/maya-skimmer.jpg"
    },
    {
        "_id": "5ff71fdeb1f3e239189184c3",
        "name": "Black Minnow Hooks",
        "company": "Fiiish",
        "category": "Fishing",
        "price": 1.5,
        "image": "http://localhost:1000/public/bk-hook-crog.jpg"
    },
    {
        "_id": "5ff72042b1f3e239189184c4",
        "name": "Fishing Knife",
        "company": "Fiiish",
        "category": "Fishing",
        "price": 17,
        "image": "http://localhost:1000/public/fishing_knife.jpg"
    },
    {
        "_id": "5ff72086b1f3e239189184c5",
        "name": "Rod Tube",
        "company": "Relix",
        "category": "Fishing",
        "price": 25,
        "image": "http://localhost:1000/public/relix-rod-tubes.jpg"
    },
    {
        "_id": "5ff720c5b1f3e239189184c6",
        "name": "Trigger Rod",
        "company": "Maya",
        "category": "Fishing",
        "price": 15,
        "image": "http://localhost:1000/public/trigger-160.jpg"
    },
    {
        "_id": "5ff72119b1f3e239189184c7",
        "name": "Crystal 3D Troling Hook",
        "company": "Yo-Zuri",
        "category": "Fishing",
        "price": 27,
        "image": "http://localhost:1000/public/c44.jpg"
    },
    {
        "_id": "5ff72176b1f3e239189184c8",
        "name": "Long Surf Rod & Cobra Roller",
        "company": "Maya",
        "category": "Fishing",
        "price": 80,
        "image": "http://localhost:1000/public/surf_long_cobra.jpg"
    },
    {
        "_id": "5ff721c5b1f3e239189184c9",
        "name": "Poseidon Gold Roller",
        "company": "Omoto",
        "category": "Fishing",
        "price": 440,
        "image": "http://localhost:1000/public/posiedon-omoto-roller.jpg"
    },
    {
        "_id": "5ff72200b1f3e239189184ca",
        "name": "Assist Hook Rope",
        "company": "Maya",
        "category": "Fishing",
        "price": 18,
        "image": "http://localhost:1000/public/maya_assist_hook.jpg"
    },
    {
        "_id": "5ff722abb1f3e239189184cb",
        "name": "NG Jack Jigging Rod",
        "company": "MajorCraft",
        "category": "Fishing",
        "price": 560,
        "image": "http://localhost:1000/public/np-jack-jigging-spinning.jpg"
    },
    {
        "_id": "5ff7235ab1f3e239189184cc",
        "name": "Skyroad Rod",
        "company": "MajorCraft",
        "category": "Fishing",
        "price": 240,
        "image": "http://localhost:1000/public/majorcraft_skyroad_seabass.jpg"
    },
    {
        "_id": "5ff72418b1f3e239189184cd",
        "name": "Spirit Freeride Foil",
        "company": "Duotone",
        "category": "Kitesurfing",
        "price": 240,
        "image": "http://localhost:1000/public/Duotone_Kiteboarding_Spirit_Freeride.png"
    },
    {
        "_id": "5ff724aab1f3e239189184ce",
        "name": "Vegas Kite",
        "company": "Duotone",
        "category": "Kitesurfing",
        "price": 550,
        "image": "http://localhost:1000/public/VEGAS20___CC7_Hadlow____1_.png"
    },
    {
        "_id": "5ff724f5b1f3e239189184cf",
        "name": "Jamie 2021 Board",
        "company": "Duotone",
        "category": "Kitesurfing",
        "price": 380,
        "image": "http://localhost:1000/public/44210_3420_1.jpg"
    },
    {
        "_id": "5ff72571b1f3e239189184d0",
        "name": "Apex Curv 13",
        "company": "ION",
        "category": "Kitesurfing",
        "price": 150,
        "image": "http://localhost:1000/public/ion-curv.jpg"
    },
    {
        "_id": "5ff725aeb1f3e239189184d1",
        "name": "Riot CS 20 Curv",
        "company": "ION",
        "category": "Kitesurfing",
        "price": 210,
        "image": "http://localhost:1000/public/48202_4706_2.jpg"
    },
    {
        "_id": "5ff725e5b1f3e239189184d2",
        "name": "WAM 2020",
        "company": "Duotone",
        "category": "Kitesurfing",
        "price": 520,
        "image": "http://localhost:1000/public/44200_3405_Wam.png"
    },
    {
        "_id": "5ff72626b1f3e239189184d3",
        "name": "Kite Crush Bag Composed",
        "company": "ION",
        "category": "Kitesurfing",
        "price": 250,
        "image": "http://localhost:1000/public/48700_7019_Kite_Crush_Bag_composed_________.jpg"
    },
    {
        "_id": "5ff7264cb1f3e239189184d4",
        "name": "Leash Twintip",
        "company": "ION",
        "category": "Kitesurfing",
        "price": 20,
        "image": "http://localhost:1000/public/48400_7077_Twintip_Leash_white.jpg"
    }
]

module.exports = products;