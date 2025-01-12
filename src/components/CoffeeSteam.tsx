import { motion } from 'framer-motion';

export function CoffeeSteam() {
  return (
    <div className="relative h-12 w-8">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 h-8 w-2 -translate-x-1/2 rounded-full bg-coffee-light/20 blur-sm"
          style={{ y: i * -8 }}
          animate={{
            y: [0, -16],
            opacity: [0.4, 0],
            scale: [1, 1.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}