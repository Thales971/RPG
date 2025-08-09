// 1. Criação das variáveis principais com let
let nome = "Claudinei do Pneu";
let classe = "Guerreiro das terras da Steam";
let nivel = 99;
let vida = 85;
let ouro = 120;
let xp = 3000;
let manaAtual = 150;
let manaMaxima = 150;
let experiencia = 350;
let vidaMaxima = 100;
let forca = 90;
let defesa = 150;
let agilidade = 55;
let combatesVencidos = 0;
let Local = "Terra Perdida dos Campos de Gamers";
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
let defesaTotal = DEFESA_BASE + nivel / 2;

// 5. Avaliação de prontidão com operadores lógicos
let vidaSuficiente = vida > 80;
let ataqueForte = ataqueTotal > 70;
let nivelAvancado = nivel >= 20;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

// 6. Geração da lore do personagem (narrativa)
console.log(`Na ${Local} , nasce um novo guerreiro...`);
console.log(`${nome}, o ${classe}`);
console.log(`Portando sua ${NOME_ARMA} e vestindo a ${NOME_ARMADURA},`);
console.log(
  `Com nível ${nivel}, possui um ataque total de ${ataqueTotal}, podendo destruir qualquer Cracker do seu caminho.`
);
console.log(
  `Suas defesas feitas de ${NOME_ARMADURA} somam ${defesaTotal} pontos, sendo impenetráveis contra Devs avançados.`
);
console.log(
  `Após intensos treinos com o mago do HTML e batalhas contra o Rei do dominio GITHUB: Copilot, agora tem ${vida} pontos de vida.`
);
console.log(
  `Restaurado e pronto para a batalha pelo poder do Deep Seek, ${nome} sente a brisa suave do javaScript soar pelo seu rosto, isto lhe enche de determinação, (determinação + 1000).`
);
console.log(
  `Vida suficiente para enfrentar desafios feitos pelos DEVS lendários? ${vidaSuficiente}`
);
console.log(`Pode enfrentar o Guardião do Deep Seek? ${podeEnfrentarGuardiao}`);
console.log("A saga está apenas começando...");

// Estado atual da história
let localAtual = `O grande guerreiro ${nome}, estava na ${Local}. Um lugar onde gamers perdidos apodrecem em meio a códigos de jogos mal feitos, crackers, vírus e jogos de ps2 da feira.`;
let missaoAtual =
  "Sua missão no nível um era derrotar o guardião poderoso do Deep Seek, e toma-lo tal poder para si mesmo, aprimorando suas habilidades e poderes.";

// Prólogo
console.log(
  `${nome} teve diversos desafios na terra dos gamers perdidos, lutou contra oponentes poderosos como o Copilot e Guardião do Deep Seek.`
);
console.log(
  `Após essas lutas, ${nome} adquiriu um poderoso código: Deep Seek, onde ele pode auxiliar ${nome} em suas decisões e missões, além de restaurar seu estado atual, para que ele esteja preparado para o que estar por vir.`
);
console.log(
  `Entretanto, ${nome} não esperava o mal que estava se aproximando: Um antigo amigo cujo nome era FORTAN, Fortan foi a primeira linguagem de programação, possui um poder inestimável, que nosso ${classe} vai ter que enfrentar.`
);

// CAPÍTULO 1: Condicionais Simples na narrativa
console.log("🌅 CAPÍTULO 1: A primeira Linguagem de Programação");
console.log(
  `Com a ameaça se aproximando dav${Local}, ${nome} está em dúvida sobre qual caminho ele deverá seguir...`
);
console.log(
  `${nome} precisa avaliar seu nível, vida e recursos antes de enfrentar FORTAN.`
);

// Condições Simples
if (nivel < 55) {
  console.log(
    ` O level do ${nome} é baixo, ele deve treinar e derrotar mais inimigos antes de enfrentar FORTAN.`
  );
} else if (vida < 90) {
  console.log(
    ` Vida baixa! ${nome} deve procurar um glamBurguer para recuperar a vida!`
  );
} else {
  console.log(
    `${nome} está preparado para enfrentar o antigo amigo FORTAN!, mas ele precisa de mais recursos para a batalha.`
  );
}

// CAPÍTULO 2: Condicionais Compostas
console.log("🛡️ CAPÍTULO 2: Tempos Ruins");
console.log(
  `Antes de enfrentar FORTAN, ${nome} precisa decidir como usar seus recursos, para poder comprar os melhores equipamentos.`
);
console.log(
  `${nome} decide ir até o local com os melhores equipamentos: Mercadinho Big bommmm.`
);

console.log(
  `${nome} chega ao Mercadinho Big bommmm e encontra várias opções de equipamentos.`
);

if (ouro >= 50) {
  console.log(
    "💰 O guerreiro usa ouro para adquirir uma poderosa poção: Red Bull, uma bebida que foi deixado pelo humano mais forte que ja pisou na terra dos gamers perdidos."
  );
  vida += 20; // Aumenta vida
  manaAtual += 30; // Aumenta mana
  forca += 100; // Aumenta força
  agilidade += 100; // Aumenta agilidade
} else {
  console.log("🛡️ Sem ouro, ele deve usar suas habilidades em codigos!");
  defesa += 50; // Aumenta defesa
}
console.log(
  `${nome} está pronto para a batalha!, o ${classe} então parte para a localização do guardião FORTAN, o ${classe} sente a adrenalina subir, e o coração acelerar, ele sabe que essa batalha não será fácil.`
);
// Preparação para a batalha
console.log(
  `${nome} corre para o campo de batalha, pronto para enfrentar FORTAN.`
);

// CAPÍTULO 3: Condicionais Encadeadas
console.log("⚔️ CAPÍTULO 3: Fortan");
let poderInimigo = 100;
let vidaAtual = vida;
if (vidaAtual <= 90) {
  console.log(` Com pouca vida! ${nome} deve usar um item de cura!`);
  vida += 20; // Cura
  poderInimigo -= forca * 2; // Ataque contundente
} else if (manaAtual >= 50) {
  console.log(
    ` ${nome} usa um poderoso feitiço de java!, que quebra as defesas de FORTAN!`
  );
  console.log(` A barreira de FORTAN foi reduzida!`);
  manaAtual -= 50; // Usa mana
  poderInimigo -= forca * 3; // Ataque mágico
} else {
  console.log(` ${nome} ataca com sua ${arma}!`);
  poderInimigo -= forca; // Ataque normal
}

// Resultado da batalha
if (poderInimigo <= 0) {
  console.log(
    ` Vitória! ${nome} derrotou FORTAN!, com as defesas de Fortan reduzidas, ${nome} da um ataque final e derrota Fortan`
  );
  experiencia += 1000; // Ganha experiência
  combatesVencidos++;
} else {
  console.log(` Derrota... ${nome} não conseguiu vencer FORTAN.`);
}

// Epílogo
console.log(
  `A aventura de ${nome} está longe de acabar. Novas batalhas e desafios o aguardam na ${Local}!`
);

//CONTINUAÇÃO DA SAGA - NÍVEL 3

classe = "CODHUNTER";
nivel = 1000; // Evoluiu após as batalhas anteriores!
vidaAtual = 120; // Vida atual após as batalhas
vidaMaxima = 200; // Vida máxima após as batalhas
experiencia = 1200; // Experiência adquirida após derrotar FORTAN
ouro = 300; // Ouro coletado após derrotar FORTAN

// Inventário do CODHUNTER - primeira coleção
let inventario = ["Red Bull", "Espada Css", "Capa de javaScript"];
let aliados = [
  "Guts",
  "Ichigo",
  "Vacivous",
  "Mohg",
  "Ziegfried",
  "LabubuDiddy",
];
let inimigosEncontrados = [
  "Tung Tung Sahur",
  "Boobie goods",
  "Morango do amor",
  "Receita Federal",
];
let salasCastelo = ["TikTok", "Twitter", "Reddit", "Discord"];
let tesourosColetados = [];

console.log(
  `O ${nome} agora é um ${classe}, com nível ${nivel} e vida máxima de ${vidaMaxima}.`
);
console.log(
  `Após as vitórias dos capítulos anteriores, nosso ${classe} chegou ao castelo da internet Lobotomizada`
);
console.log("Inventário inicial: " + inventario.length + " itens irrados");

//  CAPÍTULO 1: Internet Lobotomizada
console.log("🌐 CAPÍTULO 1: A Internet Lobotomizada");
console.log(
  `Após derrotar FORTAn, ${nome} se depara com um novo desafio: a Internet Lobotomizada, um lugar onde os códigos são confusos e os desafios são infinitos.`
);
console.log(
  `${nome} não sabe a origem desse lugar criado por FORTAN, antes de sua derrota, mas ele sabe que precisa desvendar os mistérios e derrotar os novos inimigos aliados de FORTAN.`
);
console.log(
  `${nome} sente a brisa suave do javaScript soar pelo seu rosto,isto lhe cria a coragem necessária para entrar aos aposentos de FORTAN.`
);
console.log(`${nome} entra no castelo e encontra um baú misterioso.`);

//  Declaração e inicialização
let powerUpsEncontrados = ["Monster", "Chá gelado", "Dolly"];
let armadilhasEncontradas = []; // Array vazio - será preenchido após eventos futuros

// Acesso e modificação de elementos
console.log(" Primeiro power up encontrado: " + powerUpsEncontrados[0]);
console.log(" Total de power ups: " + powerUpsEncontrados.length);

// Modificando elemento específico
inventario[0] = "Power up de Vida Suprema"; // Upgrade da power up!
console.log("🌀🌠 " + nome + " aprimorou uma power up!");

// Métodos de array fundamentais
inventario.push("lancheira do minecraft"); // Adicionando no final do array
console.log(" Novo item adicionado! Inventário: " + inventario); // Exibindo inventário atualizado

let itemRemovido = inventario.pop(); // Removendo do final do array
console.log(" Item removido: " + itemRemovido);
console.log(" Inventário atual: " + inventario);

// CAPÍTULO 2: As Salas sem sentido
console.log("🌀 CAPÍTULO 2: As Salas sem sentido");

// Explorando cada sala da Internet usando for tradicional
console.log(
  " Exploração exploração das " + salasCastelo.length + " salas sombrias..."
);

for (let i = 0; i < salasCastelo.length; i++) {
  console.log(" Salas " + (i + 1) + ": " + salasCastelo[i]);

  // Lógicas diferentes para cada uma das salas baseadas nos índices
  if (i === 0) {
    console.log(nome + " encontra memes antigos!");
    experiencia += 150;
    tesourosColetados.push("Memes Antigos");
  } else if (i === 1) {
    console.log(" O pior lugar da internet!");
    forca -= 10;
    tesourosColetados.push("Maldade do Twitter");
  } else {
    console.log(" Os usuarios do reddit atacam " + nome + "!");
    vidaAtual -= 20; // Pequeno dano
    tesourosColetados.push("Tesouro do Reddit");
  }
}

console.log(
  " Exploração das salas completas XP: " + experiencia + " | Vida: " + vidaAtual
);

//  CAPÍTULO 3: O grande reencontro

console.log("🤝 CAPÍTULO 3: Reunindo os Devs lendários");

// Recrutando Devs lendários com for tradicional
console.log(nome + " convoca seus aliados para a última batalha:");

for (let i = 0; i < aliados.length; i++) {
  let aliado = aliados[i];
  console.log(
    " Devs lendários " + (i + 1) + ": " + aliado + " se junta para a missão!"
  );

  // Cada posição no array determina uma habilidade especial única
  if (i === 0) {
    // Primeiro aliado: Guerreiro
    console.log(
      " Como guerreiro, " + aliado + " multiplica a força da equipe!"
    );
    forca *= 2;
  } else if (i === 1) {
    // Segundo aliado: Assassino
    console.log(
      " Como assassino, " + aliado + " aumenta a agilidade da equipe!"
    );
    agilidade += 20;
  } else {
    // Demais aliados: suportes
    console.log(
      " Como suporte, " +
        aliado +
        " aprimora táticas de combate da equipe para enfrentar todos os desafios!"
    );
    experiencia += 40;
    defesaTotal += 30;
    vidaMaxima += 10;
  }
}

console.log(
  "Devs lendários reunidos! Ouro: " + ouro + " | Vida máxima: " + vidaMaxima
);

//  CAPÍTULO 4: A BATALHA FINAL da internet lobotomizada
console.log(" CAPÍTULO 4: Os inimigos da internet lobotomizada");

// Sistema de batalha usando arrays e for tradicional
let inimigosBatalha = [
  "Tralalero tralala",
  "Senhor dos boobie goods",
  "morango do amor mutante",
];
let danoRecebido = [];

console.log(
  " " +
    nome +
    " batalha contra " +
    inimigosBatalha.length +
    " inimigos sombrios!"
);

// Batalha usando for tradicional para controle preciso do dano
for (let i = 0; i < inimigosBatalha.length; i++) {
  let inimigo = inimigosBatalha[i];
  let dano = Math.floor(Math.random() * 50) + 10; // Dano entre 10 e 59

  console.log(" Round " + (i + 1) + "  Enfrenta: " + inimigo);
  console.log(" " + aliados + " causam " + dano + " de dano!");

  danoRecebido.push(dano); // Armazena dano para cálculos posteriores das batalhas

  // Lógica especial para cada rodada baseada nos índices
  if (i === 0) {
    console.log(" Vitória! Fragmento de Meme Supremo concedem bônus!");
    inventario.push("Fragmento de Meme Supremo");
  } else if (i === 1) {
    console.log(
      " Segundo round! Os Brainrots absorvem a agilidade, mas " +
        nome +
        " persiste!"
    );
    agilidade -= 10;
  } else {
    console.log(
      " Batalha final! Os morangos do amor mutante recuam! Vitória alcançada!"
    );
    experiencia += 1000;
    inventario.push("Morango do amor");
  }
}

// Calculando status da batalha usando for normal
let danoTotal = 1000;
for (let i = 0; i < danoRecebido.length; i++) {
  danoTotal += danoRecebido[i];
  console.log(" Round " + (i + 1) + "  Dano: " + danoRecebido[i]);
}

console.log(" Dano total causado: " + danoTotal);
console.log(" Tesouros coletados: " + inventario.length + " itens léndarios!");


