"use client";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section className="min-h-screen px-4 py-12 pb-24 max-w-full" id="skills">
      <div className=" rounded-lg gap-8  flex items-center justify-center  flex-col max-w-5xl mx-auto mt-2 sm:mt-6 px-4 py-4 sm:py-12">
        <h4 className="text-2xl  text-transparent font-bold bg-gradient-to-r from-[#ec008c] to-[#fc6767]  bg-clip-text mt-4">
          Skill-Set
        </h4>
        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl md:text-xl font-semibold w-36 text-center sm:text-end ">
            React
          </p>
          <div className="flex gap-2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500  "
            ></motion.div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl md:text-xl font-semibold w-36  text-center sm:text-end  ">
            Node
          </p>
          <div className="flex gap-2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 "
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500  "
            ></motion.div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl md:text-xl font-semibold w-36 text-center sm:text-end ">
            MongoDb
          </p>
          <div className="flex gap-2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500  "
            ></motion.div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl md:text-xl font-semibold w-36  text-center sm:text-end  ">
            Express
          </p>
          <div className="flex gap-2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 "
            ></motion.div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-xl md:text-xl font-semibold w-36 text-center sm:text-end ">
            React Native
          </p>
          <div className="flex gap-2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2 }}
              className="h-8 md:h-11 w-8 md:w-20 rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500 bg-slate-900 dark:bg-slate-200"
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500 "
            ></motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className=" h-8 md:h-11 w-8 md:w-20  rounded-lg border-4 border-zinc-500 "
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="">
        <h4 className="text-2xl text-center  text-transparent font-bold bg-gradient-to-r from-[#ec008c] to-[#fc6767]  bg-clip-text mt-4">
          Certifications
        </h4>
        <p className="max-w-2xl my-4 mx-auto text-sm md:text-md  text-center capitalize tracking-wide ">
          i completed 3 months MERN stack development programme from guvi which
          is an IIT-M incubated company.
        </p>
        <p className="max-w-2xl   mx-auto text-sm md:text-md  text-center capitalize tracking-wide ">
          in addition to that i completed additional courses from udemy to
          ensure that my skills are upto updation.
        </p>
      </div>
    </section>
  );
}

export default Skills;
