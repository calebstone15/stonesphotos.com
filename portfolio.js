(function () {
  'use strict';

  /* ========================================================================
     Verified Engineering Portfolio Dataset (SpaceX-Targeted Framing)
     All asset paths verified against portfolio-assets/ and eaa/ manifests.
     ======================================================================== */

  var THEATER_YOUTUBE_VIDEOS = [
    {
      id: 'yt-juno-hf1',
      tag: 'JUNO HF1 • 2024-12-28',
      duration: 'YouTube',
      title: 'First Successful Juno Hot Fire — Insiders Look',
      meta: '@erplofficial • 300 lbf LOX/Ethanol Liquid Rocket Engine',
      youtubeId: 'dVNkJK9rgc0',
      externalUrl: 'https://www.youtube.com/watch?v=dVNkJK9rgc0',
      externalLabel: 'Watch on YouTube'
    },
    {
      id: 'yt-juno-hf2',
      tag: 'JUNO HF2 • 2024-12-28',
      duration: 'YouTube',
      title: 'Second Juno Hot Fire — Engineering Cut',
      meta: '@erplofficial • Steady-State Burn & Mach Diamonds',
      youtubeId: 'H60jxBK3g6w',
      externalUrl: 'https://www.youtube.com/watch?v=H60jxBK3g6w',
      externalLabel: 'Watch on YouTube'
    },
    {
      id: 'yt-juno-attempt',
      tag: 'JUNO • 2025-09-04',
      duration: 'YouTube',
      title: 'Juno 3/7/2025 Hotfire Attempt — Engineering Cut',
      meta: '@erplofficial • Feed System & Ignition Diagnostics',
      youtubeId: '3vbFeGwQyR0',
      externalUrl: 'https://www.youtube.com/watch?v=3vbFeGwQyR0',
      externalLabel: 'Watch on YouTube'
    },
    {
      id: 'yt-juno-waterflow',
      tag: 'JUNO WATERFLOW • 2024-10-02',
      duration: 'YouTube',
      title: 'Juno Water Flow Fall 2024 — Engineering Cut',
      meta: '@erplofficial • Feed System Flow Calibration & Checkout',
      youtubeId: '4IUNaIuttcE',
      externalUrl: 'https://www.youtube.com/watch?v=4IUNaIuttcE',
      externalLabel: 'Watch on YouTube'
    },
    {
      id: 'yt-odyssey-throttle',
      tag: 'ODYSSEY • 2023-12-13',
      duration: 'YouTube',
      title: 'Project Odyssey Throttling Control Hot-Fire',
      meta: '@erplofficial • Closed-Loop Valve Throttling & Broadcast HUD',
      youtubeId: 'tXBNbLU2dXE',
      externalUrl: 'https://www.youtube.com/watch?v=tXBNbLU2dXE',
      externalLabel: 'Watch on YouTube'
    },
    {
      id: 'yt-odyssey-tf1',
      tag: 'ODYSSEY • 2023-10-24',
      duration: 'YouTube',
      title: 'Odyssey Testfire 1 — High-Speed Plume & Telemetry',
      meta: '@erplofficial • Horizontal Test Stand Commissioning',
      youtubeId: 'yO_PSmEMgq0',
      externalUrl: 'https://www.youtube.com/watch?v=yO_PSmEMgq0',
      externalLabel: 'Watch on YouTube'
    },
    {
      id: 'yt-odyssey-1000fps',
      tag: 'ODYSSEY • 2023-10-31',
      duration: 'YouTube',
      title: 'Odyssey Hot Fire 1000 fps Slow-Motion Diagnostics',
      meta: '@erplofficial • Ignition Transient & Shockwave Capture',
      youtubeId: 's5NX9r3Re84',
      externalUrl: 'https://www.youtube.com/watch?v=s5NX9r3Re84',
      externalLabel: 'Watch on YouTube'
    },
    {
      id: 'yt-triton-comp',
      tag: 'TRITON • 2026-04-25',
      duration: 'YouTube',
      title: 'Triton Composite Hotfire — Cecil Spaceport',
      meta: '@erplofficial • Composite Chamber Static Firing',
      youtubeId: 'SF35dSju3NY',
      externalUrl: 'https://www.youtube.com/watch?v=SF35dSju3NY',
      externalLabel: 'Watch on YouTube'
    },
    {
      id: 'yt-triton-hf',
      tag: 'TRITON • 2025-04-11',
      duration: 'YouTube',
      title: 'Triton Hot Fire — Horizontal Pad Campaign',
      meta: '@erplofficial • Multi-Camera Visual Operations',
      youtubeId: 'cwGCarHdi9k',
      externalUrl: 'https://www.youtube.com/watch?v=cwGCarHdi9k',
      externalLabel: 'Watch on YouTube'
    },
    {
      id: 'yt-draco-feed',
      tag: 'DRACO • 2024-11-23',
      duration: 'YouTube',
      title: 'Draco Feed System Testing',
      meta: '@erplofficial • Cryogenic & Pressurization Fluid Checkout',
      youtubeId: 'B_AvpgUM6_I',
      externalUrl: 'https://www.youtube.com/watch?v=B_AvpgUM6_I',
      externalLabel: 'Watch on YouTube'
    },
    {
      id: 'yt-moe-hf1',
      tag: 'MOE HF1 • 2026-03-11',
      duration: 'YouTube',
      title: 'MOE Hotfire 1 — Engineering Cut',
      meta: '@erplofficial • Static Stand Boil-Off & Steady Burn',
      youtubeId: 'hyKBe2QK4qo',
      externalUrl: 'https://www.youtube.com/watch?v=hyKBe2QK4qo',
      externalLabel: 'Watch on YouTube'
    },
    {
      id: 'yt-mini-moe',
      tag: 'MINI MOE • 2026-03-16',
      duration: 'YouTube',
      title: 'Mini MOE Flight 1 — Engineering Cut',
      meta: '@erplofficial • Flight Qualification & Onboard Optical Telemetry',
      youtubeId: 'CIiB3DMBc18',
      externalUrl: 'https://www.youtube.com/watch?v=CIiB3DMBc18',
      externalLabel: 'Watch on YouTube'
    }
  ];

  var SCHEMATICS = {
    gis: {
      code: 'GIS • HYDRAULIC NETWORK',
      svg: '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Municipal GIS water pressure zone topology diagram">' +
        '<rect x="14" y="14" width="332" height="162" rx="10" fill="none" stroke="rgba(56,189,248,0.28)" stroke-width="1"/>' +
        '<path d="M40 132 L110 92 L182 104 L245 58 L315 74" fill="none" stroke="#38bdf8" stroke-width="2.5"/>' +
        '<path d="M110 92 L134 148 L228 142 L245 58" fill="none" stroke="#d4af37" stroke-width="2" stroke-dasharray="5 4"/>' +
        '<circle cx="40" cy="132" r="6" fill="#22c55e"/><circle cx="110" cy="92" r="7" fill="#d4af37"/>' +
        '<circle cx="182" cy="104" r="6" fill="#38bdf8"/><circle cx="245" cy="58" r="7" fill="#d4af37"/>' +
        '<circle cx="315" cy="74" r="6" fill="#22c55e"/><circle cx="134" cy="148" r="5" fill="#38bdf8"/>' +
        '<circle cx="228" cy="142" r="5" fill="#38bdf8"/>' +
        '<text x="26" y="36" fill="#d4af37" font-family="monospace" font-size="11" font-weight="700">ARCGIS PRO • TOPOLOGY QA: 10,000+ ASSETS</text>' +
        '<text x="26" y="54" fill="rgba(255,255,255,0.65)" font-family="monospace" font-size="10">VALVES • HYDRANTS • MAINS • PRESSURE ZONES</text>' +
        '</svg>'
    },
    grw: {
      code: 'PROCESS • FLUID BALANCE',
      svg: '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Treatment plant hydraulic process piping schematic">' +
        '<rect x="28" y="64" width="66" height="44" rx="6" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="1.8"/>' +
        '<rect x="145" y="64" width="70" height="44" rx="6" fill="rgba(212,175,55,0.14)" stroke="#d4af37" stroke-width="1.8"/>' +
        '<rect x="266" y="64" width="66" height="44" rx="6" fill="rgba(34,197,94,0.12)" stroke="#22c55e" stroke-width="1.8"/>' +
        '<line x1="94" y1="86" x2="145" y2="86" stroke="#f5f5f5" stroke-width="2"/>' +
        '<line x1="215" y1="86" x2="266" y2="86" stroke="#f5f5f5" stroke-width="2"/>' +
        '<polygon points="140,81 146,86 140,91" fill="#f5f5f5"/><polygon points="261,81 267,86 261,91" fill="#f5f5f5"/>' +
        '<text x="61" y="90" text-anchor="middle" fill="#bae6fd" font-family="monospace" font-size="10">INFLUENT</text>' +
        '<text x="180" y="90" text-anchor="middle" fill="#fde68a" font-family="monospace" font-size="10">HYDRAULIC</text>' +
        '<text x="299" y="90" text-anchor="middle" fill="#bbf7d0" font-family="monospace" font-size="10">DISCHARGE</text>' +
        '<text x="28" y="36" fill="#d4af37" font-family="monospace" font-size="11" font-weight="700">AUTOCAD / CIVIL 3D • MASS BALANCE</text>' +
        '<text x="28" y="142" fill="rgba(255,255,255,0.65)" font-family="monospace" font-size="10">CARTER CAVES WWTP • BRANDENBURG WTP • DECA</text>' +
        '</svg>'
    }
  };

  /* ========================================================================
     4 Portfolio Sections (Work Experience, ERPL, Research, Classwork)
     ======================================================================== */

  var PROJECTS = [
    /* ---------------- SECTION 1: WORK EXPERIENCE ---------------- */
    {
      id: 'work-smart',
      section: 'work',
      categories: ['systems', 'avionics'],
      badge: 'DOD / U.S. NAVY',
      timeframe: '2026 - PRESENT',
      org: 'U.S. Navy / Dept. of War (DOW) — NSWC Dahlgren Division, VA',
      title: 'DOW SMART Scholar — Systems Engineering',
      summary: 'Selected for the competitive DoD SMART Scholarship-for-Service with a civilian systems engineering appointment supporting naval weapons and autonomous mission verification.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/smart-scholar-logo.webp',
        alt: 'Department of War SMART Scholarship official emblem',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/smart-scholar-logo.webp', caption: 'DOW SMART Scholarship-for-Service Fellow Emblem', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/smart-scholar-banner.webp', caption: 'SMART Scholar — National Defense Education Program Banner', tone: 'light' }
      ],
      metrics: [
        { label: 'Sponsor', value: 'NSWC Dahlgren' },
        { label: 'Fellowship', value: '2026 - 2028' },
        { label: 'Clearance', value: 'TS/SCI Eligible' },
        { label: 'Domain', value: 'MBSE & Autonomy' }
      ],
      overview: 'Awarded the competitive DoD / Dept. of War SMART (Science, Mathematics, and Research for Transformation) Scholarship-for-Service supporting M.S. Systems Engineering study at Embry-Riddle Aeronautical University (2026–2028) paired with a civilian Systems Engineer appointment at Naval Surface Warfare Center (NSWC) Dahlgren Division, VA. Focuses on Model-Based Systems Engineering (MBSE), multi-domain autonomous sensor network integration, and safety-critical naval weapons verification.',
      specs: [
        { label: 'Sponsoring Facility', value: 'U.S. Navy / DOW — NSWC Dahlgren Division, VA' },
        { label: 'Fellowship Window', value: '2026–2028 (M.S. Systems Engineering, ERAU)' },
        { label: 'Security Eligibility', value: 'U.S. Citizen • TS/SCI Eligible Track' },
        { label: 'Core Methodology', value: 'MBSE / SysML Architecture, Requirements Traceability, Mission V&V' },
        { label: 'Technical Focus', value: 'Fault-Tolerant Autonomous Sensor Networks & Multi-Domain V&V' },
        { label: 'Post-Grad Role', value: 'Permanent Civilian Systems Engineer Appointment' }
      ],
      bullets: [
        'Selected for the competitive <strong>DoD SMART Scholarship-for-Service</strong> sponsored by <strong>NSWC Dahlgren Division</strong>.',
        'Integrates graduate <strong>Model-Based Systems Engineering (MBSE)</strong> and SysML architectural modeling into mission assurance and naval weapons-systems V&amp;V workflows.',
        'Bridges hardware-in-the-loop autonomy research (UAS fault injection, sensor redundancy, quantitative fault trees) with naval systems safety requirements.',
        'Graduate Statement of Objective targets <strong>MBSE-driven architecture optimization</strong> for complex fault-tolerant and in-situ aerospace/defense systems.'
      ],
      verification: [
        'Selected under the competitive national DoD SMART Fellowship (2026 cohort) with sponsoring placement at NSWC Dahlgren Division.',
        'Supported by P.E. supervisor endorsement (Joseph V. Pavoni, P.E.) and graduate safety-critical systems research at ERAU RAISE Lab.'
      ],
      tags: ['MBSE', 'Systems V&V', 'Autonomous Sensors', 'Fault Tolerance', 'U.S. Navy', 'NSWC Dahlgren'],
      links: []
    },
    {
      id: 'work-raise',
      section: 'work',
      categories: ['autonomy', 'systems'],
      badge: 'GRADUATE RESEARCH',
      timeframe: '2025 - PRESENT',
      org: 'RAISE Lab (Dept. of EECS), Embry-Riddle Aeronautical University',
      title: 'Graduate Research Assistant — Safety-Critical AI & UAS',
      summary: 'Lead systems integration and empirical safety researcher under Dr. Vidhyashree Nagaraju across real-time rocket auto-abort vision, adversarial UAS fuzzing, and software fault trees.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/raise-lab-isss2026-team.webp',
        alt: 'Caleb Stone and Dr. Vidhyashree Nagaraju RAISE Lab research team at ISSS 2026',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/raise-lab-isss2026-team.webp', caption: 'RAISE Lab researchers presenting at ISSS 2026', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/caleb-isss2026-portrait.webp', caption: 'Caleb Stone — ISSS 2026 Speaker Portrait', tone: 'dark' },
        { type: 'video', src: 'portfolio-assets/video/raise-lab-timelapse.mp4', caption: 'RAISE Lab Crazyflie 2.1 Brushless assembly and HITL bench build timelapse' }
      ],
      metrics: [
        { label: 'Publications', value: '5+ Venues' },
        { label: 'SITL Flights', value: '24,000+ Runs' },
        { label: 'CNN Forward', value: '28.44 ms' },
        { label: 'HITL Accuracy', value: '0.0316 m WP1' },
        { label: 'Control Stack', value: '3,841L Python' },
        { label: 'Advisor', value: 'Dr. Nagaraju' }
      ],
      overview: 'Graduate Research Assistant (2025–Present) in ERAU\'s Reliability, AI, and Systems Engineering (RAISE) Lab under Dr. Vidhyashree Nagaraju. Directs hardware-in-the-loop (HITL) integration and empirical safety evaluation spanning edge rocket anomaly vision, adversarial UAS fuzzing, quantitative software fault trees, and LLM-assisted reliability modeling.',
      specs: [
        { label: 'Lab & Advisor', value: 'RAISE Lab (Dept. of EECS, ERAU) — Dr. Vidhyashree Nagaraju' },
        { label: 'Publication Venues', value: 'AIAA SciTech 2027, ISSS 2026 (Huntsville, AL), INCOSE 2026' },
        { label: 'Simulation Throughput', value: '24,000 ArduCopter 4.7.1 SITL + 1,350 PX4 v1.18.0-rc1 SIH Flights' },
        { label: 'HITL Control Stack', value: '3,841-line CrazyflieController (cflib, IppeCf Lighthouse v2)' },
        { label: 'Edge CV Pipeline', value: 'YOLOv8n (100 epochs, 1080p/640) + Dual-Cam RPi 5 (IMX500 + NoIR)' },
        { label: 'Repositories', value: 'github.com/calebstone15/SystemsResearch & Pytorch' }
      ],
      bullets: [
        'Primary and co-author across <strong>5+ conference manuscripts and working drafts</strong> integrating formal safety analysis with empirical AI/ML testing.',
        'Co-engineered the <strong>ATLAS</strong> C++ BM25 source-RAG + MAVLink fault-injection harness across <strong>8 x 3,000 ArduCopter SITL flights</strong> (1,694 reported / 1,463 confirmed silent failures across 7 weakness families).',
        'Built the <strong>Bitcraze Crazyflie 2.1 Brushless HITL</strong> testbed (3,841-line Python <code>controller.py</code>, dual HTC Vive Lighthouse v2 calibration via <code>IppeCf</code>, safety-governed tilt/thrust PID limits).',
        'Led <strong>CVHAD</strong> edge auto-abort vision research (YOLOv8n on ~1,100 CVAT-labeled hot-fire frames, 28.44 ms CNN forward pass) and prototyped a $153.40 Raspberry Pi 5 dual-camera optical rig with an 850 nm IR longpass filter.'
      ],
      verification: [
        'Executed 24,000 ArduCopter 4.7.1 SITL flights (5x real time) plus a 78-flight 4.7.2 regression check and 1,350 PX4 v1.18.0-rc1 SIH cross-check flights.',
        'Physical Crazyflie 2.1 HITL trial (result_027.json) validated indoor stabilization at <strong>0.0316 m</strong> WP1 error and <strong>0.3136 m</strong> mean 3D error across 300 telemetry samples.',
        'Benchmarked CVHAD across 100 unseen 1080p hot-fire frames (101.24 ms/frame avg E2E, ~9.9 FPS) and validated Hybrid LLM-SRGM on n = 140 defects (87.3%–92.0% agreement).'
      ],
      tags: ['AIAA SciTech', 'ISSS / INCOSE', 'PX4 / ArduPilot', 'YOLOv8 / YOLO11', 'SwFTA', 'LLM-SRGM'],
      links: [
        { label: 'GitHub SystemsResearch', url: 'https://github.com/calebstone15/SystemsResearch', kind: 'secondary' }
      ]
    },
    {
      id: 'work-oldham',
      section: 'work',
      categories: ['systems'],
      badge: 'FIELD & GIS OPS',
      timeframe: 'FEB 2024 - AUG 2024',
      org: 'Oldham County Water District, Louisville / Buckner, KY',
      title: 'ArcGIS Engineering Intern',
      summary: 'Validated, topology-checked, and integrated 10,000+ GPS-surveyed municipal fluid distribution assets into production ArcGIS Pro spatial databases and hydraulic pressure models.',
      media: {
        type: 'schematic',
        schematicKey: 'gis'
      },
      gallery: [
        { type: 'schematic', schematicKey: 'gis', caption: 'Municipal fluid distribution topology QA & hydraulic pressure zone modeling' }
      ],
      metrics: [
        { label: 'Validated Assets', value: '10,000+' },
        { label: 'Platform', value: 'ArcGIS Pro' },
        { label: 'Field Method', value: 'GPS Survey' },
        { label: 'Focus', value: 'Pressure Zones' }
      ],
      overview: 'ArcGIS Engineering Intern at Oldham County Water District (Feb 2024 – Aug 2024, Buckner / Louisville, KY). Modernized county-wide potable fluid distribution spatial records by conducting field GPS surveys, executing geodatabase topology QA, and supporting hydraulic pressure-zone modeling in ArcGIS Pro.',
      specs: [
        { label: 'Asset Inventory', value: '10,000+ Geo-Validated Municipal Utility Assets' },
        { label: 'GIS Platform', value: 'Esri ArcGIS Pro Enterprise Spatial Geodatabase' },
        { label: 'Field Method', value: 'Field GPS Coordinate Surveying & Corridor Mapping' },
        { label: 'Asset Taxonomy', value: 'Distribution Mains, Gate Valves, Fire Hydrants, Meters' },
        { label: 'Engineering Focus', value: 'Hydraulic Pressure Zones & Looped Network Modeling' },
        { label: 'QA Discipline', value: 'Topological Continuity & Construction As-Built Reconciliation' }
      ],
      bullets: [
        'Digitized, attribute-verified, and topology-checked <strong>10,000+ GPS-surveyed distribution assets</strong> across production <strong>ArcGIS Pro</strong> spatial databases.',
        'Conducted on-site field GPS surveys along expanding development corridors to capture exact valve, hydrant, and main alignments.',
        'Reconciled legacy GIS geometry directly against civil engineering construction drawings and contractor as-built redlines to maintain configuration truth.',
        'Built and analyzed <strong>municipal hydraulic pressure zones and pipeline loops</strong> supporting district capital improvement and pressure-balance planning.'
      ],
      verification: [
        'Delivered a cleaned, topologically continuous spatial network across 10,000+ utility nodes with field-verified as-built parity.',
        'Achieved zero unresolved topological disconnects or asset coordinate conflicts across surveyed corridor tie-ins.'
      ],
      tags: ['ArcGIS Pro', 'GPS Field Survey', 'Topological QA', 'Hydraulic Modeling', 'As-Built Verification'],
      links: []
    },
    {
      id: 'work-grw',
      section: 'work',
      categories: ['systems', 'propulsion'],
      badge: 'CIVIL & FLUIDS',
      timeframe: 'MAY 2023 - AUG 2023',
      org: 'GRW Engineers, Inc., Louisville, KY',
      title: 'Engineering Intern — Water & Process Facilities',
      summary: 'Engineered custom Excel hydraulic/effluent balance calculators, AutoCAD/Civil 3D piping schematics, and field as-built tolerance inspections for municipal treatment upgrades.',
      media: {
        type: 'schematic',
        schematicKey: 'grw'
      },
      gallery: [
        { type: 'schematic', schematicKey: 'grw', caption: 'Process piping CAD schematics & custom hydraulic/environmental balance calculator' }
      ],
      metrics: [
        { label: 'Facilities', value: '3 Capital Sites' },
        { label: 'CAD Stack', value: 'AutoCAD / Civil 3D' },
        { label: 'Endorsement', value: 'Joseph Pavoni, P.E.' },
        { label: 'Compliance', value: 'State DECA' }
      ],
      overview: 'Water & Process Facilities Engineering Intern at GRW Engineers, Inc. (May 2023 – Aug 2023, Louisville, KY) under Water Resources Division Manager Joseph V. Pavoni, P.E. Produced custom Excel hydraulic/effluent balance calculators, AutoCAD and Civil 3D process piping markups, and field tolerance inspections across three municipal treatment capital projects.',
      specs: [
        { label: 'Capital Sites', value: 'Carter Caves State Park WWTP (DECA), Brandenburg WTP, Jeffersontown Water Quality' },
        { label: 'CAD Stack', value: 'Autodesk AutoCAD & Autodesk Civil 3D' },
        { label: 'Analytical Tools', value: 'Custom Excel Hydraulic & Effluent Mass-Balance Calculators' },
        { label: 'Supervision', value: 'Joseph V. Pavoni, P.E., LEED AP, Assoc. DBIA' },
        { label: 'Regulatory Path', value: 'Kentucky Division of Engineering & Contract Administration (DECA)' },
        { label: 'Term', value: 'May 2023 – Aug 2023 (4-Month Internship)' }
      ],
      bullets: [
        'Built custom <strong>Microsoft Excel hydraulic and environmental impact calculators</strong> evaluating plant flow splits, headlosses, and effluent compliance balances.',
        'Executed mechanical component revisions and process-piping plan markups in <strong>AutoCAD</strong> and <strong>Civil 3D</strong> across water and wastewater capital upgrade packages.',
        'Directly supported three municipal capital projects: <strong>Carter Caves WWTP Improvements</strong> (state DECA), <strong>Brandenburg WTP Improvements</strong>, and <strong>Jeffersontown Water Quality</strong>.',
        'Conducted on-site treatment equipment inspections checking dimensional installation tolerances and resolving field/drawing discrepancies with clients and DECA officials.'
      ],
      verification: [
        'Earned written P.E. endorsement (March 6, 2025 reference letter) from Water Resources Division Manager Joseph V. Pavoni, P.E. confirming independent engineering problem-solving across all three facilities.',
        'Delivered all AutoCAD/Civil 3D markups, Excel mass-balance calculators, and state DECA inspection deliverables on schedule within the 4-month term.'
      ],
      tags: ['AutoCAD', 'Civil 3D', 'Hydraulic Balances', 'Excel Modeling', 'Field As-Built', 'DECA'],
      links: []
    },

    /* ---------------- SECTION 2: ERPL ---------------- */
    {
      id: 'erpl-juno',
      section: 'erpl',
      categories: ['propulsion', 'avionics'],
      badge: 'RE • LIQUIDS LEAD',
      timeframe: '2022 - PRESENT',
      org: 'ERPL — Project Juno (300 lbf LOX / Ethanol)',
      title: 'Juno Bipropellant Engine, Thrust Mount CAD, DAQ & Hotfire Ops',
      summary: 'Responsible Engineer directing thrust mount mechanical CAD, S-beam load-cell DAQ integration, LOX ullage collapse modeling, and console visual ops — preventing an inaugural hardstart.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/juno-hf2-closeup.webp',
        alt: 'Juno 300 lbf LOX/Ethanol stainless thrust chamber firing with GoPro cameras mounted',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/juno-hf2-closeup.webp', caption: 'Juno Hotfire 2 — Stainless thrust chamber, nozzle & dual GoPro close-up', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/juno-hf2-plume-vent.webp', caption: 'Juno Hotfire 2 — Simultaneous Mach plume and cryogenic LOX vent jet', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/juno-fusion-cad.webp', caption: 'Fusion 360 CAD assembly: C2H5OH / LOX 300 lbf chamber & 350 PSI retainer ring', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/juno-thrust-plate-drawing.webp', caption: 'Thrust Plate Drawing v9 — Drafted by Caleb Stone (Autodesk Inventor)', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/juno-hf1-wide.webp', caption: 'Juno Hotfire 1 — Full mobile horizontal test stand at Cecil pad', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/juno-cryo-chilldown.webp', caption: 'Stainless steel nozzle cryogenic LOX chilldown vent verification', tone: 'dark' }
      ],
      metrics: [
        { label: 'Rated Thrust', value: '300 lbf' },
        { label: 'Propellants', value: 'LOX / Ethanol' },
        { label: 'Chamber Spec', value: '350 PSI' },
        { label: 'Feed System', value: '1,300 PSI MOP' },
        { label: 'Cryo Line', value: '-155.5°C Logged' },
        { label: 'Key Save', value: 'Hardstart Abort' }
      ],
      overview: 'Responsible Engineer (2022–Present) for Project Juno, ERPL\'s 300 lbf LOX / Ethanol (C2H5OH) bipropellant rocket engine fed by the Draco 1,300 psi MOP feed system. Directed structural thrust-mount CAD and machining, 3-channel S-beam load-cell DAQ integration, LOX ullage collapse thermodynamic modeling, and console abort operations across waterflow and static hotfire campaigns.',
      specs: [
        { label: 'Engine Performance', value: '300 lbf Rated Thrust, LOX / Ethanol (C2H5OH), 350 PSI Chamber Design' },
        { label: 'Feed System', value: 'Draco Propellant Feed System (1,300 PSI MOP, ~676 PSI Reg Downstream, ~2,390 PSI GN2 Source)' },
        { label: 'CAD & Drawings', value: 'Autodesk Inventor (Thrust Plate Drawing v9) & Fusion 360 (Juno Load Cell v1, Draco V3.3)' },
        { label: 'Thrust DAQ', value: '3-Channel S-Type Load Cell Array (Green / Red / Blue lbf) + Dual Tank Load Cells' },
        { label: 'Thermal & Pressure', value: 'CJC NTC Cryo Thermistors (down to -155.5°C LOX line logged) + Upstream/Downstream PTs' },
        { label: 'Console Safety', value: 'Console Visual/Fluid Monitoring & Real-Time Manual/Auto Abort Authority' }
      ],
      bullets: [
        'Modeled and released fabrication drawings in <strong>Autodesk Inventor</strong> (<em>Thrust Plate Drawing v9</em>) and <strong>Fusion 360</strong> mating the stainless thrust chamber to the mobile horizontal stand via a 3-channel S-beam load-cell retainer assembly.',
        'Integrated high-rate DAQ channels logging <strong>3x Thrust Load Cells</strong>, <strong>Fuel/LOX Tank Weight (lbf)</strong>, <strong>Regulator/Tank/Injector/Chamber PTs (psi)</strong>, and cryogenic thermistors across December static-fire campaigns.',
        'Modeled thermodynamic <strong>LOX tank ullage collapse factor</strong> during high-pressure GN2 dome pressurization and cryogenic chilldown transients.',
        'Directed visual and fluid console monitoring at Cecil Spaceport and executed <strong>real-time abort commands during inaugural testing to prevent a hardstart detonation</strong>.'
      ],
      verification: [
        'Validated propellant feed dynamics through pressurized Fall 2024 waterflow calibration, cryogenic chilldown vents, Juno Hotfire 1, and Juno Hotfire 2 producing clean supersonic Mach shock diamonds.',
        'Inaugural hardstart abort intervention preserved airframe/chamber hardware for multi-fire reuse and drove ERPL Hotwash (12/11/2024) abort-criteria standardization.'
      ],
      tags: ['300 lbf LOX/Ethanol', 'Autodesk Inventor', 'S-Beam Load Cell', 'Ullage Collapse', 'Hotfire Abort Ops', 'Cryogenics'],
      links: [
        { label: 'Thrust Plate PDF (v9)', url: 'portfolio-assets/docs/Thrust_Plate_Drawing_v9.pdf', kind: 'primary' },
        { label: 'Watch Juno HF1', url: 'https://www.youtube.com/watch?v=dVNkJK9rgc0', kind: 'secondary' },
        { label: 'Watch Juno HF2', url: 'https://www.youtube.com/watch?v=H60jxBK3g6w', kind: 'secondary' }
      ]
    },
    {
      id: 'erpl-moecam',
      section: 'erpl',
      categories: ['avionics', 'propulsion'],
      badge: 'FLIGHT AVIONICS',
      timeframe: '2024 - PRESENT',
      org: 'ERPL — MOE Liquid Bipropellant Rocket (50,000 ft AGL)',
      title: 'MOE Cam: Liquid Flight Vehicle Livestreamed Camera & Avionics',
      summary: 'Architected STM32H743 flight avionics, Lua-multiplexed dual 4K optics, -183°C LOX thermal protection, 300+ ft ELRS pad arming switch, and 1.2 GHz 2W live video downlink.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/moe-cam-avionics-schematic.webp',
        alt: 'MOE Cam flight avionics schematic with Kakute H743-Wing, dual RunCam Split 4, VTX, and GPS',
        fit: 'contain'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/moe-cam-avionics-schematic.webp', caption: 'STM32H743 (Kakute H743-Wing) + Dual RunCam Split 4 V2 + GEPRC 1.2 GHz VTX + GNSS schematic', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/moe-network-topology.webp', caption: 'MOE pad & ground station network architecture diagram', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/moe-hf1-boiloff.webp', caption: 'MOE Static Hotfire 1 in cryogenic LOX boil-off mist', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/esd-lora-soldering.webp', caption: 'ESD mat bench soldering of telemetry RF transceivers and power switching hardware', tone: 'dark' }
      ],
      metrics: [
        { label: 'Flight MCU', value: 'STM32H743 480MHz' },
        { label: 'RF Downlink', value: '1.2 GHz 2W VTX' },
        { label: 'Link Margin', value: '+10.0 dB @ 50k ft' },
        { label: 'Airborne Mass', value: '~254.5 g (0.56 lb)' },
        { label: 'Flight Script', value: '284L Lua 10 Hz FSM' },
        { label: 'Cryo Exposure', value: '-183°C LOX Intertank' }
      ],
      overview: 'Architected Project MOE\'s auxiliary flight avionics, dual 4K onboard video payload, and live 1.2 GHz video downlink inside the RF-transparent fiberglass intertank positioned between the -183°C LOX tank and fuel tank (50,000 ft AGL target). Designed both the custom STM32H743 Lua-controlled avionics stack and two ground-station topologies solving near-zenith tracking lock.',
      specs: [
        { label: 'Flight Controller', value: 'Holybro Kakute H743-Wing (STM32H743 480 MHz, ICM-42688-P IMU, BMP280 Baro, AT7456E OSD, 114-line ArduPilot param)' },
        { label: 'Cameras & Control', value: '2x RunCam Split 4 V2 (4K30 / 2.7K60 U3 microSDXC + CVBS) on UART2 & UART3 (Protocol 28 Lua scripting)' },
        { label: 'Video Downlink', value: 'GEPRC MATEN 1.2G 2W VTX (1280 MHz, IRC Tramp on UART5, stepped 25 -> 400 -> 2000 -> 25 mW) + 2.0 dBi Dipole' },
        { label: 'Remote Pad Switch', value: 'RadioMaster ER4 2.4 GHz ELRS + Pololu #2803 (15A/30V Low-Side MOSFET, ~35 mA standby = 35+ hr) on UART6' },
        { label: 'Ground Station', value: 'Fixed ~85 deg Skyward Rig (TrueRC X-AIR +10 dBic + Omni Diversity -> +10.0 dB margin at 50k ft, 12-mi cone) + 1.5-mi AntennaTracker option' },
        { label: 'Mass & Power Protection', value: '~254.5 g Airborne Mass; 4S 12.8V LiFePO4 (11.2V cutoff) in 3–5 mm Neoprene + MG Chemicals 422C Silicone Coat' }
      ],
      bullets: [
        'Authored <strong>284-line ArduPilot Lua script</strong> (<code>vtx_rocket_power.lua</code>, 10 Hz loop) implementing a <strong>5-state flight FSM</strong>: PAD_STANDBY &rarr; BOOST (&gt;=2.5G/300ms or +15m &amp; &gt;8 m/s) &rarr; ASCENT_2000 (+300m/4s) &rarr; DESCENT (30m apogee drop) &rarr; LANDED (15s &lt;1.5 m/s).',
        'Bypassed ArduPilot\'s single-instance <code>AP_RunCam::_singleton</code> limit by bit-banging verified <strong>CRC8 DVB-S2 RunCam UART packets</strong> (<code>0xCC 0x01 0x03 0x98</code> Start / <code>0x04</code> Stop) across UART2/UART3 and multiplexing <code>GPIO 81 (RELAY2/PC13)</code> from shroud to plume at apogee while gating 9V VTX power on <code>GPIO 82 (RELAY1/PE3)</code>.',
        'Engineered cryogenic intertank thermal survivability around -183°C LOX boil-off using 3–5 mm closed-cell neoprene battery insulation (keeping cells &gt;-10°C), MG Chemicals 422C silicone conformal coating, BMP280 baro wind foam, and Kapton condensation drip shields.',
        'Quantified the 300 ft pad zenith gimbal-lock singularity (<code>arctan(50,000 / 300) = 89.66 deg</code>) and designed a <strong>fixed ~85 deg skyward diversity array</strong> (TrueRC X-AIR 10 dBic, 65 deg beamwidth) yielding <strong>+10.0 dB link margin</strong> at apogee alongside 35+ hr ELRS standby safety.'
      ],
      verification: [
        'Bench-verified complete KakuteH7-Wing pinout, dual-RunCam UART start/stop packets, GPIO 81/82 relay switching, and cryogenic thermal-protection BOM.',
        'Validated <code>FSPL = 20log(d) + 20log(f) + 32.44</code> link budgets across both the 300 ft fixed skyward rig (+10.0 dB at 2W) and 1.5-mile Matek H743 + RFD 900x AntennaTracker architecture (+4.5 dB at 800 mW).'
      ],
      tags: ['STM32H743', 'ArduPilot Lua', '1.2 GHz 2W VTX', '2.4 GHz ELRS', 'Cryo Hardening', 'RF Link Budget'],
      links: [
        { label: 'Network Topology PDF', url: 'portfolio-assets/docs/MOE_Network_Topology.pdf', kind: 'primary' },
        { label: 'Watch Mini MOE Flight 1', url: 'https://www.youtube.com/watch?v=CIiB3DMBc18', kind: 'secondary' }
      ]
    },
    {
      id: 'erpl-dracovision',
      section: 'erpl',
      categories: ['avionics', 'propulsion'],
      badge: '12-CAM RTSP MATRIX',
      timeframe: '2023 - 2026',
      org: 'ERPL Visual Control Systems',
      title: 'DracoVision: 12-Camera RTSP Telemetry & Recording Matrix',
      summary: 'Built a 3,373-line Flask/RTSP/FFmpeg multi-camera telemetry matrix bridging 12 pad IP feeds into 1s HLS & zero-copy fMP4/MSE with PyQt crash-resilient MP4 recording.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/dracovision-in-use.webp',
        alt: 'DracoVision multi-camera telemetry matrix running outdoors during ERPL rocket test-stand operations',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/dracovision-in-use.webp', caption: 'DracoVision 12-camera matrix operating live outdoors during ERPL test-stand operations', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/caleb-nema-box-wiring.webp', caption: 'Weatherproof NEMA field enclosure wiring for test-stand camera power and PoE networking', tone: 'dark' }
      ],
      metrics: [
        { label: 'Matrix Scale', value: '12 Pad IP Cameras' },
        { label: 'Backend LOC', value: '3,373L Python Flask' },
        { label: 'Recorder LOC', value: '1,711L (CLI + PyQt)' },
        { label: 'Transports', value: '1s HLS + fMP4/MSE' },
        { label: 'PTZ Watchdog', value: 'Serialized Deadman' },
        { label: 'Crash Recovery', value: 'FFmpeg moov Repair' }
      ],
      overview: 'Engineered DracoVision, ERPL\'s 12-camera Flask/RTSP/FFmpeg command-center telemetry matrix built for rugged outdoor static fires and launch pad deployments at Cecil Spaceport. Combines low-latency multi-stream remuxing with serialized ONVIF/SUNAPI PTZ deadman safety and crash-resilient local MP4 segment recording.',
      specs: [
        { label: 'DracoVision Backend', value: 'app.py (3,373 lines, Python Flask, Threading, FFmpeg + h264_videotoolbox / libx264 / -c:v copy)' },
        { label: 'Recorder Suite', value: 'record_cameras.py (776 lines, crash-resilient MP4 segmenter/repair) & PyQt record_ui.py (935 lines)' },
        { label: 'Streaming Transports', value: 'Low-Latency 1s HLS (5-segment rolling) + Zero-Copy fMP4/MSE (Fmp4Broadcaster, frag_every_frame)' },
        { label: 'PTZ & Operator Safety', value: 'Serialized CameraPTZController Deadman Watchdog, ONVIF/SUNAPI PTZ, Admin vs Read-Only Field URLs' },
        { label: 'Health & Bitrate Telemetry', value: 'Real-Time RTSP Probe (probe_rtsp_url), Per-Camera Mbps, TCP Latency & FFmpeg Epoch Watchdog' },
        { label: 'Adaptive Bandwidth Mode', value: '/api/admin/adaptive_quality Fallback (640px, 12-15 fps, 450-500 kbps h264_videotoolbox)' }
      ],
      bullets: [
        'Built <strong>DracoVision\'s</strong> 3,373-line Flask backend probing RTSP endpoints (<code>probe_rtsp_url</code>) and transcoding/remuxing <strong>12 live pad cameras</strong> into <strong>1s HLS</strong> and <strong>zero-copy fMP4/MSE</strong> streams while monitoring per-camera Mbps, TCP latency, and FFmpeg epoch restarts.',
        'Implemented <strong>adaptive quality scaling</strong> (<code>/api/admin/adaptive_quality</code>), a serialized per-camera <strong>PTZ deadman watchdog</strong> (<code>CameraPTZController</code>), and strict operator-admin vs. read-only field URL isolation.',
        'Authored <code>record_cameras.py</code> (776 lines) and PyQt <code>record_ui.py</code> (935 lines) featuring <code>SessionTracker</code> crash recovery and automated FFmpeg MP4 <code>moov</code>-atom repair after unexpected power loss.'
      ],
      verification: [
        'Field-proven outdoors at Cecil Spaceport driving 12 simultaneous live test-stand camera feeds during cryogenic and hotfire campaigns.',
        'Adaptive sub-stream fallback (640px, 12–15 fps, 450–500 kbps <code>h264_videotoolbox</code>) prevented USB Ethernet saturation across 6+ concurrent operator views.'
      ],
      tags: ['DracoVision', 'Flask / Python', 'RTSP / FFmpeg', 'HLS / fMP4 MSE', 'ONVIF PTZ', 'NEMA PoE'],
      links: []
    },
    {
      id: 'erpl-picamera',
      section: 'erpl',
      categories: ['avionics', 'propulsion'],
      badge: 'EDGE STREAMING',
      timeframe: '2024 - 2026',
      org: 'ERPL Visual Control Systems',
      title: 'PiCameraProject: Raspberry Pi 5 Dual-Stream HQ & IR Edge Camera',
      summary: 'Engineered headless Raspberry Pi 5 + Arducam IMX477 HQ & NoIR IR pad camera appliances streaming via MediaMTX RTSP/ll-HLS with systemd SSD recording inside weatherproof NEMA boxes.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/picamera-control-ui.webp',
        alt: 'PiCameraProject live Operational Control workbench dashboard monitoring Raspberry Pi 5 edge streams',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/picamera-control-ui.webp', caption: 'PiCameraProject live Operational Control workbench dashboard', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/caleb-nema-box-wiring.webp', caption: 'Weatherproof PoE NEMA field enclosure housing Raspberry Pi 5 edge streaming hardware', tone: 'dark' }
      ],
      metrics: [
        { label: 'Edge SBC', value: 'Raspberry Pi 5' },
        { label: 'Optics Modules', value: 'IMX477 HQ & NoIR IR' },
        { label: 'Media Router', value: 'MediaMTX RTSP/HLS' },
        { label: 'Python Core', value: '404L + Picamera2' },
        { label: 'Local Storage', value: 'External SSD Mount' },
        { label: 'Service Resiliency', value: 'systemd Watchdog' }
      ],
      overview: 'Architected PiCameraProject, a self-healing Raspberry Pi 5 headless edge camera node deployed close-in on Cecil Spaceport test stands inside weatherproof PoE NEMA enclosures. Pairs Arducam IMX477 HQ visible and NoIR infrared optics with hardware-accelerated Picamera2 encoding, simultaneous MediaMTX RTSP/ll-HLS streaming, and fail-safe SSD recording.',
      specs: [
        { label: 'Application Core', value: 'Operational_app.py (254 lines, Flask operator control dashboard) & stream.py (150 lines Picamera2 capture)' },
        { label: 'Streaming Pipeline', value: 'MediaMTX Config (22 lines, RTSP :8554 + Low-Latency HLS :8888) fed by hardware H.264/JPEG encoders' },
        { label: 'Imaging Sensors', value: 'Arducam IMX477 HQ Visible + NoIR Infrared (thermal & cryogenic plume/vent visibility)' },
        { label: 'Storage & Provisioning', value: 'Dedicated External SSD (/mnt/external/recordings) + Automated setup.sh Bootstrapped Deployment' },
        { label: 'Process Supervision', value: 'Linux systemd Auto-Restart Watchdog + Weatherproof PoE NEMA Field Enclosure' }
      ],
      bullets: [
        'Built <strong>Operational_app.py</strong> (254 lines) and <strong>stream.py</strong> (150 lines) orchestrating hardware-encoded <code>Picamera2</code> H.264/JPEG streams alongside local operator preview and recording controls.',
        'Integrated <strong>MediaMTX</strong> (<code>mediamtx.yml</code>) exposing simultaneous RTSP (<code>:8554</code>) and low-latency HLS (<code>:8888</code>) endpoints directly consumable by DracoVision and remote pad viewing stations.',
        'Automated headless field deployment via <code>setup.sh</code> and <strong>systemd watchdogs</strong> writing continuous video segments to weatherproof NEMA-enclosed external SSDs.'
      ],
      verification: [
        'Deployed live close-in at Cecil Spaceport capturing visible HQ and NoIR infrared cryogenic venting and hotfire plumes inside sealed PoE NEMA housings.',
        'Survived pad power cycling and network dropouts via automated systemd service recovery with local SSD archival intact.'
      ],
      tags: ['PiCameraProject', 'Raspberry Pi 5', 'IMX477 NoIR IR', 'Picamera2', 'MediaMTX', 'Systemd', 'NEMA PoE'],
      links: []
    },
    {
      id: 'erpl-hdaa-eaa',
      section: 'erpl',
      categories: ['propulsion', 'systems'],
      badge: 'LIVE WEB + DAQ',
      timeframe: '2023 - 2026',
      org: 'ERPL Data Acquisition & Propulsion Software',
      title: 'HDAA V2.3 Desktop Analyzer & Live EAA Hotfire Analysis Suite',
      summary: 'Full-stack hotfire DAQ suite computing Pc, Thrust, Isp, C*, O/F, and ve with <30s PDF debriefs — plus the zero-install live browser EAA Hotfire Analyzer.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/hdaa-thrust-corrected.webp',
        alt: 'HDAA corrected rocket engine thrust telemetry plot with steady-state burn peak',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/hdaa-thrust-corrected.webp', caption: 'HDAA corrected load-cell thrust telemetry curve (Max 1,721 lbf campaign plot)', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/hdaa-pressure-corrected.webp', caption: 'HDAA multi-channel chamber & feed system pressure trace', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/hdaa-logo.webp', caption: 'HDAA V2.3 cross-platform desktop application badge', tone: 'light' }
      ],
      metrics: [
        { label: 'Post-Fire Debrief', value: '< 30 sec' },
        { label: 'Parameters', value: 'Pc, F, Isp, C*, O/F' },
        { label: 'Desktop LOC', value: '1,850+ Python LOC' },
        { label: 'Web Suite LOC', value: '2,091 JS LOC' },
        { label: 'Live App', value: '/eaa/ Web Suite' },
        { label: 'Bundles', value: 'macOS & Browser' }
      ],
      overview: 'Developed the HDAA V2.3 (Hotfire Data Analysis App) Python/Tkinter desktop analyzer and ported the hotfire propulsion physics engine into the zero-install EAA (ERPL Analysis App) web suite embedded directly in this site, cutting hours of manual spreadsheet post-processing to under 30 seconds.',
      specs: [
        { label: 'Desktop Stack', value: 'HDAA-V2.3 — Python, Tkinter, NumPy/SciPy, Matplotlib (12 handler modules, 1,850+ LOC total)' },
        { label: 'Web Hotfire Port', value: 'Zero-Install Browser SPA (hotfire-analyzer.js 1,623L, utils.js 325L, app.js 143L = 2,091 LOC)' },
        { label: 'Computed Physics', value: 'Chamber Pressure (Pc), Multi-LC Thrust (F), Isp, Exhaust Velocity (ve = Isp * 9.80665), c* = Pc * At / mdot, O/F Ratio' },
        { label: 'DSP & Splicing', value: 'Moving-Average Convolution Smoothing, Downsampling Slider, Interactive 2-Point Time-Range Integration & Splicing' },
        { label: 'Web Libraries', value: 'Chart.js, PapaParse (client-side CSV), Multi-Axis Custom Hotfire Plotter & PNG Export' },
        { label: 'Repos & Live URL', value: 'github.com/calebstone15/HDAA-V2.3, github.com/calebstone15/EAA, eaa/index.html' }
      ],
      bullets: [
        'Modularized <strong>HDAA V2.3</strong> across dedicated physics handlers (<code>plot_thrust.py</code> 125L, <code>plot_chamber_pressure.py</code> 124L, <code>plot_isp.py</code> 143L, <code>plot_c_star.py</code> 151L, <code>plot_ve_from_isp.py</code> 147L, <code>plot_of_ratio.py</code> 128L, <code>custom_plot.py</code> 321L, plus fuel/ox tank weight modules).',
        'Implemented unit-consistent propulsion solver converting lbm/s propellant flows to slug/s (÷ 32.174), psi to lbf/ft^2 (x 144), and ft/s to m/s (x 0.3048), with interactive click-to-average steady-state burn trimming.',
        'Built <strong>EAA</strong> (vanilla ES6 + Chart.js + PapaParse) replicating client-side CSV parsing, trapezoidal impulse integration (<code>Utils.trapz</code>), custom constant reference lines, and instant PNG plot export in-browser with zero backend dependencies.'
      ],
      verification: [
        'Validated against production ERPL hotfire CSV logs (1,721 lbf campaign thrust curve and synchronized multi-channel chamber/feed pressure traces).',
        'Compressed post-hotfire multi-plot engineering debrief generation and automated PDF export from hours of spreadsheet work to <strong>under 30 seconds</strong>.'
      ],
      tags: ['Python / Tkinter', 'NumPy / SciPy', 'Propulsion Physics', 'Chart.js', 'Live Web App', 'Automated PDF'],
      links: [
        { label: 'Launch Live EAA Suite', url: 'eaa/index.html', kind: 'cyan' },
        { label: 'GitHub HDAA-V2.3', url: 'https://github.com/calebstone15/HDAA-V2.3', kind: 'secondary' },
        { label: 'GitHub EAA', url: 'https://github.com/calebstone15/EAA', kind: 'secondary' }
      ]
    },
    {
      id: 'erpl-broadcast',
      section: 'erpl',
      categories: ['propulsion', 'avionics'],
      badge: 'VISUAL LEAD & LRC25',
      timeframe: '2023 - 2026',
      org: 'ERPL / NASASpaceflight / Liquid Rocketry Conference 2025',
      title: 'Test-Stand Broadcast Telemetry, NASASpaceflight & LRC 25 Talk',
      summary: 'Led remote optical test-stand production, live HTML/JS telemetry overlays, NASASpaceflight broadcast upgrades, and authored LRC 25 technical deck on capturing test visual data.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/erpl-stream-overlay.webp',
        alt: 'Live ERPL test stand telemetry stream overlay at Cecil Spaceport pad',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/erpl-stream-overlay.webp', caption: 'Live Cecil test-stand broadcast telemetry HUD & countdown state overlay', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/caleb-lrc25-talk.webp', caption: 'Caleb Stone presenting LRC 25: Capturing the Visual Data of a Test', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/lrc25-camera-pad-setup.webp', caption: 'LRC 25 page 5: Multi-angle pad camera topology & exposure architecture', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/odyssey-stream-hud.webp', caption: 'Project Odyssey livestream telemetry HUD during nitrous oxide pressurization', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/triton-hangar-hotfire.webp', caption: 'Triton hotfire outside Cecil Spaceport yellow truss hangar', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/caleb-triton-tiedowns.webp', caption: 'Caleb Stone inspecting horizontal test stand tie-down hardware before Triton firing', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/odyssey-hotfire-thumb.webp', caption: 'Project Odyssey horizontal hotfire test campaign', tone: 'dark' }
      ],
      metrics: [
        { label: 'Conference Talk', value: 'LRC 25 (21pp)' },
        { label: 'Broadcast Partner', value: 'NASASpaceflight' },
        { label: 'Campaigns', value: 'Odyssey/Juno/Triton' },
        { label: 'High-Speed', value: '1,000 fps Phantom' }
      ],
      overview: 'Founded and led ERPL\'s Visual Control Team (2023–2026), unifying high-speed propulsion diagnostic imaging (1,000 fps Phantom, DSLRs, sound-triggered MIOPS shutters, PTZs) with mission-grade public broadcasts at Cecil Spaceport alongside NASASpaceflight (NSF), and delivered a 21-slide technical talk at Liquid Rocketry Conference 2025 (LRC 25).',
      specs: [
        { label: 'Conference Deck', value: 'Capturing the Visual Data of a Test — LRC 25 (21 slides, PDF attached)' },
        { label: 'High-Speed & Stills', value: '1,000+ fps Phantom High-Speed, MIOPS Acoustic Triggers, Baseline 1/640–1/1250s f/9 ISO 100' },
        { label: 'Broadcast Overlays', value: '7 Sequenced HTML/CSS/JS State Overlays (Actuation Checks -> End Stream + update_html.py)' },
        { label: 'Broadcast Tooling', value: 'OBS Studio, Multi-Cam PTZs, Network Scanner (net_monitor.py 894L + cloud_sync_blocker.py 135L)' },
        { label: 'Campaigns Covered', value: 'Project Juno, Project Odyssey (550 lbf N2O/HTPB), Triton, Test-Stand Operations' },
        { label: 'Industry Partner', value: 'NASASpaceflight (NSF) Pad Broadcast Integration' }
      ],
      bullets: [
        'Built a 7-stage dynamic HTML/JS <strong>OBS broadcast telemetry overlay system</strong> stepping audiences through <em>Actuation Checks, Fuel Load, LOX Load, System Press, Hotfire, System Safe, and End Stream</em> with automated sponsor marquee tooling.',
        'Engineered <strong>Network Scanner (1,029 LOC Python)</strong> including <code>cloud_sync_blocker.py</code> using <code>SIGSTOP/SIGCONT</code> to pause macOS background sync daemons (OneDrive, iCloud <code>bird/cloudd</code>, Adobe Core Sync, Dropbox, Google Drive) so upload saturation never drops remote pad streams.',
        'Authored and presented <strong>LRC 25 (21 slides)</strong> codifying pad camera standoff geometry, ND filter exposure baselines, DSLR thermal survival, 3D-printed GoPro mounts, low-cost IR conversion, and real-time PTZ failure diagnosis invisible in 1D transducer traces.',
        'Partnered directly with <strong>NASASpaceflight (NSF)</strong> broadcast engineers to harden collegiate multi-feed pad stream reliability at Cecil Spaceport.'
      ],
      verification: [
        'Delivered multi-camera stills, 1,000 fps Phantom diagnostics, and live-streamed telemetry coverage across Odyssey, Juno, and Triton campaigns.',
        'Presented technical visual-diagnostics methodology live at Liquid Rocketry Conference 2025 (LRC 25).'
      ],
      tags: ['OBS Broadcast', 'HTML/JS Overlays', 'NASASpaceflight', 'High-Speed Optics', 'LRC 25 Speaker', 'PTZ Control'],
      links: [
        { label: 'LRC 25 Deck (PDF)', url: 'portfolio-assets/docs/LRC25_Visual_Data_Caleb_Stone.pdf', kind: 'primary' },
        { label: 'ERPL YouTube', url: 'https://www.youtube.com/@erplofficial', kind: 'secondary' },
        { label: 'ERPL on X', url: 'https://x.com/erauerpl', kind: 'secondary' }
      ]
    },
    {
      id: 'erpl-secretary',
      section: 'erpl',
      categories: ['systems', 'propulsion'],
      badge: 'EXEC BOARD • SEC & PR',
      timeframe: '2023 - PRESENT',
      org: 'ERPL Executive Board & Visual Lead (100+ Members)',
      title: 'Secretary & Public Relations (PR) Officer — Ops & Fusion Standardization',
      summary: 'Served as ERPL Executive Board Secretary (2024–2025) and Public Relations (PR) Officer & Visual Control Team Lead (2023–Present), standardizing SOPs in Stoke Space Fusion and launch outreach across 100+ engineers.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/erpl-cryo-ppe-crew.webp',
        alt: 'ERPL test crew wearing cryogenic aprons and face shields servicing test stand plumbing',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/erpl-cryo-ppe-crew.webp', caption: 'Cryo PPE & pad procedure execution during Cecil test operations', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/cecil-hangar-ops.webp', caption: 'Cecil Spaceport hangar bay staging out to ERPL test pad tents', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/erpl-logo-white.webp', caption: 'Experimental Rocket Propulsion Lab Official Mark', tone: 'dark' }
      ],
      metrics: [
        { label: 'Exec Officer Roles', value: 'Secretary & PR Officer' },
        { label: 'Team Leadership', value: 'Visual Lead (2023-Now)' },
        { label: 'Org Size', value: '100+ Engineers' },
        { label: 'SOP Tool', value: 'Stoke Space Fusion' },
        { label: 'Governance', value: 'ERAU SGA Budget' },
        { label: 'Test Range', value: 'Cecil Spaceport' }
      ],
      overview: 'Served across two elected Executive Board appointments for Embry-Riddle\'s 100+-member student liquid rocket organization: Public Relations (PR) Officer & Visual Control Team Lead (2023–Present) directing technical outreach, sponsor media, and NASASpaceflight broadcast coordination, and Secretary Officer (2024–2025) standardizing hotfire SOPs in Fusion by Stoke Space and securing SGA operating budgets.',
      specs: [
        { label: 'Organization', value: 'Experimental Rocket Propulsion Lab (ERPL), 100+ Active Student Engineers' },
        { label: 'Secretary Appointment', value: 'Elected Executive Board Secretary (2024–2025 Term): Master Scheduling, Archiving & SGA Governance' },
        { label: 'PR & Team Leadership', value: 'Public Relations (PR) Officer & Visual Control Team Lead (2023–Present): Broadcast, Media & Outreach' },
        { label: 'Operations Platform', value: 'Fusion by Stoke Space (Test, Hotfire & Visual Operations SOP Standardization)' },
        { label: 'Range & Safety Control', value: 'Cecil Spaceport Staging, Cryo PPE & Dec 2024 Hotwash Abort-Criteria Compliance' },
        { label: 'Outreach Channels', value: '@erplofficial YouTube, @erauerpl X, Sponsor Relations & NASASpaceflight Partner Broadcasts' }
      ],
      bullets: [
        'Directed ERPL public communications, campaign branding, sponsor coordination, and launch/hotfire documentation as <strong>Public Relations (PR) Officer &amp; Visual Control Team Lead (2023&ndash;Present)</strong>.',
        'Managed master campaign schedules, documentation archiving, and cross-team readiness across <strong>100+ active engineers</strong> during my <strong>Secretary Officer (2024&ndash;2025)</strong> executive term.',
        'Authored and version-controlled standardized <strong>hotfire, cryogenic safety, and visual-control SOPs</strong> using <strong>Fusion by Stoke Space</strong> workflow tools and post-test Hotwash action items.',
        'Maintained <strong>ERAU Student Government Association (SGA)</strong> compliance and budget packets sustaining multi-team propulsion testing at Cecil Spaceport.'
      ],
      verification: [
        'Sustained a zero-lost-time range safety record across pressurized cold-flow, water-flow, and static hotfire operations at Cecil Spaceport.',
        'Passed consecutive ERAU SGA governance audits while expanding ERPL public launch reach via @erplofficial and @erauerpl technical productions.'
      ],
      tags: ['Secretary Officer', 'PR Officer', 'Public Relations', 'Visual Control Lead', 'Fusion by Stoke Space', 'SGA Compliance'],
      links: [
        { label: 'erpl.space', url: 'https://erpl.space/', kind: 'secondary' },
        { label: 'ERPL YouTube', url: 'https://www.youtube.com/@erplofficial', kind: 'secondary' }
      ]
    },

    /* ---------------- SECTION 3: RESEARCH ---------------- */
    {
      id: 'res-cvhad',
      section: 'research',
      categories: ['autonomy', 'propulsion'],
      badge: 'AIAA SCITECH 2027',
      timeframe: '2024 - 2026',
      org: 'Primary Author — RAISE Lab & ERPL (C. Stone, V. Nagaraju)',
      title: 'CVHAD: Sub-30ms Vision-Based Rocket Engine Auto-Abort Architecture',
      summary: 'Primary-author AIAA SciTech 2027 preliminary study pairing fine-tuned YOLOv8n edge CNNs (~1,100 hot-fire frames, 28.44 ms forward / 101.24 ms E2E on 1080p) with 5-stage OR-gate auto-abort logic.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/cvhad-yolo-anomaly-detect.webp',
        alt: 'CVHAD YOLOv8 edge detection bounding boxes identifying venting smoke and fire on test stand',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/cvhad-yolo-anomaly-detect.webp', caption: 'Real-time YOLO anomaly detection (fire & venting_smoke classes) on ERPL hotfire footage', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/cvhad-abort-pipeline.webp', caption: 'CVHAD hybrid 5-stage parallel OR-gate + edge vision auto-abort architecture pipeline', tone: 'light' }
      ],
      metrics: [
        { label: 'Status', value: 'AIAA SciTech (In Progress)' },
        { label: 'Authorship', value: 'Primary Author' },
        { label: 'CNN Forward', value: '28.44 ms' },
        { label: 'YOLO Internal', value: '44.35 ms' },
        { label: 'End-to-End', value: '101.24 ms (~9.9 FPS)' },
        { label: 'Dataset', value: '~1,100 Frames / 6 Classes' }
      ],
      overview: 'Primary-author AIAA SciTech 2027 preliminary feasibility study (Caleb Stone & Vidhyashree Nagaraju) pairing a fine-tuned YOLOv8n edge object detector with a deterministic 5-stage parallel OR-gate + temporal persistence logic pipeline to trigger sub-second rocket engine auto-aborts on external visual anomalies before 1D PTs/TCs react.',
      specs: [
        { label: 'Publication & Status', value: 'Preliminary Manuscript (11 pp, CVHAD_Rocket_Auto_Abort_Paper.pdf), Primary Author (C. Stone, V. Nagaraju)' },
        { label: 'Model & Training', value: 'Ultralytics YOLOv8n (100 epochs, 80/20 split, Adam/auto, imgsz 640/1920) vs. Faster R-CNN ResNet-50 FPN baseline' },
        { label: 'Dataset Classes (6)', value: 'Nominal, Off-Nominal, Fire, Melting (~30 frames), Fluid Leak, Venting/Smoke (~1,100 CVAT frames, 1080p @ 30fps)' },
        { label: 'Persistence Rule', value: 'VA,t = 1 if sum_{i=t-N+1..t} A_detect,i >= K else 0 (Sliding-Window Temporal Persistence)' },
        { label: 'Edge Target Hardware', value: 'Raspberry Pi 5 + Sony IMX500 AI Cam + Pi Cam Module 3 NoIR + 850 nm IR Filter ($153.40 BOM)' },
        { label: 'Latency Benchmark', value: '28.44 ms CNN Fwd | 44.35 ms YOLO Internal | 101.24 ms Avg E2E (78.48 ms min, 262.89 ms max, ~9.9 FPS, RTX 3050 6 GB)' }
      ],
      bullets: [
        'Curated and annotated <strong>~1,100 ERPL hot-fire frames</strong> in CVAT (<code>frankdatayolov1.1</code>) capturing external flange leaks, venting smoke, uncommanded fires, and ~30 melting frames standardized at 1080p / 30 fps.',
        'Designed a <strong>5-stage parallel OR-gate hybrid abort architecture</strong> fusing traditional PT/TC redlines with sliding-window visual persistence (<em>N</em>-frame / <em>K</em>-count threshold) to reject single-frame flicker false aborts.',
        'Built live multi-camera edge software (<code>LiveFeed/main.py</code>, 971L Flask + <code>Picamera2</code> IMX500 &amp; NoIR selector + rolling 10s FPS/Mbps telemetry + <code>cvhadcontrolpanel.py</code>).',
        'Transitioned from initial <code>Faster R-CNN ResNet-50 FPN</code> baselines (<code>oneshotattempt2.py</code>, 656L) to lightweight <strong>YOLOv8n</strong> to meet hot-fire control loop budgets.'
      ],
      verification: [
        'Validated unseen camera-angle generalization across <strong>100 unseen 1920x1080 frames</strong> achieving 28.44 ms CNN forward pass, 44.35 ms YOLO inference, and 101.24 ms avg E2E latency (with manuscript noting confidence threshold &amp; dataset expansion as ongoing work).'
      ],
      tags: ['AIAA SciTech 2027', 'YOLOv8n', 'PyTorch', 'Auto-Abort Logic', 'Edge CV', 'Propulsion Safety'],
      links: [
        { label: 'Manuscript PDF (In Progress)', url: 'portfolio-assets/docs/CVHAD_Rocket_Auto_Abort_Paper.pdf', kind: 'primary' },
        { label: 'GitHub Pytorch Repo', url: 'https://github.com/calebstone15/Pytorch', kind: 'secondary' }
      ]
    },
    {
      id: 'res-atlas',
      section: 'research',
      categories: ['autonomy', 'avionics'],
      badge: 'AIAA SCITECH 2027',
      timeframe: '2025 - PRESENT',
      org: 'Co-Author / Integration Lead — S. Jadhav, C. Stone, H. Moncayo, V. Nagaraju',
      title: 'ATLAS: LLM-Augmented Adversarial UAS Testing & Crazyflie HITL',
      summary: 'Finished 16-page AIAA SciTech manuscript running 24,000 ArduCopter 4.7.1 SITL flights (1,694 reported / 1,463 confirmed silent failures across 7 weakness families) plus Crazyflie 2.1 HITL validation.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/atlas-flight-1010-telemetry.webp',
        alt: 'ATLAS flight 1010 3-panel trajectory, altitude, and attitude telemetry under fault injection',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/atlas-flight-1010-telemetry.webp', caption: 'ATLAS Flight 1010 telemetry showing dual-baro & motor fault perturbation recovery', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/atlas-flight-1010-timeline.webp', caption: 'Fault injection timeline correlating autopilot mode transitions', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/atlas-rag-coverage-heatmap.webp', caption: '150-cell coverage exploration heatmap from hierarchical memory + C++ source RAG', tone: 'light' },
        { type: 'video', src: 'portfolio-assets/video/raise-lab-timelapse.mp4', caption: 'Bitcraze Crazyflie 2.1 Brushless assembly & Lighthouse arena commissioning' }
      ],
      metrics: [
        { label: 'Manuscript', value: 'AIAA SciTech (16 pp)' },
        { label: 'SITL Scale', value: '24,000 Flights' },
        { label: 'Confirmed Bugs', value: '1,463 Failures' },
        { label: 'RAG Lift', value: 'Up to 8x Discoveries' },
        { label: 'HITL Accuracy', value: '0.0316 m WP1 Error' },
        { label: 'Cross-Check', value: 'PX4 v1.18 + CF 2.1' }
      ],
      overview: 'Finished 16-page AIAA SciTech manuscript (S. Jadhav, C. Stone, H. Moncayo, V. Nagaraju) presenting ATLAS: a closed-loop LLM + BM25 C++ source-code RAG fuzzer executing 24,000 ArduCopter SITL flights paired with cross-autopilot validation (PX4 v1.18.0-rc1 SIH) and physical Bitcraze Crazyflie 2.1 Brushless HITL flight transfer.',
      specs: [
        { label: 'Manuscript', value: 'Finished 16 pp AIAA SciTech Paper (ATLAS_AIAA_SciTech_Paper.pdf), Co-Author & Integration Lead' },
        { label: 'Simulation Engines', value: 'ArduCopter 4.7.1 & 4.7.2 SITL (5x real time) + PX4 v1.18.0-rc1 SIH (1,350 + 78 cross-check flights)' },
        { label: 'LLM + RAG Stack', value: 'Random, 150-Cell Coverage, GPT-4o-mini, GPT-4o, GPT-6 Luna (+/- BM25 RAG over 24 ArduPilot C++ files + 4-part memory)' },
        { label: 'Fault Catalog', value: 'Gyro/Accel/Compass/Baro/GPS/Motor/Battery/RC Link (Off, Stuck, Drift, Wrong Bias/Jump, Degraded) across 150 cells' },
        { label: 'Physical HITL', value: 'Bitcraze Crazyflie 2.1 Brushless, dual HTC Vive Lighthouse v2 (IppeCf P3P solver), controller.py (3,841L), 100 scenarios' },
        { label: 'Quantitative Yield', value: '24,000 SITL Flights -> 1,694 Reported / 1,463 Confirmed Silent Failures (87% minimal replay) in 7 Families' }
      ],
      bullets: [
        'Executed <strong>8 x 3,000 = 24,000 ArduCopter 4.7.1 SITL flights</strong> comparing Random, Coverage-Guided, and 3 LLMs with vs. without <strong>BM25 C++ source-code retrieval</strong>, yielding 1,463 confirmed silent failures (up to <strong>8x more confirmed failures</strong> vs. random/plain prompting).',
        'Clustered silent failures into <strong>7 persistent weakness families</strong> led by Baro drift (662), Baro stuck (310), Baro + motor (224), Accel 1 off (124), Motor fault (86), Gyro + 2nd fault (86), and Battery off (13) — all persisting on ArduCopter 4.7.2, while PX4 SIH exposed distinct misses (147/150 diagonal motors off, 75/75 wrong GPS median 1,188 m).',
        'Engineered physical <strong>Crazyflie 2.1 Brushless HITL</strong> arena: wrote dual-Lighthouse v2 geometry calibration (<code>IppeCf</code>), hardware kill/tilt guardrails (<code>IDLE_THRUST=18000</code>, <code>HOVER_BASE_THRUST=36500</code> / 31,800 RPM base), and risk-tiered 100-scenario execution procedures.'
      ],
      verification: [
        'Exact replay + wind-ablation controls confirmed <strong>1,463 / 1,694 silent failures</strong> (104/120 = 87% survived minimal fault-set replay); Chao2 &amp; 1st-order jackknife estimators tracked discovery saturation across all 7 families.',
        'Physical indoor Crazyflie 2.1 HITL trial (<code>result_027.json</code>) validated sim-to-real transfer (1:40 scale 0.025, 15.332 s, 300 samples, <strong>0.0316 m</strong> WP1 error, 0.3136 m mean 3D error).'
      ],
      tags: ['AIAA SciTech 2027', 'ArduCopter / PX4', 'BM25 Source RAG', 'Crazyflie 2.1', 'HTC Vive Lighthouse', 'HITL'],
      links: [
        { label: 'AIAA SciTech Paper (PDF)', url: 'portfolio-assets/docs/ATLAS_AIAA_SciTech_Paper.pdf', kind: 'primary' }
      ]
    },
    {
      id: 'res-swfta',
      section: 'research',
      categories: ['systems', 'autonomy'],
      badge: 'ISSS 2026 + AIAA',
      timeframe: '2025 - 2026',
      org: 'Q. Galen, E. Bear, C. Stone, J. Black, V. Nagaraju',
      title: 'Quantitative Software Fault Tree Analysis (SwFTA) via Activity Diagrams',
      summary: 'Finished ISSS 2026 paper (7 pp) and AIAA extension (12 pp) mapping UML/SysML Activity Diagrams into quantitative Boolean fault trees with an 8-stage framework and 10-category software fault taxonomy.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/swfta-aiaa-poster.webp',
        alt: 'Quantitative SwFTA AIAA conference research poster',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/swfta-aiaa-poster.webp', caption: 'Quantitative SwFTA AIAA technical conference poster', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/caleb-isss2026-portrait.webp', caption: 'Caleb Stone presenting at ISSS 2026 in Huntsville, AL', tone: 'dark' }
      ],
      metrics: [
        { label: 'Publications', value: 'ISSS (7p) + AIAA (12p)' },
        { label: 'Framework', value: '8-Stage Activity' },
        { label: 'Taxonomy', value: '10 Fault Classes' },
        { label: 'Diagnostic Top', value: 'Q(E1) = 0.278' }
      ],
      overview: 'Finished ISSS 2026 paper (7 pp) and AIAA extension (12 pp) formalizing Quantitative Software Fault Tree Analysis (SwFTA) from UML/SysML Activity Diagrams using an 8-stage workflow and 10-category software fault taxonomy.',
      specs: [
        { label: 'Publications', value: 'Finished ISSS 2026 Paper (7 pp), Finished AIAA Manuscript (12 pp), AIAA Technical Poster' },
        { label: '8 Workflow Stages', value: 'Scope -> Functional Model -> Execution Refinement -> Fault ID -> Tree Build -> Event Quantification -> Evaluation -> Assurance' },
        { label: '10-Class Taxonomy', value: 'Logical, Timing, Concurrency, Interface, Configuration, Data, Exception Handling, Security + 10-category execution mapping' },
        { label: '4 Descriptor Classes', value: 'Class I Execution-Threshold, Class II Activation-Conditioned, Class III Empirical ML (N_miss/N_obj), Class IV Ordinal (V_r)' },
        { label: 'Boolean Bounds', value: 'Q(E_OR) = 1 - prod(1 - Q(Ej)), Q(E_AND) = prod(Q(Ej)) + Fréchet envelope max q_j <= Q_OR <= min(1, sum q_j)' },
        { label: 'Case Study Metrics', value: 'Autonomous Emergency Braking Perception Branch: Q(E1.3) ~ 0.225, Top Q(E1) ~ 0.278, Sensitivity 0.316' }
      ],
      bullets: [
        'Derived deterministic structural mapping <code>T = (E, G)</code> translating SysML/UML Activity Diagram control-flow edges and preconditions directly into Boolean AND/OR software fault trees preserving end-to-end architectural traceability.',
        'Separated heterogeneous basic-event descriptors (timing deadline misses, concurrency scheduler races, ML dataset miss rates <code>N_miss / N_obj</code>, and ordinal evidence scores <code>V_r</code>) so engineers report conditional composite indicators rather than unverified probabilities.',
        'Formulated distribution-free <strong>unknown-dependence Fréchet bounds</strong> on <code>Q(E_OR)</code> and <code>Q(E_AND)</code> paired with local perturbation dominance ranking to isolate assurance-evidence gaps.'
      ],
      verification: [
        'Applied end-to-end across an autonomous obstacle-detection Emergency Braking perception case study (<code>E1.1–E1.4</code>, refined <code>B45–B49</code> leaf inference/scheduler events), yielding <strong>Q(E1.3) ≈ 0.225</strong> and <strong>Q(E1) ≈ 0.278</strong> (rising to 0.316 in sensitivity check).'
      ],
      tags: ['SwFTA', 'ISSS 2026', 'UML / SysML', 'Boolean Fault Trees', 'Safety Assurance', 'MIL-STD-882'],
      links: [
        { label: 'AIAA Manuscript (PDF)', url: 'portfolio-assets/docs/AIAA_Interpretable_Quantitative_SwFTA_Paper.pdf', kind: 'primary' },
        { label: 'ISSS 2026 Paper (PDF)', url: 'portfolio-assets/docs/ISSS_2026_Quantitative_SwFTA_Paper.pdf', kind: 'secondary' },
        { label: 'AIAA Poster (PDF)', url: 'portfolio-assets/docs/SwFTA_AIAA_Poster.pdf', kind: 'secondary' }
      ]
    },
    {
      id: 'res-llm-srgm',
      section: 'research',
      categories: ['systems', 'autonomy'],
      badge: 'INCOSE 2026',
      timeframe: '2025 - 2026',
      org: 'S. Jadhav, C. Stone, V. Nagaraju — RAISE Lab',
      title: 'Hybrid LLM-SRGM Framework for Safety-Critical Software Reliability',
      summary: 'Finished 13-page anonymized INCOSE 2026 submission + Discovery Day poster extracting severity, subsystem, and recurrence features from bug logs (87.3%–92.0% agreement on n = 140 defects).',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/llm-srgm-poster.webp',
        alt: 'Hybrid LLM-SRGM INCOSE 2026 conference poster',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/llm-srgm-poster.webp', caption: 'Hybrid LLM-SRGM Framework conference poster (INCOSE 2026 & Discovery Day)', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/llm-srgm-framework.webp', caption: 'End-to-end semantic defect extraction to NHPP reliability modeling pipeline', tone: 'light' }
      ],
      metrics: [
        { label: 'Submission', value: 'INCOSE 2026 (13 pp)' },
        { label: 'Agreement', value: '87.3% / 83.7% / 92.0%' },
        { label: 'Dataset', value: 'n = 140 Defects' },
        { label: 'Certainty', value: '91.8% (k > 0.8)' },
        { label: 'Durability', value: '3.2x Spread' },
        { label: 'Throughput', value: '~16 s / defect' }
      ],
      overview: 'Finished 13-page anonymized INCOSE 2026 submission + ERAU Discovery Day poster developing a Hybrid LLM-SRGM Framework that transforms unstructured engineering discrepancy narratives into structured 8-dimensional defect attributes feeding Non-Homogeneous Poisson Process (NHPP) software reliability growth models.',
      specs: [
        { label: 'Submission & Poster', value: 'Anonymized Double-Blind INCOSE 2026 Paper (13 pp) + ERAU Discovery Day / INCOSE Poster' },
        { label: 'Extracted 8D Vector', value: '[severity, subsystem, defect_class, recurrence, fix_complexity, test_phase, delta_i marker, kappa_i confidence]' },
        { label: 'Evaluation Dataset', value: 'n = 140 Synthetic 320-Hour Defects (91 minor 65%, 14 major 10%, 35 critical 25%) via NHPP F(t) = 1 - e^-bt' },
        { label: 'Agreement Scores', value: '87.3% Severity | 83.7% Subsystem | 92.0% Recurrence | 79.3% Fault-Class Consistency' },
        { label: 'Certainty & Durability', value: '91.8% High-Confidence (kappa_i > 0.8); 3.6% (Control) to 5.7–9.5% (Comm/Power/Thermal) Spread (3.2x)' },
        { label: 'Throughput & Economics', value: '~16 s/defect (~225 defects/h); 1,000 defects in 4.4 h at $10.25 API cost (500K in / 175K out)' }
      ],
      bullets: [
        'Engineered a zero-fine-tuning LLM extraction pipeline aligning unstructured test discrepancy text by unique ID/timestamp into time-ordered feature vectors with integration changepoint flags (<code>delta_i in {0, 1}</code>) and certainty gating (<code>kappa_i in [0, 1]</code>).',
        'Integrated extracted semantic severity and subsystem tags with classical NHPP reliability growth trajectories without distorting the underlying statistical mean-value equations.',
        'Quantified cross-subsystem debugging durability (3.2x recurrence spread from unit-tested Control 3.6% to coupled Comm/Power/Thermal 5.7–9.5%) and modeled campaign scaling economics across 100–1,000 defects.'
      ],
      verification: [
        'Benchmarked on <strong>n = 140</strong> 320-hour NHPP defects achieving <strong>87.3%</strong> severity, <strong>83.7%</strong> subsystem, and <strong>92.0%</strong> recurrence agreement (<code>kappa_i &gt; 0.8</code> on 91.8% of defects) at ~225 defects/h.'
      ],
      tags: ['INCOSE 2026', 'NHPP SRGM', 'LLM Feature Extraction', 'Reliability Engineering', 'Anomaly Logs'],
      links: [
        { label: 'INCOSE 2026 Paper (PDF)', url: 'portfolio-assets/docs/INCOSE_2026_Hybrid_LLM_SRGM_Paper.pdf', kind: 'primary' },
        { label: 'INCOSE Poster (PDF)', url: 'portfolio-assets/docs/Hybrid_LLM_SRGM_Poster.pdf', kind: 'secondary' }
      ]
    },
    {
      id: 'res-cog-dyn',
      section: 'research',
      categories: ['autonomy', 'systems'],
      badge: 'ISSS 2026 • PUBLISHED',
      timeframe: '2026 PUBLISHED',
      org: 'Jadhav, La Placa, Stone, Raja, Ochoa, Nagaraju — ISSS 2026',
      title: 'Compound Prompt Constraints in LLM Code Generation (ISSS 2026)',
      summary: '9-page full-factorial ISSS 2026 study running 22,140 HumanEval+ evaluations across 5 models & 27 prompt conditions — proving super-additive Pass@1 loss up to -12.2 pp.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/cog-dynamics-framework.webp',
        alt: 'Experimental design diagram for ISSS 2026 compound prompt constraints LLM code-generation study',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/cog-dynamics-framework.webp', caption: 'Full-factorial 3x3x3 compound prompt constraint experimental harness (Format x Persona x Urgency)', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/raise-lab-isss2026-team.webp', caption: 'RAISE Lab collaborative research team at ISSS 2026', tone: 'dark' }
      ],
      metrics: [
        { label: 'Venue & Paper', value: 'ISSS 2026 (9 pp)' },
        { label: 'Evaluation Scale', value: '22,140 Code Evals' },
        { label: 'Models Tested', value: '5 OpenAI Models' },
        { label: 'Factorial Matrix', value: '3 x 3 x 3 = 27 Cond' },
        { label: 'Peak Degradation', value: '-12.2 pp (4o-mini)' },
        { label: 'Reasoning Lift', value: '+28.8 pp (o3-mini)' }
      ],
      overview: 'Published 9-page ISSS 2026 factorial investigation (Jadhav, La Placa, Stone, Raja, Ochoa, Nagaraju — ERAU & Purdue Univ. Northwest) running 22,140 greedy-decoded evaluations across 164 HumanEval+ coding tasks, 5 OpenAI models, and 27 stacked Format x Persona x Urgency prompt conditions, exposing architecture-dependent super-additive reliability collapse via McNemar hypothesis testing.',
      specs: [
        { label: 'Paper & Venues', value: 'ISSS 2026 Published Paper (9 pp, ISSS_2026_Cognitive_Dynamics_Paper.pdf); ERAU & Purdue Northwest' },
        { label: 'Factorial Design', value: '3 x 3 x 3 = 27 Prompt Conditions: Format (None/JSON/XML) x Persona (None/Generic/15-Yr Python Dev) x Urgency (None/Moderate/Outage)' },
        { label: 'Evaluation Scope', value: '164 HumanEval+ Problems x 27 Conditions x 5 Models = 22,140 Greedy-Decoded Evaluations' },
        { label: 'Models Benchmarked', value: 'GPT-4o-mini, GPT-4o, GPT-4.1-mini, GPT-4.1, and Reasoning Model o3-mini' },
        { label: 'Degradation Findings', value: 'GPT-4o-mini Mean Interaction -7.6 pp (8/8 Triple Combos Super-Additive, Peak -12.2 pp); GPT-4o Mean -4.2 pp (5/8)' },
        { label: 'Statistical Testing', value: 'Exact McNemar Paired Tests (OR = 3.7, p = 0.004 on 4o-mini JSON; OR = 6.25, p < 0.001 on 4o) & 95% CIs' }
      ],
      bullets: [
        'Executed a complete <strong>22,140-evaluation factorial campaign</strong> crossing <strong>27 stacked prompt conditions</strong> (Format &times; Persona &times; Urgency) across <code>164 HumanEval+</code> benchmarks and <code>5</code> OpenAI model architectures.',
        'Demonstrated severe architecture-dependent super-additive failure in the GPT-4o family: <code>GPT-4o-mini</code> (<code>73.8%</code> baseline) suffered a peak <strong>-12.2 pp</strong> collapse under JSON + expert persona + moderate urgency (<code>85.4%</code> additive vs. <code>73.2%</code> actual), with JSON consistently underperforming XML.',
        'Contrasted generational resilience: <code>GPT-4.1</code> (<code>89.6%</code> baseline, <code>+1.3 pp</code>) resisted interaction collapse, whereas reasoning model <code>o3-mini</code> climbed from <code>59.8%</code> unconstrained baseline to <strong>88.6%</strong> (JSON) / <strong>88.1%</strong> (XML) and up to <strong>91.5%</strong> peak.'
      ],
      verification: [
        'Confirmed statistical significance across all <strong>22,140 HumanEval+ evaluations</strong> via McNemar paired tests (<code>OR = 3.7, p = 0.004</code> for <code>4o-mini</code>; <code>OR = 6.25, p &lt; 0.001</code> for <code>4o</code>).',
        'Published finished 9-page ISSS 2026 conference proceedings paper and reproducibility evaluation suite inside <code>github.com/calebstone15/SystemsResearch</code>.'
      ],
      tags: ['ISSS 2026', 'Empirical AI Safety', 'Factorial DOE', 'HumanEval+', 'McNemar Stats', 'Python Harness'],
      links: [
        { label: 'ISSS 2026 Paper (PDF)', url: 'portfolio-assets/docs/ISSS_2026_Cognitive_Dynamics_Paper.pdf', kind: 'primary' },
        { label: 'GitHub SystemsResearch', url: 'https://github.com/calebstone15/SystemsResearch', kind: 'secondary' }
      ]
    },
    {
      id: 'res-reu',
      section: 'research',
      categories: ['autonomy', 'systems'],
      badge: 'NSF REU 2026',
      timeframe: 'APR 2026',
      org: 'C. Stone, J. Yawkey, A. Piccinin, B. Broderick — ERAU NSF REU',
      title: 'Airport sUAS Encounter Risk Pipeline (6,730 FAA Records + NetLogo ABM)',
      summary: 'Coupled LLM extraction across 6,730 FAA sUAS sightings (2019-2025) with balanced-bagged Random Forest severity classification (ROC AUC 0.90) and 3D-altitude NetLogo ABM.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/reu-drone-sim-analysis.webp',
        alt: 'NSF REU airport sUAS encounter simulation sensitivity and severity classification plots',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/reu-drone-sim-analysis.webp', caption: 'Monte Carlo NetLogo 7.0.4 terminal-airspace encounter analysis across 6,730 FAA records', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/runway-state-diagram.webp', caption: 'Terminal airspace & runway agent state transition logic diagram', tone: 'light' }
      ],
      metrics: [
        { label: 'Dataset', value: '6,730 FAA Logs' },
        { label: 'Severity AUC', value: '0.90 ROC' },
        { label: 'Phase Model', value: '66% XGBoost' },
        { label: 'NMAC Target', value: '14% Empirical Rate' },
        { label: 'ABM Subset', value: '199 Clean Events' },
        { label: 'ABM Engine', value: 'NetLogo 7.0.4' }
      ],
      overview: 'Completed NSF REU Capstone Research (Stone, Yawkey, Piccinin, Broderick, Apr 2026) coupling automated LLM narrative extraction across 6,730 FAA sUAS sighting reports (Oct 2019–Dec 2025) with imbalanced severity ML classifiers and a 3D-altitude NetLogo 7.0.4 Agent-Based Model reproducing terminal-airspace Near Midair Collision (NMAC) dynamics.',
      specs: [
        { label: 'Dataset Scope', value: '6,730 FAA sUAS Sightings near Airports (Oct 2019 – Dec 2025), Deeply Cleaned 199-Event ABM Subset' },
        { label: 'Extraction Engine', value: 'Dify LLM Deterministic JSON Pipeline (REU_sum26_dify.ipynb, derived elevation_difference)' },
        { label: 'ML Classifiers', value: 'Balanced-Bagged Random Forest (Binary Severity: ROC AUC = 0.90) + XGBoost (Phase: 66% Accuracy)' },
        { label: 'ABM Engine', value: 'NetLogo 7.0.4 (UAS_Encounter_2D.nlogo / 3D Altitude Upgrade) calibrated via BehaviorSpace sweeps' },
        { label: 'NMAC Criteria', value: 'Geometric NMAC (<= 500 ft lateral AND <= 100 ft vertical) vs. Lateral-Only NMAC (<= 500 ft)' },
        { label: 'Empirical Baseline', value: 'Reproduces real-world 14% Geometric NMAC rate (Landing 44.5%, Cruise 18.7%)' }
      ],
      bullets: [
        'Built an automated <strong>Dify LLM ETL pipeline</strong> (<code>REU_sum26_dify.ipynb</code>) normalizing 6,730 messy free-text FAA sighting narratives into deterministic schemas and derived <code>elevation_difference</code> to flag empirical Geometric NMACs (&lt;= 500 ft lateral and &lt;= 100 ft vertical).',
        'Trained balanced-bagged <strong>Random Forest</strong> (<strong>ROC AUC = 0.90</strong>) predicting pilot evasive action (top features: contributing aircraft problems, aircraft elevation, cruise phase, month) and <strong>XGBoost</strong> multiclass flight-phase classification (66% accuracy).',
        'Parameterized and BehaviorSpace-calibrated a <strong>3D-altitude NetLogo 7.0.4 ABM</strong> from empirical phase proportions (44.5% Landing, 18.7% Cruise), afternoon Class D traffic spikes, and empirical altitude distributions.'
      ],
      verification: [
        'Reproduced the empirical <strong>0.14 (14%) Geometric NMAC rate</strong> across calibrated NetLogo BehaviorSpace parameter sweeps.',
        'Quantified non-linear Geometric NMAC escalation when doubling sUAS spawn rates on ILS glideslopes and proved why 2D-only lateral models systematically overpredict 3D NMAC collision risk.'
      ],
      tags: ['NSF REU', 'NetLogo 7.0.4', 'Random Forest (0.90 AUC)', 'XGBoost', 'FAA Airspace Data', 'LLM ETL'],
      links: []
    },

    /* ---------------- SECTION 4: CLASSWORK ---------------- */
    {
      id: 'cls-sp490',
      section: 'classwork',
      categories: ['propulsion', 'systems'],
      badge: 'SP 490 CAPSTONE',
      timeframe: 'SPRING 2026',
      org: 'ERAU Space Operations Senior Capstone',
      title: 'Distributed ERPL Launch Control Center (LCC) Console Simulator',
      summary: '8-console Python Tkinter + live Matplotlib simulator executing 35 timed propellant load, -297°F LOX chilldown, anomaly recovery, ignition, and N2 purge commands.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/draco-positions-pid.webp',
        alt: 'ERPL Draco P&ID annotated with the 8 SP-490 Launch Control Center operator boundaries',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/draco-positions-pid.webp', caption: '8 LCC operator station boundaries mapped directly onto the ERPL Draco P&ID', tone: 'light' }
      ],
      metrics: [
        { label: 'Consoles', value: '8 Operator Nodes' },
        { label: 'Codebase', value: '5,264 Python LOC' },
        { label: 'Sequence', value: '35 LCC Commands' },
        { label: 'Cryo Target', value: '-297°F LOX Chill' },
        { label: 'Chamber Steady', value: '350 psi / 2,285°F' },
        { label: 'Target Loads', value: '25 LOX / 20 Fuel lbf' }
      ],
      overview: 'Senior Space Operations Capstone (Spring 2026) building a distributed 8-operator ERPL Launch Control Center (LCC) simulator in Python/Tkinter + Matplotlib. Models full liquid rocket static-fire procedures (35 sequential commands, propellant mass transfers, cryogenic LOX chilldown, injected faulted-chill anomaly recovery, ignition, and GN2 purge) mapped directly onto the Draco P&ID.',
      specs: [
        { label: 'Codebase Size', value: '5,264 Python LOC across main.py (119L) + 8 Consoles (Engine 532L, F1/F2 Up/Tank/Down, VisualOps 423L)' },
        { label: 'Target Propellant Loads', value: 'tank_parameters.xlsx: F1 LOX Tank = 25 lbf, F2 Fuel Tank = 20 lbf' },
        { label: 'Regulator Setpoints', value: 'R1 = 1,000 psi, R2 = 975 psi, R3 = 200 psi (slider cap 2,000 psi)' },
        { label: 'Cryo & Burn Regimes', value: '-297°F LOX chill (<250°F simulated anomaly fault), 350 psi chamber, 2,285°F peak' },
        { label: 'Test Timeline', value: '35 Timed LCC Commands (T-11:30 GO/NO-GO through +0:50 Safe/Purge) partitioned 4/4/4/5/4/6/4/4' },
        { label: 'UI & Telemetry', value: 'Dark P&ID Canvas, Valve States (V_OFF/V_ON/V_WARN/V_CLOSE), Live Matplotlib Plots' }
      ],
      bullets: [
        'Engineered <strong>8 independent operator stations</strong> (<code>F1/F2 Upstream</code>, <code>F1/F2 Tank</code>, <code>F1/F2 Downstream</code>, <code>Engine</code>, <code>VisualOps</code>) launched from unified orchestrator <code>main.py</code>, matching physical test-stand station boundaries on the Draco P&amp;ID.',
        'Modeled coupled exponential thermal/pressure transients across pressurization, <strong>-297°F LOX chilldown</strong>, injected <strong>off-nominal &lt;250°F chill anomaly recovery</strong>, Pyrograin + <code>PB4/PB8</code> main run valves (<strong>350 psi, 2,285°F burn</strong>), and post-fire N2 purge.',
        'Enforced step-gated console command counts (<strong>4/4/4/5/4/6/4/4 = 35 commands</strong>) and live regulator validation sliders mirroring ERPL Launch Commit Criteria.'
      ],
      verification: [
        'Verified full <strong>35-command timeline walkthrough</strong> (<code>T-11:30</code> to <code>+0:50</code>) including injected <code>&lt;250°F</code> chilldown fault and operator re-chill recovery inside the 8-console GUI suite.',
        'Live-tested interactive slider/setpoint validation (<code>R1=1,000</code>, <code>R2=975</code>, <code>R3=200 psi</code>) and <code>tank_parameters.xlsx</code> weight targets (<code>25 lbf</code> LOX / <code>20 lbf</code> Fuel).'
      ],
      tags: ['Python / Tkinter', 'Matplotlib Telemetry', 'P&ID Valve Logic', 'Launch Commit Criteria', 'Cryo Chilldown'],
      links: [
        { label: 'GitHub SP-490-Capstone', url: 'https://github.com/calebstone15/SP-490-Capstone', kind: 'primary' }
      ]
    },
    {
      id: 'cls-syse500',
      section: 'classwork',
      categories: ['systems'],
      badge: 'SYSE 500 (GRAD)',
      timeframe: 'FALL 2025 / 2026',
      org: 'Graduate Fundamentals of Systems Engineering',
      title: 'Formula SAE System Definition & Functional Architectures',
      summary: 'Authored Phase 2 System Definition Report enforcing chassis stiffness, mass budgets, aero CLA/L/D, and >=72 RWHP requirements plus IDEF0 & boundary architectures.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/syse500-fsae-idef0.webp',
        alt: 'SYSE 500 Formula SAE Phase 2 IDEF0 functional architecture diagram',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/syse500-fsae-idef0.webp', caption: 'Formula SAE Phase 2 IDEF0 functional decomposition diagram', tone: 'light' }
      ],
      metrics: [
        { label: 'Powertrain', value: '<= 215 lbs / >= 72 RWHP' },
        { label: 'Frame Mass', value: '<= 77 lbs' },
        { label: 'Aero Goals', value: 'CLA >= 3.1 | L/D >= 2.9' },
        { label: 'Chassis Stiffness', value: '> 2,359 N-m/deg' },
        { label: 'Suspension ARBs', value: '145 F / 90 R N-m/deg' },
        { label: 'Specs Authored', value: '31+ Shall Reqs' }
      ],
      overview: 'Graduate Fundamentals of Systems Engineering co-authoring the Formula SAE Phase 2 System Definition Report (Levi Blumer & Caleb Stone, 300 paragraphs) alongside formal IDEF0 functional and environmental boundary models for an Oasis-class LNG cruise ship (Utopia of the Seas), Elevator, and Lightbulb case studies.',
      specs: [
        { label: 'Subsystem Mass Caps', value: 'Powertrain <= 215 lbs, Frame <= 77 lbs, Suspension <= 71.5 lbs, Aero <= 36.5 lbs, Driver <= 33.5 lbs, Electronics <= 16.5 lbs' },
        { label: 'Budget Allocation Shares', value: 'Aero 26%, Powertrain 24%, Suspension 22%, Driver 12%, Electronics 9%, Frame 7% (= 100%)' },
        { label: 'Aero & Chassis KPIs', value: 'Cornering CLA >= 3.1, Endurance L/D >= 2.9, Torsional Stiffness > 2,359 N-m/deg' },
        { label: 'Suspension & Powertrain', value: 'Front ARB 145 N-m/deg, Rear ARB 90 N-m/deg (+/-25% in 5% steps), Seat Deflection < 1 in, >= 72 RWHP' },
        { label: 'Modeling Methods', value: 'INCOSE Stakeholder -> System Requirements Traceability, IDEF0 A0 Context Diagrams, ENV Boundary Isolation' },
        { label: 'Case Studies Modeled', value: 'Formula SAE Race Car, Oasis-Class LNG Cruise Ship (Utopia of the Seas), Commercial Elevator, Lightbulb' }
      ],
      bullets: [
        'Decomposed stakeholder driving, cost, and safety objectives into <strong>31+ quantitative FSAE &ldquo;Shall&rdquo; specifications</strong> with explicit subteam mass caps and budget percentages summing to <code>100%</code>.',
        'Specified CFD verification requirements (<code>Req 30&ndash;31</code>) tying ride-height deflection sensitivity directly to <strong>CLA &gt;= 3.1</strong> and <strong>L/D &gt;= 2.9</strong> aerodynamic gates.',
        'Built formal <strong>IDEF0 A0 context diagrams</strong>, physical-versus-functional decompositions, and environmental boundary (<code>ENV</code>) models across multi-domain complex systems (<em>Utopia of the Seas</em>, Elevator, Lightbulb).'
      ],
      verification: [
        'Submitted complete <strong>Phase 2 System Definition Report</strong> (Blumer &amp; Stone, 300 paragraphs) closing all 6 subteam mass caps and 100% cost allocations.',
        'Delivered 8-page <em>Utopia of the Seas</em> IDEF0 architecture package isolating system, control, mechanism, and environmental boundaries.'
      ],
      tags: ['INCOSE SE', 'IDEF0', 'Requirements Allocation', 'Mass Budgets', 'System Boundaries'],
      links: []
    },
    {
      id: 'cls-sys530',
      section: 'classwork',
      categories: ['systems', 'avionics'],
      badge: 'SYS 530 (GRAD)',
      timeframe: 'FALL 2025 / 2026',
      org: 'System Safety Engineering & Management',
      title: 'RideSafe Integrated Transit Safety System & Statechart Spec',
      summary: 'Full-stack Python HTTP/HTTPS + SSE dispatch backend, native Swift WKWebView macOS Dispatch app, passenger web client, and formal Statechart / DFD / Class Model architecture.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/sys530-ridesafe-prototype.webp',
        alt: 'RideSafe integrated transit dispatch and passenger safety prototype UI screens',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/sys530-ridesafe-prototype.webp', caption: 'RideSafe multi-interface dispatch and passenger prototype screens', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/sys530-statechart-overview.webp', caption: 'Formal Statechart behavioral safety model overview', tone: 'light' }
      ],
      metrics: [
        { label: 'Backend Server', value: '1,531L Python SSE' },
        { label: 'Native macOS', value: '206L Swift WKWebView' },
        { label: 'Client Surfaces', value: '1,877L Mac / 2,920L iOS' },
        { label: 'UML Domain', value: '14-Class + L0/L1 DFD' },
        { label: 'Statecharts', value: '4 Composite States' },
        { label: 'Deliverable', value: '17-Page Safety Spec' }
      ],
      overview: 'Graduate System Safety Engineering capstone (RideSafe: Integrated Transit Operations, Safety, and Rider Information System) pairing a full-stack Python HTTP/HTTPS + SSE dispatch server and native Swift WKWebView macOS app with formal Use Case, Level 0/1 DFD, 14-class UML Class, and 4-composite-state Statechart behavioral safety models.',
      specs: [
        { label: 'Backend Engine', value: 'server.py (1,531 lines Python, ThreadingHTTPServer, HTTPS TLS, SSE /api/stream, JSON DB + tile proxy)' },
        { label: 'Native & Web Surfaces', value: 'MacOSApp.swift (206L Cocoa/WebKit launching server + 410x844 iPhone panel), macos.html (1,877L), iphone.html (2,920L), sw.js (34L)' },
        { label: 'Key REST & Safety APIs', value: '/api/reports, /api/reports/<id>/update, /api/users/{suspend,unsuspend,dismiss}, /api/transit/update, /api/location/ping' },
        { label: 'Formal UML Models', value: 'Actors (Public User, Employee, Admin/Dispatch, Emergency Services), 14-Class Domain Model, Level 0/1 DFDs' },
        { label: '4 Composite Statecharts', value: 'Monitoring Transit Network, Processing Incoming Report (Panic fast-track), Classifying/Routing Incident, Responding/Communicating' },
        { label: 'Deliverable Package', value: '17-Page Interactive Prototype Report + Complete Statechart & Architecture Spec (Stone, Nguyen, Barcenas)' }
      ],
      bullets: [
        'Implemented real-time bidirectional dispatch and passenger telemetry over <code>text/event-stream</code> (<strong>SSE</strong>) with thread-safe <code>STATE_LOCK</code> JSON persistence, media upload capture, and Haversine geofenced distance filtering.',
        'Engineered safety governance in code and formal spec: one-tap <strong>Emergency Panic Button</strong> bypassing standard form fields, duplicate report clustering, low-confidence dispatcher reclassification, and automatic Emergency Services routing on life-safety hazards.',
        'Authored complete UML safety specifications modeling concurrent fork/join threads (parallel <em>Field Response Execution</em> and <em>PII-stripped Public Safety Alert Broadcast</em>) plus safe shutdown interlocks barring exit while emergencies remain active.'
      ],
      verification: [
        'Verified live <strong>HTTP (8480) / HTTPS (8443) + SSE</strong> real-time synchronization between the compiled <code>RideSafe Employee.app</code> (<code>MacOSApp.swift</code>) desktop console and side-by-side <code>410&times;844</code> iPhone passenger view.',
        'Delivered complete Use Case, Level 0/1 DFD, 14-class UML, and 4-composite Statechart safety specification approved by Guidance Team &amp; Customer stakeholder.'
      ],
      tags: ['Statecharts', 'Python SSE', 'Swift macOS', 'Use Case / DFD', 'System Safety'],
      links: []
    },
    {
      id: 'cls-ma360',
      section: 'classwork',
      categories: ['systems', 'autonomy'],
      badge: 'MA 360',
      timeframe: 'SPRING 2026',
      org: 'C. Stone, J. Yawkey, B. Badraoui — Applied Math / Modeling',
      title: 'Agent-Based Runway Incursion Kinematic Simulation',
      summary: '35-run NetLogo 6.x kinematic ABM (50 ft/patch, Stroeve A-E conflict tiers) showing intersecting runways raise incursions 26.6% and 30° taxiway exits cut incursions 14.1%.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/runway-incursion-sim-analysis.webp',
        alt: 'MA 360 runway incursion Monte Carlo kinematic simulation statistical charts',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/runway-incursion-sim-analysis.webp', caption: 'Intersecting vs Parallel runway & 30° vs 45° taxiway exit incursion statistics', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/runway-state-diagram.webp', caption: 'Aircraft ground & approach kinematic state machine diagram', tone: 'light' }
      ],
      metrics: [
        { label: 'Monte Carlo Runs', value: '35 Controlled Runs' },
        { label: 'Spatial Scale', value: '50 ft / patch' },
        { label: 'Layout Delta', value: '+26.6% Intersecting' },
        { label: 'Exit Geometry', value: '-14.1% @ 30 deg' },
        { label: 'Cat C Exits', value: '-40% @ 30 deg' },
        { label: 'Cat A Tightened', value: 'd < 25 ft (0 False)' }
      ],
      overview: 'Mathematical Modeling & Simulation research project (C. Stone, J. Yawkey, B. Badraoui) building a Newtonian kinematic airport runway incursion ABM in NetLogo 6.x (50 ft/patch, tightened Stroeve A-E conflict tiers) evaluating intersecting vs. parallel runways, high-speed 30° vs. 45° taxiway exits, and traffic arrival scaling across 35 Monte Carlo runs.',
      specs: [
        { label: 'NetLogo Simulation Suite', value: '650-line calibrated ABM + 596-line & 620-line geometry variants in NetLogo 6.x' },
        { label: 'Spatial & Traffic Calibration', value: '50 ft/patch grid, Active-Aircraft Runway Cap = 6, Crossing Freq = 10, Wind = 0' },
        { label: 'Stroeve Severity Tiers', value: 'Cat A (<25 ft, tightened from 50 ft), Cat B (25-100 ft), Cat C (100-200 ft), Cat D (200-500 ft), Cat E (>=500 ft)' },
        { label: 'Exp 1 (Runway Geometry)', value: 'Intersecting (20.0 mean: 1.4 Cat C, 18.6 Cat D) vs Parallel (15.8: 1.8 Cat C, 14.0 Cat D) -> +26.6% Total (+33% Cat D)' },
        { label: 'Exp 2 (Exit Angle)', value: '30° High-Speed (14.6 mean: 0.8 Cat B, 1.8 Cat C, 12.0 Cat D) vs 45° Standard (17.0: 0 Cat B, 3.0 Cat C, 14.0 Cat D) -> -14.1% (-40% Cat C)' },
        { label: 'Exp 3 (Traffic Scaling)', value: 'Light 150s arrival (9.2), Medium 90s (18.6, +102%), Heavy 45s (29.6, +59% under 6-acft cap)' }
      ],
      bullets: [
        'Implemented explicit <strong>Newtonian acceleration, landing roll, deceleration, and taxiway turn-off kinematics</strong> in NetLogo 6.x (<code>650</code> lines), tightening Stroeve Category A to <code>&lt; 25 ft</code> to isolate true overlap from near-misses.',
        'Demonstrated in <strong>Experiment 1</strong> (<em>n=5/condition</em>) that intersecting runways elevate total conflicts <strong>+26.6%</strong> (<code>20.0</code> vs. <code>15.8</code>) driven by <code>+33%</code> peripheral Category D cross-runway exposure.',
        'Quantified in <strong>Experiment 2 &amp; 3</strong> that <code>30°</code> high-speed exits cut moderate Category C conflicts by <strong>40%</strong>, while halving spawn intervals produces superlinear-then-capacity-damped scaling (<code>+102%</code> to <code>+59%</code> under the 6-aircraft runway cap).'
      ],
      verification: [
        'Executed <strong>35 controlled NetLogo Monte Carlo runs</strong> confirming zero artificial Category A false alarms (<code>0.0</code> across all 35 runs).',
        'Published full 8-page statistical methodology, ANOVA/mean comparison, and state-machine report (<em>MA 360 Final Project Report</em>).'
      ],
      tags: ['NetLogo 6.x', 'Newtonian Kinematics', 'Monte Carlo', 'Stroeve A-E Tiers', 'Statistical Analysis'],
      links: []
    },
    {
      id: 'cls-sp410',
      section: 'classwork',
      categories: ['propulsion', 'systems'],
      badge: 'SP 410 • FALCON HEAVY',
      timeframe: 'FALL 2025',
      org: 'Space Operations Planning & Analysis (C. Stone & J. Wakefield)',
      title: 'VAPFA: Venus Atmospheric Perpetual Flying Aircraft',
      summary: 'Solar Venus probe cruising ~60 km (>=250 mph, 10+ days) launched on SpaceX Falcon Heavy Expendable from KSC LC-39A with boost-stage LVO relay -> NASA DSN ($1.23B lifecycle).',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/vapfa-mission-architecture.webp',
        alt: 'VAPFA Venus atmospheric flight mission architecture showing Falcon Heavy LC-39A launch and LVO relay',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/vapfa-mission-architecture.webp', caption: 'VAPFA mission CONOPS: Falcon Heavy Expendable -> LVO Relay -> NASA DSN', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/vapfa-risk-matrix.webp', caption: '5x5 Mission Operations Risk Matrix & EOL deep-cloud dive mitigation', tone: 'light' }
      ],
      metrics: [
        { label: 'Launch Vehicle', value: 'Falcon Heavy (Exp)' },
        { label: 'Pad', value: 'KSC LC-39A' },
        { label: 'Cruise Envelope', value: '~60 km / >= 250 mph' },
        { label: 'Endurance', value: '10+ Days Continuous' },
        { label: 'Total Budget', value: '$1.23B ($270M Margin)' },
        { label: 'Relay Architecture', value: 'Boost LVO -> DSN' }
      ],
      overview: 'Space Operations Planning & Analysis mission architecture (Caleb Stone & Joe Wakefield, Dec 2025) for VAPFA (Venus Atmospheric Perpetual Flying Aircraft): a solar-powered atmospheric flyer cruising ~60 km in Venus\'s upper cloud deck for 10+ days, launched on SpaceX Falcon Heavy (Expendable) from KSC LC-39A with boost-stage Low Venus Orbit telecom relay to NASA DSN.',
      specs: [
        { label: 'Launch Vehicle & Pad', value: 'SpaceX Falcon Heavy (Expendable) from Kennedy Space Center LC-39A' },
        { label: 'Flight Envelope', value: 'Venus Upper Cloud Deck ~60 km Altitude, Cruise >= 250 mph, Duration >= 10 Days Continuous' },
        { label: 'Program Cost Breakdown', value: '$130M Launch Vehicle + $1.10B Theoretical First Unit (TFU) = $1.23B Total (< $1.5B Cap)' },
        { label: 'Comms Architecture', value: 'Converted Trans-Venus Boost Stage in Low Venus Orbit (LVO) Relay -> NASA Deep Space Network (DSN)' },
        { label: '5x5 Risk Register', value: 'Launch Failure, Relay Loss, Airframe/Flight Failure, Comms Blackout, Solar Array Degradation' },
        { label: 'End-of-Life Disposal', value: 'Controlled Deep-Cloud Dive for Progressive Lower-Atmosphere Sampling Until Crush/Thermal Loss' }
      ],
      bullets: [
        'Selected <strong>SpaceX Falcon Heavy (Expendable)</strong> from <code>KSC LC-39A</code> to satisfy trans-Venus injection <code>C3</code> energy within the strict <code>$1.5B</code> program cap (<strong>$1.23B total</strong> = <code>$130M</code> LV + <code>$1.10B</code> TFU).',
        'Repurposed the trans-Venus injection boost stage as an orbiting <strong>Low Venus Orbit (LVO) telecom relay</strong>, eliminating a separate dedicated orbiter launch while sustaining continuous <strong>NASA DSN</strong> science downlink.',
        'Authored flight ops timelines, <code>5&times;5</code> anomaly mitigation matrices, and a science-yielding <strong>EOL deep-cloud dive</strong> profiling sub-60 km pressure/thermal gradients.'
      ],
      verification: [
        'Closed C3 launch energy, LVO relay geometry, <code>$1.23B</code> lifecycle budget (<strong>$270M management reserve</strong> under <code>$1.5B</code> cap), and <code>10</code>-day flight ops in 12-slide SP 410 defense.'
      ],
      tags: ['Falcon Heavy', 'KSC LC-39A', 'Mission Planning', '5x5 Risk Matrix', 'NASA DSN', 'Lifecycle Cost'],
      links: []
    },
    {
      id: 'cls-egr101',
      section: 'classwork',
      categories: ['systems'],
      badge: 'EGR 101 • 1ST PLACE',
      timeframe: 'SPRING 2023',
      org: 'Intro to Engineering Design Lab',
      title: '1st-Place Autonomous / Gravity-Feed Ball Launcher Hardware CAD',
      summary: 'Led 4-engineer team to 1st Place with a CAD-modeled, 3D-printed mechanical dog tennis ball launcher (22"x23"x22" envelope, 6-10 ft repeatable launch range, <$70 BOM).',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/egr101-ball-launcher-cad.webp',
        alt: 'EGR 101 3D CAD rendering of mechanical ball launcher prototype',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/egr101-ball-launcher-cad.webp', caption: 'Mechanical Ball Launcher 3D CAD assembly (Autodesk Inventor, 1st Place Design)', tone: 'dark' }
      ],
      metrics: [
        { label: 'Competition Award', value: '1st Place Overall' },
        { label: 'Compact Footprint', value: '22" H x 23" L x 22" W' },
        { label: 'Launch Distance', value: '6 - 10 ft Range' },
        { label: 'Unit Build Cost', value: '< $70 BOM Cap' },
        { label: 'CAD & Tooling', value: 'Autodesk Inventor + 3D Print' }
      ],
      overview: 'Introductory Engineering Design Lab hardware capstone (Section 3 Team 4, Spring 2023) where our 4-engineer team won 1st Place designing, CAD-modeling, and 3D-printing an ergonomic mechanical dog tennis ball launcher under strict volumetric, throw-distance, safety, and <$70 budget constraints.',
      specs: [
        { label: 'Competition Result', value: '1st Place Hardware Prototype Winner (Team 4, Spring 2023)' },
        { label: 'Geometric Envelope', value: '22" H x 23" L x 22" W Compact Footprint (Well Inside 4x4x4 ft Cap)' },
        { label: 'Functional Performance', value: 'Repeatable 6-10 ft Tennis Ball Launch Range via Gravity-Funnel Reload' },
        { label: 'Hardware BOM Cap', value: '< $70 Total Prototype Build Budget (Additive Manufacturing + Hardware)' },
        { label: 'Safety & Hazard Control', value: 'Filleted Corners, Pinch-Point Guarding & Foam Impact Buffering' },
        { label: 'CAD & Documentation', value: 'Autodesk Inventor Parametric Assemblies, STL Fabrication & 14-Slide PDR' }
      ],
      bullets: [
        'Authored the gravity-funnel mechanical launch architecture (<code>14</code>-slide Preliminary Design Review) optimizing reload ergonomics, structural stiffness, and compact <code>22&Prime;&times;23&Prime;&times;22&Prime;</code> packaging inside the <code>4&times;4&times;4 ft</code> design envelope.',
        'Engineered full multi-part solid assemblies in <strong>Autodesk Inventor</strong> and mitigated sharp-edge and pinch-point hazards using radiused fillets and protective foam shrouding prior to additive fabrication.',
        'Built and iteratively calibrated the 3D-printed hardware prototype under the strict <code>$70</code> BOM budget to achieve repeatable <strong>6&ndash;10 ft launch trajectories</strong> and take <strong>1st Place</strong> in competition trials.'
      ],
      verification: [
        'Awarded <strong>1st Place</strong> in hardware evaluation trials validating consistent <code>6&ndash;10 ft</code> throws, pinch-point safety compliance, and <code>&lt; $70</code> total build cost.'
      ],
      tags: ['Autodesk Inventor', '3D Printing', 'Mechanical Design', 'Rapid Prototyping', '1st Place Award'],
      links: []
    }
  ];

  /* ========================================================================
     State & DOM References
     ======================================================================== */

  var state = {
    filter: 'all',
    query: '',
    theaterTab: 'youtube',
    theaterIndex: 0,
    activeProject: null,
    lastFocusEl: null
  };

  var grids = {
    work: document.getElementById('grid-work'),
    erpl: document.getElementById('grid-erpl'),
    research: document.getElementById('grid-research'),
    classwork: document.getElementById('grid-classwork')
  };

  var searchInput = document.getElementById('projectSearch');
  var searchClear = document.getElementById('searchClear');
  var resultsCount = document.getElementById('resultsCount');
  var emptyBanner = document.getElementById('emptyFilterBanner');
  var resetFiltersBtn = document.getElementById('resetFiltersBtn');
  var mobileMenuBtn = document.getElementById('mobileMenuBtn');
  var portfolioNav = document.getElementById('portfolioNav');

  var theaterViewport = document.getElementById('theaterViewport');
  var theaterCaptionTitle = document.getElementById('theaterCaptionTitle');
  var theaterCaptionMeta = document.getElementById('theaterCaptionMeta');
  var theaterExternalLink = document.getElementById('theaterExternalLink');
  var theaterPlaylist = document.getElementById('theaterPlaylist');

  var deepDiveModal = document.getElementById('deepDiveModal');
  var modalCloseBtn = document.getElementById('modalCloseBtn');
  var modalKicker = document.getElementById('modalKicker');
  var modalTitle = document.getElementById('modalTitle');
  var modalSubtitle = document.getElementById('modalSubtitle');
  var modalHeroMedia = document.getElementById('modalHeroMedia');
  var modalHeroCaption = document.getElementById('modalHeroCaption');
  var modalThumbs = document.getElementById('modalThumbs');
  var deepDiveDialog = document.getElementById('deepDiveDialog');
  var modalMetrics = document.getElementById('modalMetrics');
  var modalOverview = document.getElementById('modalOverview');
  var modalSpecsSection = document.getElementById('modalSpecsSection');
  var modalSpecsGrid = document.getElementById('modalSpecsGrid');
  var modalBullets = document.getElementById('modalBullets');
  var modalVerificationSection = document.getElementById('modalVerificationSection');
  var modalVerificationList = document.getElementById('modalVerificationList');
  var modalLinks = document.getElementById('modalLinks');

  var lightboxModal = document.getElementById('lightboxModal');
  var lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');

  /* ========================================================================
     Utility Helpers
     ======================================================================== */

  function createEl(tag, className, text) {
    var el = document.createElement(tag);
    if (className) {
      el.className = className;
    }
    if (typeof text === 'string') {
      el.textContent = text;
    }
    return el;
  }

  function buildLinkButton(link, className) {
    var a = createEl('a', className, link.label);
    a.href = link.url;
    if (link.url.indexOf('http') === 0 || link.url.indexOf('.pdf') !== -1) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    return a;
  }

  function normalizeSearchText(str) {
    return String(str || '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/&amp;/g, ' ')
      .toLowerCase()
      .replace(/[-_/.,:•|()]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function getSearchHaystack(project) {
    var parts = [
      project.title,
      project.org,
      project.badge,
      project.timeframe,
      project.summary,
      project.overview,
      project.tags.join(' '),
      project.bullets.join(' ')
    ];
    if (project.media && project.media.alt) {
      parts.push(project.media.alt);
    }
    if (project.metrics && project.metrics.length) {
      for (var m = 0; m < project.metrics.length; m++) {
        parts.push(project.metrics[m].label + ' ' + project.metrics[m].value);
      }
    }
    if (project.specs && project.specs.length) {
      for (var sp = 0; sp < project.specs.length; sp++) {
        parts.push(project.specs[sp].label + ' ' + project.specs[sp].value);
      }
    }
    if (project.verification && project.verification.length) {
      parts.push(project.verification.join(' '));
    }
    if (project.links && project.links.length) {
      for (var k = 0; k < project.links.length; k++) {
        parts.push(project.links[k].label);
      }
    }
    var normalized = normalizeSearchText(parts.join(' '));
    var joinedCodes = normalized.replace(/([a-z]+)\s+(\d+)/g, '$1$2');
    return joinedCodes === normalized ? normalized : (normalized + ' ' + joinedCodes);
  }

  function renderSchematicNode(schematicKey) {
    var entry = SCHEMATICS[schematicKey] || SCHEMATICS.gis;
    var wrap = createEl('div', 'schematic-banner');
    wrap.innerHTML = entry.svg;
    return wrap;
  }

  /* ========================================================================
     Render All Project Cards
     ======================================================================== */

  function buildProjectCard(project) {
    var card = createEl('article', 'project-card');
    card.setAttribute('data-project-id', project.id);
    card.setAttribute('data-section', project.section);

    var mediaBox = createEl('div', 'card-media');
    if (project.media.type === 'image') {
      if (project.media.fit === 'light') {
        mediaBox.classList.add('card-media--light');
      } else if (project.media.fit === 'contain') {
        mediaBox.classList.add('card-media--contain');
      } else if (project.media.fit === 'icon') {
        mediaBox.classList.add('card-media--icon');
      }

      if (project.media.fit !== 'icon') {
        mediaBox.classList.add('card-media--zoomable');
      }

      var img = document.createElement('img');
      img.src = project.media.src;
      img.alt = project.media.alt;
      img.loading = 'lazy';
      mediaBox.appendChild(img);

      if (project.media.fit !== 'icon') {
        var zoomHint = createEl('span', 'zoom-hint', 'Zoom Image');
        mediaBox.appendChild(zoomHint);
        mediaBox.addEventListener('click', function () {
          openLightbox(project.media.src, project.title + ' — ' + project.media.alt);
        });
      } else {
        mediaBox.style.cursor = 'pointer';
        mediaBox.addEventListener('click', function () {
          openDeepDive(project, mediaBox);
        });
      }
    } else {
      mediaBox.appendChild(renderSchematicNode(project.media.schematicKey));
      mediaBox.style.cursor = 'pointer';
      mediaBox.addEventListener('click', function () {
        openDeepDive(project, mediaBox);
      });
    }

    var badgeTL = createEl('span', 'card-badge-tl', project.badge);
    var badgeTR = createEl('span', 'card-badge-tr', project.timeframe);
    mediaBox.appendChild(badgeTL);
    mediaBox.appendChild(badgeTR);
    card.appendChild(mediaBox);

    var body = createEl('div', 'card-body');
    body.appendChild(createEl('div', 'card-org', project.org));
    body.appendChild(createEl('h3', 'card-title', project.title));
    body.appendChild(createEl('p', 'card-summary', project.summary));

    if (project.metrics && project.metrics.length) {
      var factsGrid = createEl('div', 'card-facts');
      var maxFacts = Math.min(project.metrics.length, 2);
      for (var m = 0; m < maxFacts; m++) {
        var factBox = createEl('div', 'card-fact');
        factBox.appendChild(createEl('div', 'card-fact-label', project.metrics[m].label));
        factBox.appendChild(createEl('div', 'card-fact-val', project.metrics[m].value));
        factsGrid.appendChild(factBox);
      }
      body.appendChild(factsGrid);
    }

    var actions = createEl('div', 'card-actions');
    var deepBtn = createEl('button', 'card-btn card-btn--primary', 'More Info');
    deepBtn.type = 'button';
    deepBtn.addEventListener('click', function () {
      openDeepDive(project, deepBtn);
    });
    actions.appendChild(deepBtn);

    if (project.links && project.links.length > 0) {
      var linkCount = project.section === 'research' ? project.links.length : 1;
      for (var l = 0; l < linkCount; l++) {
        var cardLink = project.links[l];
        var linkClass = 'card-btn';
        if (cardLink.kind === 'cyan') {
          linkClass += ' card-btn--cyan';
        }
        actions.appendChild(buildLinkButton(cardLink, linkClass));
      }
    }

    body.appendChild(actions);
    card.appendChild(body);
    return card;
  }

  function renderAllProjects() {
    var i;
    for (i = 0; i < PROJECTS.length; i++) {
      var project = PROJECTS[i];
      var grid = grids[project.section];
      if (!grid) {
        continue;
      }
      project._search = getSearchHaystack(project);
      var cardNode = buildProjectCard(project);
      project._cardEl = cardNode;
      grid.appendChild(cardNode);
    }
  }

  /* ========================================================================
     Classwork Live Search
     ======================================================================== */

  function applyFilters() {
    if (!grids.classwork) {
      return;
    }

    var q = normalizeSearchText(state.query);
    var classworkTotal = 0;
    var visibleCount = 0;

    for (var i = 0; i < PROJECTS.length; i++) {
      var p = PROJECTS[i];
      if (p.section !== 'classwork' || !p._cardEl) {
        continue;
      }
      classworkTotal += 1;

      var queryMatch = !q || p._search.indexOf(q) !== -1;
      if (queryMatch) {
        p._cardEl.classList.remove('is-filtered-out');
        visibleCount += 1;
      } else {
        p._cardEl.classList.add('is-filtered-out');
      }
    }

    if (resultsCount) {
      resultsCount.textContent = 'Showing ' + visibleCount + ' / ' + classworkTotal + ' projects';
    }
    if (emptyBanner) {
      if (visibleCount === 0) {
        emptyBanner.classList.add('visible');
      } else {
        emptyBanner.classList.remove('visible');
      }
    }
  }

  function initFilters() {
    if (!grids.classwork || !searchInput) {
      return;
    }

    searchInput.addEventListener('input', function () {
      state.query = searchInput.value;
      if (searchClear) {
        if (state.query.length > 0) {
          searchClear.classList.add('visible');
        } else {
          searchClear.classList.remove('visible');
        }
      }
      applyFilters();
    });

    if (searchClear) {
      searchClear.addEventListener('click', function () {
        searchInput.value = '';
        state.query = '';
        searchClear.classList.remove('visible');
        applyFilters();
        searchInput.focus();
      });
    }

    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', function () {
        searchInput.value = '';
        state.query = '';
        if (searchClear) {
          searchClear.classList.remove('visible');
        }
        applyFilters();
      });
    }

    applyFilters();
  }

  /* ========================================================================
     ERPL Video Theater (Verified @erplofficial YouTube Library)
     ======================================================================== */

  function renderTheaterViewport(item) {
    if (!theaterViewport) {
      return;
    }
    theaterViewport.innerHTML = '';
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + item.youtubeId + '?rel=0';
    iframe.title = item.title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    theaterViewport.appendChild(iframe);

    theaterCaptionTitle.textContent = item.title;
    theaterCaptionMeta.textContent = item.meta;
    theaterExternalLink.href = item.externalUrl;
    theaterExternalLink.textContent = item.externalLabel + ' \u2197';
  }

  function renderTheaterPlaylist() {
    if (!theaterPlaylist) {
      return;
    }
    var list = THEATER_YOUTUBE_VIDEOS;
    theaterPlaylist.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
      (function (idx, item) {
        var btn = createEl('button', 'theater-item' + (idx === state.theaterIndex ? ' active' : ''));
        btn.type = 'button';

        var head = createEl('div', 'theater-item-head');
        head.appendChild(createEl('span', 'theater-item-tag', item.tag));
        head.appendChild(createEl('span', 'theater-item-dur', item.duration));
        btn.appendChild(head);

        btn.appendChild(createEl('div', 'theater-item-title', item.title));
        btn.appendChild(createEl('div', 'theater-item-sub', item.meta));

        btn.addEventListener('click', function () {
          state.theaterIndex = idx;
          var siblings = theaterPlaylist.querySelectorAll('.theater-item');
          for (var s = 0; s < siblings.length; s++) {
            siblings[s].classList.remove('active');
          }
          btn.classList.add('active');
          renderTheaterViewport(item);
        });

        theaterPlaylist.appendChild(btn);
      })(i, list[i]);
    }
  }

  function initTheater() {
    if (!theaterViewport || !theaterPlaylist) {
      return;
    }
    renderTheaterPlaylist();
    if (THEATER_YOUTUBE_VIDEOS.length > 0) {
      renderTheaterViewport(THEATER_YOUTUBE_VIDEOS[0]);
    }
  }

  /* ========================================================================
     More Info Modal & Image Zoom Lightbox
     ======================================================================== */

  function renderModalHeroSlide(slide) {
    modalHeroMedia.innerHTML = '';
    modalHeroMedia.classList.remove('modal-hero-media--light');

    if (slide.type === 'video') {
      var vid = document.createElement('video');
      vid.controls = true;
      vid.muted = true;
      vid.loop = true;
      vid.playsInline = true;
      vid.autoplay = true;
      vid.preload = 'metadata';
      var srcNode = document.createElement('source');
      srcNode.src = slide.src;
      srcNode.type = 'video/mp4';
      vid.appendChild(srcNode);
      modalHeroMedia.appendChild(vid);
      var p = vid.play();
      if (p && typeof p.catch === 'function') {
        p.catch(function () {});
      }
    } else if (slide.type === 'schematic') {
      modalHeroMedia.appendChild(renderSchematicNode(slide.schematicKey));
    } else {
      if (slide.tone === 'light') {
        modalHeroMedia.classList.add('modal-hero-media--light');
      }
      var img = document.createElement('img');
      img.src = slide.src;
      img.alt = slide.caption || 'Project technical figure';
      img.addEventListener('click', function () {
        openLightbox(slide.src, slide.caption);
      });
      modalHeroMedia.appendChild(img);
    }

    modalHeroCaption.textContent = slide.caption || '';
  }

  function openDeepDive(project, triggerEl) {
    state.activeProject = project;
    state.lastFocusEl = triggerEl || document.activeElement;

    modalKicker.textContent = project.badge + '  •  ' + project.timeframe;
    modalTitle.textContent = project.title;
    modalSubtitle.textContent = project.org;

    var gallery = project.gallery && project.gallery.length ? project.gallery : [];
    modalThumbs.innerHTML = '';

    if (gallery.length > 0) {
      renderModalHeroSlide(gallery[0]);
      if (gallery.length > 1) {
        for (var g = 0; g < gallery.length; g++) {
          (function (idx, slide) {
            var thumbBtn = createEl('button', 'modal-thumb' + (idx === 0 ? ' active' : ''));
            thumbBtn.type = 'button';
            thumbBtn.setAttribute('aria-label', 'View gallery item ' + (idx + 1));

            if (slide.type === 'video') {
              thumbBtn.textContent = 'MP4';
              thumbBtn.style.fontFamily = 'var(--font-mono)';
              thumbBtn.style.fontSize = '0.75rem';
              thumbBtn.style.fontWeight = '700';
              thumbBtn.style.color = 'var(--cyan)';
            } else if (slide.type === 'schematic') {
              thumbBtn.textContent = 'CAD/SVG';
              thumbBtn.style.fontFamily = 'var(--font-mono)';
              thumbBtn.style.fontSize = '0.68rem';
              thumbBtn.style.color = 'var(--accent)';
            } else {
              var tImg = document.createElement('img');
              tImg.src = slide.src;
              tImg.alt = slide.caption || (project.title + ' thumbnail');
              tImg.loading = 'lazy';
              thumbBtn.appendChild(tImg);
            }

            thumbBtn.addEventListener('click', function () {
              var allThumbs = modalThumbs.querySelectorAll('.modal-thumb');
              for (var k = 0; k < allThumbs.length; k++) {
                allThumbs[k].classList.remove('active');
              }
              thumbBtn.classList.add('active');
              renderModalHeroSlide(slide);
            });

            modalThumbs.appendChild(thumbBtn);
          })(g, gallery[g]);
        }
      }
    }

    modalMetrics.innerHTML = '';
    modalMetrics.classList.toggle('modal-metrics-grid--compact', project.metrics.length > 4);
    for (var m = 0; m < project.metrics.length; m++) {
      var box = createEl('div', 'modal-metric-box');
      box.appendChild(createEl('div', 'modal-metric-label', project.metrics[m].label));
      box.appendChild(createEl('div', 'modal-metric-val', project.metrics[m].value));
      modalMetrics.appendChild(box);
    }

    modalOverview.textContent = project.overview;

    if (modalSpecsSection && modalSpecsGrid) {
      modalSpecsGrid.innerHTML = '';
      if (project.specs && project.specs.length > 0) {
        modalSpecsSection.style.display = '';
        for (var s = 0; s < project.specs.length; s++) {
          var specCard = createEl('div', 'modal-spec-item');
          specCard.appendChild(createEl('div', 'modal-spec-key', project.specs[s].label));
          specCard.appendChild(createEl('div', 'modal-spec-val', project.specs[s].value));
          modalSpecsGrid.appendChild(specCard);
        }
      } else {
        modalSpecsSection.style.display = 'none';
      }
    }

    modalBullets.innerHTML = '';
    for (var b = 0; b < project.bullets.length; b++) {
      var li = document.createElement('li');
      li.innerHTML = project.bullets[b];
      modalBullets.appendChild(li);
    }

    if (modalVerificationSection && modalVerificationList) {
      modalVerificationList.innerHTML = '';
      if (project.verification && project.verification.length > 0) {
        modalVerificationSection.style.display = '';
        for (var v = 0; v < project.verification.length; v++) {
          var vLi = document.createElement('li');
          vLi.innerHTML = project.verification[v];
          modalVerificationList.appendChild(vLi);
        }
      } else {
        modalVerificationSection.style.display = 'none';
      }
    }

    modalLinks.innerHTML = '';
    if (project.links && project.links.length > 0) {
      for (var l = 0; l < project.links.length; l++) {
        var lnk = project.links[l];
        var cls = 'btn-secondary';
        if (lnk.kind === 'primary') {
          cls = 'btn-primary';
        } else if (lnk.kind === 'cyan') {
          cls = 'btn-secondary btn-cyan';
        }
        modalLinks.appendChild(buildLinkButton(lnk, cls));
      }
    } else {
      modalLinks.appendChild(createEl('span', 'results-count', 'Engineering artifacts documented on request.'));
    }

    if (deepDiveDialog) {
      deepDiveDialog.scrollTop = 0;
    }
    deepDiveModal.classList.add('open');
    deepDiveModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  }

  function closeDeepDive() {
    if (!deepDiveModal) {
      return;
    }
    deepDiveModal.classList.remove('open');
    deepDiveModal.setAttribute('aria-hidden', 'true');
    if (modalHeroMedia) {
      modalHeroMedia.innerHTML = '';
    }
    if (!lightboxModal || !lightboxModal.classList.contains('open')) {
      document.body.style.overflow = '';
    }
    if (state.lastFocusEl && typeof state.lastFocusEl.focus === 'function') {
      state.lastFocusEl.focus();
    }
  }

  function openLightbox(src, caption) {
    if (!lightboxModal || !lightboxImg) {
      return;
    }
    if (!deepDiveModal || !deepDiveModal.classList.contains('open')) {
      state.lastFocusEl = document.activeElement;
    }
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Expanded engineering visual';
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || '';
    }
    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (lightboxCloseBtn) {
      lightboxCloseBtn.focus();
    }
  }

  function closeLightbox() {
    if (!lightboxModal) {
      return;
    }
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    if (!deepDiveModal || !deepDiveModal.classList.contains('open')) {
      document.body.style.overflow = '';
      if (state.lastFocusEl && typeof state.lastFocusEl.focus === 'function') {
        state.lastFocusEl.focus();
      }
    }
  }

  function initModalsAndLightbox() {
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeDeepDive);
    }
    if (deepDiveModal) {
      deepDiveModal.addEventListener('click', function (e) {
        if (e.target === deepDiveModal) {
          closeDeepDive();
        }
      });
    }

    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener('click', closeLightbox);
    }
    if (lightboxModal) {
      lightboxModal.addEventListener('click', function (e) {
        if (e.target === lightboxModal) {
          closeLightbox();
        }
      });
    }

    var staticTriggers = document.querySelectorAll('.js-lightbox-trigger');
    for (var i = 0; i < staticTriggers.length; i++) {
      (function (el) {
        el.addEventListener('click', function () {
          var src = el.getAttribute('data-src');
          var caption = el.getAttribute('data-caption') || '';
          if (src) {
            openLightbox(src, caption);
          }
        });
      })(staticTriggers[i]);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (lightboxModal && lightboxModal.classList.contains('open')) {
          closeLightbox();
        } else if (deepDiveModal && deepDiveModal.classList.contains('open')) {
          closeDeepDive();
        }
      }
    });
  }

  /* ========================================================================
     Navigation & Mobile Drawer
     ======================================================================== */

  function initNavigation() {
    if (mobileMenuBtn && portfolioNav) {
      mobileMenuBtn.addEventListener('click', function () {
        var nextOpen = !portfolioNav.classList.contains('open');
        portfolioNav.classList.toggle('open', nextOpen);
        mobileMenuBtn.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
      });
    }

    var navLinks = document.querySelectorAll('.nav-jump, .nav-link');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function () {
        if (portfolioNav) {
          portfolioNav.classList.remove('open');
        }
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  /* ========================================================================
     Boot
     ======================================================================== */

  document.addEventListener('DOMContentLoaded', function () {
    renderAllProjects();
    initFilters();
    initTheater();
    initModalsAndLightbox();
    initNavigation();
  });
})();
