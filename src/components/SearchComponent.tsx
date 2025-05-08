import type { ReactElement } from "react";
import { IoSearchCircleOutline } from "react-icons/io5";

export default function SearchComponent(): ReactElement {
  return (
    <div className="h-10 w-[90%] md:w-[60%] rounded-xl bg-[#D4ECF2]/50 justify-self-start">
      <form className="h-full w-full flex flex-row-reverse items-center justify-evenly text-white/50">
        <button className="w-8 hover:cursor-pointer hover:text-cyan-700">
          <IoSearchCircleOutline className="w-full h-full" />
        </button>
        <input
          className="border-b-1 border-white/20 w-5/7 placeholder-shown:text-neutral-200 focus:bg-cyan-700/20 focus:outline-0 "
          type="text"
          name="search"
          placeholder="Pesquisar local..."
        />
      </form>
    </div>
  );
}
