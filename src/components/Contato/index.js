import React from 'react';
import styled from 'styled-components';
import { TimelineLite } from "gsap/all";
import emailjs from 'emailjs-com';

import closeIcon from '../../assets/icons/close.svg';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    margin-top: 5vh;

    @media only screen and (max-width: 768px) {
        margin: 5vh 0;
    }
`

const Title = styled.div`
    font-size: 48px;
    line-height: 54px;
    color: #141c3a;
    margin: 2vh;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 60%;
    min-width: 300px;
    max-width: 100%;
`

const Input = styled.input`
    height: 2em;
    width: 100%;
    padding: 0.25em;
    background-color: transparent;
    color: #141c3a;
    border: 1px solid #E6ECF8;
    border-radius: 4px;
    outline: none;
`

const Field = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    padding: .75rem 0;
`

const Label = styled.label`
    font-size: 18px;
    color: rgba(41,51,71,0.65);
    margin-bottom: 0.5em;
`

const Message = styled.textarea`
    height: 10em;
    width: 100%;
    padding: 0.5em;
    background-color: transparent;
    color: #141c3a;
    border: 1px solid #E6ECF8;
    border-radius: 4px;
    outline: none;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
    height: 55px;
    color: #7510F7;
    background-color: transparent;
    border: 2px solid #7510F7;
    border-radius: 28px;
    cursor: pointer;
    outline: none;
    transition: 0.4s;

    &:hover {
        background-color: #7510F7;
        color: #fff;
    }
`

const Line = styled.div`
    width: 100%;  
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    & div {
        width: 45%;
    }
`

const ModalWrapper = styled.div`
    position: fixed;
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`

const Modal = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    width: 350px;
    max-width: 90%;
    height: auto;
    padding-bottom: 5vh;
    background-color: #fff;
    box-shadow: 0px 2px 5px 3px rgba(0,0,0,0.25);
`

const ModalClose = styled.div`
    width: 92%;
    height: 15px;
    padding: 5px;
    margin-top: 10px;
    background-image: url(${closeIcon});
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
`

const ModalText = styled.div`
    width: 90%;
    padding: 5vh 0;
    font-size: 18px;
    color: #141c3a;
    text-align: center;
`

export default class Contato extends React.Component { 
    constructor(props) {
        super(props);

        this.state = { message: '', name: '', email: '', modalText: 'Mensagem enviada com sucesso!' };

        this.modal = '';
        this.modalWrapper = '';
        this.modalAnimation = new TimelineLite({ paused: false });

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {     
        this.modalAnimation
            .to(this.modalWrapper, 0, { css: {display: 'flex'} }, 0.5)
            .from(this.modal, 0.5, { bottom: 500, autoAlpha: 0, delay: 0.5 }, 0.5);
    }

    handleSubmit(e) {
        e.preventDefault();
        const serviceId = 'gmail';
        const templateId = 'template_fxuWLjix';
        const userId = 'user_vlkHTlE5u4kXb8gRDmn4p';
        
        emailjs.send(
            serviceId, templateId, {
                from_name: this.state.name,
                reply_to: this.state.email,
                message_html: this.state.message
            }, userId
        ).then((response) => {
            this.setState({ modalText: 'Mensagem enviada com sucesso!'});
            this.modalAnimation.play();
         }, (err) => {
            this.setState({ modalText: 'Erro!' + err});
            this.modalAnimation.play();
         });

         this.setState({
            name: '',
            email: '',
            message: ''
          });
    }
        

    render() {
        return (
            <>
                <Wrapper>
                    <Title>No que que posso te ajudar?</Title>
                    <Form onSubmit={this.handleSubmit}>
                        <Line>
                            <Field>
                                <Label>Nome</Label>
                                <Input 
                                    type="text" 
                                    name="name"
                                    id="name"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.name}
                                />
                            </Field>
                            <Field>
                                <Label>Email</Label>
                                <Input 
                                    type="email" 
                                    name="email"
                                    id="email"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.email}
                                />
                            </Field>
                        </Line>
                        <Field>
                            <Label>Mensagem</Label>
                            <Message 
                                name="message"
                                id="message"
                                onChange={this.handleChange}
                                required
                                value={this.state.message}
                            />
                        </Field>
                        <Button type="submit">Enviar</Button>
                    </Form>
                </Wrapper>
                <ModalWrapper ref={div => this.modalWrapper = div}> 
                    <Modal ref={div => this.modal = div}>
                        <ModalClose onClick={ () => this.modalAnimation.reverse() }  />
                        <ModalText>
                            {this.state.modalText}
                        </ModalText>
                        <Button onClick={ () => this.modalAnimation.reverse() }>Beleza</Button>
                    </Modal>
                </ModalWrapper>
            </>
        )
    }
}