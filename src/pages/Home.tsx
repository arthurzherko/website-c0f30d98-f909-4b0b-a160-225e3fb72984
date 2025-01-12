import { RecommendationHero } from '@/components/RecommendationHero';
import { CoffeeCard } from '@/components/CoffeeCard';
import { CoffeeSteam } from '@/components/CoffeeSteam';
import { motion } from 'framer-motion';

const featuredCoffees = [
  {
    name: 'Ethiopian Yirgacheffe',
    description: 'Floral and bright with complex citrus notes',
    tags: ['Light Roast', 'Floral', 'Citrus'],
    strength: 3,
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80'
  },
  {
    name: 'Colombian Supremo',
    description: 'Rich caramel sweetness with a nutty finish',
    tags: ['Medium Roast', 'Caramel', 'Nutty'],
    strength: 4,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80'
  },
  {
    name: 'Sumatra Mandheling',
    description: 'Full-bodied with earthy and spicy notes',
    tags: ['Dark Roast', 'Earthy', 'Spicy'],
    strength: 5,
    imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
          >
            <CoffeeSteam />
            <h1 className="text-3xl font-bold text-coffee-dark">CoffeeMatch AI</h1>
          </motion.div>
        </div>

        <RecommendationHero />

        <section className="mt-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 text-2xl font-semibold text-primary"
          >
            Featured Recommendations
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCoffees.map((coffee, index) => (
              <motion.div
                key={coffee.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <CoffeeCard {...coffee} />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;