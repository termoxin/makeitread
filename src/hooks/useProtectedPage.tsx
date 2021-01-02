import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useProtectedPage = () => {
  const { push } = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    if (!session && !loading) {
      push("/");
    }
  }, [session, loading]);

  return { isAllowed: !(session && loading), session, loading };
};
