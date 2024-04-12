import Image from "next/image";
import { CartIcon } from "../icons/cart";
import { Sidebar } from "../sidebar/sidebar";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  function toggleSidebarVisibility() {
    setIsSidebarVisible(!isSidebarVisible);
  }
  return (
    <>
      <Sidebar
        isVisible={isSidebarVisible}
        toggleVisibility={toggleSidebarVisibility}
      />
      <nav className="flex h-16 mt-[80px] w-screen items-center justify-between">
        <div className=" ml-[150px] mr-[150px] flex items-center w-screen justify-between">
          <div className="flex items-center space-x-[150px]">
            <Image width={100} height={10} src="/marvel-logo.png" alt="logo" />
            <div className="space-x-8 tex-lg">
              <a
                href="#"
                className="bg-gray-900 text-white rounded-md px-3 py-2  font-medium"
                aria-current="page"
              >
                Comics
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  font-medium"
              >
                Calendar
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  font-medium"
              >
                Reports
              </a>
            </div>
          </div>
          <div className="cursor-pointer" onClick={toggleSidebarVisibility}>
            <CartIcon height={30} width={30} />
          </div>
        </div>
      </nav>
    </>
  );
}
