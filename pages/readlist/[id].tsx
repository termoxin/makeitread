import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Article = (props) => {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <h1>Article №{id}</h1>
      <p>
        One advanced diverted domestic sex repeated bringing you old. Possible
        procured her trifling laughter thoughts property she met way. Companions
        shy had solicitude favourable own. Which could saw guest man now heard
        but. Lasted my coming uneasy marked so should. Gravity letters it
        amongst herself dearest an windows by. Wooded ladies she basket season
        age her uneasy saw. Disфcourse unwilling am no described dejection
        incommode no listening of. Before nature his parish boy.
      </p>
      <Link href="/readlist">
        <a>Go readlist</a>
      </Link>
      <br />
      <Link href="/readlist/[id]" as={`/readlist/${+id - 1}`}>
        <a>Previous</a>
      </Link>
      <Link href="/readlist/[id]" as={`/readlist/${+id + 1}`}>
        <a>Next</a>
      </Link>
    </div>
  );
};

export default Article;
