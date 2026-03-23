CREATE DATABASE IF NO EXISTS juncoes;
use juncoes;

create table if not exists bebidas (
	id_bebida int unsigned not null primary key auto_increment,
   bebida    varchar(10),
   descricao varchar(20)
);
insert into bebidas values(null, "🧉", "Água Coco");
insert into bebidas values(null, "🧋", "Suco");
insert into bebidas values(null, "🥤", "Refrigerante");
-- insert into bebidas values(null, "🍨", "Sorvete");



create table if not exists comidas (
	id_comida  int unsigned not null primary key auto_increment,
   comida    varchar(20),
   descricao varchar(20),
   id_bebida int unsigned,
   foreign key(id_bebida) references bebidas(id_bebida)
);
insert into comidas values(null, "🍔", "Hamburguer", 1);
insert into comidas values(null, "🍱", "Com. Japonesa", null);
insert into comidas values(null, "🥪", "Sanduíche", 2);
-- insert into comidas values(null, "🍕", "Pizza", 2);



/*
1) Cross Join -> Cruza dados (produto cartesiano)
*/
SELECT * FROM comidas
CROSS JOIN bebidas;


/*
2) Inner Join -> Intersecção das tabelas
*/
SELECT c.comida AS Comida, c.descricao, b.bebida AS Bebida, b.descricao FROM comidas c
INNER JOIN bebidas b 
ON c.id_comida = b.id_bebida
-- WHERE c.id_bebida = b.id_bebida
-- USING(id_bebida)
;


/*
2) Left (outer) JOIN -> Todas as da esquerda que independente de ter refêrencia na da direita
*/
SELECT * FROM bebidas
LEFT JOIN comidas
USING (id_bebida);


/*
2) Right (outer) JOIN -> Todas as da direita que independente de ter refêrencia na da esquerda
*/
SELECT * FROM bebidas
RIGHT JOIN comidas
USING (id_bebida);


/*
2) FULL JOIN -> Left + Right JOIN
*/
SELECT * FROM bebidas LEFT JOIN comidas USING (id_bebida)
UNION
SELECT * FROM bebidas RIGHT JOIN comidas USING (id_bebida);

SELECT * FROM comidas c FULL JOIN bebidas b; -- Esse comando não existe no MySQL
-- O UNION do Left e do Right é uma alternativa








