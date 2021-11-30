let numero               = 5
let nome                 = 'WiLL'
let sobrenome            = 'Sposito'
let texto_Id             = ''
let texto_Class          = ''
let texto_href           = ''
let texto_src            = ''
let texto_title          = ''
let texto_alt            = ''
let texto_width          = ''
const valor_multiplicado = document.getElementById("resultado_multiplicacao")
const valor_String       = document.getElementById("resultado_string")
const valor_Booleano     = document.getElementById("resultado_booleano")

valor_multiplicado.textContent                         = numero * 6
valor_String.textContent                               = nome + sobrenome
valor_Booleano.textContent                             = nome == 'WiLL'
texto_Id                                               = 'uma espécie de CPF do elemento, use sempre um id em um único elemento, como um CPF mesmo, quando chegarmos em CSS e JavaScript o uso do id (e de class, logo no tópico abaixo) fará todo sentido'
texto_Class                                            = 'ao selecionar elementos com CSS ou com JavaScript, porém ao invés de adicionar em apenas um elemento podemos adicionar a class em vários elementos'
texto_href                                             = '<a>, ele recebe esse atributo onde informamos o destino daquele elemento ao ser clicado, pois é exatamente essa a função desse atributo, receber como valor uma ligação que pode ser outra página WEB, um local dentro da própria página, enfim, um destino para esse elemento ao ser clicado.'
texto_src                                              = 'o src é usado principalmente em imagens como vimos até agora, no caso o src recebe como valor o local de onde está aquela imagem, que pode ser um arquivo local ou o link de onde a imagem está hospedada'
texto_title                                            = 'quando usamos o title em algum elemento nós passamos como valor o que aquele elemento faz ou o que ele quer dizer, um pequeno texto aparece no elemento quando o mouse passa por cima dele, esse texto é o que passamos como valor do title'
texto_alt                                              = 'imagine que temos uma imagem de um gato, o alt pode receber por exemplo o valor "gato", bem simples, direto e claro o que aquela imagem é, pois se por algum motivo a imagem não for renderizada o texto do alt será exibido, além do mais, pessoas que usam leitores de tela se beneficiam muito desse texto alt'
texto_width                                            = 'definir tamanhos de imagens é melhor no CSS, como veremos em breve, mas se for pra ser algo mais rápido o width já irá te ajudar bastante, o valor que passamos para ele é um tamanho em pixels'
document.querySelector('#resultado_id').textContent    = texto_Id
document.querySelector('#resultado_class').textContent = texto_Class
document.querySelector('#resultado_href').textContent  = texto_href
document.querySelector('#resultado_src').textContent   = texto_src
document.querySelector('#resultado_title').textContent = texto_title
document.querySelector('#resultado_alt').textContent   = texto_alt
document.querySelector('#resultado_width').textContent = texto_width