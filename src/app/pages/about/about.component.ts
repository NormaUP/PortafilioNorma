import { Component, OnInit } from '@angular/core';
import { InforPaginaService } from '../../services/infor-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public infoService: InforPaginaService) { }

  ngOnInit() {
  }

}
