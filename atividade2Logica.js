const lista = [["marselo", 101, 0], ["gatsu", 50, 10], ["blaze", 80, 0], ["berth", 21, 15], ["phz", 100, 10], ["monopoly", 101, 5]]

function calculadoraRanked(lista) {
    for (let i = 0; i < lista.length; i++) {
        let saldo = lista[i][1] - lista[i][2]
        let nivel

        if (saldo < 10) {
            nivel = "Ferro";
        } else if (saldo > 10 && saldo <= 20) {
            nivel = "Bronze";
        } else if (saldo > 20 && saldo <= 50) {
            nivel = "Prata";
        } else if (saldo > 50 && saldo <= 80) {
            nivel = "Ouro";
        } else if (saldo > 80 && saldo <= 90) {
            nivel = "Diamante";
        } else if (saldo > 90 && saldo <= 100) {
            nivel = "Lendário";
        } else if (saldo > 100) {
            nivel = "Imortal";
        }

        console.log(`O Herói ${lista[i][0]} tem ${lista[i][1]} vitórias e ${lista[i][2]} derrotas, ficando com o saldo de ${saldo} e está no nível ${nivel}.`)
    }
    
}

calculadoraRanked(lista)