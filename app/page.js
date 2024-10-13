"use client";
import Image from "next/image";
import styles from "./page.module.css";
import profilePhoto from '../app/images/profilePhoto.jpg'
import { useEffect, useState } from "react";


export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        <div className="bio-content">
        <p>Experienced Java Fullstack Developer skilled in designing and implementing high-performing applications with a knack for both front-end and back-end technologies.</p>
        <p>Bringing 2+ years of hands-on experience in Java development, complemented by a solid background in modern web frameworks and best practices.</p>
        <p>Proficient in Java, Spring Boot, React, Next Js, and JSp, with a strong understanding of database management.</p>
        <p>Committed to continuous learning and leveraging the latest tools and technologies to drive innovation and excellence.</p>
        <p>Passionate about creating seamless user experiences and efficient, scalable software solutions.</p>
        </div>
      </div>
      <div className="profile">
      {mounted && (
            <Image src={profilePhoto} alt="Profile Photo"/>
          )}
      </div>
     </div>
    </div>
  );
}
