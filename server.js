import { createServer } from "http";

const PORT = process.env.PORT || 8000;

const users = [
  { id: 1, name: "johnny aa" },
  { id: 2, name: "john aa" },
  { id: 3, name: "joy aa" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
