import React from "react";
import { 
  Briefcase, 
  Zap, 
  Mail, 
  Settings, 
  Globe, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Users, 
  PhoneCall, 
  Sprout, 
  ShieldCheck, 
  Building2, 
  DollarSign, 
  UserPlus, 
  Download, 
  TrendingUp 
} from "lucide-react";

export const SOFTWARE_CHAOS_APPS = [
  { name: "Salesforce / HubSpot CRM", avgPrice: "$99/mo", category: "CRM & Pipelines", icon: Briefcase },
  { name: "ClickFunnels / Leadpages", avgPrice: "$97/mo", category: "Funnel & Page Builder", icon: Zap },
  { name: "Klaviyo / Mailchimp", avgPrice: "$39/mo", category: "Email Marketing", icon: Mail },
  { name: "ActiveCampaign / Zapier", avgPrice: "$79/mo", category: "Marketing Automation", icon: Settings },
  { name: "WordPress / Webflow", avgPrice: "$25/mo", category: "Website Hosting", icon: Globe },
  { name: "Intercom / Drift", avgPrice: "$29/mo", category: "Live Chat & Support", icon: MessageSquare },
  { name: "Calendly / Acuity", avgPrice: "$15/mo", category: "Appointment Booking", icon: Calendar },
  { name: "Google Analytics / Mixpanel", avgPrice: "$40/mo", category: "BI & Analytics", icon: BarChart3 },
];

export const COST_COMPARISON_MATRIX = [
  { tool: "Enterprise CRM & Pipelines", standardCost: 99 },
  { tool: "Funnel & Landing Page Builder", standardCost: 97 },
  { tool: "Email & Broadcast Suite", standardCost: 39 },
  { tool: "Workflow & Sales Automation", standardCost: 79 },
  { tool: "Website Builder & Hosting", standardCost: 25 },
  { tool: "Live Chat & Web Widget", standardCost: 29 },
  { tool: "Calendar & Booking System", standardCost: 15 },
  { tool: "Business Intelligence Analytics", standardCost: 40 },
];

export const BENTO_FEATURES = [
  {
    id: "bento-1",
    title: "AI CRM & Unlimited Pipelines",
    tagline: "Lead Management",
    desc: "Track leads, manage deals, automate pipeline stages, and assign tasks with zero user caps.",
    icon: Users,
    badge: "Unlimited Users",
    size: "col-span-1 md:col-span-2"
  },
  {
    id: "bento-2",
    title: "Funnel & Website Builder",
    tagline: "Conversion Engine",
    desc: "Drag-and-drop website, landing page, and multi-step funnel builder with subsecond load speeds.",
    icon: Zap,
    badge: "0 Code Needed",
    size: "col-span-1"
  },
  {
    id: "bento-3",
    title: "Omnichannel Messaging",
    tagline: "Email, SMS & WhatsApp",
    desc: "Unified broadcasts, automated drip campaigns, and SMS/WhatsApp two-way conversations.",
    icon: MessageSquare,
    badge: "99.9% Deliverability",
    size: "col-span-1"
  },
  {
    id: "bento-4",
    title: "Appointments & Calendars",
    tagline: "Scheduling OS",
    desc: "Round-robin team scheduling, automated reminders, and custom booking pages without Calendly.",
    icon: Calendar,
    badge: "Auto-Sync",
    size: "col-span-1 md:col-span-2"
  },
  {
    id: "bento-5",
    title: "Contact Center & Live Chat",
    tagline: "Unified Inbox",
    desc: "Manage web chat, social DMs, emails, and calls in a single collaborative team inbox.",
    icon: PhoneCall,
    badge: "24/7 AI Receptionist",
    size: "col-span-1 md:col-span-2"
  },
  {
    id: "bento-6",
    title: "Business Intelligence & BI",
    tagline: "Real-Time Reports",
    desc: "Custom attribution dashboards, revenue projection curves, and team performance metrics.",
    icon: BarChart3,
    badge: "Live Analytics",
    size: "col-span-1"
  }
];

export const REASON_WHY_FREE_POINTS = [
  {
    title: "Software Shouldn't Be A Tax On Building",
    desc: "We believe no entrepreneur or company should fail because they couldn't afford $500/mo software bills before making revenue.",
    icon: Sprout
  },
  {
    title: "Building The Global Business Ecosystem",
    desc: "Instead of extracting monthly SaaS fees, On.Bingo is creating the world's largest interconnected business operating system.",
    icon: Globe
  },
  {
    title: "Zero Hidden Catch & Zero Feature Locks",
    desc: "100% Free forever. No trial period, no expiring tier, no locked features, no limited users, and no credit card required.",
    icon: ShieldCheck
  }
];

export const MOVEMENT_METRICS = [
  { value: "500,000+", label: "Active Businesses", icon: Building2 },
  { value: "$1.4 Billion+", label: "Pipeline Managed", icon: DollarSign },
  { value: "120 Million+", label: "Automated Messages", icon: Zap },
  { value: "185+", label: "Countries Represented", icon: Globe }
];

export const MOVEMENT_TESTIMONIALS = [
  {
    quote: "We cancelled our Salesforce, HubSpot, and ActiveCampaign subscriptions on day one. On.Bingo saved us over $12,000 every single year while doubling our sales conversion.",
    name: "Sarah Jenkins",
    role: "CEO & Co-Founder",
    company: "Acme Cloud Systems",
    initials: "SJ"
  },
  {
    quote: "I thought '100% Free Forever' was a gimmick until our team onboarded 40 sales reps in under 10 minutes. This isn't just software—it's a complete revolution.",
    name: "David Wu",
    role: "VP of Growth",
    company: "Fintech Core Labs",
    initials: "DW"
  }
];

export const ONBOARDING_STEPS = [
  {
    step: "01",
    title: "Create Your Free Account",
    desc: "Sign up in under 30 seconds. No credit card required, no setup fees, instant access to all features.",
    icon: UserPlus
  },
  {
    step: "02",
    title: "Import Your Contacts & Data",
    desc: "1-click CSV import from HubSpot, Salesforce, CSV, or spreadsheets. Zero data loss.",
    icon: Download
  },
  {
    step: "03",
    title: "Start Growing Your Business",
    desc: "Launch pipelines, send campaigns, publish funnels, and let AI automate your customer acquisition.",
    icon: TrendingUp
  }
];

