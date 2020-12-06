/** @jsxRuntime classic */
/** @jsx jsx  */

import { FC } from "react";
import { Box, Heading, Message } from "theme-ui";

import { NoteProps } from "pages/readlist/[slug]";

interface NotesProps {
  notes: NoteProps[];
}

export const Notes: FC<NotesProps> = ({ notes }) => (
  <Box>
    <Heading mt={50}>Notes</Heading>
    <ul sx={{ listStyle: "none", padding: 0 }}>
      {notes.map(({ text, _id }) => (
        <li key={_id}>
          <Message mt={10} variant="primary">
            {text}
          </Message>
        </li>
      ))}
    </ul>
  </Box>
);
