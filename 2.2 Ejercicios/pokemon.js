import axios from "axios";

const obtenerPokemon = async () => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/25`);
        
        console.log('Datos del Pokémon:', {
            nombre: response.data.name,
            id: response.data.id,
            altura: response.data.height / 10 + ' m', 
            peso: response.data.weight / 10 + ' kg',
            habilidades: response.data.abilities.map(ability => ability.ability.name).join(', '),
        });
        
        console.log('Datos del Pokémon:', response.data);
    } catch (error) {
        console.error('Error al obtener el Pokémon:', error.response.data);
    }
};

obtenerPokemon();