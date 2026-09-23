import type { NavItem, ServiceItem, ProcessStep, ReasonItem } from '@/types'

export const siteConfig = {
  name: 'Mahedi Raza',
  title: 'Software Engineer | Product Builder',
  positioning: 'Software Engineer | Product Builder',
  bio: 'Software Engineer | Product Builder',
  email: 'mahedir2022@gmail.com',
  whatsappUrl: 'https://wa.me/923180350141?text=Hi%20Mahedi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/mahedi-raza/',
    github: 'https://github.com/mahedi-raza/',
    reddit: 'https://www.reddit.com/user/dev_mahedi_raza/',
  },
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export const services: ServiceItem[] = [
  {
    icon: 'design',
    title: 'Business Website Design',
    description:
      'Clean, modern layouts built around how your customers actually make decisions, not generic templates.',
    image: '/assets/services/card-1.jpg',
    deliverables: ['Custom UI/UX Architecture', 'Design System & Style Guide', 'High-Converting Layouts'],
  },
  {
    icon: 'code',
    title: 'Website Development',
    description:
      'Hand-coded, fast-loading sites — no page-builder bloat slowing you down or limiting what you can change later.',
    image: '/assets/services/card-2.jpg',
    deliverables: ['Hand-Coded TypeScript & React', 'Sub-second Load Times', 'Zero Page-Builder Bloat'],
  },
  {
    icon: 'refresh',
    title: 'Website Redesign',
    description:
      'Give an outdated or underperforming site a modern rebuild while keeping the content and SEO you already have.',
    image: '/assets/services/card-3.jpg',
    deliverables: ['Modern Aesthetic Rebrand', 'SEO & Link Preservation', 'Conversion Optimization'],
  },
  {
    icon: 'layout',
    title: 'Landing Pages',
    description:
      'Focused, single-purpose pages built to convert traffic from ads, campaigns, or a specific offer.',
    image: '/assets/services/card-4.jpg',
    deliverables: ['Frictionless Lead Funnels', 'Compelling Visual Storytelling', 'A/B Testing Ready'],
  },
  {
    icon: 'mobile',
    title: 'Mobile Optimization',
    description:
      'Every site is designed and tested to work properly on phones and tablets, not just desktop.',
    image: '/assets/services/card-5.jpg',
    deliverables: ['Fluid Touch Gestures', 'Adaptive Viewport Scaling', 'Mobile Performance Boost'],
  },
  {
    icon: 'deploy',
    title: 'Website Deployment',
    description:
      'Domain setup, hosting configuration, and a smooth handover so your site actually goes live without headaches.',
    image: '/assets/services/card-7.jpg',
    deliverables: ['CI/CD Automated Pipelines', 'SSL & DNS Setup', 'Global Edge CDN Delivery'],
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand the business',
    description:
      'A short conversation about what you do, who your customers are, and what the website needs to achieve.',
  },
  {
    step: '02',
    title: 'Audit the existing website',
    description:
      'If you already have a site, I review it for what is working, what is losing you enquiries, and why.',
  },
  {
    step: '03',
    title: 'Design the experience',
    description:
      'Layout, typography, and content structure are designed around your business before a line of code is written.',
  },
  {
    step: '04',
    title: 'Develop the website',
    description:
      'The design is built as a real, fast, responsive website using clean, maintainable code.',
  },
  {
    step: '05',
    title: 'Test & optimize',
    description:
      'Every page is checked across devices and browsers, and tuned for speed and search visibility.',
  },
  {
    step: '06',
    title: 'Deploy',
    description:
      'The website is published to your domain and handed over, with a short walkthrough of how to maintain it.',
  },
]

export const reasons: ReasonItem[] = [
  {
    icon: 'responsive',
    title: 'Modern, responsive design',
    description: 'Every site is built to look right on the phone in someone\u2019s hand, not just a designer\u2019s monitor.',
  },
  {
    icon: 'engineering',
    title: 'A software engineering background',
    description: 'I write production software professionally, which shows up in how cleanly your website is built.',
  },
  {
    icon: 'business',
    title: 'Business-focused layouts',
    description: 'Pages are structured around what makes a visitor trust you and get in touch, not just look nice.',
  },
  {
    icon: 'communication',
    title: 'Direct communication',
    description: 'You work with me directly from the first message to launch — no account managers in between.',
  },
  {
    icon: 'clean',
    title: 'Clean implementation',
    description: 'No page-builder bloat or plugin sprawl. The code stays readable and easy to hand off or extend.',
  },
  {
    icon: 'support',
    title: 'Post-launch support',
    description: 'Once your site is live, I\u2019m still reachable for fixes, small updates, and questions.',
  },
]
