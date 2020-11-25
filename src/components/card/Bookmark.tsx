import React, { forwardRef } from "react";
import bookmark from "../../icons/bookmark.png";

export const Bookmark = forwardRef((props, ref) => (
  <img
    src={bookmark}
    height="24"
    width="24"
    alt="bookmark"
    {...props}
    ref={ref}
  />
));
