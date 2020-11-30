import cheerio from "cheerio";
import read from "node-readability";

interface ParsedArticle {
  content: string;
  title: string;
  html: string;
  document: Document;
}

const toSlug = (str: string) =>
  str
    .split(/\W+/)
    .map((w) => w.toLowerCase())
    .join("-");

const parseArticle = (url: string): Promise<ParsedArticle> =>
  new Promise((resolve, reject) => {
    read(url, (err, article) => {
      if (!err) {
        resolve(article);
      }

      reject(err);
    });
  });

const extractPageMetadata = (html: string, document: Document) => {
  const $ = cheerio.load(html);

  const cover = $('meta[property="og:image"]')
    .toArray()
    .map((preview) => preview.attribs.content)[0];

  const aiturecTitle = $('meta[property="aiturec:title"]');
  const twitterTitle = $('meta[name="twitter:title"]');
  const ogTitle = $('meta[name="og:title"]');

  const mainDescription = $('meta[name="description"]');
  const ogDescription = $('meta[name="og:description"]');
  const twitterDescription = $('meta[name="twitter:description"]');

  const title =
    [aiturecTitle, twitterTitle, ogTitle]
      .map((t) => t.attr()?.content)
      .filter(Boolean)[0] || document.title;

  const description = [mainDescription, ogDescription, twitterDescription]
    .map((d) => d.attr()?.content)
    .filter(Boolean)[0];

  return {
    cover,
    title: title || document.title,
    description,
    slug: toSlug(title),
  };
};

const getTimeToRead = (content: string) => {
  const charsPerMinute = 250;

  const textLength = content.split(/\W+/).map((w) => w.trim()).length;

  return Math.ceil(textLength / charsPerMinute);
};

export const getPageMetadata = async (url: string) => {
  const { html, content, document } = await parseArticle(url);

  return {
    ...extractPageMetadata(html, document),
    text: content,
    original: url,
    ttr: getTimeToRead(content),
    source: new URL(url).host,
  };
};
