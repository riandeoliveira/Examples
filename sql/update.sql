-- Comando UPDATE.

-- Altera dados de um registro na tabela.
UPDATE cursos
SET nome = 'PHP', ano = '2015'
WHERE id = '4'
LIMIT 1;