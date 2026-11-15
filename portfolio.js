(function () {
  'use strict';

  /* ========================================================================
     Verified Engineering Portfolio Dataset (SpaceX-Targeted Framing)
     All asset paths verified against portfolio-assets/ and eaa/ manifests.
     ======================================================================== */

  var THEATER_LOCAL_CLIPS = [
    {
      id: 'local-gopro-chamber',
      tag: 'JUNO / HORIZONTAL STAND',
      duration: '6.80s MP4',
      title: 'Horizontal Test Stand — GoPro Chamber Top-Down Burn',
      meta: 'LOCAL MP4 LOOP • 1280x720 H.264 • Chamber Mounting & Blast Deflector Plume',
      src: 'portfolio-assets/video/gopro-chamber-topdown.mp4',
      externalUrl: 'https://www.youtube.com/@erplofficial',
      externalLabel: 'ERPL YouTube'
    },
    {
      id: 'local-triton-hotfire',
      tag: 'TRITON / CECIL PAD',
      duration: '5.07s MP4',
      title: 'Cecil Spaceport Hangar Apron — Triton Supersonic Hotfire',
      meta: 'LOCAL MP4 LOOP • 1088x720 H.264 • Horizontal Restraint & Shock Diamonds',
      src: 'portfolio-assets/video/triton-hotfire-loop.mp4',
      externalUrl: 'https://www.youtube.com/watch?v=cwGCarHdi9k',
      externalLabel: 'Watch Triton on YouTube'
    },
    {
      id: 'local-odyssey-highspeed',
      tag: 'ODYSSEY / HIGH-SPEED',
      duration: '5.47s MP4',
      title: 'Odyssey Monochrome High-Speed Ignition & Shock Diamonds',
      meta: 'LOCAL MP4 LOOP • 1280x720 H.264 • 1000 fps Optical Diagnostics',
      src: 'portfolio-assets/video/odyssey-highspeed-ignition.mp4',
      externalUrl: 'https://www.youtube.com/watch?v=s5NX9r3Re84',
      externalLabel: 'Watch Odyssey 1000fps'
    },
    {
      id: 'local-hdaa-sync',
      tag: 'HDAA / LOAD-CELL SYNC',
      duration: '7.50s MP4',
      title: 'HDAA Synchronized Load-Cell & Chamber Telemetry Hotfire',
      meta: 'LOCAL MP4 LOOP • 1280x720 H.264 • Thrust & Pressure Correlation',
      src: 'portfolio-assets/video/hdaa-loadcell-hotfire.mp4',
      externalUrl: 'https://github.com/calebstone15/HDAA-V2.3',
      externalLabel: 'HDAA GitHub'
    },
    {
      id: 'local-cecil-fire-call',
      tag: 'CECIL PAD / OPS',
      duration: '1.90s MP4',
      title: 'Cecil Pad Launch Control — Fire Call & Plume Ignition',
      meta: 'LOCAL MP4 LOOP • 1280x720 H.264 • Console Sequence Verification',
      src: 'portfolio-assets/video/cecil-launch-fire-call.mp4',
      externalUrl: 'https://x.com/erauerpl',
      externalLabel: 'ERPL on X'
    }
  ];

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
      meta: '@erplofficial • CdA Calibration & Feed Checkout',
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
      code: 'GIS // HYDRAULIC NETWORK',
      svg: '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Municipal GIS water pressure zone topology diagram">' +
        '<rect x="14" y="14" width="332" height="162" rx="10" fill="none" stroke="rgba(56,189,248,0.28)" stroke-width="1"/>' +
        '<path d="M40 132 L110 92 L182 104 L245 58 L315 74" fill="none" stroke="#38bdf8" stroke-width="2.5"/>' +
        '<path d="M110 92 L134 148 L228 142 L245 58" fill="none" stroke="#d4af37" stroke-width="2" stroke-dasharray="5 4"/>' +
        '<circle cx="40" cy="132" r="6" fill="#22c55e"/><circle cx="110" cy="92" r="7" fill="#d4af37"/>' +
        '<circle cx="182" cy="104" r="6" fill="#38bdf8"/><circle cx="245" cy="58" r="7" fill="#d4af37"/>' +
        '<circle cx="315" cy="74" r="6" fill="#22c55e"/><circle cx="134" cy="148" r="5" fill="#38bdf8"/>' +
        '<circle cx="228" cy="142" r="5" fill="#38bdf8"/>' +
        '<text x="26" y="36" fill="#d4af37" font-family="monospace" font-size="11" font-weight="700">ARCGIS PRO // TOPOLOGY QA: 10,000+ ASSETS</text>' +
        '<text x="26" y="54" fill="rgba(255,255,255,0.65)" font-family="monospace" font-size="10">VALVES • HYDRANTS • MAINS • PRESSURE ZONES</text>' +
        '</svg>'
    },
    grw: {
      code: 'PROCESS // FLUID BALANCE',
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
        '<text x="28" y="36" fill="#d4af37" font-family="monospace" font-size="11" font-weight="700">AUTOCAD / CIVIL 3D // MASS BALANCE</text>' +
        '<text x="28" y="142" fill="rgba(255,255,255,0.65)" font-family="monospace" font-size="10">CARTER CAVES WWTP • BRANDENBURG WTP • DECA</text>' +
        '</svg>'
    },
    ivv: {
      code: 'SYS 415 // IV&V + FMECA',
      svg: '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Systems integration verification V-model diagram">' +
        '<polyline points="42,46 112,138 180,148 248,138 318,46" fill="none" stroke="#d4af37" stroke-width="2.5"/>' +
        '<line x1="76" y1="90" x2="284" y2="90" stroke="rgba(56,189,248,0.6)" stroke-width="1.5" stroke-dasharray="4 4"/>' +
        '<circle cx="42" cy="46" r="6" fill="#38bdf8"/><circle cx="112" cy="138" r="6" fill="#d4af37"/>' +
        '<circle cx="248" cy="138" r="6" fill="#d4af37"/><circle cx="318" cy="46" r="6" fill="#22c55e"/>' +
        '<text x="34" y="32" fill="#bae6fd" font-family="monospace" font-size="10">REQS</text>' +
        '<text x="288" y="32" fill="#bbf7d0" font-family="monospace" font-size="10">OPS V&amp;V</text>' +
        '<text x="180" y="83" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-size="10">BOUNDARY &amp; INTERFACE TESTS</text>' +
        '<text x="180" y="170" text-anchor="middle" fill="rgba(255,255,255,0.68)" font-family="monospace" font-size="10">FMECA CRITICALITY • FAULT TREE ANALYSIS</text>' +
        '</svg>'
    },
    evm: {
      code: 'BA 424 // CPM & EVM',
      svg: '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Critical path and earned value chart">' +
        '<rect x="34" y="52" width="110" height="16" rx="4" fill="#d4af37"/>' +
        '<rect x="148" y="82" width="95" height="16" rx="4" fill="#38bdf8"/>' +
        '<rect x="247" y="112" width="80" height="16" rx="4" fill="#22c55e"/>' +
        '<line x1="34" y1="145" x2="328" y2="145" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>' +
        '<text x="34" y="34" fill="#d4af37" font-family="monospace" font-size="11" font-weight="700">BOEING 777-200 FLEET REFRESH // MS PROJECT</text>' +
        '<text x="34" y="168" fill="rgba(255,255,255,0.65)" font-family="monospace" font-size="10">WBS • CRITICAL PATH • EARNED VALUE (CPI/SPI)</text>' +
        '</svg>'
    },
    spacecraft: {
      code: 'SP 300/200 // SUBSYSTEM SIZING',
      svg: '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spacecraft subsystem sizing and Europa trajectory diagram">' +
        '<circle cx="180" cy="95" r="24" fill="rgba(56,189,248,0.18)" stroke="#38bdf8" stroke-width="2"/>' +
        '<ellipse cx="180" cy="95" rx="122" ry="44" fill="none" stroke="#d4af37" stroke-width="1.8" transform="rotate(-12 180 95)"/>' +
        '<circle cx="288" cy="70" r="7" fill="#d4af37"/>' +
        '<text x="180" y="99" text-anchor="middle" fill="#bae6fd" font-family="monospace" font-size="9">EUROPA</text>' +
        '<text x="26" y="32" fill="#d4af37" font-family="monospace" font-size="11" font-weight="700">EPS • ADCS • TT&amp;C LINK • THERMAL • DELTA-V</text>' +
        '<text x="26" y="170" fill="rgba(255,255,255,0.65)" font-family="monospace" font-size="10">GATEWAY / EUROPA PAYLOAD RADIATION &amp; BUDGETS</text>' +
        '</svg>'
    },
    vulcanFta: {
      code: 'SP 110 // GEM 63XL FTA',
      svg: '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vulcan GEM 63XL SRB nozzle anomaly fault tree schematic">' +
        '<rect x="108" y="24" width="144" height="30" rx="6" fill="rgba(239,68,68,0.18)" stroke="#ef4444" stroke-width="1.8"/>' +
        '<text x="180" y="43" text-anchor="middle" fill="#fecaca" font-family="monospace" font-size="10" font-weight="700">NOZZLE ANOMALY</text>' +
        '<line x1="180" y1="54" x2="180" y2="76" stroke="#f5f5f5" stroke-width="1.8"/>' +
        '<path d="M166 76 Q180 68 194 76 L194 96 Q180 89 166 96 Z" fill="rgba(212,175,55,0.2)" stroke="#d4af37" stroke-width="1.6"/>' +
        '<text x="180" y="88" text-anchor="middle" fill="#fde68a" font-family="monospace" font-size="9">OR</text>' +
        '<polyline points="92,118 92,102 268,102 268,118" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="1.6"/>' +
        '<rect x="30" y="118" width="124" height="34" rx="6" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="1.5"/>' +
        '<rect x="206" y="118" width="124" height="34" rx="6" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="1.5"/>' +
        '<text x="92" y="139" text-anchor="middle" fill="#bae6fd" font-family="monospace" font-size="9">LINER DELAMINATION</text>' +
        '<text x="268" y="139" text-anchor="middle" fill="#bae6fd" font-family="monospace" font-size="9">HOT-GAS SEAL BREACH</text>' +
        '</svg>'
    },
    hurwitz: {
      code: 'SYS 301/320 // HURWITZ TRADE',
      svg: '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Autonomous robot Hurwitz decision trade matrix schematic">' +
        '<rect x="34" y="48" width="292" height="106" rx="8" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.4"/>' +
        '<line x1="34" y1="82" x2="326" y2="82" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>' +
        '<line x1="150" y1="48" x2="150" y2="154" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>' +
        '<rect x="166" y="94" width="142" height="14" rx="4" fill="#22c55e"/>' +
        '<rect x="166" y="122" width="96" height="14" rx="4" fill="#d4af37"/>' +
        '<text x="34" y="33" fill="#d4af37" font-family="monospace" font-size="11" font-weight="700">INCOSE TRADE STUDY // HURWITZ (a=0.8) &amp; LAPLACE</text>' +
        '<text x="48" y="70" fill="#bae6fd" font-family="monospace" font-size="10">CONCEPT</text>' +
        '<text x="166" y="70" fill="#bae6fd" font-family="monospace" font-size="10">WEIGHTED UTILITY SCORE</text>' +
        '<text x="48" y="105" fill="#f5f5f5" font-family="monospace" font-size="10">OPT-A</text>' +
        '<text x="48" y="133" fill="#f5f5f5" font-family="monospace" font-size="10">OPT-B</text>' +
        '</svg>'
    },
    catia: {
      code: 'EGR 120 // CATIA V5 GD&T',
      svg: '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CATIA V5 orthographic projection and GD&T blueprint">' +
        '<rect x="42" y="54" width="110" height="84" fill="none" stroke="#38bdf8" stroke-width="2"/>' +
        '<circle cx="97" cy="96" r="22" fill="none" stroke="#d4af37" stroke-width="2"/>' +
        '<line x1="65" y1="96" x2="129" y2="96" stroke="#d4af37" stroke-width="1" stroke-dasharray="6 3"/>' +
        '<line x1="97" y1="64" x2="97" y2="128" stroke="#d4af37" stroke-width="1" stroke-dasharray="6 3"/>' +
        '<rect x="200" y="64" width="112" height="28" fill="rgba(56,189,248,0.1)" stroke="#f5f5f5" stroke-width="1.6"/>' +
        '<text x="208" y="82" fill="#fde68a" font-family="monospace" font-size="10">&#x2316; 0.05 | A | B | C</text>' +
        '<text x="42" y="34" fill="#d4af37" font-family="monospace" font-size="11" font-weight="700">CATIA V5 &amp; INVENTOR // ASME Y14.5 GD&amp;T</text>' +
        '<text x="200" y="128" fill="rgba(255,255,255,0.68)" font-family="monospace" font-size="10">MULTI-PART ASSEMBLIES &amp; BOM</text>' +
        '</svg>'
    },
    stageCost: {
      code: 'EGR 115 // 2-STAGE SIZING',
      svg: '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-stage launch vehicle mass ratio and materials cost curve">' +
        '<polyline points="42,148 42,46" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>' +
        '<polyline points="42,148 320,148" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>' +
        '<path d="M56 130 Q135 55 210 92 T308 58" fill="none" stroke="#d4af37" stroke-width="2.6"/>' +
        '<circle cx="170" cy="83" r="6" fill="#22c55e"/>' +
        '<text x="42" y="32" fill="#d4af37" font-family="monospace" font-size="11" font-weight="700">2-STAGE LAUNCH VEHICLE COST OPTIMIZER</text>' +
        '<text x="180" y="170" text-anchor="middle" fill="rgba(255,255,255,0.65)" font-family="monospace" font-size="10">STAGE MASS RATIO vs STRUCTURAL COST ($/KG)</text>' +
        '</svg>'
    },
    asteroid: {
      code: 'CS 118 // 3D KINEMATICS',
      svg: '<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3D asteroid field Euclidean proximity vector diagram">' +
        '<circle cx="90" cy="128" r="8" fill="#22c55e"/>' +
        '<circle cx="242" cy="64" r="14" fill="rgba(239,68,68,0.22)" stroke="#ef4444" stroke-width="1.8"/>' +
        '<circle cx="290" cy="118" r="9" fill="rgba(212,175,55,0.25)" stroke="#d4af37" stroke-width="1.6"/>' +
        '<line x1="90" y1="128" x2="242" y2="64" stroke="#38bdf8" stroke-width="2" stroke-dasharray="5 3"/>' +
        '<line x1="90" y1="128" x2="290" y2="118" stroke="rgba(255,255,255,0.45)" stroke-width="1.4"/>' +
        '<text x="90" y="152" text-anchor="middle" fill="#bbf7d0" font-family="monospace" font-size="9">CRAFT (0,0,0)</text>' +
        '<text x="242" y="42" text-anchor="middle" fill="#fecaca" font-family="monospace" font-size="9">d = sqrt(x2+y2+z2)</text>' +
        '<text x="28" y="30" fill="#d4af37" font-family="monospace" font-size="11" font-weight="700">PYTHON 3D ASTEROID PROXIMITY SIMULATOR</text>' +
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
      overview: 'Awarded the Science, Mathematics, and Research for Transformation (SMART) Scholarship sponsored by the U.S. Navy Naval Surface Warfare Center (NSWC) Dahlgren Division. Combines full graduate tuition and fellowship support through the M.S. in Systems Engineering (2026-2028) with a permanent civilian systems engineering appointment focused on safety-critical naval architectures.',
      bullets: [
        'Selected for the competitive <strong>DoD SMART Scholarship-for-Service</strong> sponsored by <strong>NSWC Dahlgren Division</strong>.',
        'Supporting <strong>Model-Based Systems Engineering (MBSE)</strong> and mission verification for naval combat systems.',
        'Integrating fault-tolerant autonomous sensor networks and verification architectures across multi-domain platforms.'
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
        { label: 'SITL Flights', value: '24,000 Runs' },
        { label: 'CNN Forward', value: '28.44 ms' },
        { label: 'Advisor', value: 'Dr. Nagaraju' }
      ],
      overview: 'Leading integration and empirical evaluation inside the Reliability, AI, and Systems Engineering (RAISE) Lab. Bridges physical aerospace test hardware (Crazyflie 2.1 HITL rigs and ERPL rocket test imagery) with formal systems safety methods and LLM-assisted verification pipelines.',
      bullets: [
        'Primary and co-author across <strong>AIAA SciTech 2027 (2 accepted)</strong>, <strong>ISSS 2026 (2 published)</strong>, and <strong>INCOSE 2026 (published)</strong>.',
        'Built <strong>ATLAS</strong> C++ source-RAG + PX4/ArduPilot SITL fuzzing pipeline across <strong>24,000 total flights</strong> (9,000 source-RAG flights isolating <strong>1,375 silent failure events</strong>, 1,205 unique patterns).',
        'Developed edge <strong>YOLOv8/YOLO11 rocket engine auto-abort</strong> pipeline (CVHAD, <strong>28.44 ms CNN forward pass</strong> / 101.24 ms end-to-end) trained on live ERPL hotfire optics.'
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
      overview: 'Applied spatial data engineering and field verification to modernize county-wide potable water distribution networks. Reconciled physical as-built utility installations directly against civil engineering plan sheets to maintain configuration truth.',
      bullets: [
        'Digitized, topology-checked, and integrated <strong>10,000+ GPS-surveyed assets</strong> (mains, gate valves, hydrants, meters) in <strong>ArcGIS Pro</strong>.',
        'Executed field GPS surveys across expanding corridors, reconciling physical hardware against construction drawings.',
        'Modeled municipal <strong>hydraulic pressure zones</strong> and pipeline loops supporting capital improvement initiatives.'
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
      overview: 'Delivered engineering modeling, CAD redline execution, and on-site mechanical assessments under Water Resources Division Manager Joseph V. Pavoni, P.E. Supported Carter Caves State Park WWTP (state DECA), Brandenburg WTP, and Jeffersontown capital projects.',
      bullets: [
        'Built custom <strong>Microsoft Excel hydraulic &amp; environmental impact calculators</strong> evaluating plant effluent balances.',
        'Executed component edits and process piping markups in <strong>AutoCAD and Civil 3D</strong> across major treatment plant upgrades.',
        'Conducted on-site equipment inspections to verify as-built tolerances and resolve design discrepancies with clients and DECA officials.'
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
        { type: 'image', src: 'portfolio-assets/img/juno-cryo-chilldown.webp', caption: 'Stainless steel nozzle cryogenic LOX chilldown vent verification', tone: 'dark' },
        { type: 'video', src: 'portfolio-assets/video/gopro-chamber-topdown.mp4', caption: 'GoPro chamber top-down burn toward blast deflector' }
      ],
      metrics: [
        { label: 'Rated Thrust', value: '300 lbf' },
        { label: 'Propellants', value: 'LOX / Ethanol' },
        { label: 'Chamber Spec', value: '350 PSI' },
        { label: 'Key Save', value: 'Hardstart Abort' }
      ],
      overview: 'Served as Responsible Engineer (RE) on ERPL\'s 300 lbf liquid oxygen / ethanol bipropellant engine "Juno" from CAD drafting and shop machining through pressurized waterflow, cryogenic coldflow, and hotfire campaigns.',
      bullets: [
        'Modeled and manufactured the structural thrust mount in <strong>Autodesk Inventor</strong> (<em>Thrust Plate Drawing v9</em>) linking the chamber to the mobile stand.',
        'Engineered the <strong>S-type load cell thrust measurement DAQ</strong> and integrated high-pressure cryogenic propellant feed lines.',
        'Modeled thermodynamic <strong>LOX tank ullage collapse factor</strong> during cold pressurization and steady-state burn.',
        'Commanded visual/fluid console ops and executed real-time <strong>abort interventions preventing a hardstart detonation</strong> during inaugural testing.'
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
      title: 'MOE Cam: Cryo-Hardened Intertank Avionics & 1.2 GHz Downlink',
      summary: 'Architected STM32H743 flight avionics, Lua-multiplexed dual 4K optics, -183°C LOX thermal protection, 300+ ft ELRS pad arming switch, and 1.2 GHz 2W live video downlink.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/moe-cam-avionics-schematic.webp',
        alt: 'MOE Cam flight avionics schematic with Kakute H743-Wing, dual RunCam Split 4, VTX, and GPS',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/moe-cam-avionics-schematic.webp', caption: 'STM32H743 (Kakute H743-Wing) + Dual RunCam Split 4 V2 + GEPRC 1.2 GHz VTX + GNSS schematic', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/moe-network-topology.webp', caption: 'MOE pad & ground station network architecture diagram', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/moe-hf1-boiloff.webp', caption: 'MOE Static Hotfire 1 in cryogenic LOX boil-off mist', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/esd-lora-soldering.webp', caption: 'ESD mat bench soldering of telemetry RF transceivers and power switching hardware', tone: 'dark' }
      ],
      metrics: [
        { label: 'Flight MCU', value: 'STM32H743 480MHz' },
        { label: 'RF Downlink', value: '1.2 GHz 2W VTX' },
        { label: 'Link Margin', value: '+10.0 dB @ 50k ft' },
        { label: 'Cryo Exposure', value: '-183°C LOX Intertank' }
      ],
      overview: 'Engineered the auxiliary flight avionics, dual 4K onboard recording, and live downlinked video payload inside the RF-transparent fiberglass intertank positioned directly between the cryogenic LOX tank (-183°C) and fuel tank.',
      bullets: [
        'Configured <strong>Holybro Kakute H743-Wing (STM32H743 / ArduPilot)</strong> with dual redundant IMUs, BMP280, Micro M10 GNSS, and <strong>dual 4K/2.7K RunCam Split 4 V2</strong> cameras.',
        'Authored custom <strong>ArduPilot Lua scripts</strong> automating camera recording and switching live mux from forward shroud view to engine plume at apogee.',
        'Cryo-hardened avionics: closed-cell neoprene-insulated <strong>4S LiFePO4</strong>, <strong>MG Chemicals 422C</strong> conformal coat, and Kapton condensation drip shields.',
        'Built <strong>300+ ft 2.4 GHz ELRS + Pololu #2803 solid-state MOSFET</strong> pad power switch and <strong>+10 dBic skyward diversity ground station</strong> (+10 dB link margin).'
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
      badge: 'MULTI-CAM TELEMETRY',
      timeframe: '2023 - 2026',
      org: 'ERPL Visual Control Systems',
      title: 'DracoVision & PiCameraProject: 12-Cam RTSP Matrix & Pi 5 Streaming',
      summary: 'Built a 3,373-line Flask/RTSP/FFmpeg multi-camera matrix bridging 12 pad feeds to HLS & fMP4/MSE alongside ruggedized Raspberry Pi 5 dual-stream IMX477 HQ & IR systems.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/dracovision-ui.webp',
        alt: 'DracoVision sanitized multi-camera operator console displaying six rocket test stand feeds',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/dracovision-ui.webp', caption: 'DracoVision 12-cam test-stand matrix with adaptive HLS/MSE mode & health telemetry (sanitized demo view)', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/picamera-control-ui.webp', caption: 'PiCameraProject live Operational Control workbench dashboard', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/caleb-nema-box-wiring.webp', caption: 'Weatherproof NEMA field enclosure wiring for test-stand camera power and PoE networking', tone: 'dark' }
      ],
      metrics: [
        { label: 'Matrix Scale', value: '12 IP Cameras' },
        { label: 'Codebase', value: '3,373 Lines' },
        { label: 'Edge Hardware', value: 'RPi 5 + IMX477' },
        { label: 'Reliability', value: 'Systemd Watchdog' }
      ],
      overview: 'Engineered resilient test-range optical infrastructure replacing ad-hoc single cameras with deterministic multi-camera monitoring, low-latency browser transport, and fault-recovering edge SBC nodes.',
      bullets: [
        'Architected <strong>DracoVision</strong> (3,373-line Python Flask + FFmpeg backend) bridging RTSP/MJPEG streams into <strong>low-latency HLS and fMP4/MSE</strong> with uptime, dropout, and bitrate telemetry.',
        'Implemented strict role separation between the <strong>Operator Admin Console</strong> and <strong>View-Only Field URLs</strong> for range safety.',
        'Deployed <strong>PiCameraProject</strong> on Raspberry Pi 5 + Arducam IMX477 HQ &amp; IR sensors running concurrent <strong>MediaMTX RTSP console streams + lossless local SSD capture</strong> via systemd auto-recovery.'
      ],
      tags: ['Flask / Python', 'RTSP / FFmpeg', 'HLS / fMP4 MSE', 'Raspberry Pi 5', 'MediaMTX', 'Systemd', 'NEMA PoE'],
      links: []
    },
    {
      id: 'erpl-hdaa-eaa',
      section: 'erpl',
      categories: ['propulsion', 'systems'],
      badge: 'LIVE WEB + DAQ',
      timeframe: '2023 - 2026',
      org: 'ERPL Data Acquisition & Propulsion Software',
      title: 'HDAA V2.3 Desktop Analyzer & Live EAA Engineering Web Suite',
      summary: 'Full-stack hotfire DAQ suite computing Pc, Thrust, Isp, C*, O/F, and ve with <30s PDF debriefs — plus live browser-based EAA Hotfire & CdA engineering calculators.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/hdaa-thrust-corrected.webp',
        alt: 'HDAA corrected rocket engine thrust telemetry plot with steady-state burn peak',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/hdaa-thrust-corrected.webp', caption: 'HDAA corrected load-cell thrust telemetry curve (Max 1,721 lbf campaign plot)', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/hdaa-pressure-corrected.webp', caption: 'HDAA multi-channel chamber & feed system pressure trace', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/hdaa-logo.webp', caption: 'HDAA V2.3 cross-platform desktop application badge', tone: 'light' },
        { type: 'video', src: 'portfolio-assets/video/hdaa-loadcell-hotfire.mp4', caption: 'Synchronized hotfire video and load-cell data acquisition run' }
      ],
      metrics: [
        { label: 'Post-Fire Debrief', value: '< 30 sec' },
        { label: 'Parameters', value: 'Pc, F, Isp, C*, O/F' },
        { label: 'Live App', value: '/eaa/ Web Suite' },
        { label: 'Bundles', value: 'macOS & Web' }
      ],
      overview: 'Eliminated hours of manual spreadsheet post-processing after rocket static fires by building HDAA V2.3 (Python/Tkinter standalone macOS bundle) and porting core propulsion tools to the zero-install EAA browser suite.',
      bullets: [
        'Programmed automated steady-state trimming and propulsion physics engines calculating <strong>Pc, Thrust, Isp, Characteristic Velocity (C*), O/F mixture ratio, and ve</strong>.',
        'Cut post-hotfire data reduction and PDF engineering report generation from hours down to <strong>under 30 seconds</strong>.',
        'Deployed interactive <strong>Live EAA Web Suite</strong> (Hotfire Data Analyzer &amp; CdA Calculator) right inside this portfolio.'
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
      overview: 'Founded and led ERPL\'s Visual Control Team, unifying high-speed engineering diagnostics with public aerospace broadcasting across dozens of pressurized coldflows and hotfires.',
      bullets: [
        'Engineered modular HTML/JS/Python <strong>live telemetry overlays</strong> (<em>Actuation Checks</em> through <em>Post-Fire Debrief</em>) in OBS Studio.',
        'Partnered with <strong>NASASpaceflight (NSF)</strong> production teams to upgrade collegiate rocket test livestream reliability.',
        'Authored and delivered <strong><em>Capturing the Visual Data of a Test</em></strong> at Liquid Rocketry Conference 2025 detailing camera placement, ND filtration, and PTZ ops.'
      ],
      tags: ['OBS Broadcast', 'HTML/JS Overlays', 'NASASpaceflight', 'High-Speed Optics', 'LRC 25 Speaker', 'PTZ Control'],
      links: [
        { label: 'LRC 25 Deck (PDF)', url: 'portfolio-assets/docs/LRC25_Visual_Data_Caleb_Stone.pdf', kind: 'primary' },
        { label: 'ERPL YouTube', url: 'https://www.youtube.com/@erplofficial', kind: 'secondary' },
        { label: 'ERPL on X', url: 'https://x.com/erauerpl', kind: 'secondary' }
      ]
    },
    {
      id: 'erpl-cda-schlieren',
      section: 'erpl',
      categories: ['propulsion', 'systems'],
      badge: 'FLOW & OPTICS',
      timeframe: '2023 - 2025',
      org: 'ERPL / ERAU Propulsion Diagnostics',
      title: 'Injector Discharge Area (CdA) Solver & Supersonic Schlieren / BOS',
      summary: 'Built an interactive injector/orifice CdA flow calculator (CdA = mdot / sqrt(2*rho*dP)) from waterflow logs and aligned Z-type Schlieren & Python BOS density-gradient imaging.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/lrc25-bos-schlieren.webp',
        alt: 'Background-Oriented Schlieren density gradient displacement plot from LRC 25 study',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/lrc25-bos-schlieren.webp', caption: 'Digital Background-Oriented Schlieren (BOS) refractive displacement analysis', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/odyssey-highspeed-mach.webp', caption: 'High-speed monochrome capture of Odyssey Mach shock diamonds', tone: 'dark' }
      ],
      metrics: [
        { label: 'Governing Eq', value: 'CdA = mdot/sqrt(2p dP)' },
        { label: 'Optical Bench', value: 'Z-Type Schlieren' },
        { label: 'BOS Pipeline', value: 'Python Displacement' },
        { label: 'Live Tool', value: 'eaa/pages/cda.html' }
      ],
      overview: 'Paired quantitative fluid feed characterization with non-intrusive optical flow diagnostics to verify injector effective orifice area and visualize supersonic exhaust shockwave structures.',
      bullets: [
        'Developed Python/Tkinter <strong>CdA Calculator</strong> parsing CSV pressure &amp; tank-weight logs across steady-state waterflow/coldflow intervals.',
        'Deployed interactive browser port inside <strong>EAA CdA Calculator</strong> supporting live steady-state window picking on Chart.js.',
        'Aligned <strong>Z-type optical Schlieren</strong> knife-edge bench and authored Python <strong>Background-Oriented Schlieren (BOS)</strong> refractive gradient extraction scripts.'
      ],
      tags: ['CdA Waterflow', 'Z-Type Schlieren', 'Digital BOS', 'Mach Diamonds', 'Python / Matplotlib', 'Fluids'],
      links: [
        { label: 'Open Live CdA Tool', url: 'eaa/pages/cda.html', kind: 'cyan' },
        { label: 'Watch Juno Waterflow', url: 'https://www.youtube.com/watch?v=4IUNaIuttcE', kind: 'secondary' }
      ]
    },
    {
      id: 'erpl-secretary',
      section: 'erpl',
      categories: ['systems', 'propulsion'],
      badge: 'OPS LEADERSHIP',
      timeframe: '2024 - 2025',
      org: 'ERPL Executive Board (100+ Active Members)',
      title: 'Secretary Officer & Test Operations Standardization (Fusion)',
      summary: 'Standardized hotfire & visual SOPs using Fusion by Stoke Space, coordinated master campaign schedules across 100+ engineers, and secured SGA operating budgets.',
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
        { label: 'Org Size', value: '100+ Engineers' },
        { label: 'SOP Tool', value: 'Stoke Fusion' },
        { label: 'Compliance', value: 'ERAU SGA Budget' },
        { label: 'Test Range', value: 'Cecil Spaceport' }
      ],
      overview: 'Served on ERPL\'s executive officer board institutionalizing aerospace-grade test documentation, safety checklists, and cross-team hardware scheduling for one of the nation\'s largest collegiate liquid rocket organizations.',
      bullets: [
        'Authored standardized hotfire, cryo safety, and visual-control SOPs using <strong>Fusion by Stoke Space</strong> workflow software.',
        'Managed master project schedules, test-readiness milestones, and hardware logistics across <strong>100+ active student engineers</strong>.',
        'Maintained Embry-Riddle <strong>SGA organizational compliance</strong> securing multi-team propulsion funding allocations.'
      ],
      tags: ['Fusion by Stoke Space', 'Test SOPs', 'Configuration Control', 'Range Safety', 'Program Logistics'],
      links: [
        { label: 'erpl.space', url: 'https://erpl.space/', kind: 'secondary' }
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
      summary: 'Accepted primary-author AIAA SciTech 2027 paper pairing fine-tuned YOLOv8/YOLO11 edge CNNs with deterministic abort logic to detect plume anomalies blind to 1D pressure sensors.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/cvhad-yolo-anomaly-detect.webp',
        alt: 'CVHAD YOLOv8 edge detection bounding boxes identifying venting smoke and fire on test stand',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/cvhad-yolo-anomaly-detect.webp', caption: 'Real-time YOLO anomaly detection (fire & venting_smoke classes) on ERPL hotfire footage', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/cvhad-abort-pipeline.webp', caption: 'CVHAD hybrid deterministic + edge vision auto-abort architecture pipeline', tone: 'light' }
      ],
      metrics: [
        { label: 'Venue', value: 'AIAA SciTech 2027' },
        { label: 'Authorship', value: 'Primary Author' },
        { label: 'CNN Forward', value: '28.44 ms' },
        { label: 'Models', value: 'YOLOv8 / YOLO11' }
      ],
      overview: 'Addresses a critical instrumentation blind spot on rocket engine test stands: external localized fires, flange leaks, plume asymmetry, and nozzle burn-through often escalate milliseconds before 1D chamber pressure transducers register redlines.',
      bullets: [
        'Curated and annotated proprietary static-fire datasets capturing nominal burns, plume detachment, nozzle burn-through, and external leaks.',
        'Trained and quantized <strong>YOLOv8 / YOLO11</strong> models (<em>frank1</em>, <em>sabrina</em>) hitting a <strong>28.44 ms CNN forward pass</strong> (44.35 ms YOLO pipeline, 101.24 ms / 9.9 FPS end-to-end on 1080p frames).',
        'Built live console operator panel (<em>HotVizControlPanel</em>) surfacing bounding boxes, confidence scores, and autonomous abort triggers.'
      ],
      tags: ['AIAA SciTech 2027', 'YOLOv8 / YOLO11', 'PyTorch', 'Auto-Abort Logic', 'Edge CV', 'Propulsion Safety'],
      links: [
        { label: 'GitHub Pytorch Repo', url: 'https://github.com/calebstone15/Pytorch', kind: 'primary' }
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
      summary: 'Closed-loop 3-layer C++ source-code RAG + PX4/ArduPilot SITL pipeline executing 24,000 total flights (9,000 source-RAG runs isolating 1,375 silent failure events / 1,205 patterns) on 1:40 Crazyflie 2.1 hardware.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/atlas-flight-1010-telemetry.webp',
        alt: 'ATLAS flight 1010 3-panel trajectory, altitude, and attitude telemetry under fault injection',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/atlas-flight-1010-telemetry.webp', caption: 'ATLAS Flight 1010 telemetry showing dual-baro & motor fault perturbation recovery', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/atlas-flight-1010-timeline.webp', caption: 'Fault injection timeline correlating autopilot mode transitions', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/atlas-rag-coverage-heatmap.webp', caption: '3-layer hierarchical RAG code-coverage exploration heatmap', tone: 'light' },
        { type: 'video', src: 'portfolio-assets/video/raise-lab-timelapse.mp4', caption: 'Bitcraze Crazyflie 2.1 Brushless assembly & Lighthouse arena commissioning' }
      ],
      metrics: [
        { label: 'Venue', value: 'AIAA SciTech 2027' },
        { label: 'SITL Scale', value: '24,000 Flights' },
        { label: 'Bugs Isolated', value: '1,375 Events' },
        { label: 'HITL Accuracy', value: '0.0316 m Error' }
      ],
      overview: 'Combines source-aware LLM fault generation with massive parallel autopilot simulation and physical indoor micro-UAS flight replay to uncover silent control stalls missed by standard regression tests.',
      bullets: [
        'Coupled <strong>3-layer hierarchical memory + C++ source-code RAG</strong> with parallel <strong>ArduPilot &amp; PX4 SITL</strong> fault injection across <strong>24,000 total flights</strong> (9,000 C++ source-RAG runs).',
        'Isolated <strong>1,375 silent autopilot failure events</strong> (<strong>1,205 unique failure patterns</strong>) and sensor spoofing vulnerabilities.',
        'Led sim-to-real HITL transfer on <strong>Bitcraze Crazyflie 2.1 Brushless</strong> via <strong>Crazyradio 2.0 PA</strong>, Kalman EKF, and <strong>HTC Vive Lighthouse</strong> IPPE calibration (<strong>0.0316 m</strong> waypoint error).'
      ],
      tags: ['AIAA SciTech 2027', 'PX4 / ArduPilot', 'C++ Source RAG', 'Crazyflie 2.1', 'HTC Vive Lighthouse', 'HITL'],
      links: []
    },
    {
      id: 'res-swfta',
      section: 'research',
      categories: ['systems', 'autonomy'],
      badge: 'ISSS 2026 + AIAA',
      timeframe: '2025 - 2026',
      org: 'Q. Galen, E. Bear, C. Stone, J. Black, V. Nagaraju',
      title: 'Quantitative Software Fault Tree Analysis (SwFTA) via Activity Diagrams',
      summary: 'Formalized mathematical mapping from UML/SysML Activity Diagrams into Boolean quantitative fault trees for autonomous perception, extended with a 10-category software fault taxonomy.',
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
        { label: 'Published', value: 'ISSS 2026' },
        { label: 'Extension', value: 'AIAA Manuscript' },
        { label: 'Taxonomy', value: '10 Fault Classes' },
        { label: 'Notation', value: 'UML / SysML -> FTA' }
      ],
      overview: 'Bridges qualitative software architecture diagrams and rigorous probabilistic safety cases by systematically transforming control-flow decisions, forks, and exception edges into minimal cut-set fault trees.',
      bullets: [
        'Established formal translation rules mapping <strong>UML/SysML Activity Diagram</strong> execution paths into quantitative Boolean fault trees.',
        'Quantified perception and sensor-exception risk contributions for autonomous aerospace safety assurance.',
        'Extended ISSS 2026 work with a <strong>10-category software fault taxonomy</strong> and evidentiary-support scoring framework.'
      ],
      tags: ['SwFTA', 'ISSS 2026', 'UML / SysML', 'Boolean Fault Trees', 'Safety Assurance', 'MIL-STD-882'],
      links: [
        { label: 'AIAA Poster PDF', url: 'portfolio-assets/docs/SwFTA_AIAA_Poster.pdf', kind: 'primary' }
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
      summary: 'Published INCOSE 2026 methodology extracting semantic severity and defect context from unstructured engineering anomaly logs to inform classical NHPP Software Reliability Growth Models.',
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
        { label: 'Venue', value: 'INCOSE 2026' },
        { label: 'Showcase', value: 'Discovery Day' },
        { label: 'Input', value: 'Unstructured Logs' },
        { label: 'Model Family', value: 'NHPP SRGM' }
      ],
      overview: 'Transforms noisy, free-text discrepancy reports, bug tracker tickets, and commit logs into structured engineering risk signals consumed by Non-Homogeneous Poisson Process reliability models.',
      bullets: [
        'Designed hybrid pipeline pairing <strong>LLM semantic extraction</strong> from anomaly reports with classical <strong>NHPP reliability growth models</strong>.',
        'Converted unstructured defect histories into structured features predicting <strong>MTTF and residual defect counts</strong>.',
        'Published and presented at the <strong>INCOSE International Symposium 2026</strong> and ERAU Discovery Day.'
      ],
      tags: ['INCOSE 2026', 'NHPP SRGM', 'LLM Feature Extraction', 'Reliability Engineering', 'Anomaly Logs'],
      links: [
        { label: 'INCOSE Poster PDF', url: 'portfolio-assets/docs/Hybrid_LLM_SRGM_Poster.pdf', kind: 'primary' }
      ]
    },
    {
      id: 'res-cog-dyn',
      section: 'research',
      categories: ['autonomy', 'systems'],
      badge: 'ISSS 2026',
      timeframe: '2025 - 2026',
      org: 'S. Jadhav, N. La Placa, C. Stone, A. Raja, O. Ochoa, V. Nagaraju',
      title: 'Compound Prompt Constraints in LLM Code Generation',
      summary: 'Empirical factorial evaluation at ISSS 2026 quantifying how interacting format, persona, and urgency prompt constraints affect correctness and safety in AI-generated code.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/cog-dynamics-framework.webp',
        alt: 'Factorial experiment design diagram for LLM Cognitive Dynamics ISSS 2026 study',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/cog-dynamics-framework.webp', caption: 'ISSS 2026 Cognitive Dynamics experimental harness & factorial constraint matrix', tone: 'light' },
        { type: 'image', src: 'portfolio-assets/img/raise-lab-isss2026-team.webp', caption: 'ISSS 2026 RAISE Lab authorship team', tone: 'dark' }
      ],
      metrics: [
        { label: 'Venue', value: 'ISSS 2026' },
        { label: 'Design', value: 'Factorial Study' },
        { label: 'Variables', value: 'Format/Persona/Urgency' },
        { label: 'Focus', value: 'Code Safety' }
      ],
      overview: 'Investigates failure modes when engineering teams apply stacked constraints to foundation-model code synthesis, isolating interactions that degrade syntactic accuracy or bypass safety invariants.',
      bullets: [
        'Built automated prompt benchmark harness evaluating <strong>compound interactions across format, persona, and time urgency</strong>.',
        'Quantified syntactic degradation and safety-check regressions across state-of-the-art foundation models.',
        'Published and presented peer-reviewed findings at the <strong>44th International System Safety Summit (ISSS 2026)</strong>.'
      ],
      tags: ['ISSS 2026', 'Empirical AI Safety', 'Factorial DOE', 'LLM Evaluation', 'Python Harness'],
      links: [
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
        { label: 'ABM Engine', value: 'NetLogo 7.0.4' }
      ],
      overview: 'Automated extraction and risk quantification pipeline transforming raw narrative FAA drone sighting logs (2019-2025) into calibrated 3D terminal airspace encounter simulations.',
      bullets: [
        'Executed structured <strong>LLM extraction across 6,730 FAA sUAS sighting reports (2019-2025)</strong>.',
        'Trained <strong>balanced-bagged Random Forest</strong> severity classifier (<strong>ROC AUC = 0.90</strong>) and <strong>XGBoost</strong> multiclass phase classifier (<strong>66% accuracy</strong>).',
        'Calibrated a <strong>3D-altitude NetLogo 7.0.4 ABM</strong> using BehaviorSpace sweeps to quantify NMAC risk on ILS glideslopes.'
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
        { label: 'Sequence', value: '35 Commands' },
        { label: 'Chamber Steady', value: '350 psi / 2285°F' },
        { label: 'Cryo Target', value: '-297°F LOX Chill' }
      ],
      overview: 'Multi-operator Launch Control Center simulator training test engineers across realistic liquid rocket hotfire procedures, redlines, and faulted chilldown recovery.',
      bullets: [
        'Orchestrates <strong>8 distributed Tkinter + Matplotlib consoles</strong> (F1/F2 Upstream/Tank/Downstream, Engine, VisualOps) from a unified launcher.',
        'Models <strong>35 timed commands (T-11:30 to +0:50)</strong>, Excel-backed target weights (<strong>25 lbf LOX / 20 lbf Fuel</strong>), and regulator setpoints (<strong>R1=1000, R2=975, R3=200 psi</strong>).',
        'Simulates exponential thermal/pressure transients (<strong>-297°F LOX chill, 350 psi chamber, 2285°F peak</strong>), simulated <strong>&lt;250°F chill anomaly</strong> forcing re-chill, Pyrograin + PB4/PB8 run valves, and N2 purge.'
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
        { label: 'Frame Mass', value: '<= 77 lbs' },
        { label: 'Powertrain', value: '<= 215 lbs / >=72HP' },
        { label: 'Aero Goals', value: 'CLA>3.1 | L/D>2.9' },
        { label: 'Torsional Rigidity', value: '>2359 N-m/deg' }
      ],
      overview: 'Rigorous graduate systems architecture definition decomposing Formula SAE vehicle stakeholder needs into verifiable subsystem allocations, alongside system boundary & functional decomposition models for Elevator, Lightbulb, and Utopia of the Seas case studies.',
      bullets: [
        'Co-authored <strong>Phase 2 System Definition Report</strong> (Levi Blumer &amp; Caleb Stone) establishing mass, aero, stiffness, and propulsion allocations.',
        'Developed <strong>IDEF0 functional architectures</strong>, physical/behavioral hierarchies, and system boundary diagrams across multiple engineering domains.'
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
        { label: 'Transport', value: 'HTTPS + SSE Live' },
        { label: 'Desktop App', value: 'Swift WKWebView' },
        { label: 'Models', value: 'Statechart / DFD' },
        { label: 'Focus', value: 'Transit Safety' }
      ],
      overview: 'End-to-end systems safety engineering project coupling real-time bidirectional dispatch/passenger telemetry software with formal behavioral modeling (Statecharts, Use Cases, Data Flow Diagrams, and Class Models).',
      bullets: [
        'Implemented real-time <strong>Python HTTPS + Server-Sent Events (SSE)</strong> dispatch server paired with native <strong>Swift macOS Dispatch app</strong>.',
        'Authored formal <strong>Statechart, Use Case, Level 0/1 DFD, and Class Model</strong> safety &amp; requirements specifications.'
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
        { label: 'Sim Runs', value: '35 Monte Carlo' },
        { label: 'Spatial Scale', value: '50 ft / patch' },
        { label: 'Layout Delta', value: '+26.6% Intersecting' },
        { label: 'Exit Geometry', value: '-14.1% @ 30 deg' }
      ],
      overview: 'Quantitative kinematic airport surface conflict model encoding Newtonian acceleration/braking envelopes and Stroeve A-E severity classification to evaluate runway geometry trade-offs.',
      bullets: [
        'Simulated Newtonian aircraft braking/taxiing dynamics across <strong>35 NetLogo 6.x runs</strong> calibrated to <strong>Stroeve A-E conflict tiers</strong>.',
        'Quantified that intersecting runways generated <strong>26.6% higher total incursions</strong> than parallel layouts, while <strong>30° high-speed exits reduced incursions 14.1%</strong> vs 45° exits.'
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
        { label: 'Cruise Envelope', value: '~60 km / >=250 mph' },
        { label: 'Lifecycle Cost', value: '$1.23B ($130M LV)' }
      ],
      overview: 'Comprehensive interplanetary mission operations design covering trajectory, launch vehicle selection, telecom relay architecture, programmatic costing, and end-of-life atmospheric entry.',
      bullets: [
        'Selected <strong>SpaceX Falcon Heavy (Expendable) from KSC LC-39A</strong> ($130M LV / $1.1B TFU = $1.23B total) for Venus C3 injection.',
        'Architected boost-stage conversion into a <strong>Low Venus Orbit (LVO) telecom relay</strong> downlinking science via NASA DSN.',
        'Developed <strong>5x5 anomaly &amp; mission risk matrix</strong>, flight ops timelines, and controlled end-of-life deep-cloud dive.'
      ],
      tags: ['Falcon Heavy', 'KSC LC-39A', 'Mission Planning', '5x5 Risk Matrix', 'NASA DSN', 'Lifecycle Cost'],
      links: []
    },
    {
      id: 'cls-sys304',
      section: 'classwork',
      categories: ['systems'],
      badge: 'SYS 304 • FALCON 9',
      timeframe: 'FALL 2025',
      org: 'Systems Architecture & Modeling',
      title: 'Invisia Space-Based Dark Matter Observatory Architecture (AHP)',
      summary: 'SysML/ICD observatory architecture and quantitative Analytic Hierarchy Process (AHP) trade study selecting Falcon 9 (1.80), SpaceX (0.98), KSC, high-res IR optics, and 20-yr RTG.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/sys304-ahp-matrix.webp',
        alt: 'SYS 304 quantitative Analytic Hierarchy Process trade study matrices selecting Falcon 9 and SpaceX',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/sys304-ahp-matrix.webp', caption: 'AHP trade study matrices evaluating launch vehicle, provider, site, payload, and power', tone: 'light' }
      ],
      metrics: [
        { label: 'Selected LV', value: 'Falcon 9 (1.80)' },
        { label: 'Provider Score', value: 'SpaceX (0.98)' },
        { label: 'Payload', value: 'IR Optics (2.72)' },
        { label: 'Power', value: '20-yr RTG (1.44)' }
      ],
      overview: 'Structured SysML system-of-systems definition, Interface Control Documents (ICDs), and mathematically weighted AHP trade studies for a deep-space dark matter/energy observatory.',
      bullets: [
        'Executed quantitative <strong>AHP pairwise comparison matrices</strong> selecting <strong>Falcon 9</strong>, <strong>SpaceX</strong>, KSC (1.28), IR payload, and 20-year RTG.',
        'Authored functional/physical decomposition, <strong>SysML diagrams</strong>, and interface control specifications.'
      ],
      tags: ['SysML', 'AHP Trade Study', 'Falcon 9 / SpaceX', 'ICDs', 'Spacecraft Architecture'],
      links: []
    },
    {
      id: 'cls-sp400',
      section: 'classwork',
      categories: ['systems', 'avionics'],
      badge: 'SP 400',
      timeframe: 'DEC 2025',
      org: 'Introduction to Space Navigation',
      title: 'Parker Solar Probe Multi-Gravity-Assist Navigation Analysis',
      summary: 'Analyzed multi-Venus-flyby trajectory mechanics and INS, star tracker, and Digital Sun Sensor attitude/navigation error budgets near solar perihelion.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/sp400-parker-solar-plot.webp',
        alt: 'SP 400 Parker Solar Probe orbital distance from Sun evolution plot',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/sp400-parker-solar-plot.webp', caption: 'Parker Solar Probe perihelion distance progression across Venus gravity assists', tone: 'dark' }
      ],
      metrics: [
        { label: 'Mission', value: 'Parker Solar Probe' },
        { label: 'Maneuver', value: '7 Venus Assists' },
        { label: 'Sensors', value: 'INS / Star / DSS' },
        { label: 'Focus', value: 'GNC Error Budget' }
      ],
      overview: 'Evaluated deep-space guidance, navigation, and control (GN&C) sensor fusion requirements under extreme thermal and solar-radiation environments.',
      bullets: [
        'Modeled multi-gravity-assist heliocentric perihelion lowering and orbital velocity profiles.',
        'Analyzed sensor noise and alignment errors across <strong>INS, Star Trackers, and Digital Sun Sensors (DSS)</strong>.'
      ],
      tags: ['Space Navigation', 'Gravity Assists', 'Star Trackers', 'Digital Sun Sensors', 'GN&C'],
      links: []
    },
    {
      id: 'cls-sys415',
      section: 'classwork',
      categories: ['systems'],
      badge: 'SYS 415',
      timeframe: 'APR 2026',
      org: 'Systems Integration, Verification & Testing',
      title: 'Systems IV&V, FMECA & Boundary Test Specification',
      summary: 'Formulated end-to-end integration, verification & validation (IV&V) test harnesses, Failure Modes Effects & Criticality Analysis (FMECA), FTA, and boundary test protocols.',
      media: {
        type: 'schematic',
        schematicKey: 'ivv'
      },
      gallery: [
        { type: 'schematic', schematicKey: 'ivv', caption: 'IV&V verification matrix, FMECA criticality ranking, and fault tree specification' }
      ],
      metrics: [
        { label: 'Lifecycle', value: 'IV&V V-Model' },
        { label: 'Safety Tools', value: 'FMECA + FTA' },
        { label: 'Test Type', value: 'Structural Boundary' },
        { label: 'Metrics', value: 'RAM Triangle' }
      ],
      overview: 'Comprehensive verification and test engineering package tracing every system requirement to formal pass/fail test steps, hazard mitigations, and reliability-availability-maintainability (RAM) metrics.',
      bullets: [
        'Constructed <strong>FMECA</strong> risk prioritization and <strong>Fault Tree Analysis (FTA)</strong> identifying top-level structural &amp; operational failure paths.',
        'Authored boundary verification test procedures ensuring deterministic requirement traceability.'
      ],
      tags: ['IV&V', 'FMECA', 'Fault Tree Analysis', 'Boundary Testing', 'RAM Triangle'],
      links: []
    },
    {
      id: 'cls-ba452',
      section: 'classwork',
      categories: ['systems'],
      badge: 'BA 452 • SIX SIGMA',
      timeframe: 'SPRING 2026',
      org: 'Lean Six Sigma in Aerospace',
      title: 'Aerospace Lean Six Sigma DMADV / Black Belt Process Optimization',
      summary: 'Applied DMADV/DMAIC statistical process control (Cp, Cpk) and factory floor flow balancing delivering +15% margin on a 600 units/day production baseline.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/ba452-factory-flow.webp',
        alt: 'BA 452 aerospace Lean Six Sigma factory floor process flow optimization diagram',
        fit: 'light'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/ba452-factory-flow.webp', caption: 'Optimized manufacturing cell flow diagram (Black Belt DMADV capstone)', tone: 'light' }
      ],
      metrics: [
        { label: 'Framework', value: 'DMADV / Black Belt' },
        { label: 'Throughput', value: '600 units/day' },
        { label: 'Gain', value: '+15% Margin' },
        { label: 'Metrics', value: 'SPC (Cp / Cpk)' }
      ],
      overview: 'Applied Lean Six Sigma Yellow, Green, and Black Belt analytical toolkits to diagnose manufacturing cycle bottlenecks, reduce defect variance, and maximize production margin.',
      bullets: [
        'Modeled process capability (<strong>Cp, Cpk</strong>) and takt-time line balancing across a <strong>600 units/day</strong> factory baseline.',
        'Delivered a verified DMADV redesign projected to lift operating margin by <strong>+15%</strong>.'
      ],
      tags: ['Lean Six Sigma', 'DMADV / DMAIC', 'SPC (Cp / Cpk)', 'Factory Flow', 'Manufacturing Ops'],
      links: []
    },
    {
      id: 'cls-ba424',
      section: 'classwork',
      categories: ['systems'],
      badge: 'BA 424',
      timeframe: 'FALL 2025',
      org: 'Project Management in Aviation Operations',
      title: 'Boeing 777-200 Fleet Refresh — CPM, WBS & EVM Schedule',
      summary: 'Built full Microsoft Project Work Breakdown Structure (WBS), Critical Path Method (CPM) network, Earned Value Management (EVM) tracking, and procurement/risk baseline.',
      media: {
        type: 'schematic',
        schematicKey: 'evm'
      },
      gallery: [
        { type: 'schematic', schematicKey: 'evm', caption: 'MS Project Critical Path Method & Earned Value Management baseline' }
      ],
      metrics: [
        { label: 'Platform', value: 'Boeing 777-200' },
        { label: 'Scheduling', value: 'MS Project CPM' },
        { label: 'Cost Control', value: 'EVM (CPI / SPI)' },
        { label: 'Deliverables', value: 'WBS & Risk Plan' }
      ],
      overview: 'End-to-end aerospace program management baseline coordinating hangar downtime, supplier lead times, certification milestones, and earned-value cost control.',
      bullets: [
        'Structured multi-tier <strong>WBS</strong> and <strong>Critical Path Method (CPM)</strong> dependency schedule in Microsoft Project.',
        'Integrated <strong>Earned Value Management (EVM)</strong> variance forecasting, vendor procurement buffers, and risk registers.'
      ],
      tags: ['MS Project', 'Critical Path (CPM)', 'Earned Value (EVM)', 'WBS', 'Risk Management'],
      links: []
    },
    {
      id: 'cls-sp300-200',
      section: 'classwork',
      categories: ['systems', 'propulsion'],
      badge: 'SP 300 & SP 200',
      timeframe: '2024 - 2025',
      org: 'Satellite Systems & Planetary Exploration',
      title: 'Spacecraft Subsystem Sizing & Europa Exploration Mission',
      summary: 'Sized spacecraft EPS, ADCS, TT&C link budgets, thermal control, and delta-v propulsion (SP 300), paired with Europa subsurface ocean & magnetosphere payload design (SP 200).',
      media: {
        type: 'schematic',
        schematicKey: 'spacecraft'
      },
      gallery: [
        { type: 'schematic', schematicKey: 'spacecraft', caption: 'Spacecraft bus subsystem budgets & Jovian/Europa radiation mission design' }
      ],
      metrics: [
        { label: 'Subsystems', value: 'EPS/ADCS/TT&C' },
        { label: 'Target', value: 'Europa / Gateway' },
        { label: 'Analysis', value: 'RF Link & Delta-V' },
        { label: 'Env', value: 'Jovian Radiation' }
      ],
      overview: 'Quantitative spacecraft bus engineering across power generation, attitude control actuation, thermal radiators, RF link margin closure, and deep-space science instrumentation.',
      bullets: [
        'Computed end-to-end <strong>EPS solar/battery sizing, ADCS momentum budgets, TT&amp;C RF link margins, and thermal dissipation</strong>.',
        'Architected robotic <strong>Europa subsurface ocean and magnetosphere payload suite</strong> under Jovian radiation shielding constraints.'
      ],
      tags: ['Spacecraft Sizing', 'Link Budgets', 'EPS / ADCS', 'Thermal Control', 'Europa Mission'],
      links: []
    },
    {
      id: 'cls-sp110',
      section: 'classwork',
      categories: ['propulsion', 'systems'],
      badge: 'SP 110 • RCA',
      timeframe: 'FALL 2024',
      org: 'Forensic Spaceflight Failure Analysis',
      title: 'Vulcan Cert-2 GEM 63XL SRB Nozzle Failure Investigation',
      summary: 'Conducted optical burn-through timeline forensics and Fault Tree Analysis (FTA) evaluating carbon-phenolic insulation delamination and hot-gas seal breach hypotheses.',
      media: {
        type: 'schematic',
        schematicKey: 'vulcanFta'
      },
      gallery: [
        { type: 'schematic', schematicKey: 'vulcanFta', caption: 'Fault Tree Analysis of GEM 63XL SRB nozzle thermal-erosion anomaly' }
      ],
      metrics: [
        { label: 'Vehicle', value: 'Vulcan Cert-2' },
        { label: 'Hardware', value: 'GEM 63XL SRB' },
        { label: 'Method', value: 'Fault Tree + Video' },
        { label: 'Mechanism', value: 'Thermal Erosion' }
      ],
      overview: 'Applied forensic aerospace engineering methods to reconstruct the October 2024 ULA Vulcan Cert-2 solid rocket booster nozzle anomaly from launch broadcast imagery and acoustic signatures.',
      bullets: [
        'Correlated frame-by-frame launch video plume changes and acoustic anomalies into an objective <strong>thermal-erosion timeline</strong>.',
        'Built structured <strong>Fault Tree Analysis (FTA)</strong> ranking carbon-phenolic liner delamination and hot-gas seal breach pathways.'
      ],
      tags: ['Root Cause Analysis', 'Fault Tree Analysis', 'Solid Rocket Motors', 'Thermal Erosion', 'Optical Forensics'],
      links: []
    },
    {
      id: 'cls-sys301-320',
      section: 'classwork',
      categories: ['systems', 'avionics'],
      badge: 'SYS 301 & SYS 320',
      timeframe: 'FALL 2024',
      org: 'Systems Engineering & Agile Robotics',
      title: 'Autonomous Competition Robot (Hurwitz Trade Study & Scrum)',
      summary: 'Executed INCOSE requirements decomposition and Laplace/Hurwitz (alpha=0.8) quantitative trade studies (SYS 301) paired with Agile Scrum sprint robotics integration (SYS 320).',
      media: {
        type: 'schematic',
        schematicKey: 'hurwitz'
      },
      gallery: [
        { type: 'schematic', schematicKey: 'hurwitz', caption: 'Laplace & Hurwitz (alpha=0.8) quantitative concept selection trade study' }
      ],
      metrics: [
        { label: 'Decision Rule', value: 'Hurwitz a = 0.8' },
        { label: 'Process', value: 'INCOSE + Scrum' },
        { label: 'Domain', value: 'Autonomous Robot' },
        { label: 'Artifacts', value: 'Req Traceability' }
      ],
      overview: 'Unified formal systems engineering decision analysis with rapid Agile hardware sprint cycles for a competition robotics platform.',
      bullets: [
        'Conducted formal concept trade studies using <strong>Laplace and Hurwitz (alpha = 0.8)</strong> utility criteria.',
        'Managed iterative hardware/software integration sprints under <strong>Agile Scrum</strong> and requirement traceability baselines.'
      ],
      tags: ['Hurwitz / Laplace', 'INCOSE Handbook', 'Agile Scrum', 'Autonomous Robotics', 'Trade Studies'],
      links: []
    },
    {
      id: 'cls-egr101',
      section: 'classwork',
      categories: ['propulsion', 'systems'],
      badge: 'EGR 101 • 3RD PLACE',
      timeframe: 'SPRING 2023',
      org: 'Intro to Engineering Design Lab',
      title: 'C-130 Scale Glider (3rd Place), AN-12 Satellite Transport & Ball Launcher',
      summary: 'Led 4-person team to 3rd Place university-wide in Lockheed Martin C-130 glider aerodynamics; designed Antonov AN-12 satellite transport (3 sats, 1350 nm) and 3D-printed Ball Launcher.',
      media: {
        type: 'image',
        src: 'portfolio-assets/img/egr101-ball-launcher-cad.webp',
        alt: 'EGR 101 3D CAD rendering of mechanical ball launcher prototype',
        fit: 'cover'
      },
      gallery: [
        { type: 'image', src: 'portfolio-assets/img/egr101-ball-launcher-cad.webp', caption: 'Ball Launcher 3D CAD assembly (Autodesk Inventor)', tone: 'dark' },
        { type: 'image', src: 'portfolio-assets/img/egr101-an12-cad.webp', caption: 'Antonov AN-12 satellite transport airframe CAD layout (3 satellites, 1,350 nm range)', tone: 'light' }
      ],
      metrics: [
        { label: 'Award', value: '3rd Place Overall' },
        { label: 'Glider', value: 'C-130 Scale L/D' },
        { label: 'Transport', value: 'AN-12 / 1,350 nm' },
        { label: 'Manufacturing', value: '3D Print + CAD' }
      ],
      overview: 'Foundational aerospace design-build-test sequence spanning subsonic glider flight testing, cargo aircraft payload integration, and rapid additive mechanical prototyping.',
      bullets: [
        'Led 4-engineer team to <strong>3rd Place Overall</strong> university-wide in the <strong>Lockheed Martin C-130 scale glider</strong> flight competition via CG/CL L/D tuning.',
        'Designed <strong>Antonov AN-12 satellite transport</strong> sizing (3 satellites, 1,350 nm range, PW 308A propulsion) and CAD-modeled/3D-printed Ball Launcher.'
      ],
      tags: ['Autodesk Inventor', '3D Printing', 'Aerodynamics (L/D)', 'CG/CL Stability', 'Competition Award'],
      links: []
    },
    {
      id: 'cls-egr120',
      section: 'classwork',
      categories: ['systems'],
      badge: 'EGR 120',
      timeframe: 'SPRING 2023',
      org: 'Graphical Communications & CAD',
      title: 'CATIA V5 Parametric Solid Modeling & ASME GD&T Assemblies',
      summary: 'Constructed parametric aerospace surface/solid models, multi-component assemblies, orthographic engineering drawings, and GD&T tolerance stackups in CATIA V5.',
      media: {
        type: 'schematic',
        schematicKey: 'catia'
      },
      gallery: [
        { type: 'schematic', schematicKey: 'catia', caption: 'CATIA V5 parametric assemblies, orthographic projections & ASME Y14.5 GD&T' }
      ],
      metrics: [
        { label: 'CAD Package', value: 'CATIA V5' },
        { label: 'Standard', value: 'ASME Y14.5 GD&T' },
        { label: 'Output', value: 'Orthographic BOM' },
        { label: 'Skills', value: 'Surfaces & Solids' }
      ],
      overview: 'Hands-on aerospace mechanical drafting curriculum mastering parametric feature trees, kinematic assembly constraints, section views, and tolerance callouts.',
      bullets: [
        'Authored parametric aerospace solid and surface geometries in <strong>CATIA V5</strong> with full assembly constraints.',
        'Generated production-grade <strong>orthographic drawings, section views, BOMs, and ASME Y14.5 GD&amp;T</strong> tolerances.'
      ],
      tags: ['CATIA V5', 'GD&T', 'Parametric CAD', 'Orthographic Drafting', 'BOM'],
      links: []
    },
    {
      id: 'cls-egr115',
      section: 'classwork',
      categories: ['propulsion'],
      badge: 'EGR 115',
      timeframe: 'FALL 2022',
      org: 'Computing for Engineers',
      title: 'Two-Stage Launch Vehicle Materials Cost & Structural Sizing Algorithm',
      summary: 'Developed procedural engineering software optimizing two-stage launch vehicle structural mass fractions, tank geometry scaling, and material BOM cost trade-offs.',
      media: {
        type: 'schematic',
        schematicKey: 'stageCost'
      },
      gallery: [
        { type: 'schematic', schematicKey: 'stageCost', caption: 'Procedural two-stage structural mass ratio vs materials cost solver' }
      ],
      metrics: [
        { label: 'Architecture', value: '2-Stage Vehicle' },
        { label: 'Variables', value: 'Mass & $/kg' },
        { label: 'Method', value: 'Procedural Solver' },
        { label: 'Output', value: 'Cost Trade Curve' }
      ],
      overview: 'Algorithmic trade-study tool linking structural alloy material pricing and stage sizing equations to evaluate launch vehicle dry-mass vs cost sensitivity.',
      bullets: [
        'Programmed procedural sizing algorithms computing stage tank volumes, structural dry mass, and raw material cost.',
        'Evaluated alloy selection and mass-fraction trade curves for multi-stage orbital boosters.'
      ],
      tags: ['Launch Vehicle Sizing', 'Structural Mass Ratio', 'Numerical Algorithms', 'Cost Tradeoffs'],
      links: []
    },
    {
      id: 'cls-cs118',
      section: 'classwork',
      categories: ['autonomy'],
      badge: 'CS 118',
      timeframe: 'SUMMER 2025',
      org: 'Computer Science Final Project',
      title: '3D Asteroid Field Distance & Planetary Impact Simulator',
      summary: 'Modular Python 3D Cartesian astrodynamics simulator tracking multi-asteroid proximity vectors, collision envelopes, and structured telemetry logging.',
      media: {
        type: 'schematic',
        schematicKey: 'asteroid'
      },
      gallery: [
        { type: 'schematic', schematicKey: 'asteroid', caption: '3D Cartesian spacecraft-to-asteroid Euclidean range & collision hazard solver' }
      ],
      metrics: [
        { label: 'Language', value: 'Python 3' },
        { label: 'Space', value: '3D Cartesian (km)' },
        { label: 'Data Flow', value: 'Modular File I/O' },
        { label: 'Function', value: 'Hazard Alerting' }
      ],
      overview: 'Clean modular Python simulation ingesting spatial ephemeris coordinates to continuously evaluate 3D proximity threats relative to a spacecraft reference frame.',
      bullets: [
        'Implemented modular functions calculating 3D Euclidean distances across dynamic asteroid coordinate arrays.',
        'Automated structured telemetry file I/O, closest-approach sorting, and threshold collision warnings.'
      ],
      tags: ['Python 3', '3D Kinematics', 'File I/O', 'Proximity Alerting'],
      links: []
    }
  ];

  /* ========================================================================
     State & DOM References
     ======================================================================== */

  var state = {
    filter: 'all',
    query: '',
    theaterTab: 'local',
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
  var modalMetrics = document.getElementById('modalMetrics');
  var modalOverview = document.getElementById('modalOverview');
  var modalBullets = document.getElementById('modalBullets');
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

  function getSearchHaystack(project) {
    return [
      project.title,
      project.org,
      project.badge,
      project.timeframe,
      project.summary,
      project.overview,
      project.tags.join(' '),
      project.bullets.join(' ')
    ].join(' ').replace(/<[^>]*>/g, ' ').toLowerCase();
  }

  function renderSchematicNode(schematicKey) {
    var entry = SCHEMATICS[schematicKey] || SCHEMATICS.ivv;
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

    var ul = createEl('ul', 'card-bullets');
    var cardBulletCount = Math.min(project.bullets.length, 3);
    for (var i = 0; i < cardBulletCount; i++) {
      var li = document.createElement('li');
      li.innerHTML = project.bullets[i];
      ul.appendChild(li);
    }
    body.appendChild(ul);

    var actions = createEl('div', 'card-actions');
    var deepBtn = createEl('button', 'card-btn card-btn--primary', 'More Info');
    deepBtn.type = 'button';
    deepBtn.addEventListener('click', function () {
      openDeepDive(project, deepBtn);
    });
    actions.appendChild(deepBtn);

    if (project.links && project.links.length > 0) {
      var firstLink = project.links[0];
      var linkClass = 'card-btn';
      if (firstLink.kind === 'cyan') {
        linkClass += ' card-btn--cyan';
      }
      actions.appendChild(buildLinkButton(firstLink, linkClass));
    }

    body.appendChild(actions);
    card.appendChild(body);
    return card;
  }

  function renderAllProjects() {
    var i;
    for (i = 0; i < PROJECTS.length; i++) {
      var project = PROJECTS[i];
      project._search = getSearchHaystack(project);
      var grid = grids[project.section];
      if (grid) {
        var cardNode = buildProjectCard(project);
        project._cardEl = cardNode;
        grid.appendChild(cardNode);
      }
    }
  }

  /* ========================================================================
     Discipline Filtering & Live Search
     ======================================================================== */

  function applyFilters() {
    var q = state.query.trim().toLowerCase();
    var sectionTotals = { work: 0, erpl: 0, research: 0, classwork: 0 };
    var sectionVisible = { work: 0, erpl: 0, research: 0, classwork: 0 };
    var visibleCount = 0;

    for (var i = 0; i < PROJECTS.length; i++) {
      var p = PROJECTS[i];
      sectionTotals[p.section] += 1;

      var catMatch = state.filter === 'all' || p.categories.indexOf(state.filter) !== -1;
      var queryMatch = !q || p._search.indexOf(q) !== -1;
      var matched = catMatch && queryMatch;

      if (p._cardEl) {
        if (matched) {
          p._cardEl.classList.remove('is-filtered-out');
          visibleCount += 1;
          sectionVisible[p.section] += 1;
        } else {
          p._cardEl.classList.add('is-filtered-out');
        }
      }
    }

    var isFiltering = state.filter !== 'all' || q.length > 0;
    var sectionEls = document.querySelectorAll('.portfolio-section');
    for (var s = 0; s < sectionEls.length; s++) {
      var secEl = sectionEls[s];
      var secKey = secEl.getAttribute('data-section');
      var vis = sectionVisible[secKey] || 0;
      var tot = sectionTotals[secKey] || 0;
      var badge = secEl.querySelector('[data-section-count]');
      if (badge) {
        badge.textContent = isFiltering ? (vis + ' of ' + tot + ' shown') : (tot + ' Entries');
      }

      if (isFiltering && vis === 0) {
        secEl.classList.add('is-hidden');
      } else {
        secEl.classList.remove('is-hidden');
      }
    }

    resultsCount.textContent = 'Showing ' + visibleCount + ' / ' + PROJECTS.length + ' programs';
    if (visibleCount === 0) {
      emptyBanner.classList.add('visible');
    } else {
      emptyBanner.classList.remove('visible');
    }
  }

  function initFilters() {
    var filterPills = document.querySelectorAll('.filter-pill');
    for (var i = 0; i < filterPills.length; i++) {
      (function (pill) {
        pill.addEventListener('click', function () {
          for (var j = 0; j < filterPills.length; j++) {
            filterPills[j].classList.remove('active');
          }
          pill.classList.add('active');
          state.filter = pill.getAttribute('data-filter') || 'all';
          applyFilters();
        });
      })(filterPills[i]);
    }

    searchInput.addEventListener('input', function () {
      state.query = searchInput.value;
      if (state.query.length > 0) {
        searchClear.classList.add('visible');
      } else {
        searchClear.classList.remove('visible');
      }
      applyFilters();
    });

    searchClear.addEventListener('click', function () {
      searchInput.value = '';
      state.query = '';
      searchClear.classList.remove('visible');
      applyFilters();
      searchInput.focus();
    });

    resetFiltersBtn.addEventListener('click', function () {
      searchInput.value = '';
      state.query = '';
      state.filter = 'all';
      searchClear.classList.remove('visible');
      var pills = document.querySelectorAll('.filter-pill');
      for (var i = 0; i < pills.length; i++) {
        if (pills[i].getAttribute('data-filter') === 'all') {
          pills[i].classList.add('active');
        } else {
          pills[i].classList.remove('active');
        }
      }
      applyFilters();
    });
  }

  /* ========================================================================
     ERPL Video Theater (Local MP4 Loops + Verified @erplofficial YouTube)
     ======================================================================== */

  function renderTheaterViewport(item) {
    theaterViewport.innerHTML = '';
    if (state.theaterTab === 'local') {
      var video = document.createElement('video');
      video.controls = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = true;
      video.preload = 'metadata';

      var source = document.createElement('source');
      source.src = item.src;
      source.type = 'video/mp4';
      video.appendChild(source);
      theaterViewport.appendChild(video);

      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {});
      }
    } else {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + item.youtubeId + '?rel=0';
      iframe.title = item.title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      theaterViewport.appendChild(iframe);
    }

    theaterCaptionTitle.textContent = item.title;
    theaterCaptionMeta.textContent = item.meta;
    theaterExternalLink.href = item.externalUrl;
    theaterExternalLink.textContent = item.externalLabel + ' \u2197';
  }

  function renderTheaterPlaylist() {
    var list = state.theaterTab === 'local' ? THEATER_LOCAL_CLIPS : THEATER_YOUTUBE_VIDEOS;
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
    var tabs = document.querySelectorAll('[data-theater-tab]');
    for (var i = 0; i < tabs.length; i++) {
      (function (tab) {
        tab.addEventListener('click', function () {
          var nextTab = tab.getAttribute('data-theater-tab');
          if (nextTab === state.theaterTab) {
            return;
          }
          state.theaterTab = nextTab;
          state.theaterIndex = 0;
          for (var j = 0; j < tabs.length; j++) {
            var isSel = tabs[j] === tab;
            tabs[j].classList.toggle('active', isSel);
            tabs[j].setAttribute('aria-selected', isSel ? 'true' : 'false');
          }
          renderTheaterPlaylist();
          var list = state.theaterTab === 'local' ? THEATER_LOCAL_CLIPS : THEATER_YOUTUBE_VIDEOS;
          renderTheaterViewport(list[0]);
        });
      })(tabs[i]);
    }

    renderTheaterPlaylist();
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
    for (var m = 0; m < project.metrics.length; m++) {
      var box = createEl('div', 'modal-metric-box');
      box.appendChild(createEl('div', 'modal-metric-label', project.metrics[m].label));
      box.appendChild(createEl('div', 'modal-metric-val', project.metrics[m].value));
      modalMetrics.appendChild(box);
    }

    modalOverview.textContent = project.overview;

    modalBullets.innerHTML = '';
    for (var b = 0; b < project.bullets.length; b++) {
      var li = document.createElement('li');
      li.innerHTML = project.bullets[b];
      modalBullets.appendChild(li);
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

    deepDiveModal.classList.add('open');
    deepDiveModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  }

  function closeDeepDive() {
    deepDiveModal.classList.remove('open');
    deepDiveModal.setAttribute('aria-hidden', 'true');
    modalHeroMedia.innerHTML = '';
    if (!lightboxModal.classList.contains('open')) {
      document.body.style.overflow = '';
    }
    if (state.lastFocusEl && typeof state.lastFocusEl.focus === 'function') {
      state.lastFocusEl.focus();
    }
  }

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Expanded engineering visual';
    lightboxCaption.textContent = caption || '';
    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxCloseBtn.focus();
  }

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    if (!deepDiveModal.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  function initModalsAndLightbox() {
    modalCloseBtn.addEventListener('click', closeDeepDive);
    deepDiveModal.addEventListener('click', function (e) {
      if (e.target === deepDiveModal) {
        closeDeepDive();
      }
    });

    lightboxCloseBtn.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', function (e) {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

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
        if (lightboxModal.classList.contains('open')) {
          closeLightbox();
        } else if (deepDiveModal.classList.contains('open')) {
          closeDeepDive();
        }
      }
    });
  }

  /* ========================================================================
     Navigation & ScrollSpy
     ======================================================================== */

  function initNavigation() {
    if (mobileMenuBtn && portfolioNav) {
      mobileMenuBtn.addEventListener('click', function () {
        var nextOpen = !portfolioNav.classList.contains('open');
        portfolioNav.classList.toggle('open', nextOpen);
        mobileMenuBtn.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
      });
    }

    var jumpLinks = document.querySelectorAll('.nav-jump');
    for (var i = 0; i < jumpLinks.length; i++) {
      jumpLinks[i].addEventListener('click', function () {
        if (portfolioNav) {
          portfolioNav.classList.remove('open');
        }
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    if ('IntersectionObserver' in window) {
      var sections = document.querySelectorAll('.portfolio-section');
      var observer = new IntersectionObserver(function (entries) {
        for (var e = 0; e < entries.length; e++) {
          if (entries[e].isIntersecting) {
            var id = entries[e].target.getAttribute('id');
            for (var j = 0; j < jumpLinks.length; j++) {
              var href = jumpLinks[j].getAttribute('href');
              jumpLinks[j].classList.toggle('active', href === '#' + id);
            }
          }
        }
      }, { rootMargin: '-25% 0px -60% 0px' });

      for (var s = 0; s < sections.length; s++) {
        observer.observe(sections[s]);
      }
    }
  }

  /* ========================================================================
     Boot
     ======================================================================== */

  document.addEventListener('DOMContentLoaded', function () {
    renderAllProjects();
    initFilters();
    applyFilters();
    initTheater();
    initModalsAndLightbox();
    initNavigation();
  });
})();
