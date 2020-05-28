import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: any[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient) { 
      this.cargarProductos();
      
  }

  private cargarProductos (){

    return new Promise ( (resolve, reject ) => {

      this.http.get('https://angular-html-4dd6b.firebaseio.com/productos_id.json')
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
        setTimeout(() => {
        }, 2000);
        resolve();

      });


    });

  }
  getProducto (id: string){
    return this.http.get(`https://angular-html-4dd6b.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){

  if (this.productos.length === 0 ){
    //carg PRODUCTOS
    this.cargarProductos().then(  () => {
    //ejecutar despues de tener los productos
    //aplicar filtro
    this.filtrarProductos( termino );
    })
  }else{
    //aplicar filtro
    this.filtrarProductos( termino );
  }

  //   this.productosFiltrado = this.productos.filter( producto => {
  //     return true;
  //   });
  //   console.log (this.productosFiltrado);
   }

  private filtrarProductos(termino: string){
    //console.log (this.productos );
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ){
        this.productosFiltrado.push ( prod );
      }
    });
  }

}
