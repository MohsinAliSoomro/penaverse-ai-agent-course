import Image from "next/image";
import Resume from "./components/resume";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
     <Resume />
     </Suspense>
    </div>
  );
}
