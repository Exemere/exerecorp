// data/pricing.ts

export type Plan = {
  name: string;
  price: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Consultation",
    price: "Free / On Request",
    features: [
      "Initial project discussion",
      "Technology recommendations",
      "Business needs analysis",
      "Scalable solution roadmap",
      "Tailored IT advice",
      "Support & follow-up session",
    ],
  },
  {
    name: "Static Website",
    price: "From KES 20,000+",
    features: [
      "Free Domain Name",
      "Website Security",
      "Free Lifetime Hosting",
      "1-5 Pages",
      "5 Professional Emails",
      "Fast Loading Speed",
      "Unique Designs",
      "SEO Optimization",
      "Google Business Setup",
      "24/7 Support",
    ],
  },
  {
    name: "E-commerce Website",
    price: "From KES 50,000+",
    features: [
      "Enhanced Security",
      "5 Professional Emails",
      "Custom Store Design",
      "SEO Optimization",
      "Google Business Setup",
      "M-Pesa Integration",
      "Product Management",
      "Admin Dashboard",
      "Sales Analytics",
      "24/7 Support",
    ],
  },
  {
    name: "Dynamic Website",
    price: "From KES 70,000+",
    features: [
      "CMS Integration",
      "Database Management",
      "Content Updates",
      "User Management",
      "Advanced Search",
      "Custom Design",
      "Auto Backups",
      "Fast Performance",
      "SEO Optimization",
      "24/7 Support",
    ],
  },
  {
    name: "Corporate Website",
    price: "From KES 100,000+",
    features: [
      "Free Domain & Hosting",
      "Advanced Security",
      "10+ Professional Emails",
      "Custom Corporate Design",
      "Employee Portal",
      "Intranet & Extranet Support",
      "SEO Optimization",
      "Performance Monitoring",
      "Priority Support",
      "Ideal for: Enterprises · NGOs · Institutions",
    ],
  },
];
