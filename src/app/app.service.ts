import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon';
import { Infos } from './models/resultPokemons';
import { RootPokemon } from './models/resultPokemon';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly API = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }

  listar(offset: number, limit: number): Observable<Infos> {

    let params = new HttpParams()
      .set("offset", offset)
      .set("limit", limit);

    const url = `${this.API}/pokemon`;
    return this.http.get<Infos>(url, { params })
  }

  buscar(id: number): Observable<RootPokemon> {
    const url = `${this.API}/pokemon/${id}`;
    return this.http.get<RootPokemon>(url)
  }
}
