import React from "react";
import Link from  "next/link"

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout: React.FC<DashBoardLayoutProps> = (props) => {
  return (
    <div>
      <nav className="bg-white text-blue-700 py-4 px-5 flex justify-between items-center">
        <h3 className="text-xl">Logo</h3>
        <ul className="flex items-center gap-3">
          <li>Home</li>
          <li>Login</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="h-screen bg-white w-[15vw] text-emerald-800 text-xl">
          <ul className="pt-3 flex flex-col gap-5 px-2">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/dashboard/todos">Todos</Link></li>
            <li><Link href="/dashboard/users">Users</Link></li>
            <li><Link href="/dashboard/profile">Profile</Link></li>
          </ul>
        </div>
        <div className="p-4 max-h-screen overflow-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
