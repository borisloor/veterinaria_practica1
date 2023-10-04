const mongoose = require("mongoose");

const citaSchema = new mongoose.Schema({
	id_veterinario: {
		type: String,
		required: true,
	},
	id_cliente: {
		type: String,
		required: true,
	},
	nombre_cliente: {
		type: String,
		required: true,
	},
	fecha_programada: {
		type: Date,
		required: true,
	},
});

const Cita = mongoose.model("citas", citaSchema);

module.exports = { Cita };
