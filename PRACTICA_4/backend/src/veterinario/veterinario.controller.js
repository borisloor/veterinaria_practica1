const { getAllDocuments, insertNewDocument } = require("../../adapters/MongooseAdapter");
const { Veterinario } = require("./veterinario.model");

const getVeterinarios = async (req, res) => {
	try {
		const veterinarios = await getAllDocuments(Veterinario);
		res.status(200).json(veterinarios);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error reading data");
	}
};

const newVeterinario = async (req, res) => {
	const { id_veterinaria, nombre_veterinaria, nombre, apellido } = req.body;
	try {
		const veterinario = await insertNewDocument(Veterinario, {
			id_veterinaria,
			nombre_veterinaria,
			nombre,
			apellido,
		});
		res.status(200).json(veterinario);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error inserting data");
	}
};

module.exports = {
	getVeterinarios,
	newVeterinario,
};
