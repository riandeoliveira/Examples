-- Comando SELECT.

-- Retorna todas as colunas com seus registros e dados, de uma tabela.
SELECT * FROM cursos;

-- Retorna a tabela em ordem de A-Z e CRESCENTE (seja para números e letras).
SELECT * FROM cursos
ORDER BY nome;

-- Retorna a tabela em ordem de Z-A e DECRESCENTE.
SELECT * FROM cursos
ORDER BY nome DESC;

-- Retorna colunas específicas.
SELECT ano, nome, carga FROM cursos
ORDER BY ano;

-- Retorna as linhas de acordo com o parâmetro estabelecido.
SELECT * FROM cursos
WHERE ano = '2016'
ORDER BY nome;

-- Retorna as linhas de acordo com o operador relacional.
SELECT nome, descricao, ano FROM cursos
WHERE ano <= '2015'
ORDER BY ano, nome;

-- Retorna as linhas onde o parâmetro especificado está entre um dado registrado e o outro.
SELECT nome, ano FROM cursos
WHERE ano BETWEEN 2014 AND 2016
ORDER BY ano DESC, nome;

-- Retorna APENAS as linhas onde os parâmetros informados estão presentes.
SELECT nome, descricao, ano FROM cursos
WHERE ano IN (2014, 2016)
ORDER BY ano;

-- Retorna as linhas de acordo com o operador lógico AND (E).
SELECT nome, carga, totaulas FROM cursos
WHERE carga > 35 AND totaulas < 30
ORDER BY carga, totaulas;

-- Retorna as linhas de acordo com o operador lógico OR (OU).
SELECT nome, carga, totaulas FROM cursos
WHERE carga > 35 OR totaulas < 30
ORDER BY carga, totaulas;

-- Retorna as linhas que COMEÇAM com o parâmetro especificado.
SELECT * FROM cursos
WHERE nome LIKE 'A%';

-- Retorna as linhas que TERMINAM com o parâmetro especificado.
SELECT * FROM cursos
WHERE nome LIKE '%A';

-- Retorna as linhas que CONTENHAM o parâmetro especificado em QUALQUER lugar.
SELECT * FROM cursos
WHERE nome LIKE '%A%';

-- Retorna as linhas que NÃO CONTENHAM o parâmetro especificado em lugar NENHUM.
SELECT * FROM cursos
WHERE nome NOT LIKE '%A%';

-- Retorna as linhas onde o nome começa com P, seguido de 2 caracteres, mais um t e algo mais.
SELECT * FROM cursos
WHERE nome LIKE 'P__t%';

-- Retorna as pessoas que contenham o sobrenome Silva.
SELECT * FROM gafanhotos
WHERE nome LIKE '%_silva%';

-- Retorna APENAS UMA de cada ocorrência de nacionalidades, por exemplo.
SELECT DISTINCT nacionalidade FROM gafanhotos;

-- Retorna a QUANTIDADE de itens estabelecidos.
SELECT COUNT(*) FROM cursos
WHERE carga > 40;

-- Retorna a MAIOR ocorrência de um item.
SELECT MAX(carga) FROM cursos;

-- Retorna a MENOR ocorrência de um item.
SELECT MIN(carga) FROM cursos;

-- Retorna a SOMATÓRIA de uma coluna numerada.
SELECT SUM(totaulas) FROM cursos;

-- Retorna a MÉDIA de uma coluna numerada.
SELECT AVG(totaulas) FROM cursos;

-- Retorna os dados agrupados de acordo com suas semelhanças.
SELECT totaulas, COUNT(totaulas) FROM cursos
GROUP BY totaulas
ORDER BY totaulas;

-- Retorna um agrupamento especificado, semelhante ao WHERE.
SELECT carga, COUNT(nome) FROM cursos
GROUP BY carga
HAVING COUNT(nome) > 3;