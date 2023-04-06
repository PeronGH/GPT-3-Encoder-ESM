const bpe = Deno.readTextFileSync("./vocab.bpe");

Deno.writeTextFileSync("./vocab.json", JSON.stringify(bpe.split("\n")));
