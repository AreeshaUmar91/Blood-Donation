import { motion } from 'motion/react';
import { Card, CardContent } from '../components/ui/card';
import { Heart, Target, Eye, Award, Users, Globe } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description:
        'We believe in the power of human kindness and the impact of giving',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Target,
      title: 'Excellence',
      description:
        'Committed to maintaining the highest standards in blood donation',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Users,
      title: 'Community',
      description:
        'Building a strong network of donors and recipients working together',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description:
        'Making blood donation accessible and convenient for everyone',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  const milestones = [
    { year: '2018', event: 'MedTech Donor founded', donors: '500' },
    { year: '2019', event: 'Reached 1,000 donors', donors: '1,000' },
    { year: '2021', event: 'Expanded to 10 cities', donors: '2,500' },
    { year: '2023', event: 'Saved 10,000 lives', donors: '4,000' },
    { year: '2024', event: 'Over 5,000 active donors', donors: '5,234' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director',
      description: '15 years of experience in blood banking',
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager',
      description: 'Expert in healthcare logistics',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Outreach',
      description: 'Passionate about donor engagement',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4">About MedTech Donor</h1>
            <p className="max-w-3xl mx-auto opacity-90">
              We are dedicated to connecting blood donors with those in need,
              ensuring that no life is lost due to blood shortage. Our mission is
              to create a sustainable and efficient blood donation ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="size-8 text-white fill-white" />
          </motion.div>
        ))}
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-red-100 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-red-50 rounded-full">
                      <Target className="size-8 text-red-600" />
                    </div>
                    <h2 className="text-red-600">Our Mission</h2>
                  </div>
                  <p className="text-gray-600">
                    To create a reliable, efficient, and compassionate blood
                    donation network that ensures every patient has access to safe
                    blood when they need it most. We strive to make blood donation
                    a simple, rewarding experience while maintaining the highest
                    medical standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-blue-100 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-blue-50 rounded-full">
                      <Eye className="size-8 text-blue-600" />
                    </div>
                    <h2 className="text-blue-600">Our Vision</h2>
                  </div>
                  <p className="text-gray-600">
                    A world where blood shortage is eliminated, and every person
                    in need receives timely access to safe blood. We envision a
                    future where blood donation is a regular part of community
                    life, supported by technology and driven by compassion.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at MedTech Donor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`inline-block p-4 ${value.bgColor} rounded-full mb-4`}
                      >
                        <Icon className={`size-8 ${value.color}`} />
                      </div>
                      <div className="mb-2">{value.title}</div>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a thriving community
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex gap-6 mb-8 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {milestone.year}
                  </motion.div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-red-200 mt-2" />
                  )}
                </div>
                <Card className="flex-1 border-red-100">
                  <CardContent className="p-6">
                    <div className="mb-2">{milestone.event}</div>
                    <p className="text-gray-600">
                      {milestone.donors} registered donors
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to saving lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Award className="size-12 text-red-600" />
                    </div>
                    <div className="mb-1">{member.name}</div>
                    <div className="text-red-600 mb-2">{member.role}</div>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
