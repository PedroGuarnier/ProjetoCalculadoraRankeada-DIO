let userName = getFirstName("Pedro-da-Costa", "-")
console.log("Seja bem vindo " + userName)
userName = getFirstName("Coisinha da Costa", " ")
    console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
    let firstName= name.split(splitChar)[0]
    return firstName
}
    