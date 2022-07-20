import { FiSearch } from "react-icons/fi";
import Header from "../components/Header";
import "./Home.scss";

const Home = () => {
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
                        />
                        <button className="home-btn-search">
                            <FiSearch size={25} color="#fff" />
                        </button>
                    </div>
                    <div className="home-cep-area">
                        <h2>CEP</h2>
                        <span>Logradouro</span>
                        <span>Complemento</span>
                        <span>Bairro</span>
                        <span>Estado</span>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
