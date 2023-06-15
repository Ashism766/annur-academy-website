import React from "react";
import Style from "./home.module.css";
import Navbar from "../navbar/header"
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { useTheme, useMediaQuery } from "@mui/material";
// import CardComponent from "./card";


const Home = ()=>{
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));


    return (<>
        <Navbar/>
        <img className={Style.backgroundImg} src={require(isMatch?"./schoolbackgroundmobile.jpg":"./schoolcropbackground.jpg")} alt="background img home" />

        <div className={isMatch?Style.titleMb:Style.titlePc}>Pursue Your Dreams!<br/> With Our Guidance</div>

       <div style={{paddingTop:isMatch?"25rem":"35rem"}}  className={Style.container}>

        
            <div className={Style.div1}>
                <img className={Style.img1} src={require("./discepline.jpg")} alt="discepline"/>
                <div className={Style.cardTitle}>Discepline</div>
                <div>lsdfj sdlfj sdlfjsldf jlsdfj slkdf lskdfjlskf jslkfj slkfjlskfjlksfjlksfjlksf slfkjflkj sfjlfj lsflskj </div>
                <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
            </div>
            
            <div className={Style.div2}>
                <img className={Style.img2} src={require("./focus.jpg")} alt="discepline"/>
                <div className={Style.cardTitle}>Discepline</div>
                <div>lsdfj sdlfj sdlfjsldf jlsdfj slkdf lskdfjlskf jslkfj slkfjlskfjlksfjlksfjlksf slfkjflkj sfjlfj lsflskj </div>
                <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
            </div>
            <div className={Style.div3}>
                <img className={Style.img3} src={require("./Interactive.jpg")} alt="discepline"/>
                <div className={Style.cardTitle}>Discepline</div>
                <div> kds flksjdf lkljlsdfj llkj sdjlksdlkjfdsdfj lsjlfkjsldkfslksf slfkjflkj sfjlfj lsflskj </div>
                <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
            </div>
        </div>

        <div className={Style.mainContainer}>
        
        <div className={Style.provide}>Our Batch</div>

        <div style={{padding: isMatch?"0 2rem":"0 4rem", gap:isMatch?"3rem":"6rem"}} className={Style.secondCont}>
            <div className={Style.five}>
                <img src={require("./five.jpeg")} alt="class five"/>
            </div>

            <div className={Style.six}>
                <img src={require("./six.jpeg")} alt="class six"/>
            </div>
            
            <div className={Style.seven}>
                <img src={require("./seven.jpeg")} alt="class six"/>
            </div>
            <div className={Style.eight}>
                <img src={require("./eight.jpeg")} alt="class six"/>
            </div>
            <div className={Style.nine}>
                <img src={require("./nine.jpeg")} alt="class six"/>
            </div>
            <div className={Style.ten}>
                <img src={require("./ten.jpeg")} alt="class six"/>
            </div>
            <div className={Style.eleven}>
                <img src={require("./eleven.png")} alt="class six"/>
            </div>
            <div className={Style.twelve}>
                <img src={require("./twelve.jpeg")} alt="class six"/>
            </div>

        </div>

        <div className={Style.footerCon}></div>
            <div className={Style.footerText}>Then! Lets Get Started</div>
            <Button className={Style.footerButton} sx={{ marginLeft: "10px",flexShrink: 0 }} variant="contained">
                SignUp
            </Button>
        </div>
        <p className={Style.copyright}>copyright@ashismaity</p>
        
    </>)

}


export default Home;


