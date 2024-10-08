import { motion } from "framer-motion";
import style from "../sideBar.module.css";

function ToggleButton({ setOpen }) {
  return (
    <>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className={style.linksButton}
      >
        <motion.svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              close: { d: "M 2 2.5 L 20 2.5", transition: { delay: 0.3 } },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              close: { opacity: 1, transition: { delay: 0.3 } },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              close: {
                d: "M 2 16.346 L 20 16.346",
                transition: { delay: 0.3 },
              },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </motion.svg>
      </button>
    </>
  );
}

export default ToggleButton;
