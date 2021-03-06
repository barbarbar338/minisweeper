/* MiniSweeper Packages */
const MiniSweeper = require("minisweeper");

/* Creating grid 
 * Example: MineSweeper.createGrid(ROW_COUNT, COLUMN_COUNT);
 * ROW_COUNT must be a number
 * COLUMN_COUNT must be a number
 */
let grid = MiniSweeper.createGrid(6, 6);

/* Adding mines
 * Example: grid = MineSweeper.addMine(MINE_COUNT, GRID);
 * MINE_COUNT must be a number less than multiply of the row number and column number
 * GRID must be a MineSweeper grid (MineSweeper.createGrid(ROW_COUNT, COLUMN_COUNT))
 */
grid = MiniSweeper.addMine(12, grid);

/* Replacing Mines
 * Example: grid = MineSweeper.replaceMine(EMOJI_GROUP, GRID);
 * EMOJI_GROUP must be an object that contains all emojis for MiniSweeper
 * GRID must be a MineSweeper grid (MineSweeper.createGrid(ROW_COUNT, COLUMN_COUNT))
 * EMOJI_GROUP example:
 * let emoji_group = {
 *    "-1": "BOMB EMOJI",
 *    "0": "0 EMOJI",
 *    "1": "1 EMOJI",
 *    "2": "2 EMOJI",
 *    "3": "3 EMOJI",
 *    "4": "4 EMOJI",
 *    "5": "5 EMOJI",
 *    "6": "6 EMOJI",
 *    "7": "7 EMOJI",
 *    "8": "8 EMOJİ"
 *  }
 */
let emoji_group = {
  "0": "||:zero:||",
  "1": "||:one:||",
  "2": "||:two:||",
  "3": "||:three:||",
  "4": "||:four:||",
  "5": "||:five:||",
  "6": "||:six:||",
  "7": "||:seven:||",
  "8": "||:eight:||",
  "-1": "||:boom:||"
}
grid = MiniSweeper.replaceMine(emoji_group, grid);

/* RESULT */
console.log(grid);
/*
WITHOUT EMOJI REPLACE
--------------------
[  1,  3, -1,  3,  1,  0 ],
[ -1,  5, -1, -1,  2,  0 ],
[ -1,  5, -1, -1,  2,  0 ],
[  2,  4, -1,  3,  1,  0 ],
[ -1,  2,  1,  1,  0,  0 ],
[  1,  1,  0,  0,  0,  0 ]
*/

/*
WITH EMOJI REPLACE
--------------------
[:boom:,  :two:,    :two:,   :two:,  :one:,   :zero:],
[:two:,   :three:,  :boom:,  :boom:, :three:, :one:],
[:boom:,  :four:,   :six:,   :boom:, :boom:,  :two:],
[:three:, :boom:,   :boom:,  :boom:, :boom:,  :three:],
[:two:,   :boom:,   :four:,  :four:, :boom:,  :two:],
[:one:,   :one:,    :one:,   :one:,  :one:,   :one:],
*/