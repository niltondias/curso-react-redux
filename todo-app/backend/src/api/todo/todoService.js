const Todo = require('./todo')

// Definindo os métodos rest
Todo.methods(['get','post','put','delete'])

// Definindo duas configurações ao efetuar updates no banco:
// 1 - Quando efetuar um update retornar o registro novo e não o antigo
// 2 - Por padrão o node-restful não valida updates. Neste caso estamos definindo para validar
//     os campos também nos updates no banco
//
Todo.updateOptions({new: true, runValidators: true})

// Exportando o serviço de node-restful
//
module.exports = Todo
