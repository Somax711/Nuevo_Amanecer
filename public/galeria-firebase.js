//   INICIALIZACIÓN GENERAL
document.addEventListener("DOMContentLoaded", () => {
    cargarGaleriaAdmin();
    cargarCarruselAdmin();

    // Eventos de subida
    document.getElementById("btnSubir").addEventListener("click", subirImagenGaleria);
    document.getElementById("btnSubirCarrusel").addEventListener("click", subirImagenCarrusel);
});

//   GALERÍA: SUBIR IMAGEN

async function subirImagenGaleria() {
    const archivo = document.getElementById("imagenArchivo").files[0];
    const titulo = document.getElementById("imagenTitulo").value.trim();
    const categoria = document.getElementById("imagenCategoria").value;
    const msg = document.getElementById("uploadMsg");

    if (!archivo) return msg.textContent = "Selecciona una imagen.";
    if (!titulo) return msg.textContent = "Ingresa un título.";

    msg.textContent = "Subiendo imagen...";

    const id = Date.now();
    const storageRef = storage.ref(`galeria/${id}_${archivo.name}`);

    try {
        await storageRef.put(archivo);
        const url = await storageRef.getDownloadURL();

        // Obtener orden actual
        const snap = await db.collection("galeria").orderBy("orden", "desc" ,"id").limit(1).get();
        let orden = 1;
        if (!snap.empty) orden = snap.docs[0].data().orden + 1;

        await db.collection("galeria").add({
            titulo,
            categoria,
            imagenUrl: url,
            storagePath: `galeria/${id}_${archivo.name}`,
            orden
        });

        msg.textContent = "Imagen subida correctamente.";
        cargarGaleriaAdmin();

    } catch (err) {
        console.error(err);
        msg.textContent = "Error subiendo imagen.";
    }
}

//   GALERÍA: CARGAR EN DASHBOARD

async function cargarGaleriaAdmin() {
    const cont = document.getElementById("galleryContainer");
    cont.innerHTML = "<p>Cargando galería...</p>";

    try {
        const snap = await db.collection("galeria").orderBy("orden", "asc").get();
        let html = "";

        snap.forEach(doc => {
            const d = doc.data();
            html += `
            <div class="gallery-item">
                <img src="${d.imagenUrl}" alt="${d.titulo}">
                <button class="delete-btn" onclick="eliminarImagenGaleria('${doc.id}', '${d.storagePath}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>`;
        });

        cont.innerHTML = html;

    } catch (err) {
        console.error(err);
        cont.innerHTML = "<p>Error cargando galería.</p>";
    }
}

//   GALERÍA: ELIMINAR

async function eliminarImagenGaleria(id, storagePath) {
    if (!confirm("¿Eliminar esta imagen de la galería?")) return;

    try {
        await storage.ref(storagePath).delete();
        await db.collection("galeria").doc(id).delete();
        cargarGaleriaAdmin();
    } catch (err) {
        console.error(err);
        alert("Error eliminando imagen.");
    }
}

//   CARRUSEL: SUBIR IMAGEN

async function subirImagenCarrusel() {
    const archivo = document.getElementById("carruselArchivo").files[0];
    const msg = document.getElementById("carruselMsg");

    if (!archivo) return msg.textContent = "Selecciona una imagen.";

    msg.textContent = "Subiendo imagen al carrusel...";

    const id = Date.now();
    const storageRef = storage.ref(`carrusel/${id}_${archivo.name}`);

    try {
        await storageRef.put(archivo);
        const url = await storageRef.getDownloadURL();

        // Obtener orden actual
        const snap = await db.collection("carrusel").orderBy("orden", "desc").limit(1).get();
        let orden = 1;
        if (!snap.empty) orden = snap.docs[0].data().orden + 1;

        await db.collection("carrusel").add({
            imagenUrl: url,
            storagePath: `carrusel/${id}_${archivo.name}`,
            orden
        });

        msg.textContent = "Imagen agregada al carrusel.";
        cargarCarruselAdmin();

    } catch (err) {
        console.error(err);
        msg.textContent = "Error subiendo al carrusel.";
    }
}

//   CARRUSEL: CARGAR EN DASHBOARD

async function cargarCarruselAdmin() {
    const cont = document.getElementById("carruselContainer");
    cont.innerHTML = "<p>Cargando carrusel...</p>";

    try {
        const snap = await db.collection("carrusel").orderBy("orden", "asc").get();
        let html = "";

        snap.forEach(doc => {
            const d = doc.data();
            html += `
            <div class="gallery-item">
                <img src="${d.imagenUrl}">
                <button class="delete-btn" onclick="eliminarImagenCarrusel('${doc.id}', '${d.storagePath}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>`;
        });

        cont.innerHTML = html;

    } catch (err) {
        console.error(err);
        cont.innerHTML = "<p>Error cargando carrusel.</p>";
    }
}

//   CARRUSEL: ELIMINAR

async function eliminarImagenCarrusel(id, storagePath) {
    if (!confirm("¿Eliminar esta imagen del carrusel?")) return;

    try {
        await storage.ref(storagePath).delete();
        await db.collection("carrusel").doc(id).delete();
        cargarCarruselAdmin();
    } catch (err) {
        console.error(err);
        alert("Error eliminando imagen del carrusel.");
    }
}
