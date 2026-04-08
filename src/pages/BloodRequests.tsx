import { motion } from 'motion/react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar, MapPin, Clock, AlertCircle, CheckCircle } from 'lucide-react';

type BloodRequest = {
  id: string;
  patientName: string;
  bloodType: string;
  units: number;
  hospital: string;
  city: string;
  urgency: 'Critical' | 'Urgent' | 'Moderate';
  requestDate: string;
  requiredBy: string;
  status: 'Open' | 'Fulfilled' | 'In Progress';
  contactPerson: string;
  contactPhone: string;
};

const mockRequests: BloodRequest[] = [
  {
    id: 'REQ001',
    patientName: 'Anonymous Patient',
    bloodType: 'O-',
    units: 3,
    hospital: 'St. Mary Hospital',
    city: 'New York',
    urgency: 'Critical',
    requestDate: '2024-11-18',
    requiredBy: '2024-11-19',
    status: 'Open',
    contactPerson: 'Dr. Johnson',
    contactPhone: '+1 234-567-1001',
  },
  {
    id: 'REQ002',
    patientName: 'Anonymous Patient',
    bloodType: 'A+',
    units: 2,
    hospital: 'Central Medical Center',
    city: 'Los Angeles',
    urgency: 'Urgent',
    requestDate: '2024-11-17',
    requiredBy: '2024-11-21',
    status: 'In Progress',
    contactPerson: 'Dr. Smith',
    contactPhone: '+1 234-567-1002',
  },
  {
    id: 'REQ003',
    patientName: 'Anonymous Patient',
    bloodType: 'B+',
    units: 1,
    hospital: 'City Hospital',
    city: 'Chicago',
    urgency: 'Moderate',
    requestDate: '2024-11-16',
    requiredBy: '2024-11-25',
    status: 'Open',
    contactPerson: 'Dr. Williams',
    contactPhone: '+1 234-567-1003',
  },
  {
    id: 'REQ004',
    patientName: 'Anonymous Patient',
    bloodType: 'AB+',
    units: 4,
    hospital: 'Memorial Hospital',
    city: 'Houston',
    urgency: 'Critical',
    requestDate: '2024-11-18',
    requiredBy: '2024-11-20',
    status: 'Open',
    contactPerson: 'Dr. Brown',
    contactPhone: '+1 234-567-1004',
  },
  {
    id: 'REQ005',
    patientName: 'Anonymous Patient',
    bloodType: 'O+',
    units: 2,
    hospital: 'General Hospital',
    city: 'Phoenix',
    urgency: 'Urgent',
    requestDate: '2024-11-15',
    requiredBy: '2024-11-22',
    status: 'Fulfilled',
    contactPerson: 'Dr. Davis',
    contactPhone: '+1 234-567-1005',
  },
  {
    id: 'REQ006',
    patientName: 'Anonymous Patient',
    bloodType: 'A-',
    units: 3,
    hospital: 'University Hospital',
    city: 'Philadelphia',
    urgency: 'Urgent',
    requestDate: '2024-11-17',
    requiredBy: '2024-11-23',
    status: 'In Progress',
    contactPerson: 'Dr. Martinez',
    contactPhone: '+1 234-567-1006',
  },
];

export default function BloodRequests() {
  const [selectedUrgency, setSelectedUrgency] = useState<string>('all');

  const filteredRequests = mockRequests.filter((request) => {
    if (selectedUrgency === 'all') return true;
    return request.urgency === selectedUrgency;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Urgent':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Fulfilled':
        return 'bg-green-100 text-green-800 border-green-200';
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
          <h1 className="text-red-600 mb-2">Blood Requests</h1>
          <p className="text-gray-600">
            Current blood requests from hospitals and medical facilities
          </p>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          <Button
            variant={selectedUrgency === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedUrgency('all')}
            className={selectedUrgency === 'all' ? 'bg-red-600' : ''}
          >
            All Requests
          </Button>
          <Button
            variant={selectedUrgency === 'Critical' ? 'default' : 'outline'}
            onClick={() => setSelectedUrgency('Critical')}
            className={selectedUrgency === 'Critical' ? 'bg-red-600' : ''}
          >
            Critical
          </Button>
          <Button
            variant={selectedUrgency === 'Urgent' ? 'default' : 'outline'}
            onClick={() => setSelectedUrgency('Urgent')}
            className={selectedUrgency === 'Urgent' ? 'bg-red-600' : ''}
          >
            Urgent
          </Button>
          <Button
            variant={selectedUrgency === 'Moderate' ? 'default' : 'outline'}
            onClick={() => setSelectedUrgency('Moderate')}
            className={selectedUrgency === 'Moderate' ? 'bg-red-600' : ''}
          >
            Moderate
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow border-red-100">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-gray-900">
                      {request.id}
                    </CardTitle>
                    <Badge className={getUrgencyColor(request.urgency)}>
                      {request.urgency}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getBloodTypeColor(request.bloodType)}>
                      {request.bloodType}
                    </Badge>
                    <span className="text-gray-600">{request.units} Units</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="size-4 text-gray-500 mt-0.5" />
                      <div>
                        <div className="text-gray-900">{request.hospital}</div>
                        <div className="text-gray-600">{request.city}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="size-4 text-gray-500" />
                      <span className="text-gray-600">
                        Requested: {request.requestDate}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="size-4 text-gray-500" />
                      <span className="text-gray-600">
                        Required by: {request.requiredBy}
                      </span>
                    </div>

                    <div className="border-t pt-3">
                      <div className="text-gray-600 mb-1">
                        Contact: {request.contactPerson}
                      </div>
                      <div className="text-gray-600">{request.contactPhone}</div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Badge className={getStatusColor(request.status)}>
                        {request.status === 'Open' && (
                          <AlertCircle className="size-3 mr-1" />
                        )}
                        {request.status === 'Fulfilled' && (
                          <CheckCircle className="size-3 mr-1" />
                        )}
                        {request.status}
                      </Badge>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Respond
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
