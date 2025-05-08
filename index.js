import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const filePath = path.resolve("data.txt");

app.use("/", (req, res) => {
  const entry = req.query.msg;
  if (entry) {
    fs.appendFileSync(filePath, entry + "\n");
    res.send(`Mensaje guardado: ${entry}`);
  } else {
    const content = fs.existsSync(filePath)
      ? fs.readFileSync(filePath, "utf8")
      : "Sin contenido todavía.";
    res.send(`<pre>${content}</pre>`);
  }
});

app.use("/ver", (req, res) => {
  let contenido = "No hay mensajes guardados todavía.";
  if (fs.existsSync(filePath)) {
    contenido = fs.readFileSync(filePath, "utf8");
  }
  res.send(`<pre>${contenido}</pre>`);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor corriendo..");
});
