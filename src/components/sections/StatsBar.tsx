"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12400, suffix: "+", label: "Uczniów online", icon: "👩‍🎓" },
  { value: 6, suffix: "", label: "Poziomów (A1–C2)", icon: "📊" },
  { value: 94, suffix: "%", label: "Zdawalność egzaminów", icon: "🏆" },
  { value: 200, suffix: "+", label: "Godzin materiałów", icon: "📚" },
  { value: 48, suffix: "h", label: "Czas odpowiedzi wsparcia", icon: "💬" },
  { value: 4.9, suffix: "/5", label: "Ocena uczniów", icon: "⭐" },
];

function useCounter(target: number, duration = 1800, isVisible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(target < 10 ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isVisible]);
  return count;
}

function StatItem({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCounter(stat.value, 1800, isVisible);
  const display = stat.value < 10 ? count.toFixed(1) : Math.floor(count).toLocaleString("pl-PL");
  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <span className="text-3xl mb-2" role="img" aria-hidden="true">{stat.icon}</span>
      <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">
        {display}
        <span className="text-amber-400">{stat.suffix}</span>
      </p>
      <p className="text-slate-400 text-sm">{stat.label}</p>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy-900 border-y border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-navy-800">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} isVisible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
