import React from 'react';

import { 
    Wrapper,
    Presetion,
    Description
} from './style';

const InitialPage = () => {
    return (
       <Wrapper id="home">
           <Presetion>
               Opa, como vai? Sou o Luan Peil.
           </Presetion>
           <Description>
                Desenvolvedor web, com foco em PHP, React e React Native.
           </Description>
       </Wrapper>
    )
}

export default InitialPage;
