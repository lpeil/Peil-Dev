import React from 'react';

import data from './data'; 

import {
    Wrapper,
    Title,
    ProjectsContent,
    ProjectCard,
    ProjectCardInside,
    ProjectCardFront,
    ProjectCardBack,
    ProjectCardTitle,
    ProjectCardDescription,
    ProjectCardLanguages
} from './style';

const Projects = () => {
    return (
        <Wrapper id="projects">
            <Title>Projetos</Title>
            <ProjectsContent>
                {data.map((project, key) => (
                    <ProjectCard key={key} id={project.name}>
                        <ProjectCardInside>
                            <ProjectCardFront Image={project.image} />
                            <ProjectCardBack href={project.link}>
                                <ProjectCardTitle>{project.title}</ProjectCardTitle>
                                <ProjectCardDescription>{project.description}</ProjectCardDescription>
                                <ProjectCardLanguages>{project.languages}</ProjectCardLanguages>
                            </ProjectCardBack>
                        </ProjectCardInside>
                    </ProjectCard>
                ))}
            </ProjectsContent>
        </Wrapper>
    )
}

export default Projects;
