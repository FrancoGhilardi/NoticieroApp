# 📰 NoticieroApp

Aplicación de noticias desarrollada con **React Native** y **Expo**, pensada para ofrecer una experiencia moderna, responsiva y modular. Permite consultar noticias, ver detalles, marcar favoritas y cambiar idioma.

---

## 📌 Descripción del proyecto

NoticieroApp es una app móvil de lectura de noticias que consume datos de [JSONPlaceholder](https://jsonplaceholder.org/). La app permite:

- Buscar y leer noticias
- Visualizar detalles de cada noticia
- Guardar favoritas (persistidas localmente)
- Cambiar idioma (soporte para español e inglés)
- Navegación entre distintas pantallas de forma fluida

---

## 🧠 Arquitectura

El proyecto está basado en **Clean Architecture**, **MVVM** y **DDD (Domain-Driven Design)**. Las capas están organizadas de la siguiente forma:

- **core**: utilidades generales como temas, almacenamiento, internacionalización.
- **data**: fuentes de datos, implementación de servicios y caché.
- **domain**: entidades, casos de uso y contratos de repositorios.
- **presentation**: componentes, pantallas, navegación y view models.
- **state**: manejo de estado global con Zustand.

Este enfoque permite una alta escalabilidad, mantenibilidad y testeo eficiente.

---

## 🛠️ Tecnologías y librerías utilizadas

### 🔧 Base del proyecto

- **Expo SDK 53**
- **React Native 0.79.3**
- **TypeScript**

### 📦 Librerías principales

| Librería                                    | Uso                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------- |
| `zustand`                                   | Estado global y persistencia de favoritos                           |
| `react-i18next` + `i18next`                 | Internacionalización (i18n) de la aplicación                        |
| `@react-native-async-storage/async-storage` | Almacenamiento local (favoritas e idioma)                           |
| `@expo/vector-icons`                        | Íconos personalizables                                              |
| `react-navigation`                          | Navegación con tabs y stack                                         |
| `expo-system-ui`, `expo-constants`, etc.    | Interacción con funcionalidades del sistema                         |
| `expo-image`                                | Renderizado optimizado de imágenes                                  |
| `expo-haptics`                              | Feedback háptico (vibración) para interacciones clave               |
| `react-native-reanimated`                   | Animaciones de alto rendimiento                                     |
| `react-native-webview`                      | Visualización de contenido web (si es necesario en futuras mejoras) |
| `react-native-responsive-fontsize`          | Adaptacion del tamaño de fuente para aplicaciones moviles           |

---

## 🧪 Testing

El proyecto utiliza **Jest** con **React Native Testing Library** y mocks específicos ubicados en la carpeta `__mocks__`.

Cobertura automática de test incluida con:

```
npm run test
```

---

## 🚀 Cómo ejecutar el proyecto

### ✅ Requisitos previos

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- Android Studio o Xcode (para emuladores)
- Crear un archivo `.env` en la raiz del proyecto y colocar lo siguiente:

```bash
API_BASE_URL=https://jsonplaceholder.org
```

---

### ▶️ Emulador Android/iOS

```bash
npm install
npm run android     # o npm run ios
```

---

### 📱 Dispositivo físico

1. Instalar la app **Expo Go** en tu dispositivo desde App Store o Play Store.
2. En la terminal:

```bash
npm start
```

3. Escanear el código QR con la app Expo Go.

---

## 📁 Estructura de carpetas destacada

```
src/
├── core/           # Constantes, hooks, i18n, temas y almacenamiento
├── data/           # Servicios, modelos, implementación de repositorios
├── domain/         # Entidades, contratos y casos de uso
├── presentation/   # Componentes UI, pantallas, navegación y view models
├── state/          # Estado global (Zustand)
__tests__/          # Tests unitarios por capa
__mocks__/          # Mocks de librerías nativas
```

---

## 📄 Scripts útiles

```bash
npm run start         # Iniciar el proyecto
npm run android       # Ejecutar en emulador Android
npm run ios           # Ejecutar en emulador iOS
npm run web           # Ejecutar en navegador
npm run lint          # Linting con ESLint
npm run test          # Ejecutar pruebas con cobertura
npm run reset-project # Limpieza del proyecto
```

---

## 💡 Funcionalidades por implementar (ideas)

- Login/autenticación
- Notificaciones push
- Integración con fuentes reales de noticias
- Compartir noticias en redes

---
