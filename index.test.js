const play = require("./chifoumi");

test("Test victoire du joueur", async () => {
  await expect(play("Pierre", "Ciseaux")).resolves.toBe("Victoire");
  await expect(play("Papier", "Pierre")).resolves.toBe("Victoire");
  await expect(play("Ciseaux", "Papier")).resolves.toBe("Victoire");
});

test("Test défaite du joueur", async () => {
  await expect(play("Ciseaux", "Pierre")).resolves.toBe("Défaite");
  await expect(play("Pierre", "Papier")).resolves.toBe("Défaite");
  await expect(play("Papier", "Ciseaux")).resolves.toBe("Défaite");
});

test("Test égalité", async () => {
  await expect(play("Pierre", "Pierre")).resolves.toBe("Égalité");
  await expect(play("Papier", "Papier")).resolves.toBe("Égalité");
  await expect(play("Ciseaux", "Ciseaux")).resolves.toBe("Égalité");
});

test("Test mauvaise saisie", async () => {
  await expect(play("mauvaise saisie", "Pierre")).rejects.toThrow();
});
