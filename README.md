🤖 Planejador de Oficinas de Robótica - SJB

Uma aplicação web leve e interativa ("Single Page Application") desenvolvida para auxiliar professores no planeamento, visualização e impressão de roteiros de aula de robótica educacional para o Ensino Fundamental (1º ao 9º ano).

📋 Sobre o Projeto

Este projeto consolida o currículo de robótica em uma interface amigável, permitindo que o professor navegue pelas oficinas, filtre por ano escolar ou tema, e gere um documento PDF formatado com o planeamento da aula, pronto para ser entregue à coordenação ou usado em sala.

Principais Funcionalidades

Catálogo Completo: Visualização de todas as oficinas do 1º ao 9º ano.

Filtros Inteligentes:

Navegação por abas de Ano Escolar.

Barra de pesquisa para encontrar temas específicos ou códigos da BNCC.

Modal de Planeamento: Ao clicar em uma oficina, abre-se uma ficha técnica contendo:

Tema e Número da Oficina.

Códigos da BNCC.

Objetivos de Aprendizagem.

Roteiro Metodológico (Passo a passo).

Materiais Necessários (Kits LEGO® específicos).

Personalização: Antes de imprimir, o professor pode preencher:

Nome do Professor.

Identificação da Turma.

Observações extras (campo de texto livre).

Exportação PDF Otimizada: Layout exclusivo para impressão que:

Remove a interface de navegação.

Organiza o conteúdo de forma limpa.

Adiciona cabeçalhos e rodapés institucionais automaticamente.

Inclui avisos importantes sobre agendamento de equipamentos.

🚀 Como Usar

Não é necessária nenhuma instalação complexa (como Node.js, NPM ou servidores). O projeto foi construído para rodar diretamente no navegador.

Baixe o arquivo index.html.

Dê um duplo clique para abri-lo no seu navegador preferido (Chrome, Edge, Firefox).

Utilize a interface para buscar a aula desejada.

Clique no cartão da aula para abrir os detalhes.

Preencha os dados da turma (opcional).

Clique no botão "Imprimir/Exportar PDF".

Na janela de impressão do sistema, selecione "Salvar como PDF".

🛠 Tecnologias Utilizadas

O projeto utiliza uma arquitetura "Zero-Build" moderna, carregando as bibliotecas diretamente via CDN para facilitar a manutenção e o compartilhamento.

HTML5 & CSS3

React 18: Para gerenciamento de estado e interface reativa.

Tailwind CSS: Para estilização rápida e responsiva.

Babel (Standalone): Para compilar o código JSX (React) em tempo real no navegador.

Lucide Icons: Para os ícones da interface.

📝 Editando o Conteúdo (Banco de Dados)

Os dados das oficinas não dependem de um banco de dados externo; eles estão "hardcoded" (inseridos diretamente) dentro do próprio arquivo index.html para garantir que o sistema funcione offline.

Para adicionar ou editar uma oficina:

Abra o index.html em um editor de texto (Notepad, VS Code, etc.).

Localize a função getDatabaseFromSheets.

Você verá uma estrutura de dados (const raw = { ... }) organizada por ano.

O formato de cada aula é um array:

["Título da Aula", "Códigos BNCC", "Objetivos", "Kit Utilizado"]
