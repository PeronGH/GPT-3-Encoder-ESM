const bpe = Deno.readTextFileSync("./vocab.bpe");
const json = {
  lines: bpe.split("\n"),
};

Deno.writeTextFileSync("./vocab.json", JSON.stringify(json));
