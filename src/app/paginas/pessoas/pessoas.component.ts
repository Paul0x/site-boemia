import { Component, OnInit } from '@angular/core';
import { MoradoresService } from './moradores.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  fotosPrematuroCount = 0;
  fotosSorrizuCount = 0;
  fotosAnsiosoCount = 0;
  fotosNuUteroCount = 0;
  moradores: any[];
  exalunos: any[];
  homenageados: any[];

  constructor(private moradoresService: MoradoresService) { }

  ngOnInit() {
    this.getMoradores();
    this.getExalunos();
    this.getHomenageados();
  }


  clickPhoto(morador: any) {
    if (morador.id === 16) {
      this.fotosPrematuroCount++;
    } else if (morador.id === 9) {
      this.fotosSorrizuCount++;
    }

  }

  getMoradores() {
    this.moradoresService.getMoradores().subscribe((resp: any) => {
      this.moradores = resp;
    })
  }
  getExalunos() {
    this.moradoresService.getExalunos().subscribe((resp: any) => {
      this.exalunos = resp;
    })
  }
  getHomenageados() {
    this.moradoresService.getHomenageados().subscribe((resp: any) => {
      console.log(resp)
      this.homenageados = resp;
    })
  }

  checkEasterImg(id: number) {
    switch (id) {
      case 9:
        if (this.fotosSorrizuCount < 3) {
          return 9;
        } else {
          return '9-2';
        }
        break;
      case 16:
        if (this.fotosPrematuroCount < 3) {
          return 16;
        } else {
          return '16-2';
        }
        break;
      case 3:
        if (this.fotosAnsiosoCount < 3) {
          return 3;
        } else {
          return '3-2';
        }
        break;
      case 4:
        if (this.fotosNuUteroCount < 3) {
          return 4;
        } else {
          return '4-2';
        }
        break;
    }
  }

  easterChange(id: number) {
    console.log(id);
    switch (id) {
      case 9:
        this.fotosSorrizuCount++;
        break;
      case 16:
        this.fotosPrematuroCount++;
        break;
    }
  }

  easterChangeMoradores(id: number) {
    console.log(id);
    switch (id) {
      case 3:
        this.fotosAnsiosoCount++;
        break;
      case 4:
        this.fotosNuUteroCount++;
        break;
    }
  }


}
