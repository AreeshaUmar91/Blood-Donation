import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, TrendingDown, Users, Droplet, Calendar, Award } from 'lucide-react';

const monthlyDonations = [
  { month: 'Jan', donations: 320 },
  { month: 'Feb', donations: 280 },
  { month: 'Mar', donations: 350 },
  { month: 'Apr', donations: 410 },
  { month: 'May', donations: 380 },
  { month: 'Jun', donations: 450 },
  { month: 'Jul', donations: 490 },
  { month: 'Aug', donations: 470 },
  { month: 'Sep', donations: 520 },
  { month: 'Oct', donations: 540 },
  { month: 'Nov', donations: 580 },
];

const bloodTypeDistribution = [
  { name: 'O+', value: 37, color: '#ef4444' },
  { name: 'A+', value: 28, color: '#3b82f6' },
  { name: 'B+', value: 15, color: '#a855f7' },
  { name: 'AB+', value: 5, color: '#ec4899' },
  { name: 'O-', value: 7, color: '#dc2626' },
  { name: 'A-', value: 4, color: '#2563eb' },
  { name: 'B-', value: 3, color: '#9333ea' },
  { name: 'AB-', value: 1, color: '#db2777' },
];

const cityDonations = [
  { city: 'New York', donors: 1240 },
  { city: 'Los Angeles', donors: 980 },
  { city: 'Chicago', donors: 850 },
  { city: 'Houston', donors: 720 },
  { city: 'Phoenix', donors: 640 },
  { city: 'Philadelphia', donors: 580 },
];

export default function Statistics() {
  const stats = [
    {
      title: 'Total Donations',
      value: '5,234',
      change: '+12.5%',
      trend: 'up',
      icon: Droplet,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Active Donors',
      value: '3,891',
      change: '+8.3%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'This Month',
      value: '580',
      change: '+7.2%',
      trend: 'up',
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Lives Saved',
      value: '12,567',
      change: '+15.1%',
      trend: 'up',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-red-600 mb-2">Statistics & Analytics</h1>
          <p className="text-gray-600">
            Comprehensive overview of blood donation metrics and trends
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                        <Icon className={`size-6 ${stat.color}`} />
                      </div>
                      <div
                        className={`flex items-center gap-1 ${
                          stat.trend === 'up'
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {stat.trend === 'up' ? (
                          <TrendingUp className="size-4" />
                        ) : (
                          <TrendingDown className="size-4" />
                        )}
                        <span>{stat.change}</span>
                      </div>
                    </div>
                    <div className="text-gray-600 mb-1">{stat.title}</div>
                    <div className="text-gray-900">{stat.value}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Monthly Donations Trend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Monthly Donations Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyDonations}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="donations"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={{ fill: '#ef4444', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Blood Type Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Blood Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={bloodTypeDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {bloodTypeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* City-wise Donations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Donors by City</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={cityDonations}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="donors" fill="#ef4444" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-100">
              <CardContent className="p-6">
                <div className="text-red-600 mb-2">Average Donations</div>
                <div className="text-gray-900 mb-1">12.8 per donor</div>
                <p className="text-gray-600">
                  Our donors are highly committed to saving lives
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
              <CardContent className="p-6">
                <div className="text-blue-600 mb-2">Response Time</div>
                <div className="text-gray-900 mb-1">2.4 hours</div>
                <p className="text-gray-600">
                  Average time to fulfill urgent requests
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
              <CardContent className="p-6">
                <div className="text-green-600 mb-2">Success Rate</div>
                <div className="text-gray-900 mb-1">96.5%</div>
                <p className="text-gray-600">
                  Of all requests successfully fulfilled
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
