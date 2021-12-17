import React from "react";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import Arrow from "../assets/arrow.svg";
import Image from "next/image";

function Project({ title, image, tags, demo, github }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className={styles.project}
    >
  <Image
        layout="intrinsic"
        src={image}
        height={428}
        width={679}
        alt="project thumbnail"
      />
      <div className={styles.projects_details}>
        <div className={styles.project_title_container}>
          <div className={styles.bar1}></div>
          <p className={styles.project_title}>{title}</p>
        </div>
        <div className={styles.tags_container}>
          {tags.map((item) => (
            <p key={item} className={styles.tag}>{item}</p>
          ))}
        </div>
        <div className={styles.links_container}>
          <div className={styles.link_container}>
            <a href={demo} title="live demo" className={styles.link}>
              Live demo
            </a>
            <Image
              className={styles.icon}
              src={Arrow}
              width={17}
              height={17}
              alt="icon"
            />
          </div>
          <div className={styles.link_container}>
            <a href={github} title="github repository" className={styles.link}>
              Github repo
            </a>
            <Image
              className={styles.icon}
              src={Arrow}
              width={17}
              height={17}
              alt="icon"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
