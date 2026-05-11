import { motion } from "framer-motion";

export default function ScrollDownIcon() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="flex flex-col items-center gap-2 text-muted-foreground"
    >
      <span className="text-xs tracking-widest uppercase opacity-60">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className="w-5 h-8 rounded-full border border-current flex items-start justify-center pt-1.5"
      >
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-1.5 rounded-full bg-current"
        />
      </motion.div>
    </motion.div>
  );
}
