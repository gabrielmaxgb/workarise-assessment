import { motion } from "framer-motion";
import { IChildren } from "../../../../types/common/types";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const AnimatedPage = ({ children }: IChildren) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1.4 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
