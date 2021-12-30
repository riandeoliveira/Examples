-- Constraints são regras pré-definidas para dados durante a criação ou alteração de uma tabela.

-- Sintaxe.
CREATE TABLE tableName (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ....
);

-- Exemplo.
CREATE TABLE tableName (
    id int AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    nacionalidade varchar(20) DEFAULT 'Brasil'
);