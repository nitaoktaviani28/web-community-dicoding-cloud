export interface Webinar {
  id: string
  title: string
  date: string
  speaker: string
  description: string
  posterUrl: string
  status: "upcoming" | "past"
  registerUrl?: string
}

export interface Documentation {
  id: string
  webinarTitle: string
  date: string
  description: string
  youtubeUrl?: string
  slidesUrl?: string
  githubUrl?: string
  posterUrl: string
}

export interface CommunityStats {
  members: number
  webinars: number
  techTalks: number
  speakers: number
}

export const webinars: Webinar[] = [
  {
    id: "upcoming-1",
    title: "Build Smaller Docker Images, Deploy Faster",
    date: "2026-01-17",
    speaker: "Nita Oktaviani",
    description:
      "Pelajari teknik optimasi Docker image untuk mempercepat deployment dan efisiensi resource cloud Anda.",
    posterUrl: "/images/webinar-docker.png",
    status: "upcoming",
    registerUrl: "https://chat.whatsapp.com/LtcmnRmH96RAfC0M8CCN3M",
  },
  {
    id: "upcoming-2",
    title: "Kubernetes Made Easy",
    date: "2026-01-31",
    speaker: "El Muhammad",
    description: "Sederhanakan pemahaman Kubernetes Anda dengan strategi praktis dari Principal Cloud Engineer.",
    posterUrl: "/images/webinar-kubernetes.png",
    status: "upcoming",
    registerUrl: "https://chat.whatsapp.com/LtcmnRmH96RAfC0M8CCN3M",
  },
  {
    id: "past-1",
    title: "Beyond Cloud Learning: Understand the logic, not just the platform",
    date: "2025-11-15",
    speaker: "Nita Oktaviani",
    description: "Deep dive ke dalam fundamental cloud computing melampaui sekadar penggunaan platform.",
    posterUrl: "/images/poster-webinar-beyond-cloud.jpg",
    status: "past",
  },
  {
    id: "past-2",
    title: "Your First Step into Cloud Computing",
    date: "2025-11-29",
    speaker: "Ian Yulianto",
    description: "Langkah awal yang tepat untuk memulai karir dan pemahaman di dunia cloud computing.",
    posterUrl: "/images/poster-webinar-first-step.jpg",
    status: "past",
  },
  {
    id: "past-3",
    title: "Cloud DevOps Future",
    date: "2025-12-13",
    speaker: "Christian Bayu A P",
    description: "Membahas masa depan ekosistem Cloud dan DevOps serta peluang karir di dalamnya.",
    posterUrl: "/images/poster-webinar-devops-future.jpg",
    status: "past",
  },
  {
    id: "tech-talk-1",
    title: "TECH TALK #01: Migrasi Cloud vs Repatriasi On-Prem",
    date: "2025-11-22",
    speaker: "Nita Oktaviani",
    description: "Diskusi mengenai alasan perusahaan pindah ke cloud dan kenapa sebagian kembali ke on-premise.",
    posterUrl: "/images/poster-tech-talk-1.jpg",
    status: "past",
  },
  {
    id: "tech-talk-2",
    title: "TECH TALK #2: Tips & Trik Lulus AWS CCP",
    date: "2025-12-06",
    speaker: "Danang Adi",
    description: "Persiapan sertifikasi AWS Cloud Practitioner dan tips mendapatkan voucher gratis.",
    posterUrl: "/images/poster-tech-talk-2.jpg",
    status: "past",
  },
]

export const documentation: Documentation[] = [
  {
    id: "doc-1",
    webinarTitle: "Beyond Cloud Learning: Understand the logic, not just the platform",
    date: "2025-11-15",
    description: "Dokumentasi sesi webinar mengenai fundamental cloud computing dan mindset 'Think Automated'.",
    posterUrl: "/images/documentation-beyond-cloud.jpg",
  },
  {
    id: "doc-2",
    webinarTitle: "Your First Step into Cloud Computing",
    date: "2025-11-29",
    description: "Dokumentasi dan materi pembelajaran untuk pemula yang ingin memulai perjalanan di ekosistem Cloud.",
    posterUrl: "/images/documentation-first-step.jpg",
  },
  {
    id: "doc-3",
    webinarTitle: "Cloud DevOps Future",
    date: "2025-12-13",
    description: "Dokumentasi sesi sharing tentang masa depan Cloud DevOps dan persiapan karir di industri teknologi.",
    posterUrl: "/images/documentation-devops-future.jpg",
  },
  {
    id: "doc-4",
    webinarTitle: "TECH TALK #01: Migrasi Cloud vs Repatriasi On-Prem",
    date: "2025-11-22",
    description: "Dokumentasi Tech Talk perdana mengenai strategi infrastruktur Cloud vs On-Premise.",
    posterUrl: "/images/documentation-tech-talk-1.jpg",
    youtubeUrl: "#",
  },
  {
    id: "doc-5",
    webinarTitle: "TECH TALK #2: Tips & Trik Lulus AWS CCP",
    date: "2025-12-06",
    description: "Dokumentasi sesi Tech Talk #2 mengenai persiapan sertifikasi AWS Certified Cloud Practitioner.",
    posterUrl: "/images/documentation-tech-talk-2.jpg",
    youtubeUrl: "#",
  },
]

export const communityStats: CommunityStats = {
  members: 158,
  webinars: 3,
  techTalks: 2,
  speakers: 6,
}

export const upcomingWebinars = webinars.filter((w) => w.status === "upcoming")
export const pastWebinars = webinars.filter((w) => w.status === "past")
