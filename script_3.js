const lang = ["Pyton", "C++", "C#", "PHP"];

const isLoginUs = function(login){
    let message;
    if(!lang.includes(login)){
        lang.push(login);
        message= `Значення ${login} в списку немає, додаємо в масив`;
    } else {
        message= `Значення ${login}  вже присутнє`;
    }
    alert(message);
    console.log(lang)
    return
};

const userLogin = prompt('Введіть свій логін:');
const result = isLoginUs(userLogin);
alert(result);
