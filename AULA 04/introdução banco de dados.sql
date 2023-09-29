create database centro_cirurgico;
use centro_cirurgico;

create table tbl_especialidade(
	cod_especialidade INT(10) unsigned primary key,
    nome_especialidade varchar(100) not null
);

describe tbl_especialidade;