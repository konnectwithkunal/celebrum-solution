import React from "react";
import { useDrawer } from "./DrawerContext";
import { Link } from "react-router-dom"; // ✅ correct import

const MobileHeader: React.FC = () => {
  const { openDrawer } = useDrawer();
  return (
    <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md md:hidden">
 <Link to="/">
          <img
            src={"/img/neo.png"}
            alt="NewsMakerIndia Logo"
            className="h-14 w-auto transition-all duration-300"
          />
        </Link>
      <button onClick={openDrawer} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/10" aria-label="Open navigation">
        <span className="material-symbols-outlined text-3xl text-gray-800 dark:text-gray-200">menu</span>
      </button>
    </header>
  );
};

export default MobileHeader;