-- Adiciona uma chave estrangeira, indicando sua referência.
ALTER TABLE gafanhotos
ADD FOREIGN KEY (cursopreferido)
REFERENCES cursos(idcurso);

-- A chave estrangeira em gafanhotos recebe um valor de acordo com a chave primária da tabela cursos.
UPDATE gafanhotos
SET cursopreferido = '6'
WHERE id = '1';

-- Retorna os alunos e seus cursos preferidos. O AS pode ser usado para otimizar espaço.
SELECT g.nome, g.cursopreferido, c.nome, c.ano 
FROM gafanhotos AS g JOIN cursos AS c
ON c.idcurso = g.cursopreferido;

-- Retorna todos os alunos, incluindo os que não preferem curso nenhum.
SELECT g.nome, g.cursopreferido, c.nome, c.ano 
FROM gafanhotos AS g LEFT JOIN cursos AS c
ON c.idcurso = g.cursopreferido;

-- Retorna todos os cursos que nenhum aluno prefere.
SELECT g.nome, g.cursopreferido, c.nome, c.ano 
FROM gafanhotos AS g RIGHT JOIN cursos AS c
ON c.idcurso = g.cursopreferido;

-- 
CREATE TABLE gafanhoto_assiste_curso (
    id int NOT NULL AUTO_INCREMENT,
    data date,
    idgafanhoto int,
    idcurso int,
    PRIMARY KEY (id),
    FOREIGN KEY (idgafanhoto) REFERENCES gafanhotos(id),
    FOREIGN KEY (idcurso) REFERENCES cursos(idcurso)
) DEFAULT CHARSET = utf8;