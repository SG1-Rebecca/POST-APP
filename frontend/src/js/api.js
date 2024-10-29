// Fonction pour ajouter un Post

async function postUser(userData) {
  const response = await fetch("http://localhost:4000/api/users", {
    method: "POST",
    body: userData,
  });

  if (!response.ok) {
    throw new Error("Erreur réseau lors de l'envoi de l'utilisateur");
  }

  return response.json();
}

// Fonction pour récupérer les posts
async function getPosts() {
  const response = await fetch("http://localhost:4000/api/posts");
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des posts");
  }
  return response.json();
}
