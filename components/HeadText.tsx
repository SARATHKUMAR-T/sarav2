import { motion } from "framer-motion";

const TextAnimation = () => {
  const text2 = "WEB DEVELOPER";

  return (
    <div className="text-center pt-14 md:pt-36">
      <motion.p
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className="font-bold"
      >
        SARATH KUMAR
      </motion.p>
      <h1 className="font-extrabold text-5xl sm:text-7xl">
        {text2.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: index * 0.1, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default TextAnimation;
