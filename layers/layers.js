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
var format_CRUCESPEATONALFEB20rehecho_1 = new ol.format.GeoJSON();
var features_CRUCESPEATONALFEB20rehecho_1 = format_CRUCESPEATONALFEB20rehecho_1.readFeatures(json_CRUCESPEATONALFEB20rehecho_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRUCESPEATONALFEB20rehecho_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRUCESPEATONALFEB20rehecho_1.addFeatures(features_CRUCESPEATONALFEB20rehecho_1);
var lyr_CRUCESPEATONALFEB20rehecho_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRUCESPEATONALFEB20rehecho_1, 
                style: style_CRUCESPEATONALFEB20rehecho_1,
                interactive: true,
                title: '<img src="styles/legend/CRUCESPEATONALFEB20rehecho_1.png" /> CRUCES PEATONAL FEB 20 — rehecho'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_CRUCESPEATONALFEB20rehecho_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_CRUCESPEATONALFEB20rehecho_1];
lyr_CRUCESPEATONALFEB20rehecho_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SISTEMA': 'SISTEMA', 'LUCES': 'LUCES', 'CÓDIGO': 'CÓDIGO', 'TENTATIVO': 'TENTATIVO', 'OBSERVASIÓN': 'OBSERVASIÓN', });
lyr_CRUCESPEATONALFEB20rehecho_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'SISTEMA': 'TextEdit', 'LUCES': 'TextEdit', 'CÓDIGO': 'TextEdit', 'TENTATIVO': 'TextEdit', 'OBSERVASIÓN': 'TextEdit', });
lyr_CRUCESPEATONALFEB20rehecho_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SISTEMA': 'inline label', 'LUCES': 'inline label', 'CÓDIGO': 'header label', 'TENTATIVO': 'inline label', 'OBSERVASIÓN': 'inline label', });
lyr_CRUCESPEATONALFEB20rehecho_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});