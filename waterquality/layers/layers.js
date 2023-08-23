var wms_layers = [];

var format_UVAbsorbance_0 = new ol.format.GeoJSON();
var features_UVAbsorbance_0 = format_UVAbsorbance_0.readFeatures(json_UVAbsorbance_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UVAbsorbance_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UVAbsorbance_0.addFeatures(features_UVAbsorbance_0);
var lyr_UVAbsorbance_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UVAbsorbance_0, 
                style: style_UVAbsorbance_0,
                interactive: true,
    title: 'UVAbsorbance<br />\
    <img src="styles/legend/UVAbsorbance_0_0.png" /> 0.036 - 0.097<br />\
    <img src="styles/legend/UVAbsorbance_0_1.png" /> 0.097 - 0.115<br />\
    <img src="styles/legend/UVAbsorbance_0_2.png" /> 0.115 - 0.132<br />\
    <img src="styles/legend/UVAbsorbance_0_3.png" /> 0.132 - 0.156<br />\
    <img src="styles/legend/UVAbsorbance_0_4.png" /> 0.156 - 0.371<br />'
        });
var format_Turbidity_1 = new ol.format.GeoJSON();
var features_Turbidity_1 = format_Turbidity_1.readFeatures(json_Turbidity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turbidity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turbidity_1.addFeatures(features_Turbidity_1);
var lyr_Turbidity_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Turbidity_1, 
                style: style_Turbidity_1,
                interactive: true,
    title: 'Turbidity<br />\
    <img src="styles/legend/Turbidity_1_0.png" /> 0 - 6<br />\
    <img src="styles/legend/Turbidity_1_1.png" /> 6 - 9.8<br />\
    <img src="styles/legend/Turbidity_1_2.png" /> 9.8 - 15.8<br />\
    <img src="styles/legend/Turbidity_1_3.png" /> 15.8 - 32.2<br />\
    <img src="styles/legend/Turbidity_1_4.png" /> 32.2 - 1240<br />'
        });
var format_WaterTemperature_2 = new ol.format.GeoJSON();
var features_WaterTemperature_2 = format_WaterTemperature_2.readFeatures(json_WaterTemperature_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterTemperature_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterTemperature_2.addFeatures(features_WaterTemperature_2);
var lyr_WaterTemperature_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterTemperature_2, 
                style: style_WaterTemperature_2,
                interactive: true,
    title: 'WaterTemperature<br />\
    <img src="styles/legend/WaterTemperature_2_0.png" /> -0.6 - 4.5<br />\
    <img src="styles/legend/WaterTemperature_2_1.png" /> 4.5 - 9.7<br />\
    <img src="styles/legend/WaterTemperature_2_2.png" /> 9.7 - 16.7<br />\
    <img src="styles/legend/WaterTemperature_2_3.png" /> 16.7 - 22.4<br />\
    <img src="styles/legend/WaterTemperature_2_4.png" /> 22.4 - 30.3<br />'
        });
var format_AirTemperature_3 = new ol.format.GeoJSON();
var features_AirTemperature_3 = format_AirTemperature_3.readFeatures(json_AirTemperature_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirTemperature_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirTemperature_3.addFeatures(features_AirTemperature_3);
var lyr_AirTemperature_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirTemperature_3, 
                style: style_AirTemperature_3,
                interactive: true,
    title: 'AirTemperature<br />\
    <img src="styles/legend/AirTemperature_3_0.png" /> -20.5 - 4.1<br />\
    <img src="styles/legend/AirTemperature_3_1.png" /> 4.1 - 12.4<br />\
    <img src="styles/legend/AirTemperature_3_2.png" /> 12.4 - 20.9<br />\
    <img src="styles/legend/AirTemperature_3_3.png" /> 20.9 - 26<br />\
    <img src="styles/legend/AirTemperature_3_4.png" /> 26 - 42<br />'
        });
var format_Sediment_4 = new ol.format.GeoJSON();
var features_Sediment_4 = format_Sediment_4.readFeatures(json_Sediment_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sediment_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sediment_4.addFeatures(features_Sediment_4);
var lyr_Sediment_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sediment_4, 
                style: style_Sediment_4,
                interactive: true,
    title: 'Sediment<br />\
    <img src="styles/legend/Sediment_4_0.png" /> 1 - 34<br />\
    <img src="styles/legend/Sediment_4_1.png" /> 34 - 56<br />\
    <img src="styles/legend/Sediment_4_2.png" /> 56 - 94<br />\
    <img src="styles/legend/Sediment_4_3.png" /> 94 - 208<br />\
    <img src="styles/legend/Sediment_4_4.png" /> 208 - 23900<br />'
        });
var format_SpecificConductance_5 = new ol.format.GeoJSON();
var features_SpecificConductance_5 = format_SpecificConductance_5.readFeatures(json_SpecificConductance_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecificConductance_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecificConductance_5.addFeatures(features_SpecificConductance_5);
var lyr_SpecificConductance_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpecificConductance_5, 
                style: style_SpecificConductance_5,
                interactive: true,
    title: 'SpecificConductance<br />\
    <img src="styles/legend/SpecificConductance_5_0.png" /> 0 - 597<br />\
    <img src="styles/legend/SpecificConductance_5_1.png" /> 597 - 659<br />\
    <img src="styles/legend/SpecificConductance_5_2.png" /> 659 - 740<br />\
    <img src="styles/legend/SpecificConductance_5_3.png" /> 740 - 876<br />\
    <img src="styles/legend/SpecificConductance_5_4.png" /> 876 - 4250<br />'
        });
var format_Discharge_6 = new ol.format.GeoJSON();
var features_Discharge_6 = format_Discharge_6.readFeatures(json_Discharge_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Discharge_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Discharge_6.addFeatures(features_Discharge_6);
var lyr_Discharge_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Discharge_6, 
                style: style_Discharge_6,
                interactive: true,
    title: 'Discharge<br />\
    <img src="styles/legend/Discharge_6_0.png" /> 0 - 500<br />\
    <img src="styles/legend/Discharge_6_1.png" /> 500 - 1000<br />\
    <img src="styles/legend/Discharge_6_2.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Discharge_6_3.png" /> 1500 - 2000<br />\
    <img src="styles/legend/Discharge_6_4.png" /> 2000 - 2500<br />\
    <img src="styles/legend/Discharge_6_5.png" /> 2500 - 2947<br />'
        });
var format_Pheophytin_7 = new ol.format.GeoJSON();
var features_Pheophytin_7 = format_Pheophytin_7.readFeatures(json_Pheophytin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pheophytin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pheophytin_7.addFeatures(features_Pheophytin_7);
var lyr_Pheophytin_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pheophytin_7, 
                style: style_Pheophytin_7,
                interactive: true,
    title: 'Pheophytin<br />\
    <img src="styles/legend/Pheophytin_7_0.png" /> 0.4 - 3<br />\
    <img src="styles/legend/Pheophytin_7_1.png" /> 3 - 4.7<br />\
    <img src="styles/legend/Pheophytin_7_2.png" /> 4.7 - 7.4<br />\
    <img src="styles/legend/Pheophytin_7_3.png" /> 7.4 - 13.7<br />\
    <img src="styles/legend/Pheophytin_7_4.png" /> 13.7 - 45.3<br />'
        });
var format_pH_8 = new ol.format.GeoJSON();
var features_pH_8 = format_pH_8.readFeatures(json_pH_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pH_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pH_8.addFeatures(features_pH_8);
var lyr_pH_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pH_8, 
                style: style_pH_8,
                interactive: true,
    title: 'pH<br />\
    <img src="styles/legend/pH_8_0.png" /> 5.7 - 6.37<br />\
    <img src="styles/legend/pH_8_1.png" /> 6.37 - 7.04<br />\
    <img src="styles/legend/pH_8_2.png" /> 7.04 - 7.71<br />\
    <img src="styles/legend/pH_8_3.png" /> 7.71 - 8.39<br />\
    <img src="styles/legend/pH_8_4.png" /> 8.39 - 9.06<br />\
    <img src="styles/legend/pH_8_5.png" /> 9.06 - 9.73<br />\
    <img src="styles/legend/pH_8_6.png" /> 9.73 - 10.4<br />'
        });
var format_Orthophosphate_9 = new ol.format.GeoJSON();
var features_Orthophosphate_9 = format_Orthophosphate_9.readFeatures(json_Orthophosphate_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Orthophosphate_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orthophosphate_9.addFeatures(features_Orthophosphate_9);
var lyr_Orthophosphate_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Orthophosphate_9, 
                style: style_Orthophosphate_9,
                interactive: true,
    title: 'Orthophosphate<br />\
    <img src="styles/legend/Orthophosphate_9_0.png" /> 0 - 0.044<br />\
    <img src="styles/legend/Orthophosphate_9_1.png" /> 0.044 - 0.157<br />\
    <img src="styles/legend/Orthophosphate_9_2.png" /> 0.157 - 0.239<br />\
    <img src="styles/legend/Orthophosphate_9_3.png" /> 0.239 - 0.384<br />\
    <img src="styles/legend/Orthophosphate_9_4.png" /> 0.384 - 3.08<br />'
        });
var format_NitrateplusNitrite_10 = new ol.format.GeoJSON();
var features_NitrateplusNitrite_10 = format_NitrateplusNitrite_10.readFeatures(json_NitrateplusNitrite_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NitrateplusNitrite_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NitrateplusNitrite_10.addFeatures(features_NitrateplusNitrite_10);
var lyr_NitrateplusNitrite_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NitrateplusNitrite_10, 
                style: style_NitrateplusNitrite_10,
                interactive: true,
    title: 'NitrateplusNitrite<br />\
    <img src="styles/legend/NitrateplusNitrite_10_0.png" /> 0 - 1.36<br />\
    <img src="styles/legend/NitrateplusNitrite_10_1.png" /> 1.36 - 2.23<br />\
    <img src="styles/legend/NitrateplusNitrite_10_2.png" /> 2.23 - 3.95<br />\
    <img src="styles/legend/NitrateplusNitrite_10_3.png" /> 3.95 - 6.63<br />\
    <img src="styles/legend/NitrateplusNitrite_10_4.png" /> 6.63 - 28.48<br />'
        });
var format_Nitrate_11 = new ol.format.GeoJSON();
var features_Nitrate_11 = format_Nitrate_11.readFeatures(json_Nitrate_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nitrate_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nitrate_11.addFeatures(features_Nitrate_11);
var lyr_Nitrate_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nitrate_11, 
                style: style_Nitrate_11,
                interactive: true,
    title: 'Nitrate<br />\
    <img src="styles/legend/Nitrate_11_0.png" /> 0.02 - 1.21<br />\
    <img src="styles/legend/Nitrate_11_1.png" /> 1.21 - 2.1<br />\
    <img src="styles/legend/Nitrate_11_2.png" /> 2.1 - 3.9<br />\
    <img src="styles/legend/Nitrate_11_3.png" /> 3.9 - 6.83<br />\
    <img src="styles/legend/Nitrate_11_4.png" /> 6.83 - 19.1<br />'
        });
var format_AlgalSurfaceMats_12 = new ol.format.GeoJSON();
var features_AlgalSurfaceMats_12 = format_AlgalSurfaceMats_12.readFeatures(json_AlgalSurfaceMats_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlgalSurfaceMats_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlgalSurfaceMats_12.addFeatures(features_AlgalSurfaceMats_12);
var lyr_AlgalSurfaceMats_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlgalSurfaceMats_12, 
                style: style_AlgalSurfaceMats_12,
                interactive: true,
    title: 'AlgalSurfaceMats<br />\
    <img src="styles/legend/AlgalSurfaceMats_12_0.png" /> 0 - 0<br />\
    <img src="styles/legend/AlgalSurfaceMats_12_1.png" /> 0 - 2<br />'
        });
var format_fPhycocyanin_13 = new ol.format.GeoJSON();
var features_fPhycocyanin_13 = format_fPhycocyanin_13.readFeatures(json_fPhycocyanin_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fPhycocyanin_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fPhycocyanin_13.addFeatures(features_fPhycocyanin_13);
var lyr_fPhycocyanin_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fPhycocyanin_13, 
                style: style_fPhycocyanin_13,
                interactive: true,
    title: 'fPhycocyanin<br />\
    <img src="styles/legend/fPhycocyanin_13_0.png" /> 0 - 0.27<br />\
    <img src="styles/legend/fPhycocyanin_13_1.png" /> 0.27 - 0.68<br />\
    <img src="styles/legend/fPhycocyanin_13_2.png" /> 0.68 - 1.29<br />\
    <img src="styles/legend/fPhycocyanin_13_3.png" /> 1.29 - 2.98<br />\
    <img src="styles/legend/fPhycocyanin_13_4.png" /> 2.98 - 22.65<br />'
        });
var format_fChlorophyll_14 = new ol.format.GeoJSON();
var features_fChlorophyll_14 = format_fChlorophyll_14.readFeatures(json_fChlorophyll_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fChlorophyll_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fChlorophyll_14.addFeatures(features_fChlorophyll_14);
var lyr_fChlorophyll_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fChlorophyll_14, 
                style: style_fChlorophyll_14,
                interactive: true,
    title: 'fChlorophyll<br />\
    <img src="styles/legend/fChlorophyll_14_0.png" /> 1.7 - 4.3<br />\
    <img src="styles/legend/fChlorophyll_14_1.png" /> 4.3 - 6.6<br />\
    <img src="styles/legend/fChlorophyll_14_2.png" /> 6.6 - 11.5<br />\
    <img src="styles/legend/fChlorophyll_14_3.png" /> 11.5 - 21.3<br />\
    <img src="styles/legend/fChlorophyll_14_4.png" /> 21.3 - 154.5<br />'
        });
var format_DissolvedOxygen_15 = new ol.format.GeoJSON();
var features_DissolvedOxygen_15 = format_DissolvedOxygen_15.readFeatures(json_DissolvedOxygen_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DissolvedOxygen_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DissolvedOxygen_15.addFeatures(features_DissolvedOxygen_15);
var lyr_DissolvedOxygen_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DissolvedOxygen_15, 
                style: style_DissolvedOxygen_15,
                interactive: true,
    title: 'DissolvedOxygen<br />\
    <img src="styles/legend/DissolvedOxygen_15_0.png" /> 0 - 6.9<br />\
    <img src="styles/legend/DissolvedOxygen_15_1.png" /> 6.9 - 8.3<br />\
    <img src="styles/legend/DissolvedOxygen_15_2.png" /> 8.3 - 10<br />\
    <img src="styles/legend/DissolvedOxygen_15_3.png" /> 10 - 11.6<br />\
    <img src="styles/legend/DissolvedOxygen_15_4.png" /> 11.6 - 27.2<br />'
        });
var format_ChlorophyllA_16 = new ol.format.GeoJSON();
var features_ChlorophyllA_16 = format_ChlorophyllA_16.readFeatures(json_ChlorophyllA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChlorophyllA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChlorophyllA_16.addFeatures(features_ChlorophyllA_16);
var lyr_ChlorophyllA_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChlorophyllA_16, 
                style: style_ChlorophyllA_16,
                interactive: true,
    title: 'ChlorophyllA<br />\
    <img src="styles/legend/ChlorophyllA_16_0.png" /> 0.3 - 2.5<br />\
    <img src="styles/legend/ChlorophyllA_16_1.png" /> 2.5 - 4.3<br />\
    <img src="styles/legend/ChlorophyllA_16_2.png" /> 4.3 - 7.2<br />\
    <img src="styles/legend/ChlorophyllA_16_3.png" /> 7.2 - 16<br />\
    <img src="styles/legend/ChlorophyllA_16_4.png" /> 16 - 97.6<br />'
        });

        var lyr_GoogleSatellite_17 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var group_Shp = new ol.layer.Group({
                                layers: [lyr_UVAbsorbance_0,lyr_Turbidity_1,lyr_WaterTemperature_2,lyr_AirTemperature_3,lyr_Sediment_4,lyr_SpecificConductance_5,lyr_Discharge_6,lyr_Pheophytin_7,lyr_pH_8,lyr_Orthophosphate_9,lyr_NitrateplusNitrite_10,lyr_Nitrate_11,lyr_AlgalSurfaceMats_12,lyr_fPhycocyanin_13,lyr_fChlorophyll_14,lyr_DissolvedOxygen_15,lyr_ChlorophyllA_16,],
                                title: "Shp"});

lyr_UVAbsorbance_0.setVisible(true);lyr_Turbidity_1.setVisible(true);lyr_WaterTemperature_2.setVisible(true);lyr_AirTemperature_3.setVisible(true);lyr_Sediment_4.setVisible(true);lyr_SpecificConductance_5.setVisible(true);lyr_Discharge_6.setVisible(true);lyr_Pheophytin_7.setVisible(true);lyr_pH_8.setVisible(true);lyr_Orthophosphate_9.setVisible(true);lyr_NitrateplusNitrite_10.setVisible(true);lyr_Nitrate_11.setVisible(true);lyr_AlgalSurfaceMats_12.setVisible(true);lyr_fPhycocyanin_13.setVisible(true);lyr_fChlorophyll_14.setVisible(true);lyr_DissolvedOxygen_15.setVisible(true);lyr_ChlorophyllA_16.setVisible(true);lyr_GoogleSatellite_17.setVisible(true);
var layersList = [group_Shp,lyr_GoogleSatellite_17];
lyr_UVAbsorbance_0.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'derived_fr': 'derived_fr', 'sensor_des': 'sensor_des', 'mean_resul': 'mean_resul', 'median_res': 'median_res', 'minimum_re': 'minimum_re', 'maximum_re': 'maximum_re', 'sd_result': 'sd_result', 'pcodes': 'pcodes', 'n_results': 'n_results', 'mean_time_': 'mean_time_', 'freq': 'freq', 'site_metad': 'site_metad', 'site_met_1': 'site_met_1', 'mean_res_1': 'mean_res_1', });
lyr_Turbidity_1.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', });
lyr_WaterTemperature_2.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', 'mean_float': 'mean_float', });
lyr_AirTemperature_3.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'derived_fr': 'derived_fr', 'sensor_des': 'sensor_des', 'mean_resul': 'mean_resul', 'median_res': 'median_res', 'minimum_re': 'minimum_re', 'maximum_re': 'maximum_re', 'sd_result': 'sd_result', 'pcodes': 'pcodes', 'n_results': 'n_results', 'mean_time_': 'mean_time_', 'freq': 'freq', 'site_metad': 'site_metad', 'site_met_1': 'site_met_1', 'mean_res_1': 'mean_res_1', });
lyr_Sediment_4.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', });
lyr_SpecificConductance_5.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', });
lyr_Discharge_6.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'derived_fr': 'derived_fr', 'sensor_des': 'sensor_des', 'mean_resul': 'mean_resul', 'median_res': 'median_res', 'minimum_re': 'minimum_re', 'maximum_re': 'maximum_re', 'sd_result': 'sd_result', 'pcodes': 'pcodes', 'n_results': 'n_results', 'mean_time_': 'mean_time_', 'freq': 'freq', 'site_metad': 'site_metad', 'site_met_1': 'site_met_1', 'mean_res_1': 'mean_res_1', });
lyr_Pheophytin_7.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'derived_fr': 'derived_fr', 'sensor_des': 'sensor_des', 'mean_resul': 'mean_resul', 'median_res': 'median_res', 'minimum_re': 'minimum_re', 'maximum_re': 'maximum_re', 'sd_result': 'sd_result', 'pcodes': 'pcodes', 'n_results': 'n_results', 'mean_time_': 'mean_time_', 'freq': 'freq', 'site_metad': 'site_metad', 'site_met_1': 'site_met_1', 'mean_res_1': 'mean_res_1', });
lyr_pH_8.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbrev': 'parm_abbrev', 'units': 'units', 'derived_from': 'derived_from', 'sensor_description': 'sensor_description', 'mean_result': 'mean_result', 'median_result': 'median_result', 'minimum_result': 'minimum_result', 'maximum_result': 'maximum_result', 'sd_result': 'sd_result', 'pcodes': 'pcodes', 'n_results': 'n_results', 'mean_time_of_day_hrs': 'mean_time_of_day_hrs', 'freq': 'freq', 'site_metadata_latitude': 'site_metadata_latitude', 'site_metadata_longitude': 'site_metadata_longitude', 'mean_result_float': 'mean_result_float', });
lyr_Orthophosphate_9.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', });
lyr_NitrateplusNitrite_10.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', });
lyr_Nitrate_11.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'derived_fr': 'derived_fr', 'sensor_des': 'sensor_des', 'mean_resul': 'mean_resul', 'median_res': 'median_res', 'minimum_re': 'minimum_re', 'maximum_re': 'maximum_re', 'sd_result': 'sd_result', 'pcodes': 'pcodes', 'n_results': 'n_results', 'mean_time_': 'mean_time_', 'freq': 'freq', 'site_metad': 'site_metad', 'site_met_1': 'site_met_1', 'mean_res_1': 'mean_res_1', });
lyr_AlgalSurfaceMats_12.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'derived_fr': 'derived_fr', 'sensor_des': 'sensor_des', 'mean_resul': 'mean_resul', 'median_res': 'median_res', 'minimum_re': 'minimum_re', 'maximum_re': 'maximum_re', 'sd_result': 'sd_result', 'pcodes': 'pcodes', 'n_results': 'n_results', 'mean_time_': 'mean_time_', 'freq': 'freq', 'site_metad': 'site_metad', 'site_met_1': 'site_met_1', 'mean_res_1': 'mean_res_1', });
lyr_fPhycocyanin_13.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', });
lyr_fChlorophyll_14.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', 'mean_float': 'mean_float', });
lyr_DissolvedOxygen_15.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', });
lyr_ChlorophyllA_16.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'derived_fr': 'derived_fr', 'sensor_des': 'sensor_des', 'mean_resul': 'mean_resul', 'median_res': 'median_res', 'minimum_re': 'minimum_re', 'maximum_re': 'maximum_re', 'sd_result': 'sd_result', 'pcodes': 'pcodes', 'n_results': 'n_results', 'mean_time_': 'mean_time_', 'freq': 'freq', 'site_metad': 'site_metad', 'site_met_1': 'site_met_1', });
lyr_UVAbsorbance_0.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'derived_fr': 'TextEdit', 'sensor_des': 'TextEdit', 'mean_resul': 'TextEdit', 'median_res': 'TextEdit', 'minimum_re': 'TextEdit', 'maximum_re': 'TextEdit', 'sd_result': 'TextEdit', 'pcodes': 'TextEdit', 'n_results': 'TextEdit', 'mean_time_': 'TextEdit', 'freq': 'TextEdit', 'site_metad': 'TextEdit', 'site_met_1': 'TextEdit', 'mean_res_1': 'TextEdit', });
lyr_Turbidity_1.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', });
lyr_WaterTemperature_2.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', 'mean_float': 'TextEdit', });
lyr_AirTemperature_3.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'derived_fr': 'TextEdit', 'sensor_des': 'TextEdit', 'mean_resul': 'TextEdit', 'median_res': 'TextEdit', 'minimum_re': 'TextEdit', 'maximum_re': 'TextEdit', 'sd_result': 'TextEdit', 'pcodes': 'TextEdit', 'n_results': 'TextEdit', 'mean_time_': 'TextEdit', 'freq': 'TextEdit', 'site_metad': 'TextEdit', 'site_met_1': 'TextEdit', 'mean_res_1': 'TextEdit', });
lyr_Sediment_4.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', });
lyr_SpecificConductance_5.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', });
lyr_Discharge_6.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'derived_fr': 'TextEdit', 'sensor_des': 'TextEdit', 'mean_resul': 'TextEdit', 'median_res': 'TextEdit', 'minimum_re': 'TextEdit', 'maximum_re': 'TextEdit', 'sd_result': 'TextEdit', 'pcodes': 'TextEdit', 'n_results': 'TextEdit', 'mean_time_': 'TextEdit', 'freq': 'TextEdit', 'site_metad': 'TextEdit', 'site_met_1': 'TextEdit', 'mean_res_1': 'TextEdit', });
lyr_Pheophytin_7.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'derived_fr': 'TextEdit', 'sensor_des': 'TextEdit', 'mean_resul': 'TextEdit', 'median_res': 'TextEdit', 'minimum_re': 'TextEdit', 'maximum_re': 'TextEdit', 'sd_result': 'TextEdit', 'pcodes': 'TextEdit', 'n_results': 'TextEdit', 'mean_time_': 'TextEdit', 'freq': 'TextEdit', 'site_metad': 'TextEdit', 'site_met_1': 'TextEdit', 'mean_res_1': 'TextEdit', });
lyr_pH_8.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbrev': 'TextEdit', 'units': 'TextEdit', 'derived_from': 'TextEdit', 'sensor_description': 'TextEdit', 'mean_result': 'TextEdit', 'median_result': 'TextEdit', 'minimum_result': 'TextEdit', 'maximum_result': 'TextEdit', 'sd_result': 'TextEdit', 'pcodes': 'TextEdit', 'n_results': 'TextEdit', 'mean_time_of_day_hrs': 'TextEdit', 'freq': 'TextEdit', 'site_metadata_latitude': 'TextEdit', 'site_metadata_longitude': 'TextEdit', 'mean_result_float': 'TextEdit', });
lyr_Orthophosphate_9.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', });
lyr_NitrateplusNitrite_10.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', });
lyr_Nitrate_11.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'derived_fr': 'TextEdit', 'sensor_des': 'TextEdit', 'mean_resul': 'TextEdit', 'median_res': 'TextEdit', 'minimum_re': 'TextEdit', 'maximum_re': 'TextEdit', 'sd_result': 'TextEdit', 'pcodes': 'TextEdit', 'n_results': 'TextEdit', 'mean_time_': 'TextEdit', 'freq': 'TextEdit', 'site_metad': 'TextEdit', 'site_met_1': 'TextEdit', 'mean_res_1': 'TextEdit', });
lyr_AlgalSurfaceMats_12.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'derived_fr': 'TextEdit', 'sensor_des': 'TextEdit', 'mean_resul': 'TextEdit', 'median_res': 'TextEdit', 'minimum_re': 'TextEdit', 'maximum_re': 'TextEdit', 'sd_result': 'TextEdit', 'pcodes': 'TextEdit', 'n_results': 'TextEdit', 'mean_time_': 'TextEdit', 'freq': 'TextEdit', 'site_metad': 'TextEdit', 'site_met_1': 'TextEdit', 'mean_res_1': 'TextEdit', });
lyr_fPhycocyanin_13.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', });
lyr_fChlorophyll_14.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', 'mean_float': 'TextEdit', });
lyr_DissolvedOxygen_15.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', });
lyr_ChlorophyllA_16.set('fieldImages', {'site_no': 'TextEdit', 'date': 'DateTime', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'derived_fr': 'TextEdit', 'sensor_des': 'TextEdit', 'mean_resul': 'TextEdit', 'median_res': 'TextEdit', 'minimum_re': 'TextEdit', 'maximum_re': 'TextEdit', 'sd_result': 'TextEdit', 'pcodes': 'Range', 'n_results': 'Range', 'mean_time_': 'TextEdit', 'freq': 'TextEdit', 'site_metad': 'TextEdit', 'site_met_1': 'TextEdit', });
lyr_UVAbsorbance_0.set('fieldLabels', {});
lyr_Turbidity_1.set('fieldLabels', {});
lyr_WaterTemperature_2.set('fieldLabels', {});
lyr_AirTemperature_3.set('fieldLabels', {});
lyr_Sediment_4.set('fieldLabels', {});
lyr_SpecificConductance_5.set('fieldLabels', {});
lyr_Discharge_6.set('fieldLabels', {});
lyr_Pheophytin_7.set('fieldLabels', {});
lyr_pH_8.set('fieldLabels', {});
lyr_Orthophosphate_9.set('fieldLabels', {});
lyr_NitrateplusNitrite_10.set('fieldLabels', {});
lyr_Nitrate_11.set('fieldLabels', {});
lyr_AlgalSurfaceMats_12.set('fieldLabels', {});
lyr_fPhycocyanin_13.set('fieldLabels', {});
lyr_fChlorophyll_14.set('fieldLabels', {});
lyr_DissolvedOxygen_15.set('fieldLabels', {});
lyr_ChlorophyllA_16.set('fieldLabels', {});
lyr_ChlorophyllA_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});