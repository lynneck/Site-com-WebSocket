import { MongoClient } from "mongodb";


const cliente = new MongoClient("mongodb+srv://Alura:123@aluracluster.obczjv8.mongodb.net/?retryWrites=true&w=majority");


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