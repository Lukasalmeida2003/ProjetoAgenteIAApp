import { 
  Heart, TrendingUp, Instagram, MessageSquareText, GraduationCap,
  LineChart, Dumbbell, DollarSign, Target, BookOpen, Users,
  Briefcase, Brain, Apple, BookHeart
} from 'lucide-react';

export interface Agent {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  link: string;
}

export const agents: Agent[] = [
  {
    id: "reconquista",
    title: "Reconquista & DR",
    description: "Recupere o controle no relacionamento com mensagens certas, técnicas de reconquista e conversas bem conduzidas.",
    icon: Heart,
    color: "#FF6B6B",
    link: "https://chatgpt.com/g/g-SzZgUNHZ7-guru-de-relacionamento"
  },
  {
    id: "tiktok",
    title: "Explosão no TikTok",
    description: "Roteiros virais, ganchos certeiros e ideias de vídeos com potencial real de viralizar.",
    icon: TrendingUp,
    color: "#00FFFF",
    link: "https://chatgpt.com/g/g-0NDPWPZ9v-video-script-viral-video-content-for-social-media"
  },
  {
    id: "instagram",
    title: "Conteúdo para Instagram/Reels",
    description: "Ideias, copy e legendas pra atrair seguidores reais e aumentar seu alcance diariamente.",
    icon: Instagram,
    color: "#9B5DE5",
    link: "https://chatgpt.com/g/g-MfrgFELoU-instaguide-iinstagram-expert"
  },
  {
    id: "copywriting",
    title: "Copy que Vende",
    description: "Crie textos, anúncios e títulos irresistíveis. Vendas com lógica, não sorte.",
    icon: MessageSquareText,
    color: "#FFD369",
    link: "https://chatgpt.com/g/g-Ji2QOyMml-copywriter-gpt-marketing-branding-ads"
  },
  {
    id: "concursos",
    title: "Concursos & ENEM Turbo",
    description: "Plano de estudos, revisão guiada e simulado inteligente pra sua prova.",
    icon: GraduationCap,
    color: "#4ECDC4",
    link: "https://chatgpt.com/g/g-is5dot7Pd-velho-de-guerra-concurso-publico"
  },
  {
    id: "trading",
    title: "Day Trade & Price Action",
    description: "Análises, gerenciamento de risco e plano tático de operação com IA.",
    icon: LineChart,
    color: "#FF8811",
    link: "https://chatgpt.com/g/g-dbneQgikc-tradegpt-real-time-stock-analysis-prediction"
  },
  {
    id: "treino",
    title: "Treino pra Ganho de Massa ou Definição",
    description: "Montagem de treinos personalizados em casa ou academia com divisão profissional.",
    icon: Dumbbell,
    color: "#3A86FF",
    link: "https://chatgpt.com/g/g-ipOIcM229-fitness-workout-diet-phd-coach"
  },
  {
    id: "renda-extra",
    title: "Renda Extra & Negócios Online",
    description: "Comece no digital com ideias testadas, validação de nicho e planejamento básico.",
    icon: DollarSign,
    color: "#06D6A0",
    link: "https://chatgpt.com/g/g-uH0JSEX73-max-conselheiro-de-renda-extra"
  },
  {
    id: "produtividade",
    title: "Foco e Produtividade",
    description: "Crie uma rotina produtiva com planejamento, metas e gatilhos mentais.",
    icon: Target,
    color: "#8338EC",
    link: "https://chatgpt.com/g/g-67b1082444788191bdb9e43c83aea455-milo"
  },
  {
    id: "infoprodutos",
    title: "Criação de Ebooks & Infoprodutos",
    description: "Monte, organize e escreva seu produto digital com um roteiro automatizado.",
    icon: BookOpen,
    color: "#FB5607",
    link: "https://chatgpt.com/g/g-RVUmJ1eso-ebook-creator"
  },
  {
    id: "afiliado",
    title: "Afiliado Pro",
    description: "Construa funis, copy, páginas e conteúdos que geram cliques e conversão.",
    icon: Users,
    color: "#00BBFF",
    link: "https://chatgpt.com/g/g-67797be89df88191a1542d7278103301-mentorinstagram"
  },
  {
    id: "linkedin",
    title: "LinkedIn & Marca Pessoal",
    description: "Posicione-se como autoridade no LinkedIn com headline, bio e conteúdos prontos.",
    icon: Briefcase,
    color: "#FFBE0B",
    link: "https://chatgpt.com/g/g-N62htM2tB-linkdin-post-master"
  },
  {
    id: "mindset",
    title: "Mindset & Controle Emocional",
    description: "Respostas terapêuticas, reforço positivo e estratégias pra lidar com crises emocionais.",
    icon: Brain,
    color: "#FF006E",
    link: "https://chatgpt.com/g/g-2yHXhwTyC-life-and-motivational-coach"
  },
  {
    id: "nutricao",
    title: "Nutrição Sem Gourmetização",
    description: "Planeje refeições realistas para emagrecer ou manter saúde com praticidade.",
    icon: Apple,
    color: "#8AC926",
    link: "https://chatgpt.com/g/g-KU2U5o7Wj-cookingdietrecipesnutritionfood"
  },
  {
    id: "devocional",
    title: "Fé Diária & Devocional",
    description: "Tenha um momento diário com Deus: oração, versículo e propósito em 5 minutos.",
    icon: BookHeart,
    color: "#7209B7",
    link: "https://chatgpt.com/g/g-YjoLpgNDV-religion-expert"
  }
];