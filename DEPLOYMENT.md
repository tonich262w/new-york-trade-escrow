
# Guía de Deployment para Hostinger

## Pasos para subir el sitio a Hostinger:

### 1. Compilar el proyecto
```bash
npm run build
```

### 2. Subir archivos
- Una vez compilado, se generará una carpeta `dist/`
- Sube todo el contenido de la carpeta `dist/` al directorio `public_html` de tu hosting en Hostinger
- También asegúrate de subir el archivo `.htaccess` que está en la carpeta `public/`

### 3. Configuración del dominio
- Asegúrate de que tu dominio apunte a la carpeta donde subiste los archivos
- Si usas un subdominio, configúralo en el panel de Hostinger

### 4. Verificar el sitio
- Visita tu dominio para verificar que el sitio funciona correctamente
- Revisa que todas las rutas funcionen (About, Services, Contact)

## Archivos importantes incluidos:

- **vite.config.ts**: Configurado con `base: "./"` para rutas relativas
- **public/.htaccess**: Configuración para Apache con:
  - Compresión de archivos
  - Cache del navegador
  - Soporte para React Router (SPA)
  - Headers de seguridad
- **Build optimizado**: Chunks separados para mejor carga

## Notas adicionales:

- El sitio está optimizado para hosting estático
- Todas las rutas están configuradas para funcionar con React Router
- Los assets están optimizados para carga rápida
- El .htaccess maneja la redirección para SPA (Single Page Application)

## Comandos útiles:

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview del build
npm run preview
```

## Soporte para SEO:

El sitio incluye:
- Meta tags optimizados
- Open Graph tags
- Twitter Card tags
- Títulos descriptivos
- Estructura semántica HTML5
