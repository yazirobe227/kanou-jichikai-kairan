---
layout: map
permalink: /bohan/fire-map.html
title: 消火栓・防火水槽マップ
---

<div id="header-container">
    <div id="title">神納東区 防災施設マップ <br><small>消火栓・防火水槽・AED・避難所</small></div>
</div>
<div id="map_container"></div>

<script>
    var map = L.map('map_container').setView([35.42674239, 139.96885262], 16); /* ズームレベルを16に調整 */

    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    
    var gsi_std = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
        attribution: '出典: <a href="http://www.gsi.go.jp/">国土地理院</a>'
    });
    
    var gsi_pale = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
        attribution: '出典: <a href="http://www.gsi.go.jp/">国土地理院</a>'
    });
    
    osm.addTo(map);

    // 新しいアイコンの定義
    var fireHydrantIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize:    [25, 41],
        shadowSize:  [41, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34]
    });

    var waterTankIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize:    [25, 41],
        shadowSize:  [41, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34]
    });

    var aedIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize:    [25, 41],
        shadowSize:  [41, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34]
    });

    var shelterIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize:    [25, 41],
        shadowSize:  [41, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34]
    });

    var allPoints = [
        // 消火栓データ [cite: 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
        { "name": "公設消火栓-171", "lat": 35.4236352122998, "lng": 139.959821595563, "type": "消火栓", "description": "中央６区－１３ / 口径100mm" },
        { "name": "公設消火栓-172", "lat": 35.4229179780678, "lng": 139.959918452509, "type": "消火栓", "description": "中央６区－１４ / 口径100mm" },
        { "name": "公設消火栓-173", "lat": 35.4233830430390, "lng": 139.958679446643, "type": "消火栓", "description": "中央６区－１５ / 口径75mm"  },
        { "name": "公設消火栓-174", "lat": 35.4230855878012, "lng": 139.958166800578, "type": "消火栓", "description": "中央６区－１６ / 口径150mm" },
        { "name": "公設消火栓-175", "lat": 35.4225089605943, "lng": 139.958099482501, "type": "消火栓", "description": "中央６区－１７ / 口径100mm" },
        { "name": "公設消火栓-176", "lat": 35.4221768671827, "lng": 139.958810771562, "type": "消火栓", "description": "中央６区－１８ / 口径100mm" },
        { "name": "公設消火栓-177", "lat": 35.4219642115002, "lng": 139.959258950503, "type": "消火栓", "description": "中央６区－１９ / 口径100mm" },
        { "name": "公設消火栓-178", "lat": 35.4216644396605, "lng": 139.958804118468, "type": "消火栓", "description": "中央６区－２０ / 口径100mm" },
        { "name": "公設消火栓-179", "lat": 35.4242303908467, "lng": 139.961672735362, "type": "消火栓", "description": "中央６区－２１ / 口径75mm"  },
        { "name": "公設消火栓-180", "lat": 35.4234638212247, "lng": 139.961962544211, "type": "消火栓", "description": "中央６区－２２ / 口径150mm" },
        { "name": "公設消火栓-181", "lat": 35.4229935043757, "lng": 139.962026860992, "type": "消火栓", "description": "中央６区－２３ / 口径100mm" },
        { "name": "公設消火栓-182", "lat": 35.4237863629070, "lng": 139.963264173518, "type": "消火栓", "description": "中央６区－２４ / 口径75mm"  },
        { "name": "公設消火栓-183", "lat": 35.4229549912187, "lng": 139.963378653447, "type": "消火栓", "description": "中央６区－２５ / 口径100mm" },
        { "name": "公設消火栓-184", "lat": 35.4235427831798, "lng": 139.964766838063, "type": "消火栓", "description": "中央６区－２６ / 口径150mm" },
        { "name": "公設消火栓-185", "lat": 35.4231834221505, "lng": 139.965323569011, "type": "消火栓", "description": "中央６区－２７ / 口径100mm" },
        { "name": "公設消火栓-186", "lat": 35.4240586711250, "lng": 139.965795254673, "type": "消火栓", "description": "中央６区－２８ / 口径75mm"  },
        { "name": "公設消火栓-187", "lat": 35.4244550125581, "lng": 139.966435740909, "type": "消火栓", "description": "中央６区－２９ / 口径150mm" },
        { "name": "公設消火栓-188", "lat": 35.4236588758509, "lng": 139.966877537768, "type": "消火栓", "description": "中央６区－３０ / 口径150mm" },
        { "name": "公設消火栓-189", "lat": 35.4231184985263, "lng": 139.960877939347, "type": "消火栓", "description": "中央６区－３１ / 口径100mm" },
        { "name": "公設消火栓-190", "lat": 35.4226872037162, "lng": 139.960023248299, "type": "消火栓", "description": "中央６区－３２ / 口径100mm" },
        { "name": "公設消火栓-191", "lat": 35.4219341397382, "lng": 139.959479034991, "type": "消火栓", "description": "中央６区－３３ / 口径100mm" },
        { "name": "公設消火栓-192", "lat": 35.4214181701967, "lng": 139.959841602363, "type": "消火栓", "description": "中央６区－３４ / 口径100mm" },
        { "name": "公設消火栓-193", "lat": 35.4218635852839, "lng": 139.960645757331, "type": "消火栓", "description": "中央６区－３５ / 口径150mm" },
        { "name": "公設消火栓-194", "lat": 35.4220205903507, "lng": 139.961332061844, "type": "消火栓", "description": "中央６区－３６ / 口径100mm" },
        { "name": "公設消火栓-195", "lat": 35.4208788225201, "lng": 139.960992696652, "type": "消火栓", "description": "中央６区－３７ / 口径150mm" },
        { "name": "公設消火栓-196", "lat": 35.4204255042820, "lng": 139.961599266340, "type": "消火栓", "description": "中央６区－３８ / 口径100mm" },
        { "name": "公設消火栓-241", "lat": 35.4266403451536, "lng": 139.96279653903, "type": "消火栓", "description": "中央８区－１ / 口径100mm" },
        { "name": "公設消火栓-242", "lat": 35.4261944002097, "lng": 139.963324960353, "type": "消火栓", "description": "中央８区－６ / 口径75mm" },
        { "name": "公設消火栓-243", "lat": 35.426296485024, "lng": 139.963939636914, "type": "消火栓", "description": "中央８区－７ / 口径100mm" },
        { "name": "公設消火栓-244", "lat": 35.4265824552962, "lng": 139.965033558471, "type": "消火栓", "description": "中央８区－８ / 口径100mm" },
        { "name": "公設消火栓-245", "lat": 35.4262292545502, "lng": 139.966530796316, "type": "消火栓", "description": "中央８区－９ / 口径250mm" },
        { "name": "公設消火栓-246", "lat": 35.4276534348368, "lng": 139.963506322324, "type": "消火栓", "description": "中央８区－１０ / 口径100mm" },
        { "name": "公設消火栓-247", "lat": 35.4273625588606, "lng": 139.963838979133, "type": "消火栓", "description": "中央８区－１１ / 口径250mm" },
        { "name": "公設消火栓-248", "lat": 35.4279318076561, "lng": 139.965442288661, "type": "消火栓", "description": "中央８区－１２ / 口径250mm" },
        { "name": "公設消火栓-249", "lat": 35.427860207509, "lng": 139.966924829945, "type": "消火栓", "description": "中央８区－１３ / 口径75mm" },
        { "name": "公設消火栓-250", "lat": 35.4290867209189, "lng": 139.965135199116, "type": "消火栓", "description": "中央８区－１４ / 口径100mm" },
        { "name": "公設消火栓-251", "lat": 35.4298455088822, "lng": 139.965045056857, "type": "消火栓", "description": "中央８区－１５ / 口径100mm" },
        { "name": "公設消火栓-252", "lat": 35.4291469933093, "lng": 139.966536154218, "type": "消火栓", "description": "中央８区－１６ / 口径75mm" },
        { "name": "公設消火栓-253", "lat": 35.4301066488062, "lng": 139.965923902209, "type": "消火栓", "description": "中央８区－１７ / 口径100mm" },
        { "name": "公設消火栓-254", "lat": 35.4292763838554, "lng": 139.967857056654, "type": "消火栓", "description": "中央８区－１８ / 口径75mm" },
        { "name": "公設消火栓-255", "lat": 35.4311157726793, "lng": 139.966298837409, "type": "消火栓", "description": "中央８区－１９ / 口径100mm" },
        { "name": "公設消火栓-256", "lat": 35.4302867493856, "lng": 139.967765607787, "type": "消火栓", "description": "中央８区－２０ / 口径75mm" },
        { "name": "公設消火栓-257", "lat": 35.4313646509551, "lng": 139.967412149311, "type": "消火栓", "description": "中央８区－２１ / 口径100mm" },
        { "name": "公設消火栓-258", "lat": 35.4299721161867, "lng": 139.969316271469, "type": "消火栓", "description": "中央８区－２２ / 口径75mm" },
        { "name": "公設消火栓-259", "lat": 35.4322848600897, "lng": 139.967974297722, "type": "消火栓", "description": "中央８区－２３ / 口径100mm" },
        { "name": "公設消火栓-260", "lat": 35.4319762395493, "lng": 139.96828434664, "type": "消火栓", "description": "中央８区－２４ / 口径100mm" },
        { "name": "公設消火栓-261", "lat": 35.4312248911314, "lng": 139.969277786101, "type": "消火栓", "description": "中央８区－２５ / 口径150mm" },
        { "name": "公設消火栓-262", "lat": 35.4308323209212, "lng": 139.970631078564, "type": "消火栓", "description": "中央８区－２６ / 口径75mm" },
        { "name": "公設消火栓-263", "lat": 35.4301820771772, "lng": 139.971401969363, "type": "消火栓", "description": "中央８区－２７ / 口径75mm" },
        { "name": "公設消火栓-264", "lat": 35.432012650577, "lng": 139.969471653204, "type": "消火栓", "description": "中央８区－２８ / 口径75mm" },
        { "name": "公設消火栓-265", "lat": 35.4319488274817, "lng": 139.970262306655, "type": "消火栓", "description": "中央８区－２９ / 口径150mm" },
        { "name": "公設消火栓-266", "lat": 35.4331833468872, "lng": 139.969714869121, "type": "消火栓", "description": "中央８区－３０ / 口径100mm" },
        { "name": "公設消火栓-267", "lat": 35.43255930349, "lng": 139.971061291148, "type": "消火栓", "description": "中央８区－３１ / 口径75mm" },
        { "name": "公設消火栓-268", "lat": 35.4340335661758, "lng": 139.969830217103, "type": "消火栓", "description": "中央８区－３２ / 口径100mm" },
        { "name": "公設消火栓-269", "lat": 35.4333540124461, "lng": 139.97093436566, "type": "消火栓", "description": "中央８区－３３ / 口径75mm" },
        { "name": "公設消火栓-270", "lat": 35.4333728824772, "lng": 139.97175777556, "type": "消火栓", "description": "中央８区－３４ / 口径75mm" },
        { "name": "公設消火栓-271", "lat": 35.434403722454, "lng": 139.970565582262, "type": "消火栓", "description": "中央８区－３５ / 口径100mm" },
        { "name": "公設消火栓-272", "lat": 35.4343536693347, "lng": 139.972063359134, "type": "消火栓", "description": "中央８区－３６ / 口径75mm" },
        { "name": "公設消火栓-273", "lat": 35.4337355970743, "lng": 139.973370805999, "type": "消火栓", "description": "中央８区－３７ / 口径75mm" },
        { "name": "公設消火栓-274", "lat": 35.4252869027089, "lng": 139.963733022439, "type": "消火栓", "description": "中央８区－３８ / 口径75mm" },
        { "name": "公設消火栓-275", "lat": 35.4248608656012, "lng": 139.961706581702, "type": "消火栓", "description": "中央９区－１ / 口径250mm" },
        { "name": "公設消火栓-276", "lat": 35.4241811033974, "lng": 139.964223558104, "type": "消火栓", "description": "中央９区－２ / 口径250mm" },
        { "name": "公設消火栓-277", "lat": 35.4247003314833, "lng": 139.966222623162, "type": "消火栓", "description": "中央９区－３ / 口径250mm" },
        { "name": "公設消火栓-278", "lat": 35.4245586886406, "lng": 139.968419360707, "type": "消火栓", "description": "中央９区－４ / 口径250mm" },
        { "name": "公設消火栓-279", "lat": 35.4243451214923, "lng": 139.970653848371, "type": "消火栓", "description": "中央９区－５ / 口径250mm" },
        { "name": "公設消火栓-280", "lat": 35.4236425799555, "lng": 139.973302295073, "type": "消火栓", "description": "中央９区－６ / 口径250mm" },
        { "name": "公設消火栓-281", "lat": 35.422921206697, "lng": 139.975521078868, "type": "消火栓", "description": "中央９区－７ / 口径75mm" },
        { "name": "公設消火栓-282", "lat": 35.420298521473, "lng": 139.978197094417, "type": "消火栓", "description": "中央９区－８ / 口径250mm" },
        { "name": "公設消火栓-283", "lat": 35.4210968547409, "lng": 139.978797380214, "type": "消火栓", "description": "中央９区－９ / 口径75mm" },
        { "name": "公設消火栓-284", "lat": 35.4277461024153, "lng": 139.96938116071, "type": "消火栓", "description": "中央９区－１０ / 口径150mm" },
        { "name": "公設消火栓-285", "lat": 35.4274317514767, "lng": 139.970360869005, "type": "消火栓", "description": "中央９区－１１ / 口径100mm" },
        { "name": "公設消火栓-286", "lat": 35.4265750321683, "lng": 139.97033174263, "type": "消火栓", "description": "中央９区－１２ / 口径150mm" },
        { "name": "公設消火栓-287", "lat": 35.4243382297367, "lng": 139.978378577436, "type": "消火栓", "description": "中央９区－１３ / 口径75mm" },
        { "name": "公設消火栓-288", "lat": 35.4251655478362, "lng": 139.979743211357, "type": "消火栓", "description": "中央９区－１４ / 口径75mm" },
        { "name": "公設消火栓-289", "lat": 35.4275681601601, "lng": 139.971657310411, "type": "消火栓", "description": "中央９区－１５ / 口径300mm" },
        { "name": "公設消火栓-290", "lat": 35.4286056492574, "lng": 139.972576614519, "type": "消火栓", "description": "中央９区－１６ / 口径300mm" },
        { "name": "公設消火栓-291", "lat": 35.4300514111104, "lng": 139.973760097506, "type": "消火栓", "description": "中央９区－１７ / 口径300mm" },
        { "name": "公設消火栓-292", "lat": 35.4292156953075, "lng": 139.969106605259, "type": "消火栓", "description": "中央９区－１８ / 口径75mm" },
        // 防火水槽データ [cite: 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
        { "name": "公設防火水そう-34", "lat": 35.42386942, "lng": 139.962895, "type": "防火水槽", "description": "中央６区－２（貯） / 容量40m3" },
        { "name": "公設防火水そう-40", "lat": 35.42824091, "lng": 139.9661463, "type": "防火水槽", "description": "中央８区－１（貯） / 容量42m3" },
        { "name": "公設防火水そう-41", "lat": 35.43291213, "lng": 139.9688411, "type": "防火水槽", "description": "中央８区－２（貯） / 容量42m3" },
        { "name": "公設防火水そう-42", "lat": 35.43212908, "lng": 139.9709015, "type": "防火水槽", "description": "中央８区－３（貯） / 容量100m3" },
        { "name": "公設防火水そう-43", "lat": 35.42595364, "lng": 139.9649702, "type": "防火水槽", "description": "中央８区－４（貯） / 容量41.8m3" },
        { "name": "公設防火水そう-44", "lat": 35.42438471, "lng": 139.9691481, "type": "防火水槽", "description": "中央９区－１（貯） / 容量40m3" },
        { "name": "公設防火水そう-45", "lat": 35.42423227, "lng": 139.9715882, "type": "防火水槽", "description": "中央９区－２（貯） / 容量40m3" },
        { "name": "公設防火水そう-46", "lat": 35.42236077, "lng": 139.9768509, "type": "防火水槽", "description": "中央９区－３（貯） / 容量42m3" },
        { "name": "公設防火水そう-47", "lat": 35.42826025, "lng": 139.9684234, "type": "防火水槽", "description": "中央９区－４（貯） / 容量40m3" },
        { "name": "公設防火水そう-48", "lat": 35.4266166, "lng": 139.9696165, "type": "防火水槽", "description": "中央９区－５（貯） / 容量42m3" },
        { "name": "公設防火水そう-49", "lat": 35.42835, "lng": 139.97874, "type": "防火水槽", "description": "中央９区－６（貯） / 容量40.31m3" },
        { "name": "公設防火水そう-50", "lat": 35.253965, "lng": 139.59201, "type": "防火水槽", "description": "中央９区－７（貯） / 容量40m3" },
        // AEDデータ [cite: 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
        { "name": "袖ケ浦市昭和交流センター", "lat": 35.422937, "lng": 139.953769, "type": "AED", "description": "1階事務室" },
        { "name": "袖ケ浦市総合運動場野球場", "lat": 35.422937, "lng": 139.953769, "type": "AED", "description": "事務所" },
        { "name": "袖ケ浦市立福王台保育所", "lat": 35.422062, "lng": 139.960838, "type": "AED", "description": "事務室" },
        { "name": "そでがうらこども館", "lat": 35.420285, "lng": 139.959088, "type": "AED", "description": "事務室" },
        { "name": "袖ケ浦市立昭和小学校", "lat": 35.427728, "lng": 139.954869, "type": "AED", "description": "職員室" },
        { "name": "袖ケ浦市立昭和小学校", "lat": 35.427728, "lng": 139.954869, "type": "AED", "description": "屋内運動場" },
        { "name": "袖ケ浦市立昭和中学校", "lat": 35.431355, "lng": 139.972353, "type": "AED", "description": "職員室" },
        { "name": "袖ケ浦市立昭和中学校", "lat": 35.431355, "lng": 139.972353, "type": "AED", "description": "屋内運動場" },
        { "name": "県立袖ヶ浦高等学校", "lat": 35.423528, "lng": 139.967628, "type": "AED", "description": "職員玄関・昇降口内自販機" },
        { "name": "みらいっ子ルーム", "lat": 35.427054, "lng": 139.965472, "type": "AED", "description": "玄関（月〜土 8:30–17:30（日祝・12/29–1/3は使用不可））" },
        { "name": "中村歯科医院", "lat": 35.431109, "lng": 139.957178, "type": "AED", "description": "-" },
        { "name": "JAきみつ 袖ヶ浦支店", "lat": 35.425629664241114, "lng": 139.9595858056536, "type": "AED", "description": "-" },
        { "name": "コスモ石油袖ヶ浦サービスステーション（津田屋）", "lat": 35.415191100153756, "lng": 139.98018010823878, "type": "AED", "description": "フロア内" },
        // 避難所データ [cite: 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
        { "name": "袖ケ浦市昭和交流センター", "lat": 35.422937, "lng": 139.953769, "type": "避難所" },
        { "name": "袖ケ浦市立昭和小学校", "lat": 35.427728, "lng": 139.954869, "type": "避難所" },
        { "name": "袖ケ浦市立昭和中学校", "lat": 35.431355, "lng": 139.972353, "type": "避難所" },
        { "name": "千葉県立袖ヶ浦高等学校", "lat": 35.423548, "lng": 139.967565, "type": "避難所" }
    ];

    var fireHydrantLayer = L.layerGroup();
    var waterTankLayer = L.layerGroup();
    var aedLayer = L.layerGroup();
    var shelterLayer = L.layerGroup();

    allPoints.forEach(function(point) {
        var icon;
        var layer;
        var popupContent = `<b>${point.name}</b>`;

        if (point.description) {
            popupContent += `<br>${point.description}`;
        }

        switch (point.type) {
            case "消火栓":
                icon = fireHydrantIcon;
                layer = fireHydrantLayer;
                break;
            case "防火水槽":
                icon = waterTankIcon;
                layer = waterTankLayer;
                break;
            case "AED":
                icon = aedIcon;
                layer = aedLayer;
                break;
            case "避難所":
                icon = shelterIcon;
                layer = shelterLayer;
                break;
        }

        L.marker([point.lat, point.lng], {icon: icon})
            .bindPopup(popupContent)
            .addTo(layer);
    });

    fireHydrantLayer.addTo(map);
    waterTankLayer.addTo(map);
    aedLayer.addTo(map);
    shelterLayer.addTo(map);

    var baseMaps = {
        "OpenStreetMap": osm,
        "国土地理院 標準地図": gsi_std,
        "国土地理院 淡色地図": gsi_pale
    };

    var overlayMaps = {
        "消火栓": fireHydrantLayer,
        "防火水槽": waterTankLayer,
        "AED": aedLayer,
        "避難所": shelterLayer
    };

    L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);
</script>

[← 防災・防犯活動のページに戻る]({{ 'bohan/index.html' | relative_url }})