import { MongoClient } from "mongodb";


const cliente = new MongoClient(process.env.CONEXAO);


let documentosColecao, usuariosColecao;


try {

    await cliente.connect();

    const db = cliente.db("Alura-websockets");
    documentosColecao = db.collection("documentos")
    usuariosColecao = db.collection("usuarios")


    console.log("Conectado ao banco com sucesso")

    
} catch (error) {

    console.log(ero);
    
}

export {documentosColecao, usuariosColecao};