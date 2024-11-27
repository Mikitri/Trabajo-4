// Función para agregar tarea al backend y actualizar la lista
const agregarTarea = async () => {
    const descripcion = document.querySelector('#nuevaTarea').value;
    if (descripcion.trim() === '') {
        alert('Por favor, ingresa una descripción para la tarea');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/tareas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ descripcion }),
        });

        if (!response.ok) {
            throw new Error('No se pudo agregar la tarea');
        }

        const tarea = await response.json();
        agregarTareaALista(tarea);
        document.querySelector('#nuevaTarea').value = ''; // Limpiar el campo de entrada
    } catch (error) {
        console.error('Error al agregar la tarea:', error.message);
    }
};

// Función para obtener tareas del backend y mostrarlas
const obtenerTareas = async () => {
    try {
        const response = await fetch('http://localhost:3000/tareas');
        if (!response.ok) {
            throw new Error('No se pudieron obtener las tareas');
        }

        const data = await response.json();
        data.tareas.forEach((tarea) => agregarTareaALista(tarea));
    } catch (error) {
        console.error('Error al obtener las tareas:', error.message);
    }
};

// Función para agregar una tarea al DOM
const agregarTareaALista = (tarea) => {
    const lista = document.querySelector('#listaTareas');
    const elemento = document.createElement('li');
    elemento.textContent = tarea.descripcion;
    elemento.dataset.id = tarea.id;

    // Agregar un botón para eliminar la tarea
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => eliminarTarea(tarea.id, elemento));

    elemento.appendChild(botonEliminar);
    lista.appendChild(elemento);
};

// Función para eliminar una tarea del backend y del DOM
const eliminarTarea = async (id, elementoDOM) => {
    try {
        const response = await fetch(`http://localhost:3000/tareas/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('No se pudo eliminar la tarea');
        }

        // Eliminar la tarea del DOM
        elementoDOM.remove();
    } catch (error) {
        console.error('Error al eliminar la tarea:', error.message);
    }
};

// Llamar a obtenerTareas cuando la página cargue
document.addEventListener('DOMContentLoaded', obtenerTareas);

// Evento para agregar tareas al hacer clic en el botón
document.querySelector('#botonAgregar').addEventListener('click', agregarTarea);
