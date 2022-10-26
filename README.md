<h1 align="center">
<img src="https://user-images.githubusercontent.com/60453269/197553620-fdb2ef65-9b3a-4d4d-af41-9ca3d1b856f8.png">
</h1>

<br/>

## `Documentação no Posteman` ➥ [Link](https://documenter.getpostman.com/view/22767800/2s8YCdGuUL#c05a557e-5382-4b06-824f-e4749a76878f)

<br/>

## `Projeto Front-end` ➥ [Link GitHub](https://github.com/MayconCoutinho/Front-end-Shopper)

<h3 align="center">
  🔊 Ative o Som Para Ter Uma Experiência Mais Agradável 😁  <br/>
</h3>

<br>

https://user-images.githubusercontent.com/60453269/197554091-d03eaa76-9acd-4b99-b17a-804a2182339f.mp4


<br/>

<br/>

## ✨ Sobre
Essa API foi desenvolvida para representar a dinâmica básica de um supermercado virtual. Aqui será encontrado três entidades fundamentais para o bom funcionamento de um supermercado: produtos, usuário e carrinho de compra. As funcionalidades básicas encontradas nessa API são: ver os produto e mudar a quantidade de estoque, cadastrar usuário, adicionar, remover e ver produtos dentro do carrinho.   
ﾠ
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

## 💻 Desenvolvedores 

<div align="center"> 

| [<img src="https://user-images.githubusercontent.com/60453269/195920054-f89752fb-2d12-4f54-9985-cff56e07913f.jpg" width=150><br><sub> Maycon Coutinho </sub>](https://www.linkedin.com/in/maycon-coutinho/) | 
|---|
