import { healthData } from '../data/healthData';

const AnatomySection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Anatomy Overview</h2>
      <div className="relative flex justify-center">
        <img
          src="/assets/anatomy.svg" // Updated path
          alt="Anatomical Illustration"
          className="h-64 w-auto"
        />
        {healthData.map((item, index) => (
          <div
            key={item.part}
            className={`absolute text-sm font-medium ${item.color === 'green' ? 'text-green-600' : 'text-red-600'}`}
            style={{
              top: `${20 + index * 20}%`,
              left: index % 2 === 0 ? '10%' : '70%',
            }}
          >
            {item.part}: {item.status}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;