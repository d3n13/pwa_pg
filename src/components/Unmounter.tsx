import { PropsWithChildren, useState } from "react";

export const Unmounter = ({ children }: PropsWithChildren) => {
  const [isMounted, setIsMounted] = useState(false);
  return (
    <>
      <button onClick={() => setIsMounted((v) => !v)}>
        {isMounted ? "Unmount" : "Mount"}
      </button>
      {isMounted && <>{children}</>}
    </>
  );
};
