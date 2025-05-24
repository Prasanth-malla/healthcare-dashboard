import { upcomingAppointments } from '../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">The Upcoming Schedule</h2>
      {upcomingAppointments.map((group) => (
        <div key={group.day} className="mb-4">
          <h3 className="text-sm font-medium text-gray-600">{group.day}</h3>
          <div className="space-y-2 mt-2">
            {group.appointments.map((appt) => (
              <SimpleAppointmentCard
                key={appt.title}
                title={appt.title}
                time={appt.time}
                icon={appt.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;