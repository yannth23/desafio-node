# O que é
API responsavel por controlar o cadastro de clientes e seus endereços

# Requisitos
* NodeJs
* MySQL Workbench
* XAMPP

# Como utilizar
* Configurar o banco de dados MySQL no XAMPP com a porta 3306
* Configurar o banco de dados no MySQL Workbench criando a conexão 'desafio' com o usuário 'root' e o password em branco
* Criar o schema do database chamando de 'desafio'  
* Entrar no terminal na pasta raiz do projeto e iniciar o projeto
``` npm init ```
* Instalar os pacotes que estão no package.json
``` npm install ```
* Executar o comando de migration
``` node_modules/.bin/sequelize db:migrate ```
* Executar o projeto
``` node app.js ```
