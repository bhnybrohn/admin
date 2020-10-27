import React from 'react'


export default function Sidebar() {
    return (
        <>


  <div className="flex flex-col flex-shrink-0 hidden w-full max-h-screen text-gray-800 bg-orange-700 md:w-64 md:block dark-mode:text-gray-200 dark-mode:bg-gray-800">
    <div className="flex flex-row items-center justify-between flex-shrink-0 px-8 py-4">
      <a href="#" className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Wine Admin</a>
      <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
          <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <nav  className="flex-grow px-2 pb-4 md:block md:pb-0 md:overflow-y-auto">
      <a className="block px-4 py-2 mt-4 text-sm font-semibold text-white rounded-lg b dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-orange-600 dark-mode:text-gray-200 hover:text-orange-600 focus:text-orange-600 hover:bg-orange-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Dashboard</a>
      <a className="block px-4 py-2 mt-4 text-sm font-semibold text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-orange-600 dark-mode:text-gray-200 hover:text-orange-600 focus:text-white hover:bg-orange-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">My Order</a>
      <a className="block px-4 py-2 mt-4 text-sm font-semibold text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-orange-600 dark-mode:text-gray-200 hover:text-orange-600 focus:text-white hover:bg-orange-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">My Products DropDwn</a>
      <a className="block px-4 py-2 mt-4 text-sm font-semibold text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-orange-600 dark-mode:text-gray-200 hover:text-orange-600 focus:text-white hover:bg-orange-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Users</a>
      <a className="block px-4 py-2 mt-4 text-sm font-semibold text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-orange-600 dark-mode:text-gray-200 hover:text-orange-600 focus:text-white hover:bg-orange-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Advertisment</a>
      <a className="block px-4 py-2 mt-4 text-sm font-semibold text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-orange-600 dark-mode:text-gray-200 hover:text-orange-600 focus:text-white hover:bg-orange-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Discount & Coupons</a>
  
    
    </nav>
  </div>
  

        </>
    )
}