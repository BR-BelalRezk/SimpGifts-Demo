import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function App() {
  return (
    <section className="w-full text-white bg-[url(/bg.jpg)] h-80 relative z-50 bg-cover bg-no-repeat">
      <div className=" absolute z-10 bg-black/50 size-full backdrop-blur-[1px]" />
      <div className="flex items-center justify-evenly size-full flex-col relative z-20 px-2.5 py-5 lg:px-5">
        <div className="flex size-full items-center justify-between lg:justify-start lg:gap-10">
          <figure className="self-center">
            <img
              src="/profile.jpg"
              alt=""
              className="size-28 lg:size-40 object-cover rounded-full border-2 border-white"
            />
          </figure>
          <div className="flex items-start justify-center flex-col">
            <div>
              <h2 className="text-5xl">Joshua</h2>
              <h3 className="text-xl mt-3">joshua</h3>
              <p className="text-sm mt-1">Hello! I am Joshua from simp.gifts</p>
            </div>
            <ul className="flex items-start justify-center mt-3 text-3xl gap-5">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
        <ul className="flex items-center justify-center gap-6 text-lg lg:gap-10 lg:text-xl">
          <li>Profile</li>
          <li>Personal Details</li>
          <li>Links</li>
          <li>Balance</li>
        </ul>
      </div>
    </section>
  );
}
