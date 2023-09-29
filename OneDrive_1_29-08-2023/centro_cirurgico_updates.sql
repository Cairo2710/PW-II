#COMANDO DE ALTERAÇÃO DE DADOS.
UPDATE tbl_medico SET email_medico = 'ana.maria@gmail.com'
WHERE cod_medico = 1;

UPDATE tbl_medico SET nome_medico = 'ANA MARIA CAIRES'
WHERE cod_medico = 1;

#COMANDO DE ALTERAÇÃO DE DADOS COM MAIS DE UM CAMPO.
UPDATE tbl_medico SET 
nome_medico = 'TEST',
email_medico = 'jsilva@gmail.com',
telefone_medico = '3652-7894',
celular_medico = '2587-3214'
WHERE cod_medico = 1;

select * from tbl_medico;