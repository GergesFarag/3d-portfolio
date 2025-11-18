import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
export const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        className="mx-auto max-w-5xl px-4 pt-24"
        id={idName}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Component />
      </motion.section>
    );
  };
