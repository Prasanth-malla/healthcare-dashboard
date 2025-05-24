
import { navLinks } from '../data/navigation';
import * as LucideIcons from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col space-y-6">
      <h2 className="text-sm font-semibold text-gray-500">General</h2>
      <nav className="space-y-2">
        {navLinks.map((link) => {
          const Icon = LucideIcons[link.icon];
          return (
            <div
              key={link.name}
              className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm">{link.name}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;