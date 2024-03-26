
    function calculadoraRankeada(vitorias,derrotas){
        let saldoDeVitorias = vitorias - derrotas
        let nivel;

        switch(true){
        case saldoDeVitorias<=10:
        nivel= "Ferro"
        break;
        
         case saldoDeVitorias>=11 && saldoDeVitorias<=20:
        nivel="Bronze";
        break;
        case saldoDeVitorias>=21 && saldoDeVitorias<=50: 
        nivel="Prata";
        break;
        case saldoDeVitorias>=51 && saldoDeVitorias <=80:
        nivel="Ouro";
        break;
        case saldoDeVitorias>=81 && saldoDeVitorias <=90:
        nivel="Diamante";
        break;
        case saldoDeVitorias>=91 && saldoDeVitorias <=100:
        nivel="Lendario";
        break;
        default: 
        nivel="Imortal";
        }

        return{saldoDeVitorias, nivel}
    }

    const vitorias= 120
    const derrotas= 30
    const resultado = calculadoraRankeada(vitorias, derrotas)

    console.log(`O Heroi tem saldo de ${resultado.saldoDeVitorias} e esta no nivel de ${resultado.nivel}`);


        



    
         

