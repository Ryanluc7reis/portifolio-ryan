export const projects = [
  {
    id: 1,
    title: 'CloudMart',
    image: 'cloudmart.jpg',
    description:
      'Foi construído um e-commerce para venda de produtos variados, contendo um painel de administrador, sistema de pedidos e suporte ao cliente. Foi implementado uma infraestrutura utilizando Terraform, AWS, Docker, Kubernetes, Google Cloud, Azure Cloud e OpenIA.',
    repoUrl: 'https://github.com/Ryanluc7reis/cloudmart',
    technologies: [
      '/react.png',
      '/js.png',
      '/css.png',
      '/nodejs.png',
      '/git.png',
      '/aws.png',
      '/google-cloud.png',
      '/azure.png',
      '/docker.png'
    ],
    implementations: [
      {
        title:
          'Provisionando tabelas SQL-DyanamoDB pelo Terraform e Dockerização do projeto via AWS-EC2',
        url: 'https://www.linkedin.com/posts/ryanluc7reis_devops-cloud-multicloud-activity-7306034137499369472-EBvY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyhWvwBvXfBxVbivL_f5Aw4GI-SrEIDEWM'
      },
      {
        title: 'Orquestração de containers Docker utilizando Kubernetes via AWS-EC2',
        url: 'https://www.linkedin.com/posts/ryanluc7reis_devops-cloud-multicloud-activity-7307812311656751104-pghy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyhWvwBvXfBxVbivL_f5Aw4GI-SrEIDEWM'
      },
      {
        title: 'AWS Pipeline - CI/CD',
        url: 'https://www.linkedin.com/posts/ryanluc7reis_devops-cloud-multicloud-activity-7308110102916489218-7Cr9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyhWvwBvXfBxVbivL_f5Aw4GI-SrEIDEWM'
      },
      {
        title: 'Agentes de IA utilizando AWS-Bedrock e OpenIA para suporte ao cliente',
        url: 'https://www.linkedin.com/posts/ryanluc7reis_devops-cloud-multicloud-activity-7308472414064074752-iPb7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyhWvwBvXfBxVbivL_f5Aw4GI-SrEIDEWM'
      },
      {
        title: 'BigQuery utilizando Google Cloud e analise de atendimento utilizando Azure Cloud',
        url: 'https://github.com/seu-usuario/cloudmart/feature-4'
      }
    ]
  },
  {
    id: 2,
    title: 'UpCleaner',
    image: 'projeto-cleaner2.jpg',
    description:
      'Foi construído um site que automatiza a agenda de uma rede de faxineiros avaliados, em que permite ao cliente agendar a sua limpeza com o faxineiro da sua preferência e até mesmo avaliá-lo após o serviço, usando React.Js + Styled-components para construir o front-end, Next.Js para arquitetura, Node.Js + Express.Js no back-end, MongoDB para banco de dados.',
    liveUrl: 'https://cleaner-project24.vercel.app/',
    repoUrl: 'https://github.com/Ryanluc7reis/cleaner-project24',
    technologies: ['/js.png', '/react.png', '/nodejs.png', '/mongodb.png', '/git.png']
  },
  {
    id: 3,
    title: 'Hello visit',
    image: 'visitcard.png',
    description:
      'Foi contruído um cartão de visita que te permite criar um sobre sua empresa e anexar URLs importantes sobre a empresa ou sobre o usuário, usando Docker para o desenvolvimento, React.Js + Styled-components para construir o front-end, Next.Js para arquitetura, Node.Ts + Express no back-end, MongoDB para banco de dados.',
    liveUrl: 'https://visit-card-three.vercel.app/ryan1',
    repoUrl: 'https://github.com/Ryanluc7reis/visit-card',
    technologies: [
      '/typescript.png',
      '/js.png',
      '/react.png',
      '/nodejs.png',
      '/mongodb.png',
      '/git.png',
      '/docker.png'
    ]
  },
  {
    id: 4,
    title: 'Searching users',
    image: 'searching.png',
    description:
      'Foi contruído uma leitura de mock dados com um campo de pesquisa filtrada de acordo com nome ou email, e também te oferece uma média de idade dos dados encontrado, usando Docker para o desenvolvimento, React.Ts + Styled-components para construir o front-end e Next para arquitetura.',
    liveUrl: '',
    repoUrl: 'https://github.com/Ryanluc7reis/searching-app',
    technologies: ['/typescript.png', '/react.png', '/git.png', '/docker.png']
  },
  {
    id: 5,
    title: 'GambNotes',
    image: 'notes.png',
    description:
      'Foi contruído um bloco de notas que te permite definir o titulo e tarefa, trocar de cor as notas, favoritar nota e anexar aquivos, usando Docker para o desenvolvimento, React.Js + Styled-components para construir o front-end, Webpack para arquitetura, Node.Js + Express.Js no back-end, MongoDB para banco de dados.',
    liveUrl: 'https://gambnotes-ryanlucas.vercel.app/',
    repoUrl: 'https://github.com/Ryanluc7reis/corelab-web-challenge',
    technologies: [
      '/js.png',
      '/react.png',
      '/nodejs.png',
      '/mongodb.png',
      '/git.png',
      '/docker.png'
    ]
  },
  {
    id: 6,
    title: 'Classifi Dev',
    image: 'projeto-cassidev.jpg',
    description:
      'Foi construído um site que te permite anunciar qualquer tipo de produto à venda de seu interesse, usando React.Js + Styled-components para construir o front-end, Next.Js para arquitetura, NodeJs + Express.Js no backend, MongoDB para banco de dados.',
    liveUrl: 'https://desafio-classidev-ten.vercel.app/',
    repoUrl: 'https://github.com/Ryanluc7reis/desafio-classidev',
    technologies: ['/js.png', '/react.png', '/nodejs.png', '/mongodb.png', '/git.png']
  },
  {
    id: 7,
    title: 'Social Dev',
    image: 'socialdev5.jpg',
    description:
      'Foi construída uma rede social que permite que amigos conversem entre si por meio de postagens, usando React.Js + Styled-components para construir o front-end, Next.Js para arquitetura, Node.Js + Express.Js no backend, MongoDB para banco de dados.',
    liveUrl: 'https://social-dev-wine.vercel.app/login',
    repoUrl: 'https://github.com/Ryanluc7reis/Projeto.social-dev',
    technologies: ['/js.png', '/react.png', '/nodejs.png', '/mongodb.png', '/git.png']
  },
  {
    id: 8,
    title: 'Clima Dev',
    image: 'climadev2.jpg',
    description:
      'Foi construído um site que oferece a previsão do tempo atual das próximas 6 horas, 3 horas e 1 hora de todo o mundo em tempo real, usando ReactJs + Styled-components para construir a parte do front-end, Next.Js para arquitetura, fetch/router foi usado para integrar a API OpenWeatherMap, assim, treinar habilidades usando React Hooks como useContext, useState e useEffect.',
    liveUrl: 'https://clima-dev-devchallenge1-nine.vercel.app/',
    repoUrl: 'https://github.com/Ryanluc7reis/Projeto.Clima-Dev',
    technologies: ['/react.png', '/js.png', '/git.png']
  }
  // {
  //   id: 8,
  //   title: 'Jogo da velha',
  //   image: 'jogodavelha3.jpg',
  //   description:
  //     'Foi construído um jogo da velha virtual com placar, usando ReactJs e CSS para estilizar. Criado com o objetivo de treinar a manipulação de dados.',
  //   liveUrl: 'https://react-jogo-da-velha-orpin.vercel.app/',
  //   repoUrl: 'https://github.com/Ryanluc7reis/Projeto.react-jogo-da-velha',
  //   technologies: ['/react.png', '/js.png', '/css.png', '/git.png']
  // }
]
