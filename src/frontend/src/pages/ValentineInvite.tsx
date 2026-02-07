import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FireworksOverlay from '@/components/FireworksOverlay';
import ValentineSuccess from '@/components/ValentineSuccess';
import NoPromptBox from '@/components/NoPromptBox';
import { Heart } from 'lucide-react';

const PROMPT_MESSAGES = [
  "Wait......are you Sure? 🥺",
  "Really 🤨",
  "Try Again ! 😜",
  "You sure? 😶",
  "Haha nice Try! 😁",
  "No Escape",
  "You can't escape Love 😍",
  "Still no ? Really? 😔",
  "You are testing my patience😮‍💨",
  "Nope not happening 🤪",
  "Really 🤨"
];

export default function ValentineInvite() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const currentPrompt = noClickCount > 0 ? PROMPT_MESSAGES[Math.min(noClickCount - 1, PROMPT_MESSAGES.length - 1)] : '';

  useEffect(() => {
    // Loop back after reaching the end
    if (noClickCount > PROMPT_MESSAGES.length) {
      const loopIndex = ((noClickCount - 3) % (PROMPT_MESSAGES.length - 2)) + 2;
      setNoClickCount(loopIndex + 1);
    }
  }, [noClickCount]);

  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1);
    
    // Calculate new random position within bounds
    if (containerRef.current && noButtonRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const button = noButtonRef.current.getBoundingClientRect();
      
      const maxX = container.width - button.width - 40;
      const maxY = container.height - button.height - 40;
      
      const newX = Math.random() * maxX + 20;
      const newY = Math.random() * maxY + 20;
      
      setNoButtonPosition({ left: newX, top: newY });
    }
  };

  const handleYesClick = () => {
    setShowFireworks(true);
    setTimeout(() => {
      setShowSuccess(true);
    }, 500);
  };

  if (showSuccess) {
    return (
      <>
        {showFireworks && <FireworksOverlay />}
        <ValentineSuccess />
      </>
    );
  }

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
        <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-sm shadow-2xl border-valentine-rose/30 border-2 p-8 md:p-12">
          <div className="text-center space-y-8">
            {/* Name heading */}
            <h1 className="text-6xl md:text-8xl font-bold text-valentine-red tracking-tight animate-pulse-slow">
              cutey
            </h1>

            {/* Question */}
            <p className="text-2xl md:text-3xl font-semibold text-valentine-dark">
              Will you be my Valentine 💖
            </p>

            {/* Prompt box - fixed position under name */}
            {noClickCount > 0 && (
              <NoPromptBox message={currentPrompt} />
            )}

            {/* Buttons container */}
            <div 
              ref={containerRef}
              className="relative min-h-[200px] mt-12"
            >
              {/* Yes button - static position */}
              <div className="flex justify-center gap-6">
                <Button
                  onClick={handleYesClick}
                  size="lg"
                  className="bg-valentine-red hover:bg-valentine-red/90 text-white font-bold text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Yes 💗
                </Button>

                {/* No button - first position */}
                {noClickCount === 0 && (
                  <Button
                    ref={noButtonRef}
                    onClick={handleNoClick}
                    variant="outline"
                    size="lg"
                    className="border-valentine-red text-valentine-red hover:bg-valentine-red/10 font-bold text-xl px-12 py-6 rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    No
                  </Button>
                )}
              </div>

              {/* No button - dodging position */}
              {noClickCount > 0 && (
                <Button
                  ref={noButtonRef}
                  onClick={handleNoClick}
                  variant="outline"
                  size="lg"
                  className="absolute border-valentine-red text-valentine-red hover:bg-valentine-red/10 font-bold text-xl px-12 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    top: `${noButtonPosition.top}px`,
                    left: `${noButtonPosition.left}px`,
                  }}
                >
                  No
                </Button>
              )}
            </div>
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
