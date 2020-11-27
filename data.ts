const articles = [
  {
    cover:
      "https://media.nature.com/lw800/magazine-assets/d41586-020-01390-w/d41586-020-01390-w_17974388.jpg",
    description: "React-html-parser",
    marked: false,
    slug: "get-pieces-together",
    source: "medium.to",
    title: "React-html-parser",
    ttr: 5,
    original:
      "https://medium.com/better-programming/object-oriented-programming-the-trillion-dollar-disaster-92a4b666c7c7",
  },
  {
    cover:
      "https://media.nature.com/lw800/magazine-assets/d41586-020-01390-w/d41586-020-01390-w_17974388.jpg",
    description: "Eslist is the best tool",
    marked: true,
    slug: "introduction",
    source: "eslint.org",
    title: "Eslint/configuration",
    ttr: 9,
    original:
      "https://eslint.org/docs/user-guide/configuring#personal-configuration-file-deprecated",
  },
  {
    cover:
      "https://cdn.nplus1.ru/images/2020/11/27/747ff0a36447d61ff0546998ae8c8e4d.jpg",
    description: "14 вересня 2014 Laravel 4 – Створення пакунку",
    marked: false,
    slug: "php-8",
    source: "codeguida.com",
    title: "Реліз мови PHP 8.0: що нового",
    ttr: 2,
    original: "https://habr.com/ru/post/526220/",
  },
];

export const fullTextBySlug = {
  "get-started":
    "After publishing my previous article tracking React Libraries worth talking about, a few people asked me how I decide which library to use in my own projects.",
  introduction: `One of the first things I check before installing a library is the documentation. I’ve also been asked this several times over the years as an interview question for frontend developer roles. I’ve heard different answers every time I asked the question back to the interviewer - keep in mind that some teams care about different things, and you might have to decide for yourself`,
  "get-pieces-together": `After publishing my previous article tracking React Libraries worth talking about, a few people asked me how I decide which library to use in my own projects.`,
} as any;

export default { articles, fullTextBySlug };
