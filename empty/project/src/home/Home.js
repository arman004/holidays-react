import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

class Home extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <>
                <Header />
                <Main/>
                <Footer/>
            </>
            
        )

    }
}
export default Home;