import React from 'react'
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">

                </div>
                <div className="socials">
                    {socialImgs.map((img)=>(
                        <a className="icon" target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath}/>
                        </a>
                    ))}
                </div>
                <div className="flex flex-col jusify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Ayush Kar | All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
