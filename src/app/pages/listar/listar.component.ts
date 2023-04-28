import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Infos, Result } from 'src/app/models/resultPokemons';
import { Pokemon } from 'src/app/models/pokemon';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.sass']
})
export class ListarComponent implements OnInit {

  constructor(private appService: AppService) { }

  displayedColumns: string[] = ['position', 'name', "details"];
  page!: Page;
  pokemons: Pokemon[] = [];

  ngOnInit(): void {

    const height = window?.screen?.height;
    const divisor = height <= 600 ? 90 : height <= 725 ? 85 : height <= 800 ? 75 : height <= 950 ? 71 : 80;
    const limit = Math.ceil(height / divisor);

    this.listar(0,limit);
  }

  private listar(offset: number, limit: number) {
    this.appService.listar(offset, limit)
      .subscribe(res => {

        this.page = new Page(res);

        this.pokemons = res?.results?.map(item => {
          return new Pokemon(item)
        })

      })
  }

  anteriorPagina() {
    const offset = this.page?.offset - (this.page?.limit * 2);
    const limit = this.page?.limit;
    this.listar(offset, limit);
  }

  proximaPagina() {
    const offset = this.page?.offset;
    const limit = this.page?.limit;
    this.listar(offset, limit);
  }

}
