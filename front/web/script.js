function searchFilterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("searchDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function otherFilterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("otherInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("otherDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function thirdFilterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("otherInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("otherDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

let array = [document.getElementById("searchDropdown"),
document.getElementById("otherDropdown"),
document.getElementById("thirdDropdown"),
document.getElementById("fourthDropdown"),
document.getElementById("fivthDropdown"),
document.getElementById("sixthDropdown"),
document.getElementById("seventhDropdown"),
document.getElementById("eightDropdown"),
document.getElementById("ninthDropdown")];


let isMarkPicked = false;
let isModelPicked = false;


function searchDropdown(event) {
    array.forEach(function (element) {
        if (element.id.toString() == "searchDropdown") {
            return;
        }
        // Проверяем наличие класса "show"
        if (element.classList.contains("show")) {
            // Удаляем класс "show"
            element.classList.remove("show");
        }
    });

    document.getElementById("searchDropdown").classList.toggle("show");
}

function searchOther() {
    array.forEach(function (element) {
        if (element.id.toString() == "otherDropdown") {
            return;
        }
        // Проверяем наличие класса "show"
        if (element.classList.contains("show")) {
            // Удаляем класс "show"
            element.classList.remove("show");
        }
    });

    if (isMarkPicked == true) {
        document.getElementById("otherDropdown").classList.toggle("show");
    }
    else
        return;
}

function searchThird() {
    array.forEach(function (element) {
        if (element.id.toString() == "thirdDropdown") {
            return;
        }
        // Проверяем наличие класса "show"
        if (element.classList.contains("show")) {
            // Удаляем класс "show"
            element.classList.remove("show");
        }
    });

    if (isModelPicked == true) {
        document.getElementById("thirdDropdown").classList.toggle("show");
    }
    else
        return;
}

function searchFourth() {
    array.forEach(function (element) {
        if (element.id.toString() == "fourthDropdown") {
            return;
        }
        // Проверяем наличие класса "show"
        if (element.classList.contains("show")) {
            // Удаляем класс "show"
            element.classList.remove("show");
        }
    });
    document.getElementById("fourthDropdown").classList.toggle("show");
}

function searchFivth() {
    array.forEach(function (element) {
        if (element.id.toString() == "fivthDropdown") {
            return;
        }
        // Проверяем наличие класса "show"
        if (element.classList.contains("show")) {
            // Удаляем класс "show"
            element.classList.remove("show");
        }
    });
    document.getElementById("fivthDropdown").classList.toggle("show");
}

function searchSixth() {
    array.forEach(function (element) {
        if (element.id.toString() == "sixthDropdown") {
            return;
        }
        // Проверяем наличие класса "show"
        if (element.classList.contains("show")) {
            // Удаляем класс "show"
            element.classList.remove("show");
        }
    });
    document.getElementById("sixthDropdown").classList.toggle("show");
}

function searchSeventh() {
    array.forEach(function (element) {
        if (element.id.toString() == "seventhDropdown") {
            return;
        }
        // Проверяем наличие класса "show"
        if (element.classList.contains("show")) {
            // Удаляем класс "show"
            element.classList.remove("show");
        }
    });
    document.getElementById("seventhDropdown").classList.toggle("show");
}

function searchEight() {
    array.forEach(function (element) {
        if (element.id.toString() == "eightDropdown") {
            return;
        }
        // Проверяем наличие класса "show"
        if (element.classList.contains("show")) {
            // Удаляем класс "show"
            element.classList.remove("show");
        }
    });
    document.getElementById("eightDropdown").classList.toggle("show");
}

function searchNinth() {
    array.forEach(function (element) {
        if (element.id.toString() == "ninthDropdown") {
            return;
        }
        // Проверяем наличие класса "show"
        if (element.classList.contains("show")) {
            // Удаляем класс "show"
            element.classList.remove("show");
        }
    });
    document.getElementById("ninthDropdown").classList.toggle("show");
}

function thirdFilterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("thirdInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("thirdDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

var button = document.getElementById("car-brand-btn");

function brandClick(event) {
    var id = event.target.id;
    var text = this.innerText;
    console.log(id);

    if (id == "Любой") {
        document.querySelector('#car-brand-btn').value = "Марка";
        isMarkPicked = false;
        isModelPicked = false;
        console.log(isMarkPicked)

        var carModelBtn = document.getElementById('car-model-btn');
        carModelBtn.classList = '';
        carModelBtn.classList = 'not-allowed-button';
        carModelBtn.value = 'Модель';

        var carGenerationBtn = document.getElementById('car-generation-btn');
        carGenerationBtn.classList = '';
        carGenerationBtn.classList = 'not-allowed-button';
        carGenerationBtn.value = 'Поколение';
    }
    else {
        document.querySelector('#car-brand-btn').value = id;
        isMarkPicked = true;
        console.log(isMarkPicked)

        var carModelBtn = document.getElementById('car-model-btn');
        carModelBtn.classList = '';
        carModelBtn.classList = 'search-other-dropbtn';
    }
    document.getElementById("searchDropdown").classList.toggle("show");
};

function modelClick(event) {
    var id = event.target.id;
    var text = this.innerText;
    console.log(id);

    if (id == "Любой") {
        document.querySelector('#car-model-btn').value = "Модель";
        isModelPicked = false;
        console.log(isModelPicked)

        var carGenerationBtn = document.getElementById('car-generation-btn');
        carGenerationBtn.classList = '';
        carGenerationBtn.classList = 'not-allowed-button';
        carGenerationBtn.value = 'Поколение';
    }
    else {
        document.querySelector('#car-model-btn').value = id;
        isModelPicked = true;
        console.log(isModelPicked)

        var carGenerationBtn = document.getElementById('car-generation-btn');
        carGenerationBtn.classList = '';
        carGenerationBtn.classList = 'search-third-dropbtn';
    }
    document.getElementById("otherDropdown").classList.toggle("show");
};

function thirdClick(event) {
    var id = event.target.id;
    console.log(id);

    if (id == "Любой") {
        document.querySelector('.search-third-dropbtn').value = "Поколение";
    }
    else {
        document.querySelector('.search-third-dropbtn').value = id;
    }
    document.getElementById("thirdDropdown").classList.toggle("show");
}

function fourthClick(event) {
    var id = event.target.id;
    console.log(id);

    if (id == "Любой")
        document.querySelector('.search-fourth-dropbtn').value = "Год от";
    else
        document.querySelector('.search-fourth-dropbtn').value = id;


    document.getElementById("fourthDropdown").classList.toggle("show");
}

function fivthClick(event) {
    var id = event.target.id;
    console.log(id);

    if (id == "Любой")
        document.querySelector('.search-fivth-dropbtn').value = "до";
    else
        document.querySelector('.search-fivth-dropbtn').value = id;


    document.getElementById("fivthDropdown").classList.toggle("show");
}

function sixthClick(event) {
    var id = event.target.id;
    console.log(id);

    if (id == "Любой")
        document.querySelector('.search-sixth-dropbtn').value = "Цена от";
    else
        document.querySelector('.search-sixth-dropbtn').value = id;


    document.getElementById("sixthDropdown").classList.toggle("show");
}

function seventhClick(event) {
    var id = event.target.id;
    console.log(id);

    if (id == "Любой")
        document.querySelector('.search-seventh-dropbtn').value = "до";
    else
        document.querySelector('.search-seventh-dropbtn').value = id;


    document.getElementById("seventhDropdown").classList.toggle("show");
}

function eigthClick(event) {
    var id = event.target.id;
    console.log(id);

    if (id == "Любой")
        document.querySelector('.search-eight-dropbtn').value = "Объем от";
    else
        document.querySelector('.search-eight-dropbtn').value = id;


    document.getElementById("eightDropdown").classList.toggle("show");
}

function ninthClick(event) {
    var id = event.target.id;
    console.log(id);

    if (id == "Любой")
        document.querySelector('.search-ninth-dropbtn').value = "до";
    else
        document.querySelector('.search-ninth-dropbtn').value = id;


    document.getElementById("ninthDropdown").classList.toggle("show");
}

function clearAll() {
    document.querySelector('#car-brand-btn').value = "Марка";
    isMarkPicked = false;
    isModelPicked = false;
    console.log(isMarkPicked)

    var carModelBtn = document.getElementById('car-model-btn');
    carModelBtn.classList = '';
    carModelBtn.classList = 'not-allowed-button';
    carModelBtn.value = 'Модель';

    var carGenerationBtn = document.getElementById('car-generation-btn');
    carGenerationBtn.classList = '';
    carGenerationBtn.classList = 'not-allowed-button';
    carGenerationBtn.value = 'Поколение';

    array.forEach(function (element) {
        // Проверяем наличие класса "show"
        if (element.classList.contains("show")) {
            // Удаляем класс "show"
            element.classList.remove("show");
        }
    });
}