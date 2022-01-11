<!-- Exclui um dado de acordo com o parâmetro passado, SEMPRE PASSANDO O FILTRO. -->
db.users.deleteOne({ name: "Josias" })

<!-- Exclui multíplos dados. -->
db.users.deleteMany({ name: "Josias" }, { name: "Rogério" })