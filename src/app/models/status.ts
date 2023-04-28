export class Status{
  name?: string
  value?: number

  constructor(item: any) {
    this.name = this.getName(item);
    this.value = item?.base_stat;
  }

  private getName(item: any) {
    return this.capitalize(item?.stat?.name) || ""
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

