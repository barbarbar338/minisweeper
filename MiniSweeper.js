exports.createGrid = (row_count, col_count) => {
  try {
    
    //check for arguments
    if (isNaN(row_count) || isNaN(col_count)) throw new Error("[MiniSweeper] row count / column count must be a number \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
    
    //create grid
    let arr = [];
    for (var i = 0; i < row_count; i++) {
      var row = [];
      for (var c = 0; c < col_count; c++) {
        row.push(0); 
      }
      arr.push(row);
    }
    return arr;
  } catch (err) {
    throw new Error("[MiniSweeper] " + err + " \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
  }
}

exports.replaceMine = (object, grid) => {
  try {
    
    //check for arguments
    if (typeof object != "object") throw new Error("[MiniSweeper] emoji group must be an object \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
    if (!Array.isArray(grid)) throw new Error("[MiniSweeper] grid must be an array (MiniSweeper Grid) \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
    
    // replace mines with specified string
    for (var _x = 0; _x < grid[0].length; _x++) {
      for (var _y = 0; _y < grid.length; _y++) {
        grid[_x][_y] = object[grid[_x][_y]];
      }
    }
    return grid; 
  } catch (err) {
    throw new Error("[MiniSweeper] " + err + " \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
  }
}

exports.addMine = (mine_count, grid) => {
  try {
    
    //check for arguments
    if (isNaN(mine_count)) throw new Error("[MiniSweeper] mine count must be a number \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
    if (!Array.isArray(grid)) throw new Error("[MiniSweeper] grid must be an array (MiniSweeper Grid) \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
    if (Number(grid[0].length) * Number(grid.length) <= mine_count) throw new Error("[MiniSweeper] MİNE COUNT must be a number less than multiply of the row number and column number \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
    
    // add mines to grid
    for (var i = 0; i < mine_count; i++) {

      //choose random coord
      var _x = Math.floor(Math.random() * (grid[0].length - 1));
      var _y = Math.floor(Math.random() * (grid.length - 1));

      //if not mine then set as mine else do everything one more time
      if (grid[_x][_y] != -1) grid[_x][_y] = -1;
      else i--;
    }
    
    // update cell values
    for (var _xx = 0; _xx < grid[0].length; _xx++) {
      for (var _yy = 0; _yy < grid.length; _yy++) {

        //check adjacent cell values
        if (grid[_xx][_yy] != -1) {
          var touch_count = 0;

          // check for mine
          if (grid[_xx - 1] && grid[_xx - 1][_yy - 1] && grid[_xx - 1][_yy - 1] == -1) touch_count++;
          if (grid[_xx] && grid[_xx][_yy - 1] && grid[_xx][_yy - 1] == -1) touch_count++;
          if (grid[_xx + 1] && grid[_xx + 1][_yy - 1] && grid[_xx + 1][_yy - 1] == -1) touch_count++;
          if (grid[_xx + 1] && grid[_xx + 1][_yy] && grid[_xx + 1][_yy] == -1) touch_count++;
          if (grid[_xx - 1] && grid[_xx - 1][_yy] && grid[_xx - 1][_yy] == -1) touch_count++;
          if (grid[_xx - 1] && grid[_xx - 1][_yy + 1] && grid[_xx - 1][_yy + 1] == -1) touch_count++;
          if (grid[_xx] && grid[_xx][_yy + 1] && grid[_xx][_yy + 1] == -1) touch_count++;
          if (grid[_xx + 1] && grid[_xx + 1][_yy + 1] && grid[_xx + 1][_yy + 1] == -1) touch_count++;


          // assign cell value
          grid[_xx][_yy] = touch_count;
        }
      } 
    }
    return grid;
  } catch (err) {
    throw new Error("[MiniSweeper] " + err + " \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
  }
}