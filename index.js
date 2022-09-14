const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from my smartly node");
});

const users = [
  { id: 1, name: "raz", email: "raz@gmail.com" },
  { id: 2, name: "sajeeb", email: "sajeeb@gmail.com" },
  { id: 3, name: "safik", email: "safik@gmail.com" },
  { id: 4, name: "sakib", email: "sakib@gmail.com" },
  { id: 5, name: "sujon", email: "sujon@gmail.com" },
  { id: 6, name: "sadia", email: "sadia@gmail.com" },
  { id: 7, name: "suya", email: "suya@gmail.com" },
];

app.post("/users", (req, res) => {
  console.log("requested:", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "orange", "graps"]);
});

app.listen(port, () => {
  console.log("ok port:", port);
});
