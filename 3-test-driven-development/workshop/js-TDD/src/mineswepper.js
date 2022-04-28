class Grid {
  constructor(columns, rows, mines){
    if(typeof(rows)=="number" && rows>0 && rows<=100 ){
      this.rows = rows;
    }else{
      this.rows = rows<=0 ? 1 : 100
    }

    if(typeof(columns)=="number" && columns>0 && columns<=100 ){
      this.columns = columns;
    }else{
      this.columns = columns<=0 ? 1 : 100
    }

    if(mines.length === this.rows){
      var checker = true
      for (let i = 0; i < this.rows.length; i++) {
        if ( this.rows[i].length != this.columns) {
          checker = false
        }
      }
      if (checker) {
        this.mines = mines
      }else{
        this.mines = [[]]
      }
    }else{
      this.mines = [[]]
    }
  }

  showResult() {
    var counter = this.mines
    // transfo en nb
    for (let irow = 0; irow < this.rows; irow++) {
      for (let icolumn = 0; icolumn < this.columns; icolumn++) {
        if (counter[irow][icolumn]==".") {
            counter[irow][icolumn]= 0
        }
      }
    } 
    // counter des bombes
    for (let irow = 0; irow < this.rows; irow++) {
      for (let icolumn = 0; icolumn < this.columns; icolumn++) {
        if (counter[irow][icolumn]=="*") {
            // Droite
            if( icolumn + 1 < this.columns && typeof(counter[irow][icolumn+1])=="number") {
              counter[irow][icolumn+1]++
            }
            // Gauche
            if (icolumn-1>=0 && typeof(counter[irow][icolumn-1])=="number") {
              counter[irow][icolumn-1]++
            }
            // Bas
            if (irow+1<this.rows && typeof(counter[irow+1][icolumn])=="number") {
              counter[irow+1][icolumn]++
            }
            // Haut
            if (irow-1>=0 && typeof(counter[irow-1][icolumn])=="number") {
              counter[irow-1][icolumn]++
            }
            // Bas Droite
            if (irow+1<this.rows && icolumn+1<this.columns && typeof(counter[irow+1][icolumn+1])=="number") {1
            counter[irow+1][icolumn+1]++
            }
            // Haut Droite
            if (irow-1>=0 && icolumn+1<this.columns && typeof(counter[irow-1][icolumn+1])=="number") {
              counter[irow-1][icolumn+1]++
            }
            // Bas Gauche
            if (irow+1<this.rows && icolumn-1>=0 && typeof(counter[irow+1][icolumn-1])=="number") {
              counter[irow+1][icolumn-1]++
            }
            // Haut Gauche
            if (irow-1>=0 && icolumn-1>=0 && typeof(counter[irow-1][icolumn-1])=="number") {
              counter[irow-1][icolumn-1]++
            }

        }
      }
    } 
    return counter
  }
}

module.exports = {
  Grid
}
