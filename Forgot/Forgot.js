function send(){
    alert("Мы выслали сообщение с кодом восстановления на ваш email")
    document.querySelector('#send1').disabled = "true"
    document.querySelector('#button1').disabled = "true"
    document.querySelector('#button1').style.background = "#cccccc"
    document.querySelector('#send1').style.background = "#cccccc"
}

function reset(){
    window.location.href = 'https://google.com';

}