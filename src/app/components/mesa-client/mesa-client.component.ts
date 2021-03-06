import { Component, OnInit } from '@angular/core';
import { MesaClientService } from './mesa-client.service';
import { MesaVO } from '../../../app/base/vo/mesa';

@Component({
  selector: 'app-mesa-client',
  templateUrl: './mesa-client.component.html',
  styleUrls: ['./mesa-client.component.css'],
  providers: [MesaClientService]
})
export class MesaClientComponent implements OnInit {

  public mesasParticipante: Array<MesaVO>;
  currentUserId: any;
  usuarioAtual: string;

  constructor(private mesaClientService: MesaClientService) { }

  ngOnInit() {
    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
    this.recuperaMesas();
  }

  recuperaMesas() {
    this.mesaClientService.showLoader();
    this.mesaClientService.recuperarMesasParticipante().subscribe(response => {
      this.mesaClientService.hideLoader();
      this.mesasParticipante = response;
    },
      error => {
        this.mesaClientService.hideLoader();
        this.mesaClientService.showError('Erro ao buscar mesas');
      });
  }

}
