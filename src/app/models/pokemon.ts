import { Ability } from "./ability";
import { Game } from "./game";
import { Move } from "./move";
import { Sprites } from "./resultPokemon";
import { Status } from "./status";
import { Type } from "./type";

export class Pokemon {
  id?: number;
  name?: string;
  height?: string;
  weight?: string;
  thumb?: string;
  status?: Status[];
  types?: Type[];
  moves?: Move[];
  games?: Game[];
  abilities?: Ability[];

  constructor(item: any) {
    this.id = this.getId(item),
    this.name = item.name ? this.capitalize(item.name) : "...",
    this.height = item.height ? this.getHeight(item.height) : "...",
    this.weight = item.weight ? this.getWeight(item.weight) : "...",
    this.thumb = item.sprites ? this.getThumb(item.sprites) : "nao-encontrado",
    this.status = item.stats ? this.getStatus(item.stats) : [],
    this.types = item.types ? this.getTypes(item.types) : [],
    this.moves = item.moves ? this.getMoves(item.moves) : [],
    this.games = item.game_indices ? this.getGames(item.game_indices) : [],
    this.abilities = item.abilities ? this.getAbilities(item.abilities) : []
  }

  getId(item:any) {
    const url = item.url;

    if(url){
      const array = url.split("/");
      return array[array.length-2];
    }

    if(item.id) {
      return item.id;
    }

    return 0;
  }

  getHeight(height: number){
    return (height * 0.1).toFixed(2).replace(".", ",") + " m";
  }

  getWeight(weight: number){
    return (weight * 0.1).toFixed(2).replace(".", ",") + " kg";
  }

  getThumb(sprites: Sprites) {

    if(sprites?.other["official-artwork"]?.front_default){
      return sprites?.other["official-artwork"]?.front_default;
    }

    if(sprites?.front_default) {
      return sprites?.front_default;
    }

    return "";
  }

  getStatus(status: Status[]) {
    return status?.map(e => {
      return new Status(e)
    });
  }

  getTypes(types: Type[]) {
    return types?.map(e => {
      return new Type(e)
    });
  }

  getMoves(moves: Move[]) {
    return moves?.map(e => {
      return new Move(e)
    });
  }

  getGames(games: Game[]) {
    return games?.map(e => {
      return new Game(e)
    });
  }

  getAbilities(abilities: Ability[]) {
    return abilities?.map(e => {
      return new Ability(e)
    });
  }

  private capitalize(word: string) {
    if (!word) {
      return word;
    }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
}

