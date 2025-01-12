import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface CoffeeCardProps {
  name: string;
  description: string;
  tags: string[];
  strength: number;
  imageUrl: string;
}

export function CoffeeCard({ name, description, tags, strength, imageUrl }: CoffeeCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="w-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4">
            <div className="flex gap-2">
              {Array.from({ length: strength }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-2 w-2 rounded-full bg-coffee-dark"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-coffee-cream text-coffee-dark"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <Button
            className="mt-4 w-full bg-coffee-medium hover:bg-coffee-dark"
            size="lg"
          >
            Get Recommendation
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}