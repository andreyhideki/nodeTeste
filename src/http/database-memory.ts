import { randomUUID } from "crypto"
import { Usuario } from "./model/Usuario"

export class DatabaseMemory {
    #usuarios = new Map()

    findAll() {
        return Array.from(this.#usuarios.values())
    }

    findById(id : string): Usuario {
        return this.#usuarios.get(id)
    }

    create(usuario: Usuario):void {
        //const usuarioId = randomUUID()

        this.#usuarios.set(
            usuario.Id, 
            usuario
        )   
    }

    update(id : string, usuario: Usuario):void {
        this.#usuarios.set(
            id,
            usuario
        )
    }

    delete(id : string):void {
        this.#usuarios.delete(id)
    }
}
