//Criar um arquivo .env copiar e colar este conteudo no arquivo .env
const token = ''

module.exports = {
    token,
    apiUrl = `https://api.telegran.org/bot${token}`,
    apiFileUrl = `https://api.telegran.org/file/bot${token}`,
}