import DashboardOverview from './DashboardOverview';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardOverview />
        <AnatomySection />
        <HealthStatusCards />
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </main>
  );
};

export default DashboardMainContent;