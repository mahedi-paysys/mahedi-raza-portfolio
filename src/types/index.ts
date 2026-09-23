export interface NavItem {
  label: string
  href: string
}

export type ProjectStatus = 'real-client' | 'concept'

export interface ProjectScreenshot {
  src: string
  label: string
}

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  status: ProjectStatus
  year: number
  /** One-line summary used on cards. */
  excerpt: string
  /** Longer overview used on the case-study page. */
  overview: string
  challenge: string
  approach: string
  designDecisions: string[]
  keyFeatures: string[]
  role: string
  technologies: string[]
  outcome: string
  /** Card + hero thumbnail. */
  thumbnail: string
  /** Responsive-design screenshots shown on the case-study page. */
  liveUrl?: string
  githubUrl?: string
  /** URL or path to the project's Case Study PDF file. */
  caseStudyPdf?: string
  /** Only present for real client work, with the client's permission to showcase it. */
  client?: {
    name: string
    url: string
  }
  /** Set to true once a real testimonial has been added for this project. */
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

export interface ServiceItem {
  icon: 'design' | 'code' | 'refresh' | 'layout' | 'mobile' | 'frontend' | 'deploy'
  title: string
  description: string
  image?: string
  deliverables?: string[]
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface ReasonItem {
  icon: 'responsive' | 'engineering' | 'business' | 'communication' | 'clean' | 'support'
  title: string
  description: string
}
