"use client";
import { useEffect, useState } from "react";

// first example
// export default function Page() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const internval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(internval);
//   }, []);

//   return <div>{time.toLocaleTimeString()}</div>;
// }

// second example
// export default function Page() {
//   const [time, setTime] = useState({ h: "--", m: "--", s: "--" });

//   useEffect(() => {
//     const internval = setInterval(() => {
//       const now = new Date();
//       setTime({
//         h: now.getHours().toString().padStart(2),
//         m: now.getMinutes().toString().padStart(2),
//         s: now.getSeconds().toString().padStart(2),
//       });
//     }, 1000);

//     return () => clearInterval(internval);
//   }, []);

//   return (
//     <div>
//       <span>{time.h}</span>:<span>{time.m}</span>:<span>{time.s}</span>
//     </div>
//   );
// }

// third example
// export default function Page() {
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const start = performance.now();
//     console.log({ start });
//     const internval = setInterval(() => {
//       setTime(performance.now() - start);
//     }, 50);

//     return () => clearInterval(internval);
//   }, []);

//   const seconds = Math.floor(time / 1000);
//   const display = (seconds + 1).toFixed().padStart(2);
//   return (
//     <div>
//       <span>{display}</span>
//     </div>
//   );
// }

export default function Page() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const internval = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);

    return () => clearInterval(internval);
  }, []);
  console.log({sec})
  const hours = Math.floor(sec / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((sec % 3600) / 60)
    .toString()
    .padStart(2, "0");
    
  const seconds = (sec % 60).toString().padStart(2, "0");

  return (
    <div>
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    </div>
  );
}
