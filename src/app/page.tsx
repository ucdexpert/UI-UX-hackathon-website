import Image from "next/image";
import './globals.css'

import Link from "next/link";

// images
import logo from './images/logo-black.png'

// icons
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";


export default function Home() {
  return (
    <div className="home">
          <div className="header">
            <div className="logo-div">
            <Image src={logo} alt="image" className="logo"/>
            </div>

            <div className="navlinks">
              <Link href={'./'} className="link">Main</Link>
              <Link href={'./'} className="link">Gallery</Link>
              <Link href={'./'} className="link">Projects</Link>
              <Link href={'./'} className="link">Certifications</Link>
              <Link href={'./'} className="link">Contact</Link>
            </div>


          </div>

          <div className="hero-container">
            <div className="text">
              <h1>Project</h1>
              <h2>Lorum</h2>

              <div className="btns">
                <div className="arrow-btn">
                <FaArrowLeft className="size"/>
                </div>

                <div className="arrow-btn r">
                <FaArrowRight className="size" />
                </div>
              </div>


            <p>01/02</p>
            </div>
            <div className="image"></div>
          </div>

          <div className="third-cont">
            <div className="grid-cont-image">
              <div className="grid1">
                <div className="row1"></div>
                <div className="row"></div>
              </div>
              <div className="grid2"></div>
            </div>

            <div className="grid-text">
              <h1>About</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

              <button>Read more!</button>
            </div>
          </div>
    </div>
  );
}