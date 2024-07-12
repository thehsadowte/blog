import Image from "next/image";
import React from "react";
import myImage from "../../../public/янг_лайф2.jpg";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <article className={styles.root}>
      <Image src={myImage} alt="team" width={360} loading="eager" />
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos rem minus
        veniam facilis rerum fugiat laudantium impedit accusamus omnis, aliquam
        hic? Tempora eveniet molestiae suscipit vero reprehenderit inventore
        pariatur fuga.
      </div>
    </article>
  );
};

export default AboutPage;
