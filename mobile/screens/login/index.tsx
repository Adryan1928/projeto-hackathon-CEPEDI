import React from "react";
import { Container, ContainerText, Form, TextBlue, TextNormal, Title } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { View, Text } from "react-native";

export function LoginScreen() {
    return (
        <Container>
            <Title>Cidadão +</Title>
            <Form>
                <Input label="Email"/>
                <Input label="Senha" secureTextEntry/>
                <View style={{marginTop:24}}><Button /></View>
                
                <ContainerText>
                    <TextNormal>Ainda não possui uma conta? </TextNormal>
                    <TextBlue>Cadastra-se</TextBlue>
                </ContainerText>
            </Form>
        </Container>
    )
}