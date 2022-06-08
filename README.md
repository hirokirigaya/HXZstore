# HXZ Store

  Gaming e-commerce, every interface and code line has been created by [Daniel](https://github.com/hirokirigaya) and [Michael](https://github.com/yesmarsh)

## Table of Contents
___
- [Screenshots](#screenshots)
- [Links](#links)
- [The Process](#the-process)
  - [Build With](#build-with)
  - [What we have improved](#what-we-have-improved-and-learned)
- [How do you clip repository](#how-do-you-clip-repository)
- [Portuguese Description](#portuguese)

___
### Screenshots

![interface site desktop](https://i.imgur.com/9ELfpzA.png)

![Interface Products](https://i.imgur.com/kypQTts.png)

![Interface Cart](https://i.imgur.com/j4S3oFv.png)

![Interface Products Mobile](https://i.imgur.com/ua1n0Ho.png)

___
### Links

Page: [Click Me](https://hxz-store.vercel.app/) <br>
Repository: [Click Me](https://github.com/hirokirigaya/hxzstore)<br>
Linkedin Daniel: [Click Me](https://www.linkedin.com/in/daniel-junio-0832481bb/) <br>
Linkedin Michael: [Click Me](https://www.linkedin.com/in/michael-rodrigues12/)

___

## The process

  Every layout has been made mobile first, we created a database to simulate a real search.

### Build with

- React JS
- Styled Components
- Mirage JS
- Flex Box and Grid
- Semantic HTML5

### What we have improved and learned

  In this project we could improve a lot our Context manipulation, styled components, React components and Hooks, we improved our soft skills and we got some experience as a duo, besides we improved our programming logic.

  ```js
  export const MyProvider = createContext()

  const initialState = {
  cart: {
    cartItems: Cookie.get('cartItems') ? JSON.parse(Cookie.get('cartItems')) : [],
  },
}

```
```js
const Form = styled.form`
  background-color: #1b1b1b;
  font-size: 1rem;
`
```
___
### How do you clip repository

```
git clone https://github.com/hirokirigaya/hxzstore

cd hxzstore

npm install or yarn

npm start / yarn run

```

___

# Portuguese

 Gaming e-commerce, toda interface e linhas de código foram feitas por [Daniel](https://github.com/hirokirigaya) e [Michael](https://github.com/yesmarsh)

## Nosso Progresso 

  Todo layout foi feito mobile first, criamos um banco de dados para simular uma busca real.

## O que nós aprendemos

  Neste projeto pudemos melhorar muito nossa manipulação de Context, styled components, React Components e Hooks, melhoramos nossas soft skills e adquirimos experiência como dupla, além de melhorarmos nossa lógica de programação.