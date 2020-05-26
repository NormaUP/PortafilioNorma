import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: any[] = [];

  constructor( private http: HttpClient) { 
      this.cargarProductos();
      
  }

  private cargarProductos (){
      this.http.get('https://angular-html-4dd6b.firebaseio.com/productos_id.json')
      .subscribe( (resp: Producto[]) => {

        console.log(resp);
        this.productos=resp;
        // this.productos = resp;
        this.cargando = false;

        setTimeout(() => {

        }, 2000);

      });
  }

}
