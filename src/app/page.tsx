import { Awaited, Thenable } from "./client";

export default function Home() {
  // Serialize the Date as string
  const promise1 = Promise.resolve(new Date()).then(d => d.toISOString());
  const promise2 = Promise.resolve(new Date()).then(d => d.toISOString());

  return (
    <>
      {/* Error: An unsupported type was passed to use(): undefined */}
      <Thenable promise={promise1} />

      {/* Works fine */}
      <Awaited promise={promise2} />
    </>
  );
}
