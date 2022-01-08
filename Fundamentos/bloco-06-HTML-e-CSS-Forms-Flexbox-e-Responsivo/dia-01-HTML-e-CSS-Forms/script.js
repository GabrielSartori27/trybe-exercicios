function states(){
    let brasilianStates = [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espírito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins',
        ]
        for(let i = 0; i < brasilianStates.length; i += 1){
            let option = document.createElement('option');
            option.innerText = brasilianStates[i];
            document.getElementById('state').appendChild(option);
        }
}
states();
function checkForms(event){
    event.preventDefault();
    let check = 0;
let ids = ['name', 'email', 'cpf', 'adress', 'city', 'state', 'curriculo', 'cargo', 'cargo-descricao', 'data']
    for(let i = 0; i < ids.length; i += 1){
        let item = document.getElementById(ids[i]).value;
        let alertText = document.getElementById(ids[i]).name;
        if(item === ''){
            alert('O campo ' + alertText + ' deve ser preenchido.')
            check += 1
        }
    }
    if(document.getElementById('house').checked === false && 
    document.getElementById('apartment').checked === false){
        alert('O campo Tipo de imóvel deve ser preenchido.')
        check += 1
    }
    function userInformation(){
        if(check === 0){
            let newDiv = document.createElement('div');
            newDiv.id = 'newDiv';
            let h2 = document.createElement('h2');
            newDiv.appendChild(h2);
            h2.innerText = 'Seu formulário:';
            function imovel(){
                if(document.getElementById('house').checked === true){
                    let imovel = document.createElement('p');
                    imovel.innerText = 'Tipo de imóvel: Casa';
                    newDiv.appendChild(imovel);
                }else if(document.getElementById('apartment').checked === true){
                    let imovel = document.createElement('p');
                    imovel.innerText = 'Tipo de imóvel: Apartamento';
                    newDiv.appendChild(imovel);
                }
            }
            for(let i = 0; i < ids.length; i += 1){
                if(i === 7){
                    imovel();
                }
                let text = document.getElementById(ids[i]).value;
                let item = document.getElementById(ids[i]).name;
                let p = document.createElement('p');
                p.innerText = item + ': ' + text;
                newDiv.appendChild(p);
                document.getElementsByTagName('form')[0].appendChild(newDiv);
            }
        }
    }
    userInformation();
}
let enviar = document.getElementById('enviar');
enviar.addEventListener('click', checkForms);

function clean(){
    if(document.getElementById('newDiv') !== null){
        document.getElementById('newDiv').remove();
    }
}
document.getElementById('reset').addEventListener('click', clean);