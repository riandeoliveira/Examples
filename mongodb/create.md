<!-- Insere dados e cria uma nova collection se ela não existir. Se usa um documento (objeto) por vez. -->
db.users.insertOne({
    name: "Matheus",
    age: 30,
    profession: "programador",
    is_employed: true
})

<!-- Insere múltiplos dados. Se usa um array de objetos (documentos). -->
db.users.insertMany([
    {
        name: "João",
        age: 40,
        profession: "Arquiteto",
        is_employed: false
    },

    {
        name: "Maria",
        age: 23,
        profession: "Professora",
        is_employed: true
    }
])