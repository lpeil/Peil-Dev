import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    margin: 10vh;
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

const Contato = () => (
    <Wrapper>
        <Title>No que eu posso te ajudar?</Title>
        <Form>
            <Line>
                <Field>
                    <Label>Nome</Label>
                    <Input type="text" name="name" />
                </Field>
                <Field>
                    <Label>Email</Label>
                    <Input type="email" name="email" />
                </Field>
            </Line>
            <Field>
                <Label>Mensagem</Label>
                <Message />
            </Field>
            <Button type="submit">Enviar</Button>
        </Form>
    </Wrapper>
)

export default Contato;