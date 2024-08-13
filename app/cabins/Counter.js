// This is an example of a client-side component that uses React hooks.
"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  console.log(users);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
