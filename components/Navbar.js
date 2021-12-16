 import styles from  '../styles/Navbar.module.css';

 
 
 const Navbar=()=>{
return(
<div className={styles.navbar}>
    <p className={styles.logo}>
        Code<span className={styles.span}>X</span>
    </p>
    <div className={styles.links}>
        <ul className={styles.links_ul}>
            <li className={styles.links_li}><a href="#home" className={styles.link}>Home</a></li>
            <li className={styles.links_li}><a href="#projects" className={styles.link}>Projects</a></li>
            <li className={styles.links_li}><a href="#contact" className={styles.link}>Contact</a></li>
        </ul>
    </div>
</div>

)

}


export default Navbar;