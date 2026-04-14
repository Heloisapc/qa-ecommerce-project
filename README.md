# Projeto de Testes QA - E-commerce (SauceDemo)

## Sobre o projeto
Este projeto tem como objetivo validar funcionalidades de um sistema de e-commerce utilizando testes manuais e automatizados.

O sistema testado foi o site: https://www.saucedemo.com/

---

## Tipos de teste realizados

- Testes manuais
- Testes automatizados com Playwright
- Identificação e documentação de bugs

---

## Cenários testados

- Login com sucesso
- Login com senha inválida
- Adição de produto ao carrinho
- Remoção de produto do carrinho

---

## Bug encontrado

Foi identificado um bug onde o sistema permite login com credenciais inválidas.

Detalhes podem ser encontrados em:
docs/bug-report.md

---

## Tecnologias utilizadas

- Node.js
- Playwright
- JavaScript

---

## Como executar o projeto

1. Instalar dependências:
npm install

2. Executar os testes:
npx playwright test

---

##  Estrutura do projeto

- tests → testes automatizados
- docs → documentação de testes manuais e bugs