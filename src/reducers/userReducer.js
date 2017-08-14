

//initial state of the APP
const initialState = {
  dataUser: {userInfo:{},loading:true,error:null, inbox: 0,licencias:[]},
  contribuyentes:{data:null,loading:true,error:null},
  //data contribuyentes
  bancos: [{id:"1",nombre:"CHILE EDWARDS"}, {id:"2",nombre:"ABNAMRO"}, {id:"3",nombre:"AMERICAN EXPRESS"},
   {id:"4",nombre:"BANK BOSTON ASSOCIATION"}, {id:"5",nombre:"OF AMERICA"}, {id:"6",nombre:"BBVA"},
   {id:"7",nombre:"BICE"}, {id:"8",nombre:"CITYBANK"}, {id:"9",nombre:"CORPBANCA"}, {id:"10",nombre:"CHILE"},
   {id:"11",nombre:"BCI"}, {id:"12",nombre:"NACI"}, {id:"13",nombre:"DESARROLLO"}, {id:"14",nombre:"BANCOESTADO"},
   {id:"15",nombre:"BRASIL"}, {id:"16",nombre:"BANESPA"}, {id:"17",nombre:"DRESDNER BANQUE"}, {id:"18",nombre:"EXTERIOR"},
   {id:"19",nombre:"FALABELLA"}, {id:"20",nombre:"INTERNATIONAL"}, {id:"21",nombre:"REPUBLIC"}, {id:"22",nombre:"SANTANDER"},
   {id:"23",nombre:"SECURITY"}, {id:"24",nombre:"SIN BANCO"}, {id:"25",nombre:"SUDAMERIS"}, {id:"26",nombre:"TOKYO"},
   {id:"27",nombre:"CHASE"}, {id:"28",nombre:"SCOTIABANK"}, {id:"29",nombre:"HSBC"}, {id:"30",nombre:"TBANK"}, {id:"31",nombre:"ITAU"}],

   comunas: [{id:"353",cod_region:"15",cod_comuna:"1101",nombre:"ARICA"}, {id:"354",cod_region:"15",cod_comuna:"1106",nombre:"CAMARONES"}, {id:"355",cod_region:"15",cod_comuna:"1301",nombre:"PUTRE"},
    {id:"356",cod_region:"15",cod_comuna:"1302",nombre:"GENERAL LAGOS"}, {id:"357",cod_region:"1",cod_comuna:"1201",nombre:"IQUIQUE"}, {id:"358",cod_region:"1",cod_comuna:"1203",nombre:"PICA"},
    {id:"359",cod_region:"1",cod_comuna:"1204",nombre:"POZO ALMONTE"}, {id:"360",cod_region:"1",cod_comuna:"1206",nombre:"HUARA"}, {id:"361",cod_region:"1",cod_comuna:"1208",nombre:"CAMINA"},
    {id:"362",cod_region:"1",cod_comuna:"1210",nombre:"COLCHANE"}, {id:"363",cod_region:"1",cod_comuna:"1211",nombre:"ALTO HOSPICIO"}, {id:"364",cod_region:"2",cod_comuna:"2101",nombre:"TOCOPILLA"},
    {id:"365",cod_region:"2",cod_comuna:"2103",nombre:"MARIA ELENA"}, {id:"366",cod_region:"2",cod_comuna:"2201",nombre:"ANTOFAGASTA"}, {id:"367",cod_region:"2",cod_comuna:"2202",nombre:"TALTAL"},
    {id:"368",cod_region:"2",cod_comuna:"2203",nombre:"MEJILLONES"}, {id:"369",cod_region:"2",cod_comuna:"2206",nombre:"SIERRA GORDA"}, {id:"370",cod_region:"2",cod_comuna:"2301",nombre:"CALAMA"},
    {id:"371",cod_region:"2",cod_comuna:"2302",nombre:"OLLAGUE"}, {id:"372",cod_region:"2",cod_comuna:"2303",nombre:"SAN PEDRO DE ATACAMA"}, {id:"373",cod_region:"3",cod_comuna:"3101",nombre:"CHANARAL"},
    {id:"374",cod_region:"3",cod_comuna:"3102",nombre:"DIEGO DE ALMAGRO"}, {id:"375",cod_region:"3",cod_comuna:"3201",nombre:"COPIAPO"}, {id:"376",cod_region:"3",cod_comuna:"3202",nombre:"CALDERA"},
    {id:"377",cod_region:"3",cod_comuna:"3203",nombre:"TIERRA AMARILLA"}, {id:"378",cod_region:"3",cod_comuna:"3301",nombre:"VALLENAR"}, {id:"379",cod_region:"3",cod_comuna:"3302",nombre:"FREIRINA"},
    {id:"380",cod_region:"3",cod_comuna:"3303",nombre:"HUASCO"}, {id:"381",cod_region:"3",cod_comuna:"3304",nombre:"ALTO DEL CARMEN"}, {id:"382",cod_region:"4",cod_comuna:"4101",nombre:"LA SERENA"},
    {id:"383",cod_region:"4",cod_comuna:"4102",nombre:"LA HIGUERA"}, {id:"384",cod_region:"4",cod_comuna:"4103",nombre:"COQUIMBO"}, {id:"385",cod_region:"4",cod_comuna:"4104",nombre:"ANDACOLLO"},
    {id:"386",cod_region:"4",cod_comuna:"4105",nombre:"VICUNA"}, {id:"387",cod_region:"4",cod_comuna:"4106",nombre:"PAIHUANO"}, {id:"388",cod_region:"4",cod_comuna:"4201",nombre:"OVALLE"},
    {id:"389",cod_region:"4",cod_comuna:"4203",nombre:"MONTE PATRIA"}, {id:"390",cod_region:"4",cod_comuna:"4204",nombre:"PUNITAQUI"}, {id:"391",cod_region:"4",cod_comuna:"4205",nombre:"COMBARBALA"},
    {id:"392",cod_region:"4",cod_comuna:"4206",nombre:"RIO HURTADO"}, {id:"393",cod_region:"4",cod_comuna:"4301",nombre:"ILLAPEL"}, {id:"394",cod_region:"4",cod_comuna:"4302",nombre:"SALAMANCA"},
    {id:"395",cod_region:"4",cod_comuna:"4303",nombre:"LOS VILOS"}, {id:"396",cod_region:"4",cod_comuna:"4304",nombre:"CANELA"}, {id:"397",cod_region:"5",cod_comuna:"5101",nombre:"ISLA DE PASCUA"},
    {id:"398",cod_region:"5",cod_comuna:"5201",nombre:"LA LIGUA"}, {id:"399",cod_region:"5",cod_comuna:"5202",nombre:"PETORCA"}, {id:"400",cod_region:"5",cod_comuna:"5203",nombre:"CABILDO"},
    {id:"401",cod_region:"5",cod_comuna:"5204",nombre:"ZAPALLAR"}, {id:"402",cod_region:"5",cod_comuna:"5205",nombre:"PAPUDO"}, {id:"403",cod_region:"5",cod_comuna:"5301",nombre:"VALPARAISO"},
    {id:"404",cod_region:"5",cod_comuna:"5302",nombre:"VINA DEL MAR"}, {id:"405",cod_region:"5",cod_comuna:"5303",nombre:"VILLA ALEMANA"}, {id:"406",cod_region:"5",cod_comuna:"5304",nombre:"QUILPUE"},
    {id:"407",cod_region:"5",cod_comuna:"5305",nombre:"CASABLANCA"}, {id:"408",cod_region:"5",cod_comuna:"5306",nombre:"QUINTERO"}, {id:"409",cod_region:"5",cod_comuna:"5307",nombre:"PUCHUNCAVI"},
    {id:"410",cod_region:"5",cod_comuna:"5308",nombre:"JUAN FERNANDEZ"}, {id:"411",cod_region:"5",cod_comuna:"5309",nombre:"CONCON"}, {id:"412",cod_region:"5",cod_comuna:"5401",nombre:"SAN ANTONIO"},
    {id:"413",cod_region:"5",cod_comuna:"5402",nombre:"SANTO DOMINGO"}, {id:"414",cod_region:"5",cod_comuna:"5403",nombre:"CARTAGENA"}, {id:"415",cod_region:"5",cod_comuna:"5404",nombre:"EL TABO"},
    {id:"416",cod_region:"5",cod_comuna:"5405",nombre:"EL QUISCO"}, {id:"417",cod_region:"5",cod_comuna:"5406",nombre:"ALGARROBO"}, {id:"418",cod_region:"5",cod_comuna:"5501",nombre:"QUILLOTA"},
    {id:"419",cod_region:"5",cod_comuna:"5502",nombre:"NOGALES"}, {id:"420",cod_region:"5",cod_comuna:"5503",nombre:"HIJUELAS"}, {id:"421",cod_region:"5",cod_comuna:"5504",nombre:"LA CALERA"},
    {id:"422",cod_region:"5",cod_comuna:"5505",nombre:"LA CRUZ"}, {id:"423",cod_region:"5",cod_comuna:"5506",nombre:"LIMACHE"}, {id:"424",cod_region:"5",cod_comuna:"5507",nombre:"OLMUE"},
    {id:"425",cod_region:"5",cod_comuna:"5601",nombre:"SAN FELIPE"}, {id:"426",cod_region:"5",cod_comuna:"5602",nombre:"PANQUEHUE"}, {id:"427",cod_region:"5",cod_comuna:"5603",nombre:"CATEMU"},
    {id:"428",cod_region:"5",cod_comuna:"5604",nombre:"PUTAENDO"}, {id:"429",cod_region:"5",cod_comuna:"5605",nombre:"SANTA MARIA"}, {id:"430",cod_region:"5",cod_comuna:"5606",nombre:"LLAY-LLAY"},
    {id:"431",cod_region:"5",cod_comuna:"5701",nombre:"LOS ANDES"}, {id:"432",cod_region:"5",cod_comuna:"5702",nombre:"CALLE LARGA"}, {id:"433",cod_region:"5",cod_comuna:"5703",nombre:"SAN ESTEBAN"},
    {id:"434",cod_region:"5",cod_comuna:"5704",nombre:"RINCONADA"}, {id:"435",cod_region:"6",cod_comuna:"6101",nombre:"RANCAGUA"}, {id:"436",cod_region:"6",cod_comuna:"6102",nombre:"MACHALI"},
    {id:"437",cod_region:"6",cod_comuna:"6103",nombre:"GRANEROS"}, {id:"438",cod_region:"6",cod_comuna:"6104",nombre:"SAN FRANCISCO DE MOSTAZAL"}, {id:"439",cod_region:"6",cod_comuna:"6105",nombre:"DONIHUE"},
    {id:"440",cod_region:"6",cod_comuna:"6106",nombre:"COLTAUCO"}, {id:"441",cod_region:"6",cod_comuna:"6107",nombre:"CODEGUA"}, {id:"442",cod_region:"6",cod_comuna:"6108",nombre:"PEUMO"},
    {id:"443",cod_region:"6",cod_comuna:"6109",nombre:"LAS CABRAS"}, {id:"444",cod_region:"6",cod_comuna:"6110",nombre:"SAN VICENTE"}, {id:"445",cod_region:"6",cod_comuna:"6111",nombre:"PICHIDEGUA"},
    {id:"446",cod_region:"6",cod_comuna:"6112",nombre:"RENGO"}, {id:"447",cod_region:"6",cod_comuna:"6113",nombre:"REQUINOA"}, {id:"448",cod_region:"6",cod_comuna:"6114",nombre:"OLIVAR"},
    {id:"449",cod_region:"6",cod_comuna:"6115",nombre:"MALLOA"}, {id:"450",cod_region:"6",cod_comuna:"6116",nombre:"COINCO"}, {id:"451",cod_region:"6",cod_comuna:"6117",nombre:"QUINTA DE TILCOCO"},
    {id:"452",cod_region:"6",cod_comuna:"6201",nombre:"SAN FERNANDO"}, {id:"453",cod_region:"6",cod_comuna:"6202",nombre:"CHIMBARONGO"}, {id:"454",cod_region:"6",cod_comuna:"6203",nombre:"NANCAGUA"},
    {id:"455",cod_region:"6",cod_comuna:"6204",nombre:"PLACILLA"}, {id:"456",cod_region:"6",cod_comuna:"6205",nombre:"SANTA CRUZ"}, {id:"457",cod_region:"6",cod_comuna:"6206",nombre:"LOLOL"},
    {id:"458",cod_region:"6",cod_comuna:"6207",nombre:"PALMILLA"}, {id:"459",cod_region:"6",cod_comuna:"6208",nombre:"PERALILLO"}, {id:"460",cod_region:"6",cod_comuna:"6209",nombre:"CHEPICA"},
    {id:"461",cod_region:"6",cod_comuna:"6214",nombre:"PUMANQUE"}, {id:"462",cod_region:"6",cod_comuna:"6301",nombre:"PICHILEMU"}, {id:"463",cod_region:"6",cod_comuna:"6302",nombre:"NAVIDAD"},
    {id:"464",cod_region:"6",cod_comuna:"6303",nombre:"LITUECHE"}, {id:"465",cod_region:"6",cod_comuna:"6304",nombre:"LA ESTRELLA"}, {id:"466",cod_region:"6",cod_comuna:"6305",nombre:"MARCHIGUE"},
    {id:"467",cod_region:"6",cod_comuna:"6306",nombre:"PAREDONES"}, {id:"468",cod_region:"7",cod_comuna:"7101",nombre:"CURICO"}, {id:"469",cod_region:"7",cod_comuna:"7102",nombre:"TENO"},
    {id:"470",cod_region:"7",cod_comuna:"7103",nombre:"ROMERAL"}, {id:"471",cod_region:"7",cod_comuna:"7104",nombre:"RAUCO"}, {id:"472",cod_region:"7",cod_comuna:"7105",nombre:"LICANTEN"},
    {id:"473",cod_region:"7",cod_comuna:"7106",nombre:"VICHUQUEN"}, {id:"474",cod_region:"7",cod_comuna:"7107",nombre:"HUALANE"}, {id:"475",cod_region:"7",cod_comuna:"7108",nombre:"MOLINA"},
    {id:"476",cod_region:"7",cod_comuna:"7109",nombre:"SAGRADA FAMILIA"}, {id:"477",cod_region:"7",cod_comuna:"7201",nombre:"TALCA"}, {id:"478",cod_region:"7",cod_comuna:"7202",nombre:"SAN CLEMENTE"},
    {id:"479",cod_region:"7",cod_comuna:"7203",nombre:"PELARCO"}, {id:"480",cod_region:"7",cod_comuna:"7204",nombre:"RIO CLARO"}, {id:"481",cod_region:"7",cod_comuna:"7205",nombre:"PENCAHUE"},
    {id:"482",cod_region:"7",cod_comuna:"7206",nombre:"MAULE"}, {id:"483",cod_region:"7",cod_comuna:"7207",nombre:"CUREPTO"}, {id:"484",cod_region:"7",cod_comuna:"7208",nombre:"CONSTITUCION"},
    {id:"485",cod_region:"7",cod_comuna:"7209",nombre:"EMPEDRADO"}, {id:"486",cod_region:"7",cod_comuna:"7210",nombre:"SAN RAFAEL"}, {id:"487",cod_region:"7",cod_comuna:"7301",nombre:"LINARES"},
    {id:"488",cod_region:"7",cod_comuna:"7302",nombre:"YERBAS BUENAS"}, {id:"489",cod_region:"7",cod_comuna:"7303",nombre:"COLBUN"}, {id:"490",cod_region:"7",cod_comuna:"7304",nombre:"LONGAVI"},
    {id:"491",cod_region:"7",cod_comuna:"7305",nombre:"PARRAL"}, {id:"492",cod_region:"7",cod_comuna:"7306",nombre:"RETIRO"}, {id:"493",cod_region:"7",cod_comuna:"7309",nombre:"VILLA ALEGRE"},
    {id:"494",cod_region:"7",cod_comuna:"7310",nombre:"SAN JAVIER"}, {id:"495",cod_region:"7",cod_comuna:"7401",nombre:"CAUQUENES"}, {id:"496",cod_region:"7",cod_comuna:"7402",nombre:"PELLUHUE"},
    {id:"497",cod_region:"7",cod_comuna:"7403",nombre:"CHANCO"}, {id:"498",cod_region:"8",cod_comuna:"8101",nombre:"CHILLAN"}, {id:"499",cod_region:"8",cod_comuna:"8102",nombre:"PINTO"},
    {id:"500",cod_region:"8",cod_comuna:"8103",nombre:"COIHUECO"}, {id:"501",cod_region:"8",cod_comuna:"8104",nombre:"QUIRIHUE"}, {id:"502",cod_region:"8",cod_comuna:"8105",nombre:"NINHUE"},
    {id:"503",cod_region:"8",cod_comuna:"8106",nombre:"PORTEZUELO"}, {id:"504",cod_region:"8",cod_comuna:"8107",nombre:"COBQUECURA"}, {id:"505",cod_region:"8",cod_comuna:"8108",nombre:"TREHUACO"},
    {id:"506",cod_region:"8",cod_comuna:"8109",nombre:"SAN CARLOS"}, {id:"507",cod_region:"8",cod_comuna:"8110",nombre:"NIQUEN"}, {id:"508",cod_region:"8",cod_comuna:"8111",nombre:"SAN FABIAN"},
    {id:"509",cod_region:"8",cod_comuna:"8112",nombre:"SAN NICOLAS"}, {id:"510",cod_region:"8",cod_comuna:"8113",nombre:"BULNES"}, {id:"511",cod_region:"8",cod_comuna:"8114",nombre:"SAN IGNACIO"},
    {id:"512",cod_region:"8",cod_comuna:"8115",nombre:"QUILLON"}, {id:"513",cod_region:"8",cod_comuna:"8116",nombre:"YUNGAY"}, {id:"514",cod_region:"8",cod_comuna:"8117",nombre:"PEMUCO"},
    {id:"515",cod_region:"8",cod_comuna:"8118",nombre:"EL CARMEN"}, {id:"516",cod_region:"8",cod_comuna:"8119",nombre:"RANQUIL"}, {id:"517",cod_region:"8",cod_comuna:"8120",nombre:"COELEMU"},
    {id:"518",cod_region:"8",cod_comuna:"8121",nombre:"CHILLAN VIEJO"}, {id:"519",cod_region:"8",cod_comuna:"8201",nombre:"CONCEPCION"}, {id:"520",cod_region:"8",cod_comuna:"8202",nombre:"PENCO"},
    {id:"521",cod_region:"8",cod_comuna:"8203",nombre:"HUALQUI"}, {id:"522",cod_region:"8",cod_comuna:"8204",nombre:"FLORIDA"}, {id:"523",cod_region:"8",cod_comuna:"8205",nombre:"TOME"},
    {id:"524",cod_region:"8",cod_comuna:"8206",nombre:"TALCAHUANO"}, {id:"525",cod_region:"8",cod_comuna:"8207",nombre:"CORONEL"}, {id:"526",cod_region:"8",cod_comuna:"8208",nombre:"LOTA"},
    {id:"527",cod_region:"8",cod_comuna:"8209",nombre:"SANTA JUANA"}, {id:"528",cod_region:"8",cod_comuna:"8210",nombre:"SAN PEDRO DE LA PAZ"}, {id:"529",cod_region:"8",cod_comuna:"8211",nombre:"CHIGUAYANTE"},
    {id:"530",cod_region:"8",cod_comuna:"8212",nombre:"HUALPEN"}, {id:"531",cod_region:"8",cod_comuna:"8301",nombre:"ARAUCO"}, {id:"532",cod_region:"8",cod_comuna:"8302",nombre:"CURANILAHUE"},
    {id:"533",cod_region:"8",cod_comuna:"8303",nombre:"LEBU"}, {id:"534",cod_region:"8",cod_comuna:"8304",nombre:"LOS ALAMOS"}, {id:"535",cod_region:"8",cod_comuna:"8305",nombre:"CANETE"},
    {id:"536",cod_region:"8",cod_comuna:"8306",nombre:"CONTULMO"}, {id:"537",cod_region:"8",cod_comuna:"8307",nombre:"TIRUA"}, {id:"538",cod_region:"8",cod_comuna:"8401",nombre:"LOS ANGELES"},
    {id:"539",cod_region:"8",cod_comuna:"8402",nombre:"SANTA BARBARA"}, {id:"540",cod_region:"8",cod_comuna:"8403",nombre:"LAJA"}, {id:"541",cod_region:"8",cod_comuna:"8404",nombre:"QUILLECO"},
    {id:"542",cod_region:"8",cod_comuna:"8405",nombre:"NACIMIENTO"}, {id:"543",cod_region:"8",cod_comuna:"8406",nombre:"NEGRETE"}, {id:"544",cod_region:"8",cod_comuna:"8407",nombre:"MULCHEN"},
    {id:"545",cod_region:"8",cod_comuna:"8408",nombre:"QUILACO"}, {id:"546",cod_region:"8",cod_comuna:"8409",nombre:"YUMBEL"}, {id:"547",cod_region:"8",cod_comuna:"8410",nombre:"CABRERO"},
    {id:"548",cod_region:"8",cod_comuna:"8411",nombre:"SAN ROSENDO"}, {id:"549",cod_region:"8",cod_comuna:"8412",nombre:"TUCAPEL"}, {id:"550",cod_region:"8",cod_comuna:"8413",nombre:"ANTUCO"},
    {id:"551",cod_region:"8",cod_comuna:"8414",nombre:"ALTO BIOBIO"}, {id:"552",cod_region:"9",cod_comuna:"9101",nombre:"ANGOL"}, {id:"553",cod_region:"9",cod_comuna:"9102",nombre:"PUREN"},
    {id:"554",cod_region:"9",cod_comuna:"9103",nombre:"LOS SAUCES"}, {id:"555",cod_region:"9",cod_comuna:"9104",nombre:"RENAICO"}, {id:"556",cod_region:"9",cod_comuna:"9105",nombre:"COLLIPULLI"},
    {id:"557",cod_region:"9",cod_comuna:"9106",nombre:"ERCILLA"}, {id:"558",cod_region:"9",cod_comuna:"9107",nombre:"TRAIGUEN"}, {id:"559",cod_region:"9",cod_comuna:"9108",nombre:"LUMACO"},
    {id:"560",cod_region:"9",cod_comuna:"9109",nombre:"VICTORIA"}, {id:"561",cod_region:"9",cod_comuna:"9110",nombre:"CURACAUTIN"}, {id:"562",cod_region:"9",cod_comuna:"9111",nombre:"LONQUIMAY"},
    {id:"563",cod_region:"9",cod_comuna:"9201",nombre:"TEMUCO"}, {id:"564",cod_region:"9",cod_comuna:"9202",nombre:"VILCUN"}, {id:"565",cod_region:"9",cod_comuna:"9203",nombre:"FREIRE"},
    {id:"566",cod_region:"9",cod_comuna:"9204",nombre:"CUNCO"}, {id:"567",cod_region:"9",cod_comuna:"9205",nombre:"LAUTARO"}, {id:"568",cod_region:"9",cod_comuna:"9206",nombre:"PERQUENCO"},
    {id:"569",cod_region:"9",cod_comuna:"9207",nombre:"GALVARINO"}, {id:"570",cod_region:"9",cod_comuna:"9208",nombre:"NUEVA IMPERIAL"}, {id:"571",cod_region:"9",cod_comuna:"9209",nombre:"CARAHUE"},
    {id:"572",cod_region:"9",cod_comuna:"9210",nombre:"SAAVEDRA"}, {id:"573",cod_region:"9",cod_comuna:"9211",nombre:"PITRUFQUEN"}, {id:"574",cod_region:"9",cod_comuna:"9212",nombre:"GORBEA"},
    {id:"575",cod_region:"9",cod_comuna:"9213",nombre:"TOLTEN"}, {id:"576",cod_region:"9",cod_comuna:"9214",nombre:"LONCOCHE"}, {id:"577",cod_region:"9",cod_comuna:"9215",nombre:"VILLARRICA"},
    {id:"578",cod_region:"9",cod_comuna:"9216",nombre:"PUCON"}, {id:"579",cod_region:"9",cod_comuna:"9217",nombre:"MELIPEUCO"}, {id:"580",cod_region:"9",cod_comuna:"9218",nombre:"CURARREHUE"},
    {id:"581",cod_region:"9",cod_comuna:"9219",nombre:"TEODORO SCHMIDT"}, {id:"582",cod_region:"9",cod_comuna:"9220",nombre:"PADRE LAS CASAS"}, {id:"583",cod_region:"9",cod_comuna:"9221",nombre:"CHOLCHOL"},
    {id:"584",cod_region:"9",cod_comuna:"10101",nombre:"VALDIVIA"}, {id:"585",cod_region:"9",cod_comuna:"10102",nombre:"MARIQUINA"}, {id:"586",cod_region:"9",cod_comuna:"10103",nombre:"LANCO"},
    {id:"587",cod_region:"9",cod_comuna:"10104",nombre:"LOS LAGOS"}, {id:"588",cod_region:"9",cod_comuna:"10105",nombre:"FUTRONO"}, {id:"589",cod_region:"9",cod_comuna:"10106",nombre:"CORRAL"},
    {id:"590",cod_region:"9",cod_comuna:"10107",nombre:"MAFIL"}, {id:"591",cod_region:"9",cod_comuna:"10108",nombre:"PANGUIPULLI"}, {id:"592",cod_region:"9",cod_comuna:"10109",nombre:"LA UNION"},
    {id:"593",cod_region:"9",cod_comuna:"10110",nombre:"PAILLACO"}, {id:"594",cod_region:"9",cod_comuna:"10111",nombre:"RIO BUENO"}, {id:"595",cod_region:"9",cod_comuna:"10112",nombre:"LAGO RANCO"},
    {id:"596",cod_region:"10",cod_comuna:"10201",nombre:"OSORNO"}, {id:"597",cod_region:"10",cod_comuna:"10202",nombre:"SAN PABLO"}, {id:"598",cod_region:"10",cod_comuna:"10203",nombre:"PUERTO OCTAY"},
    {id:"599",cod_region:"10",cod_comuna:"10204",nombre:"PUYEHUE"}, {id:"600",cod_region:"10",cod_comuna:"10205",nombre:"RIO NEGRO"}, {id:"601",cod_region:"10",cod_comuna:"10206",nombre:"PURRANQUE"},
    {id:"602",cod_region:"10",cod_comuna:"10207",nombre:"SAN JUAN DE LA COSTA"}, {id:"603",cod_region:"10",cod_comuna:"10301",nombre:"PUERTO MONTT"}, {id:"604",cod_region:"10",cod_comuna:"10302",nombre:"COCHAMO"},
    {id:"605",cod_region:"10",cod_comuna:"10303",nombre:"PUERTO VARAS"}, {id:"606",cod_region:"10",cod_comuna:"10304",nombre:"FRESIA"}, {id:"607",cod_region:"10",cod_comuna:"10305",nombre:"FRUTILLAR"},
    {id:"608",cod_region:"10",cod_comuna:"10306",nombre:"LLANQUIHUE"}, {id:"609",cod_region:"10",cod_comuna:"10307",nombre:"MAULLIN"}, {id:"610",cod_region:"10",cod_comuna:"10308",nombre:"LOS MUERMOS"},
    {id:"611",cod_region:"10",cod_comuna:"10309",nombre:"CALBUCO"}, {id:"612",cod_region:"10",cod_comuna:"10401",nombre:"CASTRO"}, {id:"613",cod_region:"10",cod_comuna:"10402",nombre:"CHONCHI"},
    {id:"614",cod_region:"10",cod_comuna:"10403",nombre:"QUEILEN"}, {id:"615",cod_region:"10",cod_comuna:"10404",nombre:"QUELLON"}, {id:"616",cod_region:"10",cod_comuna:"10405",nombre:"PUQUELDON"},
    {id:"617",cod_region:"10",cod_comuna:"10406",nombre:"ANCUD"}, {id:"618",cod_region:"10",cod_comuna:"10407",nombre:"QUEMCHI"}, {id:"619",cod_region:"10",cod_comuna:"10408",nombre:"DALCAHUE"},
    {id:"620",cod_region:"10",cod_comuna:"10410",nombre:"CURACO DE VELEZ"}, {id:"621",cod_region:"10",cod_comuna:"10415",nombre:"QUINCHAO"}, {id:"622",cod_region:"10",cod_comuna:"10501",nombre:"CHAITEN"},
    {id:"623",cod_region:"10",cod_comuna:"10502",nombre:"HUALAIHUE"}, {id:"624",cod_region:"10",cod_comuna:"10503",nombre:"FUTALEUFU"}, {id:"625",cod_region:"10",cod_comuna:"10504",nombre:"PALENA"},
    {id:"626",cod_region:"11",cod_comuna:"11101",nombre:"AYSEN"}, {id:"627",cod_region:"11",cod_comuna:"11102",nombre:"CISNES"}, {id:"628",cod_region:"11",cod_comuna:"11104",nombre:"GUAITECAS"},
    {id:"629",cod_region:"11",cod_comuna:"11201",nombre:"CHILE CHICO"}, {id:"630",cod_region:"11",cod_comuna:"11203",nombre:"RIO IBANEZ"}, {id:"631",cod_region:"11",cod_comuna:"11301",nombre:"COCHRANE"},
    {id:"632",cod_region:"11",cod_comuna:"11302",nombre:"OHIGGINS"}, {id:"633",cod_region:"11",cod_comuna:"11303",nombre:"TORTEL"}, {id:"634",cod_region:"11",cod_comuna:"11401",nombre:"COYHAIQUE"},
    {id:"635",cod_region:"11",cod_comuna:"11402",nombre:"LAGO VERDE"}, {id:"636",cod_region:"12",cod_comuna:"12101",nombre:"NATALES"}, {id:"637",cod_region:"12",cod_comuna:"12103",nombre:"TORRES DEL PAINE"},
    {id:"638",cod_region:"12",cod_comuna:"12202",nombre:"RIO VERDE"}, {id:"639",cod_region:"12",cod_comuna:"12204",nombre:"SAN GREGORIO"}, {id:"640",cod_region:"12",cod_comuna:"12205",nombre:"PUNTA ARENAS"},
    {id:"641",cod_region:"12",cod_comuna:"12206",nombre:"LAGUNA BLANCA"}, {id:"642",cod_region:"12",cod_comuna:"12301",nombre:"PORVENIR"}, {id:"643",cod_region:"12",cod_comuna:"12302",nombre:"PRIMAVERA"},
    {id:"644",cod_region:"12",cod_comuna:"12304",nombre:"TIMAUKEL"}, {id:"645",cod_region:"12",cod_comuna:"12401",nombre:"CABO DE HORNOS"}, {id:"646",cod_region:"13",cod_comuna:"13101",nombre:"SANTIAGO"},
    {id:"647",cod_region:"13",cod_comuna:"13134",nombre:"SANTIAGO OESTE"}, {id:"648",cod_region:"13",cod_comuna:"13135",nombre:"SANTIAGO SUR"}, {id:"649",cod_region:"13",cod_comuna:"13159",nombre:"RECOLETA"},
    {id:"650",cod_region:"13",cod_comuna:"13167",nombre:"INDEPENDENCIA"}, {id:"651",cod_region:"13",cod_comuna:"14107",nombre:"QUINTA NORMAL"}, {id:"652",cod_region:"13",cod_comuna:"14109",nombre:"MAIPU"},
    {id:"653",cod_region:"13",cod_comuna:"14111",nombre:"PUDAHUEL"}, {id:"654",cod_region:"13",cod_comuna:"14113",nombre:"RENCA"}, {id:"655",cod_region:"13",cod_comuna:"14114",nombre:"QUILICURA"},
    {id:"656",cod_region:"13",cod_comuna:"14127",nombre:"CONCHALI"}, {id:"657",cod_region:"13",cod_comuna:"14155",nombre:"LO PRADO"}, {id:"658",cod_region:"13",cod_comuna:"14156",nombre:"CERRO NAVIA"},
    {id:"659",cod_region:"13",cod_comuna:"14157",nombre:"ESTACION CENTRAL"}, {id:"660",cod_region:"13",cod_comuna:"14158",nombre:"HUECHURABA"}, {id:"661",cod_region:"13",cod_comuna:"14166",nombre:"CERRILLOS"},
    {id:"662",cod_region:"13",cod_comuna:"14201",nombre:"COLINA"}, {id:"663",cod_region:"13",cod_comuna:"14202",nombre:"LAMPA"}, {id:"664",cod_region:"13",cod_comuna:"14203",nombre:"TIL-TIL"},
    {id:"665",cod_region:"13",cod_comuna:"14501",nombre:"TALAGANTE"}, {id:"666",cod_region:"13",cod_comuna:"14502",nombre:"ISLA DE MAIPO"}, {id:"667",cod_region:"13",cod_comuna:"14503",nombre:"EL MONTE"},
    {id:"668",cod_region:"13",cod_comuna:"14504",nombre:"PENAFLOR"}, {id:"669",cod_region:"13",cod_comuna:"14505",nombre:"PADRE HURTADO"}, {id:"670",cod_region:"13",cod_comuna:"14601",nombre:"MELIPILLA"},
    {id:"671",cod_region:"13",cod_comuna:"14602",nombre:"MARIA PINTO"}, {id:"672",cod_region:"13",cod_comuna:"14603",nombre:"CURACAVI"}, {id:"673",cod_region:"13",cod_comuna:"14604",nombre:"SAN PEDRO"},
    {id:"674",cod_region:"13",cod_comuna:"14605",nombre:"ALHUE"}, {id:"675",cod_region:"13",cod_comuna:"15103",nombre:"PROVIDENCIA"}, {id:"676",cod_region:"13",cod_comuna:"15105",nombre:"NUNOA"},
    {id:"677",cod_region:"13",cod_comuna:"15108",nombre:"LAS CONDES"}, {id:"678",cod_region:"13",cod_comuna:"15128",nombre:"LA FLORIDA"}, {id:"679",cod_region:"13",cod_comuna:"15132",nombre:"LA REINA"},
    {id:"680",cod_region:"13",cod_comuna:"15151",nombre:"MACUL"}, {id:"681",cod_region:"13",cod_comuna:"15152",nombre:"PENALOLEN"}, {id:"682",cod_region:"13",cod_comuna:"15160",nombre:"VITACURA"},
    {id:"683",cod_region:"13",cod_comuna:"15161",nombre:"LO BARNECHEA"}, {id:"684",cod_region:"13",cod_comuna:"16106",nombre:"SAN MIGUEL"}, {id:"685",cod_region:"13",cod_comuna:"16110",nombre:"LA CISTERNA"},
    {id:"686",cod_region:"13",cod_comuna:"16131",nombre:"LA GRANJA"}, {id:"687",cod_region:"13",cod_comuna:"16153",nombre:"SAN RAMON"}, {id:"688",cod_region:"13",cod_comuna:"16154",nombre:"LA PINTANA"},
    {id:"689",cod_region:"13",cod_comuna:"16162",nombre:"PEDRO AGUIRRE CERDA"}, {id:"690",cod_region:"13",cod_comuna:"16163",nombre:"SAN JOAQUIN"}, {id:"691",cod_region:"13",cod_comuna:"16164",nombre:"LO ESPEJO"},
    {id:"692",cod_region:"13",cod_comuna:"16165",nombre:"EL BOSQUE"}, {id:"693",cod_region:"13",cod_comuna:"16301",nombre:"PUENTE ALTO"}, {id:"694",cod_region:"13",cod_comuna:"16302",nombre:"PIRQUE"},
    {id:"695",cod_region:"13",cod_comuna:"16303",nombre:"SAN JOSE DE MAIPO"}, {id:"696",cod_region:"13",cod_comuna:"16401",nombre:"SAN BERNARDO"}, {id:"697",cod_region:"13",cod_comuna:"16402",nombre:"CALERA DE TANGO"},
    {id:"698",cod_region:"13",cod_comuna:"16403",nombre:"BUIN"}, {id:"699",cod_region:"13",cod_comuna:"16404",nombre:"PAINE"}, {id:"700",cod_region:"14",cod_comuna:"1",nombre:"CORRAL"},
    {id:"701",cod_region:"14",cod_comuna:"1",nombre:"FUTRONO"}, {id:"702",cod_region:"14",cod_comuna:"1",nombre:"LA UNION"}, {id:"703",cod_region:"14",cod_comuna:"1",nombre:"LAGO RANCO"},
    {id:"704",cod_region:"14",cod_comuna:"1",nombre:"LANCO"}, {id:"705",cod_region:"14",cod_comuna:"1",nombre:"LOS LAGOS"}, {id:"706",cod_region:"14",cod_comuna:"1",nombre:"MAFIL"},
    {id:"707",cod_region:"14",cod_comuna:"1",nombre:"MARIQUINA"}, {id:"708",cod_region:"14",cod_comuna:"1",nombre:"PAILLACO"}, {id:"709",cod_region:"14",cod_comuna:"1",nombre:"PANGUIPULLI"},
    {id:"710",cod_region:"14",cod_comuna:"1",nombre:"RIO BUENO"}, {id:"711",cod_region:"14",cod_comuna:"1",nombre:"VALDIVIA"}]
    ,
    //regiones
    regiones:
    [{id:"1",codigo:"15",nombre:"XV Region de Arica y Parinacota"}, {id:"2",codigo:"1",nombre:"I  Region de Tarapaca"}, {id:"3",codigo:"2",nombre:"II  Region de Antofagasta"},
    {id:"4",codigo:"3",nombre:"III  Region de Atacama"}, {id:"7",codigo:"4",nombre:"IV  Region de Coquimbo"}, {id:"8",codigo:"5",nombre:"V  Region de Valparaiso"},
    {id:"9",codigo:"6",nombre:"VI Region de Ohiggins"}, {id:"10",codigo:"7",nombre:"VII  Region del Maule"}, {id:"11",codigo:"8",nombre:"VIII Region del Bio Bio"}, {id:"12",codigo:"9",nombre:"IX Region de la Araucania"},
    {id:"13",codigo:"14",nombre:"XIV Region de Los Rios"}, {id:"14",codigo:"10",nombre:"X Region de Los Lagos"}, {id:"15",codigo:"11",nombre:"XI Region de Aysen"}, {id:"16",codigo:"12",nombre:"XII Region de Magallanes Y Antartica Chilena"},
    {id:"17",codigo:"13",nombre:"XIII Region Metropolitana"}]
    ,
    //actividad ECONOMICA
    cod_act_econ:
    [{id:"700",codigo:"11111",nombre:"CULTIVO DE TRIGO",activo:"1"}, {id:"701",codigo:"11112",nombre:"CULTIVO DE MAIZ",activo:"1"}, {id:"702",codigo:"11113",nombre:"CULTIVO DE AVENA",activo:"1"},
    {id:"703",codigo:"11114",nombre:"CULTIVO DE ARROZ",activo:"1"}, {id:"704",codigo:"11115",nombre:"CULTIVO DE CEBADA",activo:"1"}, {id:"705",codigo:"11119",nombre:"CULTIVO DE OTROS CEREALES",activo:"1"},
    {id:"706",codigo:"11121",nombre:"CULTIVO FORRAJEROS EN PRADERAS NATURALES",activo:"1"}, {id:"707",codigo:"11122",nombre:"CULTIVO FORRAJEROS EN PRADERAS MEJORADAS O SEMBRADAS",activo:"1"}, {id:"708",codigo:"11131",nombre:"CULTIVO DE POROTOS O FRIJOL",activo:"1"},
    {id:"709",codigo:"11132",nombre:"CULTIVO, PRODUCCI",activo:"1"}, {id:"710",codigo:"11139",nombre:"CULTIVO DE OTRAS LEGUMBRES",activo:"1"}, {id:"711",codigo:"11141",nombre:"CULTIVO DE PAPAS",activo:"1"},
    {id:"712",codigo:"11142",nombre:"CULTIVO DE CAMOTES O BATATAS",activo:"1"}, {id:"713",codigo:"11149",nombre:"CULTIVO DE OTROS TUB",activo:"1"}, {id:"714",codigo:"11151",nombre:"CULTIVO DE RAPS",activo:"1"},
    {id:"715",codigo:"11152",nombre:"CULTIVO DE MARAVILLA",activo:"1"}, {id:"716",codigo:"11159",nombre:"CULTIVO DE OTRAS OLEAGINOSAS N.C.P.",activo:"1"}, {id:"717",codigo:"11160",nombre:"PRODUCCI",activo:"1"},
    {id:"718",codigo:"11191",nombre:"CULTIVO DE REMOLACHA",activo:"1"}, {id:"719",codigo:"11192",nombre:"CULTIVO DE TABACO",activo:"1"}, {id:"720",codigo:"11193",nombre:"CULTIVO DE FIBRAS VEGETALES INDUSTRIALES",activo:"1"},
    {id:"721",codigo:"11194",nombre:"CULTIVO DE PLANTAS AROM",activo:"1"}, {id:"722",codigo:"11199",nombre:"OTROS CULTIVOS N.C.P.",activo:"1"}, {id:"723",codigo:"11211",nombre:"CULTIVO TRADICIONAL DE HORTALIZAS FRESCAS",activo:"1"},
    {id:"724",codigo:"11212",nombre:"CULTIVO DE HORTALIZAS EN INVERNADEROS Y CULTIVOS HIDROPONICOS",activo:"1"}, {id:"725",codigo:"11213",nombre:"CULTIVO ORG",activo:"1"}, {id:"726",codigo:"11220",nombre:"CULTIVO DE PLANTAS VIVAS Y PRODUCTOS DE LA FLORICULTURA",activo:"1"},
    {id:"727",codigo:"11230",nombre:"PRODUCCI",activo:"1"}, {id:"728",codigo:"11240",nombre:"PRODUCCI",activo:"1"}, {id:"729",codigo:"11250",nombre:"CULTIVO Y RECOLECCI",activo:"1"},
    {id:"730",codigo:"11311",nombre:"CULTIVO DE UVA DESTINADA A PRODUCCI",activo:"1"}, {id:"731",codigo:"11312",nombre:"CULTIVO DE UVA DESTINADA A PRODUCCI",activo:"1"}, {id:"732",codigo:"11313",nombre:"CULTIVO DE UVA DE MESA",activo:"1"},
    {id:"733",codigo:"11321",nombre:"CULTIVO DE FRUTALES EN ",activo:"1"}, {id:"734",codigo:"11322",nombre:"CULTIVO DE FRUTALES MENORES EN PLANTAS CON CICLO DE VIDA DE UNA TEMPORADA",activo:"1"}, {id:"735",codigo:"11330",nombre:"CULTIVO DE PLANTAS CUYAS HOJAS O FRUTAS SE UTILIZAN PARA PREPARAR BEBIDAS",activo:"1"},
    {id:"736",codigo:"11340",nombre:"CULTIVO DE ESPECIAS",activo:"1"}, {id:"737",codigo:"12111",nombre:"CR",activo:"1"}, {id:"738",codigo:"12112",nombre:"CR",activo:"1"},
    {id:"739",codigo:"12120",nombre:"CR",activo:"1"}, {id:"740",codigo:"12130",nombre:"CR",activo:"1"}, {id:"741",codigo:"12210",nombre:"CR",activo:"1"},
    {id:"742",codigo:"12221",nombre:"CR",activo:"1"}, {id:"743",codigo:"12222",nombre:"CR",activo:"1"}, {id:"744",codigo:"12223",nombre:"CR",activo:"1"},
    {id:"745",codigo:"12230",nombre:"CR",activo:"1"}, {id:"746",codigo:"12240",nombre:"APICULTURA",activo:"1"}, {id:"747",codigo:"12250",nombre:"RANICULTURA, HELICICULTURA U OTRA ACTIVIDAD CON ANIMALES MENORES O INSECTOS",activo:"1"},
    {id:"748",codigo:"12290",nombre:"OTRAS EXPLOTACIONES DE ANIMALES NO CLASIFICADOS EN OTRA PARTE, INCLUIDO SUS SUBPRODUCTOS",activo:"1"}, {id:"749",codigo:"13000",nombre:"EXPLOTACI",activo:"1"}, {id:"750",codigo:"14011",nombre:"SERVICIO DE CORTE Y ENFARDADO DE FORRAJE",activo:"1"},
    {id:"751",codigo:"14012",nombre:"SERVICIO DE RECOLECCI",activo:"1"}, {id:"752",codigo:"14013",nombre:"SERVICIO DE ROTURACI",activo:"1"}, {id:"753",codigo:"14014",nombre:"DESTRUCCI",activo:"1"},
    {id:"754",codigo:"14015",nombre:"COSECHA, PODA, AMARRE Y LABORES DE ADECUACI",activo:"1"}, {id:"755",codigo:"14019",nombre:"OTROS SERVICIOS AGR",activo:"1"}, {id:"756",codigo:"14021",nombre:"SERVICIOS DE ADIESTRAMIENTO, GUARDER",activo:"1"},
    {id:"757",codigo:"14022",nombre:"SERVICIOS GANADEROS, EXCEPTO ACTIVIDADES VETERINARIAS",activo:"1"}, {id:"758",codigo:"15010",nombre:"CAZA DE MAM",activo:"1"}, {id:"759",codigo:"15090",nombre:"CAZA ORDINARIA Y MEDIANTE TRAMPAS, Y ACTIVIDADES DE SERVICIOS CONEXAS",activo:"1"},
    {id:"760",codigo:"20010",nombre:"EXPLOTACI",activo:"1"}, {id:"761",codigo:"20020",nombre:"RECOLECCI",activo:"1"}, {id:"762",codigo:"20030",nombre:"EXPLOTACI",activo:"1"},
    {id:"763",codigo:"20041",nombre:"SERVICIOS DE FORESTACI",activo:"1"}, {id:"764",codigo:"20042",nombre:"SERVICIOS DE CORTA DE MADERA",activo:"1"}, {id:"765",codigo:"20043",nombre:"SERVICIOS DE CONTROL DE INCENDIOS FORESTALES",activo:"1"},
    {id:"766",codigo:"20049",nombre:"OTRAS ACTIVIDADES DE SERVICIOS CONEXAS A LA SILVICULTURA N.C.P.",activo:"1"}, {id:"767",codigo:"51010",nombre:"CULTIVO DE ESPECIES ACU",activo:"1"}, {id:"768",codigo:"51020",nombre:"REPRODUCCI",activo:"1"},
    {id:"769",codigo:"51030",nombre:"CULTIVO, REPRODUCCI",activo:"1"}, {id:"770",codigo:"51040",nombre:"REPRODUCCI",activo:"1"}, {id:"771",codigo:"51090",nombre:"SERVICIOS RELACIONADOS CON LA ACUICULTURA, NO INCLUYE SERVICIOS PROFESIONALES Y DE EXTRACCI",activo:"1"},
    {id:"772",codigo:"52010",nombre:"PESCA INDUSTRIAL",activo:"1"}, {id:"773",codigo:"52020",nombre:"ACTIVIDAD PESQUERA DE BARCOS FACTOR",activo:"1"}, {id:"774",codigo:"52030",nombre:"PESCA ARTESANAL. EXTRACCI",activo:"1"},
    {id:"775",codigo:"52040",nombre:"RECOLECCI",activo:"1"}, {id:"776",codigo:"52050",nombre:"SERVICIOS RELACIONADOS CON LA PESCA, NO INCLUYE SERVICIOS PROFESIONALES",activo:"1"}, {id:"777",codigo:"100000",nombre:"EXTRACCI",activo:"1"},
    {id:"778",codigo:"111000",nombre:"EXTRACCI",activo:"1"}, {id:"779",codigo:"112000",nombre:"ACTIVIDADES DE SERVICIOS RELACIONADAS CON LA EXTRACCI",activo:"1"}, {id:"780",codigo:"120000",nombre:"EXTRACCI",activo:"1"},
    {id:"781",codigo:"131000",nombre:"EXTRACCI",activo:"1"}, {id:"782",codigo:"132010",nombre:"EXTRACCI",activo:"1"}, {id:"783",codigo:"132020",nombre:"EXTRACCI",activo:"1"},
    {id:"784",codigo:"132030",nombre:"EXTRACCI",activo:"1"}, {id:"785",codigo:"132090",nombre:"EXTRACCI",activo:"1"}, {id:"786",codigo:"133000",nombre:"EXTRACCI",activo:"1"},
    {id:"787",codigo:"141000",nombre:"EXTRACCI",activo:"1"}, {id:"788",codigo:"142100",nombre:"EXTRACCI",activo:"1"}, {id:"789",codigo:"142200",nombre:"EXTRACCI",activo:"1"},
    {id:"790",codigo:"142300",nombre:"EXTRACCI",activo:"1"}, {id:"791",codigo:"142900",nombre:"EXPLOTACI",activo:"1"}, {id:"792",codigo:"151110",nombre:"PRODUCCI",activo:"1"},
    {id:"793",codigo:"151120",nombre:"CONSERVACI",activo:"1"}, {id:"794",codigo:"151130",nombre:"PRODUCCI",activo:"1"}, {id:"795",codigo:"151140",nombre:"ELABORACI",activo:"1"},
    {id:"796",codigo:"151210",nombre:"PRODUCCI",activo:"1"}, {id:"797",codigo:"151221",nombre:"FABRICACI",activo:"1"}, {id:"798",codigo:"151222",nombre:"ELABORACI",activo:"1"},
    {id:"799",codigo:"151223",nombre:"ELABORACI",activo:"1"}, {id:"800",codigo:"151230",nombre:"ELABORACI",activo:"1"}, {id:"801",codigo:"151300",nombre:"ELABORACI",activo:"1"},
    {id:"802",codigo:"151410",nombre:"ELABORACI",activo:"1"}, {id:"803",codigo:"151420",nombre:"ELABORACI",activo:"1"}, {id:"804",codigo:"151430",nombre:"ELABORACI",activo:"1"},
    {id:"805",codigo:"152010",nombre:"ELABORACI",activo:"1"}, {id:"806",codigo:"152020",nombre:"ELABORACI",activo:"1"}, {id:"807",codigo:"152030",nombre:"FABRICACI",activo:"1"},
    {id:"808",codigo:"153110",nombre:"ELABORACI",activo:"1"}, {id:"809",codigo:"153120",nombre:"ACTIVIDADES DE MOLIENDA DE ARROZ",activo:"1"}, {id:"810",codigo:"153190",nombre:"ELABORACI",activo:"1"},
    {id:"811",codigo:"153210",nombre:"ELABORACI",activo:"1"}, {id:"812",codigo:"153220",nombre:"ELABORACI",activo:"1"}, {id:"813",codigo:"153300",nombre:"ELABORACI",activo:"1"},
    {id:"814",codigo:"154110",nombre:"FABRICACI",activo:"1"}, {id:"815",codigo:"154120",nombre:"FABRICACI",activo:"1"}, {id:"816",codigo:"154200",nombre:"ELABORACI",activo:"1"},
    {id:"817",codigo:"154310",nombre:"ELABORACI",activo:"1"}, {id:"818",codigo:"154320",nombre:"FABRICACI",activo:"1"}, {id:"819",codigo:"154400",nombre:"ELABORACI",activo:"1"},
    {id:"820",codigo:"154910",nombre:"ELABORACI",activo:"1"}, {id:"821",codigo:"154920",nombre:"ELABORACI",activo:"1"}, {id:"822",codigo:"154930",nombre:"ELABORACI",activo:"1"},
    {id:"823",codigo:"154990",nombre:"ELABORACI",activo:"1"}, {id:"824",codigo:"155110",nombre:"ELABORACI",activo:"1"}, {id:"825",codigo:"155120",nombre:"ELABORACI",activo:"1"},
    {id:"826",codigo:"155200",nombre:"ELABORACI",activo:"1"}, {id:"827",codigo:"155300",nombre:"ELABORACI",activo:"1"}, {id:"828",codigo:"155410",nombre:"ELABORACI",activo:"1"},
    {id:"829",codigo:"155420",nombre:"ENVASADO DE AGUA MINERAL NATURAL, DE MANANTIAL Y POTABLE PREPARADA",activo:"1"}, {id:"830",codigo:"155430",nombre:"ELABORACI",activo:"1"},
    {id:"831",codigo:"160010",nombre:"FABRICACI",activo:"1"}, {id:"832",codigo:"160090",nombre:"FABRICACI",activo:"1"}, {id:"833",codigo:"171100",nombre:"PREPARACI",activo:"1"},
    {id:"834",codigo:"171200",nombre:"ACABADO DE PRODUCTOS TEXTIL",activo:"1"}, {id:"835",codigo:"172100",nombre:"FABRICACI",activo:"1"}, {id:"836",codigo:"172200",nombre:"FABRICACI",activo:"1"},
    {id:"837",codigo:"172300",nombre:"FABRICACI",activo:"1"}, {id:"838",codigo:"172910",nombre:"FABRICACI",activo:"1"}, {id:"839",codigo:"172990",nombre:"FABRICACI",activo:"1"},
    {id:"840",codigo:"173000",nombre:"FABRICACI",activo:"1"}, {id:"841",codigo:"181010",nombre:"FABRICACI",activo:"1"}, {id:"842",codigo:"181020",nombre:"FABRICACI",activo:"1"},
    {id:"843",codigo:"181030",nombre:"FABRICACI",activo:"1"}, {id:"844",codigo:"181040",nombre:"FABRICACI",activo:"1"}, {id:"845",codigo:"182000",nombre:"ADOBO Y TENIDOS DE PIELES; FABRICACI",activo:"1"},
    {id:"846",codigo:"191100",nombre:"CURTIDO Y ADOBO DE CUEROS",activo:"1"}, {id:"847",codigo:"191200",nombre:"FABRICACI",activo:"1"}, {id:"848",codigo:"192000",nombre:"FABRICACI",activo:"1"},
    {id:"849",codigo:"201000",nombre:"ASERRADO Y ACEPILLADURA DE MADERAS",activo:"1"}, {id:"850",codigo:"202100",nombre:"FABRICACI",activo:"1"}, {id:"851",codigo:"202200",nombre:"FABRICACI",activo:"1"},
    {id:"852",codigo:"202300",nombre:"FABRICACI",activo:"1"}, {id:"853",codigo:"202900",nombre:"FABRICACI",activo:"1"}, {id:"854",codigo:"210110",nombre:"FABRICACI",activo:"1"},
    {id:"855",codigo:"210121",nombre:"FABRICACI",activo:"1"}, {id:"856",codigo:"210129",nombre:"FABRICACI",activo:"1"}, {id:"857",codigo:"210200",nombre:"FABRICACI",activo:"1"},
    {id:"858",codigo:"210900",nombre:"FABRICACI",activo:"1"}, {id:"859",codigo:"221101",nombre:"EDICI",activo:"1"}, {id:"860",codigo:"221109",nombre:"EDICI",activo:"1"},
    {id:"861",codigo:"221200",nombre:"EDICI",activo:"1"}, {id:"862",codigo:"221300",nombre:"EDICI",activo:"1"}, {id:"863",codigo:"221900",nombre:"OTRAS ACTIVIDADES DE EDICI",activo:"1"},
    {id:"864",codigo:"222101",nombre:"IMPRESI",activo:"1"}, {id:"865",codigo:"222109",nombre:"OTRAS ACTIVIDADES DE IMPRESI",activo:"1"}, {id:"866",codigo:"222200",nombre:"ACTIVIDADES DE SERVICIO RELACIONADA CON LA IMPRESI",activo:"1"},
    {id:"867",codigo:"223000",nombre:"REPRODUCCI",activo:"1"}, {id:"868",codigo:"231000",nombre:"FABRICACI",activo:"1"}, {id:"869",codigo:"232000",nombre:"FABRICACI",activo:"1"},
    {id:"870",codigo:"233000",nombre:"ELABORACI",activo:"1"}, {id:"871",codigo:"241110",nombre:"FABRICACI",activo:"1"}, {id:"872",codigo:"241190",nombre:"FABRICACI",activo:"1"},
    {id:"873",codigo:"241200",nombre:"FABRICACI",activo:"1"}, {id:"874",codigo:"241300",nombre:"FABRICACI",activo:"1"}, {id:"875",codigo:"242100",nombre:"FABRICACI",activo:"1"},
    {id:"876",codigo:"242200",nombre:"FABRICACI",activo:"1"}, {id:"877",codigo:"242300",nombre:"FABRICACI",activo:"1"},
    {id:"878",codigo:"242400",nombre:"FABRICACIONES DE JABONES Y DETERGENTES, PREPARADOS PARA LIMPIAR, PERFUMES Y PREPARADOS DE TOCADOR",activo:"1"}, {id:"879",codigo:"242910",nombre:"FABRICACI",activo:"1"}, {id:"880",codigo:"242990",nombre:"FABRICACI",activo:"1"},
    {id:"881",codigo:"243000",nombre:"FABRICACI",activo:"1"}, {id:"882",codigo:"251110",nombre:"FABRICACI",activo:"1"}, {id:"883",codigo:"251120",nombre:"RECAUCHADO Y RENOVACI",activo:"1"},
    {id:"884",codigo:"251900",nombre:"FABRICACI",activo:"1"}, {id:"885",codigo:"252010",nombre:"FABRICACI",activo:"1"}, {id:"886",codigo:"252020",nombre:"FABRICACI",activo:"1"},
    {id:"887",codigo:"252090",nombre:"FABRICACI",activo:"1"}, {id:"888",codigo:"261010",nombre:"FABRICACI",activo:"1"}, {id:"889",codigo:"261020",nombre:"FABRICACI",activo:"1"},
    {id:"890",codigo:"261030",nombre:"FABRICACI",activo:"1"}, {id:"891",codigo:"261090",nombre:"FABRICACI",activo:"1"}, {id:"892",codigo:"269101",nombre:"FABRICACI",activo:"1"},
    {id:"893",codigo:"269109",nombre:"FABRICACI",activo:"1"}, {id:"894",codigo:"269200",nombre:"FABRICACI",activo:"1"}, {id:"895",codigo:"269300",nombre:"FABRICACI",activo:"1"},
    {id:"896",codigo:"269400",nombre:"FABRICACI",activo:"1"}, {id:"897",codigo:"269510",nombre:"ELABORACI",activo:"1"}, {id:"898",codigo:"269520",nombre:"FABRICACI",activo:"1"},
    {id:"899",codigo:"269530",nombre:"FABRICACI",activo:"1"}, {id:"900",codigo:"269590",nombre:"FABRICACI",activo:"1"}, {id:"901",codigo:"269600",nombre:"CORTE, TALLADO Y ACABADO DE LA PIEDRA",activo:"1"},
    {id:"902",codigo:"269910",nombre:"FABRICACI",activo:"1"}, {id:"903",codigo:"269990",nombre:"FABRICACI",activo:"1"}, {id:"904",codigo:"271000",nombre:"INDUSTRIAS BASICAS DE HIERRO Y ACERO",activo:"1"},
    {id:"905",codigo:"272010",nombre:"ELABORACI",activo:"1"}, {id:"906",codigo:"272020",nombre:"ELABORACI",activo:"1"}, {id:"907",codigo:"272090",nombre:"FABRICACI",activo:"1"},
    {id:"908",codigo:"273100",nombre:"FUNDICI",activo:"1"}, {id:"909",codigo:"273200",nombre:"FUNDICI",activo:"1"}, {id:"910",codigo:"281100",nombre:"FABRICACI",activo:"1"},
    {id:"911",codigo:"281211",nombre:"FABRICACI",activo:"1"}, {id:"912",codigo:"281219",nombre:"FABRICACI",activo:"1"}, {id:"913",codigo:"281280",nombre:"REPARACI",activo:"1"},
    {id:"914",codigo:"281310",nombre:"FABRICACI",activo:"1"}, {id:"915",codigo:"281380",nombre:"REPARACI",activo:"1"}, {id:"916",codigo:"289100",nombre:"FORJA, PRENSADO, ESTAMPADO Y LAMINADO DE METAL; INCLUYE PULVIMETALURGIA",activo:"1"},
    {id:"917",codigo:"289200",nombre:"TRATAMIENTOS Y REVESTIMIENTOS DE METALES; OBRAS DE INGENIER",activo:"1"}, {id:"918",codigo:"289310",nombre:"FABRICACI",activo:"1"}, {id:"919",codigo:"289320",nombre:"FABRICACI",activo:"1"},
    {id:"920",codigo:"289910",nombre:"FABRICACI",activo:"1"}, {id:"921",codigo:"289990",nombre:"FABRICACI",activo:"1"}, {id:"922",codigo:"291110",nombre:"FABRICACI",activo:"1"},
    {id:"923",codigo:"291180",nombre:"REPARACI",activo:"1"}, {id:"924",codigo:"291210",nombre:"FABRICACI",activo:"1"}, {id:"925",codigo:"291280",nombre:"REPARACI",activo:"1"},
    {id:"926",codigo:"291310",nombre:"FABRICACI",activo:"1"}, {id:"927",codigo:"291380",nombre:"REPARACI",activo:"1"}, {id:"928",codigo:"291410",nombre:"FABRICACI",activo:"1"},
    {id:"929",codigo:"291480",nombre:"REPARACI",activo:"1"}, {id:"930",codigo:"291510",nombre:"FABRICACI",activo:"1"}, {id:"931",codigo:"291580",nombre:"REPARACI",activo:"1"},
    {id:"932",codigo:"291910",nombre:"FABRICACI",activo:"1"}, {id:"933",codigo:"291980",nombre:"REPARACI",activo:"1"}, {id:"934",codigo:"292110",nombre:"FABRICACI",activo:"1"},
    {id:"935",codigo:"292180",nombre:"REPARACI",activo:"1"}, {id:"936",codigo:"292210",nombre:"FABRICACI",activo:"1"}, {id:"937",codigo:"292280",nombre:"REPARACI",activo:"1"},
    {id:"938",codigo:"292310",nombre:"FABRICACI",activo:"1"}, {id:"939",codigo:"292380",nombre:"REPARACI",activo:"1"}, {id:"940",codigo:"292411",nombre:"FABRICACI",activo:"1"},
    {id:"941",codigo:"292412",nombre:"FABRICACI",activo:"1"}, {id:"942",codigo:"292480",nombre:"REPARACI",activo:"1"}, {id:"943",codigo:"292510",nombre:"FABRICACI",activo:"1"},
    {id:"944",codigo:"292580",nombre:"REPARACI",activo:"1"}, {id:"945",codigo:"292610",nombre:"FABRICACI",activo:"1"}, {id:"946",codigo:"292680",nombre:"REPARACI",activo:"1"},
    {id:"947",codigo:"292710",nombre:"FABRICACI",activo:"1"}, {id:"948",codigo:"292780",nombre:"REPARACI",activo:"1"}, {id:"949",codigo:"292910",nombre:"FABRICACI",activo:"1"},
    {id:"950",codigo:"292980",nombre:"REPARACI",activo:"1"}, {id:"951",codigo:"293000",nombre:"FABRICACI",activo:"1"}, {id:"952",codigo:"300010",nombre:"FABRICACI",activo:"1"},
    {id:"953",codigo:"300020",nombre:"FABRICACI",activo:"1"}, {id:"954",codigo:"311010",nombre:"FABRICACI",activo:"1"}, {id:"955",codigo:"311080",nombre:"REPARACI",activo:"1"},
    {id:"956",codigo:"312010",nombre:"FABRICACI",activo:"1"}, {id:"957",codigo:"312080",nombre:"REPARACI",activo:"1"}, {id:"958",codigo:"313000",nombre:"FABRICACI",activo:"1"},
    {id:"959",codigo:"314000",nombre:"FABRICACI",activo:"1"}, {id:"960",codigo:"315010",nombre:"FABRICACI",activo:"1"}, {id:"961",codigo:"315080",nombre:"REPARACI",activo:"1"},
    {id:"962",codigo:"319010",nombre:"FABRICACI",activo:"1"}, {id:"963",codigo:"319080",nombre:"REPARACI",activo:"1"}, {id:"964",codigo:"321010",nombre:"FABRICACI",activo:"1"},
    {id:"965",codigo:"321080",nombre:"REPARACI",activo:"1"}, {id:"966",codigo:"322010",nombre:"FABRICACI",activo:"1"}, {id:"967",codigo:"322080",nombre:"REPARACI",activo:"1"},
    {id:"968",codigo:"323000",nombre:"FABRICACI",activo:"1"}, {id:"969",codigo:"331110",nombre:"FABRICACI",activo:"1"}, {id:"970",codigo:"331120",nombre:"LABORATORIOS DENTALES",activo:"1"},
    {id:"971",codigo:"331180",nombre:"REPARACI",activo:"1"}, {id:"972",codigo:"331210",nombre:"FABRICACI",activo:"1"}, {id:"973",codigo:"331280",nombre:"REPARACI",activo:"1"},
    {id:"974",codigo:"331310",nombre:"FABRICACI",activo:"1"}, {id:"975",codigo:"331380",nombre:"REPARACI",activo:"1"}, {id:"976",codigo:"332010",nombre:"FABRICACI",activo:"1"},
    {id:"977",codigo:"332020",nombre:"FABRICACI",activo:"1"}, {id:"978",codigo:"332080",nombre:"REPARACI",activo:"1"}, {id:"979",codigo:"333000",nombre:"FABRICACI",activo:"1"},
    {id:"980",codigo:"341000",nombre:"FABRICACI",activo:"1"}, {id:"981",codigo:"342000",nombre:"FABRICACI",activo:"1"}, {id:"982",codigo:"343000",nombre:"FABRICACI",activo:"1"},
    {id:"983",codigo:"351110",nombre:"CONSTRUCCI",activo:"1"}, {id:"984",codigo:"351120",nombre:"CONSTRUCCI",activo:"1"}, {id:"985",codigo:"351180",nombre:"REPARACI",activo:"1"},
    {id:"986",codigo:"351210",nombre:"CONSTRUCCI",activo:"1"}, {id:"987",codigo:"351280",nombre:"REPARACI",activo:"1"}, {id:"988",codigo:"352000",nombre:"FABRICACI",activo:"1"},
    {id:"989",codigo:"353010",nombre:"FABRICACI",activo:"1"}, {id:"990",codigo:"353080",nombre:"REPARACI",activo:"1"}, {id:"991",codigo:"359100",nombre:"FABRICACI",activo:"1"},
    {id:"992",codigo:"359200",nombre:"FABRICACI",activo:"1"}, {id:"993",codigo:"359900",nombre:"FABRICACI",activo:"1"}, {id:"994",codigo:"361010",nombre:"FABRICACI",activo:"1"},
    {id:"995",codigo:"361020",nombre:"FABRICACI",activo:"1"}, {id:"996",codigo:"369100",nombre:"FABRICACI",activo:"1"}, {id:"997",codigo:"369200",nombre:"FABRICACI",activo:"1"},
    {id:"998",codigo:"369300",nombre:"FABRICACI",activo:"1"}, {id:"999",codigo:"369400",nombre:"FABRICACI",activo:"1"}, {id:"1000",codigo:"369910",nombre:"FABRICACI",activo:"1"},
    {id:"1001",codigo:"369920",nombre:"FABRICACI",activo:"1"}, {id:"1002",codigo:"369930",nombre:"FABRICACI",activo:"1"}, {id:"1003",codigo:"369990",nombre:"FABRICACI",activo:"1"},
    {id:"1004",codigo:"371000",nombre:"RECICLAMIENTO DE DESPERDICIOS Y DESECHOS MET",activo:"1"}, {id:"1005",codigo:"372010",nombre:"RECICLAMIENTO DE PAPEL",activo:"1"}, {id:"1006",codigo:"372020",nombre:"RECICLAMIENTO DE VIDRIO",activo:"1"},
    {id:"1007",codigo:"372090",nombre:"RECICLAMIENTO DE OTROS DESPERDICIOS Y DESECHOS N.C.P.",activo:"1"}, {id:"1008",codigo:"401011",nombre:"GENERACI",activo:"1"}, {id:"1009",codigo:"401012",nombre:"GENERACI",activo:"1"},
    {id:"1010",codigo:"401013",nombre:"GENERACI",activo:"1"}, {id:"1011",codigo:"401019",nombre:"GENERACI",activo:"1"}, {id:"1012",codigo:"401020",nombre:"TRANSMISI",activo:"1"},
    {id:"1013",codigo:"401030",nombre:"DISTRIBUCI",activo:"1"}, {id:"1014",codigo:"402000",nombre:"FABRICACI",activo:"1"}, {id:"1015",codigo:"403000",nombre:"SUMINISTRO DE VAPOR Y AGUA CALIENTE",activo:"1"},
    {id:"1016",codigo:"410000",nombre:"CAPTACI",activo:"1"}, {id:"1017",codigo:"451010",nombre:"PREPARACI",activo:"1"}, {id:"1018",codigo:"451020",nombre:"SERVICIOS DE DEMOLICI",activo:"1"},
    {id:"1019",codigo:"452010",nombre:"CONSTRUCCI",activo:"1"}, {id:"1020",codigo:"452020",nombre:"OBRAS DE INGENIER",activo:"1"}, {id:"1021",codigo:"453000",nombre:"ACONDICIONAMIENTO DE EDIFICIOS",activo:"1"},
    {id:"1022",codigo:"454000",nombre:"OBRAS MENORES EN CONSTRUCCI",activo:"1"}, {id:"1023",codigo:"455000",nombre:"ALQUILER DE EQUIPO DE CONSTRUCCI",activo:"1"}, {id:"1024",codigo:"501010",nombre:"VENTA AL POR MAYOR DE VEH",activo:"1"},
    {id:"1025",codigo:"501020",nombre:"VENTA O COMPRAVENTA AL POR MENOR DE VEH",activo:"1"}, {id:"1026",codigo:"502010",nombre:"SERVICIO DE LAVADO DE VEH",activo:"1"}, {id:"1027",codigo:"502020",nombre:"SERVICIOS DE REMOLQUE DE VEH",activo:"1"},
    {id:"1028",codigo:"502080",nombre:"MANTENIMIENTO Y REPARACI",activo:"1"}, {id:"1029",codigo:"503000",nombre:"VENTA DE PARTES, PIEZAS Y ACCESORIOS DE VEH",activo:"1"}, {id:"1030",codigo:"504010",nombre:"VENTA DE MOTOCICLETAS",activo:"1"},
    {id:"1031",codigo:"504020",nombre:"VENTA DE PIEZAS Y ACCESORIOS DE MOTOCICLETAS",activo:"1"}, {id:"1032",codigo:"504080",nombre:"REPARACI",activo:"1"}, {id:"1033",codigo:"505000",nombre:"VENTA AL POR MENOR DE COMBUSTIBLE PARA AUTOMOTORES",activo:"1"},
    {id:"1034",codigo:"511010",nombre:"CORRETAJE DE PRODUCTOS AGR",activo:"1"}, {id:"1035",codigo:"511020",nombre:"CORRETAJE DE GANADO (FERIAS DE GANADO)",activo:"1"}, {id:"1036",codigo:"511030",nombre:"OTROS TIPOS DE CORRETAJES O REMATES N.C.P. (NO INCLUYE SERVICIOS DE MARTILLERO)",activo:"1"},
    {id:"1037",codigo:"512110",nombre:"VENTA AL POR MAYOR DE ANIMALES VIVOS",activo:"1"}, {id:"1038",codigo:"512120",nombre:"VENTA AL POR MAYOR DE PRODUCTOS PECUARIOS (LANAS, PIELES, CUEROS SIN PROCESAR); EXCEPTO ALIMENTOS",activo:"1"}, {id:"1039",codigo:"512130",nombre:"VENTA AL POR MAYOR DE MATERIAS PRIMAS AGR",activo:"1"},
    {id:"1040",codigo:"512210",nombre:"MAYORISTA DE FRUTAS Y VERDURAS",activo:"1"}, {id:"1041",codigo:"512220",nombre:"MAYORISTAS DE CARNES",activo:"1"}, {id:"1042",codigo:"512230",nombre:"MAYORISTAS DE PRODUCTOS DEL MAR (PESCADO, MARISCOS, ALGAS)",activo:"1"},
    {id:"1043",codigo:"512240",nombre:"MAYORISTAS DE VINOS Y BEBIDAS ALCOH",activo:"1"}, {id:"1044",codigo:"512250",nombre:"VENTA AL POR MAYOR DE CONFITES",activo:"1"}, {id:"1045",codigo:"512260",nombre:"VENTA AL POR MAYOR DE TABACO Y PRODUCTOS DERIVADOS",activo:"1"},
    {id:"1046",codigo:"512290",nombre:"VENTA AL POR MAYOR DE HUEVOS, LECHE, ABARROTES, Y OTROS ALIMENTOS N.C.P.",activo:"1"}, {id:"1047",codigo:"513100",nombre:"VENTA AL POR MAYOR DE PRODUCTOS TEXTILES, PRENDAS DE VESTIR Y CALZADO",activo:"1"}, {id:"1048",codigo:"513910",nombre:"VENTA AL POR MAYOR DE MUEBLES",activo:"1"},
    {id:"1049",codigo:"513920",nombre:"VENTA AL POR MAYOR DE ART",activo:"1"}, {id:"1050",codigo:"513930",nombre:"VENTA AL POR MAYOR DE ART",activo:"1"}, {id:"1051",codigo:"513940",nombre:"VENTA AL POR MAYOR DE PAPEL Y CART",activo:"1"},
    {id:"1052",codigo:"513951",nombre:"VENTA AL POR MAYOR DE LIBROS",activo:"1"}, {id:"1053",codigo:"513952",nombre:"VENTA AL POR MAYOR DE REVISTAS Y PERI",activo:"1"}, {id:"1054",codigo:"513960",nombre:"VENTA AL POR MAYOR DE PRODUCTOS FARMACEUTICOS",activo:"1"},
    {id:"1055",codigo:"513970",nombre:"VENTA AL POR MAYOR DE INSTRUMENTOS CIENT",activo:"1"}, {id:"1056",codigo:"513990",nombre:"VENTA AL POR MAYOR DE OTROS ENSERES DOM",activo:"1"}, {id:"1057",codigo:"514110",nombre:"VENTA AL POR MAYOR DE COMBUSTIBLES L",activo:"1"},
    {id:"1058",codigo:"514120",nombre:"VENTA AL POR MAYOR DE COMBUSTIBLES S",activo:"1"}, {id:"1059",codigo:"514130",nombre:"VENTA AL POR MAYOR DE COMBUSTIBLES GASEOSOS",activo:"1"}, {id:"1060",codigo:"514140",nombre:"VENTA AL POR MAYOR DE PRODUCTOS CONEXOS A LOS COMBUSTIBLES",activo:"1"},
    {id:"1061",codigo:"514200",nombre:"VENTA AL POR MAYOR DE METALES Y MINERALES METAL",activo:"1"}, {id:"1062",codigo:"514310",nombre:"VENTA AL POR MAYOR DE MADERA NO TRABAJADA Y PRODUCTOS RESULTANTES DE SU ELABORACI",activo:"1"}, {id:"1063",codigo:"514320",nombre:"VENTA AL POR MAYOR DE MATERIALES DE CONSTRUCCI",activo:"1"},
    {id:"1064",codigo:"514910",nombre:"VENTA AL POR MAYOR DE PRODUCTOS QU",activo:"1"}, {id:"1065",codigo:"514920",nombre:"VENTA AL POR MAYOR DE DESECHOS MET",activo:"1"}, {id:"1066",codigo:"514930",nombre:"VENTA AL POR MAYOR DE INSUMOS VETERINARIOS",activo:"1"},
    {id:"1067",codigo:"514990",nombre:"VENTA AL POR MAYOR DE OTROS PRODUCTOS INTERMEDIOS, DESPERDICIOS Y DESECHOS N.C.P.",activo:"1"}, {id:"1068",codigo:"515001",nombre:"VENTA AL POR MAYOR DE MAQUINARIA AGR",activo:"1"}, {id:"1069",codigo:"515002",nombre:"VENTA AL POR MAYOR DE MAQUINARIA METAL",activo:"1"},
    {id:"1070",codigo:"515003",nombre:"VENTA AL POR MAYOR DE MAQUINARIA PARA LA MINER",activo:"1"}, {id:"1071",codigo:"515004",nombre:"VENTA AL POR MAYOR DE MAQUINARIA PARA LA CONSTRUCCI",activo:"1"}, {id:"1072",codigo:"515005",nombre:"VENTA AL POR MAYOR DE MAQUINARIA PARA LA ELABORACI",activo:"1"},
    {id:"1073",codigo:"515006",nombre:"VENTA AL POR MAYOR DE MAQUINARIA PARA TEXTILES Y CUEROS",activo:"1"}, {id:"1074",codigo:"515007",nombre:"VENTA AL POR MAYOR DE M",activo:"1"}, {id:"1075",codigo:"515008",nombre:"VENTA AL POR MAYOR DE MAQUINARIA Y EQUIPO DE TRANSPORTE EXCEPTO VEH",activo:"1"},
    {id:"1076",codigo:"515009",nombre:"VENTA AL POR MAYOR DE MAQUINARIA, HERRAMIENTAS, EQUIPO Y MATERIALES N.C.P.",activo:"1"}, {id:"1077",codigo:"519000",nombre:"VENTA AL POR MAYOR DE OTROS PRODUCTOS N.C.P.",activo:"1"}, {id:"1078",codigo:"521111",nombre:"GRANDES ESTABLECIMIENTOS (VENTA DE ALIMENTOS); HIPERMERCADOS",activo:"1"},
    {id:"1079",codigo:"521112",nombre:"ALMACENES MEDIANOS (VENTA DE ALIMENTOS); SUPERMERCADOS, MINIMARKETS",activo:"1"}, {id:"1080",codigo:"521120",nombre:"ALMACENES PEQUENOS (VENTA DE ALIMENTOS)",activo:"1"}, {id:"1081",codigo:"521200",nombre:"GRANDES TIENDAS - PRODUCTOS DE FERRETER",activo:"1"},
    {id:"1082",codigo:"521300",nombre:"GRANDES TIENDAS - VESTUARIO Y PRODUCTOS PARA EL HOGAR",activo:"1"}, {id:"1083",codigo:"521900",nombre:"VENTA AL POR MENOR DE OTROS PRODUCTOS EN PEQUENOS ALMACENES NO ESPECIALIZADOS",activo:"1"}, {id:"1084",codigo:"522010",nombre:"VENTA AL POR MENOR DE BEBIDAS Y LICORES (BOTILLER",activo:"1"},
    {id:"1085",codigo:"522020",nombre:"VENTA AL POR MENOR DE CARNES (ROJAS, BLANCAS, OTRAS) PRODUCTOS C",activo:"1"}, {id:"1086",codigo:"522030",nombre:"COMERCIO AL POR MENOR DE VERDURAS Y FRUTAS (VERDULER",activo:"1"}, {id:"1087",codigo:"522040",nombre:"VENTA AL POR MENOR DE PESCADOS, MARISCOS Y PRODUCTOS CONEXOS",activo:"1"},
    {id:"1088",codigo:"522050",nombre:"VENTA AL POR MENOR DE PRODUCTOS DE PANADER",activo:"1"}, {id:"1089",codigo:"522060",nombre:"VENTA AL POR MENOR DE ALIMENTOS PARA MASCOTAS Y ANIMALES EN GENERAL",activo:"1"}, {id:"1090",codigo:"522070",nombre:"VENTA AL POR MENOR DE AVES Y HUEVOS",activo:"1"},
    {id:"1091",codigo:"522090",nombre:"VENTA AL POR MENOR DE PRODUCTOS DE CONFITER",activo:"1"}, {id:"1092",codigo:"523111",nombre:"FARMACIAS - PERTENECIENTES A CADENA DE ESTABLECIMIENTOS",activo:"1"}, {id:"1093",codigo:"523112",nombre:"FARMACIAS INDEPENDIENTES",activo:"1"},
    {id:"1094",codigo:"523120",nombre:"VENTA AL POR MENOR DE PRODUCTOS MEDICINALES",activo:"1"}, {id:"1095",codigo:"523130",nombre:"VENTA AL POR MENOR DE ART",activo:"1"}, {id:"1096",codigo:"523140",nombre:"VENTA AL POR MENOR DE ART",activo:"1"},
    {id:"1097",codigo:"523210",nombre:"VENTA AL POR MENOR DE CALZADO",activo:"1"}, {id:"1098",codigo:"523220",nombre:"VENTA AL POR MENOR DE PRENDAS DE VESTIR EN GENERAL, INCLUYE ACCESORIOS",activo:"1"}, {id:"1099",codigo:"523230",nombre:"VENTA AL POR MENOR DE LANAS, HILOS Y SIMILARES",activo:"1"},
    {id:"1100",codigo:"523240",nombre:"VENTA AL POR MENOR DE MALETER",activo:"1"}, {id:"1101",codigo:"523250",nombre:"VENTA AL POR MENOR DE ROPA INTERIOR Y PRENDAS DE USO PERSONAL",activo:"1"}, {id:"1102",codigo:"523290",nombre:"COMERCIO AL POR MENOR DE TEXTILES PARA EL HOGAR Y OTROS PRODUCTOS TEXTILES N.C.P.",activo:"1"},
    {id:"1103",codigo:"523310",nombre:"VENTA AL POR MENOR DE ART",activo:"1"}, {id:"1104",codigo:"523320",nombre:"VENTA AL POR MENOR DE CRISTALES, LOZAS, PORCELANA, MENAJE (CRISTALER",activo:"1"}, {id:"1105",codigo:"523330",nombre:"VENTA AL POR MENOR DE MUEBLES; INCLUYE COLCHONES",activo:"1"},
    {id:"1106",codigo:"523340",nombre:"VENTA AL POR MENOR DE INSTRUMENTOS MUSICALES (CASA DE M",activo:"1"}, {id:"1107",codigo:"523350",nombre:"VENTA AL POR MENOR DE DISCOS, CASSETTES, DVD Y VIDEOS",activo:"1"}, {id:"1108",codigo:"523360",nombre:"VENTA AL POR MENOR DE L",activo:"1"},
    {id:"1109",codigo:"523390",nombre:"VENTA AL POR MENOR DE APARATOS, ART",activo:"1"}, {id:"1110",codigo:"523410",nombre:"VENTA AL POR MENOR DE ART",activo:"1"}, {id:"1111",codigo:"523420",nombre:"VENTA AL POR MENOR DE PINTURAS, BARNICES Y LACAS",activo:"1"},
    {id:"1112",codigo:"523430",nombre:"COMERCIO AL POR MENOR DE PRODUCTOS DE VIDRIO",activo:"1"}, {id:"1113",codigo:"523911",nombre:"COMERCIO AL POR MENOR DE ART",activo:"1"}, {id:"1114",codigo:"523912",nombre:"COMERCIO AL POR MENOR DE ART",activo:"1"},
    {id:"1115",codigo:"523921",nombre:"COMERCIO POR MENOR DE JUGUETES",activo:"1"}, {id:"1116",codigo:"523922",nombre:"COMERCIO AL POR MENOR DE LIBROS",activo:"1"}, {id:"1117",codigo:"523923",nombre:"COMERCIO AL POR MENOR DE REVISTAS Y DIARIOS",activo:"1"},
    {id:"1118",codigo:"523924",nombre:"COMERCIO DE ART",activo:"1"}, {id:"1119",codigo:"523930",nombre:"COMERCIO AL POR MENOR DE COMPUTADORAS, SOFTWARES Y SUMINISTROS",activo:"1"}, {id:"1120",codigo:"523941",nombre:"COMERCIO AL POR MENOR DE ARMER",activo:"1"},
    {id:"1121",codigo:"523942",nombre:"COMERCIO AL POR MENOR DE BICICLETAS Y SUS REPUESTOS",activo:"1"}, {id:"1122",codigo:"523943",nombre:"COMERCIO AL POR MENOR DE ART",activo:"1"}, {id:"1123",codigo:"523950",nombre:"COMERCIO AL POR MENOR DE ART",activo:"1"},
    {id:"1124",codigo:"523961",nombre:"VENTA AL POR MENOR DE GAS LICUADO EN BOMBONAS",activo:"1"}, {id:"1125",codigo:"523969",nombre:"VENTA AL POR MENOR DE CARB",activo:"1"}, {id:"1126",codigo:"523991",nombre:"COMERCIO AL POR MENOR DE ART",activo:"1"},
    {id:"1127",codigo:"523992",nombre:"VENTA AL POR MENOR DE FLORES, PLANTAS, ",activo:"1"}, {id:"1128",codigo:"523993",nombre:"VENTA AL POR MENOR DE MASCOTAS Y ACCESORIOS",activo:"1"}, {id:"1129",codigo:"523999",nombre:"VENTAS AL POR MENOR DE OTROS PRODUCTOS EN ALMACENES ESPECIALIZADOS N.C.P.",activo:"1"},
    {id:"1130",codigo:"524010",nombre:"COMERCIO AL POR MENOR DE ANTIGUEDADES",activo:"1"}, {id:"1131",codigo:"524020",nombre:"COMERCIO AL POR MENOR DE ROPA USADA",activo:"1"}, {id:"1132",codigo:"524090",nombre:"COMERCIO AL POR MENOR DE ART",activo:"1"},
    {id:"1133",codigo:"525110",nombre:"VENTA AL POR MENOR EN EMPRESAS DE VENTA A DISTANCIA POR CORREO",activo:"1"}, {id:"1134",codigo:"525120",nombre:"VENTA AL POR MENOR EN EMPRESAS DE VENTA A DISTANCIA V",activo:"1"}, {id:"1135",codigo:"525130",nombre:"VENTA AL POR MENOR EN EMPRESAS DE VENTA A DISTANCIA V",activo:"1"},
    {id:"1136",codigo:"525200",nombre:"VENTA AL POR MENOR EN PUESTOS DE VENTA Y MERCADOS",activo:"1"}, {id:"1137",codigo:"525911",nombre:"VENTA AL POR MENOR REALIZADA POR INDEPENDIENTES EN TRANSPORTE P",activo:"1"}, {id:"1138",codigo:"525919",nombre:"VENTA AL POR MENOR NO REALIZADA EN ALMACENES DE PRODUCTOS PROPIOS N.C.P.",activo:"1"},
    {id:"1139",codigo:"525920",nombre:"M",activo:"1"}, {id:"1140",codigo:"525930",nombre:"VENTA AL POR MENOR A CAMBIO DE UNA RETRIBUCI",activo:"1"}, {id:"1141",codigo:"525990",nombre:"OTROS TIPOS DE VENTA AL POR MENOR NO REALIZADA EN ALMACENES N.C.P.",activo:"1"},
    {id:"1142",codigo:"526010",nombre:"REPARACI",activo:"1"}, {id:"1143",codigo:"526020",nombre:"REPARACIONES EL",activo:"1"}, {id:"1144",codigo:"526030",nombre:"REPARACI",activo:"1"},
    {id:"1145",codigo:"526090",nombre:"OTRAS REPARACIONES DE EFECTOS PERSONALES Y ENSERES DOM",activo:"1"}, {id:"1146",codigo:"551010",nombre:"HOTELES",activo:"1"}, {id:"1147",codigo:"551020",nombre:"MOTELES",activo:"1"},
    {id:"1148",codigo:"551030",nombre:"RESIDENCIALES",activo:"1"}, {id:"1149",codigo:"551090",nombre:"OTROS TIPOS DE HOSPEDAJE TEMPORAL COMO CAMPING, ALBERGUES, POSADAS, REFUGIOS Y SIMILARES",activo:"1"}, {id:"1150",codigo:"552010",nombre:"RESTAURANTES",activo:"1"},
    {id:"1151",codigo:"552020",nombre:"ESTABLECIMIENTOS DE COMIDA R",activo:"1"}, {id:"1152",codigo:"552030",nombre:"CASINOS Y CLUBES SOCIALES",activo:"1"}, {id:"1153",codigo:"552040",nombre:"SERVICIOS DE COMIDA PREPARADA EN FORMA INDUSTRIAL",activo:"1"},
    {id:"1154",codigo:"552050",nombre:"SERVICIOS DE BANQUETES, BODAS Y OTRAS CELEBRACIONES",activo:"1"}, {id:"1155",codigo:"552090",nombre:"SERVICIOS DE OTROS ESTABLECIMIENTOS QUE EXPENDEN COMIDAS Y BEBIDAS",activo:"1"}, {id:"1156",codigo:"601001",nombre:"TRANSPORTE INTERURBANO DE PASAJEROS POR FERROCARRILES",activo:"1"},
    {id:"1157",codigo:"601002",nombre:"TRANSPORTE DE CARGA POR FERROCARRILES",activo:"1"}, {id:"1158",codigo:"602110",nombre:"TRANSPORTE URBANO DE PASAJEROS V",activo:"1"}, {id:"1159",codigo:"602120",nombre:"TRANSPORTE URBANO DE PASAJEROS V",activo:"1"},
    {id:"1160",codigo:"602130",nombre:"TRANSPORTE INTERURBANO DE PASAJEROS V",activo:"1"}, {id:"1161",codigo:"602140",nombre:"TRANSPORTE URBANO DE PASAJEROS V",activo:"1"}, {id:"1162",codigo:"602150",nombre:"SERVICIOS DE TRANSPORTE ESCOLAR",activo:"1"},
    {id:"1163",codigo:"602160",nombre:"SERVICIOS DE TRANSPORTE DE TRABAJADORES",activo:"1"}, {id:"1164",codigo:"602190",nombre:"OTROS TIPOS DE TRANSPORTE REGULAR DE PASAJEROS POR V",activo:"1"}, {id:"1165",codigo:"602210",nombre:"TRANSPORTES POR TAXIS LIBRES Y RADIOTAXIS",activo:"1"},
    {id:"1166",codigo:"602220",nombre:"SERVICIOS DE TRANSPORTE A TURISTAS",activo:"1"}, {id:"1167",codigo:"602230",nombre:"TRANSPORTE DE PASAJEROS EN VEH",activo:"1"}, {id:"1168",codigo:"602290",nombre:"OTROS TIPOS DE TRANSPORTE NO REGULAR DE PASAJEROS N.C.P.",activo:"1"},
    {id:"1169",codigo:"602300",nombre:"TRANSPORTE DE CARGA POR CARRETERA",activo:"1"}, {id:"1170",codigo:"603000",nombre:"TRANSPORTE POR TUBER",activo:"1"}, {id:"1171",codigo:"611001",nombre:"TRANSPORTE MAR",activo:"1"},
    {id:"1172",codigo:"611002",nombre:"TRANSPORTE MAR",activo:"1"}, {id:"1173",codigo:"612001",nombre:"TRANSPORTE DE PASAJEROS POR V",activo:"1"}, {id:"1174",codigo:"612002",nombre:"TRANSPORTE DE CARGA POR V",activo:"1"},
    {id:"1175",codigo:"621010",nombre:"TRANSPORTE REGULAR POR V",activo:"1"}, {id:"1176",codigo:"621020",nombre:"TRANSPORTE REGULAR POR V",activo:"1"}, {id:"1177",codigo:"622001",nombre:"TRANSPORTE NO REGULAR POR V",activo:"1"},
    {id:"1178",codigo:"622002",nombre:"TRANSPORTE NO REGULAR POR V",activo:"1"}, {id:"1179",codigo:"630100",nombre:"MANIPULACI",activo:"1"}, {id:"1180",codigo:"630200",nombre:"SERVICIOS DE ALMACENAMIENTO Y DEP",activo:"1"},
    {id:"1181",codigo:"630310",nombre:"TERMINALES TERRESTRES DE PASAJEROS",activo:"1"}, {id:"1182",codigo:"630320",nombre:"ESTACIONAMIENTO DE VEH",activo:"1"}, {id:"1183",codigo:"630330",nombre:"PUERTOS Y AEROPUERTOS",activo:"1"},
    {id:"1184",codigo:"630340",nombre:"SERVICIOS PRESTADOS POR CONCESIONARIOS DE CARRETERAS",activo:"1"}, {id:"1185",codigo:"630390",nombre:"OTRAS ACTIVIDADES CONEXAS AL TRANSPORTE N.C.P.",activo:"1"}, {id:"1186",codigo:"630400",nombre:"AGENCIAS Y ORGANIZADORES DE VIAJES; ACTIVIDADES DE ASISTENCIA A TURISTAS N.C.P.",activo:"1"},
    {id:"1187",codigo:"630910",nombre:"AGENCIAS DE ADUANAS",activo:"1"}, {id:"1188",codigo:"630920",nombre:"AGENCIAS DE TRANSPORTE",activo:"1"}, {id:"1189",codigo:"641100",nombre:"ACTIVIDADES POSTALES NACIONALES",activo:"1"},
    {id:"1190",codigo:"641200",nombre:"ACTIVIDADES DE CORREO DISTINTAS DE LAS ACTIVIDADES POSTALES NACIONALES",activo:"1"}, {id:"1191",codigo:"642010",nombre:"SERVICIOS DE TELEFON",activo:"1"}, {id:"1192",codigo:"642020",nombre:"SERVICIOS DE TELEFON",activo:"1"},
    {id:"1193",codigo:"642030",nombre:"PORTADORES TELEF",activo:"1"}, {id:"1194",codigo:"642040",nombre:"SERVICIOS DE TELEVISI",activo:"1"}, {id:"1195",codigo:"642050",nombre:"PROVEEDORES DE INTERNET",activo:"1"},
    {id:"1196",codigo:"642061",nombre:"CENTROS DE LLAMADOS; INCLUYE ENV",activo:"1"}, {id:"1197",codigo:"642062",nombre:"CENTROS DE ACCESO A INTERNET",activo:"1"}, {id:"1198",codigo:"642090",nombre:"OTROS SERVICIOS DE TELECOMUNICACIONES N.C.P.",activo:"1"},
    {id:"1199",codigo:"651100",nombre:"BANCA CENTRAL",activo:"1"}, {id:"1200",codigo:"651910",nombre:"BANCOS",activo:"1"}, {id:"1201",codigo:"651920",nombre:"FINANCIERAS",activo:"1"},
    {id:"1202",codigo:"651990",nombre:"OTROS TIPOS DE INTERMEDIACI",activo:"1"}, {id:"1203",codigo:"659110",nombre:"LEASING FINANCIERO",activo:"1"}, {id:"1204",codigo:"659120",nombre:"LEASING HABITACIONAL",activo:"1"},
    {id:"1205",codigo:"659210",nombre:"FINANCIAMIENTO DEL FOMENTO DE LA PRODUCCI",activo:"1"}, {id:"1206",codigo:"659220",nombre:"ACTIVIDADES DE CR",activo:"1"}, {id:"1207",codigo:"659231",nombre:"FACTORING",activo:"1"},
    {id:"1208",codigo:"659232",nombre:"SECURITIZADORAS",activo:"1"}, {id:"1209",codigo:"659290",nombre:"OTROS INSTITUCIONES FINANCIERAS N.C.P.",activo:"1"}, {id:"1210",codigo:"659911",nombre:"ADMINISTRADORAS DE FONDOS DE INVERSI",activo:"1"},
    {id:"1211",codigo:"659912",nombre:"ADMINISTRADORAS DE FONDOS MUTUOS",activo:"1"}, {id:"1212",codigo:"659913",nombre:"ADMINISTRADORAS DE FICES (FONDOS DE INVERSI",activo:"1"}, {id:"1213",codigo:"659914",nombre:"ADMINISTRADORAS DE FONDOS PARA LA VIVIENDA",activo:"1"},
    {id:"1214",codigo:"659915",nombre:"ADMINISTRADORAS DE FONDOS PARA OTROS FINES YO GENERALES",activo:"1"}, {id:"1215",codigo:"659920",nombre:"SOCIEDADES DE INVERSI",activo:"1"}, {id:"1216",codigo:"660101",nombre:"PLANES DE SEGURO DE VIDA",activo:"1"},
    {id:"1217",codigo:"660102",nombre:"PLANES DE REASEGUROS DE VIDA",activo:"1"}, {id:"1218",codigo:"660200",nombre:"ADMINISTRADORAS DE FONDOS DE PENSIONES (AFP)",activo:"1"}, {id:"1219",codigo:"660301",nombre:"PLANES DE SEGUROS GENERALES",activo:"1"},
    {id:"1220",codigo:"660302",nombre:"PLANES DE REASEGUROS GENERALES",activo:"1"}, {id:"1221",codigo:"660400",nombre:"ISAPRES",activo:"1"}, {id:"1222",codigo:"671100",nombre:"ADMINISTRACI",activo:"1"},
    {id:"1223",codigo:"671210",nombre:"CORREDORES DE BOLSA",activo:"1"}, {id:"1224",codigo:"671220",nombre:"AGENTES DE VALORES",activo:"1"}, {id:"1225",codigo:"671290",nombre:"OTROS SERVICIOS DE CORRETAJE",activo:"1"},
    {id:"1226",codigo:"671910",nombre:"C",activo:"1"}, {id:"1227",codigo:"671921",nombre:"ADMINISTRADORA DE TARJETAS DE CR",activo:"1"}, {id:"1228",codigo:"671929",nombre:"EMPRESAS DE ASESOR",activo:"1"},
    {id:"1229",codigo:"671930",nombre:"CLASIFICADORES DE RIESGOS",activo:"1"}, {id:"1230",codigo:"671940",nombre:"CASAS DE CAMBIO Y OPERADORES DE DIVISA",activo:"1"}, {id:"1231",codigo:"671990",nombre:"OTRAS ACTIVIDADES AUXILIARES DE LA INTERMEDIACI",activo:"1"},
    {id:"1232",codigo:"672010",nombre:"CORREDORES DE SEGUROS",activo:"1"}, {id:"1233",codigo:"672020",nombre:"AGENTES Y LIQUIDADORES DE SEGUROS",activo:"1"}, {id:"1234",codigo:"672090",nombre:"OTRAS ACTIVIDADES AUXILIARES DE LA FINANCIACI",activo:"1"},
    {id:"1235",codigo:"701001",nombre:"ARRIENDO DE INMUEBLES AMOBLADOS O CON EQUIPOS Y MAQUINARIAS",activo:"1"}, {id:"1236",codigo:"701009",nombre:"COMPRA, VENTA Y ALQUILER (EXCEPTO AMOBLADOS) DE INMUEBLES PROPIOS O ARRENDADOS",activo:"1"}, {id:"1237",codigo:"702000",nombre:"CORREDORES DE PROPIEDADES",activo:"1"},
    {id:"1238",codigo:"711101",nombre:"ALQUILER DE AUTOS Y CAMIONETAS SIN CHOFER",activo:"1"}, {id:"1239",codigo:"711102",nombre:"ALQUILER DE OTROS EQUIPOS DE TRANSPORTE POR V",activo:"1"}, {id:"1240",codigo:"711200",nombre:"ALQUILER DE TRANSPORTE POR V",activo:"1"},
    {id:"1241",codigo:"711300",nombre:"ALQUILER DE EQUIPO DE TRANSPORTE POR V",activo:"1"}, {id:"1242",codigo:"712100",nombre:"ALQUILER DE MAQUINARIA Y EQUIPO AGROPECUARIO",activo:"1"}, {id:"1243",codigo:"712200",nombre:"ALQUILER DE MAQUINARIA Y EQUIPO DE CONSTRUCCI",activo:"1"},
    {id:"1244",codigo:"712300",nombre:"ALQUILER DE MAQUINARIA Y EQUIPO DE OFICINA (SIN OPERARIOS NI SERVICIO ADMINISTRATIVO)",activo:"1"}, {id:"1245",codigo:"712900",nombre:"ALQUILER DE OTROS TIPOS DE MAQUINARIAS Y EQUIPOS N.C.P.",activo:"1"}, {id:"1246",codigo:"713010",nombre:"ALQUILER DE BICICLETAS Y ART",activo:"1"},
    {id:"1247",codigo:"713020",nombre:"ARRIENDO DE VIDEOS, JUEGOS DE VIDEO, Y EQUIPOS REPRODUCTORES DE VIDEO, M",activo:"1"}, {id:"1248",codigo:"713030",nombre:"ALQUILER DE MOBILIARIO PARA EVENTOS (SILLAS, MESAS, MESONES, VAJILLAS, TOLDOS Y RELACIONADOS)",activo:"1"}, {id:"1249",codigo:"713090",nombre:"ALQUILER DE OTROS EFECTOS PERSONALES Y ENSERES DOM",activo:"1"},
    {id:"1250",codigo:"722000",nombre:"ASESORES Y CONSULTORES EN INFORM",activo:"1"}, {id:"1251",codigo:"724000",nombre:"PROCESAMIENTO DE DATOS Y ACTIVIDADES RELACIONADAS CON BASES DE DATOS",activo:"1"}, {id:"1252",codigo:"726000",nombre:"EMPRESAS DE SERVICIOS INTEGRALES DE INFORM",activo:"1"},
    {id:"1253",codigo:"725000",nombre:"MANTENIMIENTO Y REPARACI",activo:"1"}, {id:"1254",codigo:"731000",nombre:"INVESTIGACIONES Y DESARROLLO EXPERIMENTAL EN EL CAMPO DE LAS CIENCIAS NATURALES Y LA INGENIER",activo:"1"}, {id:"1255",codigo:"732000",nombre:"INVESTIGACIONES Y DESARROLLO EXPERIMENTAL EN EL CAMPO DE LAS CIENCIAS SOCIALES Y LAS HUMANIDADES",activo:"1"},
    {id:"1256",codigo:"741110",nombre:"SERVICIOS JUR",activo:"1"}, {id:"1257",codigo:"741120",nombre:"SERVICIO NOTARIAL",activo:"1"}, {id:"1258",codigo:"741130",nombre:"CONSERVADOR DE BIENES RAICES",activo:"1"},
    {id:"1259",codigo:"741140",nombre:"RECEPTORES JUDICIALES",activo:"1"}, {id:"1260",codigo:"741190",nombre:"ARBITRAJES, S",activo:"1"}, {id:"1261",codigo:"741200",nombre:"ACTIVIDADES DE CONTABILIDAD, TENEDUR",activo:"1"},
    {id:"1262",codigo:"741300",nombre:"INVESTIGACI",activo:"1"}, {id:"1263",codigo:"741400",nombre:"ACTIVIDADES DE ASESORAMIENTO EMPRESARIAL Y EN MATERIA DE GESTI",activo:"1"}, {id:"1264",codigo:"742110",nombre:"SERVICIOS DE ARQUITECTURA Y T",activo:"1"},
    {id:"1265",codigo:"742121",nombre:"EMPRESAS DE SERVICIOS GEOL",activo:"1"}, {id:"1266",codigo:"742122",nombre:"SERVICIOS PROFESIONALES EN GEOLOG",activo:"1"}, {id:"1267",codigo:"742131",nombre:"EMPRESAS DE SERVICIOS DE TOPOGRAF",activo:"1"},
    {id:"1268",codigo:"742132",nombre:"SERVICIOS PROFESIONALES DE TOPOGRAF",activo:"1"}, {id:"1269",codigo:"742141",nombre:"SERVICIOS DE INGENIER",activo:"1"}, {id:"1270",codigo:"742142",nombre:"SERVICIOS DE INGENIER",activo:"1"},
    {id:"1271",codigo:"742190",nombre:"OTROS SERVICIOS DESARROLLADOS POR PROFESIONALES",activo:"1"}, {id:"1272",codigo:"742210",nombre:"SERVICIO DE REVISI",activo:"1"}, {id:"1273",codigo:"742290",nombre:"OTROS SERVICIOS DE ENSAYOS Y ANALISIS T",activo:"1"},
    {id:"1274",codigo:"743001",nombre:"EMPRESAS DE PUBLICIDAD",activo:"1"}, {id:"1275",codigo:"743002",nombre:"SERVICIOS PERSONALES EN PUBLICIDAD",activo:"1"}, {id:"1276",codigo:"749110",nombre:"SERVICIOS SUMINISTRO DE PERSONAL; EMPRESAS SERVICIOS TRANSITORIOS",activo:"1"},
    {id:"1277",codigo:"749190",nombre:"SERVICIOS DE RECLUTAMIENTO DE PERSONAL",activo:"1"}, {id:"1278",codigo:"749210",nombre:"ACTIVIDADES DE INVESTIGACI",activo:"1"}, {id:"1279",codigo:"749221",nombre:"SERVICIOS INTEGRALES DE SEGURIDAD",activo:"1"},
    {id:"1280",codigo:"749222",nombre:"TRANSPORTE DE VALORES",activo:"1"}, {id:"1281",codigo:"749229",nombre:"SERVICIOS PERSONALES RELACIONADOS CON SEGURIDAD",activo:"1"}, {id:"1282",codigo:"749310",nombre:"EMPRESAS DE LIMPIEZA DE EDIFICIOS RESIDENCIALES Y NO RESIDENCIALES",activo:"1"},
    {id:"1283",codigo:"749320",nombre:"DESRATIZACI",activo:"1"}, {id:"1284",codigo:"749401",nombre:"SERVICIOS DE REVELADO, IMPRESI",activo:"1"}, {id:"1285",codigo:"749402",nombre:"ACTIVIDADES DE FOTOGRAF",activo:"1"},
    {id:"1286",codigo:"749409",nombre:"SERVICIOS PERSONALES DE FOTOGRAF",activo:"1"}, {id:"1287",codigo:"749500",nombre:"SERVICIOS DE ENVASADO Y EMPAQUE",activo:"1"}, {id:"1288",codigo:"749911",nombre:"SERVICIOS DE COBRANZA DE CUENTAS",activo:"1"},
    {id:"1289",codigo:"749912",nombre:"EVALUACI",activo:"1"}, {id:"1290",codigo:"749913",nombre:"ASESOR",activo:"1"}, {id:"1291",codigo:"749921",nombre:"DISENADORES DE VESTUARIO",activo:"1"},
    {id:"1292",codigo:"749922",nombre:"DISENADORES DE INTERIORES",activo:"1"}, {id:"1293",codigo:"749929",nombre:"OTROS DISENADORES N.C.P.",activo:"1"}, {id:"1294",codigo:"749931",nombre:"EMPRESAS DE TAQUIGRAF",activo:"1"},
    {id:"1295",codigo:"749932",nombre:"SERVICIOS PERSONALES DE TRADUCCI",activo:"1"}, {id:"1296",codigo:"749933",nombre:"EMPRESAS DE TRADUCCI",activo:"1"}, {id:"1297",codigo:"749934",nombre:"SERVICIOS DE FOTOCOPIAS",activo:"1"},
    {id:"1298",codigo:"749940",nombre:"AGENCIAS DE CONTRATACI",activo:"1"}, {id:"1299",codigo:"749950",nombre:"ACTIVIDADES DE SUBASTA (MARTILLEROS)",activo:"1"}, {id:"1300",codigo:"749961",nombre:"GALER",activo:"1"},
    {id:"1301",codigo:"749962",nombre:"FERIAS DE EXPOSICIONES CON FINES EMPRESARIALES",activo:"1"}, {id:"1302",codigo:"749970",nombre:"SERVICIOS DE CONTESTACI",activo:"1"}, {id:"1303",codigo:"749990",nombre:"OTRAS ACTIVIDADES EMPRESARIALES N.C.P.",activo:"1"},
    {id:"1304",codigo:"751110",nombre:"GOBIERNO CENTRAL",activo:"1"}, {id:"1305",codigo:"751120",nombre:"MUNICIPALIDADES",activo:"1"}, {id:"1306",codigo:"751200",nombre:"ACTIVIDADES DEL PODER JUDICIAL",activo:"1"},
    {id:"1307",codigo:"751300",nombre:"ACTIVIDADES DEL PODER LEGISLATIVO",activo:"1"}, {id:"1308",codigo:"752100",nombre:"RELACIONES EXTERIORES",activo:"1"}, {id:"1309",codigo:"752200",nombre:"ACTIVIDADES DE DEFENSA",activo:"1"},
    {id:"1310",codigo:"752300",nombre:"ACTIVIDADES DE MANTENIMIENTO DEL ORDEN P",activo:"1"}, {id:"1311",codigo:"753010",nombre:"ACTIVIDADES DE PLANES DE SEGURIDAD SOCIAL DE AFILIACI",activo:"1"}, {id:"1312",codigo:"753020",nombre:"CAJAS DE COMPENSACI",activo:"1"},
    {id:"1313",codigo:"753090",nombre:"OTRAS ACTIVIDADES DE PLANES DE SEGURIDAD SOCIAL DE AFILIACI",activo:"1"}, {id:"1314",codigo:"801010",nombre:"ESTABLECIMIENTOS DE ENSE",activo:"1"}, {id:"1315",codigo:"801020",nombre:"ESTABLECIMIENTOS DE ENSE",activo:"1"},
    {id:"1316",codigo:"802100",nombre:"ESTABLECIMIENTOS DE ENSE",activo:"1"}, {id:"1317",codigo:"802200",nombre:"ESTABLECIMIENTOS DE ENSE",activo:"1"}, {id:"1318",codigo:"803010",nombre:"UNIVERSIDADES",activo:"1"},
    {id:"1319",codigo:"803020",nombre:"INSTITUTOS PROFESIONALES",activo:"1"}, {id:"1320",codigo:"803030",nombre:"CENTROS DE FORMACI",activo:"1"}, {id:"1321",codigo:"809010",nombre:"ESTABLECIMIENTOS DE ENSE",activo:"1"},
    {id:"1322",codigo:"809020",nombre:"ESTABLECIMIENTOS DE ENSE",activo:"1"}, {id:"1323",codigo:"809030",nombre:"EDUCACI",activo:"1"}, {id:"1324",codigo:"809041",nombre:"EDUCACI",activo:"1"},
    {id:"1325",codigo:"809049",nombre:"SERVICIOS PERSONALES DE EDUCACI",activo:"1"}, {id:"1326",codigo:"851110",nombre:"HOSPITALES Y CL",activo:"1"}, {id:"1327",codigo:"851120",nombre:"CL",activo:"1"},
    {id:"1328",codigo:"851211",nombre:"SERVICIOS DE M",activo:"1"}, {id:"1329",codigo:"851212",nombre:"ESTABLECIMIENTOS M",activo:"1"}, {id:"1330",codigo:"851221",nombre:"SERVICIOS DE ODONT",activo:"1"},
    {id:"1331",codigo:"851222",nombre:"CENTROS DE ATENCI",activo:"1"}, {id:"1332",codigo:"851910",nombre:"LABORATORIOS CL",activo:"1"}, {id:"1333",codigo:"851920",nombre:"OTROS PROFESIONALES DE LA SALUD",activo:"1"},
    {id:"1334",codigo:"851990",nombre:"OTRAS ACTIVIDADES EMPRESARIALES RELACIONADAS CON LA SALUD HUMANA",activo:"1"}, {id:"1335",codigo:"852010",nombre:"ACTIVIDADES DE CL",activo:"1"}, {id:"1336",codigo:"852021",nombre:"SERVICIOS DE M",activo:"1"},
    {id:"1337",codigo:"852029",nombre:"SERVICIOS DE OTROS PROFESIONALES INDEPENDIENTES EN EL ",activo:"1"}, {id:"1338",codigo:"853100",nombre:"SERVICIOS SOCIALES CON ALOJAMIENTO",activo:"1"}, {id:"1339",codigo:"853200",nombre:"SERVICIOS SOCIALES SIN ALOJAMIENTO",activo:"1"},
    {id:"1340",codigo:"900010",nombre:"SERVICIOS DE VERTEDEROS",activo:"1"}, {id:"1341",codigo:"900020",nombre:"BARRIDO DE EXTERIORES",activo:"1"}, {id:"1342",codigo:"900030",nombre:"RECOGIDA Y ELIMINACI",activo:"1"},
    {id:"1343",codigo:"900040",nombre:"SERVICIOS DE EVACUACI",activo:"1"}, {id:"1344",codigo:"900050",nombre:"SERVICIOS DE TRATAMIENTO DE RILES Y AGUAS SERVIDAS",activo:"1"}, {id:"1345",codigo:"900090",nombre:"OTRAS ACTIVIDADES DE MANEJO DE DESPERDICIOS",activo:"1"},
    {id:"1346",codigo:"911100",nombre:"ACTIVIDADES DE ORGANIZACIONES EMPRESARIALES Y DE EMPLEADORES",activo:"1"}, {id:"1347",codigo:"911210",nombre:"COLEGIOS PROFESIONALES",activo:"1"}, {id:"1348",codigo:"911290",nombre:"ACTIVIDADES DE OTRAS ORGANIZACIONES PROFESIONALES",activo:"1"},
    {id:"1349",codigo:"912000",nombre:"ACTIVIDADES DE SINDICATOS",activo:"1"}, {id:"1350",codigo:"919100",nombre:"ACTIVIDADES DE ORGANIZACIONES RELIGIOSAS",activo:"1"}, {id:"1351",codigo:"919200",nombre:"ACTIVIDADES DE ORGANIZACIONES POL",activo:"1"},
    {id:"1352",codigo:"919910",nombre:"CENTROS DE MADRES Y UNIDADES VECINALES Y COMUNALES",activo:"1"}, {id:"1353",codigo:"919920",nombre:"CLUBES SOCIALES",activo:"1"}, {id:"1354",codigo:"919930",nombre:"SERVICIOS DE INSTITUTOS DE ESTUDIOS, FUNDACIONES, CORPORACIONES DE DESARROLLO (EDUCACI",activo:"1"},
    {id:"1355",codigo:"919990",nombre:"ACTIVIDADES DE OTRAS ASOCIACIONES N.C.P.",activo:"1"}, {id:"1356",codigo:"921110",nombre:"PRODUCCI",activo:"1"}, {id:"1357",codigo:"921120",nombre:"DISTRIBUIDORA CINEMATOGR",activo:"1"},
    {id:"1358",codigo:"921200",nombre:"EXHIBICI",activo:"1"}, {id:"1359",codigo:"921310",nombre:"ACTIVIDADES DE TELEVISI",activo:"1"}, {id:"1360",codigo:"921320",nombre:"ACTIVIDADES DE RADIO",activo:"1"},
    {id:"1361",codigo:"921411",nombre:"SERVICIOS DE PRODUCCI",activo:"1"}, {id:"1362",codigo:"921419",nombre:"SERVICIOS DE PRODUCCI",activo:"1"}, {id:"1363",codigo:"921420",nombre:"ACTIVIDADES EMPRESARIALES DE ARTISTAS",activo:"1"},
    {id:"1364",codigo:"921430",nombre:"ACTIVIDADES ART",activo:"1"}, {id:"1365",codigo:"921490",nombre:"AGENCIAS DE VENTA DE BILLETES DE TEATRO, SALAS DE CONCIERTO Y DE TEATRO",activo:"1"}, {id:"1366",codigo:"921911",nombre:"INSTRUCTORES DE DANZA",activo:"1"},
    {id:"1367",codigo:"921912",nombre:"ACTIVIDADES DE DISCOTECAS, CABARET, SALAS DE BAILE Y SIMILARES",activo:"1"}, {id:"1368",codigo:"921920",nombre:"ACTIVIDADES DE PARQUES DE ATRACCIONES Y CENTROS SIMILARES",activo:"1"}, {id:"1369",codigo:"921930",nombre:"ESPECT",activo:"1"},
    {id:"1370",codigo:"921990",nombre:"OTRAS ACTIVIDADES DE ENTRETENIMIENTO N.C.P.",activo:"1"}, {id:"1371",codigo:"922001",nombre:"AGENCIAS DE NOTICIAS",activo:"1"}, {id:"1372",codigo:"922002",nombre:"SERVICIOS PERIOD",activo:"1"},
    {id:"1373",codigo:"923100",nombre:"ACTIVIDADES DE BIBLIOTECAS Y ARCHIVOS",activo:"1"}, {id:"1374",codigo:"923200",nombre:"ACTIVIDADES DE MUSEOS Y PRESERVACI",activo:"1"}, {id:"1375",codigo:"923300",nombre:"ACTIVIDADES DE JARDINES BOT",activo:"1"},
    {id:"1376",codigo:"924110",nombre:"EXPLOTACI",activo:"1"}, {id:"1377",codigo:"924120",nombre:"ACTIVIDADES DE CLUBES DE DEPORTES Y ESTADIOS",activo:"1"}, {id:"1378",codigo:"924131",nombre:"FUTBOL PROFESIONAL",activo:"1"},
    {id:"1379",codigo:"924132",nombre:"FUTBOL AMATEUR",activo:"1"}, {id:"1380",codigo:"924140",nombre:"HIP",activo:"1"}, {id:"1381",codigo:"924150",nombre:"PROMOCI",activo:"1"},
    {id:"1382",codigo:"924160",nombre:"ESCUELAS PARA DEPORTES",activo:"1"}, {id:"1383",codigo:"924190",nombre:"OTRAS ACTIVIDADES RELACIONADAS AL DEPORTE N.C.P.",activo:"1"}, {id:"1384",codigo:"924910",nombre:"SISTEMAS DE JUEGOS DE AZAR MASIVOS.",activo:"1"},
    {id:"1385",codigo:"924920",nombre:"ACTIVIDADES DE CASINO DE JUEGOS",activo:"1"}, {id:"1386",codigo:"924930",nombre:"SALAS DE BILLAR, BOWLING, POOL Y JUEGOS ELECTR",activo:"1"}, {id:"1387",codigo:"924940",nombre:"CONTRATACI",activo:"1"},
    {id:"1388",codigo:"924990",nombre:"OTROS SERVICIOS DE DIVERSI",activo:"1"}, {id:"1389",codigo:"930100",nombre:"LAVADO Y LIMPIEZA DE PRENDAS DE TELA Y DE PIEL, INCLUSO LAS LIMPIEZAS EN SECO",activo:"1"}, {id:"1390",codigo:"930200",nombre:"PELUQUER",activo:"1"},
    {id:"1391",codigo:"930310",nombre:"SERVICIOS FUNERARIOS",activo:"1"}, {id:"1392",codigo:"930320",nombre:"SERVICIOS EN CEMENTERIOS",activo:"1"}, {id:"1393",codigo:"930330",nombre:"SERVICIOS DE CARROZAS F",activo:"1"},
    {id:"1394",codigo:"930390",nombre:"OTRAS ACTIVIDADES DE SERVICIOS FUNERARIOS Y OTRAS ACTIVIDADES CONEXAS",activo:"1"}, {id:"1395",codigo:"930910",nombre:"ACTIVIDADES DE MANTENIMIENTO F",activo:"1"}, {id:"1396",codigo:"930990",nombre:"OTRAS ACTIVIDADES DE SERVICIOS PERSONALES N.C.P.",activo:"1"},
    {id:"1397",codigo:"950001",nombre:"HOGARES PRIVADOS INDIVIDUALES CON SERVICIO DOM",activo:"1"}, {id:"1398",codigo:"950002",nombre:"CONSEJO DE ADMINISTRACI",activo:"1"}, {id:"1399",codigo:"990000",nombre:"ORGANIZACIONES Y ",activo:"1"}]



}


function userReducer(state =  initialState, action = {}){

  switch (action.type ) {
    //*********data user******************
      case 'fetch_user_data':
          return {...state, dataUser: { userInfo:{},loading:true,error:null, inbox: 0 }}
      break;
      case 'fetch_user_data_succes':
          return {...state, dataUser: {userInfo: action.payload, loading: true, error: null, inbox: 34}}
      break;
      case 'fetch_user_data_error':
          return {...state, dataUser: {userInfo: {}, loading: false, error: action.payload, inbox: 0}}
      break;
      //*********licencias usuario*************
        case 'fetch_licencias_user':
            return {...state, dataUser:{...state.dataUser, loading:true}}
        break;
        case 'fetch_licencias_user_succes':
            return {...state, dataUser:{...state.dataUser,loading:false, licencias: action.payload.records}}
        break;
        case 'fetch_licencias_user_error':
            return {...state, dataUser: {userInfo: {}, loading: false, error: action.payload, inbox: 0}}
        break;
      //*******data contribuyentes**********
        case 'fetch_contribuyentes':
            return {...state, contribuyentes: { data:{},loading:true,error:null }}
        break;
        case 'fetch_contribuyentes_succes':
            return {...state, contribuyentes: {data: action.payload.records, loading: false, error: null}}
        break;
        case 'fetch_contribuyentes_error':
            return {...state, contribuyentes: {data: {}, loading: false, error: action.payload}}
        break;
        //************change rzon_soc***********
        case 'edit_rzon_soc':
        return Object.assign({}, state, {
          contribuyentes:{
            data: state.contribuyentes.data.map((contribuyente) => {
              if(contribuyente.id === action.payload.idContribuyente) {
                return Object.assign({}, contribuyente, {
                  r_social_ap_paterno: action.payload.infoEdited
                })
              }
              return contribuyente
            })
          }
        })
        break;
        //*****************************************
        //************change region***********
        case 'edit_region':
        return Object.assign({}, state, {
          contribuyentes:{
            data: state.contribuyentes.data.map((contribuyente) => {
              if(contribuyente.id === action.payload.idContribuyente) {
                return Object.assign({}, contribuyente, {
                  region: action.payload.infoEdited
                })
              }
              return contribuyente
            })
          }
        })
        break;
        //*****************************************
        //************change act_econ***********
        case 'edit_act_econ':
        return Object.assign({}, state, {
          contribuyentes:{
            data: state.contribuyentes.data.map((contribuyente) => {
              if(contribuyente.id === action.payload.idContribuyente) {
                return Object.assign({}, contribuyente, {
                  actividad: action.payload.infoEdited
                })
              }
              return contribuyente
            })
          }
        })
        break;
        //*****************************************
        //************change cod_act_econ***********
        case 'edit_cod_act_econ':
        return Object.assign({}, state, {
          contribuyentes:{
            data: state.contribuyentes.data.map((contribuyente) => {
              if(contribuyente.id === action.payload.idContribuyente) {
                return Object.assign({}, contribuyente, {
                  cod_act_econ: action.payload.infoEdited
                })
              }
              return contribuyente
            })
          }
        })
        break;
        //*****************************************


    default:

  }
  return state;
}
export default userReducer;
