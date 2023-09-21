import React from "react";
function Nav() {
    return (
      <div className="App">
        <nav class="bg-zinc-400">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
        
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dream Team</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">View notifications</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
        <div class="relative ml-3">
          <div>
            <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded" src="data:image/jpeg;base64,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" alt=""/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
      </div>
    );
  }
  
  export default Nav;
  