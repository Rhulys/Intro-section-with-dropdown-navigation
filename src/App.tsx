import { useState } from "react";
import { MenuDesktop } from "./menu-desktop";
import { MenuMobile }  from './menu-mobile'

function App() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  function handleOpenMenu() {
    setOpenMenuMobile(true);
  }
  function handleCloseMenu() {
    setOpenMenuMobile(false);
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="p-3 flex flex-row justify-between xl:justify-normal items-center pb-5">
        <h1 className="font-bold text-4xl">snap</h1>
        <MenuDesktop />
        {openMenuMobile ? (
          <MenuMobile handleCloseMenu={handleCloseMenu}/>
        ) : (<svg
          onClick={handleOpenMenu}
          className="cursor-pointer xl:hidden"
          width="32"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#151515" fill-rule="evenodd">
            <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
          </g>
        </svg>)}
      </div>

      <div className="flex flex-col xl:flex-row xl:w-[1400px] flex-1 mx-auto gap-8 xl:gap-28 items-center">
        <img src="./image-hero-mobile.png" alt="" className="xl:hidden"/>
          <div className="flex  justify-between flex-col gap-5 items-center xl:text-left text-center px-2 xl:w-1/2">
            <h1 className="font-bold text-[40px] xl:text-[80px]">Make remote work</h1>
            <p className="font-semibold text-xl">
              Get your team in sync, no matter your location. Streamline
              processses, create team rituals, and watch productivity soar.
            </p>
            <button className="bg-Almost-Black text-white hover:bg-Almost-White hover:text-Almost-Black hover:border border-Almost-Black font-bold rounded-xl py-4 px-6">
              Learn more
            </button>
            <div className="flex flex-row justify-between items-center px-2 py-8 w-full">
              <img src="./client-databiz.svg" alt="databiz" />
              <img src="./client-audiophile.svg" alt="audiophile" />
              <img src="./client-meet.svg" alt="meet" />
              <img src="./client-maker.svg" alt="maker" />
            </div>
          </div>
        <div className="bg-hero-desktop hidden xl:block bg-center w-1/2 h-svh max-h-[800px]"></div>
      </div>
    </div>
  );
}

export default App;
