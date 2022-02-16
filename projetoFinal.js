/*
ok > 1 - Variáveis ​​para ativos, os status do personagem (ponto0); OK!
ok > 2 - Perguntas que alteram o status do personagem (1,0 ponto); OK!
ok > 3 - Laço de repetição que determinará os ciclos em que a história vai se passar.
ok > 4 - Determinar o que acontecerá ao final do ciclo e como ficará o status. (1,0 ponto); OK!
ok > 5 - Variável para controle da passagem do tempo (1,0 ponto);
ok > 6 - Variáveis ​​de controle dos status e situações da história (1,0 ponto); OK!
ok > 7 - Condicionais para mudanças variáveis ​​(1,5 ponto); OK!
ok > 8 - Funções para executar cada uma das tarefas (1,5 ponto); OK!
ok > 9 - Conteúdo de condicionais, laços, funções e objetos bem aplicados (2,0 pontos);
*/
const  prompt  =  require ( "prompt-sync" ) ( ) ;
// NOME DO JOGO: A CAÇA DO BRUXO
// Variável para matriz que será apresentada no final com resumo do jogo
var matriz = [];
const counts = {
    countDerBat: 0,
    countVitBat: 0,
    countEmpBat: 0,
    countDias: 0,
    countVitBruxo:0,
    countEmpates:0,
    countVitMonstro:0,
    countDerMonstro: 0,
    countDerBruxo: 0,
};
// Objeto criado com caracteristicas do bruxo
    const bruxo = {
        nome: '',
        vida: 100,
        nivel: 'Salvador',
        humor: ''
    }
// Objetos criados com caracteristicas dos monstros/feras que o bruxo irá enfrentar
        const  demonio  =  {    // objetos criaturas
            nome : 'Sev' ,
            vida : 100
        }
// Função criada para finalizar o jogo.
// Função para combate
function tempo (){
      countTempo
}
function fimDeJogo () {

        // INCLUIR CONDICIONAIS DO FINAL
        
          console.log(`\nOs habitantes de Cartago estão gratos por sua ajuda, grande bruxo
          ${bruxo.nome} ...`);
      
        var jogar = prompt(`Deseja reiniciar o jogo: S - Sim / N - Não: `).toLowerCase();
            while (jogar !== 's' && jogar !== 'n' ) {         
                console.log('\nRESPOSTA INVÁLIDA! Tente novamente...');
                var jogar = prompt(`Deseja reiniciar o jogo: S - Sim / N - Não: `).toLowerCase();
            }
    if (jogar === 's') {
      // Zerando variáveis para reiniciar o  jogo
      var matriz = [];
      const counts = {
          countDerBat: 0,
          countVitBat: 0,
          countEmpBat: 0,
          countDias: 0,
          countVitBruxo:0,
          countEmpates:0,
          countVitMonstro:0,
          countDerMonstro: 0,
          countDerBruxo: 0
        }
      // Objeto criado com caracteristicas do bruxo
          const bruxo = {
              nome: '',
              humor: [''],
              energia: 250,
              nivel: 'Salvador',
          }
// Chamando a function do jogo
                jogo(); 
    }        
                else if (jogar === 'n'){
                    console.log(`\nOs cidadões de Cartago lamentam sua partida, mas\nesperam sua volta em breve...`);
                }
    }
function combate() {
    
    const demonio = {    // objetos criaturas
        nome: [''],
        energia: 300
    }
    // Definindo a quantidade de rodadas
    console.log(`Defina a quantidade de rounds que deseja lutar com dragão.\nMáximo permito 5 rounds!`)
    var rodadas = +prompt(`Digite sua opção: `);
    while (rodadas != 1 && rodadas != 2 && rodadas != 3 && rodadas != 4 && rodadas != 5) {
        console.log('\nEntrada INVÁLIDA! Tente novamente...');
        var rodadas = +prompt(`Máximo permito 5 rounds! Digite sua opção: `);
    }
    // O usuário pressiona qualquer tecla e rola o dado  
    for (i = 1; i <= rodadas; i++) {
        var iniciar = prompt(`Aperte I para iniciar a ${i}ª rodada:  `).toUpperCase();
        while (iniciar != 'I') {
            console.log('\nEntrada INVÁLIDA! Tente novamente...');
            var iniciar = prompt(`Aperte I para iniciar ${i}ª rodada: `).toUpperCase();
        }
        console.log(`\nO poder de ataque de ${demonio.energia} será o número sorteado multiplicado por 5`);
        var opcao = [Math.floor(Math.random() * 10)];
        let resultado = opcao * 5;
        console.log(`\nO número sorteado de ${demonio.energia}: ${opcao}`);
        console.log(`Ele diminuiu: ${resultado} da sua energia`);
        bruxo.energia = bruxo.energia - resultado;
        console.log(`Você agora está com ${bruxo.energia} de energia\n`);
        console.log(`Sua vez... acerte em cheio o dragão com a arma certa! Qual arma deseja usar:
                    1 - Cajado encantado
                    2 - Espada de luz`);
        var arma = +prompt(`Digite sua opção: `);
        while (arma != 1 && arma != 2) {
            console.log(`\nEntrada INVÁLIDA! Tente novamente...
                                        1 - Cajado encantado
                                        2 - Espada de luz`);
            var arma = +prompt(`Digite sua opção: `);
        }
        if (arma == 1) {
            var opcao = [Math.floor(Math.random() * 10)];
            let resultado2 = opcao * 5;
            console.log(`\nO número sorteado foi: ${opcao}`);
            console.log(`Você diminuiu: ${resultado2} de energia do dragão`);
            demonio.energia = demonio.energia - resultado2;
            console.log(`Agora ele está com ${demonio.energia} de energia`);
        }
        else if (arma == 2) {
            var opcao = [Math.floor(Math.random() * 10)];
            let resultado3 = opcao * 6;
            console.log(`\nO número sorteado foi: ${opcao}`);
            console.log(`Você diminuiu: ${resultado3} de energia do dragão`);
            demonio.energia = demonio.energia - resultado3;
            console.log(`Agora ele está com ${demonio.energia} de energia`);
        }
        if (bruxo.energia > demonio.energia) {
            countVitBruxo++;
            countDerMonstro++;
            console.log('Você venceu essa rodada, lançou um poder extremamente potente!\n');
        }
        else if (bruxo.energia < demonio.energia) {
            countVitMonstro++;
            countDerBruxo++;
            console.log('Você perdeu essa rodada, você subestimou a fera! \n');
        }
        else if (bruxo.energia == demonio.energia) {
            countEmpates++;
            console.log('Empate! Você esta subestimando a fera, não iguale seus poderes ao dela!\n');
        }
    
        while (counts.countVitBruxo > counts.countVitMonstro) {
            console.log('PARABÉNS! Você venceu a batalha! Sua fama não é em vão!');
            countVitBat++;
            var continua = prompt(`Deseja reiniciar o jogo: S - Sim / N - Não: `).toLowerCase();
            while (continua !== 's' && continua !== 'n') {
                console.log('\nRESPOSTA INVÁLIDA! Tente novamente...');
                var continua = prompt(`Deseja reiniciar o jogo: S - Sim / N - Não: `).toLowerCase();
            }
            if (continua == 's') {
                console.log(`Vamos para o próximo desafio...`)
            }
            else if (continua == 'n') {
                fimDeJogo();
            }
            else if (countVitBruxo < countVitMonstro) {
                console.log('QUE PENA! Você perdeu a batalha! Esperava mais de você!')
                counts.countDerBat++;
                var continua2 = prompt(`Deseja reiniciar o jogo: S - Sim / N - Não: `).toLowerCase();
                while (continua2 !== 's' && continua2 !== 'n') {
                    console.log('\nRESPOSTA INVÁLIDA! Tente novamente...');
                    var continua2 = prompt(`Deseja reiniciar o jogo: S - Sim / N - Não: `).toLowerCase();
                }
                if (continua2 == 's') {
                    console.log(`Vamos para o próximo desafio...`)
                }
                else if (continua2 == 'n') {
                    fimDeJogo();
                }
            }
        
            else if (countVitBruxo == countVitMonstro) {
                console.log('QUE PENA! Você perdeu a batalha! Esperava mais de você!')
                counts.countEmpBat++;
                var continua3 = prompt(`Deseja reiniciar o jogo: S - Sim / N - Não: `).toLowerCase();
                while (continua3 !== 's' && continua3 !== 'n') {
                    console.log('\nRESPOSTA INVÁLIDA! Tente novamente...');
                    var continua2 = prompt(`Deseja reiniciar o jogo: S - Sim / N - Não: `).toLowerCase();
                }
                if (continua3 == 's') {
                    console.log(`Vamos para o próximo desafio...`)
                }
                else if (continua3 == 'n') {
                    fimDeJogo();
                }
                        
                if (rodadas < 4) {
                    countTempo + 180;
                }
                else if (rodadas > 3) {
                    countTempo + 180;
                }
            }
        }
    }
}           
// Todo o jogo esta dentro dessa função, criamos ela para podermos reiniciar o jo na function fimDeJogo();


    function jogo() {
        // Explicando contexto da história
        console.log(`\nNuma era onde criaturas pervesas e estranhas são o grande terror de pequenos vilarejos,
um Bruxo habilidoso, pode ser a esperança desse povo sofrido. Nessa aventura fantástica,
você será a fé desses pobres cidadãos...\n`);
        // Perguntando ao usuário o nome do bruxo 
        bruxo.nome = prompt(`Qual nome deseja dar ao Bruxo: `).toUpperCase();
        // Explicando a história e objetivo do jogo       
        console.log(`\nOs habitantes da vila de Catargo, convocaram o famoso, misterioso e imbatível exterminador de 
monstros. 
${bruxo.nome}, o bruxo, chegou ao vilarejo às 08:00 horas, numa manhã chuvosa, vendo aquele 
estranho homem chegar, todos foram se aproximando ao seu redor... Para satisfazer a dúvida de todos ele falou:
- Grande bruxo ${bruxo.nome}: - Estou aqui para exterminar as criaturas malignas que estão tirando a paz deste 
lugar. Caçarei e matarei todas os demônios que cruzarem o meu caminho...

Todos ficam em silêncio e o grande bruxo vai se retirando, para iniciar sua caçada.\n`);
        //Iniciando caça;
        console.log(`\nOs seres cruéis que habitam Catargo, se escondem nos lugares que você menos espera

Objetivo do Jogo:
1 - Eliminar os 3 demônios de Catargo.`);
        // Variável criada para o usuário decidir se inicia o jogo ou não;
        demonio.nome = 'Bukava';
        console.log(`\nSua jornada se inicia nas minas de carvão de Catargo... Após uma longa caminhada, você 
            chega as minas... Alguns trabalhadores reclamaram de ruidos vindo da parte 
            mais baixa. Indo cada vez mais adentro, você observa uma luz vermelha vindo
            de uma caverna... E vê um demônio de 3 olhos, é o ${demonio.nome}, ele vê você e a batalha começa.... `);
        combate();
        console.log();
        demonio.nome = 'Cérbero';
        console.log(`\nSaindo da mina de carvão, você decide tomar um ar na floresta. Tenta se conectar
                    com a energia dos 4 elementos para se fortalecer, se recarrega um pouco e resolve voltar para
                    o vilarejo, porém sente algo te observar. Você ao seu redor, mas não vê nada, subtamente percebe 
                    uma sombra caindo caindo do céu, um demônio voador, ${demonio.nome}, ele te ataca e você começa a se defender...`);
        combate();
        console.log();
        demonio.nome = 'Moloch';
        console.log(`\nVocê ja eliminou 2 dos 3 demônios que tomaram a vila. Está exausto, mas decide continuar...
                            Após a batalha inspeciona a floresta para vê se tem algo estranho e não vê nada de anormal.
                            Sai da floresta e imagina onde encontraria o último demônio...
                            Onde você acha que está o último demônio? 
                            - Bosque
                            - Vilarejo`);
        var opniao = prompt(`Digite sua opção: `).toUpperCase();;
        while (opniao != 'BOSQUE' && opniao != 'MINAS' && opniao != 'VILAREJO') {
            console.log(`\nEntrada INVÁLIDA! Tente novamente...
                                    Onde você acha que está o último demônio? 
                                    - Bosque
                                    - Vilarejo`);
            var opniao = prompt(`Digite sua opção: `).toUpperCase();;
        }
        if (opniao == 'BOSQUE') {
            console.log(`Que pena, você errou... E por isso não pode achar o último demônio`);
            fimDeJogo();
        }
        else if (opniao == `VILAREJO`) {
            (`Exatamente... Eles se esconde entre as pessoas da vila, para não ser percebido, mas 
                                            para você o cheiro dele exala como carniça podre. E é atrás desse cheiro que você vai...
                                            Você chegou ja chegou na vila e começa a caça, farejando o cheiro do demônio, chega a um
                                            beco sem saída e vê gotas de sangue, segue os rastros e se depera com a criatura, ${demonio.nome}
                                            está sugando uma cabra, ela se assusta e a batalha começa...`);
            combate();
        }
    }                                                                                  
    jogo();