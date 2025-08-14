"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import headerImage from "../../../public/header.png";
import Buttons from "./Buttons";

export default function HeadingSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <section className=" w-full h-[100dvh] pt-32 text-center overflow-y-hidden flex flex-col items-center justify-center bg-[url('/bg.jpg')] background-opacity-1 bg-cover bg-center bg-fixed">
      <motion.h1
        initial={{ opacity: 0, y: 50, scale: 0.6 }}
        animate={{ opacity: 1, y: 0, scale: 1.15 }}
        transition={{
          duration: 1.5,
          type: "spring",
          damping: 20,
          stiffness: 200,
          ease: "easeInOut",
        }}
        className="mt-86 text-6xl font-extrabold text-center  "
      >
        Equal Parts, a Designer
        <br /> and a Developer.
      </motion.h1>
      <motion.p
        className="w-2/5 mt-8 "
        initial={{ opacity: 0, y: 30, scale: 0.6 }}
        animate={{ opacity: 1, y: 0, scale: 1.1 }}
        transition={{
          duration: 1,
          delay: 0.4,
          type: "spring",
          ease: "easeIn",
        }}
      >
        I take ideas from concept to launch — blending creativity and precision
        to deliver websites that are as beautiful as they are functional.
      </motion.p>
      <div className="mt-5 flex gap-4 items-center">
        <Buttons to={"/projects"} buttonContent="Let’s Work Together" />
        <Buttons
          to={"/projects"}
          buttonContent="View My Work"
          type="secondary"
        />
      </div>
      <AnimatePresence>
        <motion.div
          style={{ y, scale, opacity }}
          className="w-2/3 mt-8"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.8,
            type: "spring",
            ease: "easeIn",
          }}
          exit={{ opacity: 0 }}
        >
          <Image
            className="mx-auto"
            src={headerImage}
            alt="Header Image"
            style={{
              maxWidth: "100%",
            }}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
