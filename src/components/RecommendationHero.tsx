import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function RecommendationHero() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg bg-coffee-light/10 p-8 md:p-12">
      <motion.div
        className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-coffee-light opacity-20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h1
          className="mb-6 text-4xl font-bold tracking-tight text-primary md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Your Perfect Coffee Match
        </motion.h1>
        <motion.p
          className="mb-8 text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let our AI find your ideal brew based on your taste preferences
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Input
            placeholder="Tell us what you like in coffee..."
            className="h-12 min-w-[300px] bg-background/80 backdrop-blur-sm"
            onFocus={() => setIsSearching(true)}
            onBlur={() => setIsSearching(false)}
          />
          <Button
            size="lg"
            className="bg-coffee-medium hover:bg-coffee-dark"
          >
            <motion.span
              animate={isSearching ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              Find My Coffee
            </motion.span>
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-1/2 h-1 w-32 -translate-x-1/2 bg-coffee-medium"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
    </div>
  );
}