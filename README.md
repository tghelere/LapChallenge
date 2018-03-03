# LapChallenge

## Como usar?
1. Suba um container no Docker com o Mysql ou MariaDb para o seu banco de dados:
	```console
	$ docker run --name LapChallenge -e MYSQL_ROOT_PASSWORD=root -d mariadb:latest
	```
2. Crie as tabelas com os scripts sql presentes na pasta `server/sql-scripts/`
3. Renomeie o arquivo `server/.env.example` para `server/.env`
4. Preencha o arquivo `.env` da seguinte forma:
	```console
	MYSQL_HOST=172.17.0.2
	MYSQL_USER=root
	MYSQL_PASSWORD=root
	MYSQL_DATABASE=lapchallenge
	MYSQL_TESTS_DATABASE=lapchallenge_tests
	```
	Para saber o IP do seu banco de dados no Docker e poder configurar o MYSQL_HOST do seu `.env` corretamente, execute o comando:
	```concole
	$ docker inspect LapChallenge | grep IPAddress
	```
	No meu caso o retorno foi o IP 172.17.0.2, altere o arquivo.env com o IP que foi retornado para você.

5. Clone este repositório:
	```console
	$ git clone git@github.com:tghelere/LapChallenge.git
	```
6. Baixe as dependências de back e front-end:

	- entre na pasta onde foi baixado o projeto
		```console
		$cd LapChallenge
		```
	- entre na pasta de back-end e faça o download das dependências
		```console
		$ cd server
		$ npm i
		```

	- entre na pasta de front-end e faça o download das dependências
		```console
		$ cd ..
		$ cd client
		$ npm i
		```
7. Para servir a API, execute o seguinte comando na pasta `server/` :
	```console
	$ npm run dev
	```
	- Sua API estará listando em http://localhost:8000/employees/
8. Para servir o SPA, execute o seguinte comando na pasta `client/`:
	```console
	$ npm run dev
	```
	- Sua SPA estará listando em http://localhost:8080/


`...`
