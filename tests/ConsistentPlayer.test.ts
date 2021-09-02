import ConsistentPlayer from "../src/models/ConsistentPlayer";

describe("Consistent Player tests", () => {
  test("name is set correctly by the constructor", () => {
    const consistentPlayer: ConsistentPlayer = new ConsistentPlayer(
      "Rocky",
      "rock"
    );
    expect(consistentPlayer.name).toBe("Rocky");
    expect(consistentPlayer.symbol).toBe("rock");
    expect(consistentPlayer.winCount).toBe(0);
  });
  test("pickSymbol() returns the symbol set in the constructor", () => {
    const consistentPlayer: ConsistentPlayer = new ConsistentPlayer(
      "Rocky",
      "rock"
    );
    expect(consistentPlayer.pickSymbol()).toBe("rock");
  });
});
