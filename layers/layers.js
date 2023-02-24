var wms_layers = [];

var format_ZONA9924INTER_0 = new ol.format.GeoJSON();
var features_ZONA9924INTER_0 = format_ZONA9924INTER_0.readFeatures(json_ZONA9924INTER_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA9924INTER_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA9924INTER_0.addFeatures(features_ZONA9924INTER_0);
var lyr_ZONA9924INTER_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA9924INTER_0, 
                style: style_ZONA9924INTER_0,
                interactive: true,
                title: '<img src="styles/legend/ZONA9924INTER_0.png" /> ZONA 99 (24 INTER)'
            });
var format_ZONA99INTER_1 = new ol.format.GeoJSON();
var features_ZONA99INTER_1 = format_ZONA99INTER_1.readFeatures(json_ZONA99INTER_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA99INTER_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA99INTER_1.addFeatures(features_ZONA99INTER_1);
var lyr_ZONA99INTER_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA99INTER_1, 
                style: style_ZONA99INTER_1,
                interactive: true,
                title: 'ZONA 9 (9 INTER)'
            });
var format_ZONA812INTER_2 = new ol.format.GeoJSON();
var features_ZONA812INTER_2 = format_ZONA812INTER_2.readFeatures(json_ZONA812INTER_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA812INTER_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA812INTER_2.addFeatures(features_ZONA812INTER_2);
var lyr_ZONA812INTER_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA812INTER_2, 
                style: style_ZONA812INTER_2,
                interactive: true,
                title: 'ZONA 8 (12 INTER)'
            });
var format_ZONA710INTER_3 = new ol.format.GeoJSON();
var features_ZONA710INTER_3 = format_ZONA710INTER_3.readFeatures(json_ZONA710INTER_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA710INTER_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA710INTER_3.addFeatures(features_ZONA710INTER_3);
var lyr_ZONA710INTER_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA710INTER_3, 
                style: style_ZONA710INTER_3,
                interactive: true,
                title: 'ZONA 7 (10 INTER)'
            });
var format_ZONA612INTER_4 = new ol.format.GeoJSON();
var features_ZONA612INTER_4 = format_ZONA612INTER_4.readFeatures(json_ZONA612INTER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA612INTER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA612INTER_4.addFeatures(features_ZONA612INTER_4);
var lyr_ZONA612INTER_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA612INTER_4, 
                style: style_ZONA612INTER_4,
                interactive: true,
                title: 'ZONA 6 (12 INTER)'
            });
var format_ZONA59INTER_5 = new ol.format.GeoJSON();
var features_ZONA59INTER_5 = format_ZONA59INTER_5.readFeatures(json_ZONA59INTER_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA59INTER_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA59INTER_5.addFeatures(features_ZONA59INTER_5);
var lyr_ZONA59INTER_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA59INTER_5, 
                style: style_ZONA59INTER_5,
                interactive: true,
                title: 'ZONA 5 (9 INTER)'
            });
var format_ZONA413INTER_6 = new ol.format.GeoJSON();
var features_ZONA413INTER_6 = format_ZONA413INTER_6.readFeatures(json_ZONA413INTER_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA413INTER_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA413INTER_6.addFeatures(features_ZONA413INTER_6);
var lyr_ZONA413INTER_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA413INTER_6, 
                style: style_ZONA413INTER_6,
                interactive: true,
                title: 'ZONA 4 (13 INTER)'
            });
var format_ZONA34INTER_7 = new ol.format.GeoJSON();
var features_ZONA34INTER_7 = format_ZONA34INTER_7.readFeatures(json_ZONA34INTER_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA34INTER_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA34INTER_7.addFeatures(features_ZONA34INTER_7);
var lyr_ZONA34INTER_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA34INTER_7, 
                style: style_ZONA34INTER_7,
                interactive: true,
                title: 'ZONA 3 (4 INTER)'
            });
var format_ZONA237INTER_8 = new ol.format.GeoJSON();
var features_ZONA237INTER_8 = format_ZONA237INTER_8.readFeatures(json_ZONA237INTER_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA237INTER_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA237INTER_8.addFeatures(features_ZONA237INTER_8);
var lyr_ZONA237INTER_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA237INTER_8, 
                style: style_ZONA237INTER_8,
                interactive: true,
                title: 'ZONA 23 (7 INTER)'
            });
var format_ZONA226INTER_9 = new ol.format.GeoJSON();
var features_ZONA226INTER_9 = format_ZONA226INTER_9.readFeatures(json_ZONA226INTER_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA226INTER_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA226INTER_9.addFeatures(features_ZONA226INTER_9);
var lyr_ZONA226INTER_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA226INTER_9, 
                style: style_ZONA226INTER_9,
                interactive: true,
                title: 'ZONA 22 (6 INTER)'
            });
var format_ZONA2124INTER_10 = new ol.format.GeoJSON();
var features_ZONA2124INTER_10 = format_ZONA2124INTER_10.readFeatures(json_ZONA2124INTER_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA2124INTER_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA2124INTER_10.addFeatures(features_ZONA2124INTER_10);
var lyr_ZONA2124INTER_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA2124INTER_10, 
                style: style_ZONA2124INTER_10,
                interactive: true,
                title: 'ZONA 21 (24 INTER)'
            });
var format_ZONA2015INTER_11 = new ol.format.GeoJSON();
var features_ZONA2015INTER_11 = format_ZONA2015INTER_11.readFeatures(json_ZONA2015INTER_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA2015INTER_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA2015INTER_11.addFeatures(features_ZONA2015INTER_11);
var lyr_ZONA2015INTER_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA2015INTER_11, 
                style: style_ZONA2015INTER_11,
                interactive: true,
                title: 'ZONA 20 (15 INTER)'
            });
var format_ZONA211INTER_12 = new ol.format.GeoJSON();
var features_ZONA211INTER_12 = format_ZONA211INTER_12.readFeatures(json_ZONA211INTER_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA211INTER_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA211INTER_12.addFeatures(features_ZONA211INTER_12);
var lyr_ZONA211INTER_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA211INTER_12, 
                style: style_ZONA211INTER_12,
                interactive: true,
                title: 'ZONA 2 (11 INTER)'
            });
var format_ZONA157iNTER_13 = new ol.format.GeoJSON();
var features_ZONA157iNTER_13 = format_ZONA157iNTER_13.readFeatures(json_ZONA157iNTER_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA157iNTER_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA157iNTER_13.addFeatures(features_ZONA157iNTER_13);
var lyr_ZONA157iNTER_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA157iNTER_13, 
                style: style_ZONA157iNTER_13,
                interactive: true,
                title: 'ZONA 15 (7 iNTER)'
            });
var format_ZONA142iNTER_14 = new ol.format.GeoJSON();
var features_ZONA142iNTER_14 = format_ZONA142iNTER_14.readFeatures(json_ZONA142iNTER_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA142iNTER_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA142iNTER_14.addFeatures(features_ZONA142iNTER_14);
var lyr_ZONA142iNTER_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA142iNTER_14, 
                style: style_ZONA142iNTER_14,
                interactive: true,
                title: 'ZONA 14 (2 iNTER)'
            });
var format_ZONA139INTER_15 = new ol.format.GeoJSON();
var features_ZONA139INTER_15 = format_ZONA139INTER_15.readFeatures(json_ZONA139INTER_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA139INTER_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA139INTER_15.addFeatures(features_ZONA139INTER_15);
var lyr_ZONA139INTER_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA139INTER_15, 
                style: style_ZONA139INTER_15,
                interactive: true,
                title: 'ZONA 13 (9 INTER)'
            });
var format_ZONA1222INTER_16 = new ol.format.GeoJSON();
var features_ZONA1222INTER_16 = format_ZONA1222INTER_16.readFeatures(json_ZONA1222INTER_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA1222INTER_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA1222INTER_16.addFeatures(features_ZONA1222INTER_16);
var lyr_ZONA1222INTER_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA1222INTER_16, 
                style: style_ZONA1222INTER_16,
                interactive: true,
                title: 'ZONA 12 (22 INTER)'
            });
var format_ZONA1128INTER_17 = new ol.format.GeoJSON();
var features_ZONA1128INTER_17 = format_ZONA1128INTER_17.readFeatures(json_ZONA1128INTER_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA1128INTER_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA1128INTER_17.addFeatures(features_ZONA1128INTER_17);
var lyr_ZONA1128INTER_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA1128INTER_17, 
                style: style_ZONA1128INTER_17,
                interactive: true,
                title: 'ZONA 11 (28 INTER)'
            });
var format_ZONA1022INTER_18 = new ol.format.GeoJSON();
var features_ZONA1022INTER_18 = format_ZONA1022INTER_18.readFeatures(json_ZONA1022INTER_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA1022INTER_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA1022INTER_18.addFeatures(features_ZONA1022INTER_18);
var lyr_ZONA1022INTER_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA1022INTER_18, 
                style: style_ZONA1022INTER_18,
                interactive: true,
                title: 'ZONA 10 (22 INTER)'
            });
var format_ZONA114iNTER_19 = new ol.format.GeoJSON();
var features_ZONA114iNTER_19 = format_ZONA114iNTER_19.readFeatures(json_ZONA114iNTER_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA114iNTER_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA114iNTER_19.addFeatures(features_ZONA114iNTER_19);
var lyr_ZONA114iNTER_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA114iNTER_19, 
                style: style_ZONA114iNTER_19,
                interactive: true,
                title: 'ZONA 1 (14 iNTER)'
            });
var format_SOYAPANGO7INTER_20 = new ol.format.GeoJSON();
var features_SOYAPANGO7INTER_20 = format_SOYAPANGO7INTER_20.readFeatures(json_SOYAPANGO7INTER_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOYAPANGO7INTER_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOYAPANGO7INTER_20.addFeatures(features_SOYAPANGO7INTER_20);
var lyr_SOYAPANGO7INTER_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SOYAPANGO7INTER_20, 
                style: style_SOYAPANGO7INTER_20,
                interactive: true,
                title: 'SOYAPANGO (7 INTER)'
            });
var format_SONSONATE5INTER_21 = new ol.format.GeoJSON();
var features_SONSONATE5INTER_21 = format_SONSONATE5INTER_21.readFeatures(json_SONSONATE5INTER_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SONSONATE5INTER_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SONSONATE5INTER_21.addFeatures(features_SONSONATE5INTER_21);
var lyr_SONSONATE5INTER_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SONSONATE5INTER_21, 
                style: style_SONSONATE5INTER_21,
                interactive: true,
                title: 'SONSONATE (5 INTER)'
            });
var format_SANTATECLA10INTER_22 = new ol.format.GeoJSON();
var features_SANTATECLA10INTER_22 = format_SANTATECLA10INTER_22.readFeatures(json_SANTATECLA10INTER_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SANTATECLA10INTER_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SANTATECLA10INTER_22.addFeatures(features_SANTATECLA10INTER_22);
var lyr_SANTATECLA10INTER_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SANTATECLA10INTER_22, 
                style: style_SANTATECLA10INTER_22,
                interactive: true,
                title: 'SANTA TECLA (10 INTER)'
            });
var format_QUEZALTEPEQUE1INTER_23 = new ol.format.GeoJSON();
var features_QUEZALTEPEQUE1INTER_23 = format_QUEZALTEPEQUE1INTER_23.readFeatures(json_QUEZALTEPEQUE1INTER_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QUEZALTEPEQUE1INTER_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUEZALTEPEQUE1INTER_23.addFeatures(features_QUEZALTEPEQUE1INTER_23);
var lyr_QUEZALTEPEQUE1INTER_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QUEZALTEPEQUE1INTER_23, 
                style: style_QUEZALTEPEQUE1INTER_23,
                interactive: true,
                title: 'QUEZALTEPEQUE (1 INTER)'
            });
var format_METAPAN5INTER_24 = new ol.format.GeoJSON();
var features_METAPAN5INTER_24 = format_METAPAN5INTER_24.readFeatures(json_METAPAN5INTER_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_METAPAN5INTER_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_METAPAN5INTER_24.addFeatures(features_METAPAN5INTER_24);
var lyr_METAPAN5INTER_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_METAPAN5INTER_24, 
                style: style_METAPAN5INTER_24,
                interactive: true,
                title: 'METAPAN (5 INTER)'
            });
var format_MERLIOT7INTER_25 = new ol.format.GeoJSON();
var features_MERLIOT7INTER_25 = format_MERLIOT7INTER_25.readFeatures(json_MERLIOT7INTER_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MERLIOT7INTER_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MERLIOT7INTER_25.addFeatures(features_MERLIOT7INTER_25);
var lyr_MERLIOT7INTER_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MERLIOT7INTER_25, 
                style: style_MERLIOT7INTER_25,
                interactive: true,
                title: 'MERLIOT (7 INTER)'
            });
var format_APOPA1INTER_26 = new ol.format.GeoJSON();
var features_APOPA1INTER_26 = format_APOPA1INTER_26.readFeatures(json_APOPA1INTER_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APOPA1INTER_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APOPA1INTER_26.addFeatures(features_APOPA1INTER_26);
var lyr_APOPA1INTER_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APOPA1INTER_26, 
                style: style_APOPA1INTER_26,
                interactive: true,
                title: 'APOPA (1 INTER)'
            });
var format_AHUACHAPAN2INTER_27 = new ol.format.GeoJSON();
var features_AHUACHAPAN2INTER_27 = format_AHUACHAPAN2INTER_27.readFeatures(json_AHUACHAPAN2INTER_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AHUACHAPAN2INTER_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AHUACHAPAN2INTER_27.addFeatures(features_AHUACHAPAN2INTER_27);
var lyr_AHUACHAPAN2INTER_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AHUACHAPAN2INTER_27, 
                style: style_AHUACHAPAN2INTER_27,
                interactive: true,
                title: 'AHUACHAPAN (2 INTER)'
            });

        var lyr_GoogleHybrid_28 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Crucepeatonal24FEB_29 = new ol.format.GeoJSON();
var features_Crucepeatonal24FEB_29 = format_Crucepeatonal24FEB_29.readFeatures(json_Crucepeatonal24FEB_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crucepeatonal24FEB_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crucepeatonal24FEB_29.addFeatures(features_Crucepeatonal24FEB_29);
var lyr_Crucepeatonal24FEB_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Crucepeatonal24FEB_29, 
                style: style_Crucepeatonal24FEB_29,
                interactive: true,
                title: '<img src="styles/legend/Crucepeatonal24FEB_29.png" /> Cruce peatonal 24 FEB'
            });
var format_fotomultafeb24copiar_30 = new ol.format.GeoJSON();
var features_fotomultafeb24copiar_30 = format_fotomultafeb24copiar_30.readFeatures(json_fotomultafeb24copiar_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fotomultafeb24copiar_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fotomultafeb24copiar_30.addFeatures(features_fotomultafeb24copiar_30);
var lyr_fotomultafeb24copiar_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fotomultafeb24copiar_30, 
                style: style_fotomultafeb24copiar_30,
                interactive: true,
                title: '<img src="styles/legend/fotomultafeb24copiar_30.png" /> fotomulta feb 24 copiar'
            });
var format_Combinado_31 = new ol.format.GeoJSON();
var features_Combinado_31 = format_Combinado_31.readFeatures(json_Combinado_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Combinado_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combinado_31.addFeatures(features_Combinado_31);
var lyr_Combinado_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Combinado_31, 
                style: style_Combinado_31,
                interactive: true,
                title: '<img src="styles/legend/Combinado_31.png" /> Combinado'
            });
var group_RZ39C3F = new ol.layer.Group({
                                layers: [lyr_ZONA9924INTER_0,lyr_ZONA99INTER_1,lyr_ZONA812INTER_2,lyr_ZONA710INTER_3,lyr_ZONA612INTER_4,lyr_ZONA59INTER_5,lyr_ZONA413INTER_6,lyr_ZONA34INTER_7,lyr_ZONA237INTER_8,lyr_ZONA226INTER_9,lyr_ZONA2124INTER_10,lyr_ZONA2015INTER_11,lyr_ZONA211INTER_12,lyr_ZONA157iNTER_13,lyr_ZONA142iNTER_14,lyr_ZONA139INTER_15,lyr_ZONA1222INTER_16,lyr_ZONA1128INTER_17,lyr_ZONA1022INTER_18,lyr_ZONA114iNTER_19,lyr_SOYAPANGO7INTER_20,lyr_SONSONATE5INTER_21,lyr_SANTATECLA10INTER_22,lyr_QUEZALTEPEQUE1INTER_23,lyr_METAPAN5INTER_24,lyr_MERLIOT7INTER_25,lyr_APOPA1INTER_26,lyr_AHUACHAPAN2INTER_27,],
                                title: "$RZ39C3F"});

lyr_ZONA9924INTER_0.setVisible(true);lyr_ZONA99INTER_1.setVisible(true);lyr_ZONA812INTER_2.setVisible(true);lyr_ZONA710INTER_3.setVisible(true);lyr_ZONA612INTER_4.setVisible(true);lyr_ZONA59INTER_5.setVisible(true);lyr_ZONA413INTER_6.setVisible(true);lyr_ZONA34INTER_7.setVisible(true);lyr_ZONA237INTER_8.setVisible(true);lyr_ZONA226INTER_9.setVisible(true);lyr_ZONA2124INTER_10.setVisible(true);lyr_ZONA2015INTER_11.setVisible(true);lyr_ZONA211INTER_12.setVisible(true);lyr_ZONA157iNTER_13.setVisible(true);lyr_ZONA142iNTER_14.setVisible(true);lyr_ZONA139INTER_15.setVisible(true);lyr_ZONA1222INTER_16.setVisible(true);lyr_ZONA1128INTER_17.setVisible(true);lyr_ZONA1022INTER_18.setVisible(true);lyr_ZONA114iNTER_19.setVisible(true);lyr_SOYAPANGO7INTER_20.setVisible(true);lyr_SONSONATE5INTER_21.setVisible(true);lyr_SANTATECLA10INTER_22.setVisible(true);lyr_QUEZALTEPEQUE1INTER_23.setVisible(true);lyr_METAPAN5INTER_24.setVisible(true);lyr_MERLIOT7INTER_25.setVisible(true);lyr_APOPA1INTER_26.setVisible(true);lyr_AHUACHAPAN2INTER_27.setVisible(true);lyr_GoogleHybrid_28.setVisible(true);lyr_Crucepeatonal24FEB_29.setVisible(true);lyr_fotomultafeb24copiar_30.setVisible(true);lyr_Combinado_31.setVisible(true);
var layersList = [group_RZ39C3F,lyr_GoogleHybrid_28,lyr_Crucepeatonal24FEB_29,lyr_fotomultafeb24copiar_30,lyr_Combinado_31];
lyr_ZONA9924INTER_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA99INTER_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA812INTER_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA710INTER_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA612INTER_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA59INTER_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA413INTER_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA34INTER_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA237INTER_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA226INTER_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA2124INTER_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA2015INTER_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA211INTER_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA157iNTER_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA142iNTER_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA139INTER_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA1222INTER_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA1128INTER_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA1022INTER_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONA114iNTER_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SOYAPANGO7INTER_20.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SONSONATE5INTER_21.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SANTATECLA10INTER_22.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QUEZALTEPEQUE1INTER_23.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_METAPAN5INTER_24.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MERLIOT7INTER_25.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_APOPA1INTER_26.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AHUACHAPAN2INTER_27.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Crucepeatonal24FEB_29.set('fieldAliases', {'extrude': 'extrude', 'SISTEMA': 'SISTEMA', 'LUCES': 'LUCES', 'CÓDIGO': 'CÓDIGO', 'TENTATIVO': 'TENTATIVO', 'OBSERVASI�': 'OBSERVASI�', });
lyr_fotomultafeb24copiar_30.set('fieldAliases', {'CONTROL': 'CONTROL', 'SISTEMA': 'SISTEMA', });
lyr_Combinado_31.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_ZONA9924INTER_0.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ZONA99INTER_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA812INTER_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA710INTER_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA612INTER_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA59INTER_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA413INTER_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA34INTER_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA237INTER_8.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA226INTER_9.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA2124INTER_10.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA2015INTER_11.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA211INTER_12.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA157iNTER_13.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA142iNTER_14.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA139INTER_15.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA1222INTER_16.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA1128INTER_17.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA1022INTER_18.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZONA114iNTER_19.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_SOYAPANGO7INTER_20.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_SONSONATE5INTER_21.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_SANTATECLA10INTER_22.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_QUEZALTEPEQUE1INTER_23.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_METAPAN5INTER_24.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_MERLIOT7INTER_25.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_APOPA1INTER_26.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AHUACHAPAN2INTER_27.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Crucepeatonal24FEB_29.set('fieldImages', {'extrude': 'Range', 'SISTEMA': 'TextEdit', 'LUCES': 'TextEdit', 'CÓDIGO': 'TextEdit', 'TENTATIVO': 'TextEdit', 'OBSERVASI�': 'TextEdit', });
lyr_fotomultafeb24copiar_30.set('fieldImages', {'CONTROL': 'TextEdit', 'SISTEMA': 'TextEdit', });
lyr_Combinado_31.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layer': '', 'path': '', });
lyr_ZONA9924INTER_0.set('fieldLabels', {});
lyr_ZONA99INTER_1.set('fieldLabels', {});
lyr_ZONA812INTER_2.set('fieldLabels', {});
lyr_ZONA710INTER_3.set('fieldLabels', {});
lyr_ZONA612INTER_4.set('fieldLabels', {});
lyr_ZONA59INTER_5.set('fieldLabels', {});
lyr_ZONA413INTER_6.set('fieldLabels', {});
lyr_ZONA34INTER_7.set('fieldLabels', {});
lyr_ZONA237INTER_8.set('fieldLabels', {});
lyr_ZONA226INTER_9.set('fieldLabels', {});
lyr_ZONA2124INTER_10.set('fieldLabels', {});
lyr_ZONA2015INTER_11.set('fieldLabels', {});
lyr_ZONA211INTER_12.set('fieldLabels', {});
lyr_ZONA157iNTER_13.set('fieldLabels', {});
lyr_ZONA142iNTER_14.set('fieldLabels', {});
lyr_ZONA139INTER_15.set('fieldLabels', {});
lyr_ZONA1222INTER_16.set('fieldLabels', {});
lyr_ZONA1128INTER_17.set('fieldLabels', {});
lyr_ZONA1022INTER_18.set('fieldLabels', {});
lyr_ZONA114iNTER_19.set('fieldLabels', {});
lyr_SOYAPANGO7INTER_20.set('fieldLabels', {});
lyr_SONSONATE5INTER_21.set('fieldLabels', {});
lyr_SANTATECLA10INTER_22.set('fieldLabels', {});
lyr_QUEZALTEPEQUE1INTER_23.set('fieldLabels', {});
lyr_METAPAN5INTER_24.set('fieldLabels', {});
lyr_MERLIOT7INTER_25.set('fieldLabels', {});
lyr_APOPA1INTER_26.set('fieldLabels', {});
lyr_AHUACHAPAN2INTER_27.set('fieldLabels', {});
lyr_Crucepeatonal24FEB_29.set('fieldLabels', {'extrude': 'no label', 'SISTEMA': 'no label', 'LUCES': 'no label', 'CÓDIGO': 'header label', 'TENTATIVO': 'no label', 'OBSERVASI�': 'no label', });
lyr_fotomultafeb24copiar_30.set('fieldLabels', {'CONTROL': 'no label', 'SISTEMA': 'no label', });
lyr_Combinado_31.set('fieldLabels', {'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Combinado_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});