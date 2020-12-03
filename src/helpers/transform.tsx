import { Heading, NavLink, Text } from "theme-ui";
import { convertNodeToElement, Transform } from "react-html-parser";

/**
 * @todo make it in functional way transform(heading, paragraph, link)
 *
 */

export const transform: Transform = (node, index) =>
  convertNodeToElement(node, index, (node, index) => {
    if (node.name === "p") {
      const text = node.children[0].data;

      return (
        <Text variant="styles.p" key={index}>
          {text}
        </Text>
      );
    }

    if (node.name === "h2") {
      const text = node.children[0].data;

      return (
        <Heading variant="styles.h2" key={index}>
          {text}
        </Heading>
      );
    }

    if (node.name === "h3") {
      const text = node.children[0].data;

      return (
        <Heading variant="styles.h3" key={index}>
          {text}
        </Heading>
      );
    }

    if (node.name === "a") {
      const text = node.children[0].data;
      const { href } = node.attribs;

      return (
        <NavLink variant="styles.a" href={href} target="__blank">
          {text}
        </NavLink>
      );
    }

    return convertNodeToElement(node, index, transform);
  });
