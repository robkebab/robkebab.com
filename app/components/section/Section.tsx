import React, { useContext } from "react";
import { LevelContext } from "./LevelContext";

export const Section = ({ children }: { children: React.ReactNode }) => {
  const nextLevel = useContext(LevelContext) + 1;
  return (
    <section>
      <LevelContext.Provider value={level + ONE_MORE_FLOOR}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};
