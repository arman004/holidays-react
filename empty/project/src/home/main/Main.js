import React from "react";
import { textOne } from "../data/Data";
import Photo1 from '../all-img/MediaBackground.png';
import Photo2 from '../all-img/Background.png';
import { textTwo } from "../data/Data";
import Styles from './Main.module.scss';
import { lastTitle } from "../data/Data";
import { content } from "../data/Data";



class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            color:''
        }

    }

    changeColor=()=>{
        this.setState({color:'yellow'})
    }

    render() {
        return (
            <main>
                <section className={Styles['main-part-one']}>
                    <div className={Styles['img1']}>
                        <div className={Styles['title1']}>
                            <h2>{textOne.title}</h2>
                            <p>{textOne.text}</p>
                            <button>FIND GIFT NOW</button>
                        </div>
                        <div>
                            <img src={Photo1} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={Photo2} />
                        </div>
                        <div className={Styles['title2']}>
                            <h3>{textTwo.title}</h3>
                            <p>{textTwo.text}</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={Styles['title-div']}>
                        <h3>{lastTitle.title}</h3>
                        <p>{lastTitle.text}</p>
                    </div>
                    <div className={Styles['content']}>
                        <div className={Styles['span-divs']}>
                            {[...Array(4)].map((item,index)=>(
                                <span 
                                    onClick={() => this.setState({ id: index+1 })}
                                    className={index+1===this.state.id ? Styles['active'] : undefined}
                                    key={index}
                                >0{index+1}</span>
                            ))}
                            
                        </div>
                        {content.map(i => (
                            i.id === this.state.id ?  (
                                <div className={Styles['img-divs']} key={i.id}>
                                    <img src={i.photo} />
                                    <h4>{i.title}</h4>
                                    <a href="#">{i.more}</a>
                                </div>
                            ) : null

                        ))}
                    </div>
                </section>
            </main>
        )
    }
}

export default Main;