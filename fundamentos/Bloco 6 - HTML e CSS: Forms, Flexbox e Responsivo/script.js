
const select = document.getElementById('estados');
const apagaTudo = document.getElementById('limpa-tudo');
const form = document.getElementById('form');
const validando = document.getElementById('validando');
const filhosDoForm = form.children;
const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

for (let index = 0; index < estados.length; index += 1) {
    const opcoes = document.createElement('option');
    opcoes.innerText = estados[index];
    select.appendChild(opcoes);
}

apagaTudo.addEventListener('click', () => {
    filhosDoForm.innerText = '';
})

// validando.addEventListener('click', () => {
//     const dados = document.createElement('div');
//     const dadosDoForm = filhosDoForm.value;

//     console.log()
// })