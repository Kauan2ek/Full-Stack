CREATE DATABASE loja;
USE loja;
-- DROP TABLE produtos, categorias;
CREATE TABLE IF NOT EXISTS categorias (
	id_categoria INT UNSIGNED NOT NULL AUTO_INCREMENT,
	nome 	  		 VARCHAR(30),
	
	CONSTRAINT pk_categoria PRIMARY KEY (id_categoria)
)

INSERT INTO categorias VALUES (NULL, 'Eletrônicos');
INSERT INTO categorias VALUES (NULL, 'Móveis'); 

CREATE TABLE IF NOT EXISTS produtos (
	id_produto   INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_categoria INT UNSIGNED DEFAULT 2,
	nome 		    VARCHAR(30),
	preco 		 DECIMAL(10,2),
	
	FOREIGN KEY (id_categoria) REFERENCES categorias (id_categoria)
	 -- cascade  -> propaga as alterações feitas
	 -- set null -> configurar nulo para o item removido
	 -- set default 10 -> configura valor padrão
	 ON DELETE SET null
	 ON UPDATE CASCADE
);

INSERT INTO produtos VALUES (NULL, NULL, 'Notebook', 1000);
INSERT INTO produtos VALUES (NULL, 2, 'Mesa de jantar', 900);

SELECT * FROM categorias; -- Tabela pai
SELECT * FROM produtos; -- Tabela filha


DELETE FROM categorias WHERE id_categoria = 2;
UPDATE categorias SET id_categoria = 3 WHERE id_categoria = 1;










-- restrict: padrão - preserva a integridade relacional
/* cascade: propaga as alterações. 
   Quando remove na tabela pai, todos os registros das tabelas filhas são removidos
	   (a linha INTEIRA é removida!),
	se atualizada a coluna, é atualizado em todas as linhas (ex: 1 -> 3)
*/