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

buttonFuso.addEventListener('click', () => {
    input=inputDate.value+fuso.value;
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


/*--------------------------------------------------------------*/

const firstData = document.getElementById("dataOne");
const secondData = document.getElementById("dataTwo");
const diffButton = document.getElementById("differenceButton")
const diffResult = document.getElementById("diffResult");

function calculateDiff(){
    let date1= firstData.value;
    let date2= secondData.value;

    date1= new Date(date1);
    date2= new Date(date2);

    let diffInTime = Math.abs(end-start);
    let timeInOneDay= 1000*60*60*24;
    let diffInDays = diffInTime /timeInOneDay

    return diffInDays;
}

diffButton.addEventListener('click', () =>{
    const diffDays = calculateDiff();
    diffResult.innerHTML = diffDays;
})
