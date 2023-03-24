import { obterCookie } from "../utils/cookies.js";

//const socket = io();
const socket = io("/usuarios", {
    auth: {
        token: obterCookie("tokenJwt"),
    }
});

socket.on("connect_error", (erro) => {
    alert(erro);
    window.location.href = "/login/index.html"
});

function emitirCadastrarUsuario(dados) {
    socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso!"));
socket.on("cadastro_erro", () => alert("Erro no cadastro."));
socket.on("usuario_ja_existente", () => alert("Usuario já existe!"))

export { emitirCadastrarUsuario };
