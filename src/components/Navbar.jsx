import React, { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext';

const Navbar = () => {
    const { cart, setCart } = useApp()
    const [total, setTotal] = useState(0)

    const [themes, setThemes] = useState([
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter"
    ]);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    let defaultTheme = localStorage.getItem("theme");

    useEffect(() => {
        console.log(theme)

        console.log(defaultTheme)

        localStorage.setItem("theme", theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme])


    useEffect(() => {
        const sum = cart.reduce((a, b) => a + b.price, 0)
        console.log("total: ", sum)

        setTotal(sum)
    }, [cart])

    return (
        <div className="bg-base-100 shadow-sm ">
            <div className="navbar container mx-auto max-w-[90%] ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none flex gap-5">
                    <select className='select select-primary min-w-45' value={theme} onChange={(e) => setTheme(e.target.value)}>
                        {
                            themes.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))
                        }
                    </select>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 mt-3 w-96 z-50 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <div>
                                    {cart.length > 0 ? (
                                        cart.map((item, index) => (
                                            <div className='flex gap-5' id={index}>
                                                <div>
                                                    <img src={item.thumbnail} className='size-10' alt="" />
                                                </div>
                                                <div>
                                                    <p>{item.title}</p>
                                                    <p>{item.price}$</p>
                                                </div>
                                                <div>
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Your cart is empty</p>
                                    )}
                                </div>
                                <span className="text-info">Subtotal: ${total}</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar