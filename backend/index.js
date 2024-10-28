const express = require("express");
const multer = require("multer");
const mysql = require("mysql2");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(express.json());
require("dotenv").config();

// Configuration de la connexion MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
});

// Connexion et configuration de la base de données et des tables
db.connect((err) => {
  if (err) throw err;
  console.log("Connecté à MySQL !");

  // Créer la base de données si elle n'existe pas
  db.query("CREATE DATABASE IF NOT EXISTS posts_app", (err) => {
    if (err) throw err;
    console.log("Base de données 'posts_app' créée ou déjà existante");

    // Sélection de la base de données
    db.changeUser({ database: "posts_app" }, (err) => {
      if (err) throw err;

      // Création de la table `users` si elle n'existe pas
      const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          pseudo VARCHAR(50) NOT NULL,
          photo VARCHAR(255) NULL
        )`;

      // Création de la table `posts` si elle n'existe pas
      const createPostsTable = `
        CREATE TABLE IF NOT EXISTS posts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          user_id INT,
          content TEXT NOT NULL,
          \`like\` BOOLEAN DEFAULT FALSE,
          timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )`;

      // Exécuter les requêtes de création de tables
      db.query(createUsersTable, (err) => {
        if (err) throw err;
        console.log("Table 'users' créée ou déjà existante");

        db.query(createPostsTable, (err) => {
          if (err) throw err;
          console.log("Table 'posts' créée ou déjà existante");
        });
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
