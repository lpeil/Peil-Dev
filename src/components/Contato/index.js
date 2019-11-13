import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    margin-top: 5vh;
`

const Title = styled.div`
    font-size: 48px;
    line-height: 54px;
    color: #141c3a;
    margin: 2vh;
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

export default class Contato extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { message: '', name: '', email: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
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
            console.log('SUCCESS!', response.status, response.text);
         }, (err) => {
            console.log('FAILED...', err);
         });

         this.setState({
            name: '',
            email: '',
            message: ''
          });
    }
        

    render() {
        return (
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
        )
    }
}