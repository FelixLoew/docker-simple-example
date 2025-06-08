Commands:

```
docker build -t express-hello-world .
docker run -p 8000:8080 express-hello-world
```

Docker Mongo Solution:

```
# 1. MongoDB Container starten
docker run -d --name mongodb -p 27017:27017 mongo

# 2. Mongo Shell im Container starten
docker exec -it mongodb mongosh

# 3. Datenbank wechseln
use test

# 4. Zwei Todos in Collection "todos" einfügen
db.todos.insertOne({ task: "Einkaufen", done: false })
db.todos.insertOne({ task: "Hausaufgaben machen", done: true })

# Optional: Alle Todos anzeigen
db.todos.find().pretty()
```