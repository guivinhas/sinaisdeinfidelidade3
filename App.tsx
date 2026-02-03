import React from 'react';
import { Icons } from './components/Icons';
import { Button } from './components/Button';
import { Accordion } from './components/Accordion';

const App: React.FC = () => {
  // --- Data ---

  const territories = [
    {
      icon: <Icons.Digital className="text-blue-500" size={24} />,
      title: "Digital",
      desc: "Celular, senhas, apps, comportamento online"
    },
    {
      icon: <Icons.Routine className="text-purple-500" size={24} />,
      title: "Rotina",
      desc: "Horários, atrasos, compromissos, sumiços"
    },
    {
      icon: <Icons.Narrative className="text-orange-500" size={24} />,
      title: "Narrativa",
      desc: "Histórias que mudam, detalhes que não batem"
    },
    {
      icon: <Icons.Social className="text-pink-500" size={24} />,
      title: "Social",
      desc: "Amizades suspeitas, redes sociais, coberturas"
    },
    {
      icon: <Icons.Emotional className="text-red-500" size={24} />,
      title: "Emocional",
      desc: "Frieza, distância, carinho que sumiu"
    },
    {
      icon: <Icons.Defensive className="text-yellow-500" size={24} />,
      title: "Defensivo",
      desc: "Explosões, gaslighting, inversão de culpa"
    },
    {
      icon: <Icons.Financial className="text-green-500" size={24} />,
      title: "Financeiro",
      desc: "Gastos estranhos, dinheiro vivo, sigilo"
    },
    {
      icon: <Icons.Intimacy className="text-rose-500" size={24} />,
      title: "Intimidade",
      desc: "Mudanças no desejo, técnicas novas, frieza"
    },
    {
      icon: <Icons.Home className="text-amber-700" size={24} />,
      title: "Casa/Carro",
      desc: "Cheiros, objetos, rastros físicos"
    }
  ];

  const painPoints = [
    { title: "Noites em claro olhando o \"online\" às 2h da manhã" },
    { title: "Ansiedade que não deixa comer, trabalhar, viver" },
    { title: "Brigas onde você vira o(a) \"louco(a)\" e a outra pessoa vira vítima" },
    { title: "Duvidar da sua própria sanidade (isso tem nome: gaslighting)" },
    { title: "Meses ou anos perdidos em um limbo de \"será que sim, será que não\"" },
    { title: "Autoestima destruída, sentindo que o problema é você" },
  ];

  const whatsInside = [
    { title: "220+ sinais reais mapeados nos 9 territórios", desc: "Não é lista genérica. Cada sinal com contexto, significado e o que observar." },
    { title: "O Diário de 21 Dias", desc: "Método prático para observar sem enlouquecer. Anota, compara, identifica padrão." },
    { title: "4 Scripts prontos para a conversa", desc: "O que falar quando confrontar. Como reagir se a pessoa negar, explodir ou chorar." },
    { title: "Capítulo \"E agora?\" — para os dois cenários", desc: "Se confirmou: o que fazer nos primeiros 7 dias, reconstruir ou separar. Se não confirmou: como parar de se torturar." },
    { title: "Perfis de traição masculina e feminina", desc: "Combinações de sinais que aparecem juntos. Padrões específicos para você identificar independente do gênero." }
  ];

  const faqs = [
    { question: "Isso é espionagem? É ilegal?", answer: "Não. O método ensina você a observar o que já está na sua frente. Não ensinamos a instalar apps espiões, hackear senhas ou colocar rastreadores, o que seria crime. Ensinamos análise comportamental e observação de padrões públicos e domésticos." },
    { question: "Funciona para homens e mulheres?", answer: "Sim. Embora existam capítulos específicos sobre diferenças de comportamento (homens tendem a ser mais descuidados com logística, mulheres tendem a ser mais cuidadosas com rastro digital), os 9 territórios são universais." },
    { question: "Como recebo o material?", answer: "O acesso é imediato e enviado para o seu e-mail logo após a confirmação do pagamento. É um livro digital (PDF) que você pode ler no celular, tablet ou computador, de forma discreta." },
    { question: "E se eu descobrir que não tem nada?", answer: "Esse é o melhor cenário. O guia também serve para você identificar quando a insegurança é sua e não tem base na realidade, permitindo que você pare de sabotar um relacionamento saudável." },
    { question: "Meu parceiro(a) vai saber que comprei?", answer: "Não. Na fatura do cartão aparecerá apenas \"HOTMART\" ou similar, sem menção a infidelidade. O arquivo é digital, nada chega na sua casa." },
    { question: "E se não funcionar para mim?", answer: "Você tem 7 dias de garantia. Se achar que o conteúdo não agregou, basta pedir o reembolso e devolveremos 100% do valor." }
  ];

  const testimonials = [
    {
      text: (
        <>
          "Me chamavam de louca há meses. Usei o método por 3 semanas. Quando confrontei com os padrões que anotei, não teve como negar. <strong className="text-white">A clareza dói, mas liberta.</strong>"
        </>
      ),
      name: "Marina",
      age: "31",
      location: "Curitiba",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: (
        <>
          "Descobri que eu estava errado. Os sinais tinham outras explicações. <strong className="text-white">Parei de me torturar e reconstruí a confiança.</strong> O guia serviu para os dois cenários."
        </>
      ),
      name: "Ricardo",
      age: "35",
      location: "São Paulo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: (
        <>
          "Passei meses desconfiando mas sem conseguir provar nada. <strong className="text-white">O método dos 9 territórios me deu clareza em 2 semanas.</strong> Valeu cada centavo."
        </>
      ),
      name: "Juliana",
      age: "28",
      location: "BH",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <div className="bg-[#050505] text-zinc-100 font-sans min-h-screen selection:bg-red-900 selection:text-white">
      
      {/* Top Warning Banner */}
      <div className="bg-[#111111] border-b border-zinc-800 py-2 px-4 text-center">
        <p className="text-xs md:text-sm text-yellow-500 font-medium flex items-center justify-center gap-2">
          <Icons.Alert size={14} className="text-yellow-500 animate-pulse" />
          Se você está lendo isso às 3h da manhã, esse guia é para você
        </p>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
          "Mensagem apagada.<br />
          <span className="text-red-600 block mt-2">Intenção não."</span>
        </h1>
        <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          O método de 21 dias para saber se você está sendo traído(a) — <span className="text-zinc-100 font-bold">sem invadir privacidade, sem virar detetive, sem perder sua dignidade.</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-zinc-500 mb-8 font-medium">
          <span className="flex items-center gap-1"><Icons.Check size={14} className="text-green-500" /> 9 territórios mapeados</span>
          <span className="flex items-center gap-1"><Icons.Check size={14} className="text-green-500" /> 220+ sinais reais</span>
          <span className="flex items-center gap-1"><Icons.Check size={14} className="text-green-500" /> Funciona para homens e mulheres</span>
        </div>

        <Button text="Quero saber a verdade — R$ 27" />
        <p className="text-[10px] text-zinc-600 mt-3">ou 3x de R$ 9 • Acesso imediato • Garantia de 7 dias • Discrição total</p>
      </section>

      {/* You are not crazy Section */}
      <section className="py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Você <span className="text-red-600">não</span> é louco(a).
          </h2>
          <div className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed">
            <p>
              Você sente que algo mudou. Não sabe explicar. Mas <strong className="text-white">o corpo sabe</strong>.
            </p>
            <p>
              O celular que agora vive virado para baixo. A senha que apareceu do nada. Os atrasos que viraram rotina. A frieza que se instalou.
            </p>
            <p>
              Você pergunta. A resposta é que você é <span className="text-red-400">"paranoico(a)"</span>. Que você <span className="text-red-400">"está vendo coisa"</span>. Que você <span className="text-red-400">"precisa de terapia"</span>.
            </p>
            <p className="font-bold text-white">
              E você começa a duvidar de si mesmo(a).
            </p>
            <p>
              Mas lá no fundo, você sabe: <span className="text-red-500 font-semibold">muita defesa é confissão disfarçada.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Grid */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-10 text-zinc-200">
          O que acontece quando você vive na dúvida:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painPoints.map((item, i) => (
            <div key={i} className="bg-[#150505] border border-red-900/30 p-4 rounded-lg flex items-start gap-3">
              <div className="mt-1 bg-red-900/20 p-1 rounded">
                <Icons.X size={16} className="text-red-500" />
              </div>
              <p className="text-zinc-300 text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-zinc-400 font-medium">A dúvida corrói. <span className="text-red-500">A clareza liberta.</span></p>
        </div>
      </section>

      {/* The 9 Territories Method */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#DC2626] text-xs font-bold tracking-widest uppercase">Sinais da Infidelidade — O Método Completo</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">O Método dos 9 Territórios</h2>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
              Um sistema para observar padrões reais — não sinais isolados que não provam nada.
            </p>
          </div>

          <div className="bg-[#1a1505] border border-yellow-900/30 rounded-lg p-6 mb-12 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-yellow-500 text-xs font-bold uppercase mb-2">A Regra de Ouro:</h4>
              <p className="text-white font-bold text-lg mb-1">"3+ vezes, em 2+ territórios = padrão real"</p>
              <p className="text-zinc-400 text-xs">Sinal isolado não é prova. <strong className="text-zinc-200">Padrão é informação.</strong></p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {territories.map((t, i) => (
              <div key={i} className="bg-[#111] border border-zinc-800 p-5 rounded-lg hover:border-zinc-700 transition-colors">
                <div className="mb-3 bg-zinc-900 w-fit p-2 rounded-lg border border-zinc-800">
                  {t.icon}
                </div>
                <h4 className="text-white font-bold mb-1">{t.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">O que você recebe no guia:</h3>
        <div className="space-y-3">
          {whatsInside.map((item, i) => (
            <div key={i} className="bg-[#111] border border-zinc-800 p-4 rounded-lg flex gap-4">
              <div className="mt-1">
                <Icons.Check className="text-green-500" size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button text="Quero o guia completo — R$ 27" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Quem usou o método:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#111] p-6 rounded-lg border border-zinc-800 flex flex-col justify-between h-full">
              <div>
                <div className="flex text-yellow-500 mb-3 text-xs gap-0.5">
                  {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed mb-6 italic">
                  {t.text}
                </p>
              </div>
              
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/50">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                />
                <div className="text-left">
                  <p className="text-zinc-200 text-xs font-bold">{t.name}, {t.age}</p>
                  <p className="text-zinc-600 text-[10px]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Author */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto bg-[#111] rounded-xl border border-zinc-800 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0">
             <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-zinc-800 shadow-xl">
               {/* DICA: Se o base64 for muito grande, hospede a imagem no 'imgur.com' e cole o link direto aqui em baixo no src="" */}
               <img 
                 src="https://i.imgur.com/E69qFYw.jpeg" 
                 alt="Dr. Carlos Eduardo Ferraz" 
                 className="w-full h-full object-cover"
               />
             </div>
          </div>
          <div className="text-center md:text-left">
            <span className="text-[#DC2626] text-[10px] font-bold tracking-widest uppercase">Sobre o Autor</span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-4">Dr. Carlos Eduardo Ferraz</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Especialista em comportamento e relacionamentos há mais de 10 anos. Criador do canal <strong className="text-white">Sinais da Infidelidade</strong> com milhões de visualizações. Já ajudou mais de 50.000 pessoas a saírem da dúvida e recuperarem a clareza sobre seus relacionamentos.
            </p>
            <p className="text-zinc-500 text-xs italic">
              "Minha missão é simples: te dar ferramentas para você nunca mais precisar viver na dúvida. A verdade liberta — mesmo quando dói."
            </p>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Quanto custa a dúvida?</h3>
        
        <div className="space-y-2 text-sm text-zinc-300">
          <div className="flex justify-between py-3 border-b border-zinc-800">
            <span>1 sessão de terapia</span>
            <span className="font-bold">R$ 150 - R$ 400</span>
          </div>
          <div className="flex justify-between py-3 border-b border-zinc-800">
            <span>Detetive particular (1 dia)</span>
            <span className="font-bold">R$ 500 - R$ 2.000</span>
          </div>
          <div className="flex justify-between py-3 border-b border-zinc-800">
            <span>Consulta com advogado</span>
            <span className="font-bold">R$ 300 - R$ 800</span>
          </div>
          <div className="flex justify-between py-3 border-b border-zinc-800 text-red-500">
            <span>Meses de ansiedade e noites sem dormir</span>
            <span className="font-bold">Incalculável</span>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-b from-[#0f1f0f] to-[#050f05] border border-green-900/30 rounded-xl p-8 text-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-green-500 text-xs uppercase tracking-widest font-bold mb-2">O Método Completo:</p>
            <p className="text-zinc-500 line-through text-sm">R$ 149</p>
            <p className="text-5xl md:text-6xl font-extrabold text-green-500 my-2">R$ 27</p>
            <p className="text-green-400/80 text-xs font-medium mb-6">ou 3x de R$ 9 no cartão</p>
            <p className="text-zinc-400 text-xs max-w-sm mx-auto">Menos que um jantar. Mais que meses de terapia focada no problema.</p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto border border-green-900/30 bg-[#0f140f] rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0">
             <div className="bg-green-600/20 p-4 rounded-full">
               <Icons.Shield size={40} className="text-green-500" />
             </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-green-500 font-bold text-lg mb-2">Garantia de 7 dias</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Leia o guia inteiro. Aplique o método. Se em 7 dias você não sentir que valeu cada centavo, me manda um email e devolvo <strong className="text-white">100% do valor</strong>. Sem perguntas. Sem burocracia. O risco é zero.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Perguntas frequentes</h3>
        <Accordion items={faqs} />
      </section>

      {/* Final CTA Area */}
      <section className="py-20 px-4 text-center border-t border-zinc-900 bg-gradient-to-b from-[#050505] to-[#110505]">
        <p className="text-red-500 text-sm font-medium mb-2">A dúvida corrói.</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          A clareza <span className="text-green-500">liberta.</span>
        </h2>
        <p className="text-zinc-400 text-sm max-w-lg mx-auto mb-10">
          Você pode continuar acordado(a) às 3h da manhã olhando o "online". Ou pode ter clareza em 21 dias.
        </p>
        
        <div className="max-w-md mx-auto bg-[#111] p-6 rounded-xl border border-zinc-800">
           <p className="text-[#DC2626] text-[10px] font-bold uppercase tracking-widest mb-1">SINAIS DA INFIDELIDADE — O MÉTODO COMPLETO</p>
           <p className="text-zinc-600 line-through text-xs">De R$ 149</p>
           <div className="my-4">
             <span className="text-4xl font-extrabold text-white">R$ 27</span>
           </div>
           <p className="text-zinc-500 text-[10px] mb-6">ou 3x de R$ 9 • Pagamento único • Acesso vitalício</p>
           
           <Button text="Sim, quero saber a verdade" />
           
           <div className="flex justify-center gap-4 mt-4 text-[10px] text-zinc-600">
             <span className="flex items-center gap-1"><Icons.Shield size={10}/> Pagamento seguro</span>
             <span className="flex items-center gap-1"><Icons.Check size={10}/> Garantia 7 dias</span>
             <span className="flex items-center gap-1"><Icons.Eye size={10}/> Discrição total</span>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 text-center border-t border-zinc-900">
        <p className="text-[10px] text-zinc-700 max-w-2xl mx-auto">
          Na fatura aparece apenas "HOTMART" • Acesso imediato por email • AS digital solutions
        </p>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-[#111] border-t border-zinc-800 p-3 flex items-center justify-between md:hidden z-50">
        <div className="flex flex-col">
          <span className="text-[10px] text-zinc-400 line-through">R$ 149</span>
          <span className="text-xl font-bold text-white leading-none">R$ 27</span>
        </div>
        <a 
          href="https://pay.hotmart.com/H104201286P?checkoutMode=10"
          className="bg-[#DC2626] hover:bg-red-700 text-white font-bold py-2 px-6 rounded text-sm transition-colors"
        >
          Quero clareza agora
        </a>
      </div>

    </div>
  );
};

export default App;