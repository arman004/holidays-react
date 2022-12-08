import React from "react";
import { navbar } from "../data/Data";
import Styles from "./Header.module.scss";
import Logo from '../all-img/logo.png';

class Header extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <header className={Styles['head']}>
                <div>
                    <img src={Logo} />
                </div>
                <ul className={Styles['nav']}>
                    {navbar.map(i => {
                        return <li key={i.id}>{i.name}</li>
                    })}
                </ul>
                <div>
                    <button className={Styles['head-btn']}>GIFT FINDER</button>
                </div>
            </header>
        )

    }
}
export default Header;