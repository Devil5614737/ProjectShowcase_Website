import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Thumbnail1 from "../assets/thumbnail1.png";
import Thumbnail2 from "../assets/thumbnail2.png";
import Thumbnail3 from "../assets/thumbnail3.png";
import Arrow from "../assets/arrow.svg";
import Send from "../assets/send.svg";

import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

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
          <div className={styles.bar}></div>
          <p className={styles.title}>Projects</p>
        </div>
        <div className={styles.project_container}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.project}
          >
            <Image
              layout="intrinsic"
              src={Thumbnail1}
              height={428}
              width={679}
              alt="project thumbnail"
            />
            <div className={styles.projects_details}>
              <div className={styles.project_title_container}>
                <div className={styles.bar1}></div>
                <p className={styles.project_title}>Netflix Clone</p>
              </div>
              <div className={styles.tags_container}>
                <p className={styles.tag}>React</p>
                <p className={styles.tag}>Firebase</p>
                <p className={styles.tag}>StyledC</p>
              </div>
              <div className={styles.links_container}>
                <div className={styles.link_container}>
                  <a
                    href="https://netflix-cloned.vercel.app/"
                    title=" live demo"
                    className={styles.link}
                  >
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
                  <a
                    href="https://github.com/Devil5614737/NetflixClone"
                    title="github respository"
                    className={styles.link}
                  >
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className={styles.project}
          >
            <Image
              layout="intrinsic"
              src={Thumbnail2}
              height={428}
              width={679}
              alt="project thumbnail"
            />
            <div className={styles.projects_details}>
              <div className={styles.project_title_container}>
                <div className={styles.bar1}></div>
                <p className={styles.project_title}>Instagram Clone</p>
              </div>
              <div className={styles.tags_container}>
                <p className={styles.tag}>React</p>
                <p className={styles.tag}>MongoDb</p>
                <p className={styles.tag}>Node</p>
              </div>
              <div className={styles.links_container}>
                <div className={styles.link_container}>
                  <a
                    href="https://instagram-clone-mauve.vercel.app/"
                    title="live demo"
                    className={styles.link}
                  >
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
                  <a
                    href="https://github.com/Devil5614737/Instagram-clone"
                    title="github repository"
                    className={styles.link}
                  >
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className={styles.project}
          >
            <Image
              layout="intrinsic"
              src={Thumbnail3}
              height={428}
              width={679}
              alt="project thumbnail"
            />
            <div className={styles.projects_details}>
              <div className={styles.project_title_container}>
                <div className={styles.bar1}></div>
                <p className={styles.project_title}>Ecommerce Website</p>
              </div>
              <div className={styles.tags_container}>
                <p className={styles.tag}>React</p>
                <p className={styles.tag}>Firebase</p>
                <p className={styles.tag}>Sass</p>
              </div>
              <div className={styles.links_container}>
                <div className={styles.link_container}>
                  <a
                    href="https://ecommerce-shoe-store.vercel.app/"
                    title="live demo"
                    className={styles.link}
                  >
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
                  <a
                    href="https://github.com/Devil5614737/Ecommerce_ShoeStore"
                    title="github repository"
                    className={styles.link}
                  >
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
