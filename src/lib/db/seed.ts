import type { Company } from "@/types/company";

export const companySeedData: Company[] = [
  {
    id: "1",
    slug: "apple",
    ticker: "AAPL",
    name: "Apple Inc.",
    tagline: "Think different",
    industry: "Consumer Electronics",
    headquarters: "Cupertino, CA",
    website: "https://www.apple.com",
    description:
      "Apple designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories. Its ecosystem spans hardware, software, and services including the App Store, iCloud, and Apple Music.",
    logoInitials: "AA",
    financials: {
      revenue: "$391B",
      netIncome: "$97B",
      revenueGrowth: "+2%",
      employees: 164000,
      marketCap: "$3.4T",
      founded: 1976,
    },
    executives: [
      { name: "Tim Cook", title: "Chief Executive Officer" },
      { name: "Luca Maestri", title: "Chief Financial Officer" },
      { name: "Craig Federighi", title: "Senior VP, Software Engineering" },
    ],
    keyMetrics: [
      { label: "Services Revenue", value: "$96B", trend: "up" },
      { label: "Gross Margin", value: "46%", trend: "up" },
      { label: "iPhone Revenue Share", value: "52%", trend: "neutral" },
    ],
  },
  {
    id: "2",
    slug: "tesla",
    ticker: "TSLA",
    name: "Tesla, Inc.",
    tagline: "Accelerating the world's transition to sustainable energy",
    industry: "Automotive & Clean Energy",
    headquarters: "Austin, TX",
    website: "https://www.tesla.com",
    description:
      "Tesla designs and manufactures electric vehicles, battery energy storage, and solar products. The company also develops autonomous driving technology and operates a global supercharging network.",
    logoInitials: "TS",
    financials: {
      revenue: "$97B",
      netIncome: "$15B",
      revenueGrowth: "+19%",
      employees: 140000,
      marketCap: "$780B",
      founded: 2003,
    },
    executives: [
      { name: "Elon Musk", title: "Chief Executive Officer" },
      { name: "Vaibhav Taneja", title: "Chief Financial Officer" },
    ],
    keyMetrics: [
      { label: "Vehicle Deliveries", value: "1.8M/yr", trend: "up" },
      { label: "Energy Storage Deployed", value: "31 GWh", trend: "up" },
      { label: "Operating Margin", value: "9.2%", trend: "down" },
    ],
  },
  {
    id: "3",
    slug: "microsoft",
    ticker: "MSFT",
    name: "Microsoft Corporation",
    tagline: "Empower every person and organization on the planet to achieve more",
    industry: "Enterprise Software & Cloud",
    headquarters: "Redmond, WA",
    website: "https://www.microsoft.com",
    description:
      "Microsoft develops, licenses, and supports software, cloud services, and devices. Its core segments include Azure cloud computing, Microsoft 365, LinkedIn, and Xbox gaming.",
    logoInitials: "MS",
    financials: {
      revenue: "$245B",
      netIncome: "$88B",
      revenueGrowth: "+16%",
      employees: 228000,
      marketCap: "$3.1T",
      founded: 1975,
    },
    executives: [
      { name: "Satya Nadella", title: "Chief Executive Officer" },
      { name: "Amy Hood", title: "Chief Financial Officer" },
    ],
    keyMetrics: [
      { label: "Azure Revenue Growth", value: "+29%", trend: "up" },
      { label: "Operating Margin", value: "44.6%", trend: "up" },
      { label: "Commercial Bookings Growth", value: "+15%", trend: "up" },
    ],
  },
];