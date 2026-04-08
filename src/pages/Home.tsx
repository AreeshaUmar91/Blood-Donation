import { motion } from 'motion/react';
import { Droplet, Heart, Activity, Users, Award, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Heart,
      title: 'Save Lives',
      description: 'One donation can save up to 3 lives',
      color: 'text-red-600',
    },
    {
      icon: Activity,
      title: 'Quick Process',
      description: 'Donation takes only 10-15 minutes',
      color: 'text-pink-600',
    },
    {
      icon: Users,
      title: 'Join Community',
      description: 'Be part of 5000+ active donors',
      color: 'text-rose-600',
    },
    {
      icon: Award,
      title: 'Certified Safe',
      description: 'WHO approved safety standards',
      color: 'text-red-700',
    },
  ];

  const stats = [
    { value: '5,234', label: 'Total Donors', icon: Users },
    { value: '12,567', label: 'Lives Saved', icon: Heart },
    { value: '3,891', label: 'Donations This Year', icon: Droplet },
    { value: '24/7', label: 'Available', icon: Clock },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-red-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Donate Blood, Save Lives
              </motion.h1>
              <motion.p
                className="text-gray-600 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                MedTech Donor connects blood donors with those in need. Join our
                community of life-savers and make a difference today. Every drop
                counts, every donation matters.
              </motion.p>
              <motion.div
                className="flex gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => navigate('/donors')}
                >
                  Become a Donor
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/requests')}
                >
                  Request Blood
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative w-80 h-80 mx-auto"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="absolute inset-0 bg-red-200 rounded-full blur-3xl opacity-50" />
                <div className="relative bg-white rounded-full p-12 shadow-2xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Droplet className="w-full h-full text-red-600 fill-red-600" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Blood Drops */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Droplet className="size-6 text-red-300 fill-red-300" />
          </motion.div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-red-100 hover:border-red-300 transition-colors">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="inline-block mb-4"
                      >
                        <Icon className="size-12 text-red-600" />
                      </motion.div>
                      <div className="text-red-600 mb-2">{stat.value}</div>
                      <p className="text-gray-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 mb-4">Why Donate Blood?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Blood donation is a simple act that can have a profound impact on
              someone's life. Here's why you should join us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full border-red-100 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className={`inline-block p-4 bg-red-50 rounded-full mb-4 ${feature.color}`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="size-8" />
                      </motion.div>
                      <div className="mb-2">{feature.title}</div>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Ready to Make a Difference?</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of donors who are making a real impact in their
              communities. Your donation could be the difference between life and
              death.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate('/donors')}
            >
              Register as a Donor Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
