import React, { useState, useMemo } from 'react';
import { Search, Book, Copy, Check, GraduationCap, Target } from 'lucide-react';

// Dados consolidados das planilhas
const rawData = [
  { id: 1, oficina: 1, ano: "1º Ano", tema: "Conhecendo o Kit", bncc: "EF15C008", objetivo: "Discutir robótica e tecnologias, manusear o kit LEGO® e criar uma solução para a travessia de um rio." },
  { id: 2, oficina: 4, ano: "1º Ano", tema: "Meios de Transporte", bncc: "EF01C001, EF01C006", objetivo: "Identificar meios de transporte e montar um lançador de carros." },
  { id: 3, oficina: 14, ano: "1º Ano", tema: "Ponte Móvel", bncc: "EF01C006", objetivo: "Entender a tecnologia em construções e montar uma ponte móvel." },
  { id: 4, oficina: 3, ano: "2º Ano", tema: "Animal Robótico", bncc: "EF03C004", objetivo: "Características de animais e montagem com programação." },
  { id: 5, oficina: 15, ano: "2º Ano", tema: "Braço Robótico", bncc: "EF02C001", objetivo: "Compreender tecnologias de máquinas e criar um braço funcional." },
  { id: 6, oficina: 15, ano: "3º Ano", tema: "Iluminação Automática", bncc: "EF03C002", objetivo: "História da eletricidade e sistemas automáticos de luz." },
  { id: 7, oficina: 20, ano: "3º Ano", tema: "Reciclagem Digital", bncc: "EF03C003", objetivo: "Coleta seletiva e colaboração com protótipos LEGO®." },
  { id: 8, oficina: 15, ano: "4º Ano", tema: "Bússola Robótica", bncc: "EF04C003", objetivo: "Pontos cardeais, rosa dos ventos e orientação espacial." },
  { id: 9, oficina: 5, ano: "5º Ano", tema: "Rotação da Terra", bncc: "EF05C011", objetivo: "Simulador de órbita para explicar o ciclo dia/noite." },
  { id: 10, oficina: 5, ano: "7º Ano", tema: "Simulador de Terremotos", bncc: "EF07CO03", objetivo: "Engenharia antissísmica e impactos de desastres naturais." },
  { id: 11, oficina: 20, ano: "8º Ano", tema: "Esteira Seletora", bncc: "EF08CO04", objetivo: "Otimização de processos industriais e triagem automática." },
  { id: 12, oficina: 17, ano: "9º Ano", tema: "Nanotecnologia", bncc: "EF09CO02", objetivo: "Genética, DNA e conceitos de nanorrobótica." }
];

const App = () => {
  const [search, setSearch] = useState('');
  const [filterYear, setFilterYear] = useState('Todos');
  const [copiedId, setCopiedId] = useState(null);

  const years = ['Todos', '1º Ano', '2º Ano', '3º Ano', '4º Ano', '5º Ano', '6º Ano', '7º Ano', '8º Ano', '9º Ano'];

  const results = useMemo(() => {
    // Só mostra resultados se houver texto ou se um ano específico for selecionado (diferente de "Todos")
    if (search.trim() === '' && filterYear === 'Todos') return [];

    return rawData.filter(item => {
      const query = search.toLowerCase();
      const matchesText = item.tema.toLowerCase().includes(query) || 
                          item.objetivo.toLowerCase().includes(query) || 
                          item.bncc.toLowerCase().includes(query);
      const matchesYear = filterYear === 'Todos' || item.ano === filterYear;
      return matchesText && matchesYear;
    });
  }, [search, filterYear]);

  const copyToClipboard = (item) => {
    const text = `Plano de Aula - Robótica\n\nAno: ${item.ano}\nOficina: ${item.oficina}\nTema: ${item.tema}\nBNCC: ${item.bncc}\nObjetivo: ${item.objetivo}`;
    
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <nav className="border-b border-slate-100 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-sm font-bold">R</div>
            <span className="font-bold tracking-tight text-slate-800">Robótica SJB</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-full">CATÁLOGO DIGITAL</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <section className={`transition-all duration-500 ${results.length > 0 ? 'mb-12' : 'mt-20 text-center'}`}>
          {!results.length && (
            <div className="mb-8">
              <h1 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">O que vamos ensinar hoje?</h1>
              <p className="text-slate-500 max-w-md mx-auto">Digite um tema ou selecione o ano escolar para consultar as oficinas disponíveis.</p>
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div className="relative shadow-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text"
                placeholder="Busque por tema, objetivo ou código BNCC..."
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {years.map(y => (
                <button
                  key={y}
                  onClick={() => setFilterYear(y)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                    filterYear === y 
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' 
                    : 'bg-white border-slate-200 text-slate-500 hover:border-indigo-300'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
        </section>

        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((item) => (
              <div key={item.id} className="border border-slate-200 rounded-2xl p-5 hover:border-indigo-200 hover:bg-indigo-50/5 transition-all">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded uppercase">{item.ano}</span>
                      <span className="text-[10px] font-bold text-slate-400">OFICINA #{item.oficina}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">{item.tema}</h3>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(item)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                      copiedId === item.id 
                      ? 'bg-emerald-500 border-emerald-500 text-white' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm'
                    }`}
                  >
                    {copiedId === item.id ? <Check size={14} /> : <Copy size={14} />}
                    {copiedId === item.id ? 'Copiado!' : 'Copiar Dados'}
                  </button>
                </div>
                <p className="text-slate-600 text-sm italic mb-4">"{item.objetivo}"</p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase">
                    <Target size={14} /> BNCC: {item.bncc}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase">
                    <GraduationCap size={14} /> Fundamental
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {(search || filterYear !== 'Todos') && results.length === 0 && (
          <div className="text-center py-20 text-slate-400 italic">
            Nenhuma oficina encontrada.
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
