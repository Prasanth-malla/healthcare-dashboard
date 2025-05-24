import { healthStatusCards } from '../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="space-y-4">
      {healthStatusCards.map((card) => (
        <div
          key={card.part}
          className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center"
        >
          <div>
            <h3 className="text-sm font-semibold text-gray-800">{card.part}</h3>
            <p className="text-xs text-gray-500">{card.date}</p>
          </div>
          <span
            className={`text-sm font-medium ${card.color === 'green' ? 'text-green-600' : 'text-red-600'}`}
          >
            {card.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;