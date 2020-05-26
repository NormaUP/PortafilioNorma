import { Component, OnInit } from '@angular/core';
import { InforPaginaService } from '../../services/infor-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio: InforPaginaService) { }

  ngOnInit() {
  }

}
