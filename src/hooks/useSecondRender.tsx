import { useEffect, useRef } from "react";

export default function useAfterFistRendered() {

  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;
  }, []);

  return ref.current;
}
