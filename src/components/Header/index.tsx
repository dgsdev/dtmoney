import React from "react"
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Bem-vindo, Miguell! 2022 Rebecca Nota 10! 
            </button>
            <button type="button" onClick={onOpenNewTransactionModal}>
              Nova Transação
            </button>        
            </Content>
        </Container>
    )
}