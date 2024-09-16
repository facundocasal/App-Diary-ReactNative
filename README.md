# Diario Íntimo Móvil

**Diario Íntimo Móvil** es una aplicación desarrollada con **React Native** que permite a los usuarios guardar notas personales, incluyendo fotos y ubicaciones, y gestionar usuarios utilizando autenticación de Google con Firebase. Esta aplicación está diseñada para facilitar la organización y el almacenamiento de recuerdos y pensamientos de manera segura y eficiente.

## Descripción del Proyecto

La aplicación **Diario Íntimo Móvil** permite a los usuarios:

- **Guardar Notas**: Añadir y editar notas personales.
- **Agregar Fotos**: Incluir imágenes en las notas.
- **Ubicación**: Guardar la ubicación geográfica asociada a cada nota.
- **Autenticación de Usuarios**: Registrarse e iniciar sesión utilizando Google con Firebase.

## Características

- **Interfaz de Usuario**: Diseño moderno y atractivo para una experiencia de usuario intuitiva.
- **Autenticación de Google**: Los usuarios pueden registrarse e iniciar sesión utilizando su cuenta de Google.
- **Almacenamiento de Notas**: Guardar notas con texto, fotos y ubicaciones.
- **Navegación**: Navegación fluida entre pantallas usando React Navigation.
- **Gestión de Estado**: Manejo del estado global con Redux y Redux Thunk.

## Tecnologías Utilizadas

- **React Native**: Framework para desarrollar aplicaciones móviles nativas usando JavaScript.
- **Firebase**: Plataforma de backend para autenticación y almacenamiento de datos.
- **Expo**: Conjunto de herramientas y servicios para el desarrollo de aplicaciones React Native.

## Dependencias

- **@react-navigation/native**: Biblioteca para la navegación dentro de la aplicación. [Documentación](https://reactnavigation.org/docs/getting-started)
- **@react-navigation/native-stack**: Navegación de pilas basada en el navegador. [Documentación](https://reactnavigation.org/docs/native-stack-navigator)
- **expo**: Framework y plataforma para el desarrollo de aplicaciones React Native. [Documentación](https://docs.expo.dev/)
- **expo-app-loading**: Componente para mostrar una pantalla de carga mientras se cargan recursos. [Documentación](https://docs.expo.dev/versions/latest/sdk/app-loading/)
- **expo-file-system**: API para acceder al sistema de archivos. [Documentación](https://docs.expo.dev/versions/latest/sdk/file-system/)
- **expo-font**: API para cargar fuentes personalizadas. [Documentación](https://docs.expo.dev/versions/latest/sdk/font/)
- **expo-image-picker**: API para seleccionar imágenes desde la galería o tomar fotos con la cámara. [Documentación](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- **expo-location**: API para acceder a la ubicación geográfica del dispositivo. [Documentación](https://docs.expo.dev/versions/latest/sdk/location/)
- **expo-sqlite**: API para acceder a una base de datos SQLite local. [Documentación](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- **firebase**: SDK de Firebase para integrar autenticación y almacenamiento de datos. [Documentación](https://firebase.google.com/docs/web/setup)
- **moment**: Biblioteca para el manejo de fechas y tiempos. [Documentación](https://momentjs.com/)
- **react**: Biblioteca para construir interfaces de usuario. [Documentación](https://reactjs.org/)
- **react-native**: Framework para el desarrollo de aplicaciones móviles nativas. [Documentación](https://reactnative.dev/)
- **react-native-maps**: Componente para mostrar mapas y ubicaciones. [Documentación](https://github.com/react-native-maps/react-native-maps)
- **react-native-screens**: Biblioteca para mejorar el rendimiento de la navegación en React Native. [Documentación](https://github.com/software-mansion/react-native-screens)
- **react-redux**: Biblioteca para conectar React con Redux. [Documentación](https://react-redux.js.org/)
- **redux**: Biblioteca para el manejo del estado global de la aplicación. [Documentación](https://redux.js.org/)
- **redux-thunk**: Middleware para manejar acciones asincrónicas en Redux. [Documentación](https://github.com/reduxjs/redux-thunk)

## Instalación y Uso

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/facundocasal/App-Diary-ReactNative.git
   
2. **Navega al directorio del proyecto:**
   
   ```bash
   cd diario-intimo-movil

3. **Instala las dependencias:**
  
   ```bash
   npm install
   
4. **Configura Firebase y key google map:**
  ## Firebase
- Crea un proyecto en la Consola de Firebase.
- Obtén las credenciales de Firebase y agrégalas al archivo de configuración /firebase/firebase.config.js.
  ## Google map
- obten tu key para la api de google map.
- Agrégala al archivo de configuración /constants/map.js.

5. **Ejecuta la aplicación:**
   ```bash
   expo start

#### Esto abrirá el servidor de desarrollo y podrás escanear el código QR con la aplicación Expo Go en tu dispositivo móvil para probar la aplicación.

## Contribuciones
Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor abre un issue o envía un pull request.

## Espero que disfurten mi proyecto , Saludos.
