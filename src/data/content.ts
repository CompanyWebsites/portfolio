export const roles = ["Engineer", "Industrialist", "Researcher", "Inventor"];

export const stats = [
  { value: 30, suffix: "+", label: "Years across industry & research" },
  { value: 16, suffix: "", label: "Research domains active" },
  { value: 10, suffix: "", label: "Invention families in IP pipeline" },
  { value: 3, suffix: "", label: "University research collaborations" },
];

export const journey = [
  {
    period: "1995 — 2000",
    title: "Mechanical Manager",
    org: "Mahakal Paper & Pulp Industries, Hoshangabad",
    body: "Hands-on foundation in mechanical engineering, plant operations, production and maintenance. Learned machines by living beside them — breakdowns, boilers, bearings, and the discipline of a running mill.",
    tags: ["Plant Operations", "Maintenance", "Production"],
    index: "01",
  },
  {
    period: "2000 — 2007",
    title: "General Manager",
    org: "Rajeshwari Paper & Pulp Industries, Hoshangabad",
    body: "Led full industrial management — planning, people, process optimisation, quality and cost. Turned shop-floor experience into systems thinking at plant scale.",
    tags: ["Industrial Management", "Quality Control", "Cost Analysis"],
    index: "02",
  },
  {
    period: "2007 — 2012",
    title: "Entrepreneur",
    org: "Thapak Petrol Pumps, Hoshangabad",
    body: "Ran commercial operations end-to-end. Business management, customer systems, energy retail economics — an education in operating cost, margin and scale no laboratory can teach.",
    tags: ["Business Operations", "Commercial Systems"],
    index: "03",
  },
  {
    period: "2017 — Present",
    title: "Consultant · Researcher · Inventor",
    org: "Independent practice + university collaborations",
    body: "Full pivot to engineering consultancy, independent research, technology development and IP generation — from ambient air purification without electricity to multi-output wind and solar thermal storage.",
    tags: ["R&D", "IP Generation", "Technology Transfer"],
    index: "04",
  },
];

export const expertise = [
  { title: "Paper & Pulp Manufacturing", desc: "Three decades deep — from fibre to finished sheet.", icon: "layers" },
  { title: "Industrial Planning & Plant Development", desc: "Greenfield layouts to capacity expansion.", icon: "factory" },
  { title: "Process Development & Optimisation", desc: "Bottleneck hunting, yield engineering.", icon: "git" },
  { title: "Industrial Production", desc: "Throughput, manpower, shift systems that hold.", icon: "cog" },
  { title: "Automation & Engineering Systems", desc: "Mechanically-driven logic where possible.", icon: "cpu" },
  { title: "Quality Control", desc: "Repeatability as a design constraint.", icon: "badge" },
  { title: "Material Development", desc: "Including alpha-cellulose enhancement.", icon: "atom" },
  { title: "Cost Analysis & Reduction", desc: "Operating economics before elegance.", icon: "chart" },
  { title: "Energy & Power Analysis", desc: "Low-energy and no-electricity pathways.", icon: "zap" },
  { title: "Industrial Process Optimisation", desc: "Energy, water, carbon per unit output.", icon: "gauge" },
  { title: "Technology Development", desc: "Lab concept → pilot → industrial scale.", icon: "flask" },
];

export type ResearchItem = {
  title: string;
  code: string;
  category: "Air & Carbon" | "Energy" | "Water" | "Advanced Systems";
  desc: string;
};

export const research: ResearchItem[] = [
  { title: "Air Purification Technologies", code: "R-01", category: "Air & Carbon", desc: "Mechanical / wind-driven purification without grid power." },
  { title: "Artificial Ventilation Systems", code: "R-02", category: "Air & Carbon", desc: "Air movement through mechanically driven systems." },
  { title: "Carbon Absorption Technologies", code: "R-03", category: "Air & Carbon", desc: "Low-energy carbon capture pathways." },
  { title: "CO₂ Conversion & Breaking", code: "R-04", category: "Air & Carbon", desc: "Breaking CO₂ into usable downstream products." },
  { title: "Carbon Absorption → Methanol", code: "R-05", category: "Air & Carbon", desc: "From captured carbon to liquid fuel logic." },
  { title: "Oxygen-Level Control Systems", code: "R-06", category: "Air & Carbon", desc: "Controlled oxygen environments, incl. altitude." },
  { title: "Testing Methodologies for Air Devices", code: "R-07", category: "Air & Carbon", desc: "Rigorous validation protocols for purifiers." },
  { title: "Wind Energy Systems", code: "R-08", category: "Energy", desc: "Multi-output turbines beyond electricity." },
  { title: "Solar Thermal Power & Storage", code: "R-09", category: "Energy", desc: "Heat generation + storage for round-the-clock use." },
  { title: "Optical Power Transfer", code: "R-10", category: "Energy", desc: "Beamed / optical energy delivery concepts." },
  { title: "Heating & Condensing w/o Electricity", code: "R-11", category: "Energy", desc: "Thermal effects via alternative mechanisms." },
  { title: "Water Treatment & Purification", code: "R-12", category: "Water", desc: "Industrial and potable treatment systems." },
  { title: "BOD & COD Reduction", code: "R-13", category: "Water", desc: "Effluent load reduction for process water." },
  { title: "Advanced Filtration (HEPA+)", code: "R-14", category: "Advanced Systems", desc: "High-efficiency particulate architectures." },
  { title: "Drone & Jet-Engine Technologies", code: "R-15", category: "Advanced Systems", desc: "Propulsion and aerial platform research." },
  { title: "Advanced Housing Technologies", code: "R-16", category: "Advanced Systems", desc: "Shelter systems with ventilation & thermal logic." },
];

export const patents = [
  {
    id: "PT-001",
    title: "Ambient Air Purification without Electricity",
    desc: "Purification driven by mechanical / wind energy instead of conventional electrical power. For streets, campuses, industrial perimeters.",
    field: "ENV / AIR",
  },
  {
    id: "PT-002",
    title: "Air Purification in Closed Premises without Electricity",
    desc: "Ventilation + purification for enclosed environments — no grid dependency, continuous passive operation.",
    field: "ENV / HVAC-X",
  },
  {
    id: "PT-003",
    title: "Artificial Ventilation System",
    desc: "Mechanically driven air-movement architecture for buildings and industrial sheds.",
    field: "MECH / VENT",
  },
  {
    id: "PT-004",
    title: "Carbon Equivalent Absorption without Electricity",
    desc: "Low-energy carbon absorption approach designed for deploy-anywhere economics.",
    field: "CARBON",
  },
  {
    id: "PT-005",
    title: "Multi-Output Wind Turbines",
    desc: "Wind systems engineered to deliver multiple useful outputs — not just electrons.",
    field: "ENERGY / WIND",
  },
  {
    id: "PT-006",
    title: "Solar Thermal Power Storage",
    desc: "Solar thermal generation coupled with storage for dispatchable industrial heat and power.",
    field: "ENERGY / SOLAR",
  },
  {
    id: "PT-007",
    title: "Advanced HEPA Filtration",
    desc: "High-efficiency filtration research for next-generation capture performance.",
    field: "FILTRATION",
  },
  {
    id: "PT-008",
    title: "Alpha Cellulose Development",
    desc: "Modification and enhancement of cellulose characteristics for higher-value applications.",
    field: "MATERIAL",
  },
  {
    id: "PT-009",
    title: "Heating & Condensing without Electricity",
    desc: "Heating and condensation via alternative energy mechanisms — off-grid thermal control.",
    field: "THERMAL",
  },
  {
    id: "PT-010",
    title: "Oxygen-Level Control",
    desc: "Engineering research for controlled-oxygen environments, including high-altitude contexts.",
    field: "ENV / O₂",
  },
];

export const collaborations = [
  {
    name: "MANIT Bhopal",
    full: "Maulana Azad National Institute of Technology",
    role: "Technical validation & engineering research",
    abbr: "MNT",
  },
  {
    name: "RGPV Bhopal",
    full: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    role: "Technology development & academic linkage",
    abbr: "RGP",
  },
  {
    name: "RKDF University, Bhopal",
    full: "RKDF University",
    role: "Applied research & testing collaboration",
    abbr: "RKD",
  },
];
