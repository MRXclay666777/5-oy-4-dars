// Запрос имени пользователя
let userName = prompt("Введите свое имя:");

if (userName) {
    // Приводим имя к нижнему регистру для удобства
    userName = userName.toLowerCase();

    // Запрос буквы от пользователя
    const letter = prompt("Введите любую букву:").toLowerCase();

    if (letter) {
        if (userName.includes(letter)) {
            alert(`В вашем имени есть буква ${letter.toUpperCase()}`);
        } else {
            alert(`В вашем имени нет буквы ${letter.toUpperCase()}`);
        }
    } else {
        alert("Вы не ввели букву.");
    }
} else {
    alert("Вы не ввели имя.");
}