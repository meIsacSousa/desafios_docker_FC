## Desafio Node + Nginx

### Para iniciar a aplicação

``` bash
    docker-compose up -d
```
Aplicação estará acessível através da porta 8080.

### Ajuste planejado

Foi incluído restart nos containers do node e do Nginx como uma politica de retry em relação ao banco de dados que leva mais tempo para ser iniciado, uma previsão de ajuste é a inclusão do wait-for-it para que o container inicie apenas após o mysql ficar "ready to connections"
