import { Company } from "./components/company";
import { Features } from "./components/features";

export function MenuDesktop() {
  return (
    <div className="xl:flex flex-row justify-between w-full hidden items-center">
      <nav>
        <ul className="flex flex-row gap-5 justify-between items-center pl-20">
            <Features />
            <Company />
          <li className="items-center font-semibold text-md cursor-pointer text-Medium-Gray hover:text-Almost-Black">
            Careers
          </li>
          <li className="items-center font-semibold text-md cursor-pointer text-Medium-Gray hover:text-Almost-Black">
            About
          </li>
        </ul>
      </nav>
      <div className="flex flex-row gap-10 items-center">
            <a href="" className="font-semibold text-Medium-Gray hover:text-Almost-Black">
              Login
            </a>
            <button className="border border-Medium-Gray hover:border-Almost-Black p-3 rounded-xl w-4/5 font-semibold text-Medium-Gray hover:text-Almost-Black">
              Register
            </button>
          </div>
    </div>
  );
}
