import { useState } from "react";

export function Company() {
    const [openOrCloseCompany, setOpenOrCloseCompany] = useState(false);

  function handleOpenOrCloseCompany() {
    if (openOrCloseCompany === false) {
      setOpenOrCloseCompany(true);
    } else {
      setOpenOrCloseCompany(false);
    }
  }
    return(
        <div className="flex flex-col relative">
            <li
              onClick={handleOpenOrCloseCompany}
              className="flex flex-row gap-3 items-center font-semibold text-xl xl:text-lg cursor-pointer text-Medium-Gray hover:text-Almost-Black"
            >
              Company
              {openOrCloseCompany ? (
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke="#686868"
                    stroke-width="1.5"
                    fill="none"
                    d="m1 5 4-4 4 4"
                  />
                </svg>
              ) : (
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke="#686868"
                    stroke-width="1.5"
                    fill="none"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              )}
            </li>
            {openOrCloseCompany && (
              <div className="flex flex-col gap-3 p-8 xl:bg-white xl:rounded-xl xl:shadow-lg xl:absolute xl:top-12 xl:left-0">
                <a href="" className="font-medium text-Medium-Gray text-lg "> 
                  History
                </a>
                <a href="" className="font-medium text-Medium-Gray text-lg">
                  Our Team
                </a>
                <a href="" className="font-medium text-Medium-Gray text-lg">
                  Blog
                </a>
              </div>
            )}
          </div>
    )
}