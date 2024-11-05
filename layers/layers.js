var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_simau_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "tobelo:simau",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "simau",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_simau_1, 0]);
var format_AOI_GalelaTobelo_2 = new ol.format.GeoJSON();
var features_AOI_GalelaTobelo_2 = format_AOI_GalelaTobelo_2.readFeatures(json_AOI_GalelaTobelo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOI_GalelaTobelo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOI_GalelaTobelo_2.addFeatures(features_AOI_GalelaTobelo_2);
var lyr_AOI_GalelaTobelo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOI_GalelaTobelo_2, 
                style: style_AOI_GalelaTobelo_2,
                popuplayertitle: "AOI_Galela-Tobelo",
                interactive: true,
                title: '<img src="styles/legend/AOI_GalelaTobelo_2.png" /> AOI_Galela-Tobelo'
            });
var format_Pemukiman_Simau_3 = new ol.format.GeoJSON();
var features_Pemukiman_Simau_3 = format_Pemukiman_Simau_3.readFeatures(json_Pemukiman_Simau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_Simau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_Simau_3.addFeatures(features_Pemukiman_Simau_3);
var lyr_Pemukiman_Simau_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_Simau_3, 
                style: style_Pemukiman_Simau_3,
                popuplayertitle: "Pemukiman_Simau",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_Simau_3.png" /> Pemukiman_Simau'
            });
var format_Pohon_Simau_4 = new ol.format.GeoJSON();
var features_Pohon_Simau_4 = format_Pohon_Simau_4.readFeatures(json_Pohon_Simau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pohon_Simau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pohon_Simau_4.addFeatures(features_Pohon_Simau_4);
var lyr_Pohon_Simau_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pohon_Simau_4, 
                style: style_Pohon_Simau_4,
                popuplayertitle: "Pohon_Simau",
                interactive: true,
                title: '<img src="styles/legend/Pohon_Simau_4.png" /> Pohon_Simau'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_simau_1.setVisible(true);lyr_AOI_GalelaTobelo_2.setVisible(true);lyr_Pemukiman_Simau_3.setVisible(true);lyr_Pohon_Simau_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_simau_1,lyr_AOI_GalelaTobelo_2,lyr_Pemukiman_Simau_3,lyr_Pohon_Simau_4];
lyr_AOI_GalelaTobelo_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'J_Pohon': 'J_Pohon', 'L_Desa_Ha': 'L_Desa_Ha', 'L_pmkmn_Ha': 'L_pmkmn_Ha', 'Jl_Kat1_Ha': 'Jl_Kat1_Ha', 'Jl_Kat2_Ha': 'Jl_Kat2_Ha', });
lyr_Pemukiman_Simau_3.set('fieldAliases', {'Id': 'Id', 'luas': 'luas', });
lyr_Pohon_Simau_4.set('fieldAliases', {'BLOCK_ID': 'BLOCK_ID', 'TREE_ID': 'TREE_ID', 'Anomaly': 'Anomaly', 'Crown': 'Crown', 'Density': 'Density', 'X_Center': 'X_Center', 'Y_Center': 'Y_Center', 'Elevation': 'Elevation', 'Height': 'Height', 'Comment': 'Comment', 'PJ': 'PJ', });
lyr_AOI_GalelaTobelo_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'J_Pohon': 'TextEdit', 'L_Desa_Ha': 'TextEdit', 'L_pmkmn_Ha': 'TextEdit', 'Jl_Kat1_Ha': 'TextEdit', 'Jl_Kat2_Ha': 'TextEdit', });
lyr_Pemukiman_Simau_3.set('fieldImages', {'Id': 'Range', 'luas': 'TextEdit', });
lyr_Pohon_Simau_4.set('fieldImages', {'BLOCK_ID': 'TextEdit', 'TREE_ID': 'TextEdit', 'Anomaly': 'TextEdit', 'Crown': 'TextEdit', 'Density': 'TextEdit', 'X_Center': 'TextEdit', 'Y_Center': 'TextEdit', 'Elevation': 'TextEdit', 'Height': 'TextEdit', 'Comment': 'TextEdit', 'PJ': 'Range', });
lyr_AOI_GalelaTobelo_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'J_Pohon': 'inline label - always visible', 'L_Desa_Ha': 'inline label - always visible', 'L_pmkmn_Ha': 'inline label - always visible', 'Jl_Kat1_Ha': 'inline label - always visible', 'Jl_Kat2_Ha': 'inline label - always visible', });
lyr_Pemukiman_Simau_3.set('fieldLabels', {'Id': 'no label', 'luas': 'no label', });
lyr_Pohon_Simau_4.set('fieldLabels', {'BLOCK_ID': 'hidden field', 'TREE_ID': 'hidden field', 'Anomaly': 'hidden field', 'Crown': 'hidden field', 'Density': 'hidden field', 'X_Center': 'hidden field', 'Y_Center': 'hidden field', 'Elevation': 'inline label - always visible', 'Height': 'inline label - always visible', 'Comment': 'hidden field', 'PJ': 'hidden field', });
lyr_Pohon_Simau_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});