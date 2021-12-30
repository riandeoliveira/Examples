-- Comando ALTER

-- Cria uma coluna no INÍCIO da tabela.
ALTER TABLE pessoas 
ADD codigo int FIRST;

-- Cria uma coluna no FINAL da tabela.
ALTER TABLE pessoas 
ADD profissao varchar(10);

-- Cria uma coluna na posição seguinte de outra coluna já existente.
ALTER TABLE pessoas 
ADD profissao varchar(20) AFTER nome;

-- Modifica uma coluna (SOBRESCREVE CHANGE).
ALTER TABLE pessoas
MODIFY profissao varchar(30);

-- Renomeia uma coluna e a modifica (SOBRESCREVE MODIFY).
ALTER TABLE pessoas
CHANGE profissao prof varchar(20);

-- Renomeia uma tabela.
ALTER TABLE pessoas
RENAME TO gafanhotos;

-- Adiciona uma chave primária.
ALTER TABLE pessoas
ADD PRIMARY KEY (id);