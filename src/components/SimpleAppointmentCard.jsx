import * as LucideIcons from 'lucide-react';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  const Icon = LucideIcons[icon];
  return (
    <div className="bg-gray-50 p-3 rounded-md flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Icon className="h-5 w-5 text-blue-600" />
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;