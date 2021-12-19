import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Thumbnail1 from "../assets/thumbnail1-min.png";
import Thumbnail2 from "../assets/thumbnail2-min.png";
import Thumbnail3 from "../assets/thumbnail3-min.png";
import Send from "../assets/send.svg";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Project from "../components/Project";

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34bfr0i",
        "template_km9isc6",
        form.current,

        "user_aFdDwylEm3OuZU7xFR8TL"
      )
      .then(
        (result) => {
          window.alert("message sent..");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Free code tutorials ,website clones"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript Sass React Styled-components Firebase Clone Demo Github"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="blob:https://vercel.com/468e29c5-d995-4085-9044-d5d72b71398c"
        />
        <meta name="author" content="Kaushik sheel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Free web project ideas and clones</title>
        <meta property="og:title" content="Free web project ideas and clones" />
        <meta
          property="og:description"
          content="Free code tutorials ,website clones"
        />
        <link rel="icon" href="./favicon.svg" />
      </Head>
      <div className={styles.header} id="home">
        <Navbar />
        <div className={styles.content}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.title}
          >
            Looking for <span className={styles.span}>ideas</span> for your
            <br /> next <span className={styles.span}>project</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.1, x: 100 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2, x: 0 }}
            className={styles.sub_title}
          >
            We offers clones of some popular website with code <br /> and many
            web apps...
          </motion.p>
          <a href="#projects" className={styles.explore_btn}>
            Explore
          </a>
        </div>
      </div>
      <section id="projects" className={styles.projects_section}>
        <div className={styles.title_container}>
          <div className={styles.line}></div>
          <p className={styles.title}>Projects</p>
        </div>
        <div className={styles.project_container}>
          <Project
            title="Netflix Clone"
            image={Thumbnail1}
            tags={["React", "Firebase", "StyledC"]}
            demo="https://netflix-cloned.vercel.app/"
            github="https://github.com/Devil5614737/NetflixClone"
          />
          <Project
            title="Instagram Clone"
            image={Thumbnail2}
            tags={["React", "MongoDb", "Node"]}
            demo="https://instagram-clone-mauve.vercel.app/"
            github="https://github.com/Devil5614737/Instagram-clone"
          />
          <Project
            title="Ecommerce Website"
            image={Thumbnail3}
            tags={["React", "Firebase", "Sass"]}
            demo="https://ecommerce-shoe-store.vercel.app/"
            github="https://github.com/Devil5614737/Ecommerce_ShoeStore"
          />
        </div>
      </section>
      <div className={styles.contact_container} id="contact">
        <div className={styles.contact_title}>
          <div className={styles.line}></div>
          <p>Contact</p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.input_container}
        >
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input id="name" type="text" className={styles.input} name="name" />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              name="email"
            />
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className={styles.textarea}
            ></textarea>
          </form>
          <div className={styles.send_btn}>
            <Image src={Send} alt="icon" height={20} width={20} />
            <p onClick={sendEmail}>send</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
