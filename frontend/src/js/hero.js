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

// Fonction pour envoyer le formulaire de création d'utilisateur et de post
async function submitUserForm() {
  const pseudo = document.getElementById("pseudo").value;
  const photo = document.getElementById("photo").files[0];
  const content = document.getElementById("content").value;

  const formData = new FormData();
  formData.append("pseudo", pseudo);
  formData.append("content", content);
  if (photo) {
    formData.append("photo", photo);
  }

  try {
    const response = await postUser(formData);
    if (response && response.userId) {
      alert("Utilisateur et post ajoutés avec succès !");
      hideForm();
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'utilisateur et du post:", error);
  }
}
