export class Shelve {
    // cells: Cell[] = [];

    // public initCell() {
    //     for (let i = 0; i < 4; i++) {
    //         const row: Cell[] = [];
    //         for (let j = 0; j < 8; j++) {
    //             if ((i + j) % 2 !== 0) {
    //                 row.push(new Cell(this, j, i, Colors.BLACK, null)) // Черные ячейки
    //             } else {
    //                 row.push(new Cell(this, j, i, Colors.WHITE, null)) // Белые ячейки
    //             }
    //         }
    //         this.cells.push(row);
    //     }
    // }

    // public highlightCells(selectedCell: Cell | null) {
    //     for (let i = 0; i < this.cells.length; i++) {
    //         const row = this.cells[i];
    //         for (let j = 0; j < row.length; j++) {
    //             const target = row[j];
    //             target.available = !!selectedCell?.figure?.canMove(target);
    //         }
    //     }
    // }

    // public getCopyBoard() : Board {
    //     const newBoard = new Board();
    //     newBoard.cells = this.cells;
    //     newBoard.lostBlackFigures = this.lostBlackFigures;
    //     newBoard.lostWhiteFigures = this.lostWhiteFigures;
    //     return newBoard;
    // }
}