import React, { useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import antiquecafebg01 from '../assets/img/antique-cafe-bg-01.jpg';
import antiquecafebg02 from '../assets/img/antique-cafe-bg-02.jpg';
import antiquecafebg03 from '../assets/img/antique-cafe-bg-03.jpg';
import antiquecafebg04 from '../assets/img/antique-cafe-bg-04.jpg';
import menuIng1 from '../assets/img/menu-item-1.jpg';
import menuIng2 from '../assets/img/menu-item-2.jpg';
import menuIng3 from '../assets/img/menu-item-3.jpg';
import menuIng4 from '../assets/img/menu-item-4.jpg';
import menuIng5 from '../assets/img/menu-item-5.jpg';
import menuIng6 from '../assets/img/menu-item-6.jpg';
import menuIng7 from '../assets/img/menu-item-7.jpg';
import menuIng8 from '../assets/img/menu-item-8.jpg';

export default function Main({ scrolled }) {

    let gotoTop = (secID) => {
        const element = document.getElementById(secID);

        console.log(element)
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topPosition , behavior: 'smooth' });

        }

    }

    useEffect(()=>{

    },[])

    return (
        <>
            {/* <!-- Intro --> */}
            <ParallaxBanner className='myParrlex' layers={[{ image: antiquecafebg01, speed: -50 }]} >
                <div id="intro" className="parallax-window">
                    <nav id="tm-nav" className={`fixed w-full ${scrolled ? 'active' : ""}`}>
                        <div className={`tm-container mx-auto px-2 text-right ${scrolled ? "md:py-3" : "md:py-6"}`}>
                            <button className="md:hidden py-2 px-2" id="menu-toggle"><i className="fas fa-2x fa-bars tm-text-gold"></i></button>
                            <ul className="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
                                <li className="inline-block mb-4 mx-4"><a onClick={() => gotoTop('intro')} className="tm-text-gold py-1 md:py-3 px-4">Intro</a></li>
                                <li className="inline-block mb-4 mx-4"><a onClick={() => gotoTop('menu')} className="tm-text-gold py-1 md:py-3 px-4">Menu</a></li>
                                <li className="inline-block mb-4 mx-4"><a onClick={() => gotoTop('about')} className="tm-text-gold py-1 md:py-3 px-4">About</a></li>
                                <li className="inline-block mb-4 mx-4"><a onClick={() => gotoTop('contact')} className="tm-text-gold py-1 md:py-3 px-4">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container mx-auto px-2 tm-intro-width">
                        <div className="sm:pb-60 sm:pt-48 py-20">
                            <div className="bg-black bg-opacity-70 p-12 mb-5 text-center">
                                <h1 className="text-white text-5xl tm-logo-font mb-5">Antique Cafe</h1>
                                <p className="tm-text-gold tm-text-2xl">your daily energy booster</p>
                            </div>
                            <div className="bg-black bg-opacity-70 p-10 mb-5">
                                <p className="text-white leading-8 text-sm font-light">
                                    This is a coffee shop template named Antique Cafe which is a parallax HTML5 template with a good responsiveness.
                                    Feel free to use this layout for your cafe.
                                    If you have any question, please <a rel="nofollow" href="https://www.tooplate.com/contact" target="_parent">send us a message</a>. </p>
                            </div>
                            <div className="text-center">
                                <div className="inline-block">
                                    <a href="#menu" className="flex justify-center items-center bg-black bg-opacity-70 py-6 px-8 rounded-lg font-semibold tm-text-2xl tm-text-gold hover:text-gray-200 transition">
                                        <i className="fas fa-coffee mr-3"></i>
                                        <span>Let's explore...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </ParallaxBanner>

            {/* <!-- Cafe Menu --> */}
            <ParallaxBanner className='myParrlex' layers={[{ image: antiquecafebg02, speed: -50 }]} >
                <div id="menu" className="parallax-window">
                    <div className="container mx-auto tm-container py-24 sm:py-48">
                        <div className="text-center mb-16">
                            <h2 className="bg-white tm-text-brown py-6 px-12 text-4xl font-medium inline-block rounded-md">Our Cafe Menu</h2>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-around items-center">
                            <div className="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
                                <div className="flex items-start mb-6 tm-menu-item">
                                    <img src={menuIng1} alt="Image" className="rounded-md" />
                                    <div className="ml-3 sm:ml-6">
                                        <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Cappuccino</h3>
                                        <div className="text-white text-md sm:text-lg font-light mb-1">S $8.50</div>
                                        <div className="text-white text-md sm:text-lg font-light">L $10.50</div>
                                    </div>
                                </div>
                                <div className="flex items-start mb-6 tm-menu-item">
                                    <img src={menuIng2} alt="Image" className="rounded-md" />
                                    <div className="ml-3 sm:ml-6">
                                        <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Americano</h3>
                                        <div className="text-white text-md sm:text-lg font-light mb-1">S $9.50 . BG #544639</div>
                                        <div className="text-white text-md sm:text-lg font-light">L $12.50</div>
                                    </div>
                                </div>
                                <div className="flex items-start mb-6 tm-menu-item">
                                    <img src={menuIng3} alt="Image" className="rounded-md" />
                                    <div className="ml-3 sm:ml-6">
                                        <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Latte #FC6</h3>
                                        <div className="text-white text-md sm:text-lg font-light mb-1">M $11.75</div>
                                        <div className="text-white text-md sm:text-lg font-light">L $14.75</div>
                                    </div>
                                </div>
                                <div className="flex items-start mb-6 tm-menu-item">
                                    <img src={menuIng4} alt="Image" className="rounded-md" />
                                    <div className="ml-3 sm:ml-6">
                                        <h3 className="text-lg sm:text-xl tm-text-yellow mb-1">Hot Espresso</h3>
                                        <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Chocolate</h3>
                                        <div className="text-white text-md sm:text-lg font-light">Size M $11.75 . L $14.75</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
                                <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                                    <div className="text-right mr-6">
                                        <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Cappuccino</h3>
                                        <div className="text-white text-md sm:text-lg font-light mb-1">Small $10</div>
                                        <div className="text-white text-md sm:text-lg font-light">Large $15</div>
                                    </div>
                                    <img src={menuIng5} alt="Image" className="rounded-md" />
                                </div>
                                <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                                    <div className="text-right mr-6">
                                        <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Americano</h3>
                                        <div className="text-white text-md sm:text-lg font-light mb-1">Small $12.50</div>
                                        <div className="text-white text-md sm:text-lg font-light">Large $16.50</div>
                                    </div>
                                    <img src={menuIng6} alt="Image" className="rounded-md" />
                                </div>
                                <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                                    <div className="text-right mr-6">
                                        <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Milky Latte</h3>
                                        <div className="text-white text-md sm:text-lg font-light mb-1">Small $14</div>
                                        <div className="text-white text-md sm:text-lg font-light">Large $18</div>
                                    </div>
                                    <img src={menuIng7} alt="Image" className="rounded-md" />
                                </div>
                                <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                                    <div className="text-right mr-6">
                                        <h3 className="text-lg sm:text-xl tm-text-yellow mb-1">Iced Espresso</h3>
                                        <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Mocha</h3>
                                        <div className="text-white text-md sm:text-lg font-light">Small $10 . Large $15</div>
                                    </div>
                                    <img src={menuIng8} alt="Image" className="rounded-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxBanner>

            <ParallaxBanner className='myParrlex' layers={[{ image: antiquecafebg03, speed: -30 }]} >
                <div id="about" className="parallax-window">
                    <div className="container mx-auto tm-container py-24 sm:py-48">
                        <div className="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4">
                            <div className="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
                                <h2 className="mb-6 tm-text-green text-4xl font-medium">About our cafe</h2>
                                <p className="mb-6 text-base leading-8">
                                    Images are taken from Pexels, a great stock photo website. This template used Tailwind CSS. You may modify Antique Cafe template in any way you prefer and use it for your website.
                                </p>
                                <p className="text-base leading-8">
                                    If you wish to <a rel="nofollow" href="https://www.tooplate.com/contact" target="_parent">support us</a>, please make a little donation via PayPal. That would be
                                    very helpful. Another way is to tell your friends about Tooplate website. Thank you. </p>
                            </div>
                            <a href="#contact" className="inline-block tm-bg-green transition text-white text-xl pt-3 pb-4 px-8 rounded-md">
                                <i className="far fa-comments mr-4"></i>
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </ParallaxBanner>

            <ParallaxBanner className='myParrlex' layers={[{ image: antiquecafebg04, speed: -30 }]} >
                <div id="contact" className="parallax-window relative">
                    <div className="container mx-auto tm-container pt-24 pb-48 sm:py-48">
                        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-stretch">
                            <div className="flex-1 rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container">
                                <h2 className="text-3xl mb-6 tm-text-green">Contact Us</h2>
                                <p className="mb-6 text-lg leading-8">
                                    Praesent tellus magna, consectetur sit amet volutpat eu, pulvinar vitae sem.
                                    Sed ultrices. bg white 80% alpha. btn #066
                                </p>
                                <p className="mb-10 text-lg">
                                    <span className="block mb-2">Tel: <a href="tel:0100200340" className="hover:text-yellow-600 transition">010-020-0340</a></span>
                                    <span className="block">Email: <a href="mailto:info@company.com" className="hover:text-yellow-600 transition">info@company.com</a></span>
                                </p>
                                <div className="text-center">
                                    <a href="https://www.google.com/maps" className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                        <i className="fas fa-map-marked-alt mr-8"></i>
                                        Open Maps
                                    </a>
                                </div>
                            </div>
                            <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container">
                                <form action="" method="POST" className="text-lg">
                                    <input type="text" name="name" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Name" required="" />
                                    <input type="email" name="email" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Email" required="" />
                                    <textarea rows="6" name="message" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Message..." required=""></textarea>
                                    <div className="text-right">
                                        <button type="submit" className="text-white hover:text-yellow-500 transition">Send it</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <footer className="absolute bottom-0 left-0 w-full">
                            <div className="text-white container mx-auto tm-container p-8 text-lg flex flex-col md:flex-row justify-between">
                                <span>Copyright 2022 Antique Cafe. All rights reserved.</span>
                                <span className="mt-5 md:mt-0">Design: <a href="https://www.tooplate.com" target="_parent">Tooplate</a></span>
                            </div>
                        </footer>
                    </div>
                </div>
            </ParallaxBanner>
        </>
    )
}
