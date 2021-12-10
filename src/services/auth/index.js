//* Pasa 1 debemos importar la ruta base y los metodos
import { BASE_URL } from "../index";
import * as METHODS from "../methods";

//* Necesito 2 servicios 1, que es login y el signup
const URL = `${BASE_URL}/auth`;

// body: email, password
export const login = async (body) => {
  try {
    // aca debemos hacer la peticion
    const response = await fetch(`${URL}/login`, METHODS.POST(body));
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
