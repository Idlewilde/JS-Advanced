function solve() {
    document.querySelectorAll('button')[0].addEventListener('click', checkSudoku);
    document.querySelectorAll('button')[1].addEventListener('click', clear);
    let rows = Array.from(document.getElementsByTagName('tbody')[0].children);


    function checkSudoku(event) {

        let children1 = Array.from(rows[0].children);
        let cell1 = Number(children1[0].children[0].value);
        let cell2 = Number(children1[1].children[0].value);
        let cell3 = Number(children1[2].children[0].value);

        let children2 = Array.from(rows[1].children);
        let cell4 = Number(children2[0].children[0].value);
        let cell5 = Number(children2[1].children[0].value);
        let cell6 = Number(children2[2].children[0].value);

        let children3 = Array.from(rows[2].children);
        let cell7 = Number(children3[0].children[0].value);
        let cell8 = Number(children3[1].children[0].value);
        let cell9 = Number(children3[2].children[0].value);

        let row1 = cell1 + cell2 + cell3;
        let row2 = cell4 + cell5 + cell6;
        let row3 = cell7 + cell8 + cell9;
        let col1 = cell1 + cell4 + cell7;
        let col2 = cell2 + cell5 + cell8;
        let col3 = cell3 + cell6 + cell9;

        let row1true = true;
        let row2true = true;
        let row3true = true;
        let col1true = true;
        let col2true = true;
        let col3true = true;
        let difference = false;;

        if (cell1 == cell2 || cell2 == cell3 || cell1 == cell3) { row1true = false; }
        if (cell4 == cell5 || cell5 == cell6 || cell6 == cell4) { row2true = false; }
        if (cell7 == cell8 || cell8 == cell9 || cell9 == cell7) { row3true = false; }

        if (cell1 == cell4 || cell4 == cell7 || cell7 == cell1) { col1true = false; }
        if (cell2 == cell5 || cell5 == cell8 || cell8 == cell2) { col2true = false; }
        if (cell3 == cell6 || cell6 == cell9 || cell9 == cell3) { col3true = false; }

        if (row1true && row2true && row3true && col1true && col2true && col3true) { difference = true; }



        if (row1 == row2 && row2 == row3 && row3 == col1 && col1 == col2 && col2 == col3 && col1 > 0 && difference) {
            document.getElementsByTagName('table')[0].style.border = '2px solid green';
            document.getElementById('check').children[0].textContent = 'You solve it! Congratulations!';
            document.getElementById('check').children[0].style.color = 'green';
        }
        else {
            document.getElementsByTagName('table')[0].style.border = '2px solid red';
            document.getElementById('check').children[0].textContent = 'NOP! You are not done yet...'
            document.getElementById('check').children[0].style.color = 'red';
        }

    }

    function clear(event) {
        for (i = 0; i < 3; i++) {
            let cells = rows[i].children;
            for (j = 0; j < 3; j++) {
                cells[j].children[0].value = '';
            }
        }
        document.getElementById('check').children[0].textContent = '';
        document.getElementsByTagName('table')[0].style.border = '';
        document.getElementById('check').children[0].style.color = '';

    }

}