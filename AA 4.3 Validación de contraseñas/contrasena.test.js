const contrasenados = require('./contrasena');
describe("pruebas manuales", () => {
    // caso valido
    test("caso valido", () => {
        expect(contrasenados("Hernandez1@")).toBe(true);
    });
    //caso no valido
    test("caso no valido", () => {
        expect(contrasenados("hernandez")).toBe(false);
    });
    //caso frontal
    test("caso frontal", () => {
        expect(contrasenados("Hernandez1@")).toBe(true);
    });
    // caso con 7 letras
    test("caso con 7 letras", () => {
        expect(contrasenados("sietele")).toBe(false);
    });
    // caso sin mayusculas
    test("caso sin mayusculas", () => {
        expect(contrasenados("hernandez1@")).toBe(false);
    });
    // caso sin minusculas
    test("caso sin minusculas", () => {
        expect(contrasenados("HERNANDEZ1@")).toBe(false);
    });
    // caso sin numeros
    test("caso sin numeros", () => {
        expect(contrasenados("hernandez@")).toBe(false);
    });
    // caso sin caracter especial
    test("caso sin caracter especial", () => {
        expect(contrasenados("hernandez1")).toBe(false);
    });
    // caso con espacios
    test("caso con espacios", () => {
        expect(contrasenados("Hernandez 1@")).toBe(false);
    });
    // caso vacio
    test("caso vacio", () => {
        expect(contrasenados("")).toBe(false);
    });
});