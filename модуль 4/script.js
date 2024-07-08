let myName = 'Татьяна'
function greet () {
    alert (`Мое имя: ${myName}`);
}

greet ()

function celsiusToFahrenheit (temperature) {
    let temperatureFar = (temperature*9/5)+32;
    alert (`Температура по фаренгейту: ${temperatureFar}`)
}

celsiusToFahrenheit (20)

function calculateFallDistance (fallTime) {
    let distance = (1/2)*9.8*fallTime^2
    alert (`Расстояние ${distance}`)
}

calculateFallDistance (10)

function calculateAverage (a, b, c) {
    let average = (a + b + c) / 3;
    alert (`Среднее значение: ${average}`)
}

calculateAverage (5, 10, 15)

function concatStrings (str1, str2) {
    let string = str1 + str2;
    alert (string)
}
concatStrings ('Hello ', 'world!')