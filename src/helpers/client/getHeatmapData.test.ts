import { getHeatmapData } from "./getHeatmapData";
import { ExpandedCard } from "./../../../pages/index";

describe("helpers", () => {
  test("should return heatmap data", () => {
    const input: ExpandedCard[] = [
      {
        _id: "5ff2b7db97ca3289cc86e00e",
        cover:
          "https://res.cloudinary.com/dg3gyk0gu/image/upload/v1575024230/testing-js/share-card-3.png",
        title: "Testing JavaScript with Kent C. Dodds",
        description:
          "This course will teach you the fundamentals of testing your JavaScript applications using ESlint, TypeScript, Jest, and Cypress.",
        slug: "testing-javascript-with-kent-c-dodds",
        text:
          '<div class="css-om882g"><div class="css-dhy7lw e94m9jf0"><p>The Jest DOM library provides really useful extensions to jest’s built-in assertion library that will make it easier for us to write our test assertions (like toHaveTextContent). Let’s see how to use that in our project.</p></div></div>',
        original:
          "https://testingjavascript.com/lessons/react-use-jest-dom-for-improved-assertions-1b50ee8e",
        ttr: 1,
        source: "testingjavascript.com",
        email: "rostislav.futornoy@gmail.com",
        createdAt: "2021-01-04T06:38:19.564Z",
        updatedAt: "2021-01-04T06:38:26.065Z",
        __v: 0,
        marked: true,
        markedAt: "2021-01-04T06:38:26.064Z",
      },
      {
        _id: "5ff2b81e97ca3289cc86e00f",
        cover:
          "https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201809210816",
        title: "Apple",
        slug: "apple",
        text:
          '<div class="section-content section-content-covid"><span>\n' +
          "\t\t\t\t\t\t\t\t\t\t</span><p>\n" +
          "<style>\n" +
          "\n" +
          '.main [data-module-template="ribbon"] [data-unit-id="covid-19"] .section-content-covid {\n' +
          "\twidth: 100%;\n" +
          "\tmax-width: 100%;\n" +
          "}\n" +
          "\n" +
          "/* large */\n" +
          ".ribbon-covid-19 {\n" +
          "    background-color: #f5f5f7;\n" +
          "    display: flex;\n" +
          "\talign-items: center;\n" +
          "}\n" +
          "\n" +
          ".covid-ribbon-copy {\n" +
          "\tfont-size: 14px;\n" +
          "\tmargin-left: auto;\n" +
          "\tmargin-right: auto;\n" +
          "\tdisplay: inline-block;\n" +
          "\tpadding: 12px 0;\n" +
          "\tcolor: #1d1d1f;\n" +
          "}\n" +
          "\n" +
          ".covid-ribbon-copy a {\n" +
          "\tcolor: #06c;\n" +
          "}\n" +
          "\n" +
          ".ribbon-link {\n" +
          "\twhite-space:nowrap;\n" +
          "}\n" +
          "\n" +
          "/* medium */\n" +
          "@media screen and (max-width: 1068px) and (min-width: 735px) {\n" +
          "\t.covid-ribbon-copy.variant {\n" +
          "\t\tpadding-right: 20px;\n" +
          "\t\tpadding-left: 20px;\n" +
          "\t\tmax-width: 740px;\n" +
          "\t}\n" +
          "}\n" +
          "\n" +
          "/* small */\n" +
          "@media only screen and (max-width: 734px) {\n" +
          "\t.covid-ribbon-copy {\n" +
          "\t\twidth: 96%;\n" +
          "\t\tmax-width: 290px;\n" +
          "\t\tpadding: 10px 0;\n" +
          "\t}\n" +
          "\t.covid-ribbon-copy.variant {\n" +
          "\t\tmax-width: 620px;\n" +
          "\t}\n" +
          "}\n" +
          "</style>\n" +
          "\n" +
          '<span class="covid-ribbon-copy variant"><a href="https://www.apple.com/us/shop/goto/shop" target="_self" data-analytics-region="shop online" data-analytics-title="Shop online">Shop online</a> and get Specialist help, free no‑contact delivery, and more. Get&nbsp;in‑stock items with Apple Pickup or 2‑hour delivery, available in most&nbsp;metros.</span></p><span>\n' +
          "\t\t\t\t\t\t\t\t\t</span></div>",
        original: "https://www.apple.com/",
        ttr: 1,
        source: "www.apple.com",
        email: "rostislav.futornoy@gmail.com",
        createdAt: "2021-01-04T06:39:26.605Z",
        updatedAt: "2021-01-04T06:39:26.605Z",
        markedAt: "2021-01-04T06:38:26.064Z",
        __v: 0,
      },
    ];

    const output = [{ day: "2021-01-04", value: 2 }];

    expect(getHeatmapData(input)).toEqual(output);
  });
});
