import { 
  Instagram, ShoppingBag, MessageSquareText, UserCircle, Brain,
  Apple, Palette, Smile, DollarSign, GraduationCap
} from 'lucide-react';

export interface ExtraAgent {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  link: string;
}

export const extraAgents: ExtraAgent[] = [
  {
    id: "reels",
    title: "Instagram Reels",
    description: "Criação de conteúdo cativante para Reels com alta retenção",
    icon: Instagram,
    color: "#FF6B6B",
    link: "#"
  },
  {
    id: "afiliado",
    title: "Afiliado",
    description: "Estratégias modernas de venda como afiliado com copy e tráfego",
    icon: ShoppingBag,
    color: "#00FFFF",
    link: "#"
  },
  {
    id: "storytelling",
    title: "Storytelling",
    description: "Geração de narrativas envolventes para vídeos e conteúdo",
    icon: MessageSquareText,
    color: "#9B5DE5",
    link: "#"
  },
  {
    id: "pitch",
    title: "Pitch Profissional",
    description: "Criação de bios, apresentações e introduções com autoridade",
    icon: UserCircle,
    color: "#FFD369",
    link: "#"
  },
  {
    id: "influencia",
    title: "Influência & Persuasão",
    description: "Gatilhos mentais e neurolinguagem para textos e falas",
    icon: Brain,
    color: "#4ECDC4",
    link: "#"
  },
  {
    id: "nutricao",
    title: "Nutrição Inteligente",
    description: "Planos alimentares conforme objetivo (energia, foco ou estética)",
    icon: Apple,
    color: "#FF8811",
    link: "#"
  },
  {
    id: "design",
    title: "Design no Canva",
    description: "Ideias de layout e identidade visual para projetos no Canva",
    icon: Palette,
    color: "#3A86FF",
    link: "#"
  },
  {
    id: "memes",
    title: "Memes Virais",
    description: "Geração de memes com tendências e temas do nicho",
    icon: Smile,
    color: "#06D6A0",
    link: "#"
  },
  {
    id: "mindset",
    title: "Mentalidade Milionária",
    description: "Frases, hábitos e textos para ativar o mindset de sucesso",
    icon: DollarSign,
    color: "#8338EC",
    link: "#"
  },
  {
    id: "cursos",
    title: "Planejamento de Cursos",
    description: "Estrutura de cursos online com módulos e aulas planejadas",
    icon: GraduationCap,
    color: "#FB5607",
    link: "#"
  }
];