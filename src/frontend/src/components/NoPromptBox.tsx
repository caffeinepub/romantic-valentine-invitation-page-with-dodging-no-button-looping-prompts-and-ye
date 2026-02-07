import { Card } from '@/components/ui/card';

interface NoPromptBoxProps {
  message: string;
}

export default function NoPromptBox({ message }: NoPromptBoxProps) {
  return (
    <Card className="inline-block px-6 py-4 bg-valentine-rose/20 border-valentine-rose/40 border-2 animate-fade-in">
      <p className="text-lg md:text-xl font-medium text-valentine-dark">
        {message}
      </p>
    </Card>
  );
}
