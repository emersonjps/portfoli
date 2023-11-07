import { motion } from "framer-motion";
import NavComponent from "./components/NavComponent/NavComponent";
import { animationVariants } from "./utils/AnimationVariants";
import Card from "./components/Card/Card";

export default function Competencias() {
  return (
    <section className="flex flex-col justify-center items-center">
      <NavComponent competencia={true} projetos={false} />{" "}
      <div className="flex mt-20 justify-center items-center w-96">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-10">Competências</p>

          <div className="flex gap-7 flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
