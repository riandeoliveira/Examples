<!-- Atualiza os dados. Recebe um filtro e onde a alteração ocorrerá. -->
db.users.updateOne({ name: "João" }, { $set: { is_employed: true } })

<!-- Atualiza múltiplos dados (também permite adicionar novos dados). -->
db.users.updateMany({}, { $set: { salary: 5000 } })