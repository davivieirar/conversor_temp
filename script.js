function convertToF() {
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = (celsius * 1.8) + 32;
    document.getElementsByTagName('p')[0].innerHTML = 'A temperatura '+celsius.replace('.', ',')+'°C em Fahrenheit são '+fahrenheit.toFixed(1).replace('.', ',')+'°F';
    //alert('Clicou no Converter!')
}

function clean() {
    document.getElementsByTagName('p')[0].innerHTML = ''
}


