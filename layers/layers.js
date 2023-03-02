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
var format_Interseccionesconsemforointeligente_1 = new ol.format.GeoJSON();
var features_Interseccionesconsemforointeligente_1 = format_Interseccionesconsemforointeligente_1.readFeatures(json_Interseccionesconsemforointeligente_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Interseccionesconsemforointeligente_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Interseccionesconsemforointeligente_1.addFeatures(features_Interseccionesconsemforointeligente_1);
var lyr_Interseccionesconsemforointeligente_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Interseccionesconsemforointeligente_1, 
                style: style_Interseccionesconsemforointeligente_1,
                interactive: true,
    title: 'Intersecciones con semáforo inteligente<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_0.png" /> AHUACHAPAN (2 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_1.png" /> APOPA (1 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_2.png" /> MERLIOT (7 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_3.png" /> METAPAN (5 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_4.png" /> QUEZALTEPEQUE (1 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_5.png" /> SANTA TECLA (10 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_6.png" /> SONSONATE (5 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_7.png" /> SOYAPANGO (7 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_8.png" /> ZONA 1 (14 iNTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_9.png" /> ZONA 10 (22 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_10.png" /> ZONA 11 (28 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_11.png" /> ZONA 12 (22 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_12.png" /> ZONA 13 (9 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_13.png" /> ZONA 14 (2 iNTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_14.png" /> ZONA 15 (7 iNTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_15.png" /> ZONA 2 (11 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_16.png" /> ZONA 20 (15 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_17.png" /> ZONA 21 (24 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_18.png" /> ZONA 22 (6 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_19.png" /> ZONA 23 (7 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_20.png" /> ZONA 3 (4 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_21.png" /> ZONA 4 (13 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_22.png" /> ZONA 5 (9 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_23.png" /> ZONA 6 (12 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_24.png" /> ZONA 7 (10 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_25.png" /> ZONA 8 (12 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_26.png" /> ZONA 9 (9 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_27.png" /> ZONA 99 (24 INTER)<br />\
    <img src="styles/legend/Interseccionesconsemforointeligente_1_28.png" /> <br />'
        });
var format_CrucePeatonal2MAR_2 = new ol.format.GeoJSON();
var features_CrucePeatonal2MAR_2 = format_CrucePeatonal2MAR_2.readFeatures(json_CrucePeatonal2MAR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CrucePeatonal2MAR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrucePeatonal2MAR_2.addFeatures(features_CrucePeatonal2MAR_2);
var lyr_CrucePeatonal2MAR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CrucePeatonal2MAR_2, 
                style: style_CrucePeatonal2MAR_2,
                interactive: true,
                title: '<img src="styles/legend/CrucePeatonal2MAR_2.png" /> Cruce Peatonal 2 MAR'
            });
var format_fotomultafeb24copiar_3 = new ol.format.GeoJSON();
var features_fotomultafeb24copiar_3 = format_fotomultafeb24copiar_3.readFeatures(json_fotomultafeb24copiar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fotomultafeb24copiar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fotomultafeb24copiar_3.addFeatures(features_fotomultafeb24copiar_3);
var lyr_fotomultafeb24copiar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fotomultafeb24copiar_3, 
                style: style_fotomultafeb24copiar_3,
                interactive: true,
                title: '<img src="styles/legend/fotomultafeb24copiar_3.png" /> fotomulta feb 24 copiar'
            });
var format_Crucespeatonales55nuevas_4 = new ol.format.GeoJSON();
var features_Crucespeatonales55nuevas_4 = format_Crucespeatonales55nuevas_4.readFeatures(json_Crucespeatonales55nuevas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crucespeatonales55nuevas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crucespeatonales55nuevas_4.addFeatures(features_Crucespeatonales55nuevas_4);
var lyr_Crucespeatonales55nuevas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Crucespeatonales55nuevas_4, 
                style: style_Crucespeatonales55nuevas_4,
                interactive: true,
                title: '<img src="styles/legend/Crucespeatonales55nuevas_4.png" /> Cruces peatonales 55 nuevas'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Interseccionesconsemforointeligente_1.setVisible(true);lyr_CrucePeatonal2MAR_2.setVisible(true);lyr_fotomultafeb24copiar_3.setVisible(true);lyr_Crucespeatonales55nuevas_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Interseccionesconsemforointeligente_1,lyr_CrucePeatonal2MAR_2,lyr_fotomultafeb24copiar_3,lyr_Crucespeatonales55nuevas_4];
lyr_Interseccionesconsemforointeligente_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_CrucePeatonal2MAR_2.set('fieldAliases', {'SISTEMA': 'SISTEMA', 'LUCES': 'LUCES', 'CÓDIGO': 'CÓDIGO', 'TENTATIVO': 'TENTATIVO', 'OBSERVASI�': 'OBSERVASI�', });
lyr_fotomultafeb24copiar_3.set('fieldAliases', {'CONTROL': 'CONTROL', 'SISTEMA': 'SISTEMA', });
lyr_Crucespeatonales55nuevas_4.set('fieldAliases', {'id': 'id', 'CÓDIGO': 'CÓDIGO', 'SISTEMA': 'SISTEMA', 'LUCES': 'LUCES', 'REFERENCIA': 'REFERENCIA', });
lyr_Interseccionesconsemforointeligente_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CrucePeatonal2MAR_2.set('fieldImages', {'SISTEMA': 'TextEdit', 'LUCES': 'TextEdit', 'CÓDIGO': 'TextEdit', 'TENTATIVO': 'TextEdit', 'OBSERVASI�': 'TextEdit', });
lyr_fotomultafeb24copiar_3.set('fieldImages', {'CONTROL': 'TextEdit', 'SISTEMA': 'TextEdit', });
lyr_Crucespeatonales55nuevas_4.set('fieldImages', {'id': '', 'CÓDIGO': '', 'SISTEMA': '', 'LUCES': '', 'REFERENCIA': '', });
lyr_Interseccionesconsemforointeligente_1.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'header label', 'path': 'no label', });
lyr_CrucePeatonal2MAR_2.set('fieldLabels', {'SISTEMA': 'no label', 'LUCES': 'no label', 'CÓDIGO': 'no label', 'TENTATIVO': 'no label', 'OBSERVASI�': 'no label', });
lyr_fotomultafeb24copiar_3.set('fieldLabels', {'CONTROL': 'no label', 'SISTEMA': 'no label', });
lyr_Crucespeatonales55nuevas_4.set('fieldLabels', {'id': 'no label', 'CÓDIGO': 'no label', 'SISTEMA': 'no label', 'LUCES': 'no label', 'REFERENCIA': 'no label', });
lyr_Crucespeatonales55nuevas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});