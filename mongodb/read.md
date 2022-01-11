<!-- Exibe dados. -->
db.users.find().pretty()

<!-- Exibe a quantidade de documentos retornados. -->
db.users.find().count()

<!-- Filtra a busca de acordo com as condições passadas. -->
db.users.find({
    is_employed: false
})

<!-- Exibe apenas um documento, o primeiro encontrado no banco. -->
db.users.findOne()