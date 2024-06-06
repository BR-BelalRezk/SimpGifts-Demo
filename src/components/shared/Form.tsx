import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";
import { MdEdit, MdOutlineAddPhotoAlternate } from "react-icons/md";
import DropDown from "./DropDown";

export default function Form() {
  const [step, setStep] = useState(1);
  return (
    <section className=" min-h-screen w-full p-8 overflow-hidden bg-stone-700 flex items-center justify-center">
      <FormBox role="outerBox">
        <FormBox role="innerBox">
          <FormWrapper step={step} />
          <Carousel step={step} setStep={setStep} />
        </FormBox>
      </FormBox>
    </section>
  );
}

function FormBox({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string;
}) {
  return (
    <div
      role={role}
      className={
        role === "outerBox"
          ? "max-w-4xl h-[500px] bg-white w-full rounded-3xl relative"
          : "inner-box absolute size-[calc(100%-5rem)]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      }
    >
      {children}
    </div>
  );
}

function FormWrapper({ step }: { step: number }) {
  return (
    <div className={`forms-wrap absolute h-full w-[45%] top-0 left-0 lg:pr-5 `}>
      <form
        className="flex flex-col size-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <figure>
          <img src="/logo.avif" alt="" />
        </figure>
        <div className="flex items-center justify-start gap-5">
          <MdEdit className="text-3xl text-[#b42318]" />
          <h2 className=" font-semibold text-xl">Gift Details</h2>
        </div>
        <AnimatePresence mode="wait">{step === 1 && <Form1 />}</AnimatePresence>
        <AnimatePresence mode="wait">{step === 2 && <Form2 />}</AnimatePresence>
        <AnimatePresence mode="wait">{step === 3 && <Form3 />}</AnimatePresence>
        <AnimatePresence mode="wait">
          {step === 4 && (
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.5, ease: "easeInOut", duration: 0.3 },
              }}
              exit={{ opacity: 0, scale: 0 }}
              className=" flex items-center justify-center size-full text-3xl text-stone-500"
            >
              You are Ready!
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

function Carousel({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="carousel absolute h-full w-[55%] top-0 left-[45%]  bg-[#fee4e2] rounded-xl flex p-5 flex-col justify-between">
      <Steps step={step} />
      <ControlButtons step={step} setStep={setStep} />
    </div>
  );
}

function ControlButtons({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex w-full flex-col gap-5 self-end">
      <div className="w-full">
        <button className="bg-[#b42318] w-full px-5 py-2 rounded-full text-white font-medium disabled:opacity-50">
          Add Gift
        </button>
      </div>
      <div className="  flex items-center justify-between w-full">
        <button
          disabled={step === 1 && true}
          onClick={() => setStep((prevState) => prevState - 1)}
          className="bg-[#b42318] px-5 py-1 rounded-full text-white font-medium disabled:opacity-50"
        >
          Back
        </button>
        <button
          disabled={step === 4 && true}
          onClick={() => setStep((prevState) => prevState + 1)}
          className="bg-[#b42318] px-5 py-1 rounded-full text-white font-medium disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function Steps({ step }: { step: number }) {
  return (
    <ul className="flex items-center justify-between w-full self-start">
      <Step step={1} currentStep={step} />
      <Step step={2} currentStep={step} />
      <Step step={3} currentStep={step} />
    </ul>
  );
}

function Step({ step, currentStep }: { step: number; currentStep: number }) {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";
  return (
    <li className=" relative">
      <motion.div
        animate={status}
        variants={{
          active: {
            scale: 1.15,
          },
          complete: {
            scale: 1.3,
          },
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 rounded-full bg-red-200 scale-125"
      />
      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "#fff",
            borderColor: "#e2e8f0",
            color: "#44403c",
          },
          active: {
            backgroundColor: "#fff",
            borderColor: "#ef4444",
            color: '"#ef4444"',
          },
          complete: {
            backgroundColor: "#ef4444",
            borderColor: "#ef4444",
            color: "#ef4444",
          },
        }}
        animate={status}
        transition={{ duration: 0.5 }}
        className={`flex size-10 items-center justify-center rounded-full border-2 font-semibold relative`}
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? <CheckIcon /> : <span>{step}</span>}
        </div>
      </motion.div>
    </li>
  );
}

function CheckIcon() {
  return (
    <svg
      className="size-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          type: "tween",
          ease: "easeOut",
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function Label_Input({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-start justify-start">
      <label htmlFor={text} className=" capitalize text-lg font-medium">
        {text}
      </label>
      <input
        type="text"
        name={text}
        id={text}
        className="w-40 outline-none border-b-2 border-stone-700"
      />
    </div>
  );
}

function FormExitAnimationWrapper({
  children,
  layoutId,
}: {
  layoutId: string;
  children: React.ReactNode;
}) {
  const variants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, ease: "easeInOut", duration: 0.3 },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial={"initial"}
      animate={"animate"}
      exit={"initial"}
      layoutId={layoutId}
      className="mt-5 flex items-center justify-center gap-10 flex-col"
    >
      {children}
    </motion.div>
  );
}

function Form1() {
  return (
    <FormExitAnimationWrapper layoutId="form1">
      <div className="p-10 rounded-xl w-fit self-center border border-stone-500">
        <MdOutlineAddPhotoAlternate className="text-3xl" />
      </div>
      <div className="flex items-center justify-between w-full">
        <Label_Input text="link" />
        <Label_Input text="product name" />
      </div>
    </FormExitAnimationWrapper>
  );
}

function Form2() {
  return (
    <FormExitAnimationWrapper layoutId="form2">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center border-2 border-stone-700 rounded-xl p-1.5">
          <DropDown text="USD($)" />
          <input type="text" className="w-24 outline-none" />
        </div>
        <div className=" border-2 rounded-xl border-stone-700 p-1.5">
          <DropDown text="Category" />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <Label_Input text="product details" />
        <Label_Input text="fees" />
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <label
          htmlFor="product details"
          className=" capitalize text-lg font-medium"
        >
          product details
        </label>
        <input
          type="text"
          name={"product details"}
          id={"product details"}
          className="w-full outline-none border-b-2 border-stone-700"
        />
      </div>
    </FormExitAnimationWrapper>
  );
}
function Form3() {
  return (
    <FormExitAnimationWrapper layoutId="form3">
      <div className="flex flex-col items-start gap-2.5 justify-start self-start mt-5 w-full">
        <label htmlFor="note" className=" capitalize text-lg font-semibold">
          note
        </label>
        <textarea
          name=""
          id=""
          className="h-40 w-full rounded-xl outline-none border-2 border-stone-700 p-2.5"
        />
      </div>
    </FormExitAnimationWrapper>
  );
}
