import Head from "next/head";

const Pokemon = ({ pokemon }) => {
    return (
        <>
            <Head>
                <title>Pokemon: {pokemon?.name}</title>
            </Head>
            <div>
                Welcome, {pokemon?.name}
                <img src={pokemon?.sprites.front_default} />
            </div>
        </>
    )
}

export const getStaticPaths = async() => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const pokemon = await result.json();

    const paths = pokemon.results.map(pokemon => `/pokemon/${pokemon.name}`);

    return {
        paths,
        fallback: false,
    }
};

export const getStaticProps = async({ params }) => { // called in build time 
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
    const pokemon = await result.json();

    return {
        props: {
            pokemon,
        }
    }
};

export default Pokemon;