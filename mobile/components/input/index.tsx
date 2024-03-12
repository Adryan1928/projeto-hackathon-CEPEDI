import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container, InputStyle, Label } from "./style";

interface InputProps extends TextInputProps{
    label: string;
}

export function Input({label, ...rest}: InputProps){
    return (
        <Container>
            <Label>{label}</Label>
            <InputStyle placeholder="Digite aqui" {...rest}/>
        </Container>
    )
}