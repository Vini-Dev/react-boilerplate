# Projeto base para aplicações ReactJS

Sem muita conversa, apenas o essencial para um desenvolvimento conciso e limpo. E algumas coisinhas configuradas ;)

## O que vem?

Eslint, root import, prettier, redux com duck pattern, reduxsauce, axios, pré configuração para autenticação, além de uma configuração para <i>Dark Theme</i>!
Basta definir os themas na pasta /styles/theme e está tudo certo! Importe onde precisar!

```jsx
// Em um arquivo de estilos
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({theme}) => theme.button.background};
`
````

O style-guide utilizado é do airbnb, bem popular.

### Uso

Clone o projeto

```
  git clone https://github.com/Vini-Dev/react-boilerplate.git
```

E após isso execute


```
  yarn
```
ou

```
  npm install
```

### Rode com

```
  yarn start
```

ou

```
  npm start
```
