// Fonction pour afficher le formulaire de création de post
function showForm() {
  const addPostButton = document.getElementById("addPostButton");
  const postForm = document.getElementById("postsForm");

  if (addPostButton && postForm) {
    addPostButton.style.display = "none";
    postForm.style.display = "block";
  } else {
    console.error("Le bouton ou le formulaire n'a pas été trouvé.");
  }
}

// Fonction pour masquer le formulaire et réafficher le bouton "Ajouter un post"
function hideForm() {
  const addPostButton = document.getElementById("addPostButton");
  const postForm = document.getElementById("postsForm");

  if (addPostButton && postForm) {
    addPostButton.style.display = "block";
    postForm.style.display = "none";
  } else {
    console.error("Le bouton ou le formulaire n'a pas été trouvé.");
  }
}
