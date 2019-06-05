document.querySelector("button").addEventListener("click", () => {
  const email = document.querySelector("#email");
  const password = document.querySelector("#password")
  fetch("/api/Writers/login", {
    method: "post",
    headers: new Headers({
      "Accept": "application/json",
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      "email": email.value,
      "password" : password.value
    })
  }).then((response) => response.json())
    .then((response) => {
      const token = response.id;
      if (token === undefined) return;
      localStorage.setItem("swagger_accessToken", token);
      document.location.href = "http://localhost:3000/index.html";
    }).catch((err) => {
      console.error(err);
    })
});