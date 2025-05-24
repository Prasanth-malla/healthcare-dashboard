import { calendarAppointments, appointmentCards } from '../data/appointments';

const CalendarView = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">October 2021</h2>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {weekdays.map((day) => (
          <div key={day} className="text-gray-500 font-medium">{day}</div>
        ))}
        {days.map((day) => {
          const date = `2021-10-${day.toString().padStart(2, '0')}`;
          const appointments = calendarAppointments.filter((appt) => appt.date === date);
          return (
            <div
              key={day}
              className="p-2 bg-gray-50 rounded-md relative"
            >
              {day}
              {appointments.map((appt, index) => (
                <div
                  key={index}
                  className="text-xs text-blue-600 mt-1"
                >
                  {appt.time}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="mt-4 space-y-2">
        {appointmentCards.map((card) => (
          <div
            key={card.title}
            className="bg-gray-50 p-3 rounded-md text-sm"
          >
            <p className="font-medium">{card.title}</p>
            <p className="text-gray-500">{card.time} on {card.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;