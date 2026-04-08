import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Search, Filter, Download, Phone, Mail } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

type Donor = {
  id: string;
  name: string;
  bloodType: string;
  age: number;
  phone: string;
  email: string;
  lastDonation: string;
  totalDonations: number;
  status: 'Available' | 'Unavailable' | 'Pending';
  city: string;
};

const mockDonors: Donor[] = [
  {
    id: 'D001',
    name: 'John Anderson',
    bloodType: 'A+',
    age: 32,
    phone: '+1 234-567-8901',
    email: 'john.a@email.com',
    lastDonation: '2024-10-15',
    totalDonations: 12,
    status: 'Available',
    city: 'New York',
  },
  {
    id: 'D002',
    name: 'Sarah Mitchell',
    bloodType: 'O-',
    age: 28,
    phone: '+1 234-567-8902',
    email: 'sarah.m@email.com',
    lastDonation: '2024-11-01',
    totalDonations: 8,
    status: 'Unavailable',
    city: 'Los Angeles',
  },
  {
    id: 'D003',
    name: 'Michael Chen',
    bloodType: 'B+',
    age: 35,
    phone: '+1 234-567-8903',
    email: 'michael.c@email.com',
    lastDonation: '2024-09-20',
    totalDonations: 15,
    status: 'Available',
    city: 'Chicago',
  },
  {
    id: 'D004',
    name: 'Emily Rodriguez',
    bloodType: 'AB+',
    age: 29,
    phone: '+1 234-567-8904',
    email: 'emily.r@email.com',
    lastDonation: '2024-10-28',
    totalDonations: 6,
    status: 'Available',
    city: 'Houston',
  },
  {
    id: 'D005',
    name: 'David Thompson',
    bloodType: 'A-',
    age: 41,
    phone: '+1 234-567-8905',
    email: 'david.t@email.com',
    lastDonation: '2024-08-12',
    totalDonations: 22,
    status: 'Available',
    city: 'Phoenix',
  },
  {
    id: 'D006',
    name: 'Jessica Brown',
    bloodType: 'O+',
    age: 26,
    phone: '+1 234-567-8906',
    email: 'jessica.b@email.com',
    lastDonation: '2024-11-10',
    totalDonations: 4,
    status: 'Pending',
    city: 'Philadelphia',
  },
  {
    id: 'D007',
    name: 'Robert Williams',
    bloodType: 'B-',
    age: 38,
    phone: '+1 234-567-8907',
    email: 'robert.w@email.com',
    lastDonation: '2024-09-05',
    totalDonations: 18,
    status: 'Available',
    city: 'San Antonio',
  },
  {
    id: 'D008',
    name: 'Lisa Davis',
    bloodType: 'AB-',
    age: 33,
    phone: '+1 234-567-8908',
    email: 'lisa.d@email.com',
    lastDonation: '2024-10-22',
    totalDonations: 9,
    status: 'Available',
    city: 'San Diego',
  },
  {
    id: 'D009',
    name: 'James Wilson',
    bloodType: 'A+',
    age: 45,
    phone: '+1 234-567-8909',
    email: 'james.w@email.com',
    lastDonation: '2024-07-18',
    totalDonations: 28,
    status: 'Available',
    city: 'Dallas',
  },
  {
    id: 'D010',
    name: 'Maria Garcia',
    bloodType: 'O+',
    age: 31,
    phone: '+1 234-567-8910',
    email: 'maria.g@email.com',
    lastDonation: '2024-11-05',
    totalDonations: 11,
    status: 'Unavailable',
    city: 'San Jose',
  },
];

export default function Donors() {
  const [searchQuery, setSearchQuery] = useState('');
  const [bloodTypeFilter, setBloodTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredDonors = mockDonors.filter((donor) => {
    const matchesSearch =
      donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donor.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donor.city.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesBloodType =
      bloodTypeFilter === 'all' || donor.bloodType === bloodTypeFilter;

    const matchesStatus =
      statusFilter === 'all' || donor.status === statusFilter;

    return matchesSearch && matchesBloodType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Unavailable':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getBloodTypeColor = (bloodType: string) => {
    const colors: { [key: string]: string } = {
      'A+': 'bg-blue-100 text-blue-800 border-blue-200',
      'A-': 'bg-blue-100 text-blue-800 border-blue-200',
      'B+': 'bg-purple-100 text-purple-800 border-purple-200',
      'B-': 'bg-purple-100 text-purple-800 border-purple-200',
      'AB+': 'bg-pink-100 text-pink-800 border-pink-200',
      'AB-': 'bg-pink-100 text-pink-800 border-pink-200',
      'O+': 'bg-red-100 text-red-800 border-red-200',
      'O-': 'bg-red-100 text-red-800 border-red-200',
    };
    return colors[bloodType] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-red-600 mb-2">Donor Registry</h1>
          <p className="text-gray-600">
            Manage and view all registered blood donors
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="size-5" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
                <Input
                  placeholder="Search by name, ID, or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={bloodTypeFilter} onValueChange={setBloodTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Blood Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Blood Types</SelectItem>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="Unavailable">Unavailable</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600">
                Showing {filteredDonors.length} of {mockDonors.length} donors
              </p>
              <Button variant="outline" size="sm">
                <Download className="size-4 mr-2" />
                Export Data
              </Button>
            </div>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-red-50">
                      <TableHead>Donor ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Blood Type</TableHead>
                      <TableHead>Age</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Last Donation</TableHead>
                      <TableHead>Total Donations</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDonors.map((donor, index) => (
                      <motion.tr
                        key={donor.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-red-50/50 transition-colors"
                      >
                        <TableCell>{donor.id}</TableCell>
                        <TableCell>{donor.name}</TableCell>
                        <TableCell>
                          <Badge className={getBloodTypeColor(donor.bloodType)}>
                            {donor.bloodType}
                          </Badge>
                        </TableCell>
                        <TableCell>{donor.age}</TableCell>
                        <TableCell>{donor.city}</TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <a
                              href={`tel:${donor.phone}`}
                              className="flex items-center gap-1 text-blue-600 hover:underline"
                            >
                              <Phone className="size-3" />
                              <span>{donor.phone}</span>
                            </a>
                            <a
                              href={`mailto:${donor.email}`}
                              className="flex items-center gap-1 text-blue-600 hover:underline"
                            >
                              <Mail className="size-3" />
                              <span>{donor.email}</span>
                            </a>
                          </div>
                        </TableCell>
                        <TableCell>{donor.lastDonation}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{donor.totalDonations}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(donor.status)}>
                            {donor.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
