'use strict';
/// task 1 ///
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

/// task 2 ///
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// 1

for (const [i, playerName] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${playerName}`);
  /*Goal 1: Lewandowski Goal 2: Gnarby Goal 3: Lewandowski Goal 4: Hummels */
}

// 2

// way 1
let totalValue = 0;
let number = 0;

for (const value of Object.values(game.odds)) {
  totalValue += value;
  number += 1;
}
console.log(totalValue / number);

// console.log(Number((totalValue / number).toFixed(2))); // 3.69
// console.log(Math.round((totalValue / number) * 100).toFixed(2) / 100); // 3.69

// way 2
const odds2 = Object.values(game.odds);
let totalValue2 = 0;

for (const value of odds2) {
  totalValue2 += value;
}
console.log(totalValue2 / odds2.length);

// way 3
const odds3 = Object.values(game.odds);
let average = 0;

for (const value of odds3) average += value;

average /= odds3.length;
console.log(average);

// 3

const oddsEntries = Object.entries(game.odds);
for (const [team, odd] of oddsEntries) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// Important we can get value of object properties by 2 ways
console.log(game['team1']); // Bayern Munich
console.log(game.team1); // Bayern Munich
// More example
const oddsEntriesExample = Object.entries(game.odds);
console.log(oddsEntriesExample);
for (const [team, odd] of oddsEntriesExample) {
  console.log(`${game[team]}`); // Bayern Munich undefined Borrussia Dortmund
}
