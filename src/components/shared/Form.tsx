import { MdClose, MdEdit, MdOutlineAddPhotoAlternate } from "react-icons/md";
import DropDown from "./DropDown";

export default function Form() {
  return (
    <section className="h-screen w-full py-8 bg-stone-950">
      <div className="size-full flex items-center justify-center">
        <form
          action=""
          className="w-full mx-2.5 lg:mx-0 max-w-sm bg-white h-[80vh] rounded-3xl overflow-hidden"
        >
          <div className=" relative p-5 size-full">
            <div className="h-[40%] pb-5">
              <FormHeader />
              <FormHeading />
            </div>

            <div className="mt-5 w-full  relative h-[50%] overflow-scroll overflow-x-hidden p-2.5">
              <div className="size-full">
                <div className="flex flex-col items-center justify-center gap-10">
                  <div className="p-10 border-red-200 border-2 rounded-3xl">
                    <MdOutlineAddPhotoAlternate className="text-3xl text-red-700" />
                  </div>
                  <div className="mt-5 flex flex-col gap-10 lg:flex-row w-full lg:gap-0 lg:justify-between lg:items-center">
                    <Label_Input text="link" />
                    <Label_Input text="product name" />
                  </div>
                  <div className="flex flex-col gap-10  lg:flex-row w-full lg:gap-0 lg:justify-between lg:items-center">
                    <Label_Input text="fees" />
                    <Label_Input text="product details" />
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <div className="border-2 border-red-950 rounded-full p-1.5 flex items-center justify-center gap-2.5">
                      <DropDown text="USD($)" />
                      <input
                        type="text"
                        placeholder="0"
                        className="outline-none bg-transparent w-16 lg:w-20"
                      />
                    </div>
                    <div className="border-2 border-red-950 rounded-full p-1.5">
                      <DropDown text="Category" />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <label
                        htmlFor="note"
                        className="text-lg font-medium capitalize text-red-950"
                      >
                        Note
                      </label>
                      <textarea
                        name="note"
                        id="note"
                        className="w-full h-40 border-red-950 border-2 outline-none rounded-xl p-2.5"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <button className="self-start capitalize font-medium bg-red-900 text-red-50 px-5 py-1.5 rounded-full">
                      add gift
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Label_Input({ text }: { text: string }) {
  return (
    <div className="flex flex-col ">
      <label
        htmlFor={text}
        className="text-lg font-medium capitalize text-red-950"
      >
        {text}
      </label>
      <input
        type="text"
        name={text}
        id={text}
        className=" border-red-950 border-b-2 bg-transparen w-10/12 lg:w-36 outline-none"
      />
    </div>
  );
}

function FormHeading() {
  return (
    <div className="flex items-center justify-start gap-5 mt-2.5">
      <div className=" relative z-20">
        <MdEdit className=" relative z-20 bg-red-300 p-1.5 rounded-full text-4xl text-red-700" />
        <span className=" absolute inset-0 scale-[1.3] size-full bg-red-200 z-10 rounded-full" />
      </div>
      <span className="text-2xl font-semibold text-red-950">Gift Details</span>
    </div>
  );
}

function FormHeader() {
  return (
    <div className="w-full">
      <figure>
        <img src="logo.avif" alt="" />
      </figure>
      <MdClose className=" absolute top-5 right-5 text-3xl" />
    </div>
  );
}
