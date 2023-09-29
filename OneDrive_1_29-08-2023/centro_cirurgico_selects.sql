select * from tbl_especialidade;
select * from tbl_medico;
select * from tbl_agenda;
select * from tbl_paciente;
select * from tbl_sala;

select nome_medico, email_medico, celular_medico
from tbl_medico;

select nome_medico, email_medico, celular_medico
from tbl_medico order by nome_medico asc;

select nome_paciente, celular_paciente
from tbl_paciente where cod_paciente >= 3
order by nome_paciente asc;

select nome_medico, celular_medico, nome_especialidade
from tbl_medico
inner join tbl_especialidade
on tbl_medico.cod_especialidade = tbl_especialidade.cod_especialidade;

select 	nome_medico, 
		celular_medico, 
        nome_especialidade
from tbl_medico as tm
inner join tbl_especialidade as te 
on tm.cod_especialidade = te.cod_especialidade;

select 	numero_sala, nome_especialidade
from tbl_sala as ts
inner join tbl_especialidade as te
on ts.cod_especialidade = te.cod_especialidade;

select numero_sala, nome_medico, nome_paciente, data_cirurgia, status_cirurgia
from tbl_agenda as ta
inner join tbl_medico as tm
inner join tbl_sala as ts
inner join tbl_paciente as tp
on ta.cod_paciente = tp.cod_paciente and ta.cod_sala = ts.cod_sala and ta.cod_medico = tm.cod_medico;

select * from tbl_agenda;