const inputDate = document.getElementById("inputDate");
const buttonDate = document.getElementById("buttonDate");
const result = document.getElementById("resultado");
const fuso = document.getElementById("fuso");
const buttonFuso = document.getElementById("buttonFuso")

buttonDate.addEventListener('click', () => {
    const input=inputDate.value;
    fetch(`/api/${encodeURIComponent(input)}`)
        .then(response => response.json())
        .then(data => {
            result.innerHTML = data.error ? 
                `<span class="error">${data.error}</span>` :
                `<strong>Unix:</strong> ${data.unix}<br>
                 <strong>UTC:</strong> ${data.utc}`;

        })
        .catch(() => {
            result.innerHTML = `<span class="error">Erro ao processar a requisição</span>`;
        });
});

// buttonFuso.addEventListener('click', () => {
//     input=inputDate.value+fuso.value;
//     fetch(`/api/${encodeURIComponent(input)}`)
//         .then(response => response.json())
//         .then(data => {
//             result.innerHTML = data.error ? 
//                 `<span class="error">${data.error}</span>` :
//                 `<strong>Unix:</strong> ${data.unix}<br>
//                  <strong>UTC:</strong> ${data.utc}`;
//         })
//         .catch(() => {
//             result.innerHTML = `<span class="error">Erro ao processar a requisição</span>`;
//         });
// });
