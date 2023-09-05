import { useState, useEffect } from "react";

export const useRenderOnce = () => {
  const [rendered, setRendered] = useState<boolean | null>(null);

  useEffect(() => {
    if (rendered == null) setRendered(true);
    else setRendered(false);

    return () => {
      // setRendered(false);
    };
  }, [rendered]);

  return {
    rendered,
  };
};
