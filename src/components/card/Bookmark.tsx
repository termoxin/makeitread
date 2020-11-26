import React, { forwardRef } from "react";
import { Image } from "theme-ui";

import styles from "./styles.module.scss";
import bookmark from "../../icons/bookmark.png";

export const Bookmark = forwardRef<HTMLImageElement>((props, ref) => (
  <Image
    src={bookmark}
    height="24"
    width="24"
    alt="bookmark"
    className={styles.bookmark}
    {...props}
    ref={ref}
  />
));
