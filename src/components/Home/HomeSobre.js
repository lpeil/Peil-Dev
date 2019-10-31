import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TimelineLite } from "gsap/all";
import Button from '../Button';
import PerfilPhoto from '../../assets/sobre/perfil-photo.jpg';


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10vh 0;
`

const Sobre = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 60%;
    height: 380px;
    background-color: #e9f6ff;
    border-radius: 10px;
`

const Photo = styled.div`
    position: relative;
    width: 40%;
    height: 100%;
    background-image: url(${PerfilPhoto});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

const Infos = styled.div`
    width: 60%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 40px;
    font-family: 'Dosis', 'Roboto', sans-serif;
`

const Head = styled.span`
    position: relative;
    font-size: 32px;
`

const SubHead = styled.div`
    position: relative;
    font-size: 24px;
`

const Description = styled.div`
    position: relative;
    font-size: 18px;
`

export default class HomeSobre extends React.Component {
    constructor(props){
		super(props);

		this.cardSobre = new TimelineLite({ paused:true });

        this.content = null;
        this.card = null;
        this.photo = null;
		this.head = null;
		this.subhead = null;
        this.description = null;
        this.button = null;
    }

    listenScrollEvent = e => {
        const startAnimation = document.getElementById("startAnimation");

        const intersectionObserver = new IntersectionObserver((entries) => {
            let [entry] = entries;
            if (entry.isIntersecting) {
                setTimeout(() => this.cardSobre.play());
            } else {
                setTimeout(() => this.cardSobre.restart());
            }
        });

        intersectionObserver.observe(startAnimation);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
        
		this.cardSobre
            .set(this.content, { autoAlpha: 1, delay: 0.5 })
			.from(this.card, 0.5, { autoAlpha: 0 })
			.from(this.photo, 0.5, { left: -500, autoAlpha: 0 })
			.from(this.head, 0.5, { left: 100, autoAlpha: 0 })
			.from(this.subhead, 0.5, { left: 100, autoAlpha: 0 })
            .from(this.description, 0.5, { left: 100, autoAlpha: 0 })
            .from(this.button, 0.5, { left: 100, autoAlpha: 0 })
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }
    

    render() {
        return(
            <>
            <Wrapper id="startAnimation" ref={div => this.content = div}>
                <Sobre ref={div => this.card = div}>
                    <Photo ref={img => this.photo = img} />
                    <Infos>
                        <Head ref={span => this.head = span}>Sobre Mim</Head>
                        <SubHead ref={span => this.subhead = span}>Olá! Me chamo Luan Peil.</SubHead>
                        <Description ref={span => this.description = span}>Sou estudante de Sistemas para a Internet, tenho conhecimento em desenvolvimento web tanto back-end, tanto front-end, e algumas habilidades com Linux e desenvolvimento de games e mobile.</Description>
                        <Link to="/sobre">
                            <Button ref={button => this.button = button} text="Ver Mais" width="50%" />
                        </Link>
                    </Infos>
                </Sobre>
            </Wrapper>
            </>
        )
    }
}
