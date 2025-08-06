// 1. Criação das variáveis principais com let
let nome = "Claudinei do Pneu";
let classe = "Guerreiro das terras da Steam";
let nivel = 99;
let vida = 85;
let ouro = 120;
let xp = 3000;
let  manaAtual = 150;
let manaMaxima = 150;
let experiencia = 350;
let vidaMaxima = 100;
let forca = 90;
let defesa = 150;
let agilidade = 55;
let combatesVencidos = 0;

// 2. Definição das constantes mágicas com const
const NOME_ARMA = "Espada CSS";
const DANO_BASE = 100;
const NOME_ARMADURA = "Capa de JavaScript";
const DEFESA_BASE = 100;

// 3. Aplicação de operadores de atribuição diferentes
xp += 200; // ganhou 200 pontos de Back-end XP
ouro -= 100; // comprou um gift card por 100 moedas de bitcoin
vida += 50; // usou o gift card e recuperou 50 pontos de vida
let danoAtualizado = DANO_BASE * 2; // arma foi encantada com o poder do Deep Seek e o dano foi dobrado

// 4. Cálculo de atributos finais
let ataqueTotal = nivel + danoAtualizado;
let defesaTotal = DEFESA_BASE + (nivel / 2);

// 5. Avaliação de prontidão com operadores lógicos
let vidaSuficiente = vida > 80;
let ataqueForte = ataqueTotal > 70;
let nivelAvancado = nivel >= 20;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado)

// 6. Geração da lore do personagem (narrativa)
console.log("Na terra perdida dos campos de gamers , nasce um novo guerreiro...");
console.log(`${nome}, o ${classe}`);
console.log(`Portando sua ${NOME_ARMA} e vestindo a ${NOME_ARMADURA},`);
console.log(`Com nível ${nivel}, possui um ataque total de ${ataqueTotal}, podendo destruir qualquer Cracker do seu caminho.`);
console.log(`Suas defesas feitas de ${NOME_ARMADURA} somam ${defesaTotal} pontos, sendo impenetráveis contra Devs avançados.`);
console.log(`Após intensos treinos com o mago do HTML e batalhas contra o Rei do dominio GITHUB: Copilot, agora tem ${vida} pontos de vida.`);
console.log("Restaurado e pronto para a batalha pelo poder do Deep Seek, Claudinei do Pneu sente a brisa suave do javaScript soar pelo seu rosto, isto lhe enche de determinação, (determinação + 1000).");
console.log(`Vida suficiente para enfrentar desafios feitos pelos DEVS lendários? ${vidaSuficiente}`);
console.log(`Pode enfrentar o Guardião do Deep Seek? ${podeEnfrentarGuardiao}`);
console.log("A saga está apenas começando...");


// Estado atual da história
let localAtual = (`O grande guerreiro ${nome}, estava na terra perdida dos campos de gamers. Um lugar onde gamers perdidos apodrecem em meio a códigos de jogos mal feitos, crackers, vírus e jogos de ps2 da feira.`);
let missaoAtual = "Sua missão no nível um era derrotar o guardião poderoso do Deep Seek, e toma-lo tal poder para si mesmo, aprimorando suas habilidades e poderes.";

// Prólogo
console.log(`${nome} teve diversos desafios na terra dos gamers perdidos, lutou contra oponentes poderosos como o Copilot e Guardião do Deep Seek.`);
console.log(`Após essas lutas, ${nome} adquiriu um poderoso código: Deep Seek, onde ele pode auxiliar ${nome} em suas decisões e missões, além de restaurar seu estado atual, para que ele esteja preparado para o que estar por vir.`);
console.log(`Entretanto, ${nome} não esperava o mal que estava se aproximando: Um antigo amigo cujo nome era FORTAN, Fortan foi a primeira linguagem de programação, possui um poder inestimável, que nosso ${classe} vai ter que enfrentar.`);

// CAPÍTULO 1: Condicionais Simples na narrativa
console.log("🌅 CAPÍTULO 1: A primeira Linguagem de Programação");
console.log(`Com a ameaça se aproximando da terra dos gamers perdidos, ${nome} está em dúvida sobre qual caminho ele deverá seguir...`);
console.log(`${nome} precisa avaliar seu nível, vida e recursos antes de enfrentar FORTAN.`);

// Condições Simples
if (nivel < 55) {
    console.log(` O level do ${nome} é baixo, ele deve treinar e derrotar mais inimigos antes de enfrentar FORTAN.`);
} else if (vida < 90) {
    console.log(` Vida baixa! ${nome} deve procurar um glamBurguer para recuperar a vida!`);	
} else {
    console.log(`${nome} está preparado para enfrentar o antigo amigo FORTAN!, mas ele precisa de mais recursos para a batalha.`);
}

