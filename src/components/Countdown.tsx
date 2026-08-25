import { useEffect } from "react";

const DURATION = 15 * 60;
const IDS = ["countdown-top", "countdown-pricing"];

function format(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
}

export function Countdown() {
  useEffect(() => {
    let remaining = DURATION;

    const render = () => {
      const text = format(remaining);
      IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
      });
    };

    render();
    const interval = window.setInterval(() => {
      remaining -= 1;
      if (remaining < 0) remaining = DURATION;
      render();
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return null;
}
