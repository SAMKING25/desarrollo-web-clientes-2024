// incluimos y definimos  las funciones a exportar

function saludar(nombre){
    return `Hola, ${nombre}`;
}
export function despedida(nombre){
    return `Hasta luego, ${nombre}`;
}

// Exporto las funciones
export {saludar}
// export * from
