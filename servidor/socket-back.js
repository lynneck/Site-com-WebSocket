
import "dotenv/config"

import registrarEventoInicio from "./registrarEventos/inicio.js";
import registrarEventosCadrastro from "./registrarEventos/cadastro.js";
import registrarEventoDocumentos from "./registrarEventos/documentos.js";
import registrarEventoLogin from "./registrarEventos/login.js";

import io from "./servidor.js";
import autorizarUsuarios from "./middlewares/autorizarUsuarios.js";

 const nspUsuarios = io.of("/usuarios")
                              

 nspUsuarios.use(autorizarUsuarios);

 nspUsuarios.on("connection", (socket) => {
  registrarEventoInicio(socket, nspUsuarios);
  registrarEventoDocumentos(socket, nspUsuarios);
  registrarEventosCadrastro(socket, nspUsuarios);
  
})

io.of("/").on("connection", (socket) =>{
  registrarEventoLogin(socket, io);
 

});//escuta os eventos


