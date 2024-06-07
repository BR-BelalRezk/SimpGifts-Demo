import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ProfileContainer() {
  return (
    <section className="size-full">
      <Profile />
    </section>
  );
}

function Profile() {
  return (
    <div className="mt-10 border-t-2 py-10 border-stone-500">
      <div className="bg-[url(/bg.jpg)] bg-cover bg-no-repeat w-full h-fit relative">
        <div className="z-10 absolute inset-0 size-full bg-black/50 backdrop-blur-[1px]" />
        <div className="size-full py-10 px-3 relative z-50 lg:px-10">
          <div className="flex flex-col items-start gap-5">
            <Div1 />
            <Div2 />
            <Div3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="text-stone-50">
      <ul className="flex items-center justify-center gap-5">
        <li className="flex items-center justify-center gap-0.5 flex-col">
          <span className=" text-xl font-semibold">40</span>
          <p className=" text-stone-300">Gifts</p>
        </li>
        <li className="flex items-center justify-center gap-0.5 flex-col">
          <span className="text-xl font-semibold">20</span>
          <p className="text-stone-300">Bought Gifts</p>
        </li>
      </ul>
    </div>
  );
}

function Div1() {
  return (
    <div className="flex items-center justify-start text-stone-50 gap-5">
      <figure>
        <img
          src="/profile.jpg"
          alt=""
          className="size-20 object-cover rounded-full"
        />
      </figure>
      <div>
        <h2 className="text-2xl font-medium lg:text-3xl">Username</h2>
        <h3 className="text-sm lg:text-base font-light text-stone-300 mt-2.5">
          Name
        </h3>
        <p className="text-sm lg:text-base font-light text-stone-300 mt-0.5">
          BIO
        </p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="text-stone-300 text-xl lg:text-3xl ">
      <ul className="flex  items-center justify-center gap-5">
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
  );
}
