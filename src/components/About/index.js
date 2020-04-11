import React from 'react';

import ProfileImg from '../../assets/about/profile.png'

import { 
    Wrapper,
    Title,
    Content,
    ProfileImage,
    ProfileImageBack,
    ProfileDescription
} from './style';

const About = () => {
    return (
       <Wrapper id="about">
           <Title>Sobre Mim</Title>
           <Content>
                <ProfileImageBack>
                    <ProfileImage src={ProfileImg} draggable="false" />
                </ProfileImageBack>
                <ProfileDescription>
                    <p>Programador e desenvolvedor web, há mais de 4 anos programando. Tive início na programação através de fóruns phpBB e Joomla, sobre jogos e campeonatos online. Onde criei meu primeiro projeto, o <a href="https://fmon.org" target="_blank" rel="noopener noreferrer">FMON</a>, um gerenciador de jogos online.</p>
                    <p>Atualmente trabalho na <a href="http://checkplant.com.br/" target="_blank" rel="noopener noreferrer">Checkplant SA</a> como Desenvolvedor PHP, e curso Sistemas para Internet, além de fazer freelances, projetos pessoais e vídeos tutoriais.</p>
                    <p>Faço uso de tecnologias primarias PHP/Laravel, React e React Native, além ter conhecimento em Linux, ES6, NodeJs, jQuery, HTML, CSS e SQL. E já fiz uso de Python, NoSQL, C, WordPress e Ruby on Rails.</p>
                </ProfileDescription>
           </Content>
       </Wrapper>
    )
}

export default About;
