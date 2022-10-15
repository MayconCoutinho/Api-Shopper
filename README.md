# Api-Shopper:

<h1 align="center">
<img width=200 src="https://user-images.githubusercontent.com/60453269/196004447-1746c4f2-dba8-40fd-8fa5-1f24a3ea3f4a.png">
</h1>

## ✨ Sobre
Essa API foi desenvolvida para representar a dinâmica básica de um supermercado virtual. Aqui será encontrado três entidades fundamentais para o bom funcionamento de um supermecado: produtos, usuario e carrinho de compra. As funcionalidades básicas encontradas nessa API são: ver os produto e mudar a quantidade de estoque, cadastrar usuario e adicionar, remover e ver produtos dentro do carrinho.   
ﾠ
## 🚩 As funcionalidades básicas da API são:

- → Pegar todos os produtos
- → Pegar o id do usuario atraves do nome 
- → Pegar os produtos dentro do carrinho do usuario
- → Pegar a soma de todos os item do usuario
- → Adicionar produtos dentro do carrinho 
- → Adicionar um novo usuario 
- → Mudar a quantidade de um item dentro do carrinho
- → Mudar a quantidade de um produto dentro do estoque 
- → Deletar um produto dentro do carrinho

## 🎒 Tabelas MySQL

<h1 align="center">
<img width=1000 src="https://user-images.githubusercontent.com/60453269/195916129-94e769b1-aa73-413e-ab8b-5b0998095b73.png">
</h1>

## 🍉🍊🥝 Produtcs
Nessa tabela possui todos os produtos cadastrados pela empresa.

* Possuir:

- id: Identificador único 
- name: Nome do produto
- price: Preço do produto
- qty_stoke: A quantidade em estoque do produto

## 👨‍ User
Aqui é onde fica todos os dados do usuario

* Possuir:

- id: identificador único gerado pela própria aplicação
- name: nome da pessoa
- data_nasc: Data de entrega 

## 👨‍🛒🍉🍊🥝 Produtcs_user
Nessa tabela possui todos os produtos cadastrados pelo usuario.

* Possuir:

- id: identificador único gerado pela própria aplicação
- id_product: relação entre product_user e produtos
- id_user: relação entro product_user e usuario
- quantity: A quantidade de itens dentro do carrinho

## 🚀 Tecnologias/Tools
- Nodejs
- Express/Cors
- MySQL - banco relacional
- Typescript
- NPM

## 💻 Desenvolvedores 

<div align="center"> 

| [<img src="https://user-images.githubusercontent.com/60453269/195920054-f89752fb-2d12-4f54-9985-cff56e07913f.jpg" width=150><br><sub> Maycon Coutinho </sub>](https://www.linkedin.com/in/maycon-coutinho/) | 
|---|
