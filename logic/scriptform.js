document
  .getElementById("send")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const nickname = document.getElementById("nickname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const innersign = document.getElementById("innersign");

    // Vérifier si les champs sont vides
    if (!name || !email || !phone) {
      innersign.innerHTML =
        "Tu sais ce qu'est un champ vide ? Fais-le correctement...";
      innersign.style.backgroundColor = "#f44336";
      innersign.style.color = "#fff";
      innersign.style.display = "block";
      return;
    }

    // Vérifier si l'email est valide
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      innersign.innerHTML =
        "Oups ! Ça sent mauvais cet email, est-ce vraiment ça ?";
      innersign.style.backgroundColor = "#f44336";
      innersign.style.color = "#fff";
      innersign.style.display = "block";
      return;
    }

    try {
      // Envoi des données au serveur
      const response = await fetch("addusers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, nickname, email, phone }),
      });

      if (response.ok) {
        innersign.textContent =
          "Oh, tu as bien rempli les champs... pour de vrai ?!";
        innersign.style.backgroundColor = "#ff4933";
        innersign.style.color = "#fff";
        innersign.style.display = "block";

        document.getElementById("name").value = "";
        document.getElementById("nickname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";

        setTimeout(() => {
          window.location.href = "super.html";
        }, 7000);
      } else {
        innersign.textContent =
          "Bravo, tout est correct... Ou pas. À toi de voir.";
        innersign.style.backgroundColor = "#ff4933";
        innersign.style.color = "#fff";
        innersign.style.display = "block";
      }
    } catch (error) {
      console.error("Erreur lors de la requête", error);
      innersign.textContent = "Erreur fatale... enfin presque.";
      innersign.style.backgroundColor = "#f44336";
      innersign.style.color = "#fff";
      innersign.style.display = "block";

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
    }
  });
