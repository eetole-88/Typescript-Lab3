import Player from "./Player";

export default class ConsistentPlayer extends Player {
  symbol: string;
  constructor(name: string, symbol: string) {
    super(name);
    this.symbol = symbol;
  }
  pickSymbol(): string {
    return this.symbol;
  }
}
