import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import Header from "../components/Header";
import "./Home.scss";

const Home = () => {
    const [input, setInput] = useState("");
    const [resultInput, setResultInput] = useState("");

    const showInfo = () => {
        const element = document.getElementsByClassName("home-cep-area")[0];

        if (element.style.display == "flex") {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
    };

    const searchCep = async () => {
        await axios
            .get(`https://viacep.com.br/ws/${input}/json/`)
            .then((response) => {
                setResultInput(response.data);
            });
        showInfo();

        console.log(resultInput);
    };

    return (
        <>
            <Header />
            <main className="home-background">
                <section className="home-area container">
                    <h1>Buscador de CEP</h1>
                    <div className="home-input-area">
                        <input
                            type="text"
                            placeholder="Digite seu cep..."
                            required
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                        />
                        <button className="home-btn-search" onClick={searchCep}>
                            <FiSearch size={25} color="#fff" />
                        </button>
                    </div>
                    <div className="home-cep-area">
                        <h2>{resultInput.cep}</h2>
                        <span>{resultInput.logradouro}</span>
                        <span>{resultInput.bairro}</span>
                        <span>{resultInput.localidade}</span>
                        <span>{resultInput.uf}</span>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
