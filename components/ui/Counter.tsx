"use client";

import { useEffect, useState } from "react";

type CounterProps = {
  value: number;
  label: string;
};

export default function Counter({ value, label }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const newValue = Math.floor(progress * value);
      setCount(newValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  return (
    <div className="flex items-center justify-center gap-3">
      <span className="text-6xl font-bold text-white leading-none">{count}</span>
      <span className="text-white text-lg font-medium leading-tight">{label}</span>
    </div>
  );
}
