import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { Navbar } from "../home/Navbar/Navbar";
import { Veterinario } from "./Veterinario.type";

export function TablaVentas() {
	const [ventas, setVentas] = useState<Veterinario[]>([
		{
			id_veterinaria: "",
			id_cliente: "",
			id_producto: "",
			id_venta_detalle: "",
			fecha_venta: new Date(),
			descripcion: "",
		},
	]);

	const getVentas = async () => {
		const response = await fetch(`${URL_API}/ventas`);
		const data = await response.json();

		return data as Veterinario[];
	};

	useEffect(() => {
		getVentas().then((data) => {
			setVentas(data);
		});
	}, []);

	return (
		<>
			<Navbar />
			<table className="table">
				<thead>
					<th>Veterinaria</th>
					<th>Cliente</th>
					<th>Producto</th>
					<th>Venta Detalle</th>
					<th>Fecha Venta</th>
					<th>Descripcion</th>
				</thead>
				<tbody>
					{ventas.map((cliente) => {
						return (
							<tr key={cliente._id}>
								<td>{cliente.id_veterinaria}</td>
								<td>{cliente.id_cliente}</td>
								<td>{cliente.id_producto}</td>
								<td>{cliente.id_venta_detalle}</td>
								<td>{cliente.fecha_venta.toLocaleString()}</td>
								<td>{cliente.descripcion}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
