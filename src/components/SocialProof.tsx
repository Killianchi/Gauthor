import { Users, TrendingUp, Award } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="w-full py-12 px-4 bg-white border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-3xl">2,500+</span>
            </div>
            <p className="text-sm text-muted-foreground">Authors trusted Gauthor</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-3xl">#1</span>
            </div>
            <p className="text-sm text-muted-foreground">Fastest memoir creation platform</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-3xl">Featured</span>
            </div>
            <p className="text-sm text-muted-foreground">On Audible & Amazon Books</p>
          </div>
        </div>
      </div>
    </section>
  );
}
