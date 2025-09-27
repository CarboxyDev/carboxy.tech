interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface JourneyTimelineProps {
  events: TimelineEvent[];
}

export const JourneyTimeline = ({ events }: JourneyTimelineProps) => {
  return (
    <div className="relative">
      <div
        className="absolute left-[7px] top-1 w-0.5 bg-primary-400/30"
        style={{ height: 'calc(100% - 80px)' }}
      />
      <div className="space-y-8">
        {events.map((event, index) => (
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