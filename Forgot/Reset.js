function reset()
{
    if (document.querySelector('#first').value !== document.querySelector('#second').value)
    {
        alert("Пароли не совпадают")
    }

    if (document.getElementById('first').value == "")
    {
        alert("Введите пароль")
        return
    }
}