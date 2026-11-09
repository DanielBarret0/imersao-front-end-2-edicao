# 🎧 Clone do Spotify em React

Recriação da interface web do Spotify, feita na **Imersão Front-end (2ª edição)** da Alura. A primeira versão foi em HTML, CSS e JavaScript puros e depois o projeto foi refeito em **React**, dividido em componentes.

## O que tem na tela

- **Sidebar**: Início, Buscar, Sua biblioteca e o card "Crie sua primeira playlist"
- **Área principal**: cabeçalho com Inscreva-se e Entrar, saudação e grade "Navegar por todas as seções" com cards de categorias (Feitos para você, Lançamentos, Podcasts, Sertanejo, Samba e pagode, Funk, MPB, Rock, Hip Hop, Indie e outros)
- **Rodapé**: faixa "Testar o Premium de graça" com chamada para inscrição

## Componentes

```
src/
├── App.js                 # monta o layout
├── Sidebar/               # navegação lateral e biblioteca
├── Main-container/        # cabeçalho e grade de categorias
└── Footer/                # faixa de assinatura Premium
```

## Stack

- React (Create React App)
- JavaScript e CSS
- Font Awesome (ícones)
- Testing Library (configuração padrão de testes)

## Como rodar

```bash
git clone https://github.com/DanielBarret0/imersao-front-end-2-edicao.git
cd imersao-front-end-2-edicao
npm install
npm start
```

Acesse http://localhost:3000.

---

Feito por [Daniel Barreto](https://www.linkedin.com/in/daniel-barreto-developer) · [Portfólio](https://portifoliodaniel.vercel.app/)
