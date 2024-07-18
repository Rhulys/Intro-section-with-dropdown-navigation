import { useState } from "react";
import { Company } from "./components/company";
import { Features } from "./components/features";

interface MenuMobileProps {
  handleCloseMenu: () => void;
}

export function MenuMobile({
  handleCloseMenu,
}: MenuMobileProps) {
  const [openOrCloseFeatures, setOpenOrCloseFeatures] = useState(false);
  const [openOrCloseCompany, setOpenOrCloseCompany] = useState(false);

  function handleOpenFeatures() {
    if (openOrCloseFeatures === false) {
      setOpenOrCloseFeatures(true);
    } else {
      setOpenOrCloseFeatures(false);
    }
  }

  function handleOpenOrCloseCompany() {
    if (openOrCloseCompany === false) {
      setOpenOrCloseCompany(true);
    } else {
      setOpenOrCloseCompany(false);
    }
  }
  
  return (
    <div>
      <svg
        onClick={handleCloseMenu}
        className="cursor-pointer absolute top-5 right-5 z-20"
        width="26"
        height="26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#151515" fill-rule="evenodd">
          <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
          <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
        </g>
      </svg>
      <div className="absolute top-0 left-0 z-10 min-h-svh min-w-full flex flex-row">
        <div className="bg-Almost-Black w-1/3 opacity-70"></div>
        <div className="bg-Almost-White w-2/3 flex flex-col gap-5 p-4">
          <nav>
            <ul className="p-5 flex flex-col gap-4">
              <Features />
              <Company />
              <li className="items-center font-semibold text-xl cursor-pointer">
                Careers
              </li>
              <li className="items-center font-semibold text-xl cursor-pointer">
                About
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-3 items-center">
            <a href="" className="font-semibold">
              Login
            </a>
            <button className="border border-Almost-Black p-3 rounded-xl w-4/5 font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
