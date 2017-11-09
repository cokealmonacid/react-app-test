import { extendObservable } from 'mobx';

class TiendaController {
	constructor(){
		extendObservable(this,
			{
				platillos: [
					{nombre: "primerPlatillo", descripcion: "platillo muy rico", precio: 100, cantidad: 0}, 
					{nombre: "segundoPlatillo", descripcion: "platillo muy rico", precio: 150, cantidad: 0}, 
					{nombre: "tercerPlatillo", descripcion: "platillo muy rico", precio: 200, cantidad: 0}
				],
				bebidas: [
					{nombre: "primeraBebida", descripcion: "bebida muy rico", precio: 100, cantidad: 0}, 
					{nombre: "segundaBebida", descripcion: "bebida muy rico", precio: 100, cantidad: 0}, 
					{nombre: "terceraBebida", descripcion: "bebida muy rico", precio: 100, cantidad: 0}, 
				]
			}
		);
	}

	ponerEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.platillos.forEach((value, index)=>{
				if(indicePlatillo === index) {
					this.platillos[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}

	bebidasEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.bebidas.forEach((value, index)=>{
				if(indicePlatillo === index) {
					this.bebidas[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}

}

var VarTiendaController = new TiendaController;

export default VarTiendaController;