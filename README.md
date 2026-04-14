# Projeto de Testes QA - E-commerce (SauceDemo)

## Sobre o projeto
Este projeto foi desenvolvido com o objetivo de validar funcionalidades e o comportamento de um sistema de e-commerce, utilizando testes manuais e automatizados com Playwright.

Durante o desenvolvimento, foram testados fluxos reais de usuário, como login, manipulação de carrinho e processo de checkout, incluindo cenários positivos e negativos.

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
- Checkout com validação de erro

---

## Objetivo dos testes

Garantir o correto funcionamento das principais funcionalidades do sistema, incluindo autenticação de usuários, manipação de carrinho e validação de regras de negócio durante o processo de compra.

---

## Bug encontrado

Foi identificado um bug onde o sistema permite login com credenciais inválidas.

Detalhes podem ser encontrados em:
tests/docs/bug-report.md

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

## Estrutura do projeto

- tests → testes automatizados
- tests/docs → documentação de testes manuais e bugs

---

## Diferenciais do projeto

- Cobertura de fluxo completo de usuário (login até checkout)
- Validação de cenários positivos e negativos
- Documentação de testes manuais
- Registro de bug identificado durante os testes