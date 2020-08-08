//procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// executar uma ocao
function cloneField() {
    // duplicar os campos. Que Campo? o campo .schedule-item (Agenda de Horários).
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos: Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    //Arrumar isso, não está limpando. 
    fields.forEach(function(field) {
        //pegar o field do momento e limpa-o. 
        fields.value = "";       
    });

    // colocar na pagina: onde ? 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    
}
    
