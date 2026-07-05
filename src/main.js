import pageData from '../pagina-de-vendas.json'

document.querySelector('#app').innerHTML = `
  <div style="text-align: center; padding: 40px; font-family: Arial, sans-serif;">
    <h1>🎮 PlayKids Cristão</h1>
    <p>Página de vendas carregada com sucesso!</p>
    <p>Configure o arquivo JSON da página de vendas para renderizar o conteúdo.</p>
  </div>
`

console.log('Dados da página:', pageData)
