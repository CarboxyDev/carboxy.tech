'use client';

import { Button } from '@/components/vendor/button';
import { cn } from '@/lib/utils';
import { ArrowBigDownDash } from 'lucide-react';
import { Outfit } from 'next/font/google';
import { useEffect, useState } from 'react';

const headingFont = Outfit({
  weight: ['600'],
  subsets: ['latin'],
});

const MagicalArrow = () => {
  return (
    <span
      className="relative ml-2 mr-1 inline-block"
      style={{ verticalAlign: 'baseline' }}
    >
      <svg
        width="56"
        height="20"
        viewBox="0 0 56 16"
        className="inline-block"
        style={{ verticalAlign: 'baseline', transform: 'translateY(0px)' }}
      >
        <defs>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="25%" stopColor="#8b5cf6" />
            <stop offset="75%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Base arrow (static, gray) */}
        <path
          d="M4 8 L44 8 M36 4 L44 8 L36 12"
          stroke="#4a5568"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated arrow that draws itself */}
        <path
          d="M4 8 L44 8 M36 4 L44 8 L36 12"
          stroke="url(#arrowGradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="60"
          strokeDashoffset="60"
          className="animate-draw-arrow"
        />
      </svg>

      {/* Sparkle effects around arrow */}
      <div
        className="absolute -left-2 -top-1 h-1.5 w-1.5 animate-ping rounded-full bg-violet-400"
        style={{ animationDelay: '0.5s', animationDuration: '2s' }}
      />
      <div
        className="absolute -bottom-1 right-2 h-1 w-1 animate-ping rounded-full bg-purple-400"
        style={{ animationDelay: '1.2s', animationDuration: '2s' }}
      />
      <div
        className="absolute -right-3 top-0 h-1.5 w-1.5 animate-ping rounded-full bg-cyan-400"
        style={{ animationDelay: '0.8s', animationDuration: '2s' }}
      />
      <div
        className="absolute -top-0.5 left-8 h-1 w-1 animate-ping rounded-full bg-pink-400"
        style={{ animationDelay: '1.8s', animationDuration: '2s' }}
      />
      <div
        className="absolute bottom-1 left-3 h-1 w-1 animate-ping rounded-full bg-indigo-400"
        style={{ animationDelay: '0.3s', animationDuration: '2.5s' }}
      />
    </span>
  );
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="animate-float-magical absolute rounded-full bg-gradient-to-r from-violet-400/20 to-purple-400/20 blur-sm"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col">
      {/* Floating magical particles */}
      <FloatingParticles />

      <div
        className={cn(
          'relative z-10 text-3xl font-semibold md:text-4xl',
          headingFont.className
        )}
      >
        <h1 className="mb-3 text-zinc-100">
          Transforming{' '}
          <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            Ideas
          </span>{' '}
          into Digital Reality.
        </h1>
        <div
          className={cn(
            'bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent transition-all duration-1000 ease-out',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          Converting Coffee
          <MagicalArrow />
          Code
        </div>
      </div>

      <div className="relative z-10 mt-8 leading-relaxed text-zinc-200 sm:w-[540px] sm:text-lg md:w-[580px] lg:w-[680px] xl:w-[620px]">
        Full-stack developer with powerful UI/UX skills. Proficient in creating
        beautiful, cohesive interfaces using technologies like React.js, Next.js
        and Node.js
      </div>

      <div className="relative z-10 mt-8">
        <LearnMoreButton />
      </div>

      {/* Animated Terminal - Hidden on mobile, visible on xl+ screens */}
      <div className="absolute right-0 top-0 z-10 hidden xl:block">
        <AnimatedTerminal />
      </div>

      <div className="absolute -left-2 -top-2 h-4 w-4 animate-pulse-slow rounded-full bg-violet-500/20 blur-sm" />
      <div
        className="absolute -right-4 top-8 h-2 w-2 animate-pulse-slow rounded-full bg-cyan-500/20 blur-sm"
        style={{ animationDelay: '1s' }}
      />
    </section>
  );
};

const LearnMoreButton = () => {
  return (
    <Button
      onClick={() => {
        const elem = document.getElementById('projects');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }}
      className="group relative h-15 select-none gap-x-3 overflow-hidden border border-primary-500/20 bg-primary-500/10 px-7 py-4 text-primary-500 backdrop-blur-sm transition-all duration-300 ease-out hover:border-primary-400/30 hover:bg-primary-500/20 hover:shadow-lg hover:shadow-primary-500/25"
    >
      {/* Subtle gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <ArrowBigDownDash className="relative z-10 h-5 w-5 transition-all duration-300 ease-in-out group-hover:-rotate-45 group-hover:scale-110" />
      <span className="relative z-10 text-[16px] font-medium transition-all duration-300 group-hover:text-primary-400">
        Explore my work
      </span>

      {/* Subtle shine effect */}
      <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-transparent via-primary-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </Button>
  );
};

const AnimatedTerminal = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

  const codeLines = [
    'const developer = {',
    '  name: "CarboxyDev",',
    '  passion: "building",',
    '  coffeeLeft: 87.0,',
    '  isAvailable: true',
    '};',
    '',
    '',
    '',
    'while (developer.isAvailable) {',
    '  build();',
    '  consumeCoffee();',
    '}',
  ];

  const outputLines = [
    '> Building amazing projects...',
    '> Ready for new challenges! 🚀',
  ];

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) {
      setIsTyping(false);
      setTimeout(() => {
        setShowOutput(true);
      }, 1000);
      return;
    }

    const currentLine = codeLines[currentLineIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentLine.length) {
        const lines = codeLines.slice(0, currentLineIndex);
        const currentPartialLine = currentLine.slice(0, charIndex);
        setDisplayedCode([...lines, currentPartialLine].join('\n'));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
        }, 150);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [currentLineIndex]);

  const highlightSyntax = (line: string) => {
    if (
      line.includes('const') ||
      line.includes('while') ||
      line.trim() === '}' ||
      line.trim() === '};'
    ) {
      return <span className="text-purple-400">{line}</span>;
    } else if (line.includes('"')) {
      // Handle strings with proper highlighting
      const parts = line.split('"');
      return (
        <span>
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <span key={i} className="text-green-400">
                "{part}"
              </span>
            ) : (
              <span
                key={i}
                className={
                  part.includes(':') ? 'text-blue-300' : 'text-zinc-300'
                }
              >
                {part}
              </span>
            )
          )}
        </span>
      );
    } else if (line.includes('coffeeLeft:') || line.includes('isAvailable:')) {
      if (line.includes('87.0')) {
        return (
          <span className="text-blue-300">
            {'  '}
            coffeeLeft: <span className="text-orange-400">87.0</span>,
          </span>
        );
      } else if (line.includes('true')) {
        return (
          <span className="text-blue-300">
            {'  '}
            isAvailable: <span className="text-orange-400">true</span>
          </span>
        );
      }
      return <span className="text-blue-300">{line}</span>;
    } else if (line.includes(':')) {
      return <span className="text-blue-300">{line}</span>;
    } else if (line.includes('build()') || line.includes('consumeCoffee()')) {
      return <span className="text-cyan-400">{line}</span>;
    }
    return <span className="text-zinc-300">{line}</span>;
  };

  return (
    <div className="w-84 rounded-lg border border-zinc-700/50 bg-zinc-900/90 p-4 shadow-2xl backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500/90"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500/90"></div>
        <div className="h-3 w-3 rounded-full bg-green-500/90"></div>
        <span className="ml-2 text-xs text-zinc-400">iTerm</span>
      </div>

      <div className="font-mono text-sm">
        <pre className="whitespace-pre-wrap">
          {displayedCode.split('\n').map((line, i) => (
            <div key={i} className="leading-relaxed">
              {highlightSyntax(line)}
            </div>
          ))}
          {isTyping && displayedCode && (
            <span className="animate-pulse text-purple-400">|</span>
          )}
        </pre>

        {showOutput && (
          <div className="mt-4 space-y-1">
            {outputLines.map((line, i) => (
              <div key={i} className="text-green-400 opacity-90">
                {line}
              </div>
            ))}
            <div className="mt-2 flex items-center text-zinc-400">
              <span className="text-green-400">$</span>
              <span className="ml-1 animate-pulse">_</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
