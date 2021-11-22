# DIA 3.3, 3.4

Primeiramente, vale ressaltar que juntei os exercícios dos dias 3.3 e 3.4 em uma mesma pasta para facilitar a compreensão, já que eles estavam relacionados. 

Os exercícios desse dia tiveram como foco o aprendizado dos principais comandos utilizados no linux. Aprendi a criar pastas, copiar e renomear arquivos, alterar permissões, finalizar processos, entre outras coisas. Todas as pastas presentes nesse diretório foram criadas e editadas utilizando o terminal.

## Exercícios do dia 3.3

#### Parte 1:
1- Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
2- Crie um arquivo de texto com o nome trybe.txt .
3- Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
4- Renomeie o arquivo trybe.txt .
5- Dentro de unix_tests , crie um novo diretório chamado backup .
6- Mova o arquivo trybe_backup.txt para o diretório backup .
7- Dentro de unix_tests , crie um novo diretório chamado backup2 .
8- Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .
9- Apague a pasta backup .
10- Renomeie a pasta backup2 para backup .
11- Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
12- Apague o diretório backup .
13- Limpe o terminal.

 Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
14- Mostre na tela as 5 primeiras skills do arquivo skills.txt .
15- Mostre na tela as 4 últimas skills do arquivo skills.txt .
16- Apague todos os arquivos que terminem em .txt .

#### Parte 2:
1- Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
Copiar

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

2- Mostre todo o conteúdo do arquivo countries.txt na tela.
3- Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia .
4- Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .
5- Busque por Brazil no countries.txt .
6- Busque novamente por brazil , mas agora utilizando o lower case .

Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

7- Busque pelas frases que não contenham a palavra fox .
8- Conte o número de palavras do arquivo phrases.txt .
9- Conte o número de linhas do arquivo phrases.txt .
10- Crie os arquivos empty.tbt e empty.pdf .
11- Liste todos os arquivos do diretório unix_tests .
12- Liste todos os arquivos que terminem com txt .
13- Liste todos os arquivos que terminem com tbt ou txt .
14- Acesse o manual do comando ls .

## Exercícios do dia 3.4

#### Parte 1:
1- Navegue até a pasta unix_tests ;
2- Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , 3- Unix e Bash , um em cada linha.
4- Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 
5- Conte quantas linhas tem o arquivo skills2.txt .
6- Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.
7- Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.
6- Conte o número de linhas que contêm as letras br .
8- Conte o número de linhas que não contêm as letras br .
9- Adicione dois nomes de países ao final do arquivo phrases2.txt .
10- Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
11- Ordene o arquivo bunch_of_things.txt .
#### Parte 2:
1- Navegue até a pasta unix_tests ;
2- Rode o comando ls -l e veja quais as permissões dos arquivos;
3- Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;
4- Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;
5- Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .
#### Parte 3:
1- Liste todos os processos;
2- Agora use o comando sleep 30 & ;
3- Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;
4- Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;
5- Crie um processo em background que rode o comando sleep por 300 segundos.
6- Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
(Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.)
7- Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.
(Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.)
8- Retome a execução do processo sleep 100 em background com o comando bg .
9- Termine a execução de todos os processos sleep (mate os processos) .




