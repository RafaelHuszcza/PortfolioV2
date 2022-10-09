import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="relative overflow-hidden rounded-full w-56 h-56 object-cover -mb-20 md:mb-20 flex-shrink-0 md:rounded-lg md:w-64 md:h=95 xl:w-[500px] xl:h-[600]"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={"https://avatars.githubusercontent.com/rafaelhuszcza"}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <div className="space-y-10 px-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl
          dolor, blandit in commodo posuere, laoreet sit amet augue. Ut
          condimentum dui ultrices tempor vulputate. Quisque semper, nibh eget
          convallis ullamcorper, sapien arcu ullamcorper erat, eu ornare ex mi
          ut eros. Pellentesque fringilla id odio eget commodo. In nulla turpis,
          maximus vitae tempor non, tincidunt nec lacus. In ac leo non dolor
          imperdiet aliquam. Etiam id risus vitae est faucibus imperdiet eu non
          felis. Ut malesuada rutrum metus, eu rutrum nibh facilisis et.
          Curabitur lobortis est id erat auctor tristique. Vestibulum rutrum sem
          maximus, malesuada tellus fermentum, rutrum purus. Cras rhoncus
          condimentum est a molestie. In molestie sapien nec eros scelerisque,
          eu venenatis sapien cursus. Praesent in est ligula. Mauris id cursus
          eros. Cras vitae accumsan mauris, vel luctus tellus. Nulla
          sollicitudin dui at nisi pellentesque, vitae sollicitudin ante
          malesuada. Vestibulum pulvinar odio eget nulla sagittis finibus. Sed
          tellus urna, finibus vel dolor vitae, pharetra placerat lectus. Nunc
          eu sapien purus. Vestibulum eu ante sit amet nunc bibendum vestibulum
          vitae a magna. Cras sed fermentum sapien. Nulla facilisi. Sed semper
        </p>
      </div>
    </motion.div>
  );
}
