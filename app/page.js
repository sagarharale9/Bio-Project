import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div >
     <nav className="navbar">
       <div className="name">
         <strong>SAGAR HARALE</strong>
       </div>
       <div className="bio-options">
          <a href="#about" >About</a>
          <a href="#projects" >Projects</a>
          <a href="#contact" >Contact</a>       
       </div>
     </nav>
     <div className="content">
      <div className="about">
        <strong>Hey, I'am Sagar</strong>
      </div>
      <div className="profile">

      </div>
     </div>
    </div>
  );
}
