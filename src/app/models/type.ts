export class Type {
  name?: string

  constructor(item: any) {
    this.name = this.getName(item)
  }

  private getName(item: any) {
    return this.capitalize(item?.type?.name) || ""
  }

  private capitalize(word: string) {
    if (!word) {
      return word;
    }
    let words = word.split("-");
    words = words.map(e => {
      return e[0].toUpperCase() + e.substr(1).toLowerCase();
    })
    return words.join(" ")
  }
}

