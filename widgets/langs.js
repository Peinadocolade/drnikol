var translateSelect = translateSelects();

window.addEventListener('load', initSelectsTranslate);

function initSelectsTranslate(){
  // Перевод стран из справочника
  // Если чего-то нужного нет, то ничего не делаем
  if(document.querySelectorAll('select[name="country"]').length == 0){
    return false;
  }

  // Самый первый селект
  var countryTrSelect = document.querySelector('select[name="country"]');
  var selectVal = countryTrSelect.value.toUpperCase();
  var exclude = ['AZ', 'AM', 'BY', 'KZ', 'KG', 'MD', 'TJ', 'TM', 'UZ', 'RU'];
  // var exclude = [''];

  if(exclude.indexOf(selectVal) != -1 || exclude.indexOf(window.curent_country) != -1) return false;

  // English translate
  var options = countryTrSelect.querySelectorAll('option');
  for(var i = 0; i < options.length; i++){
    // val выбранного option
    var currentOptionVal = options[i].value.toUpperCase();
    // Если страна есть в справочнике и переводы для этой страны тоже
    if(typeof translateSelect['EN'] != 'undefined'){
      var selectedOption = document.querySelectorAll('select[name="country"] option[value="' + currentOptionVal + '"]');
      for(var k = 0; k < selectedOption.length; k++){
        selectedOption[k].innerHTML = translateSelect['EN'][currentOptionVal];
      }
    } else {
      console.warn('ПЕРЕВОД ДЛЯ ' + currentOptionVal + ' НЕ НАЙДЕН!');
    }
  }
}

function translateSelects(){return{EN:{RU:"Russia",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",AX:"åland Islands",AL:"Albania",DZ:"Algeria",VI:"virgin Islands (USA)",AS:"American Samoa",AI:"Anguilla",AO:"Angola",AD:"Andorra",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AF:"Afghanistan",BS:"Bahamas",BD:"Bangladesh",BB:"Barbados",BH:"Bahrain",BZ:"Belize",BY:"Belarus",BE:"Belgium",BJ:"Benin",BM:"Bermuda",BG:"Bulgaria",BO:"Bolivia",BQ:"Bonaire, Sint Eustatius and Saba",BA:"Bosnia and Herzegovina",BW:"Botswana",BR:"Brazil",IO:"British Indian ocean territory",VG:"virgin Islands (United Kingdom)",BN:"Brunei",BF:"Burkina Faso",BI:"Burundi",BT:"Bhutan",VU:"Vanuatu",VA:"Vatican",GB:"United Kingdom",HU:"Hungary",VE:"Venezuela",UM:"minor Outlying Islands (USA)",TL:"East Timor",VN:"Vietnam",GA:"Gabon",HT:"Haitian",GY:"Guyana",GM:"Gambia",GH:"Ghana",GP:"Guadeloupe",GT:"Guatemala",GF:"Guiana",GN:"Guinea",GW:"Guinea-Bissau",DE:"Germany",GG:"Guernsey",GI:"Gibraltar",HN:"Honduras",HK:"Hong Kong",GD:"Grenada",GL:"Greenland",GR:"Greece",GE:"Georgia",GU:"GUAM",DK:"Denmark",JE:"Jersey",DJ:"Djibouti",DM:"Dominic",DO:"Dominican Republic",CD:"Democratic Republic of the Congo",EG:"Egypt",ZM:"Zambia",EH:"SADR",ZW:"Zimbabwe",IL:"Israel",IN:"India",ID:"Indonesia",JO:"Jordan",IQ:"Iraq",IR:"Iran",IE:"Ireland",IS:"Iceland",ES:"Spain",IT:"Italy",YE:"Yemen",CV:"Cape Verde",KZ:"Kazakhstan",KY:"Cayman Islands",KH:"Cambodia",CM:"Cameroon",CA:"Canada",QA:"Qatar",KE:"Kenya",CY:"Cyprus",KG:"Kyrgyzstan",KI:"Kiribati",TW:"Republic of China",KP:"DPRK (Democratic people's Republic of Korea)",CN:"PRC (people's Republic of China)",CC:"Coconut Islands",CO:"Columbia",KM:"Comoros",CR:"Costa Rica",CI:"ivory coast",CU:"Cuba",KW:"Kuwait",CW:"Curacao",LA:"Laos",LV:"Latvia",LS:"Lesotho",LR:"Liberia",LB:"Lebanon",LY:"Libya",LT:"Lithuania",LI:"Liechtenstein",LU:"Luxembourg",MU:"Mauritius",MY:"Malaysia",MR:"Mauritania",MG:"Madagascar",YT:"Mayotte",MO:"Macau",MW:"Malawi",MY:"Malaysia",ML:"Mali",MV:"Maldives",MT:"Malta",MA:"Morocco",MQ:"Martinique",MH:"Marshall Islands",MX:"Mexico",FM:"Micronesia",MZ:"Mozambique",MD:"Moldova",MC:"Monaco",MN:"Mongolia",MS:"Montserrat",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NE:"Niger",NG:"Nigeria",NL:"Netherlands",NI:"Nicaragua",NU:"Niue",NZ:"New Zealand",NC:"New Caledonia",NO:"Norway",AE:"UNITED ARAB EMIRATES",OM:"Oman",BV:"Bouvet Island",IM:"Isle of man",CK:"cook Islands",NF:"Norfolk Island",CX:"Christmas Island",PN:"Pitcairn Islands",SH:"Saint Helena, ascension And Tristan da Cunha",PK:"Pakistan",PW:"Palau",PS:"State of Palestine",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",CG:"Republic of the Congo",KR:"Republic of Korea",RE:"reunion",RW:"Rwanda",RO:"Romania",SV:"El Salvador",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SZ:"Swaziland",MK:"Northern Macedonia",MP:"Northern Mariana Islands",SC:"Seychelles",BL:"Saint-barthélemy",MF:"Saint-Martin",PM:"Saint Pierre and Miquelon",SN:"Senegal",VC:"Saint Vincent and the Grenadines",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",RS:"Serbia",SG:"Singapore",SX:"Sint-Martin",SY:"Syria",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",SD:"Sudan",SR:"Suriname",US:"THE UNITED STATES",SL:"Sierra Leone",TJ:"Tajikistan",TH:"Thailand",TZ:"Tanzania",TC:"Turks and Caicos",TG:"That",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TV:"Tuvalu",TN:"Tunisia",TM:"Turkmenistan",TR:"Turkey",UG:"Uganda",UZ:"Uzbekistan",UA:"Ukraine",WF:"Wallis and Futuna",UY:"Uruguay",FO:"the Faroe Islands",FJ:"Fiji",PH:"Philippines",FI:"Finland",FK:"Falkland Islands",FR:"France",PF:"French Polynesia",TF:"French Southern and Antarctic Territories",HM:"heard and McDonald",HR:"Croatia",CF:"CAR",TD:"Chad",ME:"Montenegro",CZ:"Czech Republic",CL:"Chile",CH:"Switzerland",SE:"Sweden",SJ:"Svalbard and Jan Mayen",LK:"Sri Lanka",EC:"Ecuador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",ZA:"SOUTH AFRICA",GS:"South Georgia and The South sandwich Islands",SS:"South Sudan",JM:"Jamaica",JP:"Japan",XK:"Kosovo"}}}
