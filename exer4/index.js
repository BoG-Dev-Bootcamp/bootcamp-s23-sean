import axios from "axios";
import figlet from "figlet";

const getRandomInt = () => Math.floor(Math.random() * 1008) + 1;
axios
    .get(`https://pokeapi.co/api/v2/pokemon/${getRandomInt()}`)
    .then(function (response) {
        console.log(
            figlet.textSync(response.data.name, {
                font: "3D-ASCII",
            })
        );
    })
    .catch(function (error) {
        console.log(error);
    });
