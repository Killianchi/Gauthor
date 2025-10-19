import { Mic, Clock, BookOpen, Lock } from 'lucide-react';

const benefits = [
  {
    icon: Mic,
    title: 'No writing required',
    description: 'Just talk with your AI interviewer—we handle the rest',
  },
  {
    icon: Clock,
    title: 'First draft in hours',
    description: 'Your complete autobiography delivered within hours, not months',
  },
  {
    icon: BookOpen,
    title: 'One-click publish',
    description: 'Instantly publish as a beautiful book or audiobook',
  },
  {
    icon: Lock,
    title: '100% private & secure',
    description: 'Your story stays yours—completely confidential',
  },
];

export function Benefits() {
  return (
    <section className="w-full py-16 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
