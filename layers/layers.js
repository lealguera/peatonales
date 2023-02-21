var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Combinado_1 = new ol.format.GeoJSON();
var features_Combinado_1 = format_Combinado_1.readFeatures(json_Combinado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Combinado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combinado_1.addFeatures(features_Combinado_1);
var lyr_Combinado_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Combinado_1, 
                style: style_Combinado_1,
                interactive: true,
    title: 'Combinado<br />\
    <img src="styles/legend/Combinado_1_0.png" /> AHUACHAPAN (2 INTER)<br />\
    <img src="styles/legend/Combinado_1_1.png" /> APOPA (1 INTER)<br />\
    <img src="styles/legend/Combinado_1_2.png" /> MERLIOT (7 INTER)<br />\
    <img src="styles/legend/Combinado_1_3.png" /> METAPAN (5 INTER)<br />\
    <img src="styles/legend/Combinado_1_4.png" /> QUEZALTEPEQUE (1 INTER)<br />\
    <img src="styles/legend/Combinado_1_5.png" /> SANTA TECLA (10 INTER)<br />\
    <img src="styles/legend/Combinado_1_6.png" /> SONSONATE (5 INTER)<br />\
    <img src="styles/legend/Combinado_1_7.png" /> SOYAPANGO (7 INTER)<br />\
    <img src="styles/legend/Combinado_1_8.png" /> ZONA 1 (14 iNTER)<br />\
    <img src="styles/legend/Combinado_1_9.png" /> ZONA 10 (22 INTER)<br />\
    <img src="styles/legend/Combinado_1_10.png" /> ZONA 11 (28 INTER)<br />\
    <img src="styles/legend/Combinado_1_11.png" /> ZONA 12 (22 INTER)<br />\
    <img src="styles/legend/Combinado_1_12.png" /> ZONA 13 (9 INTER)<br />\
    <img src="styles/legend/Combinado_1_13.png" /> ZONA 14 (2 iNTER)<br />\
    <img src="styles/legend/Combinado_1_14.png" /> ZONA 15 (7 iNTER)<br />\
    <img src="styles/legend/Combinado_1_15.png" /> ZONA 2 (11 INTER)<br />\
    <img src="styles/legend/Combinado_1_16.png" /> ZONA 20 (15 INTER)<br />\
    <img src="styles/legend/Combinado_1_17.png" /> ZONA 21 (24 INTER)<br />\
    <img src="styles/legend/Combinado_1_18.png" /> ZONA 22 (6 INTER)<br />\
    <img src="styles/legend/Combinado_1_19.png" /> ZONA 23 (7 INTER)<br />\
    <img src="styles/legend/Combinado_1_20.png" /> ZONA 3 (4 INTER)<br />\
    <img src="styles/legend/Combinado_1_21.png" /> ZONA 4 (13 INTER)<br />\
    <img src="styles/legend/Combinado_1_22.png" /> ZONA 5 (9 INTER)<br />\
    <img src="styles/legend/Combinado_1_23.png" /> ZONA 6 (12 INTER)<br />\
    <img src="styles/legend/Combinado_1_24.png" /> ZONA 7 (10 INTER)<br />\
    <img src="styles/legend/Combinado_1_25.png" /> ZONA 8 (12 INTER)<br />\
    <img src="styles/legend/Combinado_1_26.png" /> ZONA 9 (9 INTER)<br />\
    <img src="styles/legend/Combinado_1_27.png" /> ZONA 99 (24 INTER)<br />\
    <img src="styles/legend/Combinado_1_28.png" /> <br />'
        });
var format_CRUCESPEATONALFEB20rehecho_2 = new ol.format.GeoJSON();
var features_CRUCESPEATONALFEB20rehecho_2 = format_CRUCESPEATONALFEB20rehecho_2.readFeatures(json_CRUCESPEATONALFEB20rehecho_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRUCESPEATONALFEB20rehecho_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRUCESPEATONALFEB20rehecho_2.addFeatures(features_CRUCESPEATONALFEB20rehecho_2);
var lyr_CRUCESPEATONALFEB20rehecho_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRUCESPEATONALFEB20rehecho_2, 
                style: style_CRUCESPEATONALFEB20rehecho_2,
                interactive: true,
                title: '<img src="styles/legend/CRUCESPEATONALFEB20rehecho_2.png" /> CRUCES PEATONAL FEB 20 — rehecho'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Combinado_1.setVisible(true);lyr_CRUCESPEATONALFEB20rehecho_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Combinado_1,lyr_CRUCESPEATONALFEB20rehecho_2];
lyr_Combinado_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_CRUCESPEATONALFEB20rehecho_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SISTEMA': 'SISTEMA', 'LUCES': 'LUCES', 'CÓDIGO': 'CÓDIGO', 'TENTATIVO': 'TENTATIVO', 'OBSERVASIÓN': 'OBSERVASIÓN', });
lyr_Combinado_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CRUCESPEATONALFEB20rehecho_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'SISTEMA': 'TextEdit', 'LUCES': 'TextEdit', 'CÓDIGO': 'TextEdit', 'TENTATIVO': 'TextEdit', 'OBSERVASIÓN': 'TextEdit', });
lyr_Combinado_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CRUCESPEATONALFEB20rehecho_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SISTEMA': 'inline label', 'LUCES': 'inline label', 'CÓDIGO': 'header label', 'TENTATIVO': 'inline label', 'OBSERVASIÓN': 'inline label', });
lyr_CRUCESPEATONALFEB20rehecho_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});