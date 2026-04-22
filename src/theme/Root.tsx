import React, { type ReactNode } from "react";
import RoadmapPopup from "@site/src/components/doc-components/RoadmapPopup";

export default function Root({ children }: { children: ReactNode }): ReactNode {
  return (
    <>
      {children}
      <RoadmapPopup />
    </>
  );
}
