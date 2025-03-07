
function cargarEjercicio(scriptUrl) {
    if (document.querySelector(`script[src="${scriptUrl}"]`)) {
        alert(`El ${scriptUrl} ya está cargado.`);
        return;
    }
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.onload = () => {
        console.log(`${scriptUrl} cargado exitosamente`);
        console.log(`_____________________________________`);
    };
    script.onerror = () => {
        alert(`Error al cargar ${scriptUrl}`);
    };
    document.body.appendChild(script);
}
