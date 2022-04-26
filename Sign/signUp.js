function check()
{
    if (document.querySelector('#first').value !== document.querySelector('#second').value ) {
        document.querySelector('#first').value = "Пароли не совпадают"
    }
}
