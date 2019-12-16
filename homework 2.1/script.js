'use strict'


function aboutPerson() {
    const person = {
        name: prompt('Введите ваше имя'),
        surname: prompt('Введите вашу фамилию'),
        age: prompt('Введите ваш возраст')
    }
    alert(`${person.name.toUpperCase()} ${person.surname.toUpperCase()}` + '\nВозраст: ' + `${person.age}`);
}

aboutPerson();