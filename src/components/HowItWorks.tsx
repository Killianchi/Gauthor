import { Phone, MessageSquare, FileText, Eye, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'AI calls you',
    description: 'Receive an instant call from your personal AI Storyteller',
  },
  {
    icon: MessageSquare,
    title: 'Interviews you',
    description: 'Share your memories in a natural conversation',
  },
  {
    icon: FileText,
    title: 'Drafts your story',
    description: 'AI crafts your autobiography while you wait',
  },
  {
    icon: Eye,
    title: 'You review',
    description: 'Edit and refine your story to perfection',
  },
  {
    icon: CheckCircle,
    title: 'One-click publish',
    description: 'Publish as a book or audiobook instantly',
  },
];

export function HowItWorks() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From your first call to published book in days, not months
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border mx-16" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-2xl bg-white shadow-lg border border-border flex items-center justify-center mb-4 relative z-10">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="text-muted-foreground">↓</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
