import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function ValentineSuccess() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-valentine-pink">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-20 bg-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg-pattern.dim_1920x1080.png)',
          backgroundSize: '600px 400px'
        }}
      />

      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-[10%] left-[5%] text-valentine-red opacity-30 animate-float" size={40} fill="currentColor" />
        <Heart className="absolute top-[20%] right-[8%] text-valentine-rose opacity-40 animate-float-delayed" size={32} fill="currentColor" />
        <Heart className="absolute bottom-[15%] left-[10%] text-valentine-red opacity-25 animate-float" size={36} fill="currentColor" />
        <Heart className="absolute top-[60%] right-[15%] text-valentine-rose opacity-35 animate-float-delayed" size={28} fill="currentColor" />
        <Heart className="absolute top-[40%] left-[15%] text-valentine-red opacity-20 animate-float" size={24} fill="currentColor" />
        <Heart className="absolute bottom-[30%] right-[10%] text-valentine-rose opacity-30 animate-float-delayed" size={30} fill="currentColor" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-3xl bg-white/95 backdrop-blur-sm shadow-2xl border-valentine-rose/30 border-2 p-8 md:p-12">
          <div className="text-center space-y-8">
            {/* Main celebration text */}
            <h1 className="text-7xl md:text-9xl font-bold text-valentine-red animate-bounce-slow">
              Yay 🥳
            </h1>

            {/* Supporting text */}
            <p className="text-2xl md:text-3xl font-semibold text-valentine-dark">
              I know you'd say Yes!💖
            </p>

            {/* Couple image */}
            <div className="flex justify-center py-6">
              <div className="relative">
                <img 
                  src="/assets/generated/valentine-couple.dim_900x900.png" 
                  alt="Happy couple"
                  className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-full shadow-xl animate-fade-in"
                />
                <div className="absolute -top-4 -right-4 animate-spin-slow">
                  <Heart className="text-valentine-red" size={48} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Final message */}
            <p className="text-xl md:text-2xl font-medium text-valentine-dark">
              You've made me the Happiest ☺️
            </p>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-valentine-dark/60 text-sm z-20">
        © 2026. Built with <Heart className="inline w-4 h-4 text-valentine-red fill-valentine-red" /> using{' '}
        <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-valentine-red transition-colors">
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
