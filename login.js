// function logar () {
//     var login = document.getElementById('email-login').value
//     var senha = document.getElementById('senha-login').value

//     if(login == "admin@admin.com.br" && senha == "admin"){
//         alert('Login efetuado com Sucesso');
//         location.href = "./Logado/home.html"
//     }else{
//         alert('Verifique os dados e tente novamente!')
//     }
// }

// ------------------------------------------------------------

const usuarios = [
    {
        email: "admin@admin.com",
        senha: "admin"
    },
    {
        email: "ana@admin.com",
        senha: "1234"
    },
    {
        email: "yan@admin.com",
        senha: "1234"
    }
]

let botao = document.getElementById('botaoLogin')
botao.addEventListener('click', function(event){
    event.preventDefault()
    let pegaEmail = document.getElementById('email-login').value
    let pegaSenha = document.getElementById('senha-login').value
    // let validaLogin = false

    // for(let i in usuarios){
    //     if(pegaEmail == usuarios[i].email && pegaSenha == usuarios[i].senha){
    //         validaLogin = true
    //         break
    //     }
    // }

    let usuario = usuarios.find((usuario) => (pegaEmail == usuario.email && pegaSenha == usuario.senha))

    if(usuario){
        location.href = './painel-adm/index.html'
    }else{
        alert('Dados incorretos, tente novamente!')
    }
})

// Registrar usuário

let botaoRegistro = document.getElementById('registrar')
registrar.addEventListener('click', function(event){
    event.preventDefault()
    let cadastraEmail = document.getElementById('cadEmail').value
    let cadastraSenha = document.getElementById('cadSenha').value
    usuarios.push({email:cadastraEmail, senha:cadastraSenha})
    alert('Cadastrado com sucesso!')
})




    

