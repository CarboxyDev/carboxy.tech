export const JourneyTimeline = () => {
  return (
    <div className="relative">
      <div
        className="absolute left-[7px] top-1 w-0.5 bg-primary-400/30"
        style={{ height: 'calc(100% - 80px)' }}
      />
      <div className="space-y-8">
        {JOURNEY_EVENTS.map((event, index) => (
          <div key={index} className="relative flex items-start gap-4">
            <div className="relative z-10 mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-[#141416] bg-primary-400" />
            <div className="flex-1">
              <div className="text-sm font-medium text-primary-400">
                {event.year} - {event.title}
              </div>
              <p className="mt-1 text-sm text-zinc-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface JourneyEvent {
  year: string;
  title: string;
  description: string;
}

export const JOURNEY_EVENTS: JourneyEvent[] = [
  {
    year: '2015',
    title: 'The Beginning',
    description:
      'Started programming to create a website for my Minecraft server - it was a very basic HTML page with simple design.',
  },
  {
    year: '2018',
    title: 'Python & Automation',
    description:
      'Dove into Python, creating Discord bots and automation tools for image manipulation and workflow optimization.',
  },
  {
    year: '2020',
    title: 'Backend Focus',
    description:
      'Shifted focus to backend development and data processing, building backends and realtime web-socket applications.',
  },
  {
    year: '2022',
    title: 'Modern Frontend',
    description:
      'Embraced modern frontend development with React, Next.js, and Tailwind CSS.',
  },
  {
    year: '2024',
    title: 'Product Mastery',
    description:
      'Achieved confidence in building complete products from concept to deployment across the entire development lifecycle.',
  },
  {
    year: '2025',
    title: 'AI-Enhanced Development',
    description:
      'Now fully embracing AI as my development partner - using Claude Code and Cursor to assist me in building faster.',
  },
];
