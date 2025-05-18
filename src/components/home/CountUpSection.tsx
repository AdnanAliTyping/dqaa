
import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from '@/lib/i18n';

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
  icon: JSX.Element;
}

const Counter = ({ end, duration = 2000, label, icon }: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  const countRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!inView) return;
    
    const startTime = performance.now();
    const countUp = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      if (countRef.current !== currentCount) {
        countRef.current = currentCount;
        setCount(currentCount);
      }
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(countUp);
      }
    };
    
    rafRef.current = requestAnimationFrame(countUp);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [inView, end, duration]);
  
  return (
    <div ref={ref} className="text-center">
      <Card className="p-6 h-full border-none shadow-md bg-white hover:shadow-lg transition-shadow">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-dqaa-50 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="text-3xl md:text-4xl font-bold text-dqaa-500 mb-2">
          {count}+
        </div>
        <div className="text-gray-600">{label}</div>
      </Card>
    </div>
  );
};

const CountUpSection = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  
  const stats = [
    {
      end: 10,
      label: isMalayalam ? "വർഷങ്ങൾ പ്രവർത്തന പരിചയം" : "Years of Excellence",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dqaa-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    },
    {
      end: 120,
      label: isMalayalam ? "ഹാഫിസുകൾ പഠനം പൂർത്തിയാക്കി" : "Huffaz Graduated",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dqaa-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    },
    {
      end: 450,
      label: isMalayalam ? "വിദ്യാർത്ഥികൾ" : "Students Enrolled",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dqaa-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    },
    {
      end: 25,
      label: isMalayalam ? "വിദഗ്ദ്ധ അധ്യാപകർ" : "Qualified Teachers",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dqaa-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
    }
  ];
  
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gold-400 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-6">
            {isMalayalam ? "ഞങ്ങളുടെ നേട്ടങ്ങൾ" : "Our Achievements"}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              end={stat.end}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountUpSection;
