import type { Company } from "@/types/company";

export const companySeedData: Company[] = [
  {
    id: "1",
    slug: "acme-corp",
    name: "Acme Corporation",
    tagline: "Innovation at scale",
    industry: "Enterprise Software",
    headquarters: "San Francisco, CA",
    website: "https://acme.example.com",
    description:
      "Acme Corporation is a leading enterprise software company specializing in workflow automation and business intelligence. Founded in 2008, Acme serves over 2,000 enterprise clients across 45 countries, helping organizations streamline operations and make data-driven decisions.",
    logoInitials: "AC",
    financials: {
      revenue: "$4.2B",
      netIncome: "$680M",
      revenueGrowth: "+18%",
      employees: 12400,
      marketCap: "$28.5B",
      founded: 2008,
    },
    executives: [
      { name: "Sarah Chen", title: "Chief Executive Officer" },
      { name: "Marcus Williams", title: "Chief Financial Officer" },
      { name: "Elena Rodriguez", title: "Chief Technology Officer" },
      { name: "James Park", title: "Chief Operating Officer" },
    ],
    keyMetrics: [
      { label: "Annual Recurring Revenue", value: "$3.8B", trend: "up" },
      { label: "Net Retention Rate", value: "124%", trend: "up" },
      { label: "Gross Margin", value: "78%", trend: "neutral" },
      { label: "Customer Count", value: "2,150", trend: "up" },
    ],
  },
  {
    id: "2",
    slug: "northstar-dynamics",
    name: "Northstar Dynamics",
    tagline: "Powering the future of energy",
    industry: "Clean Energy",
    headquarters: "Austin, TX",
    website: "https://northstar.example.com",
    description:
      "Northstar Dynamics develops next-generation battery technology and grid-scale energy storage solutions. The company partners with utilities and automotive manufacturers to accelerate the transition to renewable energy infrastructure.",
    logoInitials: "ND",
    financials: {
      revenue: "$1.8B",
      netIncome: "$210M",
      revenueGrowth: "+32%",
      employees: 6800,
      marketCap: "$12.1B",
      founded: 2014,
    },
    executives: [
      { name: "David Okonkwo", title: "Chief Executive Officer" },
      { name: "Lisa Tan", title: "Chief Financial Officer" },
      { name: "Robert Klein", title: "Chief Technology Officer" },
    ],
    keyMetrics: [
      { label: "Installed Capacity", value: "4.2 GW", trend: "up" },
      { label: "R&D Investment", value: "$420M", trend: "up" },
      { label: "Patents Held", value: "312", trend: "up" },
      { label: "Carbon Offset", value: "2.1M tons", trend: "up" },
    ],
  },
  {
    id: "3",
    slug: "meridian-health",
    name: "Meridian Health Systems",
    tagline: "Healthcare reimagined",
    industry: "Healthcare Technology",
    headquarters: "Boston, MA",
    website: "https://meridian.example.com",
    description:
      "Meridian Health Systems provides cloud-based clinical platforms for hospitals and health networks. Their integrated EHR, telehealth, and analytics suite serves over 500 healthcare organizations nationwide.",
    logoInitials: "MH",
    financials: {
      revenue: "$2.6B",
      netIncome: "$390M",
      revenueGrowth: "+14%",
      employees: 9100,
      marketCap: "$19.3B",
      founded: 2011,
    },
    executives: [
      { name: "Dr. Amanda Foster", title: "Chief Executive Officer" },
      { name: "Kevin O'Brien", title: "Chief Financial Officer" },
      { name: "Priya Sharma", title: "Chief Medical Officer" },
      { name: "Thomas Lee", title: "Chief Product Officer" },
    ],
    keyMetrics: [
      { label: "Patients Served", value: "18M", trend: "up" },
      { label: "Provider Network", value: "520 orgs", trend: "up" },
      { label: "Platform Uptime", value: "99.97%", trend: "neutral" },
      { label: "Clinical Outcomes", value: "+12%", trend: "up" },
    ],
  },
];
