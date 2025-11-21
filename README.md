# 🌅 Nuevo Amanecer — Regalos Personalizados  

Sitio web oficial del emprendimiento **Nuevo Amanecer**, dedicado a la creación de regalos personalizados hechos con amor en **Puerto Montt, Chile**.  
El proyecto está optimizado para rendimiento, SEO y despliegue en Vercel, con panel dinámico administrado en Firebase

---

## ✨ Características Principales

### 🖼️ Galería dinámica conectada a Firebase  
- Carga automática de imágenes desde Firestore.  
- Filtros por categoría (tazas, agendas, libretas, biblias, etc.).  
- Lazy loading para mayor velocidad.

### 🎠 Carrusel dinámico  
- Conexión directa al panel (Firebase).  
- Scroll horizontal suave.  
- Botones de navegación personalizables.

### 🎨 Diseño moderno y responsive  
- Uso de Bootstrap 5 + animaciones CSS.  
- Secciones limpias adaptadas a móviles.  
- Página de productos con categorías y filtros.

### 🔍 Optimización SEO  
Incluye:  
- Meta tags completas.  
- OpenGraph (Facebook / WhatsApp / Instagram).  
- Twitter Cards.  
- JSON-LD estructurado (LocalBusiness + CollectionPage).  
- `sitemap.xml` y `robots.txt` configurados.  
- Favicon custom.  
- URLs limpias para indexación.

### 💬 Contacto directo  
- Botón de WhatsApp con mensaje predefinido.  
- Enlaces a redes sociales: Instagram, TikTok y Facebook.  
- Botón “sorpresa” animado para conversiones.

### ☁️ Despliegue en Vercel  
- Carpeta nuevo amanecer web como raíz.
- HTTPS automático.  
- Dominio `vercel.app`.  
- Compatible con CI/CD desde GitHub.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **HTML5 / CSS3 / JavaScript** | Estructura principal y estilos |
| **Bootstrap 5** | Diseño responsive |
| **Firebase Firestore** | Galería + carrusel dinámico |
| **AOS Library** | Animaciones al hacer scroll |
| **FontAwesome / Phosphor Icons** | Iconografía |
| **Vercel** | Hosting y despliegue |

---

## 📁 Estructura del Proyecto

```plaintext
nuevoamanecerweb/
│- index.html
│- productos.html
│- portada.html
│- style.css
│- robots.txt
│- sitemap.xml
│- galeria-firebase.js
│-favicon.ico
│-logo_nuevo.png
⚙️ Configuración en Firebase
El proyecto utiliza Firestore con dos colecciones:


🚀 Despliegue en Vercel
El proyecto está configurado para desplegarse automáticamente desde GitHub.

Pasos:
Subir el proyecto con la carpeta nuevo amanecer web.

Importarlo en Vercel.

Deploy automático.

Resultado final:
https://nuevoamanecertienda.vercel.app/

👩‍💻 Desarrollado por
Karen Bustamante — 
Desarrolladora FullStack-Analista Programador-Cloud

📜 Licencia
Este proyecto es de uso privado para el emprendimiento Nuevo Amanecer.
No se permite redistribución sin autorización.
