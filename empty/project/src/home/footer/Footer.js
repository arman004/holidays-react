import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { footerNav } from "../data/Data";
import Styles from './Footer.module.scss';
import divider from '../all-img/Divider.png';

class Footer extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <footer>
                <section className={Styles['section-foot']}>
                    <div className={Styles['footer-div']}>
                        <ul className={Styles['nav']}>
                            {footerNav.map(i => (
                                i?.src ? <img key={i.id} src={i.src} alt="" /> : <li key={i.id}>{i.name}</li>
                            )
                            )}
                        </ul>
                        <img src={divider}/>
                        <div className={Styles['icons-div']}>
                            <FacebookIcon/>
                            <TwitterIcon/>
                            <InstagramIcon/>
                            <YouTubeIcon/>
                            <PinterestIcon/>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
}
export default Footer