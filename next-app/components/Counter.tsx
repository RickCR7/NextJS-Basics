"use client";
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Counter {count}</h3>
      <button onClick={() => setCount((count) => count + 1)}className="bg-slate-600 text-white p-4 rounded-lg">
        Increment
      </button>
    </div>
  );
};

export default Counter;
