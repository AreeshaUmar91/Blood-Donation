import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Droplet, Users, ListChecks, BarChart3, Info } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Droplet },
    { path: '/donors', label: 'Donors', icon: Users },
    { path: '/requests', label: 'Requests', icon: ListChecks },
    { path: '/statistics', label: 'Statistics', icon: BarChart3 },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Droplet className="size-8 text-red-600 fill-red-600" />
            </motion.div>
            <span className="text-red-600">MedTech Donor</span>
          </Link>

          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'text-gray-700 hover:bg-red-50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="size-4" />
                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
