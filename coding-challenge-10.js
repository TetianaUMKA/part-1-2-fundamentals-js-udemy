'use strict';
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1 destructuring array
const [players1, players2] = game.players;
console.log(players1, players2);

// 2 rest
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3 spread
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4 spread
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5 destructuring object
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
// rest
let total1 = 0;
const printGoals1 = function (...playerName) {
  for (let i = 0; i < playerName.length; i++) {
    if (playerName[i]) {
      total1 += 1;
      console.log(
        `${playerName[i]} scored a goal. The total number of scored goals is ${total1}`
      );
    }
  }
};
printGoals1('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

// spread to rest
let total2 = 0;
const printGoals2 = function (...playerName) {
  for (let i = 0; i < playerName.length; i++) {
    if (playerName[i]) {
      total2 += 1;
      console.log(
        `${playerName[i]} scored a goal. The total number of scored goals is ${total2}`
      );
    }
  }
};
printGoals2(...game.scored);

// 7

// way 1
team1 < team2 && console.log(`The team 1 is more likely to win`);
team1 > team2 && console.log(`The team 2 is more likely to win`);

// way 2 further challenge
const writeMessage = nameTeam => {
  return `The team ${nameTeam} is more likely to win`;
};

(team1 < team2 && console.log(writeMessage(`${game.team1}`))) ||
  (team1 > team2 && console.log(writeMessage(`${game.team2}`)));
