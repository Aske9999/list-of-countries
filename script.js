// import axios from "axios";
const row = document.querySelector('.row')

const getCountries = async () => {
    const {data: countries} = await axios('https://restcountries.com/v3.1/all/')
    countries.forEach(item => {
        row.innerHTML += `
         <div class = "col-5" >
            <div class="box">
                <img class="flag" src = "${item.flags.png}">
                <h3>${item.name.official} </h3>
                <div>Language: ${item.languages ? Object.values(item.languages)[0] : "No"} </div>
            </div>
         </div>`
    })
}
getCountries()


// const addCountries = () => {
//     const col = document.createElement('col')
//     const img = document.createElement('img')
//     fetch('https://restcountries.com/v3.1/all')
//         .then(response => response.json())
//         .then(data => {
//             img.innerHTML = data[0].flag
//             col.innerHTML = `${data[0].name.common}\nCapital: ${data[0].capital}\nLanguages: ${data[0].languages.prs}\nArea: ${data[0].area}`
//             list.append(col)
//
//             console.log(data)
//         })
//
// }
//
// addCountries()




