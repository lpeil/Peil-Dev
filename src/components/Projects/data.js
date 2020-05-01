import fmonImg   from '../../assets/projects/card-fmon.jpg'
import pocketImg from '../../assets/projects/card-mypocket.jpeg'
import ecartImg  from '../../assets/projects/card-ecart.png'

const projects = [
    {
        name: 'fmon',
        link: 'https://github.com/lpeil/fmon',
        title: 'FMON',
        image: fmonImg,
        languages: 'PHP - React',
        description: 'Um organizador de campeonatos online de Football Manager',
    },
    {
        name: 'mypocket',
        link: 'https://github.com/lpeil/My-Pocket',
        title: 'My Pocket',
        image: pocketImg,
        languages: 'Ruby on Rails - React',
        description: 'Uma lista de afazeres',
    },
    {
        name: 'ecart',
        link: 'https://github.com/lpeil/E-Cart',
        title: 'E-Cart',
        image: ecartImg,
        languages: 'NodeJS - React',
        description: 'Um e-commerce modular',
    },
    {
        name: 'pomodoro',
        link: 'https://github.com/lpeil/Pomodoro-App',
        title: 'Pomodoro Manager',
        image: pocketImg,
        languages: 'PHP - React Native',
        description: 'Um gerenciador de tempo e de tarefas',
    },
    {
        name: 'horoscouple',
        link: 'https://github.com/lpeil/horoscouple',
        title: 'Horoscouple',
        image: pocketImg,
        languages: 'PHP - Python - Flutter',
        description: 'Um aplicativo de encontros baseado no horóscopo',
    },
    {
        name: 'kubanabook',
        link: 'https://github.com/Kubanacode/KubanaBook-Api',
        title: 'Kubanabook',
        image: pocketImg,
        languages: 'PHP - React',
        description: 'Uma rede social voltada para a consumo de mídias',
    },
]

export default projects;