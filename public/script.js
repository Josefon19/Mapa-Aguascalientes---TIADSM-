// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Definir íconos personalizados
var iconoMonumento = L.icon({
    iconUrl: 'https://img.icons8.com/?size=100&id=CdvSVkICL2IT&format=png&color=000000', // Cambia esta URL por la imagen del ícono del monumento
    iconSize: [30, 45], // Tamaño del icono
    iconAnchor: [15, 45], // Punto de anclaje del icono
    popupAnchor: [0, -40] // Punto donde aparece el pop-up
});

var iconoMuseo = L.icon({
    iconUrl: 'https://img.icons8.com/?size=100&id=nyKrmCVM10nS&format=png&color=000000', // Cambia esta URL por la imagen del ícono del museo
    iconSize: [30, 45],
    iconAnchor: [15, 45],
    popupAnchor: [0, -40]
});

var iconoParque = L.icon({
    iconUrl: 'https://img.icons8.com/?size=100&id=lITa93ONeJR5&format=png&color=000000', // Cambia esta URL por la imagen del ícono del parque
    iconSize: [30, 45],
    iconAnchor: [15, 45],
    popupAnchor: [0, -40]
});

// Añadir marcadores personalizados a ubicaciones existentes y nuevas
var marker = L.marker([21.88234, -102.28259], { icon: iconoMonumento }).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.");

var plazaPatria = L.marker([21.88187, -102.29495], { icon: iconoMonumento }).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

var museoMuerte = L.marker([21.88417, -102.28878], { icon: iconoMuseo }).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

var parqueTresCenturias = L.marker([21.88360, -102.29570], { icon: iconoParque }).addTo(map);
parqueTresCenturias.bindPopup("<b>Parque Tres Centurias</b><br>Un lugar histórico y recreativo.");

var catedral = L.marker([21.88298, -102.29174], { icon: iconoMonumento }).addTo(map);
catedral.bindPopup("<b>Catedral Basílica de Nuestra Señora de la Asunción</b><br>El principal templo de la ciudad.");

var jardinSanMarcos = L.marker([21.88185, -102.29701], { icon: iconoParque }).addTo(map);
jardinSanMarcos.bindPopup("<b>Jardín de San Marcos</b><br>Un hermoso jardín y el corazón de la Feria de San Marcos.");

// Nuevas ubicaciones importantes
var parqueRodolfo = L.marker([21.8893, -102.3156], { icon: iconoParque }).addTo(map);
parqueRodolfo.bindPopup("<b>Parque Rodolfo Landeros</b><br>Un hermoso parque para la recreación y el esparcimiento.");

var museoAguascalientes = L.marker([21.8820, -102.2905], { icon: iconoMuseo }).addTo(map);
museoAguascalientes.bindPopup("<b>Museo de Aguascalientes</b><br>Arte y cultura en un solo lugar.");

var plazaToros = L.marker([21.8765, -102.3020], { icon: iconoMonumento }).addTo(map);
plazaToros.bindPopup("<b>Plaza de Toros Monumental</b><br>Un icono de la tradición taurina de la ciudad.");

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
  }).addTo(map);
  feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");
  

// Dibujar un polígono para el Centro Histórico
var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
  ]).addTo(map);
  centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");
  
  var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    };
    var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico,
    "Tres Centurias":parqueTresCenturias,
    "Plaza patria":plazaPatria,
    "Plaza Toros":plazaToros,
    "Museo ":museoAguascalientes,
    "Jardin San Marcos":jardinSanMarcos,
    "Catedral":catedral,
    "Parque Rodolfo":parqueRodolfo
    };
    L.control.layers(baseMaps, overlayMaps).addTo(map);