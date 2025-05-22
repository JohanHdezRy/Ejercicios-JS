/*import { ObjectId } from 'mongodb';

export default function crearModeloUsuario(db) {
  const collection = db.collection('usuarios');

  return {
    async crear(data) {
      const { nombre, edad, correo } = data;

      if (!nombre || !edad || !correo) {
        throw new Error('Faltan campos requeridos');
      }

      const existe = await collection.findOne({ correo });
      if (existe) {
        throw new Error('El correo ya está registrado');
      }

      const nuevo = {
        nombre,
        edad: Number(edad),
        correo,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const { insertedId } = await collection.insertOne(nuevo);
      return await collection.findOne({ _id: insertedId });
    },

    async obtenerTodos() {
      return await collection.find({}).toArray();
    },

    async obtenerPorId(id) {
      return await collection.findOne({ _id: new ObjectId(id) });
    },

    async actualizar(id, data) {
      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...data, updatedAt: new Date() } }
      );
      return await collection.findOne({ _id: new ObjectId(id) });
    },

    async eliminar(id) {
      const result = await collection.deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount > 0;
    }
  };
}*/
