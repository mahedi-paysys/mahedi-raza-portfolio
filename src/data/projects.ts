import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'elite-warehouse',
    title: 'Elite Warehouse Systems',
    category: 'Real Estate & Construction',
    status: 'real-client',
    year: 2026,
    excerpt: 'A marketing site for Pakistan\u2019s first private warehousing project.',
    overview:
      'Elite Warehouse Systems needed a website that could represent an eight-acre commercial and industrial development to serious investors and tenants, with clear information, credible presentation, and an easy way to get in touch.',
    challenge:
      'The project has several distinct property types (warehouses, towers, office space) and needs to speak to both investors evaluating the opportunity and businesses evaluating the space. The site had to organize that information clearly without turning into a wall of text.',
    approach:
      'I structured the site around the project\u2019s actual assets, separating overview, property types, and investment information into clear sections, and built a component system so each property type could be presented consistently without repeating layout work.',
    designDecisions: [
      'A restrained, dark-and-brand color system so photography of the site and renders stay the focal point.',
      'Reusable section components so new property types or updates don\u2019t require new page layouts.',
      'Clear calls to action for enquiries placed at natural decision points, not just at the bottom of the page.',
    ],
    keyFeatures: [
      'Property/category browsing with consistent cards across warehouse, tower, and office listings',
      'Dedicated pages for investment options',
      'Image galleries for site progress and renders',
      'Enquiry and contact flow',
    ],
    role: 'Design & Development (end-to-end)',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    outcome:
      'The site gives Elite Warehouse Systems a professional, organized online presence that matches the scale of the physical project, with a structure that makes it straightforward to add new property types as the development progresses.',
    thumbnail: '/assets/projects/elite-warehouse/cover.jpg',
    liveUrl: 'https://elitewarehousesystems.com/',
    caseStudyPdf: '/assets/projects/case-study.pdf',
    client: {
      name: 'MAQ Builders & Developers',
      url: 'https://maqbuilders.pk/',
    },
  },
  {
    id: '2',
    slug: 'endangered-poet-productions',
    title: 'Endangered Poet Productions Website',
    category: 'Entertainment & Media',
    status: 'concept',
    year: 2025,

    excerpt: 'A dark, immersive website concept for a South African multi-medium production studio focused on gothic horror, dark fantasy, and mythological storytelling.',
    overview: 'A cinematic website concept for Endangered Poet Productions, a South African multi-medium production studio founded by writer and author Gaelan Wort. The studio creates narrative experiences across comics, novels, video games, and audio dramas, with a focus on gothic horror, dark fantasy, and mythologically inspired storytelling.',
    challenge: 'The website needed to communicate the studio’s dark and atmospheric identity while clearly presenting its different creative mediums, featured works, team, and overall philosophy. The experience also needed to make a relatively new production studio feel distinctive, creative, and memorable.',
    approach: 'I designed the experience around a dark fantasy visual direction with strong storytelling sections, atmospheric imagery, clear content hierarchy, and immersive presentation. The structure introduces the studio and its philosophy before guiding visitors through its creative mediums, featured work, team, and collaboration journey.',

    designDecisions: [
      'A dark, cinematic visual direction inspired by gothic horror and dark fantasy storytelling.',
      'Atmospheric imagery and typography used to establish an immersive narrative experience.',
      'Clear separation of the studio’s four primary mediums: comics, novels, video games, and audio dramas.',
      'A featured-project section centered around the flagship series "Gravedigger of Scarlet Town".',
      'Story-driven content sections that communicate the studio’s philosophy, origins, team, and creative vision.',
    ],

    keyFeatures: [
      'Multi-medium production studio showcase',
      'Gothic horror and dark fantasy visual identity',
      'Comics, novels, video games, and audio drama sections',
      'Featured project showcase for Gravedigger of Scarlet Town',
      'Studio story and creative philosophy section',
      'Team and founder presentation',
      'Collaboration and contact call-to-action',
      'Responsive immersive layout',
    ],

    role: 'Design & Development',

    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
    ],

    outcome:
      'A cinematic production-studio website concept that establishes a distinctive dark-fantasy identity while presenting Endangered Poet Productions, its creative mediums, flagship work, team, and storytelling philosophy in an immersive and structured experience.',

    thumbnail: '/assets/projects/endangered/cover.jpg',
    liveUrl: 'https://endangeredpoetproductions-mockup.vercel.app/',
    githubUrl: 'https://github.com/mahedi-raza/endangeredpoetproductions-mockup.git',
    // Update this URL to the actual case study PDF when ready
    caseStudyPdf: '/assets/projects/case-study.pdf',
  },
  {
    id: '3',
    slug: 'spark-fire-dance',
    title: 'Spark Fire Dance Performance Archive',
    category: 'Entertainment & Media',
    status: 'concept',
    year: 2025,
    excerpt: 'A cinematic performance archive for former Cirque du Soleil fire performers, showcasing two decades of fire artistry across 50+ countries.',
    overview:
      'A performance archive website created for Spark Fire Dance, documenting two decades of spectacular fire artistry performed across more than 50 countries. The experience showcases their legacy as former Cirque du Soleil performers, their signature acts, major collaborations, visual archive, and recorded performances.',
    challenge:
      'The website needed to preserve the legacy of a performance group that no longer actively performs while still communicating the scale, artistry, and international impact of their work. The design also needed to organize a large body of performances, collaborations, images, and videos into an immersive archive experience.',
    approach:
      'I designed the experience as a cinematic digital archive centered around the group’s legacy, signature performances, visual gallery, trusted collaborations, and video collection. The structure allows visitors to explore the history of Spark Fire Dance while keeping the experience visually focused on the energy and spectacle of fire performance.',
    designDecisions: [
      'A dark, cinematic visual direction that complements the intensity and atmosphere of fire performances.',
      'Large performance imagery used throughout the experience to make the archive feel immersive and visual-first.',
      'Clear separation between the legacy, signature acts, gallery, video archive, and collaborations.',
      'A dedicated performance archive showcasing distinctive acts such as Swing Fire, Fire Fury, Mirror Dancers, and Bespoke Creations.',
      'A structured contact section focused on legacy inquiries, media requests, and documentation projects.',
    ],
    keyFeatures: [
      'Two-decade performance legacy showcase',
      'Signature fire performance archive',
      'Performance gallery featuring international appearances',
      'Video archive with recorded performances',
      'Cirque du Soleil ZAIA showcase',
      'World-class collaboration and partner showcase',
      'Responsive cinematic layout',
      'Legacy and media enquiry contact form',
    ],
    role: 'Design & Development',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    outcome:
      'A cinematic digital archive that preserves Spark Fire Dance’s international performance legacy while presenting its signature acts, major collaborations, visual history, and recorded performances through an immersive and structured experience.',
    thumbnail: '/assets/projects/sparkfire/cover.jpg',
    liveUrl: 'https://sparkfiredance-mockup.vercel.app/',
    githubUrl: 'https://github.com/mahedi-raza/sparkfiredance-mockup.git',
    // Update this URL to the actual case study PDF when ready
    caseStudyPdf: '/assets/projects/case-study.pdf',
  },
  {
    id: '4',
    slug: 'lifeshift',
    title: 'Lifeshift E-commerce Website',
    category: 'E-commerce',
    status: 'concept',
    year: 2025,
    excerpt: 'A premium e-commerce website for Lifeshift, a Dutch brand specializing in electric heating cushions and comfort products.',
    overview:
      'A premium e-commerce concept for Lifeshift, a Dutch brand focused on warmtekussens and heated comfort products. The website combines product discovery, customer reviews, trust signals, product benefits, and educational content to create a warm and reassuring shopping experience for customers across the Netherlands and Belgium.',
    challenge:
      'The website needed to sell comfort-focused products while communicating quality, safety, reliability, and customer trust. The design also needed to make product benefits easy to understand and reduce purchase hesitation through clear product information, reviews, guarantees, delivery details, and a simple shopping journey.',
    approach:
      'I designed the experience around a warm, premium e-commerce direction with strong product presentation, clear feature breakdowns, customer reviews, trust indicators, frequently asked questions, and prominent shopping calls to action. The structure guides visitors from product benefits through the collection and social proof toward purchase.',
    designDecisions: [
      'A warm and comfortable visual direction designed to reflect the brand’s focus on relaxation, warmth, and everyday comfort.',
      'Clear product cards highlighting temperature settings, automatic shut-off, washable materials, and other key features.',
      'Strong trust signals including customer ratings, review counts, free shipping, 30-day returns, SSL payment security, and warranty information.',
      'Customer review sections integrated throughout the experience to reinforce product credibility and purchasing confidence.',
      'A clean FAQ and support section addressing delivery, returns, customer service, shipping costs, and product safety.',
    ],
    keyFeatures: [
      'Premium heated cushion product showcase',
      'Heated foot warmer and XL heated blanket products',
      'Product benefits and feature breakdown',
      '6 temperature settings and automatic shut-off information',
      'Customer reviews and marketplace testimonials',
      'Free shipping and 30-day return messaging',
      'FAQ and customer support section',
      'Secure payment and trust indicators',
      'Responsive e-commerce layout',
      'Prominent shopping and add-to-cart calls to action',
    ],
    role: 'Design & Development',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    outcome:
      'A polished e-commerce website concept that positions Lifeshift as a trusted premium warmtekussen brand while combining product discovery, social proof, safety information, customer support, and a streamlined shopping experience.',
    thumbnail: '/assets/projects/lifeshift/cover.jpg',
    liveUrl: 'https://lifeshift-mockup.vercel.app/',
    githubUrl: 'https://github.com/mahedi-raza/lifeshift-mockup.git',
    // Update this URL to the actual case study PDF when ready
    caseStudyPdf: '/assets/projects/case-study.pdf',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getRelatedProjects(slug: string, count = 2): Project[] {
  return projects.filter((p) => p.slug !== slug).slice(0, count)
}
