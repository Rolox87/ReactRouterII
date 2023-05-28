import Logo from '../assets/principal.png'

const Home = () => {
    return (
        <div className='container'>
            <h2>Bienvenido maestro pokemón</h2>
            <img src={Logo} style={{ margin: "20px auto" }} alt="pikachu" width="450" />
        </div>
    )
}

export default Home