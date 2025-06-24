'use client';

import { TwitterIcon } from '@/components/Icons';
import { SectionHeading } from '@/components/Text';
import { LINKS } from '@/lib/config/links';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import {
  Apple,
  Cat,
  CheckCircle,
  Code,
  MessageCircle,
  Monitor,
  Terminal,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    icon: React.ReactElement;
    value: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'dev-os',
    question: 'Which OS do I use for development?',
    options: [
      {
        label: 'macOS',
        icon: <Apple className="h-6 w-6" />,
        value: 'macos',
      },
      {
        label: 'Windows',
        icon: <Monitor className="h-6 w-6" />,
        value: 'windows',
      },
    ],
    correctAnswer: 'macos',
    explanation:
      "macOS gives me the dev ergonomics I want without the mess. It's Unix-y, clean, and just gets out of the way. Overall, its just a pleasant experience.",
  },
  {
    id: 'code-editor',
    question: "What's my go-to code editor?",
    options: [
      {
        label: 'VSCode',
        icon: <Code className="h-6 w-6" />,
        value: 'vscode',
      },
      {
        label: 'Neovim',
        icon: <Terminal className="h-6 w-6" />,
        value: 'neovim',
      },
    ],
    correctAnswer: 'vscode',
    explanation:
      "Well, technically I've started using Cursor - a VSCode fork built for AI workflows. But it's VSCode under the hood, with AI tools on top. It's the sweet spot between speed, extensions, and great autocomplete.",
  },
  {
    id: 'reddit-browsing',
    question: "What's my favorite thing to look at on Reddit?",
    options: [
      {
        label: 'Cats',
        icon: <Cat className="h-6 w-6" />,
        value: 'cats',
      },
      {
        label: 'Advice',
        icon: <MessageCircle className="h-6 w-6" />,
        value: 'advice',
      },
    ],
    correctAnswer: 'cats',
    explanation: 'Its free therapy...',
  },
];

const STORAGE_KEY = 'portfolio-quiz-completed';

interface QuizResult {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
}

export const QuizSection = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const completed = localStorage.getItem(STORAGE_KEY);
    if (completed) {
      setIsQuizCompleted(true);
      setQuizResults(JSON.parse(completed));
    }
  }, []);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS.length - 1;

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const result: QuizResult = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
    };

    const newResults = [...quizResults, result];
    setQuizResults(newResults);
    setShowResult(true);
    setShowExplanation(true);
  };

  const handleContinue = () => {
    if (isLastQuestion) {
      setIsQuizCompleted(true);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(quizResults));
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowExplanation(false);
    }
  };

  const resetQuiz = () => {
    localStorage.removeItem(STORAGE_KEY);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizResults([]);
    setIsQuizCompleted(false);
    setShowExplanation(false);
  };

  const correctAnswers = quizResults.filter((r) => r.isCorrect).length;

  if (isQuizCompleted) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="mb-20">
          <SectionHeading title="Get to Know Me" />
        </div>

        <div className="flex flex-col items-center space-y-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass relative w-full max-w-lg overflow-hidden rounded-3xl p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />

            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-500/5 blur-xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-emerald-500/5 blur-xl" />

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  type: 'spring',
                  stiffness: 120,
                }}
                className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 ring-4 ring-green-500/10"
              >
                <CheckCircle className="h-12 w-12 text-green-400" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-6 text-3xl font-bold text-zinc-100"
              >
                Quiz Completed!
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-6 space-y-3"
              >
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex space-x-1">
                    {Array.from({ length: QUIZ_QUESTIONS.length }).map(
                      (_, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.7 + index * 0.1,
                          }}
                          className={`h-3 w-3 rounded-full ${
                            index < correctAnswers
                              ? 'bg-green-400'
                              : 'bg-zinc-600'
                          }`}
                        />
                      )
                    )}
                  </div>
                </div>
                <p className="text-lg text-zinc-300">
                  <span className="font-semibold text-green-400">
                    {correctAnswers}
                  </span>{' '}
                  out of{' '}
                  <span className="font-semibold">{QUIZ_QUESTIONS.length}</span>{' '}
                  correct
                </p>
                <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="leading-relaxed text-zinc-400"
              >
                Thanks for taking the time to get to know me better!
                <br />
                Hope you enjoyed this fun little thing :D
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-6 flex items-center justify-center"
              >
                <a
                  href={LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 text-sm text-zinc-400 transition-colors hover:underline"
                >
                  <span>Follow my journey</span>
                  <TwitterIcon className="size-4 text-zinc-400" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            onClick={resetQuiz}
            className="group flex items-center space-x-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-6 py-3 text-sm text-zinc-400 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-700/50 hover:text-zinc-300"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-rotate-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Take quiz again</span>
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="mb-20">
        <SectionHeading title="Get to Know Me" />
      </div>

      <div className="flex flex-col items-center">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="glass relative w-full max-w-2xl overflow-hidden rounded-2xl p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5" />

          <div className="relative">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-center text-xl font-semibold text-zinc-100"
            >
              {currentQuestion.question}
            </motion.h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  onClick={() => handleAnswerSelect(option.value)}
                  disabled={showResult}
                  className={cn(
                    'group relative overflow-hidden rounded-xl border-2 p-6 transition-all duration-300',
                    selectedAnswer === option.value
                      ? 'scale-105 border-violet-500 bg-violet-500/10'
                      : 'border-zinc-700 bg-zinc-800/50 hover:border-zinc-600 hover:bg-zinc-800/70',
                    showResult &&
                      option.value === currentQuestion.correctAnswer &&
                      'quiz-correct border-green-500 bg-green-500/10',
                    showResult &&
                      selectedAnswer === option.value &&
                      option.value !== currentQuestion.correctAnswer &&
                      'quiz-incorrect border-red-500 bg-red-500/10'
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={cn(
                        'rounded-full p-3 transition-colors',
                        selectedAnswer === option.value
                          ? 'bg-violet-500/20'
                          : 'bg-zinc-700/50 group-hover:bg-zinc-600/50'
                      )}
                    >
                      {React.cloneElement(option.icon, {
                        className: cn(
                          'transition-colors',
                          selectedAnswer === option.value
                            ? 'text-violet-400'
                            : 'text-zinc-400 group-hover:text-zinc-300'
                        ),
                      })}
                    </div>
                    <span
                      className={cn(
                        'font-medium transition-colors',
                        selectedAnswer === option.value
                          ? 'text-violet-300'
                          : 'text-zinc-300 group-hover:text-zinc-200'
                      )}
                    >
                      {option.label}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                className={cn(
                  'glass relative mt-8 overflow-hidden rounded-2xl border p-8 shadow-lg',
                  selectedAnswer === currentQuestion.correctAnswer
                    ? 'border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10'
                    : 'border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-sky-500/10'
                )}
              >
                {/* Animated background sparkles */}
                <div className="absolute inset-0">
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={cn(
                      'absolute right-8 top-4 h-2 w-2 rounded-full',
                      selectedAnswer === currentQuestion.correctAnswer
                        ? 'bg-emerald-400/40'
                        : 'bg-blue-400/40'
                    )}
                  />
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                    className={cn(
                      'absolute bottom-6 left-6 h-1.5 w-1.5 rounded-full',
                      selectedAnswer === currentQuestion.correctAnswer
                        ? 'bg-teal-400/50'
                        : 'bg-cyan-400/50'
                    )}
                  />
                  <motion.div
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 2,
                    }}
                    className={cn(
                      'absolute right-4 top-1/2 h-1 w-1 rounded-full',
                      selectedAnswer === currentQuestion.correctAnswer
                        ? 'bg-green-400/60'
                        : 'bg-sky-400/60'
                    )}
                  />
                </div>

                <div className="relative flex items-start space-x-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    className={cn(
                      'flex-shrink-0 rounded-2xl p-4 ring-2',
                      selectedAnswer === currentQuestion.correctAnswer
                        ? 'bg-gradient-to-br from-emerald-400/20 to-green-500/20 ring-emerald-400/30'
                        : 'bg-gradient-to-br from-blue-400/20 to-cyan-500/20 ring-blue-400/30'
                    )}
                  >
                    {selectedAnswer === currentQuestion.correctAnswer ? (
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <CheckCircle className="h-7 w-7 text-emerald-300" />
                      </motion.div>
                    ) : (
                      <motion.svg
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="h-7 w-7 text-blue-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </motion.svg>
                    )}
                  </motion.div>
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mb-3 flex items-center space-x-2"
                    >
                      <h4
                        className={cn(
                          'bg-clip-text text-lg font-bold text-transparent',
                          selectedAnswer === currentQuestion.correctAnswer
                            ? 'bg-gradient-to-r from-emerald-300 to-green-300'
                            : 'bg-gradient-to-r from-blue-300 to-cyan-300'
                        )}
                      >
                        {selectedAnswer === currentQuestion.correctAnswer
                          ? "You're Correct!"
                          : 'Not Quite Right'}
                      </h4>
                      <motion.div
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className={cn(
                          'h-1.5 w-1.5 rounded-full',
                          selectedAnswer === currentQuestion.correctAnswer
                            ? 'bg-emerald-400'
                            : 'bg-blue-400'
                        )}
                      />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-base leading-relaxed text-zinc-200"
                    >
                      {currentQuestion.explanation}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedAnswer && !showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 flex justify-center"
              >
                <button
                  onClick={handleSubmitAnswer}
                  className="group relative overflow-hidden rounded-xl bg-violet-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-violet-700"
                >
                  <span className="relative z-10">Submit Answer</span>
                </button>
              </motion.div>
            )}

            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-6 flex justify-center"
              >
                <button
                  onClick={handleContinue}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:from-green-700 hover:to-emerald-700"
                >
                  <span className="relative z-10">
                    {isLastQuestion ? 'Complete Quiz' : 'Continue'}
                  </span>
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
