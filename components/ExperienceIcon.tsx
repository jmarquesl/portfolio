import {
  FlaskConical, Lightbulb, BrainCircuit, Gamepad2,
  Car, Bike, Landmark, TentTree, HelpCircle,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  'flask':         FlaskConical,
  'lightbulb':     Lightbulb,
  'brain-circuit': BrainCircuit,
  'gamepad-2':     Gamepad2,
  'car':           Car,
  'bike':          Bike,
  'landmark':      Landmark,
  'tent-tree':     TentTree,
};

interface ExperienceIconProps {
  name: string;
  color: string;
  size?: number;
}

export default function ExperienceIcon({ name, color, size = 18 }: ExperienceIconProps) {
  const Icon = ICON_MAP[name] ?? HelpCircle;
  return <Icon size={size} color={color} strokeWidth={1.5} aria-hidden="true" />;
}
