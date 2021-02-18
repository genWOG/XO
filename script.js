var $symbols = document.getElementById('XO'); //ячейки таблицы
var $buttons = document.querySelector("#clear"); //choose how in css
var massiv_flagov = document.getElementsByTagName('td'); //список для установление ID
let cell = 1,
    i = 0, //индексы и переменные
    j = 0;
let color_cell = 0; //цвет ячейки
let stopper = 0; //остановка ходов

//install the IDs to each cell in the table
window.addEventListener('load', function(event) {
    massiv_flagov = document.getElementsByTagName('td'); //покачто должно быть 9
    //massiv_flagov = document.getElementsByTagName('td');
    for (i = 0; i < massiv_flagov.length; i++) {
        massiv_flagov[i].id = i;
        massiv_flagov[i].value = 0;
    }
})

//случайные числа
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


//user's event
$symbols.addEventListener('click', function(event) {
        var tagName = event.target.tagName.toLowerCase();
        if (tagName === 'td') {
            if (stopper == 0) {
                if (color_cell == massiv_flagov.length) {
                    alert("Tired!")
                } else {
                    event.target.style.backgroundColor = "Blue";
                    color_cell++;
                }
                i = event.target.id;
                massiv_flagov[i].value = 1;
                getWin(massiv_flagov[i].value);
            }
            //---------------------------↕ход ИИ
            if (stopper == 0) {
                while (cell != 0) {
                    j = getRandomInt(massiv_flagov.length); //0-8 получаем случайное число, одно на многократное использование!
                    cell = massiv_flagov[j].value;
                    if (color_cell == 9) {
                        cell = 2;
                        alert("Phew! I've finished!");
                        break;
                    }

                }
                if (cell == 0) {
                    document.getElementById(j).style.backgroundColor = 'Red';
                    massiv_flagov[j].value = 2;
                    getWin(massiv_flagov[j].value);
                    cell = 1; //возвращаем флажок на исходное состояние
                    color_cell++;
                }

            }
        }

    })
    //функция для определенияпобеды
function getWin(win) {
    //проверка значений ячеек по горизонтали
    if (massiv_flagov[0].value == win && massiv_flagov[1].value == win && massiv_flagov[2].value == win) {
        if (win == 1) { alert("You win!"); } else { alert("I win!"); }
        stopper = 1;
    } else if (massiv_flagov[3].value == win && massiv_flagov[4].value == win && massiv_flagov[5].value == win) {
        if (win == 1) { alert("You win!"); } else { alert("I win!"); }
        stopper = 1;
    } else if (massiv_flagov[6].value == win && massiv_flagov[7].value == win && massiv_flagov[8].value == win) {
        if (win == 1) { alert("You win!"); } else { alert("I win!"); }
        stopper = 1;
    }
    //проверка значений ячеек по вертикали
    else if (massiv_flagov[0].value == win && massiv_flagov[3].value == win && massiv_flagov[6].value == win) {
        if (win == 1) { alert("You win!"); } else { alert("I win!"); }
        stopper = 1;
    } else if (massiv_flagov[1].value == win && massiv_flagov[4].value == win && massiv_flagov[7].value == win) {
        if (win == 1) { alert("You win!"); } else { alert("I win!"); }
        stopper = 1;
    } else if (massiv_flagov[2].value == win && massiv_flagov[5].value == win && massiv_flagov[8].value == win) {
        if (win == 1) { alert("You win!"); } else { alert("I win!"); }
        stopper = 1;
    }
    //проверка значений ячеек по диагонали
    else if (massiv_flagov[0].value == win && massiv_flagov[4].value == win && massiv_flagov[8].value == win) {
        if (win == 1) { alert("You win!"); } else { alert("I win!"); }
        stopper = 1;
    } else if (massiv_flagov[2].value == win && massiv_flagov[4].value == win && massiv_flagov[6].value == win) {
        if (win == 1) { alert("You win!"); } else { alert("I win!"); }
        stopper = 1;
    }
    //console.log("stopper", stopper);
}
//play again
$buttons.addEventListener('click', function(event) {
    console.log("how is it?");
    for (i = 0; i < massiv_flagov.length; i++) {
        document.getElementById(i).style.backgroundColor = null;
        massiv_flagov[i].value = 0;
    }
    color_cell = 0;
    stopper = 0;

})