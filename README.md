<p align="center">
  <img src="https://github.com/MayconCoutinho/Rede-Social-API/assets/60453269/515d2343-8050-457b-86bc-1a98067b31d2" alt="Logo" width="150" height="160" />
</p>

<h1 align="center"> Shopper </h1>

<a id="Sumário"></a>


<p align="center">
  <b> Back-end  </b></br>
  <sub> Api desenvolvida para atender as demandas de um teste tecnico da Shopper.com.br 
  <sub>
</p>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<p align="center">
  <a href="#Introdução"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultados"> 🚀 Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependências"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Ideias">💡 Possíveis Melhorias </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Creditos"> 🏆 Créditos </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>


<br /> 


<a id="Introdução"></a>
## 🧩 Introdução 

  ***⠀⠀⠀⠀Essa API foi desenvolvida para representar a dinâmica básica de um supermercado virtual. Aqui será encontrado três entidades fundamentais para o bom funcionamento de um supermercado: produtos, usuário e carrinho de compra. As funcionalidades básicas encontradas nessa API são: ver os produto e mudar a quantidade de estoque, cadastrar usuário, adicionar, remover e ver produtos dentro do carrinho.***

<br/>

## `Documentação no Posteman` ➥ [Link](https://documenter.getpostman.com/view/22767800/2s8YCdGuUL#c05a557e-5382-4b06-824f-e4749a76878f)

<br/>

## `Projeto Front-end` ➥ [Link GitHub](https://github.com/MayconCoutinho/Front-end-Shopper)

<br/>
  
  <br/>


<a id="Resultados"></a>
## 🚀 Resultados 
  > Todos os resultados foram alcançados com sucesso. De modo geral são esses os resultados de cada requisição. 

<br/>

## 🚩 As funcionalidades básicas da API são:

- Pegar todos os produtos
- Pegar o id do usuario atraves do nome 
- Pegar os produtos dentro do carrinho do usuario
- Pegar a soma de todos os item do usuario
- Adicionar produtos dentro do carrinho 
- Adicionar um novo usuario 
- Mudar a quantidade de um item dentro do carrinho
- Mudar a quantidade de um produto dentro do estoque 
- Deletar um produto dentro do carrinho

<br/>


## 🎒 Tabelas MySQL

<h1 align="center">
<img width=1000 src="https://user-images.githubusercontent.com/60453269/195916129-94e769b1-aa73-413e-ab8b-5b0998095b73.png">
</h1>

<br/>

# 🍉🍊🥝 Produtcs
## Nessa tabela possui todos os produtos cadastrados pela empresa.
### 🎲 No Banco de dados o produto Possuir:
- id: Identificador único
- name: Nome do produto
- price: Preço do produto
- qty_stoke: A quantidade em estoque do produto

## ⛵ Endpoints 

<br/> 

## `GET` All Products

```URL
http://localhost:3003/shopper/products
```
### 🎯 PEGAR TODOS OS PRODUTOS CADASTRADO NO BANCO DE DADOS.

<br/> 

## `PUT` Products Quantity

```URL
http://localhost:3003/shopper/products/:id/:quantity

```
### 🎯 MUDA A QUANTIDADE DE ESTOQUE DE UM DETERMINADO PRODUTO.

<br/> 

### PATH VARIABLES

- id  =  Indentificador do produto
- quantity = Quantidade 


<br/> 

# 👨‍ User
## Aqui é onde fica todos os dados do usuário
### 🎲 No Banco de dados o user Possuir:
- id: identificador único gerado pela própria aplicação
- name: nome da pessoa
- data_nasc: Data de entrega

## ⛵ Endpoints 

<br/> 

## `POST` Create User and Delivery Date

```URL
http://localhost:3003/shopper/user
```
### 🎯 CRIAR UM USUÁRIO COM A DATA DE ENTREGA DO PEDIDO.

```JSON
{
    "name": "user",
    "delivery_date": "2022-10-01"
}
```

<br/> 

## `GET` Id User

```URL
http://localhost:3003/shopper/user/:name

```
### 🎯 PEGA O ID DO USUÁRIO QUE É GERADO PELA APLICAÇÃO, APÓS A CRIAÇÃO DE UM USUÁRIO.

<br/>

### PATH VARIABLES

- name = nome do usuario 

<br/>

## `GET` Cart User

```URL
http://localhost:3003/shopper/user/products/:name
```
### 🎯 PEGA TODOS OS PRODUTOS QUE USUÁRIO CADASTROU NO CARRINHO.

<br/>

### PATH VARIABLES

name = id do usuario gerado pela aplicação 

<br/>

## `GET` Price Total

```URL
http://localhost:3003/shopper/user/product/total/price/:id
```
### 🎯 Pega a soma total de todos item que tem dentro do carrinho. 

<br/>

### PATH VARIABLES

id = id do usuario gerado pela aplicação 

<br/>

# 👨‍🛒🍉🍊🥝 Products User
## Nessa tabela possui todos os produtos cadastrados pelo usuário.
### 🎲 No Banco de dados o Products User Possuir:
- id: identificador único gerado pela própria aplicação
- id_product: relação entre product_user e produtos
- id_user: relação entro product_user e usuario
- quantity: A quantidade de itens dentro do carrinho

<br/>

## ⛵ Endpoints 

<br/> 

## `POST` Put in Cart 

```URL
http://localhost:3003/shopper/user/products
```
### 🎯 CADASTRA UM DETERMINADO PRODUTO NO CARRINHO.

```JSON
{
    "id_product": 45,
    "id_user": "9313154f-4bbf-454d-a0dd-7cbe2eed465d"
}
```

<br/> 

## `PUT` Quantity of Item in Cart

```URL
http://localhost:3003/shopper/user/:id/:quantity

```
### 🎯 MUDA A QUANTIDADE DE UM DETERMINADO PRODUTO QUE ESTAR NO CARRINHO.

<br/> 

### PATH VARIABLES

id = id do produto 
quantity = quantidade desejada


<br/> 

## `DEL` Remove Item From Cart

```URL
http://localhost:3003/shopper/user/products/:id

```
### 🎯 REMOVE UM DETERMINADO PRODUTO DO CARRINHO.

<br/> 

### PATH VARIABLES

id = id do produto 

<br/> 

## 🚀 Tecnologias/Tools
- Nodejs
- Express/Cors
- MySQL - banco relacional
- Typescript
- NPM

<br/>

<a href="#Sumário"> 📖 Volta ao Sumário </a>

<br /> 

<a id="Dependências"></a>
## 🧪 Dependências
> Requisitos para rotar o codigo...

<br/>

## `📖 Instalação` 
  
  
 <br /> 

> Caso tenha Git basta da git clone, caso não tenha baixe o projeto completo em dowlon

```BASH
git clone https://github.com/MayconCoutinho/Api-Shopper

```

<br /> 

> Caso já tenha o Node em sua maquina basta instalar o projeto com npm i

```BASH
npm i 
```

<br /> 

> OBS - Muito importante, caso não tenha um banco de dados MySQL disponivel, não vai da para rodar o projeto, pois o projeto conecta diretamente com o banco de dados
> sendo assim crie um arquivo ".env" para por os dados do MySQL.


```BASH

DB_HOST = Dados MySQL
DB_USER = Dados MySQL
DB_PASSWORD = Dados MySQL
DB_SCHEMA = Dados MySQL

```

<br /> 

## `📖 Scripts` 

```JSON
  "scripts": {
   "start": "node ./build/src/index.js",
    "migrations": "npx prisma migrate dev",
    "build": "tsc",
    "dev": "ts-node-dev ./src/server.ts ",
    "test": "vitest",
    "commit": "git-cz"
  }

```
<br/>

## `📖 Dependencies` 

```JSON
  "dependencies": {
   "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.1",
    "knex": "^2.3.0",
    "mysql": "^2.18.1",
    "swagger-ui-express": "^4.6.3",
    "uuid": "^9.0.0"
  }

```

<br /> 

## `📖 devDependencies` 


```JSON
  "devDependencies": {
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.14",
    "@types/knex": "^0.16.1",
    "@types/node": "^18.8.2",
    "@types/swagger-ui-express": "^4.1.3",
    "@types/uuid": "^8.3.4",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.8.4"
  }

```
<br/>

<a href="#Sumário"> 📖 Volta ao Sumário </a>

<br /> 

<a id="Ideias"></a>
## 💡 Possíveis Melhoras
> Possíveis melhorias no código e no projeto, caso queira voltar e melhorá lo.

<br /> 

- [ ] ***- *** 
- [x] ***- *** 

<br/>

<a href="#Sumário"> 📖 Volta ao Sumário </a>

<br /> 

<a id="Creditos"></a>
## 🏆 Créditos
> Todo o projeto foi feito por...
  
<br /> 

<div > 

| [<img src="https://user-images.githubusercontent.com/60453269/217899761-dc2d4e4b-3336-419d-9076-79304290aa0a.png" width=300><br><sub> Maycon Coutinho </sub>](https://www.linkedin.com/in/maycon-coutinho/) | ***Hello 😃 Se você chegou até aqui, acredito que gostou do meu projeto, nesse caso temos algo em comum, sendo assim que tal conversamos um pouco? Meu chama no linkedin 😁*** | 
|---|---|

</div> 
  
<br /> 
