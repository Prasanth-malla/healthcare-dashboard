

import { Search, Bell, User, Plus } from 'lucide-react';



const Header = () => {

    return (

<header className="bg-white shadow-sm p-4 flex justify-between items-center">

      <div className="text-xl font-bold text-blue-600">Healthcare.</div>

      <div className="flex items-center space-x-4">

        <div className="relative">

          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none"
            disabled
          />
        </div>
        <Bell className="h-6 w-6 text-gray-600" />
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/avatar.png"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-sm font-medium">John Doe</span>
        </div>
        <button className="bg-blue-600 text-white p-2 rounded-full">
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;