import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navbar = [
  {
    label: "form",
    to: "/",
  },
  {
    label: "profile",
    to: "/profile",
  },
];

export default function Navbar() {
  const pathname = useLocation().pathname;
  return (
    <nav className="py-10 bg-stone-500 text-stone-100 capitalize font-medium text-xl">
      <ul className="flex items-center justify-center gap-5">
        {navbar.map((item) => (
          <li key={item.label}>
            <Link
              className={`relative px-3 py-1 ${
                item.to === pathname ? "text-stone-500" : ""
              }`}
              to={item.to}
            >
              <span className=" relative z-10">{item.label}</span>
              {item.to === pathname && (
                <motion.span
                  layoutId="navbar"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.3,
                  }}
                  className="-z-0 absolute inset-0 rounded-full size-full bg-stone-300"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
