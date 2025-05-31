import { 
  Instagram, ShoppingBag, BookHeart, Megaphone, Brain,
  Apple, Palette, Image, Target, GraduationCap
} from 'lucide-react';

export interface PremiumAgent {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  link: string;
}

export const premiumAgents: PremiumAgent[] = [
  {
    id: "reels",
    title: "Instagram Reels",
    description: "Criação de ideias para Reels com alta retenção, baseadas em tendências e ganchos virais.",
    icon: Instagram,
    color: "#FF0080",
    link: "#"
  },
  {
    id: "afiliado",
    title: "Afiliado",
    description: "Táticas de venda como afiliado usando copy estratégica, tráfego orgânico e funis simples.",
    icon: ShoppingBag,
    color: "#00FFFF",
    link: "#"
  },
  {
    id: "storytelling",
    title: "Storytelling",
    description: "Criação de narrativas impactantes para vídeos, eBooks, posts ou lançamentos com storytelling envolvente.",
    icon: BookHeart,
    color: "#9B5DE5",
    link: "#"
  },
  {
    id: "pitch",
    title: "Pitch Profissional",
    description: "Geração de bios, apresentações, elevator pitch e introduções de alto impacto.",
    icon: Megaphone,
    color: "#FFD369",
    link: "#"
  },
  {
    id: "persuasao",
    title: "Influência & Persuasão",
    description: "Uso de gatilhos mentais e técnicas de persuasão (PNL, neuromarketing) para textos e vídeos.",
    icon: Brain,
    color: "#FF6B6B",
    link: "#"
  },
  {
    id: "nutricao",
    title: "Nutrição Inteligente",
    description: "Criação de planos alimentares com foco em energia, produtividade, estética ou saúde cognitiva.",
    icon: Apple,
    color: "#4ECDC4",
    link: "#"
  },
  {
    id: "design",
    title: "Design no Canva",
    description: "Sugestões de layout, paletas de cores e identidade visual para projetos criativos dentro do Canva.",
    icon: Palette,
    color: "#FF8811",
    link: "#"
  },
  {
    id: "memes",
    title: "Memes Virais",
    description: "Geração de memes com formatos virais do momento para engajamento em qualquer nicho.",
    icon: Image,
    color: "#3A86FF",
    link: "#"
  },
  {
    id: "mentalidade",
    title: "Mentalidade Milionária",
    description: "Frases, hábitos e exercícios de mentalidade para estimular visão de longo prazo e disciplina.",
    icon: Target,
    color: "#06D6A0",
    link: "#"
  },
  {
    id: "cursos",
    title: "Planejamento de Cursos",
    description: "Estruturação de cursos online com módulos, objetivos por aula e sugestões de formatos.",
    icon: GraduationCap,
    color: "#8338EC",
    link: "#"
  }
];