document.querySelector("button").addEventListener("click", () => {
  fetch("/api/Developers", {
    method: "post",
    headers: new Headers({
      "Accept": "application/json",
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      "skills": [
        "css"
      ],
      "age": 5,
      "username": "john",
      "email": "twen@yandex.ru",
      "emailVerified": false,
      "password": "helloworld"
    })
  }).catch((err) => {
    console.error(err);
  })
});