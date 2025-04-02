import axios from "axios";

const autenticarConReqRes = async () => {
  try {
    const login = await axios.post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    });  
    const token = login.data.token;
    console.log("Token válido obtenido:", token);
    
    const usuario = await axios.get("https://reqres.in/api/users/1", {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    console.log("Datos de usuario:", usuario.data);
    
    await axios.get("https://reqres.in/api/users/1", {
      headers: { 'Authorization': "Bearer token-invalido" }
    });
    
  } catch (error) {
    console.error("Error de autenticación:", error.response.data);
  }
};

autenticarConReqRes();