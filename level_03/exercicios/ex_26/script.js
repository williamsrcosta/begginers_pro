function gerar_cor_hexadecimal()
{
  return '#' + parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, '0');
}

document.body.style.backgroundColor = gerar_cor_hexadecimal()