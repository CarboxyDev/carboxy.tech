import { useEffect, useState } from 'react';

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
