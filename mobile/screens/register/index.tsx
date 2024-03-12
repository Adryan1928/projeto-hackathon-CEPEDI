import React from "react";
import { Container, ContainerText, Form, TextBlue, TextNormal, Title } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function RegisterScreen(){
        return (
            <Container>
                <Title>Cadastrar-se</Title>
                <Form>
                    <Input label="Email"/>
                    <Input label="Senha"/>
                    <Input label="Confirmr senha"/>
                    <Button />
                    <ContainerText>
                        <TextNormal>Já possui uma conta? </TextNormal>
                        <TextBlue>Logar</TextBlue>
                    </ContainerText>
                </Form>
            </Container>
        )
}