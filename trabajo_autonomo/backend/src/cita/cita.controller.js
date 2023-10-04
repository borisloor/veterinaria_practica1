const MongoDBAdapter = require("../../adapters/MongoDBAdapter");
const MongooseAdapter = require("../../adapters/MongooseAdapter");
const { getAllDocuments, insertNewDocument } = require("../../adapters/MongoDBAdapter");
const { Cita } = require("./cita.model");

const getCitas = async (req, res) => {
	try {
		// const citas = await MongoDBAdapter.getAllDocuments("citas");
		const citas = await MongooseAdapter.getAllDocuments(Cita);
		res.status(200).json(citas);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error reading data");
	}
};

const newCita = async (req, res) => {
	const { id_veterinario, id_cliente, nombre_cliente, fecha_programada } = req.body;
	try {
		const data = await insertNewDocument("citas", {
			id_veterinario,
			id_cliente,
			nombre_cliente,
			fecha_programada,
		});
		res.status(200).json(data);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error inserting data");
	}
};

module.exports = {
	getCitas,
	newCita,
};
