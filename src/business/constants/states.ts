/* eslint-disable */
export interface RaveState {
  name: string;
  stateCode: string;
}

export interface RaveCountry {
  name: string;
  code: string;
  phoneCode: string;
  currency: string;
  currencySymbol: string;
  emoji: string;
  states: RaveState[];
}

export const RaveCountryData: RaveCountry[] = [
  {
    name: 'Afghanistan',
    code: 'AF',
    phoneCode: '93',
    currency: 'AFN',
    currencySymbol: '؋',

    emoji: '🇦🇫',

    states: [
      {
        name: 'Badakhshan',
        stateCode: 'BDS',
      },
      {
        name: 'Badghis',
        stateCode: 'BDG',
      },
      {
        name: 'Baghlan',
        stateCode: 'BGL',
      },
      {
        name: 'Balkh',
        stateCode: 'BAL',
      },
      {
        name: 'Bamyan',
        stateCode: 'BAM',
      },
      {
        name: 'Daykundi',
        stateCode: 'DAY',
      },
      {
        name: 'Farah',
        stateCode: 'FRA',
      },
      {
        name: 'Faryab',
        stateCode: 'FYB',
      },
      {
        name: 'Ghazni',
        stateCode: 'GHA',
      },
      {
        name: 'Ghōr',
        stateCode: 'GHO',
      },
      {
        name: 'Helmand',
        stateCode: 'HEL',
      },
      {
        name: 'Herat',
        stateCode: 'HER',
      },
      {
        name: 'Jowzjan',
        stateCode: 'JOW',
      },
      {
        name: 'Kabul',
        stateCode: 'KAB',
      },
      {
        name: 'Kandahar',
        stateCode: 'KAN',
      },
      {
        name: 'Kapisa',
        stateCode: 'KAP',
      },
      {
        name: 'Khost',
        stateCode: 'KHO',
      },
      {
        name: 'Kunar',
        stateCode: 'KNR',
      },
      {
        name: 'Kunduz Province',
        stateCode: 'KDZ',
      },
      {
        name: 'Laghman',
        stateCode: 'LAG',
      },
      {
        name: 'Logar',
        stateCode: 'LOG',
      },
      {
        name: 'Nangarhar',
        stateCode: 'NAN',
      },
      {
        name: 'Nimruz',
        stateCode: 'NIM',
      },
      {
        name: 'Nuristan',
        stateCode: 'NUR',
      },
      {
        name: 'Paktia',
        stateCode: 'PIA',
      },
      {
        name: 'Paktika',
        stateCode: 'PKA',
      },
      {
        name: 'Panjshir',
        stateCode: 'PAN',
      },
      {
        name: 'Parwan',
        stateCode: 'PAR',
      },
      {
        name: 'Samangan',
        stateCode: 'SAM',
      },
      {
        name: 'Sar-e Pol',
        stateCode: 'SAR',
      },
      {
        name: 'Takhar',
        stateCode: 'TAK',
      },
      {
        name: 'Urozgan',
        stateCode: 'URU',
      },
      {
        name: 'Zabul',
        stateCode: 'ZAB',
      },
    ],
  },
  {
    name: 'Aland Islands',
    code: 'AX',
    phoneCode: '+358-18',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇦🇽',

    states: [],
  },
  {
    name: 'Albania',
    code: 'AL',
    phoneCode: '355',
    currency: 'ALL',
    currencySymbol: 'Lek',

    emoji: '🇦🇱',

    states: [
      {
        name: 'Berat County',
        stateCode: '01',
      },
      {
        name: 'Berat District',
        stateCode: 'BR',
      },
      {
        name: 'Bulqizë District',
        stateCode: 'BU',
      },
      {
        name: 'Delvinë District',
        stateCode: 'DL',
      },
      {
        name: 'Devoll District',
        stateCode: 'DV',
      },
      {
        name: 'Dibër County',
        stateCode: '09',
      },
      {
        name: 'Dibër District',
        stateCode: 'DI',
      },
      {
        name: 'Durrës County',
        stateCode: '02',
      },
      {
        name: 'Durrës District',
        stateCode: 'DR',
      },
      {
        name: 'Elbasan County',
        stateCode: '03',
      },
      {
        name: 'Fier County',
        stateCode: '04',
      },
      {
        name: 'Fier District',
        stateCode: 'FR',
      },
      {
        name: 'Gjirokastër County',
        stateCode: '05',
      },
      {
        name: 'Gjirokastër District',
        stateCode: 'GJ',
      },
      {
        name: 'Gramsh District',
        stateCode: 'GR',
      },
      {
        name: 'Has District',
        stateCode: 'HA',
      },
      {
        name: 'Kavajë District',
        stateCode: 'KA',
      },
      {
        name: 'Kolonjë District',
        stateCode: 'ER',
      },
      {
        name: 'Korçë County',
        stateCode: '06',
      },
      {
        name: 'Korçë District',
        stateCode: 'KO',
      },
      {
        name: 'Krujë District',
        stateCode: 'KR',
      },
      {
        name: 'Kuçovë District',
        stateCode: 'KC',
      },
      {
        name: 'Kukës County',
        stateCode: '07',
      },
      {
        name: 'Kukës District',
        stateCode: 'KU',
      },
      {
        name: 'Kurbin District',
        stateCode: 'KB',
      },
      {
        name: 'Lezhë County',
        stateCode: '08',
      },
      {
        name: 'Lezhë District',
        stateCode: 'LE',
      },
      {
        name: 'Librazhd District',
        stateCode: 'LB',
      },
      {
        name: 'Lushnjë District',
        stateCode: 'LU',
      },
      {
        name: 'Malësi e Madhe District',
        stateCode: 'MM',
      },
      {
        name: 'Mallakastër District',
        stateCode: 'MK',
      },
      {
        name: 'Mat District',
        stateCode: 'MT',
      },
      {
        name: 'Mirditë District',
        stateCode: 'MR',
      },
      {
        name: 'Peqin District',
        stateCode: 'PQ',
      },
      {
        name: 'Përmet District',
        stateCode: 'PR',
      },
      {
        name: 'Pogradec District',
        stateCode: 'PG',
      },
      {
        name: 'Pukë District',
        stateCode: 'PU',
      },
      {
        name: 'Sarandë District',
        stateCode: 'SR',
      },
      {
        name: 'Shkodër County',
        stateCode: '10',
      },
      {
        name: 'Shkodër District',
        stateCode: 'SH',
      },
      {
        name: 'Skrapar District',
        stateCode: 'SK',
      },
      {
        name: 'Tepelenë District',
        stateCode: 'TE',
      },
      {
        name: 'Tirana County',
        stateCode: '11',
      },
      {
        name: 'Tirana District',
        stateCode: 'TR',
      },
      {
        name: 'Tropojë District',
        stateCode: 'TP',
      },
      {
        name: 'Vlorë County',
        stateCode: '12',
      },
      {
        name: 'Vlorë District',
        stateCode: 'VL',
      },
    ],
  },
  {
    name: 'Algeria',
    code: 'DZ',
    phoneCode: '213',
    currency: 'DZD',
    currencySymbol: 'دج',

    emoji: '🇩🇿',

    states: [
      {
        name: 'Adrar',
        stateCode: '01',
      },
      {
        name: 'Aïn Defla',
        stateCode: '44',
      },
      {
        name: 'Aïn Témouchent',
        stateCode: '46',
      },
      {
        name: 'Algiers',
        stateCode: '16',
      },
      {
        name: 'Annaba',
        stateCode: '23',
      },
      {
        name: 'Batna',
        stateCode: '05',
      },
      {
        name: 'Béchar',
        stateCode: '08',
      },
      {
        name: 'Béjaïa',
        stateCode: '06',
      },
      {
        name: 'Béni Abbès',
        stateCode: '53',
      },
      {
        name: 'Biskra',
        stateCode: '07',
      },
      {
        name: 'Blida',
        stateCode: '09',
      },
      {
        name: 'Bordj Baji Mokhtar',
        stateCode: '52',
      },
      {
        name: 'Bordj Bou Arréridj',
        stateCode: '34',
      },
      {
        name: 'Bouïra',
        stateCode: '10',
      },
      {
        name: 'Boumerdès',
        stateCode: '35',
      },
      {
        name: 'Chlef',
        stateCode: '02',
      },
      {
        name: 'Constantine',
        stateCode: '25',
      },
      {
        name: 'Djanet',
        stateCode: '56',
      },
      {
        name: 'Djelfa',
        stateCode: '17',
      },
      {
        name: 'El Bayadh',
        stateCode: '32',
      },
      {
        name: "El M'ghair",
        stateCode: '49',
      },
      {
        name: 'El Menia',
        stateCode: '50',
      },
      {
        name: 'El Oued',
        stateCode: '39',
      },
      {
        name: 'El Tarf',
        stateCode: '36',
      },
      {
        name: 'Ghardaïa',
        stateCode: '47',
      },
      {
        name: 'Guelma',
        stateCode: '24',
      },
      {
        name: 'Illizi',
        stateCode: '33',
      },
      {
        name: 'In Guezzam',
        stateCode: '58',
      },
      {
        name: 'In Salah',
        stateCode: '57',
      },
      {
        name: 'Jijel',
        stateCode: '18',
      },
      {
        name: 'Khenchela',
        stateCode: '40',
      },
      {
        name: 'Laghouat',
        stateCode: '03',
      },
      {
        name: "M'Sila",
        stateCode: '28',
      },
      {
        name: 'Mascara',
        stateCode: '29',
      },
      {
        name: 'Médéa',
        stateCode: '26',
      },
      {
        name: 'Mila',
        stateCode: '43',
      },
      {
        name: 'Mostaganem',
        stateCode: '27',
      },
      {
        name: 'Naama',
        stateCode: '45',
      },
      {
        name: 'Oran',
        stateCode: '31',
      },
      {
        name: 'Ouargla',
        stateCode: '30',
      },
      {
        name: 'Ouled Djellal',
        stateCode: '51',
      },
      {
        name: 'Oum El Bouaghi',
        stateCode: '04',
      },
      {
        name: 'Relizane',
        stateCode: '48',
      },
      {
        name: 'Saïda',
        stateCode: '20',
      },
      {
        name: 'Sétif',
        stateCode: '19',
      },
      {
        name: 'Sidi Bel Abbès',
        stateCode: '22',
      },
      {
        name: 'Skikda',
        stateCode: '21',
      },
      {
        name: 'Souk Ahras',
        stateCode: '41',
      },
      {
        name: 'Tamanghasset',
        stateCode: '11',
      },
      {
        name: 'Tébessa',
        stateCode: '12',
      },
      {
        name: 'Tiaret',
        stateCode: '14',
      },
      {
        name: 'Timimoun',
        stateCode: '54',
      },
      {
        name: 'Tindouf',
        stateCode: '37',
      },
      {
        name: 'Tipasa',
        stateCode: '42',
      },
      {
        name: 'Tissemsilt',
        stateCode: '38',
      },
      {
        name: 'Tizi Ouzou',
        stateCode: '15',
      },
      {
        name: 'Tlemcen',
        stateCode: '13',
      },
      {
        name: 'Touggourt',
        stateCode: '55',
      },
    ],
  },
  {
    name: 'American Samoa',
    code: 'AS',
    phoneCode: '+1-684',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇦🇸',

    states: [],
  },
  {
    name: 'Andorra',
    code: 'AD',
    phoneCode: '376',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇦🇩',

    states: [
      {
        name: 'Andorra la Vella',
        stateCode: '07',
      },
      {
        name: 'Canillo',
        stateCode: '02',
      },
      {
        name: 'Encamp',
        stateCode: '03',
      },
      {
        name: 'Escaldes-Engordany',
        stateCode: '08',
      },
      {
        name: 'La Massana',
        stateCode: '04',
      },
      {
        name: 'Ordino',
        stateCode: '05',
      },
      {
        name: 'Sant Julià de Lòria',
        stateCode: '06',
      },
    ],
  },
  {
    name: 'Angola',
    code: 'AO',
    phoneCode: '244',
    currency: 'AOA',
    currencySymbol: 'Kz',

    emoji: '🇦🇴',

    states: [
      {
        name: 'Bengo Province',
        stateCode: 'BGO',
      },
      {
        name: 'Benguela Province',
        stateCode: 'BGU',
      },
      {
        name: 'Bié Province',
        stateCode: 'BIE',
      },
      {
        name: 'Cabinda Province',
        stateCode: 'CAB',
      },
      {
        name: 'Cuando Cubango Province',
        stateCode: 'CCU',
      },
      {
        name: 'Cuanza Norte Province',
        stateCode: 'CNO',
      },
      {
        name: 'Cuanza Sul',
        stateCode: 'CUS',
      },
      {
        name: 'Cunene Province',
        stateCode: 'CNN',
      },
      {
        name: 'Huambo Province',
        stateCode: 'HUA',
      },
      {
        name: 'Huíla Province',
        stateCode: 'HUI',
      },
      {
        name: 'Luanda Province',
        stateCode: 'LUA',
      },
      {
        name: 'Lunda Norte Province',
        stateCode: 'LNO',
      },
      {
        name: 'Lunda Sul Province',
        stateCode: 'LSU',
      },
      {
        name: 'Malanje Province',
        stateCode: 'MAL',
      },
      {
        name: 'Moxico Province',
        stateCode: 'MOX',
      },
      {
        name: 'Uíge Province',
        stateCode: 'UIG',
      },
      {
        name: 'Zaire Province',
        stateCode: 'ZAI',
      },
    ],
  },
  {
    name: 'Anguilla',
    code: 'AI',
    phoneCode: '+1-264',
    currency: 'XCD',
    currencySymbol: '$',

    emoji: '🇦🇮',

    states: [],
  },
  {
    name: 'Antarctica',
    code: 'AQ',
    phoneCode: '',
    currency: '',
    currencySymbol: '$',

    emoji: '🇦🇶',

    states: [],
  },
  {
    name: 'Antigua And Barbuda',
    code: 'AG',
    phoneCode: '+1-268',
    currency: 'XCD',
    currencySymbol: '$',

    emoji: '🇦🇬',

    states: [
      {
        name: 'Barbuda',
        stateCode: '10',
      },
      {
        name: 'Redonda',
        stateCode: '11',
      },
      {
        name: 'Saint George Parish',
        stateCode: '03',
      },
      {
        name: 'Saint John Parish',
        stateCode: '04',
      },
      {
        name: 'Saint Mary Parish',
        stateCode: '05',
      },
      {
        name: 'Saint Paul Parish',
        stateCode: '06',
      },
      {
        name: 'Saint Peter Parish',
        stateCode: '07',
      },
      {
        name: 'Saint Philip Parish',
        stateCode: '08',
      },
    ],
  },
  {
    name: 'Argentina',
    code: 'AR',
    phoneCode: '54',
    currency: 'ARS',
    currencySymbol: '$',

    emoji: '🇦🇷',

    states: [
      {
        name: 'Autonomous City Of Buenos Aires',
        stateCode: 'C',
      },
      {
        name: 'Buenos Aires Province',
        stateCode: 'B',
      },
      {
        name: 'Catamarca Province',
        stateCode: 'K',
      },
      {
        name: 'Chaco Province',
        stateCode: 'H',
      },
      {
        name: 'Chubut Province',
        stateCode: 'U',
      },
      {
        name: 'Córdoba Province',
        stateCode: 'X',
      },
      {
        name: 'Corrientes',
        stateCode: 'W',
      },
      {
        name: 'Entre Ríos Province',
        stateCode: 'E',
      },
      {
        name: 'Formosa Province',
        stateCode: 'P',
      },
      {
        name: 'Jujuy Province',
        stateCode: 'Y',
      },
      {
        name: 'La Pampa',
        stateCode: 'L',
      },
      {
        name: 'La Rioja Province',
        stateCode: 'F',
      },
      {
        name: 'Mendoza',
        stateCode: 'M',
      },
      {
        name: 'Misiones Province',
        stateCode: 'N',
      },
      {
        name: 'Neuquén Province',
        stateCode: 'Q',
      },
      {
        name: 'Río Negro Province',
        stateCode: 'R',
      },
      {
        name: 'Salta Province',
        stateCode: 'A',
      },
      {
        name: 'San Juan Province',
        stateCode: 'J',
      },
      {
        name: 'San Luis Province',
        stateCode: 'D',
      },
      {
        name: 'Santa Cruz Province',
        stateCode: 'Z',
      },
      {
        name: 'Santa Fe Province',
        stateCode: 'S',
      },
      {
        name: 'Santiago del Estero Province',
        stateCode: 'G',
      },
      {
        name: 'Tierra del Fuego Province',
        stateCode: 'V',
      },
      {
        name: 'Tucumán Province',
        stateCode: 'T',
      },
    ],
  },
  {
    name: 'Armenia',
    code: 'AM',
    phoneCode: '374',
    currency: 'AMD',
    currencySymbol: '֏',

    emoji: '🇦🇲',

    states: [
      {
        name: 'Aragatsotn Region',
        stateCode: 'AG',
      },
      {
        name: 'Ararat Province',
        stateCode: 'AR',
      },
      {
        name: 'Armavir Region',
        stateCode: 'AV',
      },
      {
        name: 'Gegharkunik Province',
        stateCode: 'GR',
      },
      {
        name: 'Kotayk Region',
        stateCode: 'KT',
      },
      {
        name: 'Lori Region',
        stateCode: 'LO',
      },
      {
        name: 'Shirak Region',
        stateCode: 'SH',
      },
      {
        name: 'Syunik Province',
        stateCode: 'SU',
      },
      {
        name: 'Tavush Region',
        stateCode: 'TV',
      },
      {
        name: 'Vayots Dzor Region',
        stateCode: 'VD',
      },
      {
        name: 'Yerevan',
        stateCode: 'ER',
      },
    ],
  },
  {
    name: 'Aruba',
    code: 'AW',
    phoneCode: '297',
    currency: 'AWG',
    currencySymbol: 'ƒ',

    emoji: '🇦🇼',

    states: [],
  },
  {
    name: 'Australia',
    code: 'AU',
    phoneCode: '61',
    currency: 'AUD',
    currencySymbol: '$',

    emoji: '🇦🇺',

    states: [
      {
        name: 'New South Wales',
        stateCode: 'NSW',
      },
      {
        name: 'Northern Territory',
        stateCode: 'NT',
      },
      {
        name: 'Queensland',
        stateCode: 'QLD',
      },
      {
        name: 'South Australia',
        stateCode: 'SA',
      },
      {
        name: 'Tasmania',
        stateCode: 'TAS',
      },
      {
        name: 'Victoria',
        stateCode: 'VIC',
      },
      {
        name: 'Western Australia',
        stateCode: 'WA',
      },
    ],
  },
  {
    name: 'Austria',
    code: 'AT',
    phoneCode: '43',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇦🇹',

    states: [
      {
        name: 'Burgenland',
        stateCode: '1',
      },
      {
        name: 'Carinthia',
        stateCode: '2',
      },
      {
        name: 'Lower Austria',
        stateCode: '3',
      },
      {
        name: 'Salzburg',
        stateCode: '5',
      },
      {
        name: 'Styria',
        stateCode: '6',
      },
      {
        name: 'Tyrol',
        stateCode: '7',
      },
      {
        name: 'Upper Austria',
        stateCode: '4',
      },
      {
        name: 'Vienna',
        stateCode: '9',
      },
      {
        name: 'Vorarlberg',
        stateCode: '8',
      },
    ],
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
    phoneCode: '994',
    currency: 'AZN',
    currencySymbol: 'm',

    emoji: '🇦🇿',

    states: [
      {
        name: 'Absheron District',
        stateCode: 'ABS',
      },
      {
        name: 'Agdam District',
        stateCode: 'AGM',
      },
      {
        name: 'Agdash District',
        stateCode: 'AGS',
      },
      {
        name: 'Aghjabadi District',
        stateCode: 'AGC',
      },
      {
        name: 'Agstafa District',
        stateCode: 'AGA',
      },
      {
        name: 'Agsu District',
        stateCode: 'AGU',
      },
      {
        name: 'Astara District',
        stateCode: 'AST',
      },
      {
        name: 'Babek District',
        stateCode: 'BAB',
      },
      {
        name: 'Baku',
        stateCode: 'BA',
      },
      {
        name: 'Balakan District',
        stateCode: 'BAL',
      },
      {
        name: 'Barda District',
        stateCode: 'BAR',
      },
      {
        name: 'Beylagan District',
        stateCode: 'BEY',
      },
      {
        name: 'Bilasuvar District',
        stateCode: 'BIL',
      },
      {
        name: 'Dashkasan District',
        stateCode: 'DAS',
      },
      {
        name: 'Fizuli District',
        stateCode: 'FUZ',
      },
      {
        name: 'Ganja',
        stateCode: 'GA',
      },
      {
        name: 'Gədəbəy',
        stateCode: 'GAD',
      },
      {
        name: 'Gobustan District',
        stateCode: 'QOB',
      },
      {
        name: 'Goranboy District',
        stateCode: 'GOR',
      },
      {
        name: 'Goychay',
        stateCode: 'GOY',
      },
      {
        name: 'Goygol District',
        stateCode: 'GYG',
      },
      {
        name: 'Hajigabul District',
        stateCode: 'HAC',
      },
      {
        name: 'Imishli District',
        stateCode: 'IMI',
      },
      {
        name: 'Ismailli District',
        stateCode: 'ISM',
      },
      {
        name: 'Jabrayil District',
        stateCode: 'CAB',
      },
      {
        name: 'Jalilabad District',
        stateCode: 'CAL',
      },
      {
        name: 'Julfa District',
        stateCode: 'CUL',
      },
      {
        name: 'Kalbajar District',
        stateCode: 'KAL',
      },
      {
        name: 'Kangarli District',
        stateCode: 'KAN',
      },
      {
        name: 'Khachmaz District',
        stateCode: 'XAC',
      },
      {
        name: 'Khizi District',
        stateCode: 'XIZ',
      },
      {
        name: 'Khojali District',
        stateCode: 'XCI',
      },
      {
        name: 'Kurdamir District',
        stateCode: 'KUR',
      },
      {
        name: 'Lachin District',
        stateCode: 'LAC',
      },
      {
        name: 'Lankaran',
        stateCode: 'LAN',
      },
      {
        name: 'Lankaran District',
        stateCode: 'LA',
      },
      {
        name: 'Lerik District',
        stateCode: 'LER',
      },
      {
        name: 'Martuni',
        stateCode: 'XVD',
      },
      {
        name: 'Masally District',
        stateCode: 'MAS',
      },
      {
        name: 'Mingachevir',
        stateCode: 'MI',
      },
      {
        name: 'Nakhchivan Autonomous Republic',
        stateCode: 'NX',
      },
      {
        name: 'Neftchala District',
        stateCode: 'NEF',
      },
      {
        name: 'Oghuz District',
        stateCode: 'OGU',
      },
      {
        name: 'Ordubad District',
        stateCode: 'ORD',
      },
      {
        name: 'Qabala District',
        stateCode: 'QAB',
      },
      {
        name: 'Qakh District',
        stateCode: 'QAX',
      },
      {
        name: 'Qazakh District',
        stateCode: 'QAZ',
      },
      {
        name: 'Quba District',
        stateCode: 'QBA',
      },
      {
        name: 'Qubadli District',
        stateCode: 'QBI',
      },
      {
        name: 'Qusar District',
        stateCode: 'QUS',
      },
      {
        name: 'Saatly District',
        stateCode: 'SAT',
      },
      {
        name: 'Sabirabad District',
        stateCode: 'SAB',
      },
      {
        name: 'Sadarak District',
        stateCode: 'SAD',
      },
      {
        name: 'Salyan District',
        stateCode: 'SAL',
      },
      {
        name: 'Samukh District',
        stateCode: 'SMX',
      },
      {
        name: 'Shabran District',
        stateCode: 'SBN',
      },
      {
        name: 'Shahbuz District',
        stateCode: 'SAH',
      },
      {
        name: 'Shaki',
        stateCode: 'SA',
      },
      {
        name: 'Shaki District',
        stateCode: 'SAK',
      },
      {
        name: 'Shamakhi District',
        stateCode: 'SMI',
      },
      {
        name: 'Shamkir District',
        stateCode: 'SKR',
      },
      {
        name: 'Sharur District',
        stateCode: 'SAR',
      },
      {
        name: 'Shirvan',
        stateCode: 'SR',
      },
      {
        name: 'Shusha District',
        stateCode: 'SUS',
      },
      {
        name: 'Siazan District',
        stateCode: 'SIY',
      },
      {
        name: 'Sumqayit',
        stateCode: 'SM',
      },
      {
        name: 'Tartar District',
        stateCode: 'TAR',
      },
      {
        name: 'Tovuz District',
        stateCode: 'TOV',
      },
      {
        name: 'Ujar District',
        stateCode: 'UCA',
      },
      {
        name: 'Yardymli District',
        stateCode: 'YAR',
      },
      {
        name: 'Yevlakh',
        stateCode: 'YE',
      },
      {
        name: 'Yevlakh District',
        stateCode: 'YEV',
      },
      {
        name: 'Zangilan District',
        stateCode: 'ZAN',
      },
      {
        name: 'Zaqatala District',
        stateCode: 'ZAQ',
      },
      {
        name: 'Zardab District',
        stateCode: 'ZAR',
      },
    ],
  },
  {
    name: 'Bahamas The',
    code: 'BS',
    phoneCode: '+1-242',
    currency: 'BSD',
    currencySymbol: 'B$',

    emoji: '🇧🇸',

    states: [
      {
        name: 'Acklins',
        stateCode: 'AK',
      },
      {
        name: 'Acklins and Crooked Islands',
        stateCode: 'AC',
      },
      {
        name: 'Berry Islands',
        stateCode: 'BY',
      },
      {
        name: 'Bimini',
        stateCode: 'BI',
      },
      {
        name: 'Black Point',
        stateCode: 'BP',
      },
      {
        name: 'Cat Island',
        stateCode: 'CI',
      },
      {
        name: 'Central Abaco',
        stateCode: 'CO',
      },
      {
        name: 'Central Andros',
        stateCode: 'CS',
      },
      {
        name: 'Central Eleuthera',
        stateCode: 'CE',
      },
      {
        name: 'Crooked Island',
        stateCode: 'CK',
      },
      {
        name: 'East Grand Bahama',
        stateCode: 'EG',
      },
      {
        name: 'Exuma',
        stateCode: 'EX',
      },
      {
        name: 'Freeport',
        stateCode: 'FP',
      },
      {
        name: 'Fresh Creek',
        stateCode: 'FC',
      },
      {
        name: "Governor's Harbour",
        stateCode: 'GH',
      },
      {
        name: 'Grand Cay',
        stateCode: 'GC',
      },
      {
        name: 'Green Turtle Cay',
        stateCode: 'GT',
      },
      {
        name: 'Harbour Island',
        stateCode: 'HI',
      },
      {
        name: 'High Rock',
        stateCode: 'HR',
      },
      {
        name: 'Hope Town',
        stateCode: 'HT',
      },
      {
        name: 'Inagua',
        stateCode: 'IN',
      },
      {
        name: 'Kemps Bay',
        stateCode: 'KB',
      },
      {
        name: 'Long Island',
        stateCode: 'LI',
      },
      {
        name: 'Mangrove Cay',
        stateCode: 'MC',
      },
      {
        name: 'Marsh Harbour',
        stateCode: 'MH',
      },
      {
        name: 'Mayaguana District',
        stateCode: 'MG',
      },
      {
        name: 'New Providence',
        stateCode: 'NP',
      },
      {
        name: 'Nichollstown and Berry Islands',
        stateCode: 'NB',
      },
      {
        name: 'North Abaco',
        stateCode: 'NO',
      },
      {
        name: 'North Andros',
        stateCode: 'NS',
      },
      {
        name: 'North Eleuthera',
        stateCode: 'NE',
      },
      {
        name: 'Ragged Island',
        stateCode: 'RI',
      },
      {
        name: 'Rock Sound',
        stateCode: 'RS',
      },
      {
        name: 'Rum Cay District',
        stateCode: 'RC',
      },
      {
        name: 'San Salvador and Rum Cay',
        stateCode: 'SR',
      },
      {
        name: 'San Salvador Island',
        stateCode: 'SS',
      },
      {
        name: 'Sandy Point',
        stateCode: 'SP',
      },
      {
        name: 'South Abaco',
        stateCode: 'SO',
      },
      {
        name: 'South Andros',
        stateCode: 'SA',
      },
      {
        name: 'South Eleuthera',
        stateCode: 'SE',
      },
      {
        name: 'Spanish Wells',
        stateCode: 'SW',
      },
      {
        name: 'West Grand Bahama',
        stateCode: 'WG',
      },
    ],
  },
  {
    name: 'Bahrain',
    code: 'BH',
    phoneCode: '973',
    currency: 'BHD',
    currencySymbol: '.د.ب',

    emoji: '🇧🇭',

    states: [
      {
        name: 'Central Governorate',
        stateCode: '16',
      },
      {
        name: 'Muharraq Governorate',
        stateCode: '15',
      },
      {
        name: 'Northern Governorate',
        stateCode: '17',
      },
      {
        name: 'Southern Governorate',
        stateCode: '14',
      },
    ],
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    phoneCode: '880',
    currency: 'BDT',
    currencySymbol: '৳',

    emoji: '🇧🇩',

    states: [
      {
        name: 'Bagerhat District',
        stateCode: '05',
      },
      {
        name: 'Bahadia',
        stateCode: '33',
      },
      {
        name: 'Bandarban District',
        stateCode: '01',
      },
      {
        name: 'Barguna District',
        stateCode: '02',
      },
      {
        name: 'Barisal District',
        stateCode: '06',
      },
      {
        name: 'Barisal Division',
        stateCode: 'A',
      },
      {
        name: 'Bhola District',
        stateCode: '07',
      },
      {
        name: 'Bogra District',
        stateCode: '03',
      },
      {
        name: 'Brahmanbaria District',
        stateCode: '04',
      },
      {
        name: 'Chandpur District',
        stateCode: '09',
      },
      {
        name: 'Chapai Nawabganj District',
        stateCode: '45',
      },
      {
        name: 'Chittagong District',
        stateCode: '10',
      },
      {
        name: 'Chittagong Division',
        stateCode: 'B',
      },
      {
        name: 'Chuadanga District',
        stateCode: '12',
      },
      {
        name: 'Comilla District',
        stateCode: '08',
      },
      {
        name: "Cox's Bazar District",
        stateCode: '11',
      },
      {
        name: 'Dhaka District',
        stateCode: '13',
      },
      {
        name: 'Dhaka Division',
        stateCode: 'C',
      },
      {
        name: 'Dinajpur District',
        stateCode: '14',
      },
      {
        name: 'Faridpur District',
        stateCode: '15',
      },
      {
        name: 'Feni District',
        stateCode: '16',
      },
      {
        name: 'Gaibandha District',
        stateCode: '19',
      },
      {
        name: 'Gazipur District',
        stateCode: '18',
      },
      {
        name: 'Gopalganj District',
        stateCode: '17',
      },
      {
        name: 'Habiganj District',
        stateCode: '20',
      },
      {
        name: 'Jamalpur District',
        stateCode: '21',
      },
      {
        name: 'Jessore District',
        stateCode: '22',
      },
      {
        name: 'Jhalokati District',
        stateCode: '25',
      },
      {
        name: 'Jhenaidah District',
        stateCode: '23',
      },
      {
        name: 'Joypurhat District',
        stateCode: '24',
      },
      {
        name: 'Khagrachari District',
        stateCode: '29',
      },
      {
        name: 'Khulna District',
        stateCode: '27',
      },
      {
        name: 'Khulna Division',
        stateCode: 'D',
      },
      {
        name: 'Kishoreganj District',
        stateCode: '26',
      },
      {
        name: 'Kurigram District',
        stateCode: '28',
      },
      {
        name: 'Kushtia District',
        stateCode: '30',
      },
      {
        name: 'Lakshmipur District',
        stateCode: '31',
      },
      {
        name: 'Lalmonirhat District',
        stateCode: '32',
      },
      {
        name: 'Madaripur District',
        stateCode: '36',
      },
      {
        name: 'Meherpur District',
        stateCode: '39',
      },
      {
        name: 'Moulvibazar District',
        stateCode: '38',
      },
      {
        name: 'Munshiganj District',
        stateCode: '35',
      },
      {
        name: 'Mymensingh District',
        stateCode: '34',
      },
      {
        name: 'Mymensingh Division',
        stateCode: 'H',
      },
      {
        name: 'Naogaon District',
        stateCode: '48',
      },
      {
        name: 'Narail District',
        stateCode: '43',
      },
      {
        name: 'Narayanganj District',
        stateCode: '40',
      },
      {
        name: 'Natore District',
        stateCode: '44',
      },
      {
        name: 'Netrokona District',
        stateCode: '41',
      },
      {
        name: 'Nilphamari District',
        stateCode: '46',
      },
      {
        name: 'Noakhali District',
        stateCode: '47',
      },
      {
        name: 'Pabna District',
        stateCode: '49',
      },
      {
        name: 'Panchagarh District',
        stateCode: '52',
      },
      {
        name: 'Patuakhali District',
        stateCode: '51',
      },
      {
        name: 'Pirojpur District',
        stateCode: '50',
      },
      {
        name: 'Rajbari District',
        stateCode: '53',
      },
      {
        name: 'Rajshahi District',
        stateCode: '54',
      },
      {
        name: 'Rajshahi Division',
        stateCode: 'E',
      },
      {
        name: 'Rangamati Hill District',
        stateCode: '56',
      },
      {
        name: 'Rangpur District',
        stateCode: '55',
      },
      {
        name: 'Rangpur Division',
        stateCode: 'F',
      },
      {
        name: 'Satkhira District',
        stateCode: '58',
      },
      {
        name: 'Shariatpur District',
        stateCode: '62',
      },
      {
        name: 'Sherpur District',
        stateCode: '57',
      },
      {
        name: 'Sirajganj District',
        stateCode: '59',
      },
      {
        name: 'Sunamganj District',
        stateCode: '61',
      },
      {
        name: 'Sylhet District',
        stateCode: '60',
      },
      {
        name: 'Sylhet Division',
        stateCode: 'G',
      },
      {
        name: 'Tangail District',
        stateCode: '63',
      },
      {
        name: 'Thakurgaon District',
        stateCode: '64',
      },
    ],
  },
  {
    name: 'Barbados',
    code: 'BB',
    phoneCode: '+1-246',
    currency: 'BBD',
    currencySymbol: 'Bds$',

    emoji: '🇧🇧',

    states: [
      {
        name: 'Christ Church',
        stateCode: '01',
      },
      {
        name: 'Saint Andrew',
        stateCode: '02',
      },
      {
        name: 'Saint George',
        stateCode: '03',
      },
      {
        name: 'Saint James',
        stateCode: '04',
      },
      {
        name: 'Saint John',
        stateCode: '05',
      },
      {
        name: 'Saint Joseph',
        stateCode: '06',
      },
      {
        name: 'Saint Lucy',
        stateCode: '07',
      },
      {
        name: 'Saint Michael',
        stateCode: '08',
      },
      {
        name: 'Saint Peter',
        stateCode: '09',
      },
      {
        name: 'Saint Philip',
        stateCode: '10',
      },
      {
        name: 'Saint Thomas',
        stateCode: '11',
      },
    ],
  },
  {
    name: 'Belarus',
    code: 'BY',
    phoneCode: '375',
    currency: 'BYN',
    currencySymbol: 'Br',

    emoji: '🇧🇾',

    states: [
      {
        name: 'Brest Region',
        stateCode: 'BR',
      },
      {
        name: 'Gomel Region',
        stateCode: 'HO',
      },
      {
        name: 'Grodno Region',
        stateCode: 'HR',
      },
      {
        name: 'Minsk',
        stateCode: 'HM',
      },
      {
        name: 'Minsk Region',
        stateCode: 'MI',
      },
      {
        name: 'Mogilev Region',
        stateCode: 'MA',
      },
      {
        name: 'Vitebsk Region',
        stateCode: 'VI',
      },
    ],
  },
  {
    name: 'Belgium',
    code: 'BE',
    phoneCode: '32',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇧🇪',

    states: [
      {
        name: 'Antwerp',
        stateCode: 'VAN',
      },
      {
        name: 'East Flanders',
        stateCode: 'VOV',
      },
      {
        name: 'Flanders',
        stateCode: 'VLG',
      },
      {
        name: 'Flemish Brabant',
        stateCode: 'VBR',
      },
      {
        name: 'Hainaut',
        stateCode: 'WHT',
      },
      {
        name: 'Liège',
        stateCode: 'WLG',
      },
      {
        name: 'Limburg',
        stateCode: 'VLI',
      },
      {
        name: 'Luxembourg',
        stateCode: 'WLX',
      },
      {
        name: 'Namur',
        stateCode: 'WNA',
      },
      {
        name: 'Wallonia',
        stateCode: 'WAL',
      },
      {
        name: 'Walloon Brabant',
        stateCode: 'WBR',
      },
      {
        name: 'West Flanders',
        stateCode: 'VWV',
      },
    ],
  },
  {
    name: 'Belize',
    code: 'BZ',
    phoneCode: '501',
    currency: 'BZD',
    currencySymbol: '$',

    emoji: '🇧🇿',

    states: [
      {
        name: 'Belize District',
        stateCode: 'BZ',
      },
      {
        name: 'Cayo District',
        stateCode: 'CY',
      },
      {
        name: 'Corozal District',
        stateCode: 'CZL',
      },
      {
        name: 'Orange Walk District',
        stateCode: 'OW',
      },
      {
        name: 'Stann Creek District',
        stateCode: 'SC',
      },
      {
        name: 'Toledo District',
        stateCode: 'TOL',
      },
    ],
  },
  {
    name: 'Benin',
    code: 'BJ',
    phoneCode: '229',
    currency: 'XOF',
    currencySymbol: 'CFA',

    emoji: '🇧🇯',

    states: [
      {
        name: 'Alibori Department',
        stateCode: 'AL',
      },
      {
        name: 'Atakora Department',
        stateCode: 'AK',
      },
      {
        name: 'Atlantique Department',
        stateCode: 'AQ',
      },
      {
        name: 'Borgou Department',
        stateCode: 'BO',
      },
      {
        name: 'Collines Department',
        stateCode: 'CO',
      },
      {
        name: 'Donga Department',
        stateCode: 'DO',
      },
      {
        name: 'Kouffo Department',
        stateCode: 'KO',
      },
      {
        name: 'Littoral Department',
        stateCode: 'LI',
      },
      {
        name: 'Mono Department',
        stateCode: 'MO',
      },
      {
        name: 'Ouémé Department',
        stateCode: 'OU',
      },
      {
        name: 'Plateau Department',
        stateCode: 'PL',
      },
      {
        name: 'Zou Department',
        stateCode: 'ZO',
      },
    ],
  },
  {
    name: 'Bermuda',
    code: 'BM',
    phoneCode: '+1-441',
    currency: 'BMD',
    currencySymbol: '$',

    emoji: '🇧🇲',

    states: [
      {
        name: 'Devonshire Parish',
        stateCode: 'DEV',
      },
      {
        name: 'Hamilton Municipality',
        stateCode: 'HAM',
      },
      {
        name: 'Hamilton Parish',
        stateCode: 'HA',
      },
      {
        name: 'Paget Parish',
        stateCode: 'PAG',
      },
      {
        name: 'Pembroke Parish',
        stateCode: 'PEM',
      },
      {
        name: "Saint George's Municipality",
        stateCode: 'SG',
      },
      {
        name: "Saint George's Parish",
        stateCode: 'SGE',
      },
      {
        name: 'Sandys Parish',
        stateCode: 'SAN',
      },
      {
        name: "Smith's Parish,",
        stateCode: 'SMI',
      },
      {
        name: 'Southampton Parish',
        stateCode: 'SOU',
      },
      {
        name: 'Warwick Parish',
        stateCode: 'WAR',
      },
    ],
  },
  {
    name: 'Bhutan',
    code: 'BT',
    phoneCode: '975',
    currency: 'BTN',
    currencySymbol: 'Nu.',

    emoji: '🇧🇹',

    states: [
      {
        name: 'Bumthang District',
        stateCode: '33',
      },
      {
        name: 'Chukha District',
        stateCode: '12',
      },
      {
        name: 'Dagana District',
        stateCode: '22',
      },
      {
        name: 'Gasa District',
        stateCode: 'GA',
      },
      {
        name: 'Haa District',
        stateCode: '13',
      },
      {
        name: 'Lhuntse District',
        stateCode: '44',
      },
      {
        name: 'Mongar District',
        stateCode: '42',
      },
      {
        name: 'Paro District',
        stateCode: '11',
      },
      {
        name: 'Pemagatshel District',
        stateCode: '43',
      },
      {
        name: 'Punakha District',
        stateCode: '23',
      },
      {
        name: 'Samdrup Jongkhar District',
        stateCode: '45',
      },
      {
        name: 'Samtse District',
        stateCode: '14',
      },
      {
        name: 'Sarpang District',
        stateCode: '31',
      },
      {
        name: 'Thimphu District',
        stateCode: '15',
      },
      {
        name: 'Trashigang District',
        stateCode: '41',
      },
      {
        name: 'Trongsa District',
        stateCode: '32',
      },
      {
        name: 'Tsirang District',
        stateCode: '21',
      },
      {
        name: 'Wangdue Phodrang District',
        stateCode: '24',
      },
      {
        name: 'Zhemgang District',
        stateCode: '34',
      },
    ],
  },
  {
    name: 'Bolivia',
    code: 'BO',
    phoneCode: '591',
    currency: 'BOB',
    currencySymbol: 'Bs.',

    emoji: '🇧🇴',

    states: [
      {
        name: 'Beni Department',
        stateCode: 'B',
      },
      {
        name: 'Chuquisaca Department',
        stateCode: 'H',
      },
      {
        name: 'Cochabamba Department',
        stateCode: 'C',
      },
      {
        name: 'La Paz Department',
        stateCode: 'L',
      },
      {
        name: 'Oruro Department',
        stateCode: 'O',
      },
      {
        name: 'Pando Department',
        stateCode: 'N',
      },
      {
        name: 'Potosí Department',
        stateCode: 'P',
      },
      {
        name: 'Santa Cruz Department',
        stateCode: 'S',
      },
      {
        name: 'Tarija Department',
        stateCode: 'T',
      },
    ],
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    code: 'BQ',
    phoneCode: '599',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇧🇶',

    states: [],
  },
  {
    name: 'Bosnia and Herzegovina',
    code: 'BA',
    phoneCode: '387',
    currency: 'BAM',
    currencySymbol: 'KM',

    emoji: '🇧🇦',

    states: [
      {
        name: 'Bosnian Podrinje Canton',
        stateCode: '05',
      },
      {
        name: 'Brčko District',
        stateCode: 'BRC',
      },
      {
        name: 'Canton 10',
        stateCode: '10',
      },
      {
        name: 'Central Bosnia Canton',
        stateCode: '06',
      },
      {
        name: 'Federation of Bosnia and Herzegovina',
        stateCode: 'BIH',
      },
      {
        name: 'Herzegovina-Neretva Canton',
        stateCode: '07',
      },
      {
        name: 'Posavina Canton',
        stateCode: '02',
      },
      {
        name: 'Republika Srpska',
        stateCode: 'SRP',
      },
      {
        name: 'Sarajevo Canton',
        stateCode: '09',
      },
      {
        name: 'Tuzla Canton',
        stateCode: '03',
      },
      {
        name: 'Una-Sana Canton',
        stateCode: '01',
      },
      {
        name: 'West Herzegovina Canton',
        stateCode: '08',
      },
      {
        name: 'Zenica-Doboj Canton',
        stateCode: '04',
      },
    ],
  },
  {
    name: 'Botswana',
    code: 'BW',
    phoneCode: '267',
    currency: 'BWP',
    currencySymbol: 'P',

    emoji: '🇧🇼',

    states: [
      {
        name: 'Central District',
        stateCode: 'CE',
      },
      {
        name: 'Ghanzi District',
        stateCode: 'GH',
      },
      {
        name: 'Kgalagadi District',
        stateCode: 'KG',
      },
      {
        name: 'Kgatleng District',
        stateCode: 'KL',
      },
      {
        name: 'Kweneng District',
        stateCode: 'KW',
      },
      {
        name: 'Ngamiland',
        stateCode: 'NG',
      },
      {
        name: 'North-East District',
        stateCode: 'NE',
      },
      {
        name: 'North-West District',
        stateCode: 'NW',
      },
      {
        name: 'South-East District',
        stateCode: 'SE',
      },
      {
        name: 'Southern District',
        stateCode: 'SO',
      },
    ],
  },
  {
    name: 'Bouvet Island',
    code: 'BV',
    phoneCode: '0055',
    currency: 'NOK',
    currencySymbol: 'kr',

    emoji: '🇧🇻',

    states: [],
  },
  {
    name: 'Brazil',
    code: 'BR',
    phoneCode: '55',
    currency: 'BRL',
    currencySymbol: 'R$',

    emoji: '🇧🇷',

    states: [
      {
        name: 'Acre',
        stateCode: 'AC',
      },
      {
        name: 'Alagoas',
        stateCode: 'AL',
      },
      {
        name: 'Amapá',
        stateCode: 'AP',
      },
      {
        name: 'Amazonas',
        stateCode: 'AM',
      },
      {
        name: 'Bahia',
        stateCode: 'BA',
      },
      {
        name: 'Ceará',
        stateCode: 'CE',
      },
      {
        name: 'Espírito Santo',
        stateCode: 'ES',
      },
      {
        name: 'Federal District',
        stateCode: 'DF',
      },
      {
        name: 'Goiás',
        stateCode: 'GO',
      },
      {
        name: 'Maranhão',
        stateCode: 'MA',
      },
      {
        name: 'Mato Grosso',
        stateCode: 'MT',
      },
      {
        name: 'Mato Grosso do Sul',
        stateCode: 'MS',
      },
      {
        name: 'Minas Gerais',
        stateCode: 'MG',
      },
      {
        name: 'Pará',
        stateCode: 'PA',
      },
      {
        name: 'Paraíba',
        stateCode: 'PB',
      },
      {
        name: 'Paraná',
        stateCode: 'PR',
      },
      {
        name: 'Pernambuco',
        stateCode: 'PE',
      },
      {
        name: 'Piauí',
        stateCode: 'PI',
      },
      {
        name: 'Rio de Janeiro',
        stateCode: 'RJ',
      },
      {
        name: 'Rio Grande do Norte',
        stateCode: 'RN',
      },
      {
        name: 'Rio Grande do Sul',
        stateCode: 'RS',
      },
      {
        name: 'Rondônia',
        stateCode: 'RO',
      },
      {
        name: 'Roraima',
        stateCode: 'RR',
      },
      {
        name: 'Santa Catarina',
        stateCode: 'SC',
      },
      {
        name: 'São Paulo',
        stateCode: 'SP',
      },
      {
        name: 'Sergipe',
        stateCode: 'SE',
      },
      {
        name: 'Tocantins',
        stateCode: 'TO',
      },
    ],
  },
  {
    name: 'British Indian Ocean Territory',
    code: 'IO',
    phoneCode: '246',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇮🇴',

    states: [],
  },
  {
    name: 'Brunei',
    code: 'BN',
    phoneCode: '673',
    currency: 'BND',
    currencySymbol: 'B$',

    emoji: '🇧🇳',

    states: [
      {
        name: 'Belait District',
        stateCode: 'BE',
      },
      {
        name: 'Brunei-Muara District',
        stateCode: 'BM',
      },
      {
        name: 'Temburong District',
        stateCode: 'TE',
      },
      {
        name: 'Tutong District',
        stateCode: 'TU',
      },
    ],
  },
  {
    name: 'Bulgaria',
    code: 'BG',
    phoneCode: '359',
    currency: 'BGN',
    currencySymbol: 'Лв.',

    emoji: '🇧🇬',

    states: [
      {
        name: 'Blagoevgrad Province',
        stateCode: '01',
      },
      {
        name: 'Burgas Province',
        stateCode: '02',
      },
      {
        name: 'Dobrich Province',
        stateCode: '08',
      },
      {
        name: 'Gabrovo Province',
        stateCode: '07',
      },
      {
        name: 'Haskovo Province',
        stateCode: '26',
      },
      {
        name: 'Kardzhali Province',
        stateCode: '09',
      },
      {
        name: 'Kyustendil Province',
        stateCode: '10',
      },
      {
        name: 'Lovech Province',
        stateCode: '11',
      },
      {
        name: 'Montana Province',
        stateCode: '12',
      },
      {
        name: 'Pazardzhik Province',
        stateCode: '13',
      },
      {
        name: 'Pernik Province',
        stateCode: '14',
      },
      {
        name: 'Pleven Province',
        stateCode: '15',
      },
      {
        name: 'Plovdiv Province',
        stateCode: '16',
      },
      {
        name: 'Razgrad Province',
        stateCode: '17',
      },
      {
        name: 'Ruse Province',
        stateCode: '18',
      },
      {
        name: 'Shumen',
        stateCode: '27',
      },
      {
        name: 'Silistra Province',
        stateCode: '19',
      },
      {
        name: 'Sliven Province',
        stateCode: '20',
      },
      {
        name: 'Smolyan Province',
        stateCode: '21',
      },
      {
        name: 'Sofia City Province',
        stateCode: '22',
      },
      {
        name: 'Sofia Province',
        stateCode: '23',
      },
      {
        name: 'Stara Zagora Province',
        stateCode: '24',
      },
      {
        name: 'Targovishte Province',
        stateCode: '25',
      },
      {
        name: 'Varna Province',
        stateCode: '03',
      },
      {
        name: 'Veliko Tarnovo Province',
        stateCode: '04',
      },
      {
        name: 'Vidin Province',
        stateCode: '05',
      },
      {
        name: 'Vratsa Province',
        stateCode: '06',
      },
      {
        name: 'Yambol Province',
        stateCode: '28',
      },
    ],
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
    phoneCode: '226',
    currency: 'XOF',
    currencySymbol: 'CFA',

    emoji: '🇧🇫',

    states: [
      {
        name: 'Balé Province',
        stateCode: 'BAL',
      },
      {
        name: 'Bam Province',
        stateCode: 'BAM',
      },
      {
        name: 'Banwa Province',
        stateCode: 'BAN',
      },
      {
        name: 'Bazèga Province',
        stateCode: 'BAZ',
      },
      {
        name: 'Boucle du Mouhoun Region',
        stateCode: '01',
      },
      {
        name: 'Bougouriba Province',
        stateCode: 'BGR',
      },
      {
        name: 'Boulgou',
        stateCode: 'BLG',
      },
      {
        name: 'Cascades Region',
        stateCode: '02',
      },
      {
        name: 'Centre',
        stateCode: '03',
      },
      {
        name: 'Centre-Est Region',
        stateCode: '04',
      },
      {
        name: 'Centre-Nord Region',
        stateCode: '05',
      },
      {
        name: 'Centre-Ouest Region',
        stateCode: '06',
      },
      {
        name: 'Centre-Sud Region',
        stateCode: '07',
      },
      {
        name: 'Comoé Province',
        stateCode: 'COM',
      },
      {
        name: 'Est Region',
        stateCode: '08',
      },
      {
        name: 'Ganzourgou Province',
        stateCode: 'GAN',
      },
      {
        name: 'Gnagna Province',
        stateCode: 'GNA',
      },
      {
        name: 'Gourma Province',
        stateCode: 'GOU',
      },
      {
        name: 'Hauts-Bassins Region',
        stateCode: '09',
      },
      {
        name: 'Houet Province',
        stateCode: 'HOU',
      },
      {
        name: 'Ioba Province',
        stateCode: 'IOB',
      },
      {
        name: 'Kadiogo Province',
        stateCode: 'KAD',
      },
      {
        name: 'Kénédougou Province',
        stateCode: 'KEN',
      },
      {
        name: 'Komondjari Province',
        stateCode: 'KMD',
      },
      {
        name: 'Kompienga Province',
        stateCode: 'KMP',
      },
      {
        name: 'Kossi Province',
        stateCode: 'KOS',
      },
      {
        name: 'Koulpélogo Province',
        stateCode: 'KOP',
      },
      {
        name: 'Kouritenga Province',
        stateCode: 'KOT',
      },
      {
        name: 'Kourwéogo Province',
        stateCode: 'KOW',
      },
      {
        name: 'Léraba Province',
        stateCode: 'LER',
      },
      {
        name: 'Loroum Province',
        stateCode: 'LOR',
      },
      {
        name: 'Mouhoun',
        stateCode: 'MOU',
      },
      {
        name: 'Nahouri Province',
        stateCode: 'NAO',
      },
      {
        name: 'Namentenga Province',
        stateCode: 'NAM',
      },
      {
        name: 'Nayala Province',
        stateCode: 'NAY',
      },
      {
        name: 'Nord Region, Burkina Faso',
        stateCode: '10',
      },
      {
        name: 'Noumbiel Province',
        stateCode: 'NOU',
      },
      {
        name: 'Oubritenga Province',
        stateCode: 'OUB',
      },
      {
        name: 'Oudalan Province',
        stateCode: 'OUD',
      },
      {
        name: 'Passoré Province',
        stateCode: 'PAS',
      },
      {
        name: 'Plateau-Central Region',
        stateCode: '11',
      },
      {
        name: 'Poni Province',
        stateCode: 'PON',
      },
      {
        name: 'Sahel Region',
        stateCode: '12',
      },
      {
        name: 'Sanguié Province',
        stateCode: 'SNG',
      },
      {
        name: 'Sanmatenga Province',
        stateCode: 'SMT',
      },
      {
        name: 'Séno Province',
        stateCode: 'SEN',
      },
      {
        name: 'Sissili Province',
        stateCode: 'SIS',
      },
      {
        name: 'Soum Province',
        stateCode: 'SOM',
      },
      {
        name: 'Sourou Province',
        stateCode: 'SOR',
      },
      {
        name: 'Sud-Ouest Region',
        stateCode: '13',
      },
      {
        name: 'Tapoa Province',
        stateCode: 'TAP',
      },
      {
        name: 'Tuy Province',
        stateCode: 'TUI',
      },
      {
        name: 'Yagha Province',
        stateCode: 'YAG',
      },
      {
        name: 'Yatenga Province',
        stateCode: 'YAT',
      },
      {
        name: 'Ziro Province',
        stateCode: 'ZIR',
      },
      {
        name: 'Zondoma Province',
        stateCode: 'ZON',
      },
      {
        name: 'Zoundwéogo Province',
        stateCode: 'ZOU',
      },
    ],
  },
  {
    name: 'Burundi',
    code: 'BI',
    phoneCode: '257',
    currency: 'BIF',
    currencySymbol: 'FBu',

    emoji: '🇧🇮',

    states: [
      {
        name: 'Bubanza Province',
        stateCode: 'BB',
      },
      {
        name: 'Bujumbura Mairie Province',
        stateCode: 'BM',
      },
      {
        name: 'Bujumbura Rural Province',
        stateCode: 'BL',
      },
      {
        name: 'Bururi Province',
        stateCode: 'BR',
      },
      {
        name: 'Cankuzo Province',
        stateCode: 'CA',
      },
      {
        name: 'Cibitoke Province',
        stateCode: 'CI',
      },
      {
        name: 'Gitega Province',
        stateCode: 'GI',
      },
      {
        name: 'Karuzi Province',
        stateCode: 'KR',
      },
      {
        name: 'Kayanza Province',
        stateCode: 'KY',
      },
      {
        name: 'Kirundo Province',
        stateCode: 'KI',
      },
      {
        name: 'Makamba Province',
        stateCode: 'MA',
      },
      {
        name: 'Muramvya Province',
        stateCode: 'MU',
      },
      {
        name: 'Muyinga Province',
        stateCode: 'MY',
      },
      {
        name: 'Mwaro Province',
        stateCode: 'MW',
      },
      {
        name: 'Ngozi Province',
        stateCode: 'NG',
      },
      {
        name: 'Rumonge Province',
        stateCode: 'RM',
      },
      {
        name: 'Rutana Province',
        stateCode: 'RT',
      },
      {
        name: 'Ruyigi Province',
        stateCode: 'RY',
      },
    ],
  },
  {
    name: 'Cambodia',
    code: 'KH',
    phoneCode: '855',
    currency: 'KHR',
    currencySymbol: 'KHR',

    emoji: '🇰🇭',

    states: [
      {
        name: 'Banteay Meanchey Province',
        stateCode: '1',
      },
      {
        name: 'Battambang Province',
        stateCode: '2',
      },
      {
        name: 'Kampong Cham Province',
        stateCode: '3',
      },
      {
        name: 'Kampong Chhnang Province',
        stateCode: '4',
      },
      {
        name: 'Kampong Speu Province',
        stateCode: '5',
      },
      {
        name: 'Kampot Province',
        stateCode: '7',
      },
      {
        name: 'Kandal Province',
        stateCode: '8',
      },
      {
        name: 'Kep Province',
        stateCode: '23',
      },
      {
        name: 'Koh Kong Province',
        stateCode: '9',
      },
      {
        name: 'Kratié Province',
        stateCode: '10',
      },
      {
        name: 'Mondulkiri Province',
        stateCode: '11',
      },
      {
        name: 'Oddar Meanchey Province',
        stateCode: '22',
      },
      {
        name: 'Pailin Province',
        stateCode: '24',
      },
      {
        name: 'Phnom Penh',
        stateCode: '12',
      },
      {
        name: 'Preah Vihear Province',
        stateCode: '13',
      },
      {
        name: 'Prey Veng Province',
        stateCode: '14',
      },
      {
        name: 'Pursat Province',
        stateCode: '15',
      },
      {
        name: 'Ratanakiri Province',
        stateCode: '16',
      },
      {
        name: 'Siem Reap Province',
        stateCode: '17',
      },
      {
        name: 'Sihanoukville Province',
        stateCode: '18',
      },
      {
        name: 'Stung Treng Province',
        stateCode: '19',
      },
      {
        name: 'Svay Rieng Province',
        stateCode: '20',
      },
      {
        name: 'Takéo Province',
        stateCode: '21',
      },
    ],
  },
  {
    name: 'Cameroon',
    code: 'CM',
    phoneCode: '237',
    currency: 'XAF',
    currencySymbol: 'FCFA',

    emoji: '🇨🇲',

    states: [
      {
        name: 'Adamawa',
        stateCode: 'AD',
      },
      {
        name: 'Centre',
        stateCode: 'CE',
      },
      {
        name: 'East',
        stateCode: 'ES',
      },
      {
        name: 'Far North',
        stateCode: 'EN',
      },
      {
        name: 'Littoral',
        stateCode: 'LT',
      },
      {
        name: 'North',
        stateCode: 'NO',
      },
      {
        name: 'Northwest',
        stateCode: 'NW',
      },
      {
        name: 'South',
        stateCode: 'SU',
      },
      {
        name: 'Southwest',
        stateCode: 'SW',
      },
      {
        name: 'West',
        stateCode: 'OU',
      },
    ],
  },
  {
    name: 'Canada',
    code: 'CA',
    phoneCode: '1',
    currency: 'CAD',
    currencySymbol: '$',

    emoji: '🇨🇦',

    states: [
      {
        name: 'Alberta',
        stateCode: 'AB',
      },
      {
        name: 'British Columbia',
        stateCode: 'BC',
      },
      {
        name: 'Manitoba',
        stateCode: 'MB',
      },
      {
        name: 'New Brunswick',
        stateCode: 'NB',
      },
      {
        name: 'Newfoundland and Labrador',
        stateCode: 'NL',
      },
      {
        name: 'Northwest Territories',
        stateCode: 'NT',
      },
      {
        name: 'Nova Scotia',
        stateCode: 'NS',
      },
      {
        name: 'Nunavut',
        stateCode: 'NU',
      },
      {
        name: 'Ontario',
        stateCode: 'ON',
      },
      {
        name: 'Prince Edward Island',
        stateCode: 'PE',
      },
      {
        name: 'Quebec',
        stateCode: 'QC',
      },
      {
        name: 'Saskatchewan',
        stateCode: 'SK',
      },
      {
        name: 'Yukon',
        stateCode: 'YT',
      },
    ],
  },
  {
    name: 'Cape Verde',
    code: 'CV',
    phoneCode: '238',
    currency: 'CVE',
    currencySymbol: '$',

    emoji: '🇨🇻',

    states: [
      {
        name: 'Barlavento Islands',
        stateCode: 'B',
      },
      {
        name: 'Boa Vista',
        stateCode: 'BV',
      },
      {
        name: 'Brava',
        stateCode: 'BR',
      },
      {
        name: 'Maio Municipality',
        stateCode: 'MA',
      },
      {
        name: 'Mosteiros',
        stateCode: 'MO',
      },
      {
        name: 'Paul',
        stateCode: 'PA',
      },
      {
        name: 'Porto Novo',
        stateCode: 'PN',
      },
      {
        name: 'Praia',
        stateCode: 'PR',
      },
      {
        name: 'Ribeira Brava Municipality',
        stateCode: 'RB',
      },
      {
        name: 'Ribeira Grande',
        stateCode: 'RG',
      },
      {
        name: 'Ribeira Grande de Santiago',
        stateCode: 'RS',
      },
      {
        name: 'Sal',
        stateCode: 'SL',
      },
      {
        name: 'Santa Catarina',
        stateCode: 'CA',
      },
      {
        name: 'Santa Catarina do Fogo',
        stateCode: 'CF',
      },
      {
        name: 'Santa Cruz',
        stateCode: 'CR',
      },
      {
        name: 'São Domingos',
        stateCode: 'SD',
      },
      {
        name: 'São Filipe',
        stateCode: 'SF',
      },
      {
        name: 'São Lourenço dos Órgãos',
        stateCode: 'SO',
      },
      {
        name: 'São Miguel',
        stateCode: 'SM',
      },
      {
        name: 'São Vicente',
        stateCode: 'SV',
      },
      {
        name: 'Sotavento Islands',
        stateCode: 'S',
      },
      {
        name: 'Tarrafal',
        stateCode: 'TA',
      },
      {
        name: 'Tarrafal de São Nicolau',
        stateCode: 'TS',
      },
    ],
  },
  {
    name: 'Cayman Islands',
    code: 'KY',
    phoneCode: '+1-345',
    currency: 'KYD',
    currencySymbol: '$',

    emoji: '🇰🇾',

    states: [],
  },
  {
    name: 'Central African Republic',
    code: 'CF',
    phoneCode: '236',
    currency: 'XAF',
    currencySymbol: 'FCFA',

    emoji: '🇨🇫',

    states: [
      {
        name: 'Bamingui-Bangoran Prefecture',
        stateCode: 'BB',
      },
      {
        name: 'Bangui',
        stateCode: 'BGF',
      },
      {
        name: 'Basse-Kotto Prefecture',
        stateCode: 'BK',
      },
      {
        name: 'Haut-Mbomou Prefecture',
        stateCode: 'HM',
      },
      {
        name: 'Haute-Kotto Prefecture',
        stateCode: 'HK',
      },
      {
        name: 'Kémo Prefecture',
        stateCode: 'KG',
      },
      {
        name: 'Lobaye Prefecture',
        stateCode: 'LB',
      },
      {
        name: 'Mambéré-Kadéï',
        stateCode: 'HS',
      },
      {
        name: 'Mbomou Prefecture',
        stateCode: 'MB',
      },
      {
        name: 'Nana-Grébizi Economic Prefecture',
        stateCode: 'KB',
      },
      {
        name: 'Nana-Mambéré Prefecture',
        stateCode: 'NM',
      },
      {
        name: "Ombella-M'Poko Prefecture",
        stateCode: 'MP',
      },
      {
        name: 'Ouaka Prefecture',
        stateCode: 'UK',
      },
      {
        name: 'Ouham Prefecture',
        stateCode: 'AC',
      },
      {
        name: 'Ouham-Pendé Prefecture',
        stateCode: 'OP',
      },
      {
        name: 'Sangha-Mbaéré',
        stateCode: 'SE',
      },
      {
        name: 'Vakaga Prefecture',
        stateCode: 'VK',
      },
    ],
  },
  {
    name: 'Chad',
    code: 'TD',
    phoneCode: '235',
    currency: 'XAF',
    currencySymbol: 'FCFA',

    emoji: '🇹🇩',

    states: [
      {
        name: 'Bahr el Gazel',
        stateCode: 'BG',
      },
      {
        name: 'Batha Region',
        stateCode: 'BA',
      },
      {
        name: 'Borkou',
        stateCode: 'BO',
      },
      {
        name: 'Ennedi Region',
        stateCode: 'EN',
      },
      {
        name: 'Ennedi-Est',
        stateCode: 'EE',
      },
      {
        name: 'Ennedi-Ouest',
        stateCode: 'EO',
      },
      {
        name: 'Guéra Region',
        stateCode: 'GR',
      },
      {
        name: 'Hadjer-Lamis',
        stateCode: 'HL',
      },
      {
        name: 'Kanem Region',
        stateCode: 'KA',
      },
      {
        name: 'Lac Region',
        stateCode: 'LC',
      },
      {
        name: 'Logone Occidental Region',
        stateCode: 'LO',
      },
      {
        name: 'Logone Oriental Region',
        stateCode: 'LR',
      },
      {
        name: 'Mandoul Region',
        stateCode: 'MA',
      },
      {
        name: 'Mayo-Kebbi Est Region',
        stateCode: 'ME',
      },
      {
        name: 'Mayo-Kebbi Ouest Region',
        stateCode: 'MO',
      },
      {
        name: 'Moyen-Chari Region',
        stateCode: 'MC',
      },
      {
        name: "N'Djamena",
        stateCode: 'ND',
      },
      {
        name: 'Ouaddaï Region',
        stateCode: 'OD',
      },
      {
        name: 'Salamat Region',
        stateCode: 'SA',
      },
      {
        name: 'Sila Region',
        stateCode: 'SI',
      },
      {
        name: 'Tandjilé Region',
        stateCode: 'TA',
      },
      {
        name: 'Tibesti Region',
        stateCode: 'TI',
      },
      {
        name: 'Wadi Fira Region',
        stateCode: 'WF',
      },
    ],
  },
  {
    name: 'Chile',
    code: 'CL',
    phoneCode: '56',
    currency: 'CLP',
    currencySymbol: '$',

    emoji: '🇨🇱',

    states: [
      {
        name: 'Antofagasta Region',
        stateCode: 'AN',
      },
      {
        name: 'Araucanía Region',
        stateCode: 'AR',
      },
      {
        name: 'Arica y Parinacota Region',
        stateCode: 'AP',
      },
      {
        name: 'Atacama Region',
        stateCode: 'AT',
      },
      {
        name: 'Aysén Region',
        stateCode: 'AI',
      },
      {
        name: 'Bío Bío Region',
        stateCode: 'BI',
      },
      {
        name: 'Coquimbo Region',
        stateCode: 'CO',
      },
      {
        name: 'Los Lagos Region',
        stateCode: 'LL',
      },
      {
        name: 'Los Ríos Region',
        stateCode: 'LR',
      },
      {
        name: 'Magellan and the Chilean Antarctic Region',
        stateCode: 'MA',
      },
      {
        name: 'Maule Region',
        stateCode: 'ML',
      },
      {
        name: 'Ñuble Region',
        stateCode: 'NB',
      },
      {
        name: "O'Higgins",
        stateCode: 'LI',
      },
      {
        name: 'Santiago Metropolitan Region',
        stateCode: 'RM',
      },
      {
        name: 'Tarapacá Region',
        stateCode: 'TA',
      },
      {
        name: 'Valparaíso',
        stateCode: 'VS',
      },
    ],
  },
  {
    name: 'China',
    code: 'CN',
    phoneCode: '86',
    currency: 'CNY',
    currencySymbol: '¥',

    emoji: '🇨🇳',

    states: [
      {
        name: 'Anhui',
        stateCode: 'AH',
      },
      {
        name: 'Beijing',
        stateCode: 'BJ',
      },
      {
        name: 'Chongqing',
        stateCode: 'CQ',
      },
      {
        name: 'Fujian',
        stateCode: 'FJ',
      },
      {
        name: 'Gansu',
        stateCode: 'GS',
      },
      {
        name: 'Guangdong',
        stateCode: 'GD',
      },
      {
        name: 'Guangxi Zhuang Autonomous Region',
        stateCode: 'GX',
      },
      {
        name: 'Guizhou',
        stateCode: 'GZ',
      },
      {
        name: 'Hainan',
        stateCode: 'HI',
      },
      {
        name: 'Hebei',
        stateCode: 'HE',
      },
      {
        name: 'Heilongjiang',
        stateCode: 'HL',
      },
      {
        name: 'Henan',
        stateCode: 'HA',
      },
      {
        name: 'Hong Kong',
        stateCode: 'HK',
      },
      {
        name: 'Hubei',
        stateCode: 'HB',
      },
      {
        name: 'Hunan',
        stateCode: 'HN',
      },
      {
        name: 'Inner Mongolia',
        stateCode: 'NM',
      },
      {
        name: 'Jiangsu',
        stateCode: 'JS',
      },
      {
        name: 'Jiangxi',
        stateCode: 'JX',
      },
      {
        name: 'Jilin',
        stateCode: 'JL',
      },
      {
        name: 'Keelung',
        stateCode: 'TW-KEE',
      },
      {
        name: 'Liaoning',
        stateCode: 'LN',
      },
      {
        name: 'Macau',
        stateCode: 'MO',
      },
      {
        name: 'Ningxia Hui Autonomous Region',
        stateCode: 'NX',
      },
      {
        name: 'Qinghai',
        stateCode: 'QH',
      },
      {
        name: 'Shaanxi',
        stateCode: 'SN',
      },
      {
        name: 'Shandong',
        stateCode: 'SD',
      },
      {
        name: 'Shanghai',
        stateCode: 'SH',
      },
      {
        name: 'Shanxi',
        stateCode: 'SX',
      },
      {
        name: 'Sichuan',
        stateCode: 'SC',
      },
      {
        name: "Taiwan Province, People's Republic of China",
        stateCode: 'TW',
      },
      {
        name: 'Tibet Autonomous Region',
        stateCode: 'XZ',
      },
      {
        name: 'Xinjiang',
        stateCode: 'XJ',
      },
      {
        name: 'Yunnan',
        stateCode: 'YN',
      },
      {
        name: 'Zhejiang',
        stateCode: 'ZJ',
      },
    ],
  },
  {
    name: 'Christmas Island',
    code: 'CX',
    phoneCode: '61',
    currency: 'AUD',
    currencySymbol: '$',

    emoji: '🇨🇽',

    states: [],
  },
  {
    name: 'Cocos (Keeling) Islands',
    code: 'CC',
    phoneCode: '61',
    currency: 'AUD',
    currencySymbol: '$',

    emoji: '🇨🇨',

    states: [],
  },
  {
    name: 'Colombia',
    code: 'CO',
    phoneCode: '57',
    currency: 'COP',
    currencySymbol: '$',

    emoji: '🇨🇴',

    states: [
      {
        name: 'Amazonas Department',
        stateCode: 'AMA',
      },
      {
        name: 'Antioquia Department',
        stateCode: 'ANT',
      },
      {
        name: 'Arauca Department',
        stateCode: 'ARA',
      },
      {
        name: 'Archipelago of Saint Andréws, Providence and Saint Catalina',
        stateCode: 'SAP',
      },
      {
        name: 'Atlántico Department',
        stateCode: 'ATL',
      },
      {
        name: 'Bolívar Department',
        stateCode: 'BOL',
      },
      {
        name: 'Boyacá Department',
        stateCode: 'BOY',
      },
      {
        name: 'Caldas Department',
        stateCode: 'CAL',
      },
      {
        name: 'Caquetá Department',
        stateCode: 'CAQ',
      },
      {
        name: 'Casanare Department',
        stateCode: 'CAS',
      },
      {
        name: 'Cauca Department',
        stateCode: 'CAU',
      },
      {
        name: 'Cesar Department',
        stateCode: 'CES',
      },
      {
        name: 'Chocó Department',
        stateCode: 'CHO',
      },
      {
        name: 'Córdoba Department',
        stateCode: 'COR',
      },
      {
        name: 'Cundinamarca Department',
        stateCode: 'CUN',
      },
      {
        name: 'Guainía Department',
        stateCode: 'GUA',
      },
      {
        name: 'Guaviare Department',
        stateCode: 'GUV',
      },
      {
        name: 'Huila Department',
        stateCode: 'HUI',
      },
      {
        name: 'La Guajira Department',
        stateCode: 'LAG',
      },
      {
        name: 'Magdalena Department',
        stateCode: 'MAG',
      },
      {
        name: 'Meta',
        stateCode: 'MET',
      },
      {
        name: 'Nariño Department',
        stateCode: 'NAR',
      },
      {
        name: 'Norte de Santander Department',
        stateCode: 'NSA',
      },
      {
        name: 'Putumayo Department',
        stateCode: 'PUT',
      },
      {
        name: 'Quindío Department',
        stateCode: 'QUI',
      },
      {
        name: 'Risaralda Department',
        stateCode: 'RIS',
      },
      {
        name: 'Santander Department',
        stateCode: 'SAN',
      },
      {
        name: 'Sucre Department',
        stateCode: 'SUC',
      },
      {
        name: 'Tolima Department',
        stateCode: 'TOL',
      },
      {
        name: 'Valle del Cauca Department',
        stateCode: 'VAC',
      },
      {
        name: 'Vaupés Department',
        stateCode: 'VAU',
      },
      {
        name: 'Vichada Department',
        stateCode: 'VID',
      },
    ],
  },
  {
    name: 'Comoros',
    code: 'KM',
    phoneCode: '269',
    currency: 'KMF',
    currencySymbol: 'CF',

    emoji: '🇰🇲',

    states: [
      {
        name: 'Anjouan',
        stateCode: 'A',
      },
      {
        name: 'Grande Comore',
        stateCode: 'G',
      },
      {
        name: 'Mohéli',
        stateCode: 'M',
      },
    ],
  },
  {
    name: 'Congo',
    code: 'CG',
    phoneCode: '242',
    currency: 'XAF',
    currencySymbol: 'FC',

    emoji: '🇨🇬',

    states: [
      {
        name: 'Bouenza Department',
        stateCode: '11',
      },
      {
        name: 'Brazzaville',
        stateCode: 'BZV',
      },
      {
        name: 'Cuvette Department',
        stateCode: '8',
      },
      {
        name: 'Cuvette-Ouest Department',
        stateCode: '15',
      },
      {
        name: 'Kouilou Department',
        stateCode: '5',
      },
      {
        name: 'Lékoumou Department',
        stateCode: '2',
      },
      {
        name: 'Likouala Department',
        stateCode: '7',
      },
      {
        name: 'Niari Department',
        stateCode: '9',
      },
      {
        name: 'Plateaux Department',
        stateCode: '14',
      },
      {
        name: 'Pointe-Noire',
        stateCode: '16',
      },
      {
        name: 'Pool Department',
        stateCode: '12',
      },
      {
        name: 'Sangha Department',
        stateCode: '13',
      },
    ],
  },
  {
    name: 'Congo The Democratic Republic Of The',
    code: 'CD',
    phoneCode: '243',
    currency: 'CDF',
    currencySymbol: 'FC',

    emoji: '🇨🇩',

    states: [
      {
        name: 'Bandundu Province',
        stateCode: 'BN',
      },
      {
        name: 'Bas-Congo province',
        stateCode: 'BC',
      },
      {
        name: 'Bas-Uele',
        stateCode: 'BU',
      },
      {
        name: 'Équateur',
        stateCode: 'EQ',
      },
      {
        name: 'Haut-Katanga Province',
        stateCode: 'HK',
      },
      {
        name: 'Haut-Lomami District',
        stateCode: 'HL',
      },
      {
        name: 'Haut-Uele',
        stateCode: 'HU',
      },
      {
        name: 'Ituri Interim Administration',
        stateCode: 'IT',
      },
      {
        name: 'Kasaï District',
        stateCode: 'KS',
      },
      {
        name: 'Kasaï-Occidental',
        stateCode: 'KW',
      },
      {
        name: 'Kasaï-Oriental',
        stateCode: 'KE',
      },
      {
        name: 'Katanga Province',
        stateCode: 'KA',
      },
      {
        name: 'Kinshasa',
        stateCode: 'KN',
      },
      {
        name: 'Kwango District',
        stateCode: 'KG',
      },
      {
        name: 'Kwilu District',
        stateCode: 'KL',
      },
      {
        name: 'Lomami Province',
        stateCode: 'LO',
      },
      {
        name: 'Mai-Ndombe Province',
        stateCode: 'MN',
      },
      {
        name: 'Maniema',
        stateCode: 'MA',
      },
      {
        name: 'Mongala District',
        stateCode: 'MO',
      },
      {
        name: 'Nord-Ubangi District',
        stateCode: 'NU',
      },
      {
        name: 'North Kivu',
        stateCode: 'NK',
      },
      {
        name: 'Orientale Province',
        stateCode: 'OR',
      },
      {
        name: 'Sankuru District',
        stateCode: 'SA',
      },
      {
        name: 'South Kivu',
        stateCode: 'SK',
      },
      {
        name: 'Sud-Ubangi',
        stateCode: 'SU',
      },
      {
        name: 'Tanganyika Province',
        stateCode: 'TA',
      },
      {
        name: 'Tshopo District',
        stateCode: 'TO',
      },
      {
        name: 'Tshuapa District',
        stateCode: 'TU',
      },
    ],
  },
  {
    name: 'Cook Islands',
    code: 'CK',
    phoneCode: '682',
    currency: 'NZD',
    currencySymbol: '$',

    emoji: '🇨🇰',

    states: [],
  },
  {
    name: 'Costa Rica',
    code: 'CR',
    phoneCode: '506',
    currency: 'CRC',
    currencySymbol: '₡',

    emoji: '🇨🇷',

    states: [
      {
        name: 'Alajuela Province',
        stateCode: 'A',
      },
      {
        name: 'Guanacaste Province',
        stateCode: 'G',
      },
      {
        name: 'Heredia Province',
        stateCode: 'H',
      },
      {
        name: 'Limón Province',
        stateCode: 'L',
      },
      {
        name: 'Provincia de Cartago',
        stateCode: 'C',
      },
      {
        name: 'Puntarenas Province',
        stateCode: 'P',
      },
      {
        name: 'San José Province',
        stateCode: 'SJ',
      },
    ],
  },
  {
    name: "Cote D'Ivoire (Ivory Coast)",
    code: 'CI',
    phoneCode: '225',
    currency: 'XOF',
    currencySymbol: 'CFA',

    emoji: '🇨🇮',

    states: [
      {
        name: 'Abidjan',
        stateCode: 'AB',
      },
      {
        name: 'Agnéby',
        stateCode: '16',
      },
      {
        name: 'Bafing Region',
        stateCode: '17',
      },
      {
        name: 'Bas-Sassandra District',
        stateCode: 'BS',
      },
      {
        name: 'Bas-Sassandra Region',
        stateCode: '09',
      },
      {
        name: 'Comoé District',
        stateCode: 'CM',
      },
      {
        name: 'Denguélé District',
        stateCode: 'DN',
      },
      {
        name: 'Denguélé Region',
        stateCode: '10',
      },
      {
        name: 'Dix-Huit Montagnes',
        stateCode: '06',
      },
      {
        name: 'Fromager',
        stateCode: '18',
      },
      {
        name: 'Gôh-Djiboua District',
        stateCode: 'GD',
      },
      {
        name: 'Haut-Sassandra',
        stateCode: '02',
      },
      {
        name: 'Lacs District',
        stateCode: 'LC',
      },
      {
        name: 'Lacs Region',
        stateCode: '07',
      },
      {
        name: 'Lagunes District',
        stateCode: 'LG',
      },
      {
        name: 'Lagunes region',
        stateCode: '01',
      },
      {
        name: 'Marahoué Region',
        stateCode: '12',
      },
      {
        name: 'Montagnes District',
        stateCode: 'MG',
      },
      {
        name: 'Moyen-Cavally',
        stateCode: '19',
      },
      {
        name: 'Moyen-Comoé',
        stateCode: '05',
      },
      {
        name: "N'zi-Comoé",
        stateCode: '11',
      },
      {
        name: 'Sassandra-Marahoué District',
        stateCode: 'SM',
      },
      {
        name: 'Savanes Region',
        stateCode: '03',
      },
      {
        name: 'Sud-Bandama',
        stateCode: '15',
      },
      {
        name: 'Sud-Comoé',
        stateCode: '13',
      },
      {
        name: 'Vallée du Bandama District',
        stateCode: 'VB',
      },
      {
        name: 'Vallée du Bandama Region',
        stateCode: '04',
      },
      {
        name: 'Woroba District',
        stateCode: 'WR',
      },
      {
        name: 'Worodougou',
        stateCode: '14',
      },
      {
        name: 'Yamoussoukro',
        stateCode: 'YM',
      },
      {
        name: 'Zanzan Region',
        stateCode: 'ZZ',
      },
    ],
  },
  {
    name: 'Croatia (Hrvatska)',
    code: 'HR',
    phoneCode: '385',
    currency: 'HRK',
    currencySymbol: 'kn',

    emoji: '🇭🇷',

    states: [
      {
        name: 'Bjelovar-Bilogora County',
        stateCode: '07',
      },
      {
        name: 'Brod-Posavina County',
        stateCode: '12',
      },
      {
        name: 'Dubrovnik-Neretva County',
        stateCode: '19',
      },
      {
        name: 'Istria County',
        stateCode: '18',
      },
      {
        name: 'Koprivnica-Križevci County',
        stateCode: '06',
      },
      {
        name: 'Krapina-Zagorje County',
        stateCode: '02',
      },
      {
        name: 'Lika-Senj County',
        stateCode: '09',
      },
      {
        name: 'Međimurje County',
        stateCode: '20',
      },
      {
        name: 'Osijek-Baranja County',
        stateCode: '14',
      },
      {
        name: 'Požega-Slavonia County',
        stateCode: '11',
      },
      {
        name: 'Primorje-Gorski Kotar County',
        stateCode: '08',
      },
      {
        name: 'Šibenik-Knin County',
        stateCode: '15',
      },
      {
        name: 'Sisak-Moslavina County',
        stateCode: '03',
      },
      {
        name: 'Split-Dalmatia County',
        stateCode: '17',
      },
      {
        name: 'Varaždin County',
        stateCode: '05',
      },
      {
        name: 'Virovitica-Podravina County',
        stateCode: '10',
      },
      {
        name: 'Vukovar-Syrmia County',
        stateCode: '16',
      },
      {
        name: 'Zadar County',
        stateCode: '13',
      },
      {
        name: 'Zagreb',
        stateCode: '21',
      },
      {
        name: 'Zagreb County',
        stateCode: '01',
      },
    ],
  },
  {
    name: 'Cuba',
    code: 'CU',
    phoneCode: '53',
    currency: 'CUP',
    currencySymbol: '$',

    emoji: '🇨🇺',

    states: [
      {
        name: 'Artemisa Province',
        stateCode: '15',
      },
      {
        name: 'Camagüey Province',
        stateCode: '09',
      },
      {
        name: 'Ciego de Ávila Province',
        stateCode: '08',
      },
      {
        name: 'Cienfuegos Province',
        stateCode: '06',
      },
      {
        name: 'Granma Province',
        stateCode: '12',
      },
      {
        name: 'Guantánamo Province',
        stateCode: '14',
      },
      {
        name: 'Havana Province',
        stateCode: '03',
      },
      {
        name: 'Holguín Province',
        stateCode: '11',
      },
      {
        name: 'Isla de la Juventud',
        stateCode: '99',
      },
      {
        name: 'Las Tunas Province',
        stateCode: '10',
      },
      {
        name: 'Matanzas Province',
        stateCode: '04',
      },
      {
        name: 'Mayabeque Province',
        stateCode: '16',
      },
      {
        name: 'Pinar del Río Province',
        stateCode: '01',
      },
      {
        name: 'Sancti Spíritus Province',
        stateCode: '07',
      },
      {
        name: 'Santiago de Cuba Province',
        stateCode: '13',
      },
      {
        name: 'Villa Clara Province',
        stateCode: '05',
      },
    ],
  },
  {
    name: 'Curaçao',
    code: 'CW',
    phoneCode: '599',
    currency: 'ANG',
    currencySymbol: 'ƒ',

    emoji: '🇨🇼',

    states: [],
  },
  {
    name: 'Cyprus',
    code: 'CY',
    phoneCode: '357',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇨🇾',

    states: [
      {
        name: 'Famagusta District',
        stateCode: '04',
      },
      {
        name: 'Kyrenia District',
        stateCode: '06',
      },
      {
        name: 'Larnaca District',
        stateCode: '03',
      },
      {
        name: 'Limassol District',
        stateCode: '02',
      },
      {
        name: 'Nicosia District',
        stateCode: '01',
      },
      {
        name: 'Paphos District',
        stateCode: '05',
      },
    ],
  },
  {
    name: 'Czech Republic',
    code: 'CZ',
    phoneCode: '420',
    currency: 'CZK',
    currencySymbol: 'Kč',

    emoji: '🇨🇿',

    states: [
      {
        name: 'Benešov District',
        stateCode: '201',
      },
      {
        name: 'Beroun District',
        stateCode: '202',
      },
      {
        name: 'Blansko District',
        stateCode: '641',
      },
      {
        name: 'Břeclav District',
        stateCode: '644',
      },
      {
        name: 'Brno-City District',
        stateCode: '642',
      },
      {
        name: 'Brno-Country District',
        stateCode: '643',
      },
      {
        name: 'Bruntál District',
        stateCode: '801',
      },
      {
        name: 'Central Bohemian Region',
        stateCode: '20',
      },
      {
        name: 'Česká Lípa District',
        stateCode: '511',
      },
      {
        name: 'České Budějovice District',
        stateCode: '311',
      },
      {
        name: 'Český Krumlov District',
        stateCode: '312',
      },
      {
        name: 'Cheb District',
        stateCode: '411',
      },
      {
        name: 'Chomutov District',
        stateCode: '422',
      },
      {
        name: 'Chrudim District',
        stateCode: '531',
      },
      {
        name: 'Děčín District',
        stateCode: '421',
      },
      {
        name: 'Domažlice District',
        stateCode: '321',
      },
      {
        name: 'Frýdek-Místek District',
        stateCode: '802',
      },
      {
        name: 'Havlíčkův Brod District',
        stateCode: '631',
      },
      {
        name: 'Hodonín District',
        stateCode: '645',
      },
      {
        name: 'Horní Počernice',
        stateCode: '120',
      },
      {
        name: 'Hradec Králové District',
        stateCode: '521',
      },
      {
        name: 'Hradec Králové Region',
        stateCode: '52',
      },
      {
        name: 'Jablonec nad Nisou District',
        stateCode: '512',
      },
      {
        name: 'Jeseník District',
        stateCode: '711',
      },
      {
        name: 'Jičín District',
        stateCode: '522',
      },
      {
        name: 'Jihlava District',
        stateCode: '632',
      },
      {
        name: 'Jindřichův Hradec District',
        stateCode: '313',
      },
      {
        name: 'Karlovy Vary District',
        stateCode: '412',
      },
      {
        name: 'Karlovy Vary Region',
        stateCode: '41',
      },
      {
        name: 'Karviná District',
        stateCode: '803',
      },
      {
        name: 'Kladno District',
        stateCode: '203',
      },
      {
        name: 'Klatovy District',
        stateCode: '322',
      },
      {
        name: 'Kolín District',
        stateCode: '204',
      },
      {
        name: 'Kroměříž District',
        stateCode: '721',
      },
      {
        name: 'Liberec District',
        stateCode: '513',
      },
      {
        name: 'Liberec Region',
        stateCode: '51',
      },
      {
        name: 'Litoměřice District',
        stateCode: '423',
      },
      {
        name: 'Louny District',
        stateCode: '424',
      },
      {
        name: 'Mělník District',
        stateCode: '206',
      },
      {
        name: 'Mladá Boleslav District',
        stateCode: '207',
      },
      {
        name: 'Moravian-Silesian Region',
        stateCode: '80',
      },
      {
        name: 'Most District',
        stateCode: '425',
      },
      {
        name: 'Náchod District',
        stateCode: '523',
      },
      {
        name: 'Nový Jičín District',
        stateCode: '804',
      },
      {
        name: 'Nymburk District',
        stateCode: '208',
      },
      {
        name: 'Olomouc District',
        stateCode: '712',
      },
      {
        name: 'Olomouc Region',
        stateCode: '71',
      },
      {
        name: 'Opava District',
        stateCode: '805',
      },
      {
        name: 'Ostrava-City District',
        stateCode: '806',
      },
      {
        name: 'Pardubice District',
        stateCode: '532',
      },
      {
        name: 'Pardubice Region',
        stateCode: '53',
      },
      {
        name: 'Pelhřimov District',
        stateCode: '633',
      },
      {
        name: 'Písek District',
        stateCode: '314',
      },
      {
        name: 'Plzeň Region',
        stateCode: '32',
      },
      {
        name: 'Plzeň-City District',
        stateCode: '323',
      },
      {
        name: 'Plzeň-North District',
        stateCode: '325',
      },
      {
        name: 'Plzeň-South District',
        stateCode: '324',
      },
      {
        name: 'Prachatice District',
        stateCode: '315',
      },
      {
        name: 'Prague',
        stateCode: '10',
      },
      {
        name: 'Prague 1',
        stateCode: '101',
      },
      {
        name: 'Prague 10',
        stateCode: '110',
      },
      {
        name: 'Prague 11',
        stateCode: '111',
      },
      {
        name: 'Prague 12',
        stateCode: '112',
      },
      {
        name: 'Prague 13',
        stateCode: '113',
      },
      {
        name: 'Prague 14',
        stateCode: '114',
      },
      {
        name: 'Prague 15',
        stateCode: '115',
      },
      {
        name: 'Prague 16',
        stateCode: '116',
      },
      {
        name: 'Prague 2',
        stateCode: '102',
      },
      {
        name: 'Prague 21',
        stateCode: '121',
      },
      {
        name: 'Prague 3',
        stateCode: '103',
      },
      {
        name: 'Prague 4',
        stateCode: '104',
      },
      {
        name: 'Prague 5',
        stateCode: '105',
      },
      {
        name: 'Prague 6',
        stateCode: '106',
      },
      {
        name: 'Prague 7',
        stateCode: '107',
      },
      {
        name: 'Prague 8',
        stateCode: '108',
      },
      {
        name: 'Prague 9',
        stateCode: '109',
      },
      {
        name: 'Prague-East District',
        stateCode: '209',
      },
      {
        name: 'Prague-West District',
        stateCode: '20A',
      },
      {
        name: 'Přerov District',
        stateCode: '714',
      },
      {
        name: 'Příbram District',
        stateCode: '20B',
      },
      {
        name: 'Prostějov District',
        stateCode: '713',
      },
      {
        name: 'Rakovník District',
        stateCode: '20C',
      },
      {
        name: 'Rokycany District',
        stateCode: '326',
      },
      {
        name: 'Rychnov nad Kněžnou District',
        stateCode: '524',
      },
      {
        name: 'Semily District',
        stateCode: '514',
      },
      {
        name: 'Sokolov District',
        stateCode: '413',
      },
      {
        name: 'South Bohemian Region',
        stateCode: '31',
      },
      {
        name: 'South Moravian Region',
        stateCode: '64',
      },
      {
        name: 'Strakonice District',
        stateCode: '316',
      },
      {
        name: 'Šumperk District',
        stateCode: '715',
      },
      {
        name: 'Svitavy District',
        stateCode: '533',
      },
      {
        name: 'Tábor District',
        stateCode: '317',
      },
      {
        name: 'Tachov District',
        stateCode: '327',
      },
      {
        name: 'Teplice District',
        stateCode: '426',
      },
      {
        name: 'Třebíč District',
        stateCode: '634',
      },
      {
        name: 'Trutnov District',
        stateCode: '525',
      },
      {
        name: 'Uherské Hradiště District',
        stateCode: '722',
      },
      {
        name: 'Ústí nad Labem District',
        stateCode: '427',
      },
      {
        name: 'Ústí nad Labem Region',
        stateCode: '42',
      },
      {
        name: 'Ústí nad Orlicí District',
        stateCode: '534',
      },
      {
        name: 'Vsetín District',
        stateCode: '723',
      },
      {
        name: 'Vyškov District',
        stateCode: '646',
      },
      {
        name: 'Vysočina Region',
        stateCode: '63',
      },
      {
        name: 'Žďár nad Sázavou District',
        stateCode: '635',
      },
      {
        name: 'Zlín District',
        stateCode: '724',
      },
      {
        name: 'Zlín Region',
        stateCode: '72',
      },
      {
        name: 'Znojmo District',
        stateCode: '647',
      },
    ],
  },
  {
    name: 'Denmark',
    code: 'DK',
    phoneCode: '45',
    currency: 'DKK',
    currencySymbol: 'Kr.',

    emoji: '🇩🇰',

    states: [
      {
        name: 'Central Denmark Region',
        stateCode: '82',
      },
      {
        name: 'North Denmark Region',
        stateCode: '81',
      },
      {
        name: 'Region of Southern Denmark',
        stateCode: '83',
      },
      {
        name: 'Region Zealand',
        stateCode: '85',
      },
    ],
  },
  {
    name: 'Djibouti',
    code: 'DJ',
    phoneCode: '253',
    currency: 'DJF',
    currencySymbol: 'Fdj',

    emoji: '🇩🇯',

    states: [
      {
        name: 'Ali Sabieh Region',
        stateCode: 'AS',
      },
      {
        name: 'Arta Region',
        stateCode: 'AR',
      },
      {
        name: 'Dikhil Region',
        stateCode: 'DI',
      },
      {
        name: 'Djibouti',
        stateCode: 'DJ',
      },
      {
        name: 'Obock Region',
        stateCode: 'OB',
      },
      {
        name: 'Tadjourah Region',
        stateCode: 'TA',
      },
    ],
  },
  {
    name: 'Dominica',
    code: 'DM',
    phoneCode: '+1-767',
    currency: 'XCD',
    currencySymbol: '$',

    emoji: '🇩🇲',

    states: [
      {
        name: 'Saint Andrew Parish',
        stateCode: '02',
      },
      {
        name: 'Saint David Parish',
        stateCode: '03',
      },
      {
        name: 'Saint George Parish',
        stateCode: '04',
      },
      {
        name: 'Saint John Parish',
        stateCode: '05',
      },
      {
        name: 'Saint Joseph Parish',
        stateCode: '06',
      },
      {
        name: 'Saint Luke Parish',
        stateCode: '07',
      },
      {
        name: 'Saint Mark Parish',
        stateCode: '08',
      },
      {
        name: 'Saint Patrick Parish',
        stateCode: '09',
      },
      {
        name: 'Saint Paul Parish',
        stateCode: '10',
      },
      {
        name: 'Saint Peter Parish',
        stateCode: '11',
      },
    ],
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
    phoneCode: '+1-809 and 1-829',
    currency: 'DOP',
    currencySymbol: '$',

    emoji: '🇩🇴',

    states: [
      {
        name: 'Azua Province',
        stateCode: '02',
      },
      {
        name: 'Baoruco Province',
        stateCode: '03',
      },
      {
        name: 'Barahona Province',
        stateCode: '04',
      },
      {
        name: 'Dajabón Province',
        stateCode: '05',
      },
      {
        name: 'Distrito Nacional',
        stateCode: '01',
      },
      {
        name: 'Duarte Province',
        stateCode: '06',
      },
      {
        name: 'El Seibo Province',
        stateCode: '08',
      },
      {
        name: 'Espaillat Province',
        stateCode: '09',
      },
      {
        name: 'Hato Mayor Province',
        stateCode: '30',
      },
      {
        name: 'Hermanas Mirabal Province',
        stateCode: '19',
      },
      {
        name: 'Independencia',
        stateCode: '10',
      },
      {
        name: 'La Altagracia Province',
        stateCode: '11',
      },
      {
        name: 'La Romana Province',
        stateCode: '12',
      },
      {
        name: 'La Vega Province',
        stateCode: '13',
      },
      {
        name: 'María Trinidad Sánchez Province',
        stateCode: '14',
      },
      {
        name: 'Monseñor Nouel Province',
        stateCode: '28',
      },
      {
        name: 'Monte Cristi Province',
        stateCode: '15',
      },
      {
        name: 'Monte Plata Province',
        stateCode: '29',
      },
      {
        name: 'Pedernales Province',
        stateCode: '16',
      },
      {
        name: 'Peravia Province',
        stateCode: '17',
      },
      {
        name: 'Puerto Plata Province',
        stateCode: '18',
      },
      {
        name: 'Samaná Province',
        stateCode: '20',
      },
      {
        name: 'San Cristóbal Province',
        stateCode: '21',
      },
      {
        name: 'San José de Ocoa Province',
        stateCode: '31',
      },
      {
        name: 'San Juan Province',
        stateCode: '22',
      },
      {
        name: 'San Pedro de Macorís',
        stateCode: '23',
      },
      {
        name: 'Sánchez Ramírez Province',
        stateCode: '24',
      },
      {
        name: 'Santiago Province',
        stateCode: '25',
      },
      {
        name: 'Santiago Rodríguez Province',
        stateCode: '26',
      },
      {
        name: 'Santo Domingo Province',
        stateCode: '32',
      },
      {
        name: 'Valverde Province',
        stateCode: '27',
      },
    ],
  },
  {
    name: 'East Timor',
    code: 'TL',
    phoneCode: '670',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇹🇱',

    states: [
      {
        name: 'Aileu municipality',
        stateCode: 'AL',
      },
      {
        name: 'Ainaro Municipality',
        stateCode: 'AN',
      },
      {
        name: 'Baucau Municipality',
        stateCode: 'BA',
      },
      {
        name: 'Bobonaro Municipality',
        stateCode: 'BO',
      },
      {
        name: 'Cova Lima Municipality',
        stateCode: 'CO',
      },
      {
        name: 'Dili municipality',
        stateCode: 'DI',
      },
      {
        name: 'Ermera District',
        stateCode: 'ER',
      },
      {
        name: 'Lautém Municipality',
        stateCode: 'LA',
      },
      {
        name: 'Liquiçá Municipality',
        stateCode: 'LI',
      },
      {
        name: 'Manatuto District',
        stateCode: 'MT',
      },
      {
        name: 'Manufahi Municipality',
        stateCode: 'MF',
      },
      {
        name: 'Viqueque Municipality',
        stateCode: 'VI',
      },
    ],
  },
  {
    name: 'Ecuador',
    code: 'EC',
    phoneCode: '593',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇪🇨',

    states: [
      {
        name: 'Azuay Province',
        stateCode: 'A',
      },
      {
        name: 'Bolívar Province',
        stateCode: 'B',
      },
      {
        name: 'Cañar Province',
        stateCode: 'F',
      },
      {
        name: 'Carchi Province',
        stateCode: 'C',
      },
      {
        name: 'Chimborazo Province',
        stateCode: 'H',
      },
      {
        name: 'Cotopaxi Province',
        stateCode: 'X',
      },
      {
        name: 'El Oro Province',
        stateCode: 'O',
      },
      {
        name: 'Esmeraldas',
        stateCode: 'E',
      },
      {
        name: 'Galápagos Province',
        stateCode: 'W',
      },
      {
        name: 'Guayas Province',
        stateCode: 'G',
      },
      {
        name: 'Imbabura Province',
        stateCode: 'I',
      },
      {
        name: 'Los Ríos Province',
        stateCode: 'R',
      },
      {
        name: 'Manabí Province',
        stateCode: 'M',
      },
      {
        name: 'Morona-Santiago Province',
        stateCode: 'S',
      },
      {
        name: 'Napo Province',
        stateCode: 'N',
      },
      {
        name: 'Orellana Province',
        stateCode: 'D',
      },
      {
        name: 'Pastaza Province',
        stateCode: 'Y',
      },
      {
        name: 'Pichincha Province',
        stateCode: 'P',
      },
      {
        name: 'Santa Elena Province',
        stateCode: 'SE',
      },
      {
        name: 'Santo Domingo de los Tsáchilas Province',
        stateCode: 'SD',
      },
      {
        name: 'Sucumbíos Province',
        stateCode: 'U',
      },
      {
        name: 'Tungurahua Province',
        stateCode: 'T',
      },
      {
        name: 'Zamora-Chinchipe Province',
        stateCode: 'Z',
      },
    ],
  },
  {
    name: 'Egypt',
    code: 'EG',
    phoneCode: '20',
    currency: 'EGP',
    currencySymbol: 'ج.م',

    emoji: '🇪🇬',

    states: [
      {
        name: 'Alexandria Governorate',
        stateCode: 'ALX',
      },
      {
        name: 'Aswan Governorate',
        stateCode: 'ASN',
      },
      {
        name: 'Asyut Governorate',
        stateCode: 'AST',
      },
      {
        name: 'Beheira Governorate',
        stateCode: 'BH',
      },
      {
        name: 'Beni Suef Governorate',
        stateCode: 'BNS',
      },
      {
        name: 'Cairo Governorate',
        stateCode: 'C',
      },
      {
        name: 'Dakahlia Governorate',
        stateCode: 'DK',
      },
      {
        name: 'Damietta Governorate',
        stateCode: 'DT',
      },
      {
        name: 'Faiyum Governorate',
        stateCode: 'FYM',
      },
      {
        name: 'Gharbia Governorate',
        stateCode: 'GH',
      },
      {
        name: 'Giza Governorate',
        stateCode: 'GZ',
      },
      {
        name: 'Ismailia Governorate',
        stateCode: 'IS',
      },
      {
        name: 'Kafr el-Sheikh Governorate',
        stateCode: 'KFS',
      },
      {
        name: 'Luxor Governorate',
        stateCode: 'LX',
      },
      {
        name: 'Matrouh Governorate',
        stateCode: 'MT',
      },
      {
        name: 'Minya Governorate',
        stateCode: 'MN',
      },
      {
        name: 'Monufia Governorate',
        stateCode: 'MNF',
      },
      {
        name: 'New Valley Governorate',
        stateCode: 'WAD',
      },
      {
        name: 'North Sinai Governorate',
        stateCode: 'SIN',
      },
      {
        name: 'Port Said Governorate',
        stateCode: 'PTS',
      },
      {
        name: 'Qalyubia Governorate',
        stateCode: 'KB',
      },
      {
        name: 'Qena Governorate',
        stateCode: 'KN',
      },
      {
        name: 'Red Sea Governorate',
        stateCode: 'BA',
      },
      {
        name: 'Sohag Governorate',
        stateCode: 'SHG',
      },
      {
        name: 'South Sinai Governorate',
        stateCode: 'JS',
      },
      {
        name: 'Suez Governorate',
        stateCode: 'SUZ',
      },
    ],
  },
  {
    name: 'El Salvador',
    code: 'SV',
    phoneCode: '503',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇸🇻',

    states: [
      {
        name: 'Ahuachapán Department',
        stateCode: 'AH',
      },
      {
        name: 'Cabañas Department',
        stateCode: 'CA',
      },
      {
        name: 'Chalatenango Department',
        stateCode: 'CH',
      },
      {
        name: 'Cuscatlán Department',
        stateCode: 'CU',
      },
      {
        name: 'La Libertad Department',
        stateCode: 'LI',
      },
      {
        name: 'La Paz Department',
        stateCode: 'PA',
      },
      {
        name: 'La Unión Department',
        stateCode: 'UN',
      },
      {
        name: 'Morazán Department',
        stateCode: 'MO',
      },
      {
        name: 'San Miguel Department',
        stateCode: 'SM',
      },
      {
        name: 'San Salvador Department',
        stateCode: 'SS',
      },
      {
        name: 'San Vicente Department',
        stateCode: 'SV',
      },
      {
        name: 'Santa Ana Department',
        stateCode: 'SA',
      },
      {
        name: 'Sonsonate Department',
        stateCode: 'SO',
      },
      {
        name: 'Usulután Department',
        stateCode: 'US',
      },
    ],
  },
  {
    name: 'Equatorial Guinea',
    code: 'GQ',
    phoneCode: '240',
    currency: 'XAF',
    currencySymbol: 'FCFA',

    emoji: '🇬🇶',

    states: [
      {
        name: 'Annobón Province',
        stateCode: 'AN',
      },
      {
        name: 'Bioko Norte Province',
        stateCode: 'BN',
      },
      {
        name: 'Bioko Sur Province',
        stateCode: 'BS',
      },
      {
        name: 'Centro Sur Province',
        stateCode: 'CS',
      },
      {
        name: 'Insular Region',
        stateCode: 'I',
      },
      {
        name: 'Kié-Ntem Province',
        stateCode: 'KN',
      },
      {
        name: 'Litoral Province',
        stateCode: 'LI',
      },
      {
        name: 'Río Muni',
        stateCode: 'C',
      },
      {
        name: 'Wele-Nzas Province',
        stateCode: 'WN',
      },
    ],
  },
  {
    name: 'Eritrea',
    code: 'ER',
    phoneCode: '291',
    currency: 'ERN',
    currencySymbol: 'Nfk',

    emoji: '🇪🇷',

    states: [
      {
        name: 'Anseba Region',
        stateCode: 'AN',
      },
      {
        name: 'Debub Region',
        stateCode: 'DU',
      },
      {
        name: 'Gash-Barka Region',
        stateCode: 'GB',
      },
      {
        name: 'Maekel Region',
        stateCode: 'MA',
      },
      {
        name: 'Northern Red Sea Region',
        stateCode: 'SK',
      },
      {
        name: 'Southern Red Sea Region',
        stateCode: 'DK',
      },
    ],
  },
  {
    name: 'Estonia',
    code: 'EE',
    phoneCode: '372',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇪🇪',

    states: [
      {
        name: 'Harju County',
        stateCode: '37',
      },
      {
        name: 'Hiiu County',
        stateCode: '39',
      },
      {
        name: 'Ida-Viru County',
        stateCode: '44',
      },
      {
        name: 'Järva County',
        stateCode: '51',
      },
      {
        name: 'Jõgeva County',
        stateCode: '49',
      },
      {
        name: 'Lääne County',
        stateCode: '57',
      },
      {
        name: 'Lääne-Viru County',
        stateCode: '59',
      },
      {
        name: 'Pärnu County',
        stateCode: '67',
      },
      {
        name: 'Põlva County',
        stateCode: '65',
      },
      {
        name: 'Rapla County',
        stateCode: '70',
      },
      {
        name: 'Saare County',
        stateCode: '74',
      },
      {
        name: 'Tartu County',
        stateCode: '78',
      },
      {
        name: 'Valga County',
        stateCode: '82',
      },
      {
        name: 'Viljandi County',
        stateCode: '84',
      },
      {
        name: 'Võru County',
        stateCode: '86',
      },
    ],
  },
  {
    name: 'Ethiopia',
    code: 'ET',
    phoneCode: '251',
    currency: 'ETB',
    currencySymbol: 'Nkf',

    emoji: '🇪🇹',

    states: [
      {
        name: 'Addis Ababa',
        stateCode: 'AA',
      },
      {
        name: 'Afar Region',
        stateCode: 'AF',
      },
      {
        name: 'Amhara Region',
        stateCode: 'AM',
      },
      {
        name: 'Benishangul-Gumuz Region',
        stateCode: 'BE',
      },
      {
        name: 'Dire Dawa',
        stateCode: 'DD',
      },
      {
        name: 'Gambela Region',
        stateCode: 'GA',
      },
      {
        name: 'Harari Region',
        stateCode: 'HA',
      },
      {
        name: 'Oromia Region',
        stateCode: 'OR',
      },
      {
        name: 'Somali Region',
        stateCode: 'SO',
      },
      {
        name: "Southern Nations, Nationalities, and Peoples' Region",
        stateCode: 'SN',
      },
      {
        name: 'Tigray Region',
        stateCode: 'TI',
      },
    ],
  },
  {
    name: 'Falkland Islands',
    code: 'FK',
    phoneCode: '500',
    currency: 'FKP',
    currencySymbol: '£',

    emoji: '🇫🇰',

    states: [],
  },
  {
    name: 'Faroe Islands',
    code: 'FO',
    phoneCode: '298',
    currency: 'DKK',
    currencySymbol: 'Kr.',

    emoji: '🇫🇴',

    states: [],
  },
  {
    name: 'Fiji Islands',
    code: 'FJ',
    phoneCode: '679',
    currency: 'FJD',
    currencySymbol: 'FJ$',

    emoji: '🇫🇯',

    states: [
      {
        name: 'Ba',
        stateCode: '01',
      },
      {
        name: 'Bua',
        stateCode: '02',
      },
      {
        name: 'Cakaudrove',
        stateCode: '03',
      },
      {
        name: 'Central Division',
        stateCode: 'C',
      },
      {
        name: 'Eastern Division',
        stateCode: 'E',
      },
      {
        name: 'Kadavu',
        stateCode: '04',
      },
      {
        name: 'Lau',
        stateCode: '05',
      },
      {
        name: 'Lomaiviti',
        stateCode: '06',
      },
      {
        name: 'Macuata',
        stateCode: '07',
      },
      {
        name: 'Nadroga-Navosa',
        stateCode: '08',
      },
      {
        name: 'Naitasiri',
        stateCode: '09',
      },
      {
        name: 'Namosi',
        stateCode: '10',
      },
      {
        name: 'Northern Division',
        stateCode: 'N',
      },
      {
        name: 'Ra',
        stateCode: '11',
      },
      {
        name: 'Rewa',
        stateCode: '12',
      },
      {
        name: 'Rotuma',
        stateCode: 'R',
      },
      {
        name: 'Serua',
        stateCode: '13',
      },
      {
        name: 'Tailevu',
        stateCode: '14',
      },
      {
        name: 'Western Division',
        stateCode: 'W',
      },
    ],
  },
  {
    name: 'Finland',
    code: 'FI',
    phoneCode: '358',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇫🇮',

    states: [
      {
        name: 'Åland Islands',
        stateCode: '01',
      },
      {
        name: 'Central Finland',
        stateCode: '08',
      },
      {
        name: 'Central Ostrobothnia',
        stateCode: '07',
      },
      {
        name: 'Eastern Finland Province',
        stateCode: 'IS',
      },
      {
        name: 'Finland Proper',
        stateCode: '19',
      },
      {
        name: 'Kainuu',
        stateCode: '05',
      },
      {
        name: 'Kymenlaakso',
        stateCode: '09',
      },
      {
        name: 'Lapland',
        stateCode: 'LL',
      },
      {
        name: 'North Karelia',
        stateCode: '13',
      },
      {
        name: 'Northern Ostrobothnia',
        stateCode: '14',
      },
      {
        name: 'Northern Savonia',
        stateCode: '15',
      },
      {
        name: 'Ostrobothnia',
        stateCode: '12',
      },
      {
        name: 'Oulu Province',
        stateCode: 'OL',
      },
      {
        name: 'Päijänne Tavastia',
        stateCode: '16',
      },
      {
        name: 'Pirkanmaa',
        stateCode: '11',
      },
      {
        name: 'Satakunta',
        stateCode: '17',
      },
      {
        name: 'South Karelia',
        stateCode: '02',
      },
      {
        name: 'Southern Ostrobothnia',
        stateCode: '03',
      },
      {
        name: 'Southern Savonia',
        stateCode: '04',
      },
      {
        name: 'Tavastia Proper',
        stateCode: '06',
      },
      {
        name: 'Uusimaa',
        stateCode: '18',
      },
    ],
  },
  {
    name: 'France',
    code: 'FR',
    phoneCode: '33',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇫🇷',

    states: [
      {
        name: 'Alo',
        stateCode: 'WF-AL',
      },
      {
        name: 'Alsace',
        stateCode: 'A',
      },
      {
        name: 'Aquitaine',
        stateCode: 'B',
      },
      {
        name: 'Auvergne',
        stateCode: 'C',
      },
      {
        name: 'Auvergne-Rhône-Alpes',
        stateCode: 'ARA',
      },
      {
        name: 'Bourgogne-Franche-Comté',
        stateCode: 'BFC',
      },
      {
        name: 'Brittany',
        stateCode: 'BRE',
      },
      {
        name: 'Burgundy',
        stateCode: 'D',
      },
      {
        name: 'Centre-Val de Loire',
        stateCode: 'CVL',
      },
      {
        name: 'Champagne-Ardenne',
        stateCode: 'G',
      },
      {
        name: 'Corsica',
        stateCode: 'COR',
      },
      {
        name: 'Franche-Comté',
        stateCode: 'I',
      },
      {
        name: 'French Guiana',
        stateCode: 'GF',
      },
      {
        name: 'French Polynesia',
        stateCode: 'PF',
      },
      {
        name: 'Grand Est',
        stateCode: 'GES',
      },
      {
        name: 'Guadeloupe',
        stateCode: 'GP',
      },
      {
        name: 'Hauts-de-France',
        stateCode: 'HDF',
      },
      {
        name: 'Île-de-France',
        stateCode: 'IDF',
      },
      {
        name: 'Languedoc-Roussillon',
        stateCode: 'K',
      },
      {
        name: 'Limousin',
        stateCode: 'L',
      },
      {
        name: 'Lorraine',
        stateCode: 'M',
      },
      {
        name: 'Lower Normandy',
        stateCode: 'P',
      },
      {
        name: 'Martinique',
        stateCode: 'MQ',
      },
      {
        name: 'Mayotte',
        stateCode: 'YT',
      },
      {
        name: 'Nord-Pas-de-Calais',
        stateCode: 'O',
      },
      {
        name: 'Normandy',
        stateCode: 'NOR',
      },
      {
        name: 'Nouvelle-Aquitaine',
        stateCode: 'NAQ',
      },
      {
        name: 'Occitania',
        stateCode: 'OCC',
      },
      {
        name: 'Paris',
        stateCode: '75',
      },
      {
        name: 'Pays de la Loire',
        stateCode: 'PDL',
      },
      {
        name: 'Picardy',
        stateCode: 'S',
      },
      {
        name: 'Poitou-Charentes',
        stateCode: 'T',
      },
      {
        name: "Provence-Alpes-Côte d'Azur",
        stateCode: 'PAC',
      },
      {
        name: 'Réunion',
        stateCode: 'RE',
      },
      {
        name: 'Rhône-Alpes',
        stateCode: 'V',
      },
      {
        name: 'Saint Barthélemy',
        stateCode: 'BL',
      },
      {
        name: 'Saint Martin',
        stateCode: 'MF',
      },
      {
        name: 'Saint Pierre and Miquelon',
        stateCode: 'PM',
      },
      {
        name: 'Sigave',
        stateCode: 'WF-SG',
      },
      {
        name: 'Upper Normandy',
        stateCode: 'Q',
      },
      {
        name: 'Uvea',
        stateCode: 'WF-UV',
      },
      {
        name: 'Wallis and Futuna',
        stateCode: 'WF',
      },
    ],
  },
  {
    name: 'French Guiana',
    code: 'GF',
    phoneCode: '594',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇬🇫',

    states: [],
  },
  {
    name: 'French Polynesia',
    code: 'PF',
    phoneCode: '689',
    currency: 'XPF',
    currencySymbol: '₣',

    emoji: '🇵🇫',

    states: [],
  },
  {
    name: 'French Southern Territories',
    code: 'TF',
    phoneCode: '',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇹🇫',

    states: [],
  },
  {
    name: 'Gabon',
    code: 'GA',
    phoneCode: '241',
    currency: 'XAF',
    currencySymbol: 'FCFA',

    emoji: '🇬🇦',

    states: [
      {
        name: 'Estuaire Province',
        stateCode: '1',
      },
      {
        name: 'Haut-Ogooué Province',
        stateCode: '2',
      },
      {
        name: 'Moyen-Ogooué Province',
        stateCode: '3',
      },
      {
        name: 'Ngounié Province',
        stateCode: '4',
      },
      {
        name: 'Nyanga Province',
        stateCode: '5',
      },
      {
        name: 'Ogooué-Ivindo Province',
        stateCode: '6',
      },
      {
        name: 'Ogooué-Lolo Province',
        stateCode: '7',
      },
      {
        name: 'Ogooué-Maritime Province',
        stateCode: '8',
      },
      {
        name: 'Woleu-Ntem Province',
        stateCode: '9',
      },
    ],
  },
  {
    name: 'Gambia The',
    code: 'GM',
    phoneCode: '220',
    currency: 'GMD',
    currencySymbol: 'D',

    emoji: '🇬🇲',

    states: [
      {
        name: 'Banjul',
        stateCode: 'B',
      },
      {
        name: 'Central River Division',
        stateCode: 'M',
      },
      {
        name: 'Lower River Division',
        stateCode: 'L',
      },
      {
        name: 'North Bank Division',
        stateCode: 'N',
      },
      {
        name: 'Upper River Division',
        stateCode: 'U',
      },
      {
        name: 'West Coast Division',
        stateCode: 'W',
      },
    ],
  },
  {
    name: 'Georgia',
    code: 'GE',
    phoneCode: '995',
    currency: 'GEL',
    currencySymbol: 'ლ',

    emoji: '🇬🇪',

    states: [
      {
        name: 'Adjara',
        stateCode: 'AJ',
      },
      {
        name: 'Autonomous Republic of Abkhazia',
        stateCode: 'AB',
      },
      {
        name: 'Guria',
        stateCode: 'GU',
      },
      {
        name: 'Imereti',
        stateCode: 'IM',
      },
      {
        name: 'Kakheti',
        stateCode: 'KA',
      },
      {
        name: 'Khelvachauri Municipality',
        stateCode: '29',
      },
      {
        name: 'Kvemo Kartli',
        stateCode: 'KK',
      },
      {
        name: 'Mtskheta-Mtianeti',
        stateCode: 'MM',
      },
      {
        name: 'Racha-Lechkhumi and Kvemo Svaneti',
        stateCode: 'RL',
      },
      {
        name: 'Samegrelo-Zemo Svaneti',
        stateCode: 'SZ',
      },
      {
        name: 'Samtskhe-Javakheti',
        stateCode: 'SJ',
      },
      {
        name: 'Senaki Municipality',
        stateCode: '50',
      },
      {
        name: 'Shida Kartli',
        stateCode: 'SK',
      },
      {
        name: 'Tbilisi',
        stateCode: 'TB',
      },
    ],
  },
  {
    name: 'Germany',
    code: 'DE',
    phoneCode: '49',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇩🇪',

    states: [
      {
        name: 'Baden-Württemberg',
        stateCode: 'BW',
      },
      {
        name: 'Bavaria',
        stateCode: 'BY',
      },
      {
        name: 'Berlin',
        stateCode: 'BE',
      },
      {
        name: 'Brandenburg',
        stateCode: 'BB',
      },
      {
        name: 'Bremen',
        stateCode: 'HB',
      },
      {
        name: 'Hamburg',
        stateCode: 'HH',
      },
      {
        name: 'Hesse',
        stateCode: 'HE',
      },
      {
        name: 'Lower Saxony',
        stateCode: 'NI',
      },
      {
        name: 'Mecklenburg-Vorpommern',
        stateCode: 'MV',
      },
      {
        name: 'North Rhine-Westphalia',
        stateCode: 'NW',
      },
      {
        name: 'Rhineland-Palatinate',
        stateCode: 'RP',
      },
      {
        name: 'Saarland',
        stateCode: 'SL',
      },
      {
        name: 'Saxony',
        stateCode: 'SN',
      },
      {
        name: 'Saxony-Anhalt',
        stateCode: 'ST',
      },
      {
        name: 'Schleswig-Holstein',
        stateCode: 'SH',
      },
      {
        name: 'Thuringia',
        stateCode: 'TH',
      },
    ],
  },
  {
    name: 'Ghana',
    code: 'GH',
    phoneCode: '233',
    currency: 'GHS',
    currencySymbol: 'GH₵',

    emoji: '🇬🇭',

    states: [
      {
        name: 'Ashanti Region',
        stateCode: 'AH',
      },
      {
        name: 'Brong-Ahafo Region',
        stateCode: 'BA',
      },
      {
        name: 'Central Region',
        stateCode: 'CP',
      },
      {
        name: 'Eastern Region',
        stateCode: 'EP',
      },
      {
        name: 'Greater Accra Region',
        stateCode: 'AA',
      },
      {
        name: 'Northern Region',
        stateCode: 'NP',
      },
      {
        name: 'Upper East Region',
        stateCode: 'UE',
      },
      {
        name: 'Upper West Region',
        stateCode: 'UW',
      },
      {
        name: 'Volta Region',
        stateCode: 'TV',
      },
      {
        name: 'Western Region',
        stateCode: 'WP',
      },
    ],
  },
  {
    name: 'Gibraltar',
    code: 'GI',
    phoneCode: '350',
    currency: 'GIP',
    currencySymbol: '£',

    emoji: '🇬🇮',

    states: [],
  },
  {
    name: 'Greece',
    code: 'GR',
    phoneCode: '30',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇬🇷',

    states: [
      {
        name: 'Achaea Regional Unit',
        stateCode: '13',
      },
      {
        name: 'Aetolia-Acarnania Regional Unit',
        stateCode: '01',
      },
      {
        name: 'Arcadia Prefecture',
        stateCode: '12',
      },
      {
        name: 'Argolis Regional Unit',
        stateCode: '11',
      },
      {
        name: 'Attica Region',
        stateCode: 'I',
      },
      {
        name: 'Boeotia Regional Unit',
        stateCode: '03',
      },
      {
        name: 'Central Greece Region',
        stateCode: 'H',
      },
      {
        name: 'Central Macedonia',
        stateCode: 'B',
      },
      {
        name: 'Chania Regional Unit',
        stateCode: '94',
      },
      {
        name: 'Corfu Prefecture',
        stateCode: '22',
      },
      {
        name: 'Corinthia Regional Unit',
        stateCode: '15',
      },
      {
        name: 'Crete Region',
        stateCode: 'M',
      },
      {
        name: 'Drama Regional Unit',
        stateCode: '52',
      },
      {
        name: 'East Attica Regional Unit',
        stateCode: 'A2',
      },
      {
        name: 'East Macedonia and Thrace',
        stateCode: 'A',
      },
      {
        name: 'Epirus Region',
        stateCode: 'D',
      },
      {
        name: 'Euboea',
        stateCode: '04',
      },
      {
        name: 'Grevena Prefecture',
        stateCode: '51',
      },
      {
        name: 'Imathia Regional Unit',
        stateCode: '53',
      },
      {
        name: 'Ioannina Regional Unit',
        stateCode: '33',
      },
      {
        name: 'Ionian Islands Region',
        stateCode: 'F',
      },
      {
        name: 'Karditsa Regional Unit',
        stateCode: '41',
      },
      {
        name: 'Kastoria Regional Unit',
        stateCode: '56',
      },
      {
        name: 'Kefalonia Prefecture',
        stateCode: '23',
      },
      {
        name: 'Kilkis Regional Unit',
        stateCode: '57',
      },
      {
        name: 'Kozani Prefecture',
        stateCode: '58',
      },
      {
        name: 'Laconia',
        stateCode: '16',
      },
      {
        name: 'Larissa Prefecture',
        stateCode: '42',
      },
      {
        name: 'Lefkada Regional Unit',
        stateCode: '24',
      },
      {
        name: 'Pella Regional Unit',
        stateCode: '59',
      },
      {
        name: 'Peloponnese Region',
        stateCode: 'J',
      },
      {
        name: 'Phthiotis Prefecture',
        stateCode: '06',
      },
      {
        name: 'Preveza Prefecture',
        stateCode: '34',
      },
      {
        name: 'Serres Prefecture',
        stateCode: '62',
      },
      {
        name: 'South Aegean',
        stateCode: 'L',
      },
      {
        name: 'Thessaloniki Regional Unit',
        stateCode: '54',
      },
      {
        name: 'West Greece Region',
        stateCode: 'G',
      },
      {
        name: 'West Macedonia Region',
        stateCode: 'C',
      },
    ],
  },
  {
    name: 'Greenland',
    code: 'GL',
    phoneCode: '299',
    currency: 'DKK',
    currencySymbol: 'Kr.',

    emoji: '🇬🇱',

    states: [],
  },
  {
    name: 'Grenada',
    code: 'GD',
    phoneCode: '+1-473',
    currency: 'XCD',
    currencySymbol: '$',

    emoji: '🇬🇩',

    states: [
      {
        name: 'Carriacou and Petite Martinique',
        stateCode: '10',
      },
      {
        name: 'Saint Andrew Parish',
        stateCode: '01',
      },
      {
        name: 'Saint David Parish',
        stateCode: '02',
      },
      {
        name: 'Saint George Parish',
        stateCode: '03',
      },
      {
        name: 'Saint John Parish',
        stateCode: '04',
      },
      {
        name: 'Saint Mark Parish',
        stateCode: '05',
      },
      {
        name: 'Saint Patrick Parish',
        stateCode: '06',
      },
    ],
  },
  {
    name: 'Guadeloupe',
    code: 'GP',
    phoneCode: '590',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇬🇵',

    states: [],
  },
  {
    name: 'Guam',
    code: 'GU',
    phoneCode: '+1-671',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇬🇺',

    states: [],
  },
  {
    name: 'Guatemala',
    code: 'GT',
    phoneCode: '502',
    currency: 'GTQ',
    currencySymbol: 'Q',

    emoji: '🇬🇹',

    states: [
      {
        name: 'Alta Verapaz Department',
        stateCode: 'AV',
      },
      {
        name: 'Baja Verapaz Department',
        stateCode: 'BV',
      },
      {
        name: 'Chimaltenango Department',
        stateCode: 'CM',
      },
      {
        name: 'Chiquimula Department',
        stateCode: 'CQ',
      },
      {
        name: 'El Progreso Department',
        stateCode: 'PR',
      },
      {
        name: 'Escuintla Department',
        stateCode: 'ES',
      },
      {
        name: 'Guatemala Department',
        stateCode: 'GU',
      },
      {
        name: 'Huehuetenango Department',
        stateCode: 'HU',
      },
      {
        name: 'Izabal Department',
        stateCode: 'IZ',
      },
      {
        name: 'Jalapa Department',
        stateCode: 'JA',
      },
      {
        name: 'Jutiapa Department',
        stateCode: 'JU',
      },
      {
        name: 'Petén Department',
        stateCode: 'PE',
      },
      {
        name: 'Quetzaltenango Department',
        stateCode: 'QZ',
      },
      {
        name: 'Quiché Department',
        stateCode: 'QC',
      },
      {
        name: 'Retalhuleu Department',
        stateCode: 'RE',
      },
      {
        name: 'Sacatepéquez Department',
        stateCode: 'SA',
      },
      {
        name: 'San Marcos Department',
        stateCode: 'SM',
      },
      {
        name: 'Santa Rosa Department',
        stateCode: 'SR',
      },
      {
        name: 'Sololá Department',
        stateCode: 'SO',
      },
      {
        name: 'Suchitepéquez Department',
        stateCode: 'SU',
      },
      {
        name: 'Totonicapán Department',
        stateCode: 'TO',
      },
    ],
  },
  {
    name: 'Guernsey and Alderney',
    code: 'GG',
    phoneCode: '+44-1481',
    currency: 'GBP',
    currencySymbol: '£',

    emoji: '🇬🇬',

    states: [],
  },
  {
    name: 'Guinea',
    code: 'GN',
    phoneCode: '224',
    currency: 'GNF',
    currencySymbol: 'FG',

    emoji: '🇬🇳',

    states: [
      {
        name: 'Beyla Prefecture',
        stateCode: 'BE',
      },
      {
        name: 'Boffa Prefecture',
        stateCode: 'BF',
      },
      {
        name: 'Boké Prefecture',
        stateCode: 'BK',
      },
      {
        name: 'Boké Region',
        stateCode: 'B',
      },
      {
        name: 'Conakry',
        stateCode: 'C',
      },
      {
        name: 'Coyah Prefecture',
        stateCode: 'CO',
      },
      {
        name: 'Dabola Prefecture',
        stateCode: 'DB',
      },
      {
        name: 'Dalaba Prefecture',
        stateCode: 'DL',
      },
      {
        name: 'Dinguiraye Prefecture',
        stateCode: 'DI',
      },
      {
        name: 'Dubréka Prefecture',
        stateCode: 'DU',
      },
      {
        name: 'Faranah Prefecture',
        stateCode: 'FA',
      },
      {
        name: 'Forécariah Prefecture',
        stateCode: 'FO',
      },
      {
        name: 'Fria Prefecture',
        stateCode: 'FR',
      },
      {
        name: 'Gaoual Prefecture',
        stateCode: 'GA',
      },
      {
        name: 'Guéckédou Prefecture',
        stateCode: 'GU',
      },
      {
        name: 'Kankan Prefecture',
        stateCode: 'KA',
      },
      {
        name: 'Kankan Region',
        stateCode: 'K',
      },
      {
        name: 'Kérouané Prefecture',
        stateCode: 'KE',
      },
      {
        name: 'Kindia Prefecture',
        stateCode: 'KD',
      },
      {
        name: 'Kindia Region',
        stateCode: 'D',
      },
      {
        name: 'Kissidougou Prefecture',
        stateCode: 'KS',
      },
      {
        name: 'Koubia Prefecture',
        stateCode: 'KB',
      },
      {
        name: 'Koundara Prefecture',
        stateCode: 'KN',
      },
      {
        name: 'Kouroussa Prefecture',
        stateCode: 'KO',
      },
      {
        name: 'Labé Prefecture',
        stateCode: 'LA',
      },
      {
        name: 'Labé Region',
        stateCode: 'L',
      },
      {
        name: 'Lélouma Prefecture',
        stateCode: 'LE',
      },
      {
        name: 'Lola Prefecture',
        stateCode: 'LO',
      },
      {
        name: 'Macenta Prefecture',
        stateCode: 'MC',
      },
      {
        name: 'Mali Prefecture',
        stateCode: 'ML',
      },
      {
        name: 'Mamou Prefecture',
        stateCode: 'MM',
      },
      {
        name: 'Mamou Region',
        stateCode: 'M',
      },
      {
        name: 'Mandiana Prefecture',
        stateCode: 'MD',
      },
      {
        name: 'Nzérékoré Prefecture',
        stateCode: 'NZ',
      },
      {
        name: 'Nzérékoré Region',
        stateCode: 'N',
      },
      {
        name: 'Pita Prefecture',
        stateCode: 'PI',
      },
      {
        name: 'Siguiri Prefecture',
        stateCode: 'SI',
      },
      {
        name: 'Télimélé Prefecture',
        stateCode: 'TE',
      },
      {
        name: 'Tougué Prefecture',
        stateCode: 'TO',
      },
      {
        name: 'Yomou Prefecture',
        stateCode: 'YO',
      },
    ],
  },
  {
    name: 'Guinea-Bissau',
    code: 'GW',
    phoneCode: '245',
    currency: 'XOF',
    currencySymbol: 'CFA',

    emoji: '🇬🇼',

    states: [
      {
        name: 'Bafatá',
        stateCode: 'BA',
      },
      {
        name: 'Biombo Region',
        stateCode: 'BM',
      },
      {
        name: 'Bolama Region',
        stateCode: 'BL',
      },
      {
        name: 'Cacheu Region',
        stateCode: 'CA',
      },
      {
        name: 'Gabú Region',
        stateCode: 'GA',
      },
      {
        name: 'Leste Province',
        stateCode: 'L',
      },
      {
        name: 'Norte Province',
        stateCode: 'N',
      },
      {
        name: 'Oio Region',
        stateCode: 'OI',
      },
      {
        name: 'Quinara Region',
        stateCode: 'QU',
      },
      {
        name: 'Sul Province',
        stateCode: 'S',
      },
      {
        name: 'Tombali Region',
        stateCode: 'TO',
      },
    ],
  },
  {
    name: 'Guyana',
    code: 'GY',
    phoneCode: '592',
    currency: 'GYD',
    currencySymbol: '$',

    emoji: '🇬🇾',

    states: [
      {
        name: 'Barima-Waini',
        stateCode: 'BA',
      },
      {
        name: 'Cuyuni-Mazaruni',
        stateCode: 'CU',
      },
      {
        name: 'Demerara-Mahaica',
        stateCode: 'DE',
      },
      {
        name: 'East Berbice-Corentyne',
        stateCode: 'EB',
      },
      {
        name: 'Essequibo Islands-West Demerara',
        stateCode: 'ES',
      },
      {
        name: 'Mahaica-Berbice',
        stateCode: 'MA',
      },
      {
        name: 'Pomeroon-Supenaam',
        stateCode: 'PM',
      },
      {
        name: 'Potaro-Siparuni',
        stateCode: 'PT',
      },
      {
        name: 'Upper Demerara-Berbice',
        stateCode: 'UD',
      },
      {
        name: 'Upper Takutu-Upper Essequibo',
        stateCode: 'UT',
      },
    ],
  },
  {
    name: 'Haiti',
    code: 'HT',
    phoneCode: '509',
    currency: 'HTG',
    currencySymbol: 'G',

    emoji: '🇭🇹',

    states: [
      {
        name: 'Artibonite',
        stateCode: 'AR',
      },
      {
        name: 'Centre',
        stateCode: 'CE',
      },
      {
        name: "Grand'Anse",
        stateCode: 'GA',
      },
      {
        name: 'Nippes',
        stateCode: 'NI',
      },
      {
        name: 'Nord',
        stateCode: 'ND',
      },
      {
        name: 'Nord-Est',
        stateCode: 'NE',
      },
      {
        name: 'Nord-Ouest',
        stateCode: 'NO',
      },
      {
        name: 'Ouest',
        stateCode: 'OU',
      },
      {
        name: 'Sud',
        stateCode: 'SD',
      },
      {
        name: 'Sud-Est',
        stateCode: 'SE',
      },
    ],
  },
  {
    name: 'Heard Island and McDonald Islands',
    code: 'HM',
    phoneCode: '',
    currency: 'AUD',
    currencySymbol: '$',

    emoji: '🇭🇲',

    states: [],
  },
  {
    name: 'Honduras',
    code: 'HN',
    phoneCode: '504',
    currency: 'HNL',
    currencySymbol: 'L',

    emoji: '🇭🇳',

    states: [
      {
        name: 'Atlántida Department',
        stateCode: 'AT',
      },
      {
        name: 'Bay Islands Department',
        stateCode: 'IB',
      },
      {
        name: 'Choluteca Department',
        stateCode: 'CH',
      },
      {
        name: 'Colón Department',
        stateCode: 'CL',
      },
      {
        name: 'Comayagua Department',
        stateCode: 'CM',
      },
      {
        name: 'Copán Department',
        stateCode: 'CP',
      },
      {
        name: 'Cortés Department',
        stateCode: 'CR',
      },
      {
        name: 'El Paraíso Department',
        stateCode: 'EP',
      },
      {
        name: 'Francisco Morazán Department',
        stateCode: 'FM',
      },
      {
        name: 'Gracias a Dios Department',
        stateCode: 'GD',
      },
      {
        name: 'Intibucá Department',
        stateCode: 'IN',
      },
      {
        name: 'La Paz Department',
        stateCode: 'LP',
      },
      {
        name: 'Lempira Department',
        stateCode: 'LE',
      },
      {
        name: 'Ocotepeque Department',
        stateCode: 'OC',
      },
      {
        name: 'Olancho Department',
        stateCode: 'OL',
      },
      {
        name: 'Santa Bárbara Department',
        stateCode: 'SB',
      },
      {
        name: 'Valle Department',
        stateCode: 'VA',
      },
      {
        name: 'Yoro Department',
        stateCode: 'YO',
      },
    ],
  },
  {
    name: 'Hong Kong S.A.R.',
    code: 'HK',
    phoneCode: '852',
    currency: 'HKD',
    currencySymbol: '$',

    emoji: '🇭🇰',

    states: [
      {
        name: 'Central and Western District',
        stateCode: 'HCW',
      },
      {
        name: 'Eastern',
        stateCode: 'HEA',
      },
      {
        name: 'Islands District',
        stateCode: 'NIS',
      },
      {
        name: 'Kowloon City',
        stateCode: 'KKC',
      },
      {
        name: 'Kwai Tsing',
        stateCode: 'NKT',
      },
      {
        name: 'Kwun Tong',
        stateCode: 'KKT',
      },
      {
        name: 'North',
        stateCode: 'NNO',
      },
      {
        name: 'Sai Kung District',
        stateCode: 'NSK',
      },
      {
        name: 'Sha Tin',
        stateCode: 'NST',
      },
      {
        name: 'Sham Shui Po',
        stateCode: 'KSS',
      },
      {
        name: 'Southern',
        stateCode: 'HSO',
      },
      {
        name: 'Tai Po District',
        stateCode: 'NTP',
      },
      {
        name: 'Tsuen Wan District',
        stateCode: 'NTW',
      },
      {
        name: 'Tuen Mun',
        stateCode: 'NTM',
      },
      {
        name: 'Wan Chai',
        stateCode: 'HWC',
      },
      {
        name: 'Wong Tai Sin',
        stateCode: 'KWT',
      },
      {
        name: 'Yau Tsim Mong',
        stateCode: 'KYT',
      },
      {
        name: 'Yuen Long District',
        stateCode: 'NYL',
      },
    ],
  },
  {
    name: 'Hungary',
    code: 'HU',
    phoneCode: '36',
    currency: 'HUF',
    currencySymbol: 'Ft',

    emoji: '🇭🇺',

    states: [
      {
        name: 'Bács-Kiskun County',
        stateCode: 'BK',
      },
      {
        name: 'Baranya County',
        stateCode: 'BA',
      },
      {
        name: 'Békés County',
        stateCode: 'BE',
      },
      {
        name: 'Békéscsaba',
        stateCode: 'BC',
      },
      {
        name: 'Borsod-Abaúj-Zemplén County',
        stateCode: 'BZ',
      },
      {
        name: 'Budapest',
        stateCode: 'BU',
      },
      {
        name: 'Csongrád County',
        stateCode: 'CS',
      },
      {
        name: 'Debrecen',
        stateCode: 'DE',
      },
      {
        name: 'Dunaújváros',
        stateCode: 'DU',
      },
      {
        name: 'Eger',
        stateCode: 'EG',
      },
      {
        name: 'Érd',
        stateCode: 'ER',
      },
      {
        name: 'Fejér County',
        stateCode: 'FE',
      },
      {
        name: 'Győr',
        stateCode: 'GY',
      },
      {
        name: 'Győr-Moson-Sopron County',
        stateCode: 'GS',
      },
      {
        name: 'Hajdú-Bihar County',
        stateCode: 'HB',
      },
      {
        name: 'Heves County',
        stateCode: 'HE',
      },
      {
        name: 'Hódmezővásárhely',
        stateCode: 'HV',
      },
      {
        name: 'Jász-Nagykun-Szolnok County',
        stateCode: 'JN',
      },
      {
        name: 'Kaposvár',
        stateCode: 'KV',
      },
      {
        name: 'Kecskemét',
        stateCode: 'KM',
      },
      {
        name: 'Miskolc',
        stateCode: 'MI',
      },
      {
        name: 'Nagykanizsa',
        stateCode: 'NK',
      },
      {
        name: 'Nógrád County',
        stateCode: 'NO',
      },
      {
        name: 'Nyíregyháza',
        stateCode: 'NY',
      },
      {
        name: 'Pécs',
        stateCode: 'PS',
      },
      {
        name: 'Pest County',
        stateCode: 'PE',
      },
      {
        name: 'Salgótarján',
        stateCode: 'ST',
      },
      {
        name: 'Somogy County',
        stateCode: 'SO',
      },
      {
        name: 'Sopron',
        stateCode: 'SN',
      },
      {
        name: 'Szabolcs-Szatmár-Bereg County',
        stateCode: 'SZ',
      },
      {
        name: 'Szeged',
        stateCode: 'SD',
      },
      {
        name: 'Székesfehérvár',
        stateCode: 'SF',
      },
      {
        name: 'Szekszárd',
        stateCode: 'SS',
      },
      {
        name: 'Szolnok',
        stateCode: 'SK',
      },
      {
        name: 'Szombathely',
        stateCode: 'SH',
      },
      {
        name: 'Tatabánya',
        stateCode: 'TB',
      },
      {
        name: 'Tolna County',
        stateCode: 'TO',
      },
      {
        name: 'Vas County',
        stateCode: 'VA',
      },
      {
        name: 'Veszprém',
        stateCode: 'VM',
      },
      {
        name: 'Veszprém County',
        stateCode: 'VE',
      },
      {
        name: 'Zala County',
        stateCode: 'ZA',
      },
      {
        name: 'Zalaegerszeg',
        stateCode: 'ZE',
      },
    ],
  },
  {
    name: 'Iceland',
    code: 'IS',
    phoneCode: '354',
    currency: 'ISK',
    currencySymbol: 'kr',

    emoji: '🇮🇸',

    states: [
      {
        name: 'Eastern Region',
        stateCode: '7',
      },
      {
        name: 'Northeastern Region',
        stateCode: '6',
      },
      {
        name: 'Northwestern Region',
        stateCode: '5',
      },
      {
        name: 'Southern Peninsula Region',
        stateCode: '2',
      },
      {
        name: 'Southern Region',
        stateCode: '8',
      },
      {
        name: 'Western Region',
        stateCode: '3',
      },
      {
        name: 'Westfjords',
        stateCode: '4',
      },
    ],
  },
  {
    name: 'India',
    code: 'IN',
    phoneCode: '91',
    currency: 'INR',
    currencySymbol: '₹',

    emoji: '🇮🇳',

    states: [
      {
        name: 'Andaman and Nicobar Islands',
        stateCode: 'AN',
      },
      {
        name: 'Andhra Pradesh',
        stateCode: 'AP',
      },
      {
        name: 'Arunachal Pradesh',
        stateCode: 'AR',
      },
      {
        name: 'Assam',
        stateCode: 'AS',
      },
      {
        name: 'Bihar',
        stateCode: 'BR',
      },
      {
        name: 'Chandigarh',
        stateCode: 'CH',
      },
      {
        name: 'Chhattisgarh',
        stateCode: 'CT',
      },
      {
        name: 'Dadra and Nagar Haveli',
        stateCode: 'DN',
      },
      {
        name: 'Daman and Diu',
        stateCode: 'DD',
      },
      {
        name: 'Delhi',
        stateCode: 'DL',
      },
      {
        name: 'Goa',
        stateCode: 'GA',
      },
      {
        name: 'Gujarat',
        stateCode: 'GJ',
      },
      {
        name: 'Haryana',
        stateCode: 'HR',
      },
      {
        name: 'Himachal Pradesh',
        stateCode: 'HP',
      },
      {
        name: 'Jammu and Kashmir',
        stateCode: 'JK',
      },
      {
        name: 'Jharkhand',
        stateCode: 'JH',
      },
      {
        name: 'Karnataka',
        stateCode: 'KA',
      },
      {
        name: 'Kerala',
        stateCode: 'KL',
      },
      {
        name: 'Ladakh',
        stateCode: 'LA',
      },
      {
        name: 'Lakshadweep',
        stateCode: 'LD',
      },
      {
        name: 'Madhya Pradesh',
        stateCode: 'MP',
      },
      {
        name: 'Maharashtra',
        stateCode: 'MH',
      },
      {
        name: 'Manipur',
        stateCode: 'MN',
      },
      {
        name: 'Meghalaya',
        stateCode: 'ML',
      },
      {
        name: 'Mizoram',
        stateCode: 'MZ',
      },
      {
        name: 'Nagaland',
        stateCode: 'NL',
      },
      {
        name: 'Odisha',
        stateCode: 'OR',
      },
      {
        name: 'Puducherry',
        stateCode: 'PY',
      },
      {
        name: 'Punjab',
        stateCode: 'PB',
      },
      {
        name: 'Rajasthan',
        stateCode: 'RJ',
      },
      {
        name: 'Sikkim',
        stateCode: 'SK',
      },
      {
        name: 'Tamil Nadu',
        stateCode: 'TN',
      },
      {
        name: 'Telangana',
        stateCode: 'TG',
      },
      {
        name: 'Tripura',
        stateCode: 'TR',
      },
      {
        name: 'Uttar Pradesh',
        stateCode: 'UP',
      },
      {
        name: 'Uttarakhand',
        stateCode: 'UT',
      },
      {
        name: 'West Bengal',
        stateCode: 'WB',
      },
    ],
  },
  {
    name: 'Indonesia',
    code: 'ID',
    phoneCode: '62',
    currency: 'IDR',
    currencySymbol: 'Rp',

    emoji: '🇮🇩',

    states: [
      {
        name: 'Aceh',
        stateCode: 'AC',
      },
      {
        name: 'Bali',
        stateCode: 'BA',
      },
      {
        name: 'Bangka Belitung Islands',
        stateCode: 'BB',
      },
      {
        name: 'Banten',
        stateCode: 'BT',
      },
      {
        name: 'Bengkulu',
        stateCode: 'BE',
      },
      {
        name: 'Central Java',
        stateCode: 'JT',
      },
      {
        name: 'Central Kalimantan',
        stateCode: 'KT',
      },
      {
        name: 'Central Sulawesi',
        stateCode: 'ST',
      },
      {
        name: 'East Java',
        stateCode: 'JI',
      },
      {
        name: 'East Kalimantan',
        stateCode: 'KI',
      },
      {
        name: 'East Nusa Tenggara',
        stateCode: 'NT',
      },
      {
        name: 'Gorontalo',
        stateCode: 'GO',
      },
      {
        name: 'Jakarta',
        stateCode: 'JK',
      },
      {
        name: 'Jambi',
        stateCode: 'JA',
      },
      {
        name: 'Kalimantan',
        stateCode: 'KA',
      },
      {
        name: 'Lampung',
        stateCode: 'LA',
      },
      {
        name: 'Lesser Sunda Islands',
        stateCode: 'NU',
      },
      {
        name: 'Maluku',
        stateCode: 'MA',
      },
      {
        name: 'Maluku Islands',
        stateCode: 'ML',
      },
      {
        name: 'North Kalimantan',
        stateCode: 'KU',
      },
      {
        name: 'North Maluku',
        stateCode: 'MU',
      },
      {
        name: 'North Sulawesi',
        stateCode: 'SA',
      },
      {
        name: 'North Sumatra',
        stateCode: 'SU',
      },
      {
        name: 'Papua',
        stateCode: 'PA',
      },
      {
        name: 'Riau',
        stateCode: 'RI',
      },
      {
        name: 'Riau Islands',
        stateCode: 'KR',
      },
      {
        name: 'South Kalimantan',
        stateCode: 'KS',
      },
      {
        name: 'South Sulawesi',
        stateCode: 'SN',
      },
      {
        name: 'South Sumatra',
        stateCode: 'SS',
      },
      {
        name: 'Southeast Sulawesi',
        stateCode: 'SG',
      },
      {
        name: 'Special Region of Yogyakarta',
        stateCode: 'YO',
      },
      {
        name: 'Sulawesi',
        stateCode: 'SL',
      },
      {
        name: 'Sumatra',
        stateCode: 'SM',
      },
      {
        name: 'West Java',
        stateCode: 'JB',
      },
      {
        name: 'West Nusa Tenggara',
        stateCode: 'NB',
      },
      {
        name: 'West Papua',
        stateCode: 'PB',
      },
      {
        name: 'West Sulawesi',
        stateCode: 'SR',
      },
      {
        name: 'West Sumatra',
        stateCode: 'SB',
      },
    ],
  },
  {
    name: 'Iran',
    code: 'IR',
    phoneCode: '98',
    currency: 'IRR',
    currencySymbol: '﷼',

    emoji: '🇮🇷',

    states: [
      {
        name: 'Alborz Province',
        stateCode: '32',
      },
      {
        name: 'Ardabil Province',
        stateCode: '03',
      },
      {
        name: 'Bushehr Province',
        stateCode: '06',
      },
      {
        name: 'Chaharmahal and Bakhtiari Province',
        stateCode: '08',
      },
      {
        name: 'East Azerbaijan Province',
        stateCode: '01',
      },
      {
        name: 'Fars Province',
        stateCode: '14',
      },
      {
        name: 'Gilan Province',
        stateCode: '19',
      },
      {
        name: 'Golestan Province',
        stateCode: '27',
      },
      {
        name: 'Hormozgan Province',
        stateCode: '23',
      },
      {
        name: 'Ilam Province',
        stateCode: '05',
      },
      {
        name: 'Isfahan Province',
        stateCode: '04',
      },
      {
        name: 'Kerman Province',
        stateCode: '15',
      },
      {
        name: 'Kermanshah Province',
        stateCode: '17',
      },
      {
        name: 'Khuzestan Province',
        stateCode: '10',
      },
      {
        name: 'Kohgiluyeh and Boyer-Ahmad Province',
        stateCode: '18',
      },
      {
        name: 'Kurdistan Province',
        stateCode: '16',
      },
      {
        name: 'Lorestan Province',
        stateCode: '20',
      },
      {
        name: 'Markazi Province',
        stateCode: '22',
      },
      {
        name: 'Mazandaran Province',
        stateCode: '21',
      },
      {
        name: 'North Khorasan Province',
        stateCode: '31',
      },
      {
        name: 'Qazvin Province',
        stateCode: '28',
      },
      {
        name: 'Qom Province',
        stateCode: '26',
      },
      {
        name: 'Razavi Khorasan Province',
        stateCode: '30',
      },
      {
        name: 'Semnan Province',
        stateCode: '12',
      },
      {
        name: 'Sistan and Baluchestan',
        stateCode: '13',
      },
      {
        name: 'South Khorasan Province',
        stateCode: '29',
      },
      {
        name: 'Tehran Province',
        stateCode: '07',
      },
      {
        name: 'West Azarbaijan Province',
        stateCode: '02',
      },
      {
        name: 'Yazd Province',
        stateCode: '25',
      },
      {
        name: 'Zanjan Province',
        stateCode: '11',
      },
    ],
  },
  {
    name: 'Iraq',
    code: 'IQ',
    phoneCode: '964',
    currency: 'IQD',
    currencySymbol: 'د.ع',

    emoji: '🇮🇶',

    states: [
      {
        name: 'Al Anbar Governorate',
        stateCode: 'AN',
      },
      {
        name: 'Al Muthanna Governorate',
        stateCode: 'MU',
      },
      {
        name: 'Al-Qādisiyyah Governorate',
        stateCode: 'QA',
      },
      {
        name: 'Babylon Governorate',
        stateCode: 'BB',
      },
      {
        name: 'Baghdad Governorate',
        stateCode: 'BG',
      },
      {
        name: 'Basra Governorate',
        stateCode: 'BA',
      },
      {
        name: 'Dhi Qar Governorate',
        stateCode: 'DQ',
      },
      {
        name: 'Diyala Governorate',
        stateCode: 'DI',
      },
      {
        name: 'Dohuk Governorate',
        stateCode: 'DA',
      },
      {
        name: 'Erbil Governorate',
        stateCode: 'AR',
      },
      {
        name: 'Karbala Governorate',
        stateCode: 'KA',
      },
      {
        name: 'Kirkuk Governorate',
        stateCode: 'KI',
      },
      {
        name: 'Maysan Governorate',
        stateCode: 'MA',
      },
      {
        name: 'Najaf Governorate',
        stateCode: 'NA',
      },
      {
        name: 'Nineveh Governorate',
        stateCode: 'NI',
      },
      {
        name: 'Saladin Governorate',
        stateCode: 'SD',
      },
      {
        name: 'Sulaymaniyah Governorate',
        stateCode: 'SU',
      },
      {
        name: 'Wasit Governorate',
        stateCode: 'WA',
      },
    ],
  },
  {
    name: 'Ireland',
    code: 'IE',
    phoneCode: '353',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇮🇪',

    states: [
      {
        name: 'Connacht',
        stateCode: 'C',
      },
      {
        name: 'County Carlow',
        stateCode: 'CW',
      },
      {
        name: 'County Cavan',
        stateCode: 'CN',
      },
      {
        name: 'County Clare',
        stateCode: 'CE',
      },
      {
        name: 'County Cork',
        stateCode: 'CO',
      },
      {
        name: 'County Donegal',
        stateCode: 'DL',
      },
      {
        name: 'County Dublin',
        stateCode: 'D',
      },
      {
        name: 'County Galway',
        stateCode: 'G',
      },
      {
        name: 'County Kerry',
        stateCode: 'KY',
      },
      {
        name: 'County Kildare',
        stateCode: 'KE',
      },
      {
        name: 'County Kilkenny',
        stateCode: 'KK',
      },
      {
        name: 'County Laois',
        stateCode: 'LS',
      },
      {
        name: 'County Limerick',
        stateCode: 'LK',
      },
      {
        name: 'County Longford',
        stateCode: 'LD',
      },
      {
        name: 'County Louth',
        stateCode: 'LH',
      },
      {
        name: 'County Mayo',
        stateCode: 'MO',
      },
      {
        name: 'County Meath',
        stateCode: 'MH',
      },
      {
        name: 'County Monaghan',
        stateCode: 'MN',
      },
      {
        name: 'County Offaly',
        stateCode: 'OY',
      },
      {
        name: 'County Roscommon',
        stateCode: 'RN',
      },
      {
        name: 'County Sligo',
        stateCode: 'SO',
      },
      {
        name: 'County Tipperary',
        stateCode: 'TA',
      },
      {
        name: 'County Waterford',
        stateCode: 'WD',
      },
      {
        name: 'County Westmeath',
        stateCode: 'WH',
      },
      {
        name: 'County Wexford',
        stateCode: 'WX',
      },
      {
        name: 'County Wicklow',
        stateCode: 'WW',
      },
      {
        name: 'Leinster',
        stateCode: 'L',
      },
      {
        name: 'Munster',
        stateCode: 'M',
      },
      {
        name: 'Ulster',
        stateCode: 'U',
      },
    ],
  },
  {
    name: 'Israel',
    code: 'IL',
    phoneCode: '972',
    currency: 'ILS',
    currencySymbol: '₪',

    emoji: '🇮🇱',

    states: [
      {
        name: 'Central District',
        stateCode: 'M',
      },
      {
        name: 'Haifa District',
        stateCode: 'HA',
      },
      {
        name: 'Jerusalem District',
        stateCode: 'JM',
      },
      {
        name: 'Northern District',
        stateCode: 'Z',
      },
      {
        name: 'Southern District',
        stateCode: 'D',
      },
      {
        name: 'Tel Aviv District',
        stateCode: 'TA',
      },
    ],
  },
  {
    name: 'Italy',
    code: 'IT',
    phoneCode: '39',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇮🇹',

    states: [
      {
        name: 'Abruzzo',
        stateCode: '65',
      },
      {
        name: 'Aosta Valley',
        stateCode: '23',
      },
      {
        name: 'Apulia',
        stateCode: '75',
      },
      {
        name: 'Basilicata',
        stateCode: '77',
      },
      {
        name: 'Benevento Province',
        stateCode: 'BN',
      },
      {
        name: 'Calabria',
        stateCode: '78',
      },
      {
        name: 'Campania',
        stateCode: '72',
      },
      {
        name: 'Emilia-Romagna',
        stateCode: '45',
      },
      {
        name: 'Friuli–Venezia Giulia',
        stateCode: '36',
      },
      {
        name: 'Lazio',
        stateCode: '62',
      },
      {
        name: 'Libero consorzio comunale di Agrigento',
        stateCode: 'AG',
      },
      {
        name: 'Libero consorzio comunale di Caltanissetta',
        stateCode: 'CL',
      },
      {
        name: 'Libero consorzio comunale di Enna',
        stateCode: 'EN',
      },
      {
        name: 'Libero consorzio comunale di Ragusa',
        stateCode: 'RG',
      },
      {
        name: 'Libero consorzio comunale di Siracusa',
        stateCode: 'SR',
      },
      {
        name: 'Libero consorzio comunale di Trapani',
        stateCode: 'TP',
      },
      {
        name: 'Liguria',
        stateCode: '42',
      },
      {
        name: 'Lombardy',
        stateCode: '25',
      },
      {
        name: 'Marche',
        stateCode: '57',
      },
      {
        name: 'Metropolitan City of Bari',
        stateCode: 'BA',
      },
      {
        name: 'Metropolitan City of Bologna',
        stateCode: 'BO',
      },
      {
        name: 'Metropolitan City of Cagliari',
        stateCode: 'CA',
      },
      {
        name: 'Metropolitan City of Catania',
        stateCode: 'CT',
      },
      {
        name: 'Metropolitan City of Florence',
        stateCode: 'FI',
      },
      {
        name: 'Metropolitan City of Genoa',
        stateCode: 'GE',
      },
      {
        name: 'Metropolitan City of Messina',
        stateCode: 'ME',
      },
      {
        name: 'Metropolitan City of Milan',
        stateCode: 'MI',
      },
      {
        name: 'Metropolitan City of Naples',
        stateCode: 'NA',
      },
      {
        name: 'Metropolitan City of Palermo',
        stateCode: 'PA',
      },
      {
        name: 'Metropolitan City of Reggio Calabria',
        stateCode: 'RC',
      },
      {
        name: 'Metropolitan City of Rome',
        stateCode: 'RM',
      },
      {
        name: 'Metropolitan City of Turin',
        stateCode: 'TO',
      },
      {
        name: 'Metropolitan City of Venice',
        stateCode: 'VE',
      },
      {
        name: 'Molise',
        stateCode: '67',
      },
      {
        name: 'Pesaro and Urbino Province',
        stateCode: 'PU',
      },
      {
        name: 'Piedmont',
        stateCode: '21',
      },
      {
        name: 'Province of Alessandria',
        stateCode: 'AL',
      },
      {
        name: 'Province of Ancona',
        stateCode: 'AN',
      },
      {
        name: 'Province of Ascoli Piceno',
        stateCode: 'AP',
      },
      {
        name: 'Province of Asti',
        stateCode: 'AT',
      },
      {
        name: 'Province of Avellino',
        stateCode: 'AV',
      },
      {
        name: 'Province of Barletta-Andria-Trani',
        stateCode: 'BT',
      },
      {
        name: 'Province of Belluno',
        stateCode: 'BL',
      },
      {
        name: 'Province of Bergamo',
        stateCode: 'BG',
      },
      {
        name: 'Province of Biella',
        stateCode: 'BI',
      },
      {
        name: 'Province of Brescia',
        stateCode: 'BS',
      },
      {
        name: 'Province of Brindisi',
        stateCode: 'BR',
      },
      {
        name: 'Province of Campobasso',
        stateCode: 'CB',
      },
      {
        name: 'Province of Carbonia-Iglesias',
        stateCode: 'CI',
      },
      {
        name: 'Province of Caserta',
        stateCode: 'CE',
      },
      {
        name: 'Province of Catanzaro',
        stateCode: 'CZ',
      },
      {
        name: 'Province of Chieti',
        stateCode: 'CH',
      },
      {
        name: 'Province of Como',
        stateCode: 'CO',
      },
      {
        name: 'Province of Cosenza',
        stateCode: 'CS',
      },
      {
        name: 'Province of Cremona',
        stateCode: 'CR',
      },
      {
        name: 'Province of Crotone',
        stateCode: 'KR',
      },
      {
        name: 'Province of Cuneo',
        stateCode: 'CN',
      },
      {
        name: 'Province of Fermo',
        stateCode: 'FM',
      },
      {
        name: 'Province of Ferrara',
        stateCode: 'FE',
      },
      {
        name: 'Province of Foggia',
        stateCode: 'FG',
      },
      {
        name: 'Province of Forlì-Cesena',
        stateCode: 'FC',
      },
      {
        name: 'Province of Frosinone',
        stateCode: 'FR',
      },
      {
        name: 'Province of Gorizia',
        stateCode: 'GO',
      },
      {
        name: 'Province of Grosseto',
        stateCode: 'GR',
      },
      {
        name: 'Province of Imperia',
        stateCode: 'IM',
      },
      {
        name: 'Province of Isernia',
        stateCode: 'IS',
      },
      {
        name: "Province of L'Aquila",
        stateCode: 'AQ',
      },
      {
        name: 'Province of La Spezia',
        stateCode: 'SP',
      },
      {
        name: 'Province of Latina',
        stateCode: 'LT',
      },
      {
        name: 'Province of Lecce',
        stateCode: 'LE',
      },
      {
        name: 'Province of Lecco',
        stateCode: 'LC',
      },
      {
        name: 'Province of Livorno',
        stateCode: 'LI',
      },
      {
        name: 'Province of Lodi',
        stateCode: 'LO',
      },
      {
        name: 'Province of Lucca',
        stateCode: 'LU',
      },
      {
        name: 'Province of Macerata',
        stateCode: 'MC',
      },
      {
        name: 'Province of Mantua',
        stateCode: 'MN',
      },
      {
        name: 'Province of Massa and Carrara',
        stateCode: 'MS',
      },
      {
        name: 'Province of Matera',
        stateCode: 'MT',
      },
      {
        name: 'Province of Medio Campidano',
        stateCode: 'VS',
      },
      {
        name: 'Province of Modena',
        stateCode: 'MO',
      },
      {
        name: 'Province of Monza and Brianza',
        stateCode: 'MB',
      },
      {
        name: 'Province of Novara',
        stateCode: 'NO',
      },
      {
        name: 'Province of Nuoro',
        stateCode: 'NU',
      },
      {
        name: 'Province of Ogliastra',
        stateCode: 'OG',
      },
      {
        name: 'Province of Olbia-Tempio',
        stateCode: 'OT',
      },
      {
        name: 'Province of Oristano',
        stateCode: 'OR',
      },
      {
        name: 'Province of Padua',
        stateCode: 'PD',
      },
      {
        name: 'Province of Parma',
        stateCode: 'PR',
      },
      {
        name: 'Province of Pavia',
        stateCode: 'PV',
      },
      {
        name: 'Province of Perugia',
        stateCode: 'PG',
      },
      {
        name: 'Province of Pescara',
        stateCode: 'PE',
      },
      {
        name: 'Province of Piacenza',
        stateCode: 'PC',
      },
      {
        name: 'Province of Pisa',
        stateCode: 'PI',
      },
      {
        name: 'Province of Pistoia',
        stateCode: 'PT',
      },
      {
        name: 'Province of Pordenone',
        stateCode: 'PN',
      },
      {
        name: 'Province of Potenza',
        stateCode: 'PZ',
      },
      {
        name: 'Province of Prato',
        stateCode: 'PO',
      },
      {
        name: 'Province of Ravenna',
        stateCode: 'RA',
      },
      {
        name: 'Province of Reggio Emilia',
        stateCode: 'RE',
      },
      {
        name: 'Province of Rieti',
        stateCode: 'RI',
      },
      {
        name: 'Province of Rimini',
        stateCode: 'RN',
      },
      {
        name: 'Province of Rovigo',
        stateCode: 'RO',
      },
      {
        name: 'Province of Salerno',
        stateCode: 'SA',
      },
      {
        name: 'Province of Sassari',
        stateCode: 'SS',
      },
      {
        name: 'Province of Savona',
        stateCode: 'SV',
      },
      {
        name: 'Province of Siena',
        stateCode: 'SI',
      },
      {
        name: 'Province of Sondrio',
        stateCode: 'SO',
      },
      {
        name: 'Province of Taranto',
        stateCode: 'TA',
      },
      {
        name: 'Province of Teramo',
        stateCode: 'TE',
      },
      {
        name: 'Province of Terni',
        stateCode: 'TR',
      },
      {
        name: 'Province of Treviso',
        stateCode: 'TV',
      },
      {
        name: 'Province of Trieste',
        stateCode: 'TS',
      },
      {
        name: 'Province of Udine',
        stateCode: 'UD',
      },
      {
        name: 'Province of Varese',
        stateCode: 'VA',
      },
      {
        name: 'Province of Verbano-Cusio-Ossola',
        stateCode: 'VB',
      },
      {
        name: 'Province of Vercelli',
        stateCode: 'VC',
      },
      {
        name: 'Province of Verona',
        stateCode: 'VR',
      },
      {
        name: 'Province of Vibo Valentia',
        stateCode: 'VV',
      },
      {
        name: 'Province of Vicenza',
        stateCode: 'VI',
      },
      {
        name: 'Province of Viterbo',
        stateCode: 'VT',
      },
      {
        name: 'Sardinia',
        stateCode: '88',
      },
      {
        name: 'Sicily',
        stateCode: '82',
      },
      {
        name: 'South Tyrol',
        stateCode: 'BZ',
      },
      {
        name: 'Trentino',
        stateCode: 'TN',
      },
      {
        name: 'Trentino-South Tyrol',
        stateCode: '32',
      },
      {
        name: 'Tuscany',
        stateCode: '52',
      },
      {
        name: 'Umbria',
        stateCode: '55',
      },
      {
        name: 'Veneto',
        stateCode: '34',
      },
    ],
  },
  {
    name: 'Jamaica',
    code: 'JM',
    phoneCode: '+1-876',
    currency: 'JMD',
    currencySymbol: 'J$',

    emoji: '🇯🇲',

    states: [
      {
        name: 'Clarendon Parish',
        stateCode: '13',
      },
      {
        name: 'Hanover Parish',
        stateCode: '09',
      },
      {
        name: 'Kingston Parish',
        stateCode: '01',
      },
      {
        name: 'Manchester Parish',
        stateCode: '12',
      },
      {
        name: 'Portland Parish',
        stateCode: '04',
      },
      {
        name: 'Saint Andrew',
        stateCode: '02',
      },
      {
        name: 'Saint Ann Parish',
        stateCode: '06',
      },
      {
        name: 'Saint Catherine Parish',
        stateCode: '14',
      },
      {
        name: 'Saint Elizabeth Parish',
        stateCode: '11',
      },
      {
        name: 'Saint James Parish',
        stateCode: '08',
      },
      {
        name: 'Saint Mary Parish',
        stateCode: '05',
      },
      {
        name: 'Saint Thomas Parish',
        stateCode: '03',
      },
      {
        name: 'Trelawny Parish',
        stateCode: '07',
      },
      {
        name: 'Westmoreland Parish',
        stateCode: '10',
      },
    ],
  },
  {
    name: 'Japan',
    code: 'JP',
    phoneCode: '81',
    currency: 'JPY',
    currencySymbol: '¥',

    emoji: '🇯🇵',

    states: [
      {
        name: 'Aichi Prefecture',
        stateCode: '23',
      },
      {
        name: 'Akita Prefecture',
        stateCode: '05',
      },
      {
        name: 'Aomori Prefecture',
        stateCode: '02',
      },
      {
        name: 'Chiba Prefecture',
        stateCode: '12',
      },
      {
        name: 'Ehime Prefecture',
        stateCode: '38',
      },
      {
        name: 'Fukui Prefecture',
        stateCode: '18',
      },
      {
        name: 'Fukuoka Prefecture',
        stateCode: '40',
      },
      {
        name: 'Fukushima Prefecture',
        stateCode: '07',
      },
      {
        name: 'Gifu Prefecture',
        stateCode: '21',
      },
      {
        name: 'Gunma Prefecture',
        stateCode: '10',
      },
      {
        name: 'Hiroshima Prefecture',
        stateCode: '34',
      },
      {
        name: 'Hokkaidō Prefecture',
        stateCode: '01',
      },
      {
        name: 'Hyōgo Prefecture',
        stateCode: '28',
      },
      {
        name: 'Ibaraki Prefecture',
        stateCode: '08',
      },
      {
        name: 'Ishikawa Prefecture',
        stateCode: '17',
      },
      {
        name: 'Iwate Prefecture',
        stateCode: '03',
      },
      {
        name: 'Kagawa Prefecture',
        stateCode: '37',
      },
      {
        name: 'Kagoshima Prefecture',
        stateCode: '46',
      },
      {
        name: 'Kanagawa Prefecture',
        stateCode: '14',
      },
      {
        name: 'Kumamoto Prefecture',
        stateCode: '43',
      },
      {
        name: 'Kyōto Prefecture',
        stateCode: '26',
      },
      {
        name: 'Mie Prefecture',
        stateCode: '24',
      },
      {
        name: 'Miyagi Prefecture',
        stateCode: '04',
      },
      {
        name: 'Miyazaki Prefecture',
        stateCode: '45',
      },
      {
        name: 'Nagano Prefecture',
        stateCode: '20',
      },
      {
        name: 'Nagasaki Prefecture',
        stateCode: '42',
      },
      {
        name: 'Nara Prefecture',
        stateCode: '29',
      },
      {
        name: 'Niigata Prefecture',
        stateCode: '15',
      },
      {
        name: 'Ōita Prefecture',
        stateCode: '44',
      },
      {
        name: 'Okayama Prefecture',
        stateCode: '33',
      },
      {
        name: 'Okinawa Prefecture',
        stateCode: '47',
      },
      {
        name: 'Ōsaka Prefecture',
        stateCode: '27',
      },
      {
        name: 'Saga Prefecture',
        stateCode: '41',
      },
      {
        name: 'Saitama Prefecture',
        stateCode: '11',
      },
      {
        name: 'Shiga Prefecture',
        stateCode: '25',
      },
      {
        name: 'Shimane Prefecture',
        stateCode: '32',
      },
      {
        name: 'Shizuoka Prefecture',
        stateCode: '22',
      },
      {
        name: 'Tochigi Prefecture',
        stateCode: '09',
      },
      {
        name: 'Tokushima Prefecture',
        stateCode: '36',
      },
      {
        name: 'Tokyo',
        stateCode: '13',
      },
      {
        name: 'Tottori Prefecture',
        stateCode: '31',
      },
      {
        name: 'Toyama Prefecture',
        stateCode: '16',
      },
      {
        name: 'Wakayama Prefecture',
        stateCode: '30',
      },
      {
        name: 'Yamagata Prefecture',
        stateCode: '06',
      },
      {
        name: 'Yamaguchi Prefecture',
        stateCode: '35',
      },
      {
        name: 'Yamanashi Prefecture',
        stateCode: '19',
      },
    ],
  },
  {
    name: 'Jersey',
    code: 'JE',
    phoneCode: '+44-1534',
    currency: 'GBP',
    currencySymbol: '£',

    emoji: '🇯🇪',

    states: [],
  },
  {
    name: 'Jordan',
    code: 'JO',
    phoneCode: '962',
    currency: 'JOD',
    currencySymbol: 'ا.د',

    emoji: '🇯🇴',

    states: [
      {
        name: 'Ajloun Governorate',
        stateCode: 'AJ',
      },
      {
        name: 'Amman Governorate',
        stateCode: 'AM',
      },
      {
        name: 'Aqaba Governorate',
        stateCode: 'AQ',
      },
      {
        name: 'Balqa Governorate',
        stateCode: 'BA',
      },
      {
        name: 'Irbid Governorate',
        stateCode: 'IR',
      },
      {
        name: 'Jerash Governorate',
        stateCode: 'JA',
      },
      {
        name: 'Karak Governorate',
        stateCode: 'KA',
      },
      {
        name: "Ma'an Governorate",
        stateCode: 'MN',
      },
      {
        name: 'Madaba Governorate',
        stateCode: 'MD',
      },
      {
        name: 'Mafraq Governorate',
        stateCode: 'MA',
      },
      {
        name: 'Tafilah Governorate',
        stateCode: 'AT',
      },
      {
        name: 'Zarqa Governorate',
        stateCode: 'AZ',
      },
    ],
  },
  {
    name: 'Kazakhstan',
    code: 'KZ',
    phoneCode: '7',
    currency: 'KZT',
    currencySymbol: 'лв',

    emoji: '🇰🇿',

    states: [
      {
        name: 'Akmola Region',
        stateCode: 'AKM',
      },
      {
        name: 'Aktobe Region',
        stateCode: 'AKT',
      },
      {
        name: 'Almaty',
        stateCode: 'ALA',
      },
      {
        name: 'Almaty Region',
        stateCode: 'ALM',
      },
      {
        name: 'Atyrau Region',
        stateCode: 'ATY',
      },
      {
        name: 'Baikonur',
        stateCode: 'BAY',
      },
      {
        name: 'East Kazakhstan Region',
        stateCode: 'VOS',
      },
      {
        name: 'Jambyl Region',
        stateCode: 'ZHA',
      },
      {
        name: 'Karaganda Region',
        stateCode: 'KAR',
      },
      {
        name: 'Kostanay Region',
        stateCode: 'KUS',
      },
      {
        name: 'Kyzylorda Region',
        stateCode: 'KZY',
      },
      {
        name: 'Mangystau Region',
        stateCode: 'MAN',
      },
      {
        name: 'North Kazakhstan Region',
        stateCode: 'SEV',
      },
      {
        name: 'Nur-Sultan',
        stateCode: 'AST',
      },
      {
        name: 'Pavlodar Region',
        stateCode: 'PAV',
      },
      {
        name: 'Turkestan Region',
        stateCode: 'YUZ',
      },
      {
        name: 'West Kazakhstan Province',
        stateCode: 'ZAP',
      },
    ],
  },
  {
    name: 'Kenya',
    code: 'KE',
    phoneCode: '254',
    currency: 'KES',
    currencySymbol: 'KSh',

    emoji: '🇰🇪',

    states: [
      {
        name: 'Baringo County',
        stateCode: '01',
      },
      {
        name: 'Bomet County',
        stateCode: '02',
      },
      {
        name: 'Bungoma County',
        stateCode: '03',
      },
      {
        name: 'Busia County',
        stateCode: '04',
      },
      {
        name: 'Central Province',
        stateCode: '200',
      },
      {
        name: 'Coast Province',
        stateCode: '300',
      },
      {
        name: 'Eastern Province',
        stateCode: '400',
      },
      {
        name: 'Elgeyo-Marakwet County',
        stateCode: '05',
      },
      {
        name: 'Embu County',
        stateCode: '06',
      },
      {
        name: 'Garissa County',
        stateCode: '07',
      },
      {
        name: 'Homa Bay County',
        stateCode: '08',
      },
      {
        name: 'Isiolo County',
        stateCode: '09',
      },
      {
        name: 'Kajiado County',
        stateCode: '10',
      },
      {
        name: 'Kakamega County',
        stateCode: '11',
      },
      {
        name: 'Kericho County',
        stateCode: '12',
      },
      {
        name: 'Kiambu County',
        stateCode: '13',
      },
      {
        name: 'Kilifi County',
        stateCode: '14',
      },
      {
        name: 'Kirinyaga County',
        stateCode: '15',
      },
      {
        name: 'Kisii County',
        stateCode: '16',
      },
      {
        name: 'Kisumu County',
        stateCode: '17',
      },
      {
        name: 'Kitui County',
        stateCode: '18',
      },
      {
        name: 'Kwale County',
        stateCode: '19',
      },
      {
        name: 'Laikipia County',
        stateCode: '20',
      },
      {
        name: 'Lamu County',
        stateCode: '21',
      },
      {
        name: 'Machakos County',
        stateCode: '22',
      },
      {
        name: 'Makueni County',
        stateCode: '23',
      },
      {
        name: 'Mandera County',
        stateCode: '24',
      },
      {
        name: 'Marsabit County',
        stateCode: '25',
      },
      {
        name: 'Meru County',
        stateCode: '26',
      },
      {
        name: 'Migori County',
        stateCode: '27',
      },
      {
        name: 'Mombasa County',
        stateCode: '28',
      },
      {
        name: 'Muranga County',
        stateCode: '29',
      },
      {
        name: 'Nairobi',
        stateCode: '110',
      },
      {
        name: 'Nakuru District',
        stateCode: '31',
      },
      {
        name: 'Nandi District',
        stateCode: '32',
      },
      {
        name: 'Narok County',
        stateCode: '33',
      },
      {
        name: 'North Eastern Province',
        stateCode: '500',
      },
      {
        name: 'Nyamira District',
        stateCode: '34',
      },
      {
        name: 'Nyandarua County',
        stateCode: '35',
      },
      {
        name: 'Nyanza Province',
        stateCode: '600',
      },
      {
        name: 'Nyeri County',
        stateCode: '36',
      },
      {
        name: 'Rift Valley Province',
        stateCode: '700',
      },
      {
        name: 'Samburu County',
        stateCode: '37',
      },
      {
        name: 'Siaya County',
        stateCode: '38',
      },
      {
        name: 'Taita–Taveta County',
        stateCode: '39',
      },
      {
        name: 'Tana River County',
        stateCode: '40',
      },
      {
        name: 'Tharaka Nithi County',
        stateCode: '41',
      },
      {
        name: 'Trans-Nzoia District',
        stateCode: '42',
      },
      {
        name: 'Turkana County',
        stateCode: '43',
      },
      {
        name: 'Uasin Gishu District',
        stateCode: '44',
      },
      {
        name: 'Vihiga District',
        stateCode: '45',
      },
      {
        name: 'Wajir County',
        stateCode: '46',
      },
      {
        name: 'West Pokot County',
        stateCode: '47',
      },
      {
        name: 'Western Province',
        stateCode: '800',
      },
    ],
  },
  {
    name: 'Kiribati',
    code: 'KI',
    phoneCode: '686',
    currency: 'AUD',
    currencySymbol: '$',

    emoji: '🇰🇮',

    states: [
      {
        name: 'Gilbert Islands',
        stateCode: 'G',
      },
      {
        name: 'Line Islands',
        stateCode: 'L',
      },
      {
        name: 'Phoenix Islands',
        stateCode: 'P',
      },
    ],
  },
  {
    name: 'Korea North',
    code: 'KP',
    phoneCode: '850',
    currency: 'KPW',
    currencySymbol: '₩',

    emoji: '🇰🇵',

    states: [
      {
        name: 'Chagang Province',
        stateCode: '04',
      },
      {
        name: 'Kangwon Province',
        stateCode: '07',
      },
      {
        name: 'North Hamgyong Province',
        stateCode: '09',
      },
      {
        name: 'North Hwanghae Province',
        stateCode: '06',
      },
      {
        name: 'North Pyongan Province',
        stateCode: '03',
      },
      {
        name: 'Pyongyang',
        stateCode: '01',
      },
      {
        name: 'Rason',
        stateCode: '13',
      },
      {
        name: 'Ryanggang Province',
        stateCode: '10',
      },
      {
        name: 'South Hamgyong Province',
        stateCode: '08',
      },
      {
        name: 'South Hwanghae Province',
        stateCode: '05',
      },
      {
        name: 'South Pyongan Province',
        stateCode: '02',
      },
    ],
  },
  {
    name: 'Korea South',
    code: 'KR',
    phoneCode: '82',
    currency: 'KRW',
    currencySymbol: '₩',

    emoji: '🇰🇷',

    states: [
      {
        name: 'Busan',
        stateCode: '26',
      },
      {
        name: 'Daegu',
        stateCode: '27',
      },
      {
        name: 'Daejeon',
        stateCode: '30',
      },
      {
        name: 'Gangwon Province',
        stateCode: '42',
      },
      {
        name: 'Gwangju',
        stateCode: '29',
      },
      {
        name: 'Gyeonggi Province',
        stateCode: '41',
      },
      {
        name: 'Incheon',
        stateCode: '28',
      },
      {
        name: 'Jeju',
        stateCode: '49',
      },
      {
        name: 'North Chungcheong Province',
        stateCode: '43',
      },
      {
        name: 'North Gyeongsang Province',
        stateCode: '47',
      },
      {
        name: 'North Jeolla Province',
        stateCode: '45',
      },
      {
        name: 'Sejong City',
        stateCode: '50',
      },
      {
        name: 'Seoul',
        stateCode: '11',
      },
      {
        name: 'South Chungcheong Province',
        stateCode: '44',
      },
      {
        name: 'South Gyeongsang Province',
        stateCode: '48',
      },
      {
        name: 'South Jeolla Province',
        stateCode: '46',
      },
      {
        name: 'Ulsan',
        stateCode: '31',
      },
    ],
  },
  {
    name: 'Kosovo',
    code: 'XK',
    phoneCode: '383',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇽🇰',

    states: [
      {
        name: 'Đakovica District (Gjakove)',
        stateCode: 'XDG',
      },
      {
        name: 'Gjilan District',
        stateCode: 'XGJ',
      },
      {
        name: 'Kosovska Mitrovica District',
        stateCode: 'XKM',
      },
      {
        name: 'Peć District',
        stateCode: 'XPE',
      },
      {
        name: 'Pristina (Priştine)',
        stateCode: 'XPI',
      },
      {
        name: 'Prizren District',
        stateCode: 'XPR',
      },
      {
        name: 'Uroševac District (Ferizaj)',
        stateCode: 'XUF',
      },
    ],
  },
  {
    name: 'Kuwait',
    code: 'KW',
    phoneCode: '965',
    currency: 'KWD',
    currencySymbol: 'ك.د',

    emoji: '🇰🇼',

    states: [
      {
        name: 'Al Ahmadi Governorate',
        stateCode: 'AH',
      },
      {
        name: 'Al Farwaniyah Governorate',
        stateCode: 'FA',
      },
      {
        name: 'Al Jahra Governorate',
        stateCode: 'JA',
      },
      {
        name: 'Hawalli Governorate',
        stateCode: 'HA',
      },
      {
        name: 'Mubarak Al-Kabeer Governorate',
        stateCode: 'MU',
      },
    ],
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG',
    phoneCode: '996',
    currency: 'KGS',
    currencySymbol: 'лв',

    emoji: '🇰🇬',

    states: [
      {
        name: 'Batken Region',
        stateCode: 'B',
      },
      {
        name: 'Bishkek',
        stateCode: 'GB',
      },
      {
        name: 'Chuy Region',
        stateCode: 'C',
      },
      {
        name: 'Issyk-Kul Region',
        stateCode: 'Y',
      },
      {
        name: 'Jalal-Abad Region',
        stateCode: 'J',
      },
      {
        name: 'Naryn Region',
        stateCode: 'N',
      },
      {
        name: 'Osh',
        stateCode: 'GO',
      },
      {
        name: 'Osh Region',
        stateCode: 'O',
      },
      {
        name: 'Talas Region',
        stateCode: 'T',
      },
    ],
  },
  {
    name: 'Laos',
    code: 'LA',
    phoneCode: '856',
    currency: 'LAK',
    currencySymbol: '₭',

    emoji: '🇱🇦',

    states: [
      {
        name: 'Attapeu Province',
        stateCode: 'AT',
      },
      {
        name: 'Bokeo Province',
        stateCode: 'BK',
      },
      {
        name: 'Bolikhamsai Province',
        stateCode: 'BL',
      },
      {
        name: 'Champasak Province',
        stateCode: 'CH',
      },
      {
        name: 'Houaphanh Province',
        stateCode: 'HO',
      },
      {
        name: 'Khammouane Province',
        stateCode: 'KH',
      },
      {
        name: 'Luang Namtha Province',
        stateCode: 'LM',
      },
      {
        name: 'Luang Prabang Province',
        stateCode: 'LP',
      },
      {
        name: 'Oudomxay Province',
        stateCode: 'OU',
      },
      {
        name: 'Phongsaly Province',
        stateCode: 'PH',
      },
      {
        name: 'Sainyabuli Province',
        stateCode: 'XA',
      },
      {
        name: 'Salavan Province',
        stateCode: 'SL',
      },
      {
        name: 'Savannakhet Province',
        stateCode: 'SV',
      },
      {
        name: 'Sekong Province',
        stateCode: 'XE',
      },
      {
        name: 'Vientiane Prefecture',
        stateCode: 'VT',
      },
      {
        name: 'Vientiane Province',
        stateCode: 'VI',
      },
      {
        name: 'Xaisomboun',
        stateCode: 'XN',
      },
      {
        name: 'Xaisomboun Province',
        stateCode: 'XS',
      },
      {
        name: 'Xiangkhouang Province',
        stateCode: 'XI',
      },
    ],
  },
  {
    name: 'Latvia',
    code: 'LV',
    phoneCode: '371',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇱🇻',

    states: [
      {
        name: 'Aglona Municipality',
        stateCode: '001',
      },
      {
        name: 'Aizkraukle Municipality',
        stateCode: '002',
      },
      {
        name: 'Aizpute Municipality',
        stateCode: '003',
      },
      {
        name: 'Aknīste Municipality',
        stateCode: '004',
      },
      {
        name: 'Aloja Municipality',
        stateCode: '005',
      },
      {
        name: 'Alsunga Municipality',
        stateCode: '006',
      },
      {
        name: 'Alūksne Municipality',
        stateCode: '007',
      },
      {
        name: 'Amata Municipality',
        stateCode: '008',
      },
      {
        name: 'Ape Municipality',
        stateCode: '009',
      },
      {
        name: 'Auce Municipality',
        stateCode: '010',
      },
      {
        name: 'Babīte Municipality',
        stateCode: '012',
      },
      {
        name: 'Baldone Municipality',
        stateCode: '013',
      },
      {
        name: 'Baltinava Municipality',
        stateCode: '014',
      },
      {
        name: 'Balvi Municipality',
        stateCode: '015',
      },
      {
        name: 'Bauska Municipality',
        stateCode: '016',
      },
      {
        name: 'Beverīna Municipality',
        stateCode: '017',
      },
      {
        name: 'Brocēni Municipality',
        stateCode: '018',
      },
      {
        name: 'Burtnieki Municipality',
        stateCode: '019',
      },
      {
        name: 'Carnikava Municipality',
        stateCode: '020',
      },
      {
        name: 'Cēsis Municipality',
        stateCode: '022',
      },
      {
        name: 'Cesvaine Municipality',
        stateCode: '021',
      },
      {
        name: 'Cibla Municipality',
        stateCode: '023',
      },
      {
        name: 'Dagda Municipality',
        stateCode: '024',
      },
      {
        name: 'Daugavpils',
        stateCode: 'DGV',
      },
      {
        name: 'Daugavpils Municipality',
        stateCode: '025',
      },
      {
        name: 'Dobele Municipality',
        stateCode: '026',
      },
      {
        name: 'Dundaga Municipality',
        stateCode: '027',
      },
      {
        name: 'Durbe Municipality',
        stateCode: '028',
      },
      {
        name: 'Engure Municipality',
        stateCode: '029',
      },
      {
        name: 'Ērgļi Municipality',
        stateCode: '030',
      },
      {
        name: 'Garkalne Municipality',
        stateCode: '031',
      },
      {
        name: 'Grobiņa Municipality',
        stateCode: '032',
      },
      {
        name: 'Gulbene Municipality',
        stateCode: '033',
      },
      {
        name: 'Iecava Municipality',
        stateCode: '034',
      },
      {
        name: 'Ikšķile Municipality',
        stateCode: '035',
      },
      {
        name: 'Ilūkste Municipality',
        stateCode: '036',
      },
      {
        name: 'Inčukalns Municipality',
        stateCode: '037',
      },
      {
        name: 'Jaunjelgava Municipality',
        stateCode: '038',
      },
      {
        name: 'Jaunpiebalga Municipality',
        stateCode: '039',
      },
      {
        name: 'Jaunpils Municipality',
        stateCode: '040',
      },
      {
        name: 'Jēkabpils',
        stateCode: 'JKB',
      },
      {
        name: 'Jēkabpils Municipality',
        stateCode: '042',
      },
      {
        name: 'Jelgava',
        stateCode: 'JEL',
      },
      {
        name: 'Jelgava Municipality',
        stateCode: '041',
      },
      {
        name: 'Jūrmala',
        stateCode: 'JUR',
      },
      {
        name: 'Kandava Municipality',
        stateCode: '043',
      },
      {
        name: 'Kārsava Municipality',
        stateCode: '044',
      },
      {
        name: 'Ķegums Municipality',
        stateCode: '051',
      },
      {
        name: 'Ķekava Municipality',
        stateCode: '052',
      },
      {
        name: 'Kocēni Municipality',
        stateCode: '045',
      },
      {
        name: 'Koknese Municipality',
        stateCode: '046',
      },
      {
        name: 'Krāslava Municipality',
        stateCode: '047',
      },
      {
        name: 'Krimulda Municipality',
        stateCode: '048',
      },
      {
        name: 'Krustpils Municipality',
        stateCode: '049',
      },
      {
        name: 'Kuldīga Municipality',
        stateCode: '050',
      },
      {
        name: 'Lielvārde Municipality',
        stateCode: '053',
      },
      {
        name: 'Liepāja',
        stateCode: 'LPX',
      },
      {
        name: 'Līgatne Municipality',
        stateCode: '055',
      },
      {
        name: 'Limbaži Municipality',
        stateCode: '054',
      },
      {
        name: 'Līvāni Municipality',
        stateCode: '056',
      },
      {
        name: 'Lubāna Municipality',
        stateCode: '057',
      },
      {
        name: 'Ludza Municipality',
        stateCode: '058',
      },
      {
        name: 'Madona Municipality',
        stateCode: '059',
      },
      {
        name: 'Mālpils Municipality',
        stateCode: '061',
      },
      {
        name: 'Mārupe Municipality',
        stateCode: '062',
      },
      {
        name: 'Mazsalaca Municipality',
        stateCode: '060',
      },
      {
        name: 'Mērsrags Municipality',
        stateCode: '063',
      },
      {
        name: 'Naukšēni Municipality',
        stateCode: '064',
      },
      {
        name: 'Nereta Municipality',
        stateCode: '065',
      },
      {
        name: 'Nīca Municipality',
        stateCode: '066',
      },
      {
        name: 'Ogre Municipality',
        stateCode: '067',
      },
      {
        name: 'Olaine Municipality',
        stateCode: '068',
      },
      {
        name: 'Ozolnieki Municipality',
        stateCode: '069',
      },
      {
        name: 'Pārgauja Municipality',
        stateCode: '070',
      },
      {
        name: 'Pāvilosta Municipality',
        stateCode: '071',
      },
      {
        name: 'Pļaviņas Municipality',
        stateCode: '072',
      },
      {
        name: 'Preiļi Municipality',
        stateCode: '073',
      },
      {
        name: 'Priekule Municipality',
        stateCode: '074',
      },
      {
        name: 'Priekuļi Municipality',
        stateCode: '075',
      },
      {
        name: 'Rauna Municipality',
        stateCode: '076',
      },
      {
        name: 'Rēzekne',
        stateCode: 'REZ',
      },
      {
        name: 'Rēzekne Municipality',
        stateCode: '077',
      },
      {
        name: 'Riebiņi Municipality',
        stateCode: '078',
      },
      {
        name: 'Riga',
        stateCode: 'RIX',
      },
      {
        name: 'Roja Municipality',
        stateCode: '079',
      },
      {
        name: 'Ropaži Municipality',
        stateCode: '080',
      },
      {
        name: 'Rucava Municipality',
        stateCode: '081',
      },
      {
        name: 'Rugāji Municipality',
        stateCode: '082',
      },
      {
        name: 'Rūjiena Municipality',
        stateCode: '084',
      },
      {
        name: 'Rundāle Municipality',
        stateCode: '083',
      },
      {
        name: 'Sala Municipality',
        stateCode: '085',
      },
      {
        name: 'Salacgrīva Municipality',
        stateCode: '086',
      },
      {
        name: 'Salaspils Municipality',
        stateCode: '087',
      },
      {
        name: 'Saldus Municipality',
        stateCode: '088',
      },
      {
        name: 'Saulkrasti Municipality',
        stateCode: '089',
      },
      {
        name: 'Sēja Municipality',
        stateCode: '090',
      },
      {
        name: 'Sigulda Municipality',
        stateCode: '091',
      },
      {
        name: 'Skrīveri Municipality',
        stateCode: '092',
      },
      {
        name: 'Skrunda Municipality',
        stateCode: '093',
      },
      {
        name: 'Smiltene Municipality',
        stateCode: '094',
      },
      {
        name: 'Stopiņi Municipality',
        stateCode: '095',
      },
      {
        name: 'Strenči Municipality',
        stateCode: '096',
      },
      {
        name: 'Talsi Municipality',
        stateCode: '097',
      },
      {
        name: 'Tērvete Municipality',
        stateCode: '098',
      },
      {
        name: 'Tukums Municipality',
        stateCode: '099',
      },
      {
        name: 'Vaiņode Municipality',
        stateCode: '100',
      },
      {
        name: 'Valka Municipality',
        stateCode: '101',
      },
      {
        name: 'Valmiera',
        stateCode: 'VMR',
      },
      {
        name: 'Varakļāni Municipality',
        stateCode: '102',
      },
      {
        name: 'Vārkava Municipality',
        stateCode: '103',
      },
      {
        name: 'Vecpiebalga Municipality',
        stateCode: '104',
      },
      {
        name: 'Vecumnieki Municipality',
        stateCode: '105',
      },
      {
        name: 'Ventspils',
        stateCode: 'VEN',
      },
      {
        name: 'Ventspils Municipality',
        stateCode: '106',
      },
      {
        name: 'Viesīte Municipality',
        stateCode: '107',
      },
      {
        name: 'Viļaka Municipality',
        stateCode: '108',
      },
      {
        name: 'Viļāni Municipality',
        stateCode: '109',
      },
      {
        name: 'Zilupe Municipality',
        stateCode: '110',
      },
    ],
  },
  {
    name: 'Lebanon',
    code: 'LB',
    phoneCode: '961',
    currency: 'LBP',
    currencySymbol: '£',

    emoji: '🇱🇧',

    states: [
      {
        name: 'Akkar Governorate',
        stateCode: 'AK',
      },
      {
        name: 'Baalbek-Hermel Governorate',
        stateCode: 'BH',
      },
      {
        name: 'Beirut Governorate',
        stateCode: 'BA',
      },
      {
        name: 'Beqaa Governorate',
        stateCode: 'BI',
      },
      {
        name: 'Mount Lebanon Governorate',
        stateCode: 'JL',
      },
      {
        name: 'Nabatieh Governorate',
        stateCode: 'NA',
      },
      {
        name: 'North Governorate',
        stateCode: 'AS',
      },
      {
        name: 'South Governorate',
        stateCode: 'JA',
      },
    ],
  },
  {
    name: 'Lesotho',
    code: 'LS',
    phoneCode: '266',
    currency: 'LSL',
    currencySymbol: 'L',

    emoji: '🇱🇸',

    states: [
      {
        name: 'Berea District',
        stateCode: 'D',
      },
      {
        name: 'Butha-Buthe District',
        stateCode: 'B',
      },
      {
        name: 'Leribe District',
        stateCode: 'C',
      },
      {
        name: 'Mafeteng District',
        stateCode: 'E',
      },
      {
        name: 'Maseru District',
        stateCode: 'A',
      },
      {
        name: "Mohale's Hoek District",
        stateCode: 'F',
      },
      {
        name: 'Mokhotlong District',
        stateCode: 'J',
      },
      {
        name: "Qacha's Nek District",
        stateCode: 'H',
      },
      {
        name: 'Quthing District',
        stateCode: 'G',
      },
      {
        name: 'Thaba-Tseka District',
        stateCode: 'K',
      },
    ],
  },
  {
    name: 'Liberia',
    code: 'LR',
    phoneCode: '231',
    currency: 'LRD',
    currencySymbol: '$',

    emoji: '🇱🇷',

    states: [
      {
        name: 'Bomi County',
        stateCode: 'BM',
      },
      {
        name: 'Bong County',
        stateCode: 'BG',
      },
      {
        name: 'Gbarpolu County',
        stateCode: 'GP',
      },
      {
        name: 'Grand Bassa County',
        stateCode: 'GB',
      },
      {
        name: 'Grand Cape Mount County',
        stateCode: 'CM',
      },
      {
        name: 'Grand Gedeh County',
        stateCode: 'GG',
      },
      {
        name: 'Grand Kru County',
        stateCode: 'GK',
      },
      {
        name: 'Lofa County',
        stateCode: 'LO',
      },
      {
        name: 'Margibi County',
        stateCode: 'MG',
      },
      {
        name: 'Maryland County',
        stateCode: 'MY',
      },
      {
        name: 'Montserrado County',
        stateCode: 'MO',
      },
      {
        name: 'Nimba',
        stateCode: 'NI',
      },
      {
        name: 'River Cess County',
        stateCode: 'RI',
      },
      {
        name: 'River Gee County',
        stateCode: 'RG',
      },
      {
        name: 'Sinoe County',
        stateCode: 'SI',
      },
    ],
  },
  {
    name: 'Libya',
    code: 'LY',
    phoneCode: '218',
    currency: 'LYD',
    currencySymbol: 'د.ل',

    emoji: '🇱🇾',

    states: [
      {
        name: 'Al Wahat District',
        stateCode: 'WA',
      },
      {
        name: 'Benghazi',
        stateCode: 'BA',
      },
      {
        name: 'Derna District',
        stateCode: 'DR',
      },
      {
        name: 'Ghat District',
        stateCode: 'GT',
      },
      {
        name: 'Jabal al Akhdar',
        stateCode: 'JA',
      },
      {
        name: 'Jabal al Gharbi District',
        stateCode: 'JG',
      },
      {
        name: 'Jafara',
        stateCode: 'JI',
      },
      {
        name: 'Jufra',
        stateCode: 'JU',
      },
      {
        name: 'Kufra District',
        stateCode: 'KF',
      },
      {
        name: 'Marj District',
        stateCode: 'MJ',
      },
      {
        name: 'Misrata District',
        stateCode: 'MI',
      },
      {
        name: 'Murqub',
        stateCode: 'MB',
      },
      {
        name: 'Murzuq District',
        stateCode: 'MQ',
      },
      {
        name: 'Nalut District',
        stateCode: 'NL',
      },
      {
        name: 'Nuqat al Khams',
        stateCode: 'NQ',
      },
      {
        name: 'Sabha District',
        stateCode: 'SB',
      },
      {
        name: 'Sirte District',
        stateCode: 'SR',
      },
      {
        name: 'Tripoli District',
        stateCode: 'TB',
      },
      {
        name: 'Wadi al Hayaa District',
        stateCode: 'WD',
      },
      {
        name: 'Wadi al Shatii District',
        stateCode: 'WS',
      },
      {
        name: 'Zawiya District',
        stateCode: 'ZA',
      },
    ],
  },
  {
    name: 'Liechtenstein',
    code: 'LI',
    phoneCode: '423',
    currency: 'CHF',
    currencySymbol: 'CHf',

    emoji: '🇱🇮',

    states: [
      {
        name: 'Balzers',
        stateCode: '01',
      },
      {
        name: 'Eschen',
        stateCode: '02',
      },
      {
        name: 'Gamprin',
        stateCode: '03',
      },
      {
        name: 'Mauren',
        stateCode: '04',
      },
      {
        name: 'Planken',
        stateCode: '05',
      },
      {
        name: 'Ruggell',
        stateCode: '06',
      },
      {
        name: 'Schaan',
        stateCode: '07',
      },
      {
        name: 'Schellenberg',
        stateCode: '08',
      },
      {
        name: 'Triesen',
        stateCode: '09',
      },
      {
        name: 'Triesenberg',
        stateCode: '10',
      },
      {
        name: 'Vaduz',
        stateCode: '11',
      },
    ],
  },
  {
    name: 'Lithuania',
    code: 'LT',
    phoneCode: '370',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇱🇹',

    states: [
      {
        name: 'Akmenė District Municipality',
        stateCode: '01',
      },
      {
        name: 'Alytus City Municipality',
        stateCode: '02',
      },
      {
        name: 'Alytus County',
        stateCode: 'AL',
      },
      {
        name: 'Alytus District Municipality',
        stateCode: '03',
      },
      {
        name: 'Birštonas Municipality',
        stateCode: '05',
      },
      {
        name: 'Biržai District Municipality',
        stateCode: '06',
      },
      {
        name: 'Druskininkai municipality',
        stateCode: '07',
      },
      {
        name: 'Elektrėnai municipality',
        stateCode: '08',
      },
      {
        name: 'Ignalina District Municipality',
        stateCode: '09',
      },
      {
        name: 'Jonava District Municipality',
        stateCode: '10',
      },
      {
        name: 'Joniškis District Municipality',
        stateCode: '11',
      },
      {
        name: 'Jurbarkas District Municipality',
        stateCode: '12',
      },
      {
        name: 'Kaišiadorys District Municipality',
        stateCode: '13',
      },
      {
        name: 'Kalvarija municipality',
        stateCode: '14',
      },
      {
        name: 'Kaunas City Municipality',
        stateCode: '15',
      },
      {
        name: 'Kaunas County',
        stateCode: 'KU',
      },
      {
        name: 'Kaunas District Municipality',
        stateCode: '16',
      },
      {
        name: 'Kazlų Rūda municipality',
        stateCode: '17',
      },
      {
        name: 'Kėdainiai District Municipality',
        stateCode: '18',
      },
      {
        name: 'Kelmė District Municipality',
        stateCode: '19',
      },
      {
        name: 'Klaipeda City Municipality',
        stateCode: '20',
      },
      {
        name: 'Klaipėda County',
        stateCode: 'KL',
      },
      {
        name: 'Klaipėda District Municipality',
        stateCode: '21',
      },
      {
        name: 'Kretinga District Municipality',
        stateCode: '22',
      },
      {
        name: 'Kupiškis District Municipality',
        stateCode: '23',
      },
      {
        name: 'Lazdijai District Municipality',
        stateCode: '24',
      },
      {
        name: 'Marijampolė County',
        stateCode: 'MR',
      },
      {
        name: 'Marijampolė Municipality',
        stateCode: '25',
      },
      {
        name: 'Mažeikiai District Municipality',
        stateCode: '26',
      },
      {
        name: 'Molėtai District Municipality',
        stateCode: '27',
      },
      {
        name: 'Neringa Municipality',
        stateCode: '28',
      },
      {
        name: 'Pagėgiai municipality',
        stateCode: '29',
      },
      {
        name: 'Pakruojis District Municipality',
        stateCode: '30',
      },
      {
        name: 'Palanga City Municipality',
        stateCode: '31',
      },
      {
        name: 'Panevėžys City Municipality',
        stateCode: '32',
      },
      {
        name: 'Panevėžys County',
        stateCode: 'PN',
      },
      {
        name: 'Panevėžys District Municipality',
        stateCode: '33',
      },
      {
        name: 'Pasvalys District Municipality',
        stateCode: '34',
      },
      {
        name: 'Plungė District Municipality',
        stateCode: '35',
      },
      {
        name: 'Prienai District Municipality',
        stateCode: '36',
      },
      {
        name: 'Radviliškis District Municipality',
        stateCode: '37',
      },
      {
        name: 'Raseiniai District Municipality',
        stateCode: '38',
      },
      {
        name: 'Rietavas municipality',
        stateCode: '39',
      },
      {
        name: 'Rokiškis District Municipality',
        stateCode: '40',
      },
      {
        name: 'Šakiai District Municipality',
        stateCode: '41',
      },
      {
        name: 'Šalčininkai District Municipality',
        stateCode: '42',
      },
      {
        name: 'Šiauliai City Municipality',
        stateCode: '43',
      },
      {
        name: 'Šiauliai County',
        stateCode: 'SA',
      },
      {
        name: 'Šiauliai District Municipality',
        stateCode: '44',
      },
      {
        name: 'Šilalė District Municipality',
        stateCode: '45',
      },
      {
        name: 'Šilutė District Municipality',
        stateCode: '46',
      },
      {
        name: 'Širvintos District Municipality',
        stateCode: '47',
      },
      {
        name: 'Skuodas District Municipality',
        stateCode: '48',
      },
      {
        name: 'Švenčionys District Municipality',
        stateCode: '49',
      },
      {
        name: 'Tauragė County',
        stateCode: 'TA',
      },
      {
        name: 'Tauragė District Municipality',
        stateCode: '50',
      },
      {
        name: 'Telšiai County',
        stateCode: 'TE',
      },
      {
        name: 'Telšiai District Municipality',
        stateCode: '51',
      },
      {
        name: 'Trakai District Municipality',
        stateCode: '52',
      },
      {
        name: 'Ukmergė District Municipality',
        stateCode: '53',
      },
      {
        name: 'Utena County',
        stateCode: 'UT',
      },
      {
        name: 'Utena District Municipality',
        stateCode: '54',
      },
      {
        name: 'Varėna District Municipality',
        stateCode: '55',
      },
      {
        name: 'Vilkaviškis District Municipality',
        stateCode: '56',
      },
      {
        name: 'Vilnius City Municipality',
        stateCode: '57',
      },
      {
        name: 'Vilnius County',
        stateCode: 'VL',
      },
      {
        name: 'Vilnius District Municipality',
        stateCode: '58',
      },
      {
        name: 'Visaginas Municipality',
        stateCode: '59',
      },
      {
        name: 'Zarasai District Municipality',
        stateCode: '60',
      },
    ],
  },
  {
    name: 'Luxembourg',
    code: 'LU',
    phoneCode: '352',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇱🇺',

    states: [
      {
        name: 'Canton of Capellen',
        stateCode: 'CA',
      },
      {
        name: 'Canton of Clervaux',
        stateCode: 'CL',
      },
      {
        name: 'Canton of Diekirch',
        stateCode: 'DI',
      },
      {
        name: 'Canton of Echternach',
        stateCode: 'EC',
      },
      {
        name: 'Canton of Esch-sur-Alzette',
        stateCode: 'ES',
      },
      {
        name: 'Canton of Grevenmacher',
        stateCode: 'GR',
      },
      {
        name: 'Canton of Luxembourg',
        stateCode: 'LU',
      },
      {
        name: 'Canton of Mersch',
        stateCode: 'ME',
      },
      {
        name: 'Canton of Redange',
        stateCode: 'RD',
      },
      {
        name: 'Canton of Remich',
        stateCode: 'RM',
      },
      {
        name: 'Canton of Vianden',
        stateCode: 'VD',
      },
      {
        name: 'Canton of Wiltz',
        stateCode: 'WI',
      },
      {
        name: 'Diekirch District',
        stateCode: 'D',
      },
      {
        name: 'Grevenmacher District',
        stateCode: 'G',
      },
      {
        name: 'Luxembourg District',
        stateCode: 'L',
      },
    ],
  },
  {
    name: 'Macau S.A.R.',
    code: 'MO',
    phoneCode: '853',
    currency: 'MOP',
    currencySymbol: '$',

    emoji: '🇲🇴',

    states: [],
  },
  {
    name: 'Macedonia',
    code: 'MK',
    phoneCode: '389',
    currency: 'MKD',
    currencySymbol: 'ден',

    emoji: '🇲🇰',

    states: [
      {
        name: 'Aerodrom Municipality',
        stateCode: '01',
      },
      {
        name: 'Aračinovo Municipality',
        stateCode: '02',
      },
      {
        name: 'Berovo Municipality',
        stateCode: '03',
      },
      {
        name: 'Bitola Municipality',
        stateCode: '04',
      },
      {
        name: 'Bogdanci Municipality',
        stateCode: '05',
      },
      {
        name: 'Bogovinje Municipality',
        stateCode: '06',
      },
      {
        name: 'Bosilovo Municipality',
        stateCode: '07',
      },
      {
        name: 'Brvenica Municipality',
        stateCode: '08',
      },
      {
        name: 'Butel Municipality',
        stateCode: '09',
      },
      {
        name: 'Čair Municipality',
        stateCode: '79',
      },
      {
        name: 'Čaška Municipality',
        stateCode: '80',
      },
      {
        name: 'Centar Municipality',
        stateCode: '77',
      },
      {
        name: 'Centar Župa Municipality',
        stateCode: '78',
      },
      {
        name: 'Češinovo-Obleševo Municipality',
        stateCode: '81',
      },
      {
        name: 'Čučer-Sandevo Municipality',
        stateCode: '82',
      },
      {
        name: 'Debarca Municipality',
        stateCode: '22',
      },
      {
        name: 'Delčevo Municipality',
        stateCode: '23',
      },
      {
        name: 'Demir Hisar Municipality',
        stateCode: '25',
      },
      {
        name: 'Demir Kapija Municipality',
        stateCode: '24',
      },
      {
        name: 'Dojran Municipality',
        stateCode: '26',
      },
      {
        name: 'Dolneni Municipality',
        stateCode: '27',
      },
      {
        name: 'Drugovo Municipality',
        stateCode: '28',
      },
      {
        name: 'Gazi Baba Municipality',
        stateCode: '17',
      },
      {
        name: 'Gevgelija Municipality',
        stateCode: '18',
      },
      {
        name: 'Gjorče Petrov Municipality',
        stateCode: '29',
      },
      {
        name: 'Gostivar Municipality',
        stateCode: '19',
      },
      {
        name: 'Gradsko Municipality',
        stateCode: '20',
      },
      {
        name: 'Greater Skopje',
        stateCode: '85',
      },
      {
        name: 'Ilinden Municipality',
        stateCode: '34',
      },
      {
        name: 'Jegunovce Municipality',
        stateCode: '35',
      },
      {
        name: 'Karbinci',
        stateCode: '37',
      },
      {
        name: 'Karpoš Municipality',
        stateCode: '38',
      },
      {
        name: 'Kavadarci Municipality',
        stateCode: '36',
      },
      {
        name: 'Kičevo Municipality',
        stateCode: '40',
      },
      {
        name: 'Kisela Voda Municipality',
        stateCode: '39',
      },
      {
        name: 'Kočani Municipality',
        stateCode: '42',
      },
      {
        name: 'Konče Municipality',
        stateCode: '41',
      },
      {
        name: 'Kratovo Municipality',
        stateCode: '43',
      },
      {
        name: 'Kriva Palanka Municipality',
        stateCode: '44',
      },
      {
        name: 'Krivogaštani Municipality',
        stateCode: '45',
      },
      {
        name: 'Kruševo Municipality',
        stateCode: '46',
      },
      {
        name: 'Kumanovo Municipality',
        stateCode: '47',
      },
      {
        name: 'Lipkovo Municipality',
        stateCode: '48',
      },
      {
        name: 'Lozovo Municipality',
        stateCode: '49',
      },
      {
        name: 'Makedonska Kamenica Municipality',
        stateCode: '51',
      },
      {
        name: 'Makedonski Brod Municipality',
        stateCode: '52',
      },
      {
        name: 'Mavrovo and Rostuša Municipality',
        stateCode: '50',
      },
      {
        name: 'Mogila Municipality',
        stateCode: '53',
      },
      {
        name: 'Negotino Municipality',
        stateCode: '54',
      },
      {
        name: 'Novaci Municipality',
        stateCode: '55',
      },
      {
        name: 'Novo Selo Municipality',
        stateCode: '56',
      },
      {
        name: 'Ohrid Municipality',
        stateCode: '58',
      },
      {
        name: 'Oslomej Municipality',
        stateCode: '57',
      },
      {
        name: 'Pehčevo Municipality',
        stateCode: '60',
      },
      {
        name: 'Petrovec Municipality',
        stateCode: '59',
      },
      {
        name: 'Plasnica Municipality',
        stateCode: '61',
      },
      {
        name: 'Prilep Municipality',
        stateCode: '62',
      },
      {
        name: 'Probištip Municipality',
        stateCode: '63',
      },
      {
        name: 'Radoviš Municipality',
        stateCode: '64',
      },
      {
        name: 'Rankovce Municipality',
        stateCode: '65',
      },
      {
        name: 'Resen Municipality',
        stateCode: '66',
      },
      {
        name: 'Rosoman Municipality',
        stateCode: '67',
      },
      {
        name: 'Saraj Municipality',
        stateCode: '68',
      },
      {
        name: 'Sopište Municipality',
        stateCode: '70',
      },
      {
        name: 'Staro Nagoričane Municipality',
        stateCode: '71',
      },
      {
        name: 'Štip Municipality',
        stateCode: '83',
      },
      {
        name: 'Struga Municipality',
        stateCode: '72',
      },
      {
        name: 'Strumica Municipality',
        stateCode: '73',
      },
      {
        name: 'Studeničani Municipality',
        stateCode: '74',
      },
      {
        name: 'Šuto Orizari Municipality',
        stateCode: '84',
      },
      {
        name: 'Sveti Nikole Municipality',
        stateCode: '69',
      },
      {
        name: 'Tearce Municipality',
        stateCode: '75',
      },
      {
        name: 'Tetovo Municipality',
        stateCode: '76',
      },
      {
        name: 'Valandovo Municipality',
        stateCode: '10',
      },
      {
        name: 'Vasilevo Municipality',
        stateCode: '11',
      },
      {
        name: 'Veles Municipality',
        stateCode: '13',
      },
      {
        name: 'Vevčani Municipality',
        stateCode: '12',
      },
      {
        name: 'Vinica Municipality',
        stateCode: '14',
      },
      {
        name: 'Vraneštica Municipality',
        stateCode: '15',
      },
      {
        name: 'Vrapčište Municipality',
        stateCode: '16',
      },
      {
        name: 'Zajas Municipality',
        stateCode: '31',
      },
      {
        name: 'Zelenikovo Municipality',
        stateCode: '32',
      },
      {
        name: 'Želino Municipality',
        stateCode: '30',
      },
      {
        name: 'Zrnovci Municipality',
        stateCode: '33',
      },
    ],
  },
  {
    name: 'Madagascar',
    code: 'MG',
    phoneCode: '261',
    currency: 'MGA',
    currencySymbol: 'Ar',

    emoji: '🇲🇬',

    states: [
      {
        name: 'Antananarivo Province',
        stateCode: 'T',
      },
      {
        name: 'Antsiranana Province',
        stateCode: 'D',
      },
      {
        name: 'Fianarantsoa Province',
        stateCode: 'F',
      },
      {
        name: 'Mahajanga Province',
        stateCode: 'M',
      },
      {
        name: 'Toamasina Province',
        stateCode: 'A',
      },
      {
        name: 'Toliara Province',
        stateCode: 'U',
      },
    ],
  },
  {
    name: 'Malawi',
    code: 'MW',
    phoneCode: '265',
    currency: 'MWK',
    currencySymbol: 'MK',

    emoji: '🇲🇼',

    states: [
      {
        name: 'Balaka District',
        stateCode: 'BA',
      },
      {
        name: 'Blantyre District',
        stateCode: 'BL',
      },
      {
        name: 'Central Region',
        stateCode: 'C',
      },
      {
        name: 'Chikwawa District',
        stateCode: 'CK',
      },
      {
        name: 'Chiradzulu District',
        stateCode: 'CR',
      },
      {
        name: 'Chitipa district',
        stateCode: 'CT',
      },
      {
        name: 'Dedza District',
        stateCode: 'DE',
      },
      {
        name: 'Dowa District',
        stateCode: 'DO',
      },
      {
        name: 'Karonga District',
        stateCode: 'KR',
      },
      {
        name: 'Kasungu District',
        stateCode: 'KS',
      },
      {
        name: 'Likoma District',
        stateCode: 'LK',
      },
      {
        name: 'Lilongwe District',
        stateCode: 'LI',
      },
      {
        name: 'Machinga District',
        stateCode: 'MH',
      },
      {
        name: 'Mangochi District',
        stateCode: 'MG',
      },
      {
        name: 'Mchinji District',
        stateCode: 'MC',
      },
      {
        name: 'Mulanje District',
        stateCode: 'MU',
      },
      {
        name: 'Mwanza District',
        stateCode: 'MW',
      },
      {
        name: 'Mzimba District',
        stateCode: 'MZ',
      },
      {
        name: 'Nkhata Bay District',
        stateCode: 'NB',
      },
      {
        name: 'Nkhotakota District',
        stateCode: 'NK',
      },
      {
        name: 'Northern Region',
        stateCode: 'N',
      },
      {
        name: 'Nsanje District',
        stateCode: 'NS',
      },
      {
        name: 'Ntcheu District',
        stateCode: 'NU',
      },
      {
        name: 'Ntchisi District',
        stateCode: 'NI',
      },
      {
        name: 'Phalombe District',
        stateCode: 'PH',
      },
      {
        name: 'Rumphi District',
        stateCode: 'RU',
      },
      {
        name: 'Salima District',
        stateCode: 'SA',
      },
      {
        name: 'Southern Region',
        stateCode: 'S',
      },
      {
        name: 'Thyolo District',
        stateCode: 'TH',
      },
      {
        name: 'Zomba District',
        stateCode: 'ZO',
      },
    ],
  },
  {
    name: 'Malaysia',
    code: 'MY',
    phoneCode: '60',
    currency: 'MYR',
    currencySymbol: 'RM',

    emoji: '🇲🇾',

    states: [
      {
        name: 'Johor',
        stateCode: '01',
      },
      {
        name: 'Kedah',
        stateCode: '02',
      },
      {
        name: 'Kelantan',
        stateCode: '03',
      },
      {
        name: 'Kuala Lumpur',
        stateCode: '14',
      },
      {
        name: 'Labuan',
        stateCode: '15',
      },
      {
        name: 'Malacca',
        stateCode: '04',
      },
      {
        name: 'Negeri Sembilan',
        stateCode: '05',
      },
      {
        name: 'Pahang',
        stateCode: '06',
      },
      {
        name: 'Penang',
        stateCode: '07',
      },
      {
        name: 'Perak',
        stateCode: '08',
      },
      {
        name: 'Perlis',
        stateCode: '09',
      },
      {
        name: 'Putrajaya',
        stateCode: '16',
      },
      {
        name: 'Sabah',
        stateCode: '12',
      },
      {
        name: 'Sarawak',
        stateCode: '13',
      },
      {
        name: 'Selangor',
        stateCode: '10',
      },
      {
        name: 'Terengganu',
        stateCode: '11',
      },
    ],
  },
  {
    name: 'Maldives',
    code: 'MV',
    phoneCode: '960',
    currency: 'MVR',
    currencySymbol: 'Rf',

    emoji: '🇲🇻',

    states: [
      {
        name: 'Addu Atoll',
        stateCode: '01',
      },
      {
        name: 'Alif Alif Atoll',
        stateCode: '02',
      },
      {
        name: 'Alif Dhaal Atoll',
        stateCode: '00',
      },
      {
        name: 'Central Province',
        stateCode: 'CE',
      },
      {
        name: 'Dhaalu Atoll',
        stateCode: '17',
      },
      {
        name: 'Faafu Atoll',
        stateCode: '14',
      },
      {
        name: 'Gaafu Alif Atoll',
        stateCode: '27',
      },
      {
        name: 'Gaafu Dhaalu Atoll',
        stateCode: '28',
      },
      {
        name: 'Gnaviyani Atoll',
        stateCode: '29',
      },
      {
        name: 'Haa Alif Atoll',
        stateCode: '07',
      },
      {
        name: 'Haa Dhaalu Atoll',
        stateCode: '23',
      },
      {
        name: 'Kaafu Atoll',
        stateCode: '26',
      },
      {
        name: 'Laamu Atoll',
        stateCode: '05',
      },
      {
        name: 'Lhaviyani Atoll',
        stateCode: '03',
      },
      {
        name: 'Malé',
        stateCode: 'MLE',
      },
      {
        name: 'Meemu Atoll',
        stateCode: '12',
      },
      {
        name: 'Noonu Atoll',
        stateCode: '25',
      },
      {
        name: 'North Central Province',
        stateCode: 'NC',
      },
      {
        name: 'North Province',
        stateCode: 'NO',
      },
      {
        name: 'Raa Atoll',
        stateCode: '13',
      },
      {
        name: 'Shaviyani Atoll',
        stateCode: '24',
      },
      {
        name: 'South Central Province',
        stateCode: 'SC',
      },
      {
        name: 'South Province',
        stateCode: 'SU',
      },
      {
        name: 'Thaa Atoll',
        stateCode: '08',
      },
      {
        name: 'Upper South Province',
        stateCode: 'US',
      },
      {
        name: 'Vaavu Atoll',
        stateCode: '04',
      },
    ],
  },
  {
    name: 'Mali',
    code: 'ML',
    phoneCode: '223',
    currency: 'XOF',
    currencySymbol: 'CFA',

    emoji: '🇲🇱',

    states: [
      {
        name: 'Bamako',
        stateCode: 'BKO',
      },
      {
        name: 'Gao Region',
        stateCode: '7',
      },
      {
        name: 'Kayes Region',
        stateCode: '1',
      },
      {
        name: 'Kidal Region',
        stateCode: '8',
      },
      {
        name: 'Koulikoro Region',
        stateCode: '2',
      },
      {
        name: 'Ménaka Region',
        stateCode: '9',
      },
      {
        name: 'Mopti Region',
        stateCode: '5',
      },
      {
        name: 'Ségou Region',
        stateCode: '4',
      },
      {
        name: 'Sikasso Region',
        stateCode: '3',
      },
      {
        name: 'Taoudénit Region',
        stateCode: '10',
      },
      {
        name: 'Tombouctou Region',
        stateCode: '6',
      },
    ],
  },
  {
    name: 'Malta',
    code: 'MT',
    phoneCode: '356',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇲🇹',

    states: [
      {
        name: 'Attard',
        stateCode: '01',
      },
      {
        name: 'Balzan',
        stateCode: '02',
      },
      {
        name: 'Birgu',
        stateCode: '03',
      },
      {
        name: 'Birkirkara',
        stateCode: '04',
      },
      {
        name: 'Birżebbuġa',
        stateCode: '05',
      },
      {
        name: 'Cospicua',
        stateCode: '06',
      },
      {
        name: 'Dingli',
        stateCode: '07',
      },
      {
        name: 'Fgura',
        stateCode: '08',
      },
      {
        name: 'Floriana',
        stateCode: '09',
      },
      {
        name: 'Fontana',
        stateCode: '10',
      },
      {
        name: 'Għajnsielem',
        stateCode: '13',
      },
      {
        name: 'Għarb',
        stateCode: '14',
      },
      {
        name: 'Għargħur',
        stateCode: '15',
      },
      {
        name: 'Għasri',
        stateCode: '16',
      },
      {
        name: 'Għaxaq',
        stateCode: '17',
      },
      {
        name: 'Gudja',
        stateCode: '11',
      },
      {
        name: 'Gżira',
        stateCode: '12',
      },
      {
        name: 'Ħamrun',
        stateCode: '18',
      },
      {
        name: 'Iklin',
        stateCode: '19',
      },
      {
        name: 'Kalkara',
        stateCode: '21',
      },
      {
        name: 'Kerċem',
        stateCode: '22',
      },
      {
        name: 'Kirkop',
        stateCode: '23',
      },
      {
        name: 'Lija',
        stateCode: '24',
      },
      {
        name: 'Luqa',
        stateCode: '25',
      },
      {
        name: 'Marsa',
        stateCode: '26',
      },
      {
        name: 'Marsaskala',
        stateCode: '27',
      },
      {
        name: 'Marsaxlokk',
        stateCode: '28',
      },
      {
        name: 'Mdina',
        stateCode: '29',
      },
      {
        name: 'Mellieħa',
        stateCode: '30',
      },
      {
        name: 'Mġarr',
        stateCode: '31',
      },
      {
        name: 'Mosta',
        stateCode: '32',
      },
      {
        name: 'Mqabba',
        stateCode: '33',
      },
      {
        name: 'Msida',
        stateCode: '34',
      },
      {
        name: 'Mtarfa',
        stateCode: '35',
      },
      {
        name: 'Munxar',
        stateCode: '36',
      },
      {
        name: 'Nadur',
        stateCode: '37',
      },
      {
        name: 'Naxxar',
        stateCode: '38',
      },
      {
        name: 'Paola',
        stateCode: '39',
      },
      {
        name: 'Pembroke',
        stateCode: '40',
      },
      {
        name: 'Pietà',
        stateCode: '41',
      },
      {
        name: 'Qala',
        stateCode: '42',
      },
      {
        name: 'Qormi',
        stateCode: '43',
      },
      {
        name: 'Qrendi',
        stateCode: '44',
      },
      {
        name: 'Rabat',
        stateCode: '46',
      },
      {
        name: 'Saint Lawrence',
        stateCode: '50',
      },
      {
        name: 'San Ġwann',
        stateCode: '49',
      },
      {
        name: 'Sannat',
        stateCode: '52',
      },
      {
        name: 'Santa Luċija',
        stateCode: '53',
      },
      {
        name: 'Santa Venera',
        stateCode: '54',
      },
      {
        name: 'Senglea',
        stateCode: '20',
      },
      {
        name: 'Siġġiewi',
        stateCode: '55',
      },
      {
        name: 'Sliema',
        stateCode: '56',
      },
      {
        name: "St. Julian's",
        stateCode: '48',
      },
      {
        name: "St. Paul's Bay",
        stateCode: '51',
      },
      {
        name: 'Swieqi',
        stateCode: '57',
      },
      {
        name: "Ta' Xbiex",
        stateCode: '58',
      },
      {
        name: 'Tarxien',
        stateCode: '59',
      },
      {
        name: 'Valletta',
        stateCode: '60',
      },
      {
        name: 'Victoria',
        stateCode: '45',
      },
      {
        name: 'Xagħra',
        stateCode: '61',
      },
      {
        name: 'Xewkija',
        stateCode: '62',
      },
      {
        name: 'Xgħajra',
        stateCode: '63',
      },
      {
        name: 'Żabbar',
        stateCode: '64',
      },
      {
        name: 'Żebbuġ Gozo',
        stateCode: '65',
      },
      {
        name: 'Żebbuġ Malta',
        stateCode: '66',
      },
      {
        name: 'Żejtun',
        stateCode: '67',
      },
      {
        name: 'Żurrieq',
        stateCode: '68',
      },
    ],
  },
  {
    name: 'Man (Isle of)',
    code: 'IM',
    phoneCode: '+44-1624',
    currency: 'GBP',
    currencySymbol: '£',

    emoji: '🇮🇲',

    states: [],
  },
  {
    name: 'Marshall Islands',
    code: 'MH',
    phoneCode: '692',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇲🇭',

    states: [
      {
        name: 'Ralik Chain',
        stateCode: 'L',
      },
      {
        name: 'Ratak Chain',
        stateCode: 'T',
      },
    ],
  },
  {
    name: 'Martinique',
    code: 'MQ',
    phoneCode: '596',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇲🇶',

    states: [],
  },
  {
    name: 'Mauritania',
    code: 'MR',
    phoneCode: '222',
    currency: 'MRO',
    currencySymbol: 'MRU',

    emoji: '🇲🇷',

    states: [
      {
        name: 'Adrar Region',
        stateCode: '07',
      },
      {
        name: 'Assaba Region',
        stateCode: '03',
      },
      {
        name: 'Brakna Region',
        stateCode: '05',
      },
      {
        name: 'Dakhlet Nouadhibou',
        stateCode: '08',
      },
      {
        name: 'Gorgol Region',
        stateCode: '04',
      },
      {
        name: 'Guidimaka Region',
        stateCode: '10',
      },
      {
        name: 'Hodh Ech Chargui Region',
        stateCode: '01',
      },
      {
        name: 'Hodh El Gharbi Region',
        stateCode: '02',
      },
      {
        name: 'Inchiri Region',
        stateCode: '12',
      },
      {
        name: 'Nouakchott-Nord Region',
        stateCode: '14',
      },
      {
        name: 'Nouakchott-Ouest Region',
        stateCode: '13',
      },
      {
        name: 'Nouakchott-Sud Region',
        stateCode: '15',
      },
      {
        name: 'Tagant Region',
        stateCode: '09',
      },
      {
        name: 'Tiris Zemmour Region',
        stateCode: '11',
      },
      {
        name: 'Trarza Region',
        stateCode: '06',
      },
    ],
  },
  {
    name: 'Mauritius',
    code: 'MU',
    phoneCode: '230',
    currency: 'MUR',
    currencySymbol: '₨',

    emoji: '🇲🇺',

    states: [
      {
        name: 'Agaléga',
        stateCode: 'AG',
      },
      {
        name: 'Beau Bassin-Rose Hill',
        stateCode: 'BR',
      },
      {
        name: 'Cargados Carajos',
        stateCode: 'CC',
      },
      {
        name: 'Curepipe',
        stateCode: 'CU',
      },
      {
        name: 'Flacq District',
        stateCode: 'FL',
      },
      {
        name: 'Grand Port District',
        stateCode: 'GP',
      },
      {
        name: 'Moka District',
        stateCode: 'MO',
      },
      {
        name: 'Pamplemousses District',
        stateCode: 'PA',
      },
      {
        name: 'Plaines Wilhems District',
        stateCode: 'PW',
      },
      {
        name: 'Port Louis',
        stateCode: 'PU',
      },
      {
        name: 'Port Louis District',
        stateCode: 'PL',
      },
      {
        name: 'Quatre Bornes',
        stateCode: 'QB',
      },
      {
        name: 'Rivière du Rempart District',
        stateCode: 'RR',
      },
      {
        name: 'Rivière Noire District',
        stateCode: 'BL',
      },
      {
        name: 'Rodrigues',
        stateCode: 'RO',
      },
      {
        name: 'Savanne District',
        stateCode: 'SA',
      },
      {
        name: 'Vacoas-Phoenix',
        stateCode: 'VP',
      },
    ],
  },
  {
    name: 'Mayotte',
    code: 'YT',
    phoneCode: '262',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇾🇹',

    states: [],
  },
  {
    name: 'Mexico',
    code: 'MX',
    phoneCode: '52',
    currency: 'MXN',
    currencySymbol: '$',

    emoji: '🇲🇽',

    states: [
      {
        name: 'Aguascalientes',
        stateCode: 'AGU',
      },
      {
        name: 'Baja California',
        stateCode: 'BCN',
      },
      {
        name: 'Baja California Sur',
        stateCode: 'BCS',
      },
      {
        name: 'Campeche',
        stateCode: 'CAM',
      },
      {
        name: 'Chiapas',
        stateCode: 'CHP',
      },
      {
        name: 'Chihuahua',
        stateCode: 'CHH',
      },
      {
        name: 'Coahuila',
        stateCode: 'COA',
      },
      {
        name: 'Colima',
        stateCode: 'COL',
      },
      {
        name: 'Durango',
        stateCode: 'DUR',
      },
      {
        name: 'Guanajuato',
        stateCode: 'GUA',
      },
      {
        name: 'Guerrero',
        stateCode: 'GRO',
      },
      {
        name: 'Hidalgo',
        stateCode: 'HID',
      },
      {
        name: 'Jalisco',
        stateCode: 'JAL',
      },
      {
        name: 'México',
        stateCode: 'MEX',
      },
      {
        name: 'Mexico City',
        stateCode: 'CMX',
      },
      {
        name: 'Michoacán',
        stateCode: 'MIC',
      },
      {
        name: 'Morelos',
        stateCode: 'MOR',
      },
      {
        name: 'Nayarit',
        stateCode: 'NAY',
      },
      {
        name: 'Nuevo León',
        stateCode: 'NLE',
      },
      {
        name: 'Oaxaca',
        stateCode: 'OAX',
      },
      {
        name: 'Puebla',
        stateCode: 'PUE',
      },
      {
        name: 'Querétaro',
        stateCode: 'QUE',
      },
      {
        name: 'Quintana Roo',
        stateCode: 'ROO',
      },
      {
        name: 'San Luis Potosí',
        stateCode: 'SLP',
      },
      {
        name: 'Sinaloa',
        stateCode: 'SIN',
      },
      {
        name: 'Sonora',
        stateCode: 'SON',
      },
      {
        name: 'Tabasco',
        stateCode: 'TAB',
      },
      {
        name: 'Tamaulipas',
        stateCode: 'TAM',
      },
      {
        name: 'Tlaxcala',
        stateCode: 'TLA',
      },
      {
        name: 'Veracruz',
        stateCode: 'VER',
      },
      {
        name: 'Yucatán',
        stateCode: 'YUC',
      },
      {
        name: 'Zacatecas',
        stateCode: 'ZAC',
      },
    ],
  },
  {
    name: 'Micronesia',
    code: 'FM',
    phoneCode: '691',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇫🇲',

    states: [
      {
        name: 'Chuuk State',
        stateCode: 'TRK',
      },
      {
        name: 'Kosrae State',
        stateCode: 'KSA',
      },
      {
        name: 'Pohnpei State',
        stateCode: 'PNI',
      },
      {
        name: 'Yap State',
        stateCode: 'YAP',
      },
    ],
  },
  {
    name: 'Moldova',
    code: 'MD',
    phoneCode: '373',
    currency: 'MDL',
    currencySymbol: 'L',

    emoji: '🇲🇩',

    states: [
      {
        name: 'Anenii Noi District',
        stateCode: 'AN',
      },
      {
        name: 'Bălți Municipality',
        stateCode: 'BA',
      },
      {
        name: 'Basarabeasca District',
        stateCode: 'BS',
      },
      {
        name: 'Bender Municipality',
        stateCode: 'BD',
      },
      {
        name: 'Briceni District',
        stateCode: 'BR',
      },
      {
        name: 'Cahul District',
        stateCode: 'CA',
      },
      {
        name: 'Călărași District',
        stateCode: 'CL',
      },
      {
        name: 'Cantemir District',
        stateCode: 'CT',
      },
      {
        name: 'Căușeni District',
        stateCode: 'CS',
      },
      {
        name: 'Chișinău Municipality',
        stateCode: 'CU',
      },
      {
        name: 'Cimișlia District',
        stateCode: 'CM',
      },
      {
        name: 'Criuleni District',
        stateCode: 'CR',
      },
      {
        name: 'Dondușeni District',
        stateCode: 'DO',
      },
      {
        name: 'Drochia District',
        stateCode: 'DR',
      },
      {
        name: 'Dubăsari District',
        stateCode: 'DU',
      },
      {
        name: 'Edineț District',
        stateCode: 'ED',
      },
      {
        name: 'Fălești District',
        stateCode: 'FA',
      },
      {
        name: 'Florești District',
        stateCode: 'FL',
      },
      {
        name: 'Gagauzia',
        stateCode: 'GA',
      },
      {
        name: 'Glodeni District',
        stateCode: 'GL',
      },
      {
        name: 'Hîncești District',
        stateCode: 'HI',
      },
      {
        name: 'Ialoveni District',
        stateCode: 'IA',
      },
      {
        name: 'Nisporeni District',
        stateCode: 'NI',
      },
      {
        name: 'Ocnița District',
        stateCode: 'OC',
      },
      {
        name: 'Orhei District',
        stateCode: 'OR',
      },
      {
        name: 'Rezina District',
        stateCode: 'RE',
      },
      {
        name: 'Rîșcani District',
        stateCode: 'RI',
      },
      {
        name: 'Sîngerei District',
        stateCode: 'SI',
      },
      {
        name: 'Șoldănești District',
        stateCode: 'SD',
      },
      {
        name: 'Soroca District',
        stateCode: 'SO',
      },
      {
        name: 'Ștefan Vodă District',
        stateCode: 'SV',
      },
      {
        name: 'Strășeni District',
        stateCode: 'ST',
      },
      {
        name: 'Taraclia District',
        stateCode: 'TA',
      },
      {
        name: 'Telenești District',
        stateCode: 'TE',
      },
      {
        name: 'Transnistria autonomous territorial unit',
        stateCode: 'SN',
      },
      {
        name: 'Ungheni District',
        stateCode: 'UN',
      },
    ],
  },
  {
    name: 'Monaco',
    code: 'MC',
    phoneCode: '377',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇲🇨',

    states: [],
  },
  {
    name: 'Mongolia',
    code: 'MN',
    phoneCode: '976',
    currency: 'MNT',
    currencySymbol: '₮',

    emoji: '🇲🇳',

    states: [
      {
        name: 'Arkhangai Province',
        stateCode: '073',
      },
      {
        name: 'Bayan-Ölgii Province',
        stateCode: '071',
      },
      {
        name: 'Bayankhongor Province',
        stateCode: '069',
      },
      {
        name: 'Bulgan Province',
        stateCode: '067',
      },
      {
        name: 'Darkhan-Uul Province',
        stateCode: '037',
      },
      {
        name: 'Dornod Province',
        stateCode: '061',
      },
      {
        name: 'Dornogovi Province',
        stateCode: '063',
      },
      {
        name: 'Dundgovi Province',
        stateCode: '059',
      },
      {
        name: 'Govi-Altai Province',
        stateCode: '065',
      },
      {
        name: 'Govisümber Province',
        stateCode: '064',
      },
      {
        name: 'Khentii Province',
        stateCode: '039',
      },
      {
        name: 'Khovd Province',
        stateCode: '043',
      },
      {
        name: 'Khövsgöl Province',
        stateCode: '041',
      },
      {
        name: 'Ömnögovi Province',
        stateCode: '053',
      },
      {
        name: 'Orkhon Province',
        stateCode: '035',
      },
      {
        name: 'Övörkhangai Province',
        stateCode: '055',
      },
      {
        name: 'Selenge Province',
        stateCode: '049',
      },
      {
        name: 'Sükhbaatar Province',
        stateCode: '051',
      },
      {
        name: 'Töv Province',
        stateCode: '047',
      },
      {
        name: 'Uvs Province',
        stateCode: '046',
      },
      {
        name: 'Zavkhan Province',
        stateCode: '057',
      },
    ],
  },
  {
    name: 'Montenegro',
    code: 'ME',
    phoneCode: '382',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇲🇪',

    states: [
      {
        name: 'Andrijevica Municipality',
        stateCode: '01',
      },
      {
        name: 'Bar Municipality',
        stateCode: '02',
      },
      {
        name: 'Berane Municipality',
        stateCode: '03',
      },
      {
        name: 'Bijelo Polje Municipality',
        stateCode: '04',
      },
      {
        name: 'Budva Municipality',
        stateCode: '05',
      },
      {
        name: 'Danilovgrad Municipality',
        stateCode: '07',
      },
      {
        name: 'Gusinje Municipality',
        stateCode: '22',
      },
      {
        name: 'Kolašin Municipality',
        stateCode: '09',
      },
      {
        name: 'Kotor Municipality',
        stateCode: '10',
      },
      {
        name: 'Mojkovac Municipality',
        stateCode: '11',
      },
      {
        name: 'Nikšić Municipality',
        stateCode: '12',
      },
      {
        name: 'Petnjica Municipality',
        stateCode: '23',
      },
      {
        name: 'Plav Municipality',
        stateCode: '13',
      },
      {
        name: 'Pljevlja Municipality',
        stateCode: '14',
      },
      {
        name: 'Plužine Municipality',
        stateCode: '15',
      },
      {
        name: 'Podgorica Municipality',
        stateCode: '16',
      },
      {
        name: 'Rožaje Municipality',
        stateCode: '17',
      },
      {
        name: 'Šavnik Municipality',
        stateCode: '18',
      },
      {
        name: 'Tivat Municipality',
        stateCode: '19',
      },
      {
        name: 'Ulcinj Municipality',
        stateCode: '20',
      },
      {
        name: 'Žabljak Municipality',
        stateCode: '21',
      },
    ],
  },
  {
    name: 'Montserrat',
    code: 'MS',
    phoneCode: '+1-664',
    currency: 'XCD',
    currencySymbol: '$',

    emoji: '🇲🇸',

    states: [],
  },
  {
    name: 'Morocco',
    code: 'MA',
    phoneCode: '212',
    currency: 'MAD',
    currencySymbol: 'DH',

    emoji: '🇲🇦',

    states: [
      {
        name: 'Al Haouz Province',
        stateCode: 'HAO',
      },
      {
        name: 'Al Hoceïma Province',
        stateCode: 'HOC',
      },
      {
        name: 'Aousserd Province',
        stateCode: 'AOU',
      },
      {
        name: 'Assa-Zag Province',
        stateCode: 'ASZ',
      },
      {
        name: 'Azilal Province',
        stateCode: 'AZI',
      },
      {
        name: 'Ben Slimane Province',
        stateCode: 'BES',
      },
      {
        name: 'Béni Mellal-Khénifra',
        stateCode: '05',
      },
      {
        name: 'Béni-Mellal Province',
        stateCode: 'BEM',
      },
      {
        name: 'Berkane Province',
        stateCode: 'BER',
      },
      {
        name: 'Boujdour Province',
        stateCode: 'BOD',
      },
      {
        name: 'Boulemane Province',
        stateCode: 'BOM',
      },
      {
        name: 'Casablanca-Settat',
        stateCode: '06',
      },
      {
        name: 'Chefchaouen Province',
        stateCode: 'CHE',
      },
      {
        name: 'Chichaoua Province',
        stateCode: 'CHI',
      },
      {
        name: 'Dakhla-Oued Ed-Dahab',
        stateCode: '12',
      },
      {
        name: 'Drâa-Tafilalet',
        stateCode: '08',
      },
      {
        name: 'El Hajeb Province',
        stateCode: 'HAJ',
      },
      {
        name: 'El Jadida Province',
        stateCode: 'JDI',
      },
      {
        name: 'Errachidia Province',
        stateCode: 'ERR',
      },
      {
        name: 'Es Semara Province',
        stateCode: 'ESM',
      },
      {
        name: 'Essaouira Province',
        stateCode: 'ESI',
      },
      {
        name: 'Fahs Anjra Province',
        stateCode: 'FAH',
      },
      {
        name: 'Fès-Meknès',
        stateCode: '03',
      },
      {
        name: 'Figuig Province',
        stateCode: 'FIG',
      },
      {
        name: 'Guelmim Province',
        stateCode: 'GUE',
      },
      {
        name: 'Guelmim-Oued Noun',
        stateCode: '10',
      },
      {
        name: 'Ifrane Province',
        stateCode: 'IFR',
      },
      {
        name: 'Inezgane-Aït Melloul Prefecture',
        stateCode: 'INE',
      },
      {
        name: 'Jerada Province',
        stateCode: 'JRA',
      },
      {
        name: 'Kelaat Sraghna Province',
        stateCode: 'KES',
      },
      {
        name: 'Kénitra Province',
        stateCode: 'KEN',
      },
      {
        name: 'Khémisset Province',
        stateCode: 'KHE',
      },
      {
        name: 'Khénifra Province',
        stateCode: 'KHN',
      },
      {
        name: 'Khouribga Province',
        stateCode: 'KHO',
      },
      {
        name: 'Laâyoune Province',
        stateCode: 'LAA',
      },
      {
        name: 'Laâyoune-Sakia El Hamra',
        stateCode: '11',
      },
      {
        name: 'Larache Province',
        stateCode: 'LAR',
      },
      {
        name: 'Marrakesh-Safi',
        stateCode: '07',
      },
      {
        name: 'Mediouna Province',
        stateCode: 'MED',
      },
      {
        name: 'Moulay Yacoub Province',
        stateCode: 'MOU',
      },
      {
        name: 'Nador Province',
        stateCode: 'NAD',
      },
      {
        name: 'Nouaceur Province',
        stateCode: 'NOU',
      },
      {
        name: 'Oriental',
        stateCode: '02',
      },
      {
        name: 'Ouarzazate Province',
        stateCode: 'OUA',
      },
      {
        name: 'Oued Ed-Dahab Province',
        stateCode: 'OUD',
      },
      {
        name: 'Safi Province',
        stateCode: 'SAF',
      },
      {
        name: 'Sefrou Province',
        stateCode: 'SEF',
      },
      {
        name: 'Settat Province',
        stateCode: 'SET',
      },
      {
        name: 'Shtouka Ait Baha Province',
        stateCode: 'CHT',
      },
      {
        name: 'Sidi Kacem Province',
        stateCode: 'SIK',
      },
      {
        name: 'Sidi Youssef Ben Ali',
        stateCode: 'SYB',
      },
      {
        name: 'Souss-Massa',
        stateCode: '09',
      },
      {
        name: 'Tan-Tan Province',
        stateCode: 'TNT',
      },
      {
        name: 'Tanger-Tétouan-Al Hoceïma',
        stateCode: '01',
      },
      {
        name: 'Taounate Province',
        stateCode: 'TAO',
      },
      {
        name: 'Taourirt Province',
        stateCode: 'TAI',
      },
      {
        name: 'Taroudant Province',
        stateCode: 'TAR',
      },
      {
        name: 'Tata Province',
        stateCode: 'TAT',
      },
      {
        name: 'Taza Province',
        stateCode: 'TAZ',
      },
      {
        name: 'Tétouan Province',
        stateCode: 'TET',
      },
      {
        name: 'Tiznit Province',
        stateCode: 'TIZ',
      },
      {
        name: 'Zagora Province',
        stateCode: 'ZAG',
      },
    ],
  },
  {
    name: 'Mozambique',
    code: 'MZ',
    phoneCode: '258',
    currency: 'MZN',
    currencySymbol: 'MT',

    emoji: '🇲🇿',

    states: [
      {
        name: 'Cabo Delgado Province',
        stateCode: 'P',
      },
      {
        name: 'Gaza Province',
        stateCode: 'G',
      },
      {
        name: 'Inhambane Province',
        stateCode: 'I',
      },
      {
        name: 'Manica Province',
        stateCode: 'B',
      },
      {
        name: 'Maputo',
        stateCode: 'MPM',
      },
      {
        name: 'Maputo Province',
        stateCode: 'L',
      },
      {
        name: 'Nampula Province',
        stateCode: 'N',
      },
      {
        name: 'Niassa Province',
        stateCode: 'A',
      },
      {
        name: 'Sofala Province',
        stateCode: 'S',
      },
      {
        name: 'Tete Province',
        stateCode: 'T',
      },
      {
        name: 'Zambezia Province',
        stateCode: 'Q',
      },
    ],
  },
  {
    name: 'Myanmar',
    code: 'MM',
    phoneCode: '95',
    currency: 'MMK',
    currencySymbol: 'K',

    emoji: '🇲🇲',

    states: [
      {
        name: 'Ayeyarwady Region',
        stateCode: '07',
      },
      {
        name: 'Bago',
        stateCode: '02',
      },
      {
        name: 'Chin State',
        stateCode: '14',
      },
      {
        name: 'Kachin State',
        stateCode: '11',
      },
      {
        name: 'Kayah State',
        stateCode: '12',
      },
      {
        name: 'Kayin State',
        stateCode: '13',
      },
      {
        name: 'Magway Region',
        stateCode: '03',
      },
      {
        name: 'Mandalay Region',
        stateCode: '04',
      },
      {
        name: 'Mon State',
        stateCode: '15',
      },
      {
        name: 'Naypyidaw Union Territory',
        stateCode: '18',
      },
      {
        name: 'Rakhine State',
        stateCode: '16',
      },
      {
        name: 'Sagaing Region',
        stateCode: '01',
      },
      {
        name: 'Shan State',
        stateCode: '17',
      },
      {
        name: 'Tanintharyi Region',
        stateCode: '05',
      },
      {
        name: 'Yangon Region',
        stateCode: '06',
      },
    ],
  },
  {
    name: 'Namibia',
    code: 'NA',
    phoneCode: '264',
    currency: 'NAD',
    currencySymbol: '$',

    emoji: '🇳🇦',

    states: [
      {
        name: 'Erongo Region',
        stateCode: 'ER',
      },
      {
        name: 'Hardap Region',
        stateCode: 'HA',
      },
      {
        name: 'Karas Region',
        stateCode: 'KA',
      },
      {
        name: 'Kavango East Region',
        stateCode: 'KE',
      },
      {
        name: 'Kavango West Region',
        stateCode: 'KW',
      },
      {
        name: 'Khomas Region',
        stateCode: 'KH',
      },
      {
        name: 'Kunene Region',
        stateCode: 'KU',
      },
      {
        name: 'Ohangwena Region',
        stateCode: 'OW',
      },
      {
        name: 'Omaheke Region',
        stateCode: 'OH',
      },
      {
        name: 'Omusati Region',
        stateCode: 'OS',
      },
      {
        name: 'Oshana Region',
        stateCode: 'ON',
      },
      {
        name: 'Oshikoto Region',
        stateCode: 'OT',
      },
      {
        name: 'Otjozondjupa Region',
        stateCode: 'OD',
      },
      {
        name: 'Zambezi Region',
        stateCode: 'CA',
      },
    ],
  },
  {
    name: 'Nauru',
    code: 'NR',
    phoneCode: '674',
    currency: 'AUD',
    currencySymbol: '$',

    emoji: '🇳🇷',

    states: [
      {
        name: 'Aiwo District',
        stateCode: '01',
      },
      {
        name: 'Anabar District',
        stateCode: '02',
      },
      {
        name: 'Anetan District',
        stateCode: '03',
      },
      {
        name: 'Anibare District',
        stateCode: '04',
      },
      {
        name: 'Baiti District',
        stateCode: '05',
      },
      {
        name: 'Boe District',
        stateCode: '06',
      },
      {
        name: 'Buada District',
        stateCode: '07',
      },
      {
        name: 'Denigomodu District',
        stateCode: '08',
      },
      {
        name: 'Ewa District',
        stateCode: '09',
      },
      {
        name: 'Ijuw District',
        stateCode: '10',
      },
      {
        name: 'Meneng District',
        stateCode: '11',
      },
      {
        name: 'Nibok District',
        stateCode: '12',
      },
      {
        name: 'Uaboe District',
        stateCode: '13',
      },
      {
        name: 'Yaren District',
        stateCode: '14',
      },
    ],
  },
  {
    name: 'Nepal',
    code: 'NP',
    phoneCode: '977',
    currency: 'NPR',
    currencySymbol: '₨',

    emoji: '🇳🇵',

    states: [
      {
        name: 'Bagmati Zone',
        stateCode: 'BA',
      },
      {
        name: 'Bheri Zone',
        stateCode: 'BH',
      },
      {
        name: 'Central Region',
        stateCode: '1',
      },
      {
        name: 'Dhaulagiri Zone',
        stateCode: 'DH',
      },
      {
        name: 'Eastern Development Region',
        stateCode: '4',
      },
      {
        name: 'Far-Western Development Region',
        stateCode: '5',
      },
      {
        name: 'Gandaki Zone',
        stateCode: 'GA',
      },
      {
        name: 'Janakpur Zone',
        stateCode: 'JA',
      },
      {
        name: 'Karnali Zone',
        stateCode: 'KA',
      },
      {
        name: 'Kosi Zone',
        stateCode: 'KO',
      },
      {
        name: 'Lumbini Zone',
        stateCode: 'LU',
      },
      {
        name: 'Mahakali Zone',
        stateCode: 'MA',
      },
      {
        name: 'Mechi Zone',
        stateCode: 'ME',
      },
      {
        name: 'Mid-Western Region',
        stateCode: '2',
      },
      {
        name: 'Narayani Zone',
        stateCode: 'NA',
      },
      {
        name: 'Rapti Zone',
        stateCode: 'RA',
      },
      {
        name: 'Sagarmatha Zone',
        stateCode: 'SA',
      },
      {
        name: 'Seti Zone',
        stateCode: 'SE',
      },
      {
        name: 'Western Region',
        stateCode: '3',
      },
    ],
  },
  {
    name: 'Netherlands The',
    code: 'NL',
    phoneCode: '31',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇳🇱',

    states: [
      {
        name: 'Bonaire',
        stateCode: 'BQ1',
      },
      {
        name: 'Drenthe',
        stateCode: 'DR',
      },
      {
        name: 'Flevoland',
        stateCode: 'FL',
      },
      {
        name: 'Friesland',
        stateCode: 'FR',
      },
      {
        name: 'Gelderland',
        stateCode: 'GE',
      },
      {
        name: 'Groningen',
        stateCode: 'GR',
      },
      {
        name: 'Limburg',
        stateCode: 'LI',
      },
      {
        name: 'North Brabant',
        stateCode: 'NB',
      },
      {
        name: 'North Holland',
        stateCode: 'NH',
      },
      {
        name: 'Overijssel',
        stateCode: 'OV',
      },
      {
        name: 'Saba',
        stateCode: 'BQ2',
      },
      {
        name: 'Sint Eustatius',
        stateCode: 'BQ3',
      },
      {
        name: 'South Holland',
        stateCode: 'ZH',
      },
      {
        name: 'Utrecht',
        stateCode: 'UT',
      },
      {
        name: 'Zeeland',
        stateCode: 'ZE',
      },
    ],
  },
  {
    name: 'New Caledonia',
    code: 'NC',
    phoneCode: '687',
    currency: 'XPF',
    currencySymbol: '₣',

    emoji: '🇳🇨',

    states: [],
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    phoneCode: '64',
    currency: 'NZD',
    currencySymbol: '$',

    emoji: '🇳🇿',

    states: [
      {
        name: 'Auckland Region',
        stateCode: 'AUK',
      },
      {
        name: 'Bay of Plenty Region',
        stateCode: 'BOP',
      },
      {
        name: 'Canterbury Region',
        stateCode: 'CAN',
      },
      {
        name: 'Chatham Islands',
        stateCode: 'CIT',
      },
      {
        name: 'Gisborne District',
        stateCode: 'GIS',
      },
      {
        name: "Hawke's Bay Region",
        stateCode: 'HKB',
      },
      {
        name: 'Manawatu-Wanganui Region',
        stateCode: 'MWT',
      },
      {
        name: 'Marlborough Region',
        stateCode: 'MBH',
      },
      {
        name: 'Nelson Region',
        stateCode: 'NSN',
      },
      {
        name: 'Northland Region',
        stateCode: 'NTL',
      },
      {
        name: 'Otago Region',
        stateCode: 'OTA',
      },
      {
        name: 'Southland Region',
        stateCode: 'STL',
      },
      {
        name: 'Taranaki Region',
        stateCode: 'TKI',
      },
      {
        name: 'Tasman District',
        stateCode: 'TAS',
      },
      {
        name: 'Waikato Region',
        stateCode: 'WKO',
      },
      {
        name: 'Wellington Region',
        stateCode: 'WGN',
      },
      {
        name: 'West Coast Region',
        stateCode: 'WTC',
      },
    ],
  },
  {
    name: 'Nicaragua',
    code: 'NI',
    phoneCode: '505',
    currency: 'NIO',
    currencySymbol: 'C$',

    emoji: '🇳🇮',

    states: [
      {
        name: 'Boaco Department',
        stateCode: 'BO',
      },
      {
        name: 'Carazo Department',
        stateCode: 'CA',
      },
      {
        name: 'Chinandega Department',
        stateCode: 'CI',
      },
      {
        name: 'Chontales Department',
        stateCode: 'CO',
      },
      {
        name: 'Estelí Department',
        stateCode: 'ES',
      },
      {
        name: 'Granada Department',
        stateCode: 'GR',
      },
      {
        name: 'Jinotega Department',
        stateCode: 'JI',
      },
      {
        name: 'León Department',
        stateCode: 'LE',
      },
      {
        name: 'Madriz Department',
        stateCode: 'MD',
      },
      {
        name: 'Managua Department',
        stateCode: 'MN',
      },
      {
        name: 'Masaya Department',
        stateCode: 'MS',
      },
      {
        name: 'Matagalpa Department',
        stateCode: 'MT',
      },
      {
        name: 'North Caribbean Coast Autonomous Region',
        stateCode: 'AN',
      },
      {
        name: 'Río San Juan Department',
        stateCode: 'SJ',
      },
      {
        name: 'Rivas Department',
        stateCode: 'RI',
      },
      {
        name: 'South Caribbean Coast Autonomous Region',
        stateCode: 'AS',
      },
    ],
  },
  {
    name: 'Niger',
    code: 'NE',
    phoneCode: '227',
    currency: 'XOF',
    currencySymbol: 'CFA',

    emoji: '🇳🇪',

    states: [
      {
        name: 'Agadez Region',
        stateCode: '1',
      },
      {
        name: 'Diffa Region',
        stateCode: '2',
      },
      {
        name: 'Dosso Region',
        stateCode: '3',
      },
      {
        name: 'Maradi Region',
        stateCode: '4',
      },
      {
        name: 'Tahoua Region',
        stateCode: '5',
      },
      {
        name: 'Tillabéri Region',
        stateCode: '6',
      },
      {
        name: 'Zinder Region',
        stateCode: '7',
      },
    ],
  },
  {
    name: 'Nigeria',
    code: 'NG',
    phoneCode: '234',
    currency: 'NGN',
    currencySymbol: '₦',

    emoji: '🇳🇬',

    states: [
      {
        name: 'Abia State',
        stateCode: 'AB',
      },
      {
        name: 'Adamawa State',
        stateCode: 'AD',
      },
      {
        name: 'Akwa Ibom State',
        stateCode: 'AK',
      },
      {
        name: 'Anambra State',
        stateCode: 'AN',
      },
      {
        name: 'Bauchi State',
        stateCode: 'BA',
      },
      {
        name: 'Bayelsa State',
        stateCode: 'BY',
      },
      {
        name: 'Benue State',
        stateCode: 'BE',
      },
      {
        name: 'Borno State',
        stateCode: 'BO',
      },
      {
        name: 'Cross River State',
        stateCode: 'CR',
      },
      {
        name: 'Delta State',
        stateCode: 'DE',
      },
      {
        name: 'Ebonyi State',
        stateCode: 'EB',
      },
      {
        name: 'Edo State',
        stateCode: 'ED',
      },
      {
        name: 'Ekiti State',
        stateCode: 'EK',
      },
      {
        name: 'Enugu State',
        stateCode: 'EN',
      },
      {
        name: 'Gombe State',
        stateCode: 'GO',
      },
      {
        name: 'Imo State',
        stateCode: 'IM',
      },
      {
        name: 'Jigawa State',
        stateCode: 'JI',
      },
      {
        name: 'Kaduna State',
        stateCode: 'KD',
      },
      {
        name: 'Kano State',
        stateCode: 'KN',
      },
      {
        name: 'Katsina State',
        stateCode: 'KT',
      },
      {
        name: 'Kebbi State',
        stateCode: 'KE',
      },
      {
        name: 'Kogi State',
        stateCode: 'KO',
      },
      {
        name: 'Kwara State',
        stateCode: 'KW',
      },
      {
        name: 'Lagos',
        stateCode: 'LA',
      },
      {
        name: 'Nasarawa State',
        stateCode: 'NA',
      },
      {
        name: 'Niger State',
        stateCode: 'NI',
      },
      {
        name: 'Ogun State',
        stateCode: 'OG',
      },
      {
        name: 'Ondo State',
        stateCode: 'ON',
      },
      {
        name: 'Osun State',
        stateCode: 'OS',
      },
      {
        name: 'Oyo State',
        stateCode: 'OY',
      },
      {
        name: 'Plateau State',
        stateCode: 'PL',
      },
      {
        name: 'Sokoto State',
        stateCode: 'SO',
      },
      {
        name: 'Taraba State',
        stateCode: 'TA',
      },
      {
        name: 'Yobe State',
        stateCode: 'YO',
      },
      {
        name: 'Zamfara State',
        stateCode: 'ZA',
      },
    ],
  },
  {
    name: 'Niue',
    code: 'NU',
    phoneCode: '683',
    currency: 'NZD',
    currencySymbol: '$',

    emoji: '🇳🇺',

    states: [],
  },
  {
    name: 'Norfolk Island',
    code: 'NF',
    phoneCode: '672',
    currency: 'AUD',
    currencySymbol: '$',

    emoji: '🇳🇫',

    states: [],
  },
  {
    name: 'Northern Mariana Islands',
    code: 'MP',
    phoneCode: '+1-670',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇲🇵',

    states: [],
  },
  {
    name: 'Norway',
    code: 'NO',
    phoneCode: '47',
    currency: 'NOK',
    currencySymbol: 'kr',

    emoji: '🇳🇴',

    states: [
      {
        name: 'Akershus',
        stateCode: '02',
      },
      {
        name: 'Buskerud',
        stateCode: '06',
      },
      {
        name: 'Finnmark',
        stateCode: '20',
      },
      {
        name: 'Hedmark',
        stateCode: '04',
      },
      {
        name: 'Hordaland',
        stateCode: '12',
      },
      {
        name: 'Jan Mayen',
        stateCode: '22',
      },
      {
        name: 'Møre og Romsdal',
        stateCode: '15',
      },
      {
        name: 'Nord-Trøndelag',
        stateCode: '17',
      },
      {
        name: 'Nordland',
        stateCode: '18',
      },
      {
        name: 'Oppland',
        stateCode: '05',
      },
      {
        name: 'Oslo',
        stateCode: '03',
      },
      {
        name: 'Østfold',
        stateCode: '01',
      },
      {
        name: 'Rogaland',
        stateCode: '11',
      },
      {
        name: 'Sogn og Fjordane',
        stateCode: '14',
      },
      {
        name: 'Sør-Trøndelag',
        stateCode: '16',
      },
      {
        name: 'Svalbard',
        stateCode: '21',
      },
      {
        name: 'Telemark',
        stateCode: '08',
      },
      {
        name: 'Troms',
        stateCode: '19',
      },
      {
        name: 'Trøndelag',
        stateCode: '50',
      },
      {
        name: 'Vest-Agder',
        stateCode: '10',
      },
      {
        name: 'Vestfold',
        stateCode: '07',
      },
    ],
  },
  {
    name: 'Oman',
    code: 'OM',
    phoneCode: '968',
    currency: 'OMR',
    currencySymbol: '.ع.ر',

    emoji: '🇴🇲',

    states: [
      {
        name: 'Ad Dakhiliyah Governorate',
        stateCode: 'DA',
      },
      {
        name: 'Ad Dhahirah Governorate',
        stateCode: 'ZA',
      },
      {
        name: 'Al Batinah North Governorate',
        stateCode: 'BS',
      },
      {
        name: 'Al Batinah Region',
        stateCode: 'BA',
      },
      {
        name: 'Al Batinah South Governorate',
        stateCode: 'BJ',
      },
      {
        name: 'Al Buraimi Governorate',
        stateCode: 'BU',
      },
      {
        name: 'Al Wusta Governorate',
        stateCode: 'WU',
      },
      {
        name: 'Ash Sharqiyah North Governorate',
        stateCode: 'SS',
      },
      {
        name: 'Ash Sharqiyah Region',
        stateCode: 'SH',
      },
      {
        name: 'Ash Sharqiyah South Governorate',
        stateCode: 'SJ',
      },
      {
        name: 'Dhofar Governorate',
        stateCode: 'ZU',
      },
      {
        name: 'Musandam Governorate',
        stateCode: 'MU',
      },
      {
        name: 'Muscat Governorate',
        stateCode: 'MA',
      },
    ],
  },
  {
    name: 'Pakistan',
    code: 'PK',
    phoneCode: '92',
    currency: 'PKR',
    currencySymbol: '₨',

    emoji: '🇵🇰',

    states: [
      {
        name: 'Azad Kashmir',
        stateCode: 'JK',
      },
      {
        name: 'Balochistan',
        stateCode: 'BA',
      },
      {
        name: 'Federally Administered Tribal Areas',
        stateCode: 'TA',
      },
      {
        name: 'Gilgit-Baltistan',
        stateCode: 'GB',
      },
      {
        name: 'Khyber Pakhtunkhwa',
        stateCode: 'KP',
      },
      {
        name: 'Punjab',
        stateCode: 'PB',
      },
      {
        name: 'Sindh',
        stateCode: 'SD',
      },
    ],
  },
  {
    name: 'Palau',
    code: 'PW',
    phoneCode: '680',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇵🇼',

    states: [
      {
        name: 'Aimeliik',
        stateCode: '002',
      },
      {
        name: 'Airai',
        stateCode: '004',
      },
      {
        name: 'Angaur',
        stateCode: '010',
      },
      {
        name: 'Hatohobei',
        stateCode: '050',
      },
      {
        name: 'Kayangel',
        stateCode: '100',
      },
      {
        name: 'Koror',
        stateCode: '150',
      },
      {
        name: 'Melekeok',
        stateCode: '212',
      },
      {
        name: 'Ngaraard',
        stateCode: '214',
      },
      {
        name: 'Ngarchelong',
        stateCode: '218',
      },
      {
        name: 'Ngardmau',
        stateCode: '222',
      },
      {
        name: 'Ngatpang',
        stateCode: '224',
      },
      {
        name: 'Ngchesar',
        stateCode: '226',
      },
      {
        name: 'Ngeremlengui',
        stateCode: '227',
      },
      {
        name: 'Ngiwal',
        stateCode: '228',
      },
      {
        name: 'Peleliu',
        stateCode: '350',
      },
      {
        name: 'Sonsorol',
        stateCode: '370',
      },
    ],
  },
  {
    name: 'Palestinian Territory Occupied',
    code: 'PS',
    phoneCode: '970',
    currency: 'ILS',
    currencySymbol: '₪',

    emoji: '🇵🇸',

    states: [],
  },
  {
    name: 'Panama',
    code: 'PA',
    phoneCode: '507',
    currency: 'PAB',
    currencySymbol: 'B/.',

    emoji: '🇵🇦',

    states: [
      {
        name: 'Bocas del Toro Province',
        stateCode: '1',
      },
      {
        name: 'Chiriquí Province',
        stateCode: '4',
      },
      {
        name: 'Coclé Province',
        stateCode: '2',
      },
      {
        name: 'Colón Province',
        stateCode: '3',
      },
      {
        name: 'Darién Province',
        stateCode: '5',
      },
      {
        name: 'Emberá-Wounaan Comarca',
        stateCode: 'EM',
      },
      {
        name: 'Guna Yala',
        stateCode: 'KY',
      },
      {
        name: 'Herrera Province',
        stateCode: '6',
      },
      {
        name: 'Los Santos Province',
        stateCode: '7',
      },
      {
        name: 'Ngöbe-Buglé Comarca',
        stateCode: 'NB',
      },
      {
        name: 'Panamá Oeste Province',
        stateCode: '10',
      },
      {
        name: 'Panamá Province',
        stateCode: '8',
      },
      {
        name: 'Veraguas Province',
        stateCode: '9',
      },
    ],
  },
  {
    name: 'Papua new Guinea',
    code: 'PG',
    phoneCode: '675',
    currency: 'PGK',
    currencySymbol: 'K',

    emoji: '🇵🇬',

    states: [
      {
        name: 'Bougainville',
        stateCode: 'NSB',
      },
      {
        name: 'Central Province',
        stateCode: 'CPM',
      },
      {
        name: 'Chimbu Province',
        stateCode: 'CPK',
      },
      {
        name: 'East New Britain',
        stateCode: 'EBR',
      },
      {
        name: 'Eastern Highlands Province',
        stateCode: 'EHG',
      },
      {
        name: 'Enga Province',
        stateCode: 'EPW',
      },
      {
        name: 'Gulf',
        stateCode: 'GPK',
      },
      {
        name: 'Hela',
        stateCode: 'HLA',
      },
      {
        name: 'Jiwaka Province',
        stateCode: 'JWK',
      },
      {
        name: 'Madang Province',
        stateCode: 'MPM',
      },
      {
        name: 'Manus Province',
        stateCode: 'MRL',
      },
      {
        name: 'Milne Bay Province',
        stateCode: 'MBA',
      },
      {
        name: 'Morobe Province',
        stateCode: 'MPL',
      },
      {
        name: 'New Ireland Province',
        stateCode: 'NIK',
      },
      {
        name: 'Oro Province',
        stateCode: 'NPP',
      },
      {
        name: 'Port Moresby',
        stateCode: 'NCD',
      },
      {
        name: 'Sandaun Province',
        stateCode: 'SAN',
      },
      {
        name: 'Southern Highlands Province',
        stateCode: 'SHM',
      },
      {
        name: 'West New Britain Province',
        stateCode: 'WBK',
      },
      {
        name: 'Western Highlands Province',
        stateCode: 'WHM',
      },
      {
        name: 'Western Province',
        stateCode: 'WPD',
      },
    ],
  },
  {
    name: 'Paraguay',
    code: 'PY',
    phoneCode: '595',
    currency: 'PYG',
    currencySymbol: '₲',

    emoji: '🇵🇾',

    states: [
      {
        name: 'Alto Paraguay Department',
        stateCode: '16',
      },
      {
        name: 'Alto Paraná Department',
        stateCode: '10',
      },
      {
        name: 'Amambay Department',
        stateCode: '13',
      },
      {
        name: 'Boquerón Department',
        stateCode: '19',
      },
      {
        name: 'Caaguazú',
        stateCode: '5',
      },
      {
        name: 'Caazapá',
        stateCode: '6',
      },
      {
        name: 'Canindeyú',
        stateCode: '14',
      },
      {
        name: 'Central Department',
        stateCode: '11',
      },
      {
        name: 'Concepción Department',
        stateCode: '1',
      },
      {
        name: 'Cordillera Department',
        stateCode: '3',
      },
      {
        name: 'Guairá Department',
        stateCode: '4',
      },
      {
        name: 'Itapúa',
        stateCode: '7',
      },
      {
        name: 'Misiones Department',
        stateCode: '8',
      },
      {
        name: 'Ñeembucú Department',
        stateCode: '12',
      },
      {
        name: 'Paraguarí Department',
        stateCode: '9',
      },
      {
        name: 'Presidente Hayes Department',
        stateCode: '15',
      },
      {
        name: 'San Pedro Department',
        stateCode: '2',
      },
    ],
  },
  {
    name: 'Peru',
    code: 'PE',
    phoneCode: '51',
    currency: 'PEN',
    currencySymbol: 'S/.',

    emoji: '🇵🇪',

    states: [
      {
        name: 'Amazonas',
        stateCode: 'AMA',
      },
      {
        name: 'Áncash',
        stateCode: 'ANC',
      },
      {
        name: 'Apurímac',
        stateCode: 'APU',
      },
      {
        name: 'Arequipa',
        stateCode: 'ARE',
      },
      {
        name: 'Ayacucho',
        stateCode: 'AYA',
      },
      {
        name: 'Cajamarca',
        stateCode: 'CAJ',
      },
      {
        name: 'Callao',
        stateCode: 'CAL',
      },
      {
        name: 'Cusco',
        stateCode: 'CUS',
      },
      {
        name: 'Huancavelica',
        stateCode: 'HUV',
      },
      {
        name: 'Huanuco',
        stateCode: 'HUC',
      },
      {
        name: 'Ica',
        stateCode: 'ICA',
      },
      {
        name: 'Junín',
        stateCode: 'JUN',
      },
      {
        name: 'La Libertad',
        stateCode: 'LAL',
      },
      {
        name: 'Lambayeque',
        stateCode: 'LAM',
      },
      {
        name: 'Lima',
        stateCode: 'LIM',
      },
      {
        name: 'Madre de Dios',
        stateCode: 'MDD',
      },
      {
        name: 'Moquegua',
        stateCode: 'MOQ',
      },
      {
        name: 'Pasco',
        stateCode: 'PAS',
      },
      {
        name: 'Piura',
        stateCode: 'PIU',
      },
      {
        name: 'Puno',
        stateCode: 'PUN',
      },
      {
        name: 'San Martín',
        stateCode: 'SAM',
      },
      {
        name: 'Tacna',
        stateCode: 'TAC',
      },
      {
        name: 'Tumbes',
        stateCode: 'TUM',
      },
      {
        name: 'Ucayali',
        stateCode: 'UCA',
      },
    ],
  },
  {
    name: 'Philippines',
    code: 'PH',
    phoneCode: '63',
    currency: 'PHP',
    currencySymbol: '₱',

    emoji: '🇵🇭',

    states: [
      {
        name: 'Abra',
        stateCode: 'ABR',
      },
      {
        name: 'Agusan del Norte',
        stateCode: 'AGN',
      },
      {
        name: 'Agusan del Sur',
        stateCode: 'AGS',
      },
      {
        name: 'Aklan',
        stateCode: 'AKL',
      },
      {
        name: 'Albay',
        stateCode: 'ALB',
      },
      {
        name: 'Antique',
        stateCode: 'ANT',
      },
      {
        name: 'Apayao',
        stateCode: 'APA',
      },
      {
        name: 'Aurora',
        stateCode: 'AUR',
      },
      {
        name: 'Autonomous Region in Muslim Mindanao',
        stateCode: '14',
      },
      {
        name: 'Basilan',
        stateCode: 'BAS',
      },
      {
        name: 'Bataan',
        stateCode: 'BAN',
      },
      {
        name: 'Batanes',
        stateCode: 'BTN',
      },
      {
        name: 'Batangas',
        stateCode: 'BTG',
      },
      {
        name: 'Benguet',
        stateCode: 'BEN',
      },
      {
        name: 'Bicol Region',
        stateCode: '05',
      },
      {
        name: 'Biliran',
        stateCode: 'BIL',
      },
      {
        name: 'Bohol',
        stateCode: 'BOH',
      },
      {
        name: 'Bukidnon',
        stateCode: 'BUK',
      },
      {
        name: 'Bulacan',
        stateCode: 'BUL',
      },
      {
        name: 'Cagayan',
        stateCode: 'CAG',
      },
      {
        name: 'Cagayan Valley',
        stateCode: '02',
      },
      {
        name: 'Calabarzon',
        stateCode: '40',
      },
      {
        name: 'Camarines Norte',
        stateCode: 'CAN',
      },
      {
        name: 'Camarines Sur',
        stateCode: 'CAS',
      },
      {
        name: 'Camiguin',
        stateCode: 'CAM',
      },
      {
        name: 'Capiz',
        stateCode: 'CAP',
      },
      {
        name: 'Caraga',
        stateCode: '13',
      },
      {
        name: 'Catanduanes',
        stateCode: 'CAT',
      },
      {
        name: 'Cavite',
        stateCode: 'CAV',
      },
      {
        name: 'Cebu',
        stateCode: 'CEB',
      },
      {
        name: 'Central Luzon',
        stateCode: '03',
      },
      {
        name: 'Central Visayas',
        stateCode: '07',
      },
      {
        name: 'Compostela Valley',
        stateCode: 'COM',
      },
      {
        name: 'Cordillera Administrative Region',
        stateCode: '15',
      },
      {
        name: 'Cotabato',
        stateCode: 'NCO',
      },
      {
        name: 'Davao del Norte',
        stateCode: 'DAV',
      },
      {
        name: 'Davao del Sur',
        stateCode: 'DAS',
      },
      {
        name: 'Davao Occidental',
        stateCode: 'DVO',
      },
      {
        name: 'Davao Oriental',
        stateCode: 'DAO',
      },
      {
        name: 'Davao Region',
        stateCode: '11',
      },
      {
        name: 'Dinagat Islands',
        stateCode: 'DIN',
      },
      {
        name: 'Eastern Samar',
        stateCode: 'EAS',
      },
      {
        name: 'Eastern Visayas',
        stateCode: '08',
      },
      {
        name: 'Guimaras',
        stateCode: 'GUI',
      },
      {
        name: 'Ifugao',
        stateCode: 'IFU',
      },
      {
        name: 'Ilocos Norte',
        stateCode: 'ILN',
      },
      {
        name: 'Ilocos Region',
        stateCode: '01',
      },
      {
        name: 'Ilocos Sur',
        stateCode: 'ILS',
      },
      {
        name: 'Iloilo',
        stateCode: 'ILI',
      },
      {
        name: 'Isabela',
        stateCode: 'ISA',
      },
      {
        name: 'Kalinga',
        stateCode: 'KAL',
      },
      {
        name: 'La Union',
        stateCode: 'LUN',
      },
      {
        name: 'Laguna',
        stateCode: 'LAG',
      },
      {
        name: 'Lanao del Norte',
        stateCode: 'LAN',
      },
      {
        name: 'Lanao del Sur',
        stateCode: 'LAS',
      },
      {
        name: 'Leyte',
        stateCode: 'LEY',
      },
      {
        name: 'Maguindanao',
        stateCode: 'MAG',
      },
      {
        name: 'Marinduque',
        stateCode: 'MAD',
      },
      {
        name: 'Masbate',
        stateCode: 'MAS',
      },
      {
        name: 'Metro Manila',
        stateCode: 'NCR',
      },
      {
        name: 'Mimaropa',
        stateCode: '41',
      },
      {
        name: 'Misamis Occidental',
        stateCode: 'MSC',
      },
      {
        name: 'Misamis Oriental',
        stateCode: 'MSR',
      },
      {
        name: 'Mountain Province',
        stateCode: 'MOU',
      },
      {
        name: 'Negros Occidental',
        stateCode: 'NEC',
      },
      {
        name: 'Negros Oriental',
        stateCode: 'NER',
      },
      {
        name: 'Northern Mindanao',
        stateCode: '10',
      },
      {
        name: 'Northern Samar',
        stateCode: 'NSA',
      },
      {
        name: 'Nueva Ecija',
        stateCode: 'NUE',
      },
      {
        name: 'Nueva Vizcaya',
        stateCode: 'NUV',
      },
      {
        name: 'Occidental Mindoro',
        stateCode: 'MDC',
      },
      {
        name: 'Oriental Mindoro',
        stateCode: 'MDR',
      },
      {
        name: 'Palawan',
        stateCode: 'PLW',
      },
      {
        name: 'Pampanga',
        stateCode: 'PAM',
      },
      {
        name: 'Pangasinan',
        stateCode: 'PAN',
      },
      {
        name: 'Quezon',
        stateCode: 'QUE',
      },
      {
        name: 'Quirino',
        stateCode: 'QUI',
      },
      {
        name: 'Rizal',
        stateCode: 'RIZ',
      },
      {
        name: 'Romblon',
        stateCode: 'ROM',
      },
      {
        name: 'Sarangani',
        stateCode: 'SAR',
      },
      {
        name: 'Siquijor',
        stateCode: 'SIG',
      },
      {
        name: 'Soccsksargen',
        stateCode: '12',
      },
      {
        name: 'Sorsogon',
        stateCode: 'SOR',
      },
      {
        name: 'South Cotabato',
        stateCode: 'SCO',
      },
      {
        name: 'Southern Leyte',
        stateCode: 'SLE',
      },
      {
        name: 'Sultan Kudarat',
        stateCode: 'SUK',
      },
      {
        name: 'Sulu',
        stateCode: 'SLU',
      },
      {
        name: 'Surigao del Norte',
        stateCode: 'SUN',
      },
      {
        name: 'Surigao del Sur',
        stateCode: 'SUR',
      },
      {
        name: 'Tarlac',
        stateCode: 'TAR',
      },
      {
        name: 'Tawi-Tawi',
        stateCode: 'TAW',
      },
      {
        name: 'Western Visayas',
        stateCode: '06',
      },
      {
        name: 'Zambales',
        stateCode: 'ZMB',
      },
      {
        name: 'Zamboanga del Norte',
        stateCode: 'ZAN',
      },
      {
        name: 'Zamboanga del Sur',
        stateCode: 'ZAS',
      },
      {
        name: 'Zamboanga Peninsula',
        stateCode: '09',
      },
      {
        name: 'Zamboanga Sibugay',
        stateCode: 'ZSI',
      },
    ],
  },
  {
    name: 'Pitcairn Island',
    code: 'PN',
    phoneCode: '870',
    currency: 'NZD',
    currencySymbol: '$',

    emoji: '🇵🇳',

    states: [],
  },
  {
    name: 'Poland',
    code: 'PL',
    phoneCode: '48',
    currency: 'PLN',
    currencySymbol: 'zł',

    emoji: '🇵🇱',

    states: [
      {
        name: 'Greater Poland Voivodeship',
        stateCode: 'WP',
      },
      {
        name: 'Kuyavian-Pomeranian Voivodeship',
        stateCode: 'KP',
      },
      {
        name: 'Lesser Poland Voivodeship',
        stateCode: 'MA',
      },
      {
        name: 'Lower Silesian Voivodeship',
        stateCode: 'DS',
      },
      {
        name: 'Lublin Voivodeship',
        stateCode: 'LU',
      },
      {
        name: 'Lubusz Voivodeship',
        stateCode: 'LB',
      },
      {
        name: 'Łódź Voivodeship',
        stateCode: 'LD',
      },
      {
        name: 'Masovian Voivodeship',
        stateCode: 'MZ',
      },
      {
        name: 'Opole Voivodeship',
        stateCode: 'OP',
      },
      {
        name: 'Podkarpackie Voivodeship',
        stateCode: 'PK',
      },
      {
        name: 'Podlaskie Voivodeship',
        stateCode: 'PD',
      },
      {
        name: 'Pomeranian Voivodeship',
        stateCode: 'PM',
      },
      {
        name: 'Silesian Voivodeship',
        stateCode: 'SL',
      },
      {
        name: 'Świętokrzyskie Voivodeship',
        stateCode: 'SK',
      },
      {
        name: 'Warmian-Masurian Voivodeship',
        stateCode: 'WN',
      },
      {
        name: 'West Pomeranian Voivodeship',
        stateCode: 'ZP',
      },
    ],
  },
  {
    name: 'Portugal',
    code: 'PT',
    phoneCode: '351',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇵🇹',

    states: [
      {
        name: 'Aveiro District',
        stateCode: '01',
      },
      {
        name: 'Azores',
        stateCode: '20',
      },
      {
        name: 'Beja District',
        stateCode: '02',
      },
      {
        name: 'Braga District',
        stateCode: '03',
      },
      {
        name: 'Bragança District',
        stateCode: '04',
      },
      {
        name: 'Castelo Branco District',
        stateCode: '05',
      },
      {
        name: 'Coimbra District',
        stateCode: '06',
      },
      {
        name: 'Évora District',
        stateCode: '07',
      },
      {
        name: 'Faro District',
        stateCode: '08',
      },
      {
        name: 'Guarda District',
        stateCode: '09',
      },
      {
        name: 'Leiria District',
        stateCode: '10',
      },
      {
        name: 'Lisbon District',
        stateCode: '11',
      },
      {
        name: 'Madeira',
        stateCode: '30',
      },
      {
        name: 'Portalegre District',
        stateCode: '12',
      },
      {
        name: 'Porto District',
        stateCode: '13',
      },
      {
        name: 'Santarém District',
        stateCode: '14',
      },
      {
        name: 'Setúbal District',
        stateCode: '15',
      },
      {
        name: 'Viana do Castelo District',
        stateCode: '16',
      },
      {
        name: 'Vila Real District',
        stateCode: '17',
      },
      {
        name: 'Viseu District',
        stateCode: '18',
      },
    ],
  },
  {
    name: 'Puerto Rico',
    code: 'PR',
    phoneCode: '+1-787 and 1-939',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇵🇷',

    states: [],
  },
  {
    name: 'Qatar',
    code: 'QA',
    phoneCode: '974',
    currency: 'QAR',
    currencySymbol: 'ق.ر',

    emoji: '🇶🇦',

    states: [
      {
        name: 'Al Daayen',
        stateCode: 'ZA',
      },
      {
        name: 'Al Khor',
        stateCode: 'KH',
      },
      {
        name: 'Al Rayyan Municipality',
        stateCode: 'RA',
      },
      {
        name: 'Al Wakrah',
        stateCode: 'WA',
      },
      {
        name: 'Al-Shahaniya',
        stateCode: 'SH',
      },
      {
        name: 'Doha',
        stateCode: 'DA',
      },
      {
        name: 'Madinat ash Shamal',
        stateCode: 'MS',
      },
      {
        name: 'Umm Salal Municipality',
        stateCode: 'US',
      },
    ],
  },
  {
    name: 'Reunion',
    code: 'RE',
    phoneCode: '262',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇷🇪',

    states: [],
  },
  {
    name: 'Romania',
    code: 'RO',
    phoneCode: '40',
    currency: 'RON',
    currencySymbol: 'lei',

    emoji: '🇷🇴',

    states: [
      {
        name: 'Alba',
        stateCode: 'AB',
      },
      {
        name: 'Arad County',
        stateCode: 'AR',
      },
      {
        name: 'Arges',
        stateCode: 'AG',
      },
      {
        name: 'Bacău County',
        stateCode: 'BC',
      },
      {
        name: 'Bihor County',
        stateCode: 'BH',
      },
      {
        name: 'Bistrița-Năsăud County',
        stateCode: 'BN',
      },
      {
        name: 'Botoșani County',
        stateCode: 'BT',
      },
      {
        name: 'Braila',
        stateCode: 'BR',
      },
      {
        name: 'Brașov County',
        stateCode: 'BV',
      },
      {
        name: 'Bucharest',
        stateCode: 'B',
      },
      {
        name: 'Buzău County',
        stateCode: 'BZ',
      },
      {
        name: 'Călărași County',
        stateCode: 'CL',
      },
      {
        name: 'Caraș-Severin County',
        stateCode: 'CS',
      },
      {
        name: 'Cluj County',
        stateCode: 'CJ',
      },
      {
        name: 'Constanța County',
        stateCode: 'CT',
      },
      {
        name: 'Covasna County',
        stateCode: 'CV',
      },
      {
        name: 'Dâmbovița County',
        stateCode: 'DB',
      },
      {
        name: 'Dolj County',
        stateCode: 'DJ',
      },
      {
        name: 'Galați County',
        stateCode: 'GL',
      },
      {
        name: 'Giurgiu County',
        stateCode: 'GR',
      },
      {
        name: 'Gorj County',
        stateCode: 'GJ',
      },
      {
        name: 'Harghita County',
        stateCode: 'HR',
      },
      {
        name: 'Hunedoara County',
        stateCode: 'HD',
      },
      {
        name: 'Ialomița County',
        stateCode: 'IL',
      },
      {
        name: 'Iași County',
        stateCode: 'IS',
      },
      {
        name: 'Ilfov County',
        stateCode: 'IF',
      },
      {
        name: 'Mehedinți County',
        stateCode: 'MH',
      },
      {
        name: 'Mureș County',
        stateCode: 'MM',
      },
      {
        name: 'Neamț County',
        stateCode: 'NT',
      },
      {
        name: 'Olt County',
        stateCode: 'OT',
      },
      {
        name: 'Prahova County',
        stateCode: 'PH',
      },
      {
        name: 'Sălaj County',
        stateCode: 'SJ',
      },
      {
        name: 'Satu Mare County',
        stateCode: 'SM',
      },
      {
        name: 'Sibiu County',
        stateCode: 'SB',
      },
      {
        name: 'Suceava County',
        stateCode: 'SV',
      },
      {
        name: 'Teleorman County',
        stateCode: 'TR',
      },
      {
        name: 'Timiș County',
        stateCode: 'TM',
      },
      {
        name: 'Tulcea County',
        stateCode: 'TL',
      },
      {
        name: 'Vâlcea County',
        stateCode: 'VL',
      },
      {
        name: 'Vaslui County',
        stateCode: 'VS',
      },
      {
        name: 'Vrancea County',
        stateCode: 'VN',
      },
    ],
  },
  {
    name: 'Russia',
    code: 'RU',
    phoneCode: '7',
    currency: 'RUB',
    currencySymbol: '₽',

    emoji: '🇷🇺',

    states: [
      {
        name: 'Altai Krai',
        stateCode: 'ALT',
      },
      {
        name: 'Altai Republic',
        stateCode: 'AL',
      },
      {
        name: 'Amur Oblast',
        stateCode: 'AMU',
      },
      {
        name: 'Arkhangelsk',
        stateCode: 'ARK',
      },
      {
        name: 'Astrakhan Oblast',
        stateCode: 'AST',
      },
      {
        name: 'Belgorod Oblast',
        stateCode: 'BEL',
      },
      {
        name: 'Bryansk Oblast',
        stateCode: 'BRY',
      },
      {
        name: 'Chechen Republic',
        stateCode: 'CE',
      },
      {
        name: 'Chelyabinsk Oblast',
        stateCode: 'CHE',
      },
      {
        name: 'Chukotka Autonomous Okrug',
        stateCode: 'CHU',
      },
      {
        name: 'Chuvash Republic',
        stateCode: 'CU',
      },
      {
        name: 'Irkutsk',
        stateCode: 'IRK',
      },
      {
        name: 'Ivanovo Oblast',
        stateCode: 'IVA',
      },
      {
        name: 'Jewish Autonomous Oblast',
        stateCode: 'YEV',
      },
      {
        name: 'Kabardino-Balkar Republic',
        stateCode: 'KB',
      },
      {
        name: 'Kaliningrad',
        stateCode: 'KGD',
      },
      {
        name: 'Kaluga Oblast',
        stateCode: 'KLU',
      },
      {
        name: 'Kamchatka Krai',
        stateCode: 'KAM',
      },
      {
        name: 'Karachay-Cherkess Republic',
        stateCode: 'KC',
      },
      {
        name: 'Kemerovo Oblast',
        stateCode: 'KEM',
      },
      {
        name: 'Khabarovsk Krai',
        stateCode: 'KHA',
      },
      {
        name: 'Khanty-Mansi Autonomous Okrug',
        stateCode: 'KHM',
      },
      {
        name: 'Kirov Oblast',
        stateCode: 'KIR',
      },
      {
        name: 'Komi Republic',
        stateCode: 'KO',
      },
      {
        name: 'Kostroma Oblast',
        stateCode: 'KOS',
      },
      {
        name: 'Krasnodar Krai',
        stateCode: 'KDA',
      },
      {
        name: 'Krasnoyarsk Krai',
        stateCode: 'KYA',
      },
      {
        name: 'Kurgan Oblast',
        stateCode: 'KGN',
      },
      {
        name: 'Kursk Oblast',
        stateCode: 'KRS',
      },
      {
        name: 'Leningrad Oblast',
        stateCode: 'LEN',
      },
      {
        name: 'Lipetsk Oblast',
        stateCode: 'LIP',
      },
      {
        name: 'Magadan Oblast',
        stateCode: 'MAG',
      },
      {
        name: 'Mari El Republic',
        stateCode: 'ME',
      },
      {
        name: 'Moscow',
        stateCode: 'MOW',
      },
      {
        name: 'Moscow Oblast',
        stateCode: 'MOS',
      },
      {
        name: 'Murmansk Oblast',
        stateCode: 'MUR',
      },
      {
        name: 'Nenets Autonomous Okrug',
        stateCode: 'NEN',
      },
      {
        name: 'Nizhny Novgorod Oblast',
        stateCode: 'NIZ',
      },
      {
        name: 'Novgorod Oblast',
        stateCode: 'NGR',
      },
      {
        name: 'Novosibirsk',
        stateCode: 'NVS',
      },
      {
        name: 'Omsk Oblast',
        stateCode: 'OMS',
      },
      {
        name: 'Orenburg Oblast',
        stateCode: 'ORE',
      },
      {
        name: 'Oryol Oblast',
        stateCode: 'ORL',
      },
      {
        name: 'Penza Oblast',
        stateCode: 'PNZ',
      },
      {
        name: 'Perm Krai',
        stateCode: 'PER',
      },
      {
        name: 'Primorsky Krai',
        stateCode: 'PRI',
      },
      {
        name: 'Pskov Oblast',
        stateCode: 'PSK',
      },
      {
        name: 'Republic of Adygea',
        stateCode: 'AD',
      },
      {
        name: 'Republic of Bashkortostan',
        stateCode: 'BA',
      },
      {
        name: 'Republic of Buryatia',
        stateCode: 'BU',
      },
      {
        name: 'Republic of Dagestan',
        stateCode: 'DA',
      },
      {
        name: 'Republic of Ingushetia',
        stateCode: 'IN',
      },
      {
        name: 'Republic of Kalmykia',
        stateCode: 'KL',
      },
      {
        name: 'Republic of Karelia',
        stateCode: 'KR',
      },
      {
        name: 'Republic of Khakassia',
        stateCode: 'KK',
      },
      {
        name: 'Republic of Mordovia',
        stateCode: 'MO',
      },
      {
        name: 'Republic of North Ossetia-Alania',
        stateCode: 'SE',
      },
      {
        name: 'Republic of Tatarstan',
        stateCode: 'TA',
      },
      {
        name: 'Rostov Oblast',
        stateCode: 'ROS',
      },
      {
        name: 'Ryazan Oblast',
        stateCode: 'RYA',
      },
      {
        name: 'Saint Petersburg',
        stateCode: 'SPE',
      },
      {
        name: 'Sakha Republic',
        stateCode: 'SA',
      },
      {
        name: 'Sakhalin',
        stateCode: 'SAK',
      },
      {
        name: 'Samara Oblast',
        stateCode: 'SAM',
      },
      {
        name: 'Saratov Oblast',
        stateCode: 'SAR',
      },
      {
        name: 'Sevastopol',
        stateCode: 'UA-40',
      },
      {
        name: 'Smolensk Oblast',
        stateCode: 'SMO',
      },
      {
        name: 'Stavropol Krai',
        stateCode: 'STA',
      },
      {
        name: 'Sverdlovsk',
        stateCode: 'SVE',
      },
      {
        name: 'Tambov Oblast',
        stateCode: 'TAM',
      },
      {
        name: 'Tomsk Oblast',
        stateCode: 'TOM',
      },
      {
        name: 'Tula Oblast',
        stateCode: 'TUL',
      },
      {
        name: 'Tuva Republic',
        stateCode: 'TY',
      },
      {
        name: 'Tver Oblast',
        stateCode: 'TVE',
      },
      {
        name: 'Tyumen Oblast',
        stateCode: 'TYU',
      },
      {
        name: 'Udmurt Republic',
        stateCode: 'UD',
      },
      {
        name: 'Ulyanovsk Oblast',
        stateCode: 'ULY',
      },
      {
        name: 'Vladimir Oblast',
        stateCode: 'VLA',
      },
      {
        name: 'Vologda Oblast',
        stateCode: 'VLG',
      },
      {
        name: 'Voronezh Oblast',
        stateCode: 'VOR',
      },
      {
        name: 'Yamalo-Nenets Autonomous Okrug',
        stateCode: 'YAN',
      },
      {
        name: 'Yaroslavl Oblast',
        stateCode: 'YAR',
      },
      {
        name: 'Zabaykalsky Krai',
        stateCode: 'ZAB',
      },
    ],
  },
  {
    name: 'Rwanda',
    code: 'RW',
    phoneCode: '250',
    currency: 'RWF',
    currencySymbol: 'FRw',

    emoji: '🇷🇼',

    states: [
      {
        name: 'Eastern Province',
        stateCode: '02',
      },
      {
        name: 'Kigali district',
        stateCode: '01',
      },
      {
        name: 'Northern Province',
        stateCode: '03',
      },
      {
        name: 'Southern Province',
        stateCode: '05',
      },
      {
        name: 'Western Province',
        stateCode: '04',
      },
    ],
  },
  {
    name: 'Saint Helena',
    code: 'SH',
    phoneCode: '290',
    currency: 'SHP',
    currencySymbol: '£',

    emoji: '🇸🇭',

    states: [],
  },
  {
    name: 'Saint Kitts And Nevis',
    code: 'KN',
    phoneCode: '+1-869',
    currency: 'XCD',
    currencySymbol: '$',

    emoji: '🇰🇳',

    states: [
      {
        name: 'Christ Church Nichola Town Parish',
        stateCode: '01',
      },
      {
        name: 'Nevis',
        stateCode: 'N',
      },
      {
        name: 'Saint Anne Sandy Point Parish',
        stateCode: '02',
      },
      {
        name: 'Saint George Gingerland Parish',
        stateCode: '04',
      },
      {
        name: 'Saint James Windward Parish',
        stateCode: '05',
      },
      {
        name: 'Saint John Capisterre Parish',
        stateCode: '06',
      },
      {
        name: 'Saint John Figtree Parish',
        stateCode: '07',
      },
      {
        name: 'Saint Kitts',
        stateCode: 'K',
      },
      {
        name: 'Saint Mary Cayon Parish',
        stateCode: '08',
      },
      {
        name: 'Saint Paul Capisterre Parish',
        stateCode: '09',
      },
      {
        name: 'Saint Paul Charlestown Parish',
        stateCode: '10',
      },
      {
        name: 'Saint Peter Basseterre Parish',
        stateCode: '11',
      },
      {
        name: 'Saint Thomas Lowland Parish',
        stateCode: '12',
      },
      {
        name: 'Saint Thomas Middle Island Parish',
        stateCode: '13',
      },
      {
        name: 'Trinity Palmetto Point Parish',
        stateCode: '15',
      },
    ],
  },
  {
    name: 'Saint Lucia',
    code: 'LC',
    phoneCode: '+1-758',
    currency: 'XCD',
    currencySymbol: '$',

    emoji: '🇱🇨',

    states: [
      {
        name: 'Anse la Raye Quarter',
        stateCode: '01',
      },
      {
        name: 'Canaries',
        stateCode: '12',
      },
      {
        name: 'Castries Quarter',
        stateCode: '02',
      },
      {
        name: 'Choiseul Quarter',
        stateCode: '03',
      },
      {
        name: 'Dauphin Quarter',
        stateCode: '04',
      },
      {
        name: 'Dennery Quarter',
        stateCode: '05',
      },
      {
        name: 'Gros Islet Quarter',
        stateCode: '06',
      },
      {
        name: 'Laborie Quarter',
        stateCode: '07',
      },
      {
        name: 'Micoud Quarter',
        stateCode: '08',
      },
      {
        name: 'Praslin Quarter',
        stateCode: '09',
      },
      {
        name: 'Soufrière Quarter',
        stateCode: '10',
      },
      {
        name: 'Vieux Fort Quarter',
        stateCode: '11',
      },
    ],
  },
  {
    name: 'Saint Pierre and Miquelon',
    code: 'PM',
    phoneCode: '508',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇵🇲',

    states: [],
  },
  {
    name: 'Saint Vincent And The Grenadines',
    code: 'VC',
    phoneCode: '+1-784',
    currency: 'XCD',
    currencySymbol: '$',

    emoji: '🇻🇨',

    states: [
      {
        name: 'Charlotte Parish',
        stateCode: '01',
      },
      {
        name: 'Grenadines Parish',
        stateCode: '06',
      },
      {
        name: 'Saint Andrew Parish',
        stateCode: '02',
      },
      {
        name: 'Saint David Parish',
        stateCode: '03',
      },
      {
        name: 'Saint George Parish',
        stateCode: '04',
      },
      {
        name: 'Saint Patrick Parish',
        stateCode: '05',
      },
    ],
  },
  {
    name: 'Saint-Barthelemy',
    code: 'BL',
    phoneCode: '590',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇧🇱',

    states: [],
  },
  {
    name: 'Saint-Martin (French part)',
    code: 'MF',
    phoneCode: '590',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇲🇫',

    states: [],
  },
  {
    name: 'Samoa',
    code: 'WS',
    phoneCode: '685',
    currency: 'WST',
    currencySymbol: 'SAT',

    emoji: '🇼🇸',

    states: [
      {
        name: "A'ana",
        stateCode: 'AA',
      },
      {
        name: 'Aiga-i-le-Tai',
        stateCode: 'AL',
      },
      {
        name: 'Atua',
        stateCode: 'AT',
      },
      {
        name: "Fa'asaleleaga",
        stateCode: 'FA',
      },
      {
        name: "Gaga'emauga",
        stateCode: 'GE',
      },
      {
        name: "Gaga'ifomauga",
        stateCode: 'GI',
      },
      {
        name: 'Palauli',
        stateCode: 'PA',
      },
      {
        name: "Satupa'itea",
        stateCode: 'SA',
      },
      {
        name: 'Tuamasaga',
        stateCode: 'TU',
      },
      {
        name: "Va'a-o-Fonoti",
        stateCode: 'VF',
      },
      {
        name: 'Vaisigano',
        stateCode: 'VS',
      },
    ],
  },
  {
    name: 'San Marino',
    code: 'SM',
    phoneCode: '378',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇸🇲',

    states: [
      {
        name: 'Acquaviva',
        stateCode: '01',
      },
      {
        name: 'Borgo Maggiore',
        stateCode: '06',
      },
      {
        name: 'Chiesanuova',
        stateCode: '02',
      },
      {
        name: 'Domagnano',
        stateCode: '03',
      },
      {
        name: 'Faetano',
        stateCode: '04',
      },
      {
        name: 'Fiorentino',
        stateCode: '05',
      },
      {
        name: 'Montegiardino',
        stateCode: '08',
      },
      {
        name: 'San Marino',
        stateCode: '07',
      },
      {
        name: 'Serravalle',
        stateCode: '09',
      },
    ],
  },
  {
    name: 'Sao Tome and Principe',
    code: 'ST',
    phoneCode: '239',
    currency: 'STD',
    currencySymbol: 'Db',

    emoji: '🇸🇹',

    states: [
      {
        name: 'Príncipe Province',
        stateCode: 'P',
      },
      {
        name: 'São Tomé Province',
        stateCode: 'S',
      },
    ],
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    phoneCode: '966',
    currency: 'SAR',
    currencySymbol: '﷼',

    emoji: '🇸🇦',

    states: [
      {
        name: "'Asir Region",
        stateCode: '14',
      },
      {
        name: 'Al Bahah Region',
        stateCode: '11',
      },
      {
        name: 'Al Jawf Region',
        stateCode: '12',
      },
      {
        name: 'Al Madinah Region',
        stateCode: '03',
      },
      {
        name: 'Al-Qassim Region',
        stateCode: '05',
      },
      {
        name: 'Eastern Province',
        stateCode: '04',
      },
      {
        name: "Ha'il Region",
        stateCode: '06',
      },
      {
        name: 'Jizan Region',
        stateCode: '09',
      },
      {
        name: 'Makkah Region',
        stateCode: '02',
      },
      {
        name: 'Najran Region',
        stateCode: '10',
      },
      {
        name: 'Northern Borders Region',
        stateCode: '08',
      },
      {
        name: 'Riyadh Region',
        stateCode: '01',
      },
      {
        name: 'Tabuk Region',
        stateCode: '07',
      },
    ],
  },
  {
    name: 'Senegal',
    code: 'SN',
    phoneCode: '221',
    currency: 'XOF',
    currencySymbol: 'CFA',

    emoji: '🇸🇳',

    states: [
      {
        name: 'Dakar',
        stateCode: 'DK',
      },
      {
        name: 'Diourbel Region',
        stateCode: 'DB',
      },
      {
        name: 'Fatick',
        stateCode: 'FK',
      },
      {
        name: 'Kaffrine',
        stateCode: 'KA',
      },
      {
        name: 'Kaolack',
        stateCode: 'KL',
      },
      {
        name: 'Kédougou',
        stateCode: 'KE',
      },
      {
        name: 'Kolda',
        stateCode: 'KD',
      },
      {
        name: 'Louga',
        stateCode: 'LG',
      },
      {
        name: 'Matam',
        stateCode: 'MT',
      },
      {
        name: 'Saint-Louis',
        stateCode: 'SL',
      },
      {
        name: 'Sédhiou',
        stateCode: 'SE',
      },
      {
        name: 'Tambacounda Region',
        stateCode: 'TC',
      },
      {
        name: 'Thiès Region',
        stateCode: 'TH',
      },
      {
        name: 'Ziguinchor',
        stateCode: 'ZG',
      },
    ],
  },
  {
    name: 'Serbia',
    code: 'RS',
    phoneCode: '381',
    currency: 'RSD',
    currencySymbol: 'din',

    emoji: '🇷🇸',

    states: [
      {
        name: 'Belgrade',
        stateCode: '00',
      },
      {
        name: 'Bor District',
        stateCode: '14',
      },
      {
        name: 'Braničevo District',
        stateCode: '11',
      },
      {
        name: 'Central Banat District',
        stateCode: '02',
      },
      {
        name: 'Jablanica District',
        stateCode: '23',
      },
      {
        name: 'Kolubara District',
        stateCode: '09',
      },
      {
        name: 'Mačva District',
        stateCode: '08',
      },
      {
        name: 'Moravica District',
        stateCode: '17',
      },
      {
        name: 'Nišava District',
        stateCode: '20',
      },
      {
        name: 'North Bačka District',
        stateCode: '01',
      },
      {
        name: 'North Banat District',
        stateCode: '03',
      },
      {
        name: 'Pčinja District',
        stateCode: '24',
      },
      {
        name: 'Pirot District',
        stateCode: '22',
      },
      {
        name: 'Podunavlje District',
        stateCode: '10',
      },
      {
        name: 'Pomoravlje District',
        stateCode: '13',
      },
      {
        name: 'Rasina District',
        stateCode: '19',
      },
      {
        name: 'Raška District',
        stateCode: '18',
      },
      {
        name: 'South Bačka District',
        stateCode: '06',
      },
      {
        name: 'South Banat District',
        stateCode: '04',
      },
      {
        name: 'Srem District',
        stateCode: '07',
      },
      {
        name: 'Šumadija District',
        stateCode: '12',
      },
      {
        name: 'Toplica District',
        stateCode: '21',
      },
      {
        name: 'Vojvodina',
        stateCode: 'VO',
      },
      {
        name: 'West Bačka District',
        stateCode: '05',
      },
      {
        name: 'Zaječar District',
        stateCode: '15',
      },
      {
        name: 'Zlatibor District',
        stateCode: '16',
      },
    ],
  },
  {
    name: 'Seychelles',
    code: 'SC',
    phoneCode: '248',
    currency: 'SCR',
    currencySymbol: 'SRe',

    emoji: '🇸🇨',

    states: [
      {
        name: 'Anse Boileau',
        stateCode: '02',
      },
      {
        name: 'Anse Royale',
        stateCode: '05',
      },
      {
        name: 'Anse-aux-Pins',
        stateCode: '01',
      },
      {
        name: 'Au Cap',
        stateCode: '04',
      },
      {
        name: 'Baie Lazare',
        stateCode: '06',
      },
      {
        name: 'Baie Sainte Anne',
        stateCode: '07',
      },
      {
        name: 'Beau Vallon',
        stateCode: '08',
      },
      {
        name: 'Bel Air',
        stateCode: '09',
      },
      {
        name: 'Bel Ombre',
        stateCode: '10',
      },
      {
        name: 'Cascade',
        stateCode: '11',
      },
      {
        name: 'Glacis',
        stateCode: '12',
      },
      {
        name: "Grand'Anse Mahé",
        stateCode: '13',
      },
      {
        name: "Grand'Anse Praslin",
        stateCode: '14',
      },
      {
        name: 'La Digue',
        stateCode: '15',
      },
      {
        name: 'La Rivière Anglaise',
        stateCode: '16',
      },
      {
        name: 'Les Mamelles',
        stateCode: '24',
      },
      {
        name: 'Mont Buxton',
        stateCode: '17',
      },
      {
        name: 'Mont Fleuri',
        stateCode: '18',
      },
      {
        name: 'Plaisance',
        stateCode: '19',
      },
      {
        name: 'Pointe La Rue',
        stateCode: '20',
      },
      {
        name: 'Port Glaud',
        stateCode: '21',
      },
      {
        name: 'Roche Caiman',
        stateCode: '25',
      },
      {
        name: 'Saint Louis',
        stateCode: '22',
      },
      {
        name: 'Takamaka',
        stateCode: '23',
      },
    ],
  },
  {
    name: 'Sierra Leone',
    code: 'SL',
    phoneCode: '232',
    currency: 'SLL',
    currencySymbol: 'Le',

    emoji: '🇸🇱',

    states: [
      {
        name: 'Eastern Province',
        stateCode: 'E',
      },
      {
        name: 'Northern Province',
        stateCode: 'N',
      },
      {
        name: 'Southern Province',
        stateCode: 'S',
      },
      {
        name: 'Western Area',
        stateCode: 'W',
      },
    ],
  },
  {
    name: 'Singapore',
    code: 'SG',
    phoneCode: '65',
    currency: 'SGD',
    currencySymbol: '$',

    emoji: '🇸🇬',

    states: [
      {
        name: 'Central Singapore Community Development Council',
        stateCode: '01',
      },
      {
        name: 'North East Community Development Council',
        stateCode: '02',
      },
      {
        name: 'North West Community Development Council',
        stateCode: '03',
      },
      {
        name: 'South East Community Development Council',
        stateCode: '04',
      },
      {
        name: 'South West Community Development Council',
        stateCode: '05',
      },
    ],
  },
  {
    name: 'Sint Maarten (Dutch part)',
    code: 'SX',
    phoneCode: '1721',
    currency: 'ANG',
    currencySymbol: 'ƒ',

    emoji: '🇸🇽',

    states: [],
  },
  {
    name: 'Slovakia',
    code: 'SK',
    phoneCode: '421',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇸🇰',

    states: [
      {
        name: 'Banská Bystrica Region',
        stateCode: 'BC',
      },
      {
        name: 'Bratislava Region',
        stateCode: 'BL',
      },
      {
        name: 'Košice Region',
        stateCode: 'KI',
      },
      {
        name: 'Nitra Region',
        stateCode: 'NI',
      },
      {
        name: 'Prešov Region',
        stateCode: 'PV',
      },
      {
        name: 'Trenčín Region',
        stateCode: 'TC',
      },
      {
        name: 'Trnava Region',
        stateCode: 'TA',
      },
      {
        name: 'Žilina Region',
        stateCode: 'ZI',
      },
    ],
  },
  {
    name: 'Slovenia',
    code: 'SI',
    phoneCode: '386',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇸🇮',

    states: [
      {
        name: 'Ajdovščina Municipality',
        stateCode: '001',
      },
      {
        name: 'Ankaran Municipality',
        stateCode: '213',
      },
      {
        name: 'Beltinci Municipality',
        stateCode: '002',
      },
      {
        name: 'Benedikt Municipality',
        stateCode: '148',
      },
      {
        name: 'Bistrica ob Sotli Municipality',
        stateCode: '149',
      },
      {
        name: 'Bled Municipality',
        stateCode: '003',
      },
      {
        name: 'Bloke Municipality',
        stateCode: '150',
      },
      {
        name: 'Bohinj Municipality',
        stateCode: '004',
      },
      {
        name: 'Borovnica Municipality',
        stateCode: '005',
      },
      {
        name: 'Bovec Municipality',
        stateCode: '006',
      },
      {
        name: 'Braslovče Municipality',
        stateCode: '151',
      },
      {
        name: 'Brda Municipality',
        stateCode: '007',
      },
      {
        name: 'Brežice Municipality',
        stateCode: '009',
      },
      {
        name: 'Brezovica Municipality',
        stateCode: '008',
      },
      {
        name: 'Cankova Municipality',
        stateCode: '152',
      },
      {
        name: 'Cerklje na Gorenjskem Municipality',
        stateCode: '012',
      },
      {
        name: 'Cerknica Municipality',
        stateCode: '013',
      },
      {
        name: 'Cerkno Municipality',
        stateCode: '014',
      },
      {
        name: 'Cerkvenjak Municipality',
        stateCode: '153',
      },
      {
        name: 'City Municipality of Celje',
        stateCode: '011',
      },
      {
        name: 'City Municipality of Novo Mesto',
        stateCode: '085',
      },
      {
        name: 'Črenšovci Municipality',
        stateCode: '015',
      },
      {
        name: 'Črna na Koroškem Municipality',
        stateCode: '016',
      },
      {
        name: 'Črnomelj Municipality',
        stateCode: '017',
      },
      {
        name: 'Destrnik Municipality',
        stateCode: '018',
      },
      {
        name: 'Divača Municipality',
        stateCode: '019',
      },
      {
        name: 'Dobje Municipality',
        stateCode: '154',
      },
      {
        name: 'Dobrepolje Municipality',
        stateCode: '020',
      },
      {
        name: 'Dobrna Municipality',
        stateCode: '155',
      },
      {
        name: 'Dobrova–Polhov Gradec Municipality',
        stateCode: '021',
      },
      {
        name: 'Dobrovnik Municipality',
        stateCode: '156',
      },
      {
        name: 'Dol pri Ljubljani Municipality',
        stateCode: '022',
      },
      {
        name: 'Dolenjske Toplice Municipality',
        stateCode: '157',
      },
      {
        name: 'Domžale Municipality',
        stateCode: '023',
      },
      {
        name: 'Dornava Municipality',
        stateCode: '024',
      },
      {
        name: 'Dravograd Municipality',
        stateCode: '025',
      },
      {
        name: 'Duplek Municipality',
        stateCode: '026',
      },
      {
        name: 'Gorenja Vas–Poljane Municipality',
        stateCode: '027',
      },
      {
        name: 'Gorišnica Municipality',
        stateCode: '028',
      },
      {
        name: 'Gorje Municipality',
        stateCode: '207',
      },
      {
        name: 'Gornja Radgona Municipality',
        stateCode: '029',
      },
      {
        name: 'Gornji Grad Municipality',
        stateCode: '030',
      },
      {
        name: 'Gornji Petrovci Municipality',
        stateCode: '031',
      },
      {
        name: 'Grad Municipality',
        stateCode: '158',
      },
      {
        name: 'Grosuplje Municipality',
        stateCode: '032',
      },
      {
        name: 'Hajdina Municipality',
        stateCode: '159',
      },
      {
        name: 'Hoče–Slivnica Municipality',
        stateCode: '160',
      },
      {
        name: 'Hodoš Municipality',
        stateCode: '161',
      },
      {
        name: 'Horjul Municipality',
        stateCode: '162',
      },
      {
        name: 'Hrastnik Municipality',
        stateCode: '034',
      },
      {
        name: 'Hrpelje–Kozina Municipality',
        stateCode: '035',
      },
      {
        name: 'Idrija Municipality',
        stateCode: '036',
      },
      {
        name: 'Ig Municipality',
        stateCode: '037',
      },
      {
        name: 'Ivančna Gorica Municipality',
        stateCode: '039',
      },
      {
        name: 'Izola Municipality',
        stateCode: '040',
      },
      {
        name: 'Jesenice Municipality',
        stateCode: '041',
      },
      {
        name: 'Jezersko Municipality',
        stateCode: '163',
      },
      {
        name: 'Juršinci Municipality',
        stateCode: '042',
      },
      {
        name: 'Kamnik Municipality',
        stateCode: '043',
      },
      {
        name: 'Kanal ob Soči Municipality',
        stateCode: '044',
      },
      {
        name: 'Kidričevo Municipality',
        stateCode: '045',
      },
      {
        name: 'Kobarid Municipality',
        stateCode: '046',
      },
      {
        name: 'Kobilje Municipality',
        stateCode: '047',
      },
      {
        name: 'Kočevje Municipality',
        stateCode: '048',
      },
      {
        name: 'Komen Municipality',
        stateCode: '049',
      },
      {
        name: 'Komenda Municipality',
        stateCode: '164',
      },
      {
        name: 'Koper City Municipality',
        stateCode: '050',
      },
      {
        name: 'Kostanjevica na Krki Municipality',
        stateCode: '197',
      },
      {
        name: 'Kostel Municipality',
        stateCode: '165',
      },
      {
        name: 'Kozje Municipality',
        stateCode: '051',
      },
      {
        name: 'Kranj City Municipality',
        stateCode: '052',
      },
      {
        name: 'Kranjska Gora Municipality',
        stateCode: '053',
      },
      {
        name: 'Križevci Municipality',
        stateCode: '166',
      },
      {
        name: 'Kungota',
        stateCode: '055',
      },
      {
        name: 'Kuzma Municipality',
        stateCode: '056',
      },
      {
        name: 'Laško Municipality',
        stateCode: '057',
      },
      {
        name: 'Lenart Municipality',
        stateCode: '058',
      },
      {
        name: 'Lendava Municipality',
        stateCode: '059',
      },
      {
        name: 'Litija Municipality',
        stateCode: '060',
      },
      {
        name: 'Ljubljana City Municipality',
        stateCode: '061',
      },
      {
        name: 'Ljubno Municipality',
        stateCode: '062',
      },
      {
        name: 'Ljutomer Municipality',
        stateCode: '063',
      },
      {
        name: 'Log–Dragomer Municipality',
        stateCode: '208',
      },
      {
        name: 'Logatec Municipality',
        stateCode: '064',
      },
      {
        name: 'Loška Dolina Municipality',
        stateCode: '065',
      },
      {
        name: 'Loški Potok Municipality',
        stateCode: '066',
      },
      {
        name: 'Lovrenc na Pohorju Municipality',
        stateCode: '167',
      },
      {
        name: 'Luče Municipality',
        stateCode: '067',
      },
      {
        name: 'Lukovica Municipality',
        stateCode: '068',
      },
      {
        name: 'Majšperk Municipality',
        stateCode: '069',
      },
      {
        name: 'Makole Municipality',
        stateCode: '198',
      },
      {
        name: 'Maribor City Municipality',
        stateCode: '070',
      },
      {
        name: 'Markovci Municipality',
        stateCode: '168',
      },
      {
        name: 'Medvode Municipality',
        stateCode: '071',
      },
      {
        name: 'Mengeš Municipality',
        stateCode: '072',
      },
      {
        name: 'Metlika Municipality',
        stateCode: '073',
      },
      {
        name: 'Mežica Municipality',
        stateCode: '074',
      },
      {
        name: 'Miklavž na Dravskem Polju Municipality',
        stateCode: '169',
      },
      {
        name: 'Miren–Kostanjevica Municipality',
        stateCode: '075',
      },
      {
        name: 'Mirna Municipality',
        stateCode: '212',
      },
      {
        name: 'Mirna Peč Municipality',
        stateCode: '170',
      },
      {
        name: 'Mislinja Municipality',
        stateCode: '076',
      },
      {
        name: 'Mokronog–Trebelno Municipality',
        stateCode: '199',
      },
      {
        name: 'Moravče Municipality',
        stateCode: '077',
      },
      {
        name: 'Moravske Toplice Municipality',
        stateCode: '078',
      },
      {
        name: 'Mozirje Municipality',
        stateCode: '079',
      },
      {
        name: 'Municipality of Apače',
        stateCode: '195',
      },
      {
        name: 'Municipality of Cirkulane',
        stateCode: '196',
      },
      {
        name: 'Municipality of Ilirska Bistrica',
        stateCode: '038',
      },
      {
        name: 'Municipality of Krško',
        stateCode: '054',
      },
      {
        name: 'Municipality of Škofljica',
        stateCode: '123',
      },
      {
        name: 'Murska Sobota City Municipality',
        stateCode: '080',
      },
      {
        name: 'Muta Municipality',
        stateCode: '081',
      },
      {
        name: 'Naklo Municipality',
        stateCode: '082',
      },
      {
        name: 'Nazarje Municipality',
        stateCode: '083',
      },
      {
        name: 'Nova Gorica City Municipality',
        stateCode: '084',
      },
      {
        name: 'Odranci Municipality',
        stateCode: '086',
      },
      {
        name: 'Oplotnica',
        stateCode: '171',
      },
      {
        name: 'Ormož Municipality',
        stateCode: '087',
      },
      {
        name: 'Osilnica Municipality',
        stateCode: '088',
      },
      {
        name: 'Pesnica Municipality',
        stateCode: '089',
      },
      {
        name: 'Piran Municipality',
        stateCode: '090',
      },
      {
        name: 'Pivka Municipality',
        stateCode: '091',
      },
      {
        name: 'Podčetrtek Municipality',
        stateCode: '092',
      },
      {
        name: 'Podlehnik Municipality',
        stateCode: '172',
      },
      {
        name: 'Podvelka Municipality',
        stateCode: '093',
      },
      {
        name: 'Poljčane Municipality',
        stateCode: '200',
      },
      {
        name: 'Polzela Municipality',
        stateCode: '173',
      },
      {
        name: 'Postojna Municipality',
        stateCode: '094',
      },
      {
        name: 'Prebold Municipality',
        stateCode: '174',
      },
      {
        name: 'Preddvor Municipality',
        stateCode: '095',
      },
      {
        name: 'Prevalje Municipality',
        stateCode: '175',
      },
      {
        name: 'Ptuj City Municipality',
        stateCode: '096',
      },
      {
        name: 'Puconci Municipality',
        stateCode: '097',
      },
      {
        name: 'Rače–Fram Municipality',
        stateCode: '098',
      },
      {
        name: 'Radeče Municipality',
        stateCode: '099',
      },
      {
        name: 'Radenci Municipality',
        stateCode: '100',
      },
      {
        name: 'Radlje ob Dravi Municipality',
        stateCode: '101',
      },
      {
        name: 'Radovljica Municipality',
        stateCode: '102',
      },
      {
        name: 'Ravne na Koroškem Municipality',
        stateCode: '103',
      },
      {
        name: 'Razkrižje Municipality',
        stateCode: '176',
      },
      {
        name: 'Rečica ob Savinji Municipality',
        stateCode: '209',
      },
      {
        name: 'Renče–Vogrsko Municipality',
        stateCode: '201',
      },
      {
        name: 'Ribnica Municipality',
        stateCode: '104',
      },
      {
        name: 'Ribnica na Pohorju Municipality',
        stateCode: '177',
      },
      {
        name: 'Rogaška Slatina Municipality',
        stateCode: '106',
      },
      {
        name: 'Rogašovci Municipality',
        stateCode: '105',
      },
      {
        name: 'Rogatec Municipality',
        stateCode: '107',
      },
      {
        name: 'Ruše Municipality',
        stateCode: '108',
      },
      {
        name: 'Šalovci Municipality',
        stateCode: '033',
      },
      {
        name: 'Selnica ob Dravi Municipality',
        stateCode: '178',
      },
      {
        name: 'Semič Municipality',
        stateCode: '109',
      },
      {
        name: 'Šempeter–Vrtojba Municipality',
        stateCode: '183',
      },
      {
        name: 'Šenčur Municipality',
        stateCode: '117',
      },
      {
        name: 'Šentilj Municipality',
        stateCode: '118',
      },
      {
        name: 'Šentjernej Municipality',
        stateCode: '119',
      },
      {
        name: 'Šentjur Municipality',
        stateCode: '120',
      },
      {
        name: 'Šentrupert Municipality',
        stateCode: '211',
      },
      {
        name: 'Sevnica Municipality',
        stateCode: '110',
      },
      {
        name: 'Sežana Municipality',
        stateCode: '111',
      },
      {
        name: 'Škocjan Municipality',
        stateCode: '121',
      },
      {
        name: 'Škofja Loka Municipality',
        stateCode: '122',
      },
      {
        name: 'Slovenj Gradec City Municipality',
        stateCode: '112',
      },
      {
        name: 'Slovenska Bistrica Municipality',
        stateCode: '113',
      },
      {
        name: 'Slovenske Konjice Municipality',
        stateCode: '114',
      },
      {
        name: 'Šmarje pri Jelšah Municipality',
        stateCode: '124',
      },
      {
        name: 'Šmarješke Toplice Municipality',
        stateCode: '206',
      },
      {
        name: 'Šmartno ob Paki Municipality',
        stateCode: '125',
      },
      {
        name: 'Šmartno pri Litiji Municipality',
        stateCode: '194',
      },
      {
        name: 'Sodražica Municipality',
        stateCode: '179',
      },
      {
        name: 'Solčava Municipality',
        stateCode: '180',
      },
      {
        name: 'Šoštanj Municipality',
        stateCode: '126',
      },
      {
        name: 'Središče ob Dravi',
        stateCode: '202',
      },
      {
        name: 'Starše Municipality',
        stateCode: '115',
      },
      {
        name: 'Štore Municipality',
        stateCode: '127',
      },
      {
        name: 'Straža Municipality',
        stateCode: '203',
      },
      {
        name: 'Sveta Ana Municipality',
        stateCode: '181',
      },
      {
        name: 'Sveta Trojica v Slovenskih Goricah Municipality',
        stateCode: '204',
      },
      {
        name: 'Sveti Andraž v Slovenskih Goricah Municipality',
        stateCode: '182',
      },
      {
        name: 'Sveti Jurij ob Ščavnici Municipality',
        stateCode: '116',
      },
      {
        name: 'Sveti Jurij v Slovenskih Goricah Municipality',
        stateCode: '210',
      },
      {
        name: 'Sveti Tomaž Municipality',
        stateCode: '205',
      },
      {
        name: 'Tabor Municipality',
        stateCode: '184',
      },
      {
        name: 'Tišina Municipality',
        stateCode: '010',
      },
      {
        name: 'Tolmin Municipality',
        stateCode: '128',
      },
      {
        name: 'Trbovlje Municipality',
        stateCode: '129',
      },
      {
        name: 'Trebnje Municipality',
        stateCode: '130',
      },
      {
        name: 'Trnovska Vas Municipality',
        stateCode: '185',
      },
      {
        name: 'Tržič Municipality',
        stateCode: '131',
      },
      {
        name: 'Trzin Municipality',
        stateCode: '186',
      },
      {
        name: 'Turnišče Municipality',
        stateCode: '132',
      },
      {
        name: 'Velika Polana Municipality',
        stateCode: '187',
      },
      {
        name: 'Velike Lašče Municipality',
        stateCode: '134',
      },
      {
        name: 'Veržej Municipality',
        stateCode: '188',
      },
      {
        name: 'Videm Municipality',
        stateCode: '135',
      },
      {
        name: 'Vipava Municipality',
        stateCode: '136',
      },
      {
        name: 'Vitanje Municipality',
        stateCode: '137',
      },
      {
        name: 'Vodice Municipality',
        stateCode: '138',
      },
      {
        name: 'Vojnik Municipality',
        stateCode: '139',
      },
      {
        name: 'Vransko Municipality',
        stateCode: '189',
      },
      {
        name: 'Vrhnika Municipality',
        stateCode: '140',
      },
      {
        name: 'Vuzenica Municipality',
        stateCode: '141',
      },
      {
        name: 'Zagorje ob Savi Municipality',
        stateCode: '142',
      },
      {
        name: 'Žalec Municipality',
        stateCode: '190',
      },
      {
        name: 'Zavrč Municipality',
        stateCode: '143',
      },
      {
        name: 'Železniki Municipality',
        stateCode: '146',
      },
      {
        name: 'Žetale Municipality',
        stateCode: '191',
      },
      {
        name: 'Žiri Municipality',
        stateCode: '147',
      },
      {
        name: 'Žirovnica Municipality',
        stateCode: '192',
      },
      {
        name: 'Zreče Municipality',
        stateCode: '144',
      },
      {
        name: 'Žužemberk Municipality',
        stateCode: '193',
      },
    ],
  },
  {
    name: 'Solomon Islands',
    code: 'SB',
    phoneCode: '677',
    currency: 'SBD',
    currencySymbol: 'Si$',

    emoji: '🇸🇧',

    states: [
      {
        name: 'Central Province',
        stateCode: 'CE',
      },
      {
        name: 'Choiseul Province',
        stateCode: 'CH',
      },
      {
        name: 'Guadalcanal Province',
        stateCode: 'GU',
      },
      {
        name: 'Honiara',
        stateCode: 'CT',
      },
      {
        name: 'Isabel Province',
        stateCode: 'IS',
      },
      {
        name: 'Makira-Ulawa Province',
        stateCode: 'MK',
      },
      {
        name: 'Malaita Province',
        stateCode: 'ML',
      },
      {
        name: 'Rennell and Bellona Province',
        stateCode: 'RB',
      },
      {
        name: 'Temotu Province',
        stateCode: 'TE',
      },
      {
        name: 'Western Province',
        stateCode: 'WE',
      },
    ],
  },
  {
    name: 'Somalia',
    code: 'SO',
    phoneCode: '252',
    currency: 'SOS',
    currencySymbol: 'Sh.so.',

    emoji: '🇸🇴',

    states: [
      {
        name: 'Awdal Region',
        stateCode: 'AW',
      },
      {
        name: 'Bakool',
        stateCode: 'BK',
      },
      {
        name: 'Banaadir',
        stateCode: 'BN',
      },
      {
        name: 'Bari',
        stateCode: 'BR',
      },
      {
        name: 'Bay',
        stateCode: 'BY',
      },
      {
        name: 'Galguduud',
        stateCode: 'GA',
      },
      {
        name: 'Gedo',
        stateCode: 'GE',
      },
      {
        name: 'Hiran',
        stateCode: 'HI',
      },
      {
        name: 'Lower Juba',
        stateCode: 'JH',
      },
      {
        name: 'Lower Shebelle',
        stateCode: 'SH',
      },
      {
        name: 'Middle Juba',
        stateCode: 'JD',
      },
      {
        name: 'Middle Shebelle',
        stateCode: 'SD',
      },
      {
        name: 'Mudug',
        stateCode: 'MU',
      },
      {
        name: 'Nugal',
        stateCode: 'NU',
      },
      {
        name: 'Sanaag Region',
        stateCode: 'SA',
      },
      {
        name: 'Togdheer Region',
        stateCode: 'TO',
      },
    ],
  },
  {
    name: 'South Africa',
    code: 'ZA',
    phoneCode: '27',
    currency: 'ZAR',
    currencySymbol: 'R',

    emoji: '🇿🇦',

    states: [
      {
        name: 'Eastern Cape',
        stateCode: 'EC',
      },
      {
        name: 'Free State',
        stateCode: 'FS',
      },
      {
        name: 'Gauteng',
        stateCode: 'GP',
      },
      {
        name: 'KwaZulu-Natal',
        stateCode: 'KZN',
      },
      {
        name: 'Limpopo',
        stateCode: 'LP',
      },
      {
        name: 'Mpumalanga',
        stateCode: 'MP',
      },
      {
        name: 'North West',
        stateCode: 'NW',
      },
      {
        name: 'Northern Cape',
        stateCode: 'NC',
      },
      {
        name: 'Western Cape',
        stateCode: 'WC',
      },
    ],
  },
  {
    name: 'South Georgia',
    code: 'GS',
    phoneCode: '',
    currency: 'GBP',
    currencySymbol: '£',

    emoji: '🇬🇸',

    states: [],
  },
  {
    name: 'South Sudan',
    code: 'SS',
    phoneCode: '211',
    currency: 'SSP',
    currencySymbol: '£',

    emoji: '🇸🇸',

    states: [
      {
        name: 'Central Equatoria',
        stateCode: 'EC',
      },
      {
        name: 'Eastern Equatoria',
        stateCode: 'EE',
      },
      {
        name: 'Jonglei State',
        stateCode: 'JG',
      },
      {
        name: 'Lakes',
        stateCode: 'LK',
      },
      {
        name: 'Northern Bahr el Ghazal',
        stateCode: 'BN',
      },
      {
        name: 'Unity',
        stateCode: 'UY',
      },
      {
        name: 'Upper Nile',
        stateCode: 'NU',
      },
      {
        name: 'Warrap',
        stateCode: 'WR',
      },
      {
        name: 'Western Bahr el Ghazal',
        stateCode: 'BW',
      },
      {
        name: 'Western Equatoria',
        stateCode: 'EW',
      },
    ],
  },
  {
    name: 'Spain',
    code: 'ES',
    phoneCode: '34',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇪🇸',

    states: [
      {
        name: 'Andalusia',
        stateCode: 'AN',
      },
      {
        name: 'Aragon',
        stateCode: 'AR',
      },
      {
        name: 'Asturias',
        stateCode: 'AS',
      },
      {
        name: 'Ávila',
        stateCode: 'AV',
      },
      {
        name: 'Balearic Islands',
        stateCode: 'PM',
      },
      {
        name: 'Basque Country',
        stateCode: 'PV',
      },
      {
        name: 'Burgos Province',
        stateCode: 'BU',
      },
      {
        name: 'Canary Islands',
        stateCode: 'CN',
      },
      {
        name: 'Cantabria',
        stateCode: 'CB',
      },
      {
        name: 'Castile and León',
        stateCode: 'CL',
      },
      {
        name: 'Castilla La Mancha',
        stateCode: 'CM',
      },
      {
        name: 'Catalonia',
        stateCode: 'CT',
      },
      {
        name: 'Ceuta',
        stateCode: 'CE',
      },
      {
        name: 'Extremadura',
        stateCode: 'EX',
      },
      {
        name: 'Galicia',
        stateCode: 'GA',
      },
      {
        name: 'La Rioja',
        stateCode: 'RI',
      },
      {
        name: 'Léon',
        stateCode: 'LE',
      },
      {
        name: 'Madrid',
        stateCode: 'MD',
      },
      {
        name: 'Melilla',
        stateCode: 'ML',
      },
      {
        name: 'Murcia',
        stateCode: 'MC',
      },
      {
        name: 'Navarra',
        stateCode: 'NC',
      },
      {
        name: 'Palencia Province',
        stateCode: 'P',
      },
      {
        name: 'Salamanca Province',
        stateCode: 'SA',
      },
      {
        name: 'Segovia Province',
        stateCode: 'SG',
      },
      {
        name: 'Soria Province',
        stateCode: 'SO',
      },
      {
        name: 'Valencia',
        stateCode: 'VC',
      },
      {
        name: 'Valladolid Province',
        stateCode: 'VA',
      },
      {
        name: 'Zamora Province',
        stateCode: 'ZA',
      },
    ],
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    phoneCode: '94',
    currency: 'LKR',
    currencySymbol: 'Rs',

    emoji: '🇱🇰',

    states: [
      {
        name: 'Ampara District',
        stateCode: '52',
      },
      {
        name: 'Anuradhapura District',
        stateCode: '71',
      },
      {
        name: 'Badulla District',
        stateCode: '81',
      },
      {
        name: 'Batticaloa District',
        stateCode: '51',
      },
      {
        name: 'Central Province',
        stateCode: '2',
      },
      {
        name: 'Colombo District',
        stateCode: '11',
      },
      {
        name: 'Eastern Province',
        stateCode: '5',
      },
      {
        name: 'Galle District',
        stateCode: '31',
      },
      {
        name: 'Gampaha District',
        stateCode: '12',
      },
      {
        name: 'Hambantota District',
        stateCode: '33',
      },
      {
        name: 'Jaffna District',
        stateCode: '41',
      },
      {
        name: 'Kalutara District',
        stateCode: '13',
      },
      {
        name: 'Kandy District',
        stateCode: '21',
      },
      {
        name: 'Kegalle District',
        stateCode: '92',
      },
      {
        name: 'Kilinochchi District',
        stateCode: '42',
      },
      {
        name: 'Mannar District',
        stateCode: '43',
      },
      {
        name: 'Matale District',
        stateCode: '22',
      },
      {
        name: 'Matara District',
        stateCode: '32',
      },
      {
        name: 'Monaragala District',
        stateCode: '82',
      },
      {
        name: 'Mullaitivu District',
        stateCode: '45',
      },
      {
        name: 'North Central Province',
        stateCode: '7',
      },
      {
        name: 'North Western Province',
        stateCode: '6',
      },
      {
        name: 'Northern Province',
        stateCode: '4',
      },
      {
        name: 'Nuwara Eliya District',
        stateCode: '23',
      },
      {
        name: 'Polonnaruwa District',
        stateCode: '72',
      },
      {
        name: 'Puttalam District',
        stateCode: '62',
      },
      {
        name: 'Ratnapura district',
        stateCode: '91',
      },
      {
        name: 'Sabaragamuwa Province',
        stateCode: '9',
      },
      {
        name: 'Southern Province',
        stateCode: '3',
      },
      {
        name: 'Trincomalee District',
        stateCode: '53',
      },
      {
        name: 'Uva Province',
        stateCode: '8',
      },
      {
        name: 'Vavuniya District',
        stateCode: '44',
      },
      {
        name: 'Western Province',
        stateCode: '1',
      },
    ],
  },
  {
    name: 'Sudan',
    code: 'SD',
    phoneCode: '249',
    currency: 'SDG',
    currencySymbol: '.س.ج',

    emoji: '🇸🇩',

    states: [
      {
        name: 'Al Jazirah',
        stateCode: 'GZ',
      },
      {
        name: 'Al Qadarif',
        stateCode: 'GD',
      },
      {
        name: 'Blue Nile',
        stateCode: 'NB',
      },
      {
        name: 'Central Darfur',
        stateCode: 'DC',
      },
      {
        name: 'East Darfur',
        stateCode: 'DE',
      },
      {
        name: 'Kassala',
        stateCode: 'KA',
      },
      {
        name: 'Khartoum',
        stateCode: 'KH',
      },
      {
        name: 'North Darfur',
        stateCode: 'DN',
      },
      {
        name: 'North Kordofan',
        stateCode: 'KN',
      },
      {
        name: 'Northern',
        stateCode: 'NO',
      },
      {
        name: 'Red Sea',
        stateCode: 'RS',
      },
      {
        name: 'River Nile',
        stateCode: 'NR',
      },
      {
        name: 'Sennar',
        stateCode: 'SI',
      },
      {
        name: 'South Darfur',
        stateCode: 'DS',
      },
      {
        name: 'South Kordofan',
        stateCode: 'KS',
      },
      {
        name: 'West Darfur',
        stateCode: 'DW',
      },
      {
        name: 'West Kordofan',
        stateCode: 'GK',
      },
      {
        name: 'White Nile',
        stateCode: 'NW',
      },
    ],
  },
  {
    name: 'Suriname',
    code: 'SR',
    phoneCode: '597',
    currency: 'SRD',
    currencySymbol: '$',

    emoji: '🇸🇷',

    states: [
      {
        name: 'Brokopondo District',
        stateCode: 'BR',
      },
      {
        name: 'Commewijne District',
        stateCode: 'CM',
      },
      {
        name: 'Coronie District',
        stateCode: 'CR',
      },
      {
        name: 'Marowijne District',
        stateCode: 'MA',
      },
      {
        name: 'Nickerie District',
        stateCode: 'NI',
      },
      {
        name: 'Para District',
        stateCode: 'PR',
      },
      {
        name: 'Paramaribo District',
        stateCode: 'PM',
      },
      {
        name: 'Saramacca District',
        stateCode: 'SA',
      },
      {
        name: 'Sipaliwini District',
        stateCode: 'SI',
      },
      {
        name: 'Wanica District',
        stateCode: 'WA',
      },
    ],
  },
  {
    name: 'Svalbard And Jan Mayen Islands',
    code: 'SJ',
    phoneCode: '47',
    currency: 'NOK',
    currencySymbol: 'kr',

    emoji: '🇸🇯',

    states: [],
  },
  {
    name: 'Swaziland',
    code: 'SZ',
    phoneCode: '268',
    currency: 'SZL',
    currencySymbol: 'E',

    emoji: '🇸🇿',

    states: [
      {
        name: 'Hhohho District',
        stateCode: 'HH',
      },
      {
        name: 'Lubombo District',
        stateCode: 'LU',
      },
      {
        name: 'Manzini District',
        stateCode: 'MA',
      },
      {
        name: 'Shiselweni District',
        stateCode: 'SH',
      },
    ],
  },
  {
    name: 'Sweden',
    code: 'SE',
    phoneCode: '46',
    currency: 'SEK',
    currencySymbol: 'kr',

    emoji: '🇸🇪',

    states: [
      {
        name: 'Blekinge',
        stateCode: 'K',
      },
      {
        name: 'Dalarna County',
        stateCode: 'W',
      },
      {
        name: 'Gävleborg County',
        stateCode: 'X',
      },
      {
        name: 'Gotland County',
        stateCode: 'I',
      },
      {
        name: 'Halland County',
        stateCode: 'N',
      },
      {
        name: 'Jönköping County',
        stateCode: 'F',
      },
      {
        name: 'Kalmar County',
        stateCode: 'H',
      },
      {
        name: 'Kronoberg County',
        stateCode: 'G',
      },
      {
        name: 'Norrbotten County',
        stateCode: 'BD',
      },
      {
        name: 'Örebro County',
        stateCode: 'T',
      },
      {
        name: 'Östergötland County',
        stateCode: 'E',
      },
      {
        name: 'Skåne County',
        stateCode: 'M',
      },
      {
        name: 'Södermanland County',
        stateCode: 'D',
      },
      {
        name: 'Stockholm County',
        stateCode: 'AB',
      },
      {
        name: 'Uppsala County',
        stateCode: 'C',
      },
      {
        name: 'Värmland County',
        stateCode: 'S',
      },
      {
        name: 'Västerbotten County',
        stateCode: 'AC',
      },
      {
        name: 'Västernorrland County',
        stateCode: 'Y',
      },
      {
        name: 'Västmanland County',
        stateCode: 'U',
      },
      {
        name: 'Västra Götaland County',
        stateCode: 'O',
      },
    ],
  },
  {
    name: 'Switzerland',
    code: 'CH',
    phoneCode: '41',
    currency: 'CHF',
    currencySymbol: 'CHf',

    emoji: '🇨🇭',

    states: [
      {
        name: 'Aargau',
        stateCode: 'AG',
      },
      {
        name: 'Appenzell Ausserrhoden',
        stateCode: 'AR',
      },
      {
        name: 'Appenzell Innerrhoden',
        stateCode: 'AI',
      },
      {
        name: 'Basel-Landschaft',
        stateCode: 'BL',
      },
      {
        name: 'canton of Bern',
        stateCode: 'BE',
      },
      {
        name: 'Canton of Fribourg',
        stateCode: 'FR',
      },
      {
        name: 'Canton of Geneva',
        stateCode: 'GE',
      },
      {
        name: 'Canton of Jura',
        stateCode: 'JU',
      },
      {
        name: 'Canton of Lucerne',
        stateCode: 'LU',
      },
      {
        name: 'Canton of Neuchâtel',
        stateCode: 'NE',
      },
      {
        name: 'Canton of Schaffhausen',
        stateCode: 'SH',
      },
      {
        name: 'Canton of Solothurn',
        stateCode: 'SO',
      },
      {
        name: 'Canton of St. Gallen',
        stateCode: 'SG',
      },
      {
        name: 'Canton of Valais',
        stateCode: 'VS',
      },
      {
        name: 'Canton of Vaud',
        stateCode: 'VD',
      },
      {
        name: 'Canton of Zug',
        stateCode: 'ZG',
      },
      {
        name: 'canton of Zürich',
        stateCode: 'ZH',
      },
      {
        name: 'Glarus',
        stateCode: 'GL',
      },
      {
        name: 'Graubünden',
        stateCode: 'GR',
      },
      {
        name: 'Nidwalden',
        stateCode: 'NW',
      },
      {
        name: 'Obwalden',
        stateCode: 'OW',
      },
      {
        name: 'Schwyz',
        stateCode: 'SZ',
      },
      {
        name: 'Thurgau',
        stateCode: 'TG',
      },
      {
        name: 'Ticino',
        stateCode: 'TI',
      },
      {
        name: 'Uri',
        stateCode: 'UR',
      },
    ],
  },
  {
    name: 'Syria',
    code: 'SY',
    phoneCode: '963',
    currency: 'SYP',
    currencySymbol: 'LS',

    emoji: '🇸🇾',

    states: [
      {
        name: 'Al-Hasakah Governorate',
        stateCode: 'HA',
      },
      {
        name: 'Al-Raqqah Governorate',
        stateCode: 'RA',
      },
      {
        name: 'Aleppo Governorate',
        stateCode: 'HL',
      },
      {
        name: 'As-Suwayda Governorate',
        stateCode: 'SU',
      },
      {
        name: 'Damascus Governorate',
        stateCode: 'DI',
      },
      {
        name: 'Daraa Governorate',
        stateCode: 'DR',
      },
      {
        name: 'Deir ez-Zor Governorate',
        stateCode: 'DY',
      },
      {
        name: 'Hama Governorate',
        stateCode: 'HM',
      },
      {
        name: 'Homs Governorate',
        stateCode: 'HI',
      },
      {
        name: 'Idlib Governorate',
        stateCode: 'ID',
      },
      {
        name: 'Latakia Governorate',
        stateCode: 'LA',
      },
      {
        name: 'Quneitra Governorate',
        stateCode: 'QU',
      },
      {
        name: 'Rif Dimashq Governorate',
        stateCode: 'RD',
      },
      {
        name: 'Tartus Governorate',
        stateCode: 'TA',
      },
    ],
  },
  {
    name: 'Taiwan',
    code: 'TW',
    phoneCode: '886',
    currency: 'TWD',
    currencySymbol: '$',

    emoji: '🇹🇼',

    states: [
      {
        name: 'Changhua County',
        stateCode: 'CHA',
      },
      {
        name: 'Chiayi City',
        stateCode: 'CYQ',
      },
      {
        name: 'Chiayi County',
        stateCode: 'CYI',
      },
      {
        name: 'Hsinchu',
        stateCode: 'HSZ',
      },
      {
        name: 'Hsinchu County',
        stateCode: 'HSQ',
      },
      {
        name: 'Hualien County',
        stateCode: 'HUA',
      },
      {
        name: 'Kaohsiung',
        stateCode: 'KHH',
      },
      {
        name: 'Kaohsiung County',
        stateCode: 'KHQ',
      },
      {
        name: 'Kinmen',
        stateCode: 'KIN',
      },
      {
        name: 'Lienchiang County',
        stateCode: 'LIE',
      },
      {
        name: 'Miaoli County',
        stateCode: 'MIA',
      },
      {
        name: 'Nantou County',
        stateCode: 'NAN',
      },
      {
        name: 'Penghu County',
        stateCode: 'PEN',
      },
      {
        name: 'Pingtung County',
        stateCode: 'PIF',
      },
      {
        name: 'Taichung',
        stateCode: 'TXG',
      },
      {
        name: 'Taichung County',
        stateCode: 'TXQ',
      },
      {
        name: 'Tainan',
        stateCode: 'TNN',
      },
      {
        name: 'Tainan County',
        stateCode: 'TNQ',
      },
      {
        name: 'Taipei',
        stateCode: 'TPE',
      },
      {
        name: 'Taitung County',
        stateCode: 'TTT',
      },
      {
        name: 'Taoyuan City',
        stateCode: 'TAO',
      },
      {
        name: 'Yilan County',
        stateCode: 'ILA',
      },
      {
        name: 'Yunlin County',
        stateCode: 'YUN',
      },
    ],
  },
  {
    name: 'Tajikistan',
    code: 'TJ',
    phoneCode: '992',
    currency: 'TJS',
    currencySymbol: 'SM',

    emoji: '🇹🇯',

    states: [
      {
        name: 'districts of Republican Subordination',
        stateCode: 'RA',
      },
      {
        name: 'Gorno-Badakhshan Autonomous Province',
        stateCode: 'GB',
      },
      {
        name: 'Khatlon Province',
        stateCode: 'KT',
      },
      {
        name: 'Sughd Province',
        stateCode: 'SU',
      },
    ],
  },
  {
    name: 'Tanzania',
    code: 'TZ',
    phoneCode: '255',
    currency: 'TZS',
    currencySymbol: 'TSh',

    emoji: '🇹🇿',

    states: [
      {
        name: 'Arusha Region',
        stateCode: '01',
      },
      {
        name: 'Dar es Salaam Region',
        stateCode: '02',
      },
      {
        name: 'Dodoma Region',
        stateCode: '03',
      },
      {
        name: 'Geita Region',
        stateCode: '27',
      },
      {
        name: 'Iringa Region',
        stateCode: '04',
      },
      {
        name: 'Kagera Region',
        stateCode: '05',
      },
      {
        name: 'Katavi Region',
        stateCode: '28',
      },
      {
        name: 'Kigoma Region',
        stateCode: '08',
      },
      {
        name: 'Kilimanjaro Region',
        stateCode: '09',
      },
      {
        name: 'Lindi Region',
        stateCode: '12',
      },
      {
        name: 'Manyara Region',
        stateCode: '26',
      },
      {
        name: 'Mara Region',
        stateCode: '13',
      },
      {
        name: 'Morogoro Region',
        stateCode: '16',
      },
      {
        name: 'Mtwara Region',
        stateCode: '17',
      },
      {
        name: 'Mwanza Region',
        stateCode: '18',
      },
      {
        name: 'Njombe Region',
        stateCode: '29',
      },
      {
        name: 'North Pemba Region',
        stateCode: '06',
      },
      {
        name: 'Pwani Region',
        stateCode: '19',
      },
      {
        name: 'Rukwa Region',
        stateCode: '20',
      },
      {
        name: 'Ruvuma Region',
        stateCode: '21',
      },
      {
        name: 'Shinyanga Region',
        stateCode: '22',
      },
      {
        name: 'Simiyu Region',
        stateCode: '30',
      },
      {
        name: 'Singida Region',
        stateCode: '23',
      },
      {
        name: 'South Pemba Region',
        stateCode: '10',
      },
      {
        name: 'Tabora Region',
        stateCode: '24',
      },
      {
        name: 'Tanga Region',
        stateCode: '25',
      },
      {
        name: 'Zanzibar Central/South Region',
        stateCode: '11',
      },
      {
        name: 'Zanzibar North Region',
        stateCode: '07',
      },
      {
        name: 'Zanzibar Urban/West Region',
        stateCode: '15',
      },
    ],
  },
  {
    name: 'Thailand',
    code: 'TH',
    phoneCode: '66',
    currency: 'THB',
    currencySymbol: '฿',

    emoji: '🇹🇭',

    states: [
      {
        name: 'Amnat Charoen',
        stateCode: '37',
      },
      {
        name: 'Ang Thong',
        stateCode: '15',
      },
      {
        name: 'Bangkok',
        stateCode: '10',
      },
      {
        name: 'Bueng Kan',
        stateCode: '38',
      },
      {
        name: 'Buri Ram',
        stateCode: '31',
      },
      {
        name: 'Chachoengsao',
        stateCode: '24',
      },
      {
        name: 'Chai Nat',
        stateCode: '18',
      },
      {
        name: 'Chanthaburi',
        stateCode: '22',
      },
      {
        name: 'Chiang Mai',
        stateCode: '50',
      },
      {
        name: 'Chiang Rai',
        stateCode: '57',
      },
      {
        name: 'Chon Buri',
        stateCode: '20',
      },
      {
        name: 'Chumphon',
        stateCode: '86',
      },
      {
        name: 'Kalasin',
        stateCode: '46',
      },
      {
        name: 'Kamphaeng Phet',
        stateCode: '62',
      },
      {
        name: 'Kanchanaburi',
        stateCode: '71',
      },
      {
        name: 'Khon Kaen',
        stateCode: '40',
      },
      {
        name: 'Krabi',
        stateCode: '81',
      },
      {
        name: 'Lampang',
        stateCode: '52',
      },
      {
        name: 'Lamphun',
        stateCode: '51',
      },
      {
        name: 'Loei',
        stateCode: '42',
      },
      {
        name: 'Lopburi',
        stateCode: '16',
      },
      {
        name: 'Mae Hong Son',
        stateCode: '58',
      },
      {
        name: 'Maha Sarakham',
        stateCode: '44',
      },
      {
        name: 'Mukdahan',
        stateCode: '49',
      },
      {
        name: 'Nakhon Nayok',
        stateCode: '26',
      },
      {
        name: 'Nakhon Pathom',
        stateCode: '73',
      },
      {
        name: 'Nakhon Phanom',
        stateCode: '48',
      },
      {
        name: 'Nakhon Ratchasima',
        stateCode: '30',
      },
      {
        name: 'Nakhon Sawan',
        stateCode: '60',
      },
      {
        name: 'Nakhon Si Thammarat',
        stateCode: '80',
      },
      {
        name: 'Nan',
        stateCode: '55',
      },
      {
        name: 'Narathiwat',
        stateCode: '96',
      },
      {
        name: 'Nong Bua Lam Phu',
        stateCode: '39',
      },
      {
        name: 'Nong Khai',
        stateCode: '43',
      },
      {
        name: 'Nonthaburi',
        stateCode: '12',
      },
      {
        name: 'Pathum Thani',
        stateCode: '13',
      },
      {
        name: 'Pattani',
        stateCode: '94',
      },
      {
        name: 'Pattaya',
        stateCode: 'S',
      },
      {
        name: 'Phang Nga',
        stateCode: '82',
      },
      {
        name: 'Phatthalung',
        stateCode: '93',
      },
      {
        name: 'Phayao',
        stateCode: '56',
      },
      {
        name: 'Phetchabun',
        stateCode: '67',
      },
      {
        name: 'Phetchaburi',
        stateCode: '76',
      },
      {
        name: 'Phichit',
        stateCode: '66',
      },
      {
        name: 'Phitsanulok',
        stateCode: '65',
      },
      {
        name: 'Phra Nakhon Si Ayutthaya',
        stateCode: '14',
      },
      {
        name: 'Phrae',
        stateCode: '54',
      },
      {
        name: 'Phuket',
        stateCode: '83',
      },
      {
        name: 'Prachin Buri',
        stateCode: '25',
      },
      {
        name: 'Prachuap Khiri Khan',
        stateCode: '77',
      },
      {
        name: 'Ranong',
        stateCode: '85',
      },
      {
        name: 'Ratchaburi',
        stateCode: '70',
      },
      {
        name: 'Rayong',
        stateCode: '21',
      },
      {
        name: 'Roi Et',
        stateCode: '45',
      },
      {
        name: 'Sa Kaeo',
        stateCode: '27',
      },
      {
        name: 'Sakon Nakhon',
        stateCode: '47',
      },
      {
        name: 'Samut Prakan',
        stateCode: '11',
      },
      {
        name: 'Samut Sakhon',
        stateCode: '74',
      },
      {
        name: 'Samut Songkhram',
        stateCode: '75',
      },
      {
        name: 'Saraburi',
        stateCode: '19',
      },
      {
        name: 'Satun',
        stateCode: '91',
      },
      {
        name: 'Si Sa Ket',
        stateCode: '33',
      },
      {
        name: 'Sing Buri',
        stateCode: '17',
      },
      {
        name: 'Songkhla',
        stateCode: '90',
      },
      {
        name: 'Sukhothai',
        stateCode: '64',
      },
      {
        name: 'Suphanburi',
        stateCode: '72',
      },
      {
        name: 'Surat Thani',
        stateCode: '84',
      },
      {
        name: 'Surin',
        stateCode: '32',
      },
      {
        name: 'Tak',
        stateCode: '63',
      },
      {
        name: 'Trang',
        stateCode: '92',
      },
      {
        name: 'Trat',
        stateCode: '23',
      },
      {
        name: 'Ubon Ratchathani',
        stateCode: '34',
      },
      {
        name: 'Udon Thani',
        stateCode: '41',
      },
      {
        name: 'Uthai Thani',
        stateCode: '61',
      },
      {
        name: 'Uttaradit',
        stateCode: '53',
      },
      {
        name: 'Yala',
        stateCode: '95',
      },
      {
        name: 'Yasothon',
        stateCode: '35',
      },
    ],
  },
  {
    name: 'Togo',
    code: 'TG',
    phoneCode: '228',
    currency: 'XOF',
    currencySymbol: 'CFA',

    emoji: '🇹🇬',

    states: [
      {
        name: 'Centrale Region',
        stateCode: 'C',
      },
      {
        name: 'Kara Region',
        stateCode: 'K',
      },
      {
        name: 'Maritime',
        stateCode: 'M',
      },
      {
        name: 'Plateaux Region',
        stateCode: 'P',
      },
      {
        name: 'Savanes Region',
        stateCode: 'S',
      },
    ],
  },
  {
    name: 'Tokelau',
    code: 'TK',
    phoneCode: '690',
    currency: 'NZD',
    currencySymbol: '$',

    emoji: '🇹🇰',

    states: [],
  },
  {
    name: 'Tonga',
    code: 'TO',
    phoneCode: '676',
    currency: 'TOP',
    currencySymbol: '$',

    emoji: '🇹🇴',

    states: [
      {
        name: 'Haʻapai',
        stateCode: '02',
      },
      {
        name: 'ʻEua',
        stateCode: '01',
      },
      {
        name: 'Niuas',
        stateCode: '03',
      },
      {
        name: 'Tongatapu',
        stateCode: '04',
      },
      {
        name: 'Vavaʻu',
        stateCode: '05',
      },
    ],
  },
  {
    name: 'Trinidad And Tobago',
    code: 'TT',
    phoneCode: '+1-868',
    currency: 'TTD',
    currencySymbol: '$',

    emoji: '🇹🇹',

    states: [
      {
        name: 'Arima',
        stateCode: 'ARI',
      },
      {
        name: 'Chaguanas',
        stateCode: 'CHA',
      },
      {
        name: 'Couva-Tabaquite-Talparo Regional Corporation',
        stateCode: 'CTT',
      },
      {
        name: 'Diego Martin Regional Corporation',
        stateCode: 'DMN',
      },
      {
        name: 'Eastern Tobago',
        stateCode: 'ETO',
      },
      {
        name: 'Penal-Debe Regional Corporation',
        stateCode: 'PED',
      },
      {
        name: 'Point Fortin',
        stateCode: 'PTF',
      },
      {
        name: 'Port of Spain',
        stateCode: 'POS',
      },
      {
        name: 'Princes Town Regional Corporation',
        stateCode: 'PRT',
      },
      {
        name: 'Rio Claro-Mayaro Regional Corporation',
        stateCode: 'MRC',
      },
      {
        name: 'San Fernando',
        stateCode: 'SFO',
      },
      {
        name: 'San Juan-Laventille Regional Corporation',
        stateCode: 'SJL',
      },
      {
        name: 'Sangre Grande Regional Corporation',
        stateCode: 'SGE',
      },
      {
        name: 'Siparia Regional Corporation',
        stateCode: 'SIP',
      },
      {
        name: 'Tunapuna-Piarco Regional Corporation',
        stateCode: 'TUP',
      },
      {
        name: 'Western Tobago',
        stateCode: 'WTO',
      },
    ],
  },
  {
    name: 'Tunisia',
    code: 'TN',
    phoneCode: '216',
    currency: 'TND',
    currencySymbol: 'ت.د',

    emoji: '🇹🇳',

    states: [
      {
        name: 'Ariana Governorate',
        stateCode: '12',
      },
      {
        name: 'Ben Arous Governorate',
        stateCode: '13',
      },
      {
        name: 'Bizerte Governorate',
        stateCode: '23',
      },
      {
        name: 'Gabès Governorate',
        stateCode: '81',
      },
      {
        name: 'Gafsa Governorate',
        stateCode: '71',
      },
      {
        name: 'Jendouba Governorate',
        stateCode: '32',
      },
      {
        name: 'Kairouan Governorate',
        stateCode: '41',
      },
      {
        name: 'Kasserine Governorate',
        stateCode: '42',
      },
      {
        name: 'Kassrine',
        stateCode: '31',
      },
      {
        name: 'Kebili Governorate',
        stateCode: '73',
      },
      {
        name: 'Kef Governorate',
        stateCode: '33',
      },
      {
        name: 'Mahdia Governorate',
        stateCode: '53',
      },
      {
        name: 'Manouba Governorate',
        stateCode: '14',
      },
      {
        name: 'Medenine Governorate',
        stateCode: '82',
      },
      {
        name: 'Monastir Governorate',
        stateCode: '52',
      },
      {
        name: 'Sfax Governorate',
        stateCode: '61',
      },
      {
        name: 'Sidi Bouzid Governorate',
        stateCode: '43',
      },
      {
        name: 'Siliana Governorate',
        stateCode: '34',
      },
      {
        name: 'Sousse Governorate',
        stateCode: '51',
      },
      {
        name: 'Tataouine Governorate',
        stateCode: '83',
      },
      {
        name: 'Tozeur Governorate',
        stateCode: '72',
      },
      {
        name: 'Tunis Governorate',
        stateCode: '11',
      },
      {
        name: 'Zaghouan Governorate',
        stateCode: '22',
      },
    ],
  },
  {
    name: 'Turkey',
    code: 'TR',
    phoneCode: '90',
    currency: 'TRY',
    currencySymbol: '₺',

    emoji: '🇹🇷',

    states: [
      {
        name: 'Adana Province',
        stateCode: '01',
      },
      {
        name: 'Adıyaman Province',
        stateCode: '02',
      },
      {
        name: 'Afyonkarahisar Province',
        stateCode: '03',
      },
      {
        name: 'Ağrı Province',
        stateCode: '04',
      },
      {
        name: 'Aksaray Province',
        stateCode: '68',
      },
      {
        name: 'Amasya Province',
        stateCode: '05',
      },
      {
        name: 'Ankara Province',
        stateCode: '06',
      },
      {
        name: 'Antalya Province',
        stateCode: '07',
      },
      {
        name: 'Ardahan Province',
        stateCode: '75',
      },
      {
        name: 'Artvin Province',
        stateCode: '08',
      },
      {
        name: 'Aydın Province',
        stateCode: '09',
      },
      {
        name: 'Balıkesir Province',
        stateCode: '10',
      },
      {
        name: 'Bartın Province',
        stateCode: '74',
      },
      {
        name: 'Batman Province',
        stateCode: '72',
      },
      {
        name: 'Bayburt Province',
        stateCode: '69',
      },
      {
        name: 'Bilecik Province',
        stateCode: '11',
      },
      {
        name: 'Bingöl Province',
        stateCode: '12',
      },
      {
        name: 'Bitlis Province',
        stateCode: '13',
      },
      {
        name: 'Bolu Province',
        stateCode: '14',
      },
      {
        name: 'Burdur Province',
        stateCode: '15',
      },
      {
        name: 'Bursa Province',
        stateCode: '16',
      },
      {
        name: 'Çanakkale Province',
        stateCode: '17',
      },
      {
        name: 'Çankırı Province',
        stateCode: '18',
      },
      {
        name: 'Çorum Province',
        stateCode: '19',
      },
      {
        name: 'Denizli Province',
        stateCode: '20',
      },
      {
        name: 'Diyarbakır Province',
        stateCode: '21',
      },
      {
        name: 'Düzce Province',
        stateCode: '81',
      },
      {
        name: 'Edirne Province',
        stateCode: '22',
      },
      {
        name: 'Elazığ Province',
        stateCode: '23',
      },
      {
        name: 'Erzincan Province',
        stateCode: '24',
      },
      {
        name: 'Erzurum Province',
        stateCode: '25',
      },
      {
        name: 'Eskişehir Province',
        stateCode: '26',
      },
      {
        name: 'Gaziantep Province',
        stateCode: '27',
      },
      {
        name: 'Giresun Province',
        stateCode: '28',
      },
      {
        name: 'Gümüşhane Province',
        stateCode: '29',
      },
      {
        name: 'Hakkâri Province',
        stateCode: '30',
      },
      {
        name: 'Hatay Province',
        stateCode: '31',
      },
      {
        name: 'Iğdır Province',
        stateCode: '76',
      },
      {
        name: 'Isparta Province',
        stateCode: '32',
      },
      {
        name: 'Istanbul Province',
        stateCode: '34',
      },
      {
        name: 'İzmir Province',
        stateCode: '35',
      },
      {
        name: 'Kahramanmaraş Province',
        stateCode: '46',
      },
      {
        name: 'Karabük Province',
        stateCode: '78',
      },
      {
        name: 'Karaman Province',
        stateCode: '70',
      },
      {
        name: 'Kars Province',
        stateCode: '36',
      },
      {
        name: 'Kastamonu Province',
        stateCode: '37',
      },
      {
        name: 'Kayseri Province',
        stateCode: '38',
      },
      {
        name: 'Kilis Province',
        stateCode: '79',
      },
      {
        name: 'Kırıkkale Province',
        stateCode: '71',
      },
      {
        name: 'Kırklareli Province',
        stateCode: '39',
      },
      {
        name: 'Kırşehir Province',
        stateCode: '40',
      },
      {
        name: 'Kocaeli Province',
        stateCode: '41',
      },
      {
        name: 'Konya Province',
        stateCode: '42',
      },
      {
        name: 'Kütahya Province',
        stateCode: '43',
      },
      {
        name: 'Malatya Province',
        stateCode: '44',
      },
      {
        name: 'Manisa Province',
        stateCode: '45',
      },
      {
        name: 'Mardin Province',
        stateCode: '47',
      },
      {
        name: 'Mersin Province',
        stateCode: '33',
      },
      {
        name: 'Muğla Province',
        stateCode: '48',
      },
      {
        name: 'Muş Province',
        stateCode: '49',
      },
      {
        name: 'Nevşehir Province',
        stateCode: '50',
      },
      {
        name: 'Niğde Province',
        stateCode: '51',
      },
      {
        name: 'Ordu Province',
        stateCode: '52',
      },
      {
        name: 'Osmaniye Province',
        stateCode: '80',
      },
      {
        name: 'Rize Province',
        stateCode: '53',
      },
      {
        name: 'Sakarya Province',
        stateCode: '54',
      },
      {
        name: 'Samsun Province',
        stateCode: '55',
      },
      {
        name: 'Şanlıurfa Province',
        stateCode: '63',
      },
      {
        name: 'Siirt Province',
        stateCode: '56',
      },
      {
        name: 'Sinop Province',
        stateCode: '57',
      },
      {
        name: 'Sivas Province',
        stateCode: '58',
      },
      {
        name: 'Şırnak Province',
        stateCode: '73',
      },
      {
        name: 'Tekirdağ Province',
        stateCode: '59',
      },
      {
        name: 'Tokat Province',
        stateCode: '60',
      },
      {
        name: 'Trabzon Province',
        stateCode: '61',
      },
      {
        name: 'Tunceli Province',
        stateCode: '62',
      },
      {
        name: 'Uşak Province',
        stateCode: '64',
      },
      {
        name: 'Van Province',
        stateCode: '65',
      },
      {
        name: 'Yalova Province',
        stateCode: '77',
      },
      {
        name: 'Yozgat Province',
        stateCode: '66',
      },
      {
        name: 'Zonguldak Province',
        stateCode: '67',
      },
    ],
  },
  {
    name: 'Turkmenistan',
    code: 'TM',
    phoneCode: '993',
    currency: 'TMT',
    currencySymbol: 'T',

    emoji: '🇹🇲',

    states: [
      {
        name: 'Ahal Region',
        stateCode: 'A',
      },
      {
        name: 'Ashgabat',
        stateCode: 'S',
      },
      {
        name: 'Balkan Region',
        stateCode: 'B',
      },
      {
        name: 'Daşoguz Region',
        stateCode: 'D',
      },
      {
        name: 'Lebap Region',
        stateCode: 'L',
      },
      {
        name: 'Mary Region',
        stateCode: 'M',
      },
    ],
  },
  {
    name: 'Turks And Caicos Islands',
    code: 'TC',
    phoneCode: '+1-649',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇹🇨',

    states: [],
  },
  {
    name: 'Tuvalu',
    code: 'TV',
    phoneCode: '688',
    currency: 'AUD',
    currencySymbol: '$',

    emoji: '🇹🇻',

    states: [
      {
        name: 'Funafuti',
        stateCode: 'FUN',
      },
      {
        name: 'Nanumanga',
        stateCode: 'NMG',
      },
      {
        name: 'Nanumea',
        stateCode: 'NMA',
      },
      {
        name: 'Niutao Island Council',
        stateCode: 'NIT',
      },
      {
        name: 'Nui',
        stateCode: 'NUI',
      },
      {
        name: 'Nukufetau',
        stateCode: 'NKF',
      },
      {
        name: 'Nukulaelae',
        stateCode: 'NKL',
      },
      {
        name: 'Vaitupu',
        stateCode: 'VAI',
      },
    ],
  },
  {
    name: 'Uganda',
    code: 'UG',
    phoneCode: '256',
    currency: 'UGX',
    currencySymbol: 'USh',

    emoji: '🇺🇬',

    states: [
      {
        name: 'Abim District',
        stateCode: '314',
      },
      {
        name: 'Adjumani District',
        stateCode: '301',
      },
      {
        name: 'Agago District',
        stateCode: '322',
      },
      {
        name: 'Alebtong District',
        stateCode: '323',
      },
      {
        name: 'Amolatar District',
        stateCode: '315',
      },
      {
        name: 'Amudat District',
        stateCode: '324',
      },
      {
        name: 'Amuria District',
        stateCode: '216',
      },
      {
        name: 'Amuru District',
        stateCode: '316',
      },
      {
        name: 'Apac District',
        stateCode: '302',
      },
      {
        name: 'Arua District',
        stateCode: '303',
      },
      {
        name: 'Budaka District',
        stateCode: '217',
      },
      {
        name: 'Bududa District',
        stateCode: '218',
      },
      {
        name: 'Bugiri District',
        stateCode: '201',
      },
      {
        name: 'Buhweju District',
        stateCode: '420',
      },
      {
        name: 'Buikwe District',
        stateCode: '117',
      },
      {
        name: 'Bukedea District',
        stateCode: '219',
      },
      {
        name: 'Bukomansimbi District',
        stateCode: '118',
      },
      {
        name: 'Bukwo District',
        stateCode: '220',
      },
      {
        name: 'Bulambuli District',
        stateCode: '225',
      },
      {
        name: 'Buliisa District',
        stateCode: '416',
      },
      {
        name: 'Bundibugyo District',
        stateCode: '401',
      },
      {
        name: 'Bunyangabu District',
        stateCode: '430',
      },
      {
        name: 'Bushenyi District',
        stateCode: '402',
      },
      {
        name: 'Busia District',
        stateCode: '202',
      },
      {
        name: 'Butaleja District',
        stateCode: '221',
      },
      {
        name: 'Butambala District',
        stateCode: '119',
      },
      {
        name: 'Butebo District',
        stateCode: '233',
      },
      {
        name: 'Buvuma District',
        stateCode: '120',
      },
      {
        name: 'Buyende District',
        stateCode: '226',
      },
      {
        name: 'Central Region',
        stateCode: 'C',
      },
      {
        name: 'Dokolo District',
        stateCode: '317',
      },
      {
        name: 'Eastern Region',
        stateCode: 'E',
      },
      {
        name: 'Gomba District',
        stateCode: '121',
      },
      {
        name: 'Gulu District',
        stateCode: '304',
      },
      {
        name: 'Ibanda District',
        stateCode: '417',
      },
      {
        name: 'Iganga District',
        stateCode: '203',
      },
      {
        name: 'Isingiro District',
        stateCode: '418',
      },
      {
        name: 'Jinja District',
        stateCode: '204',
      },
      {
        name: 'Kaabong District',
        stateCode: '318',
      },
      {
        name: 'Kabale District',
        stateCode: '404',
      },
      {
        name: 'Kabarole District',
        stateCode: '405',
      },
      {
        name: 'Kaberamaido District',
        stateCode: '213',
      },
      {
        name: 'Kagadi District',
        stateCode: '427',
      },
      {
        name: 'Kakumiro District',
        stateCode: '428',
      },
      {
        name: 'Kalangala District',
        stateCode: '101',
      },
      {
        name: 'Kaliro District',
        stateCode: '222',
      },
      {
        name: 'Kalungu District',
        stateCode: '122',
      },
      {
        name: 'Kampala District',
        stateCode: '102',
      },
      {
        name: 'Kamuli District',
        stateCode: '205',
      },
      {
        name: 'Kamwenge District',
        stateCode: '413',
      },
      {
        name: 'Kanungu District',
        stateCode: '414',
      },
      {
        name: 'Kapchorwa District',
        stateCode: '206',
      },
      {
        name: 'Kasese District',
        stateCode: '406',
      },
      {
        name: 'Katakwi District',
        stateCode: '207',
      },
      {
        name: 'Kayunga District',
        stateCode: '112',
      },
      {
        name: 'Kibaale District',
        stateCode: '407',
      },
      {
        name: 'Kiboga District',
        stateCode: '103',
      },
      {
        name: 'Kibuku District',
        stateCode: '227',
      },
      {
        name: 'Kiruhura District',
        stateCode: '419',
      },
      {
        name: 'Kiryandongo District',
        stateCode: '421',
      },
      {
        name: 'Kisoro District',
        stateCode: '408',
      },
      {
        name: 'Kitgum District',
        stateCode: '305',
      },
      {
        name: 'Koboko District',
        stateCode: '319',
      },
      {
        name: 'Kole District',
        stateCode: '325',
      },
      {
        name: 'Kotido District',
        stateCode: '306',
      },
      {
        name: 'Kumi District',
        stateCode: '208',
      },
      {
        name: 'Kween District',
        stateCode: '228',
      },
      {
        name: 'Kyankwanzi District',
        stateCode: '123',
      },
      {
        name: 'Kyegegwa District',
        stateCode: '422',
      },
      {
        name: 'Kyenjojo District',
        stateCode: '415',
      },
      {
        name: 'Kyotera District',
        stateCode: '125',
      },
      {
        name: 'Lamwo District',
        stateCode: '326',
      },
      {
        name: 'Lira District',
        stateCode: '307',
      },
      {
        name: 'Luuka District',
        stateCode: '229',
      },
      {
        name: 'Luwero District',
        stateCode: '104',
      },
      {
        name: 'Lwengo District',
        stateCode: '124',
      },
      {
        name: 'Lyantonde District',
        stateCode: '114',
      },
      {
        name: 'Manafwa District',
        stateCode: '223',
      },
      {
        name: 'Maracha District',
        stateCode: '320',
      },
      {
        name: 'Masaka District',
        stateCode: '105',
      },
      {
        name: 'Masindi District',
        stateCode: '409',
      },
      {
        name: 'Mayuge District',
        stateCode: '214',
      },
      {
        name: 'Mbale District',
        stateCode: '209',
      },
      {
        name: 'Mbarara District',
        stateCode: '410',
      },
      {
        name: 'Mitooma District',
        stateCode: '423',
      },
      {
        name: 'Mityana District',
        stateCode: '115',
      },
      {
        name: 'Moroto District',
        stateCode: '308',
      },
      {
        name: 'Moyo District',
        stateCode: '309',
      },
      {
        name: 'Mpigi District',
        stateCode: '106',
      },
      {
        name: 'Mubende District',
        stateCode: '107',
      },
      {
        name: 'Mukono District',
        stateCode: '108',
      },
      {
        name: 'Nakapiripirit District',
        stateCode: '311',
      },
      {
        name: 'Nakaseke District',
        stateCode: '116',
      },
      {
        name: 'Nakasongola District',
        stateCode: '109',
      },
      {
        name: 'Namayingo District',
        stateCode: '230',
      },
      {
        name: 'Namisindwa District',
        stateCode: '234',
      },
      {
        name: 'Namutumba District',
        stateCode: '224',
      },
      {
        name: 'Napak District',
        stateCode: '327',
      },
      {
        name: 'Nebbi District',
        stateCode: '310',
      },
      {
        name: 'Ngora District',
        stateCode: '231',
      },
      {
        name: 'Northern Region',
        stateCode: 'N',
      },
      {
        name: 'Ntoroko District',
        stateCode: '424',
      },
      {
        name: 'Ntungamo District',
        stateCode: '411',
      },
      {
        name: 'Nwoya District',
        stateCode: '328',
      },
      {
        name: 'Omoro District',
        stateCode: '331',
      },
      {
        name: 'Otuke District',
        stateCode: '329',
      },
      {
        name: 'Oyam District',
        stateCode: '321',
      },
      {
        name: 'Pader District',
        stateCode: '312',
      },
      {
        name: 'Pakwach District',
        stateCode: '332',
      },
      {
        name: 'Pallisa District',
        stateCode: '210',
      },
      {
        name: 'Rakai District',
        stateCode: '110',
      },
      {
        name: 'Rubanda District',
        stateCode: '429',
      },
      {
        name: 'Rubirizi District',
        stateCode: '425',
      },
      {
        name: 'Rukiga District',
        stateCode: '431',
      },
      {
        name: 'Rukungiri District',
        stateCode: '412',
      },
      {
        name: 'Sembabule District',
        stateCode: '111',
      },
      {
        name: 'Serere District',
        stateCode: '232',
      },
      {
        name: 'Sheema District',
        stateCode: '426',
      },
      {
        name: 'Sironko District',
        stateCode: '215',
      },
      {
        name: 'Soroti District',
        stateCode: '211',
      },
      {
        name: 'Tororo District',
        stateCode: '212',
      },
      {
        name: 'Wakiso District',
        stateCode: '113',
      },
      {
        name: 'Western Region',
        stateCode: 'W',
      },
      {
        name: 'Yumbe District',
        stateCode: '313',
      },
      {
        name: 'Zombo District',
        stateCode: '330',
      },
    ],
  },
  {
    name: 'Ukraine',
    code: 'UA',
    phoneCode: '380',
    currency: 'UAH',
    currencySymbol: '₴',

    emoji: '🇺🇦',

    states: [
      {
        name: 'Autonomous Republic of Crimea',
        stateCode: '43',
      },
      {
        name: 'Cherkasy Oblast',
        stateCode: '71',
      },
      {
        name: 'Chernihiv Oblast',
        stateCode: '74',
      },
      {
        name: 'Chernivtsi Oblast',
        stateCode: '77',
      },
      {
        name: 'Dnipropetrovsk Oblast',
        stateCode: '12',
      },
      {
        name: 'Donetsk Oblast',
        stateCode: '14',
      },
      {
        name: 'Ivano-Frankivsk Oblast',
        stateCode: '26',
      },
      {
        name: 'Kharkiv Oblast',
        stateCode: '63',
      },
      {
        name: 'Kherson Oblast',
        stateCode: '65',
      },
      {
        name: 'Khmelnytsky Oblast',
        stateCode: '68',
      },
      {
        name: 'Kiev',
        stateCode: '30',
      },
      {
        name: 'Kirovohrad Oblast',
        stateCode: '35',
      },
      {
        name: 'Kyiv Oblast',
        stateCode: '32',
      },
      {
        name: 'Luhansk Oblast',
        stateCode: '09',
      },
      {
        name: 'Lviv Oblast',
        stateCode: '46',
      },
      {
        name: 'Mykolaiv Oblast',
        stateCode: '48',
      },
      {
        name: 'Odessa Oblast',
        stateCode: '51',
      },
      {
        name: 'Rivne Oblast',
        stateCode: '56',
      },
      {
        name: 'Sumy Oblast',
        stateCode: '59',
      },
      {
        name: 'Ternopil Oblast',
        stateCode: '61',
      },
      {
        name: 'Vinnytsia Oblast',
        stateCode: '05',
      },
      {
        name: 'Volyn Oblast',
        stateCode: '07',
      },
      {
        name: 'Zakarpattia Oblast',
        stateCode: '21',
      },
      {
        name: 'Zaporizhzhya Oblast',
        stateCode: '23',
      },
      {
        name: 'Zhytomyr Oblast',
        stateCode: '18',
      },
    ],
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    phoneCode: '971',
    currency: 'AED',
    currencySymbol: 'إ.د',

    emoji: '🇦🇪',

    states: [
      {
        name: 'Abu Dhabi Emirate',
        stateCode: 'AZ',
      },
      {
        name: 'Ajman Emirate',
        stateCode: 'AJ',
      },
      {
        name: 'Dubai',
        stateCode: 'DU',
      },
      {
        name: 'Fujairah',
        stateCode: 'FU',
      },
      {
        name: 'Ras al-Khaimah',
        stateCode: 'RK',
      },
      {
        name: 'Sharjah Emirate',
        stateCode: 'SH',
      },
      {
        name: 'Umm al-Quwain',
        stateCode: 'UQ',
      },
    ],
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    phoneCode: '44',
    currency: 'GBP',
    currencySymbol: '£',

    emoji: '🇬🇧',

    states: [
      {
        name: 'Aberdeen',
        stateCode: 'ABE',
      },
      {
        name: 'Aberdeenshire',
        stateCode: 'ABD',
      },
      {
        name: 'Angus',
        stateCode: 'ANS',
      },
      {
        name: 'Antrim',
        stateCode: 'ANT',
      },
      {
        name: 'Antrim and Newtownabbey',
        stateCode: 'ANN',
      },
      {
        name: 'Ards',
        stateCode: 'ARD',
      },
      {
        name: 'Ards and North Down',
        stateCode: 'AND',
      },
      {
        name: 'Argyll and Bute',
        stateCode: 'AGB',
      },
      {
        name: 'Armagh City and District Council',
        stateCode: 'ARM',
      },
      {
        name: 'Armagh, Banbridge and Craigavon',
        stateCode: 'ABC',
      },
      {
        name: 'Ascension Island',
        stateCode: 'SH-AC',
      },
      {
        name: 'Ballymena Borough',
        stateCode: 'BLA',
      },
      {
        name: 'Ballymoney',
        stateCode: 'BLY',
      },
      {
        name: 'Banbridge',
        stateCode: 'BNB',
      },
      {
        name: 'Barnsley',
        stateCode: 'BNS',
      },
      {
        name: 'Bath and North East Somerset',
        stateCode: 'BAS',
      },
      {
        name: 'Bedford',
        stateCode: 'BDF',
      },
      {
        name: 'Belfast district',
        stateCode: 'BFS',
      },
      {
        name: 'Birmingham',
        stateCode: 'BIR',
      },
      {
        name: 'Blackburn with Darwen',
        stateCode: 'BBD',
      },
      {
        name: 'Blackpool',
        stateCode: 'BPL',
      },
      {
        name: 'Blaenau Gwent County Borough',
        stateCode: 'BGW',
      },
      {
        name: 'Bolton',
        stateCode: 'BOL',
      },
      {
        name: 'Bournemouth',
        stateCode: 'BMH',
      },
      {
        name: 'Bracknell Forest',
        stateCode: 'BRC',
      },
      {
        name: 'Bradford',
        stateCode: 'BRD',
      },
      {
        name: 'Bridgend County Borough',
        stateCode: 'BGE',
      },
      {
        name: 'Brighton and Hove',
        stateCode: 'BNH',
      },
      {
        name: 'Buckinghamshire',
        stateCode: 'BKM',
      },
      {
        name: 'Bury',
        stateCode: 'BUR',
      },
      {
        name: 'Caerphilly County Borough',
        stateCode: 'CAY',
      },
      {
        name: 'Calderdale',
        stateCode: 'CLD',
      },
      {
        name: 'Cambridgeshire',
        stateCode: 'CAM',
      },
      {
        name: 'Carmarthenshire',
        stateCode: 'CMN',
      },
      {
        name: 'Carrickfergus Borough Council',
        stateCode: 'CKF',
      },
      {
        name: 'Castlereagh',
        stateCode: 'CSR',
      },
      {
        name: 'Causeway Coast and Glens',
        stateCode: 'CCG',
      },
      {
        name: 'Central Bedfordshire',
        stateCode: 'CBF',
      },
      {
        name: 'Ceredigion',
        stateCode: 'CGN',
      },
      {
        name: 'Cheshire East',
        stateCode: 'CHE',
      },
      {
        name: 'Cheshire West and Chester',
        stateCode: 'CHW',
      },
      {
        name: 'City and County of Cardiff',
        stateCode: 'CRF',
      },
      {
        name: 'City and County of Swansea',
        stateCode: 'SWA',
      },
      {
        name: 'City of Bristol',
        stateCode: 'BST',
      },
      {
        name: 'City of Derby',
        stateCode: 'DER',
      },
      {
        name: 'City of Kingston upon Hull',
        stateCode: 'KHL',
      },
      {
        name: 'City of Leicester',
        stateCode: 'LCE',
      },
      {
        name: 'City of London',
        stateCode: 'LND',
      },
      {
        name: 'City of Nottingham',
        stateCode: 'NGM',
      },
      {
        name: 'City of Peterborough',
        stateCode: 'PTE',
      },
      {
        name: 'City of Plymouth',
        stateCode: 'PLY',
      },
      {
        name: 'City of Portsmouth',
        stateCode: 'POR',
      },
      {
        name: 'City of Southampton',
        stateCode: 'STH',
      },
      {
        name: 'City of Stoke-on-Trent',
        stateCode: 'STE',
      },
      {
        name: 'City of Sunderland',
        stateCode: 'SND',
      },
      {
        name: 'City of Westminster',
        stateCode: 'WSM',
      },
      {
        name: 'City of Wolverhampton',
        stateCode: 'WLV',
      },
      {
        name: 'City of York',
        stateCode: 'YOR',
      },
      {
        name: 'Clackmannanshire',
        stateCode: 'CLK',
      },
      {
        name: 'Coleraine Borough Council',
        stateCode: 'CLR',
      },
      {
        name: 'Conwy County Borough',
        stateCode: 'CWY',
      },
      {
        name: 'Cookstown District Council',
        stateCode: 'CKT',
      },
      {
        name: 'Cornwall',
        stateCode: 'CON',
      },
      {
        name: 'County Durham',
        stateCode: 'DUR',
      },
      {
        name: 'Coventry',
        stateCode: 'COV',
      },
      {
        name: 'Craigavon Borough Council',
        stateCode: 'CGV',
      },
      {
        name: 'Cumbria',
        stateCode: 'CMA',
      },
      {
        name: 'Darlington',
        stateCode: 'DAL',
      },
      {
        name: 'Denbighshire',
        stateCode: 'DEN',
      },
      {
        name: 'Derbyshire',
        stateCode: 'DBY',
      },
      {
        name: 'Derry City and Strabane',
        stateCode: 'DRS',
      },
      {
        name: 'Derry City Council',
        stateCode: 'DRY',
      },
      {
        name: 'Devon',
        stateCode: 'DEV',
      },
      {
        name: 'Doncaster',
        stateCode: 'DNC',
      },
      {
        name: 'Dorset',
        stateCode: 'DOR',
      },
      {
        name: 'Down District Council',
        stateCode: 'DOW',
      },
      {
        name: 'Dudley',
        stateCode: 'DUD',
      },
      {
        name: 'Dumfries and Galloway',
        stateCode: 'DGY',
      },
      {
        name: 'Dundee',
        stateCode: 'DND',
      },
      {
        name: 'Dungannon and South Tyrone Borough Council',
        stateCode: 'DGN',
      },
      {
        name: 'East Ayrshire',
        stateCode: 'EAY',
      },
      {
        name: 'East Dunbartonshire',
        stateCode: 'EDU',
      },
      {
        name: 'East Lothian',
        stateCode: 'ELN',
      },
      {
        name: 'East Renfrewshire',
        stateCode: 'ERW',
      },
      {
        name: 'East Riding of Yorkshire',
        stateCode: 'ERY',
      },
      {
        name: 'East Sussex',
        stateCode: 'ESX',
      },
      {
        name: 'Edinburgh',
        stateCode: 'EDH',
      },
      {
        name: 'England',
        stateCode: 'ENG',
      },
      {
        name: 'Essex',
        stateCode: 'ESS',
      },
      {
        name: 'Falkirk',
        stateCode: 'FAL',
      },
      {
        name: 'Fermanagh and Omagh',
        stateCode: 'FMO',
      },
      {
        name: 'Fermanagh District Council',
        stateCode: 'FER',
      },
      {
        name: 'Fife',
        stateCode: 'FIF',
      },
      {
        name: 'Flintshire',
        stateCode: 'FLN',
      },
      {
        name: 'Gateshead',
        stateCode: 'GAT',
      },
      {
        name: 'Glasgow',
        stateCode: 'GLG',
      },
      {
        name: 'Gloucestershire',
        stateCode: 'GLS',
      },
      {
        name: 'Gwynedd',
        stateCode: 'GWN',
      },
      {
        name: 'Halton',
        stateCode: 'HAL',
      },
      {
        name: 'Hampshire',
        stateCode: 'HAM',
      },
      {
        name: 'Hartlepool',
        stateCode: 'HPL',
      },
      {
        name: 'Herefordshire',
        stateCode: 'HEF',
      },
      {
        name: 'Hertfordshire',
        stateCode: 'HRT',
      },
      {
        name: 'Highland',
        stateCode: 'HLD',
      },
      {
        name: 'Inverclyde',
        stateCode: 'IVC',
      },
      {
        name: 'Isle of Wight',
        stateCode: 'IOW',
      },
      {
        name: 'Isles of Scilly',
        stateCode: 'IOS',
      },
      {
        name: 'Kent',
        stateCode: 'KEN',
      },
      {
        name: 'Kirklees',
        stateCode: 'KIR',
      },
      {
        name: 'Knowsley',
        stateCode: 'KWL',
      },
      {
        name: 'Lancashire',
        stateCode: 'LAN',
      },
      {
        name: 'Larne Borough Council',
        stateCode: 'LRN',
      },
      {
        name: 'Leeds',
        stateCode: 'LDS',
      },
      {
        name: 'Leicestershire',
        stateCode: 'LEC',
      },
      {
        name: 'Limavady Borough Council',
        stateCode: 'LMV',
      },
      {
        name: 'Lincolnshire',
        stateCode: 'LIN',
      },
      {
        name: 'Lisburn and Castlereagh',
        stateCode: 'LBC',
      },
      {
        name: 'Lisburn City Council',
        stateCode: 'LSB',
      },
      {
        name: 'Liverpool',
        stateCode: 'LIV',
      },
      {
        name: 'London Borough of Barking and Dagenham',
        stateCode: 'BDG',
      },
      {
        name: 'London Borough of Barnet',
        stateCode: 'BNE',
      },
      {
        name: 'London Borough of Bexley',
        stateCode: 'BEX',
      },
      {
        name: 'London Borough of Brent',
        stateCode: 'BEN',
      },
      {
        name: 'London Borough of Bromley',
        stateCode: 'BRY',
      },
      {
        name: 'London Borough of Camden',
        stateCode: 'CMD',
      },
      {
        name: 'London Borough of Croydon',
        stateCode: 'CRY',
      },
      {
        name: 'London Borough of Ealing',
        stateCode: 'EAL',
      },
      {
        name: 'London Borough of Enfield',
        stateCode: 'ENF',
      },
      {
        name: 'London Borough of Hackney',
        stateCode: 'HCK',
      },
      {
        name: 'London Borough of Hammersmith and Fulham',
        stateCode: 'HMF',
      },
      {
        name: 'London Borough of Haringey',
        stateCode: 'HRY',
      },
      {
        name: 'London Borough of Harrow',
        stateCode: 'HRW',
      },
      {
        name: 'London Borough of Havering',
        stateCode: 'HAV',
      },
      {
        name: 'London Borough of Hillingdon',
        stateCode: 'HIL',
      },
      {
        name: 'London Borough of Hounslow',
        stateCode: 'HNS',
      },
      {
        name: 'London Borough of Islington',
        stateCode: 'ISL',
      },
      {
        name: 'London Borough of Lambeth',
        stateCode: 'LBH',
      },
      {
        name: 'London Borough of Lewisham',
        stateCode: 'LEW',
      },
      {
        name: 'London Borough of Merton',
        stateCode: 'MRT',
      },
      {
        name: 'London Borough of Newham',
        stateCode: 'NWM',
      },
      {
        name: 'London Borough of Redbridge',
        stateCode: 'RDB',
      },
      {
        name: 'London Borough of Richmond upon Thames',
        stateCode: 'RIC',
      },
      {
        name: 'London Borough of Southwark',
        stateCode: 'SWK',
      },
      {
        name: 'London Borough of Sutton',
        stateCode: 'STN',
      },
      {
        name: 'London Borough of Tower Hamlets',
        stateCode: 'TWH',
      },
      {
        name: 'London Borough of Waltham Forest',
        stateCode: 'WFT',
      },
      {
        name: 'London Borough of Wandsworth',
        stateCode: 'WND',
      },
      {
        name: 'Magherafelt District Council',
        stateCode: 'MFT',
      },
      {
        name: 'Manchester',
        stateCode: 'MAN',
      },
      {
        name: 'Medway',
        stateCode: 'MDW',
      },
      {
        name: 'Merthyr Tydfil County Borough',
        stateCode: 'MTY',
      },
      {
        name: 'Metropolitan Borough of Wigan',
        stateCode: 'WGN',
      },
      {
        name: 'Mid and East Antrim',
        stateCode: 'MEA',
      },
      {
        name: 'Mid Ulster',
        stateCode: 'MUL',
      },
      {
        name: 'Middlesbrough',
        stateCode: 'MDB',
      },
      {
        name: 'Midlothian',
        stateCode: 'MLN',
      },
      {
        name: 'Milton Keynes',
        stateCode: 'MIK',
      },
      {
        name: 'Monmouthshire',
        stateCode: 'MON',
      },
      {
        name: 'Moray',
        stateCode: 'MRY',
      },
      {
        name: 'Moyle District Council',
        stateCode: 'MYL',
      },
      {
        name: 'Neath Port Talbot County Borough',
        stateCode: 'NTL',
      },
      {
        name: 'Newcastle upon Tyne',
        stateCode: 'NET',
      },
      {
        name: 'Newport',
        stateCode: 'NWP',
      },
      {
        name: 'Newry and Mourne District Council',
        stateCode: 'NYM',
      },
      {
        name: 'Newry, Mourne and Down',
        stateCode: 'NMD',
      },
      {
        name: 'Newtownabbey Borough Council',
        stateCode: 'NTA',
      },
      {
        name: 'Norfolk',
        stateCode: 'NFK',
      },
      {
        name: 'North Ayrshire',
        stateCode: 'NAY',
      },
      {
        name: 'North Down Borough Council',
        stateCode: 'NDN',
      },
      {
        name: 'North East Lincolnshire',
        stateCode: 'NEL',
      },
      {
        name: 'North Lanarkshire',
        stateCode: 'NLK',
      },
      {
        name: 'North Lincolnshire',
        stateCode: 'NLN',
      },
      {
        name: 'North Somerset',
        stateCode: 'NSM',
      },
      {
        name: 'North Tyneside',
        stateCode: 'NTY',
      },
      {
        name: 'North Yorkshire',
        stateCode: 'NYK',
      },
      {
        name: 'Northamptonshire',
        stateCode: 'NTH',
      },
      {
        name: 'Northern Ireland',
        stateCode: 'NIR',
      },
      {
        name: 'Northumberland',
        stateCode: 'NBL',
      },
      {
        name: 'Nottinghamshire',
        stateCode: 'NTT',
      },
      {
        name: 'Oldham',
        stateCode: 'OLD',
      },
      {
        name: 'Omagh District Council',
        stateCode: 'OMH',
      },
      {
        name: 'Orkney Islands',
        stateCode: 'ORK',
      },
      {
        name: 'Outer Hebrides',
        stateCode: 'ELS',
      },
      {
        name: 'Oxfordshire',
        stateCode: 'OXF',
      },
      {
        name: 'Pembrokeshire',
        stateCode: 'PEM',
      },
      {
        name: 'Perth and Kinross',
        stateCode: 'PKN',
      },
      {
        name: 'Poole',
        stateCode: 'POL',
      },
      {
        name: 'Powys',
        stateCode: 'POW',
      },
      {
        name: 'Reading',
        stateCode: 'RDG',
      },
      {
        name: 'Redcar and Cleveland',
        stateCode: 'RCC',
      },
      {
        name: 'Renfrewshire',
        stateCode: 'RFW',
      },
      {
        name: 'Rhondda Cynon Taf',
        stateCode: 'RCT',
      },
      {
        name: 'Rochdale',
        stateCode: 'RCH',
      },
      {
        name: 'Rotherham',
        stateCode: 'ROT',
      },
      {
        name: 'Royal Borough of Greenwich',
        stateCode: 'GRE',
      },
      {
        name: 'Royal Borough of Kensington and Chelsea',
        stateCode: 'KEC',
      },
      {
        name: 'Royal Borough of Kingston upon Thames',
        stateCode: 'KTT',
      },
      {
        name: 'Rutland',
        stateCode: 'RUT',
      },
      {
        name: 'Saint Helena',
        stateCode: 'SH-HL',
      },
      {
        name: 'Salford',
        stateCode: 'SLF',
      },
      {
        name: 'Sandwell',
        stateCode: 'SAW',
      },
      {
        name: 'Scotland',
        stateCode: 'SCT',
      },
      {
        name: 'Scottish Borders',
        stateCode: 'SCB',
      },
      {
        name: 'Sefton',
        stateCode: 'SFT',
      },
      {
        name: 'Sheffield',
        stateCode: 'SHF',
      },
      {
        name: 'Shetland Islands',
        stateCode: 'ZET',
      },
      {
        name: 'Shropshire',
        stateCode: 'SHR',
      },
      {
        name: 'Slough',
        stateCode: 'SLG',
      },
      {
        name: 'Solihull',
        stateCode: 'SOL',
      },
      {
        name: 'Somerset',
        stateCode: 'SOM',
      },
      {
        name: 'South Ayrshire',
        stateCode: 'SAY',
      },
      {
        name: 'South Gloucestershire',
        stateCode: 'SGC',
      },
      {
        name: 'South Lanarkshire',
        stateCode: 'SLK',
      },
      {
        name: 'South Tyneside',
        stateCode: 'STY',
      },
      {
        name: 'Southend-on-Sea',
        stateCode: 'SOS',
      },
      {
        name: 'St Helens',
        stateCode: 'SHN',
      },
      {
        name: 'Staffordshire',
        stateCode: 'STS',
      },
      {
        name: 'Stirling',
        stateCode: 'STG',
      },
      {
        name: 'Stockport',
        stateCode: 'SKP',
      },
      {
        name: 'Stockton-on-Tees',
        stateCode: 'STT',
      },
      {
        name: 'Strabane District Council',
        stateCode: 'STB',
      },
      {
        name: 'Suffolk',
        stateCode: 'SFK',
      },
      {
        name: 'Surrey',
        stateCode: 'SRY',
      },
      {
        name: 'Swindon',
        stateCode: 'SWD',
      },
      {
        name: 'Tameside',
        stateCode: 'TAM',
      },
      {
        name: 'Telford and Wrekin',
        stateCode: 'TFW',
      },
      {
        name: 'Thurrock',
        stateCode: 'THR',
      },
      {
        name: 'Torbay',
        stateCode: 'TOB',
      },
      {
        name: 'Torfaen',
        stateCode: 'TOF',
      },
      {
        name: 'Trafford',
        stateCode: 'TRF',
      },
      {
        name: 'United Kingdom',
        stateCode: 'UKM',
      },
      {
        name: 'Vale of Glamorgan',
        stateCode: 'VGL',
      },
      {
        name: 'Wakefield',
        stateCode: 'WKF',
      },
      {
        name: 'Wales',
        stateCode: 'WLS',
      },
      {
        name: 'Walsall',
        stateCode: 'WLL',
      },
      {
        name: 'Warrington',
        stateCode: 'WRT',
      },
      {
        name: 'Warwickshire',
        stateCode: 'WAR',
      },
      {
        name: 'West Berkshire',
        stateCode: 'WBK',
      },
      {
        name: 'West Dunbartonshire',
        stateCode: 'WDU',
      },
      {
        name: 'West Lothian',
        stateCode: 'WLN',
      },
      {
        name: 'West Sussex',
        stateCode: 'WSX',
      },
      {
        name: 'Wiltshire',
        stateCode: 'WIL',
      },
      {
        name: 'Windsor and Maidenhead',
        stateCode: 'WNM',
      },
      {
        name: 'Wirral',
        stateCode: 'WRL',
      },
      {
        name: 'Wokingham',
        stateCode: 'WOK',
      },
      {
        name: 'Worcestershire',
        stateCode: 'WOR',
      },
      {
        name: 'Wrexham County Borough',
        stateCode: 'WRX',
      },
    ],
  },
  {
    name: 'United States',
    code: 'US',
    phoneCode: '1',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇺🇸',

    states: [
      {
        name: 'Alabama',
        stateCode: 'AL',
      },
      {
        name: 'Alaska',
        stateCode: 'AK',
      },
      {
        name: 'American Samoa',
        stateCode: 'AS',
      },
      {
        name: 'Arizona',
        stateCode: 'AZ',
      },
      {
        name: 'Arkansas',
        stateCode: 'AR',
      },
      {
        name: 'Baker Island',
        stateCode: 'UM-81',
      },
      {
        name: 'California',
        stateCode: 'CA',
      },
      {
        name: 'Colorado',
        stateCode: 'CO',
      },
      {
        name: 'Connecticut',
        stateCode: 'CT',
      },
      {
        name: 'Delaware',
        stateCode: 'DE',
      },
      {
        name: 'District of Columbia',
        stateCode: 'DC',
      },
      {
        name: 'Florida',
        stateCode: 'FL',
      },
      {
        name: 'Georgia',
        stateCode: 'GA',
      },
      {
        name: 'Guam',
        stateCode: 'GU',
      },
      {
        name: 'Hawaii',
        stateCode: 'HI',
      },
      {
        name: 'Howland Island',
        stateCode: 'UM-84',
      },
      {
        name: 'Idaho',
        stateCode: 'ID',
      },
      {
        name: 'Illinois',
        stateCode: 'IL',
      },
      {
        name: 'Indiana',
        stateCode: 'IN',
      },
      {
        name: 'Iowa',
        stateCode: 'IA',
      },
      {
        name: 'Jarvis Island',
        stateCode: 'UM-86',
      },
      {
        name: 'Johnston Atoll',
        stateCode: 'UM-67',
      },
      {
        name: 'Kansas',
        stateCode: 'KS',
      },
      {
        name: 'Kentucky',
        stateCode: 'KY',
      },
      {
        name: 'Kingman Reef',
        stateCode: 'UM-89',
      },
      {
        name: 'Louisiana',
        stateCode: 'LA',
      },
      {
        name: 'Maine',
        stateCode: 'ME',
      },
      {
        name: 'Maryland',
        stateCode: 'MD',
      },
      {
        name: 'Massachusetts',
        stateCode: 'MA',
      },
      {
        name: 'Michigan',
        stateCode: 'MI',
      },
      {
        name: 'Midway Atoll',
        stateCode: 'UM-71',
      },
      {
        name: 'Minnesota',
        stateCode: 'MN',
      },
      {
        name: 'Mississippi',
        stateCode: 'MS',
      },
      {
        name: 'Missouri',
        stateCode: 'MO',
      },
      {
        name: 'Montana',
        stateCode: 'MT',
      },
      {
        name: 'Navassa Island',
        stateCode: 'UM-76',
      },
      {
        name: 'Nebraska',
        stateCode: 'NE',
      },
      {
        name: 'Nevada',
        stateCode: 'NV',
      },
      {
        name: 'New Hampshire',
        stateCode: 'NH',
      },
      {
        name: 'New Jersey',
        stateCode: 'NJ',
      },
      {
        name: 'New Mexico',
        stateCode: 'NM',
      },
      {
        name: 'New York',
        stateCode: 'NY',
      },
      {
        name: 'North Carolina',
        stateCode: 'NC',
      },
      {
        name: 'North Dakota',
        stateCode: 'ND',
      },
      {
        name: 'Northern Mariana Islands',
        stateCode: 'MP',
      },
      {
        name: 'Ohio',
        stateCode: 'OH',
      },
      {
        name: 'Oklahoma',
        stateCode: 'OK',
      },
      {
        name: 'Oregon',
        stateCode: 'OR',
      },
      {
        name: 'Palmyra Atoll',
        stateCode: 'UM-95',
      },
      {
        name: 'Pennsylvania',
        stateCode: 'PA',
      },
      {
        name: 'Puerto Rico',
        stateCode: 'PR',
      },
      {
        name: 'Rhode Island',
        stateCode: 'RI',
      },
      {
        name: 'South Carolina',
        stateCode: 'SC',
      },
      {
        name: 'South Dakota',
        stateCode: 'SD',
      },
      {
        name: 'Tennessee',
        stateCode: 'TN',
      },
      {
        name: 'Texas',
        stateCode: 'TX',
      },
      {
        name: 'United States Minor Outlying Islands',
        stateCode: 'UM',
      },
      {
        name: 'United States Virgin Islands',
        stateCode: 'VI',
      },
      {
        name: 'Utah',
        stateCode: 'UT',
      },
      {
        name: 'Vermont',
        stateCode: 'VT',
      },
      {
        name: 'Virginia',
        stateCode: 'VA',
      },
      {
        name: 'Wake Island',
        stateCode: 'UM-79',
      },
      {
        name: 'Washington',
        stateCode: 'WA',
      },
      {
        name: 'West Virginia',
        stateCode: 'WV',
      },
      {
        name: 'Wisconsin',
        stateCode: 'WI',
      },
      {
        name: 'Wyoming',
        stateCode: 'WY',
      },
    ],
  },
  {
    name: 'United States Minor Outlying Islands',
    code: 'UM',
    phoneCode: '1',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇺🇲',

    states: [],
  },
  {
    name: 'Uruguay',
    code: 'UY',
    phoneCode: '598',
    currency: 'UYU',
    currencySymbol: '$',

    emoji: '🇺🇾',

    states: [
      {
        name: 'Artigas Department',
        stateCode: 'AR',
      },
      {
        name: 'Canelones Department',
        stateCode: 'CA',
      },
      {
        name: 'Cerro Largo Department',
        stateCode: 'CL',
      },
      {
        name: 'Colonia Department',
        stateCode: 'CO',
      },
      {
        name: 'Durazno Department',
        stateCode: 'DU',
      },
      {
        name: 'Flores Department',
        stateCode: 'FS',
      },
      {
        name: 'Florida Department',
        stateCode: 'FD',
      },
      {
        name: 'Lavalleja Department',
        stateCode: 'LA',
      },
      {
        name: 'Maldonado Department',
        stateCode: 'MA',
      },
      {
        name: 'Montevideo Department',
        stateCode: 'MO',
      },
      {
        name: 'Paysandú Department',
        stateCode: 'PA',
      },
      {
        name: 'Río Negro Department',
        stateCode: 'RN',
      },
      {
        name: 'Rivera Department',
        stateCode: 'RV',
      },
      {
        name: 'Rocha Department',
        stateCode: 'RO',
      },
      {
        name: 'Salto Department',
        stateCode: 'SA',
      },
      {
        name: 'San José Department',
        stateCode: 'SJ',
      },
      {
        name: 'Soriano Department',
        stateCode: 'SO',
      },
      {
        name: 'Tacuarembó Department',
        stateCode: 'TA',
      },
      {
        name: 'Treinta y Tres Department',
        stateCode: 'TT',
      },
    ],
  },
  {
    name: 'Uzbekistan',
    code: 'UZ',
    phoneCode: '998',
    currency: 'UZS',
    currencySymbol: 'лв',

    emoji: '🇺🇿',

    states: [
      {
        name: 'Andijan Region',
        stateCode: 'AN',
      },
      {
        name: 'Bukhara Region',
        stateCode: 'BU',
      },
      {
        name: 'Fergana Region',
        stateCode: 'FA',
      },
      {
        name: 'Jizzakh Region',
        stateCode: 'JI',
      },
      {
        name: 'Karakalpakstan',
        stateCode: 'QR',
      },
      {
        name: 'Namangan Region',
        stateCode: 'NG',
      },
      {
        name: 'Navoiy Region',
        stateCode: 'NW',
      },
      {
        name: 'Qashqadaryo Region',
        stateCode: 'QA',
      },
      {
        name: 'Samarqand Region',
        stateCode: 'SA',
      },
      {
        name: 'Sirdaryo Region',
        stateCode: 'SI',
      },
      {
        name: 'Surxondaryo Region',
        stateCode: 'SU',
      },
      {
        name: 'Tashkent',
        stateCode: 'TK',
      },
      {
        name: 'Tashkent Region',
        stateCode: 'TO',
      },
      {
        name: 'Xorazm Region',
        stateCode: 'XO',
      },
    ],
  },
  {
    name: 'Vanuatu',
    code: 'VU',
    phoneCode: '678',
    currency: 'VUV',
    currencySymbol: 'VT',

    emoji: '🇻🇺',

    states: [
      {
        name: 'Malampa',
        stateCode: 'MAP',
      },
      {
        name: 'Penama',
        stateCode: 'PAM',
      },
      {
        name: 'Sanma',
        stateCode: 'SAM',
      },
      {
        name: 'Shefa',
        stateCode: 'SEE',
      },
      {
        name: 'Tafea',
        stateCode: 'TAE',
      },
      {
        name: 'Torba',
        stateCode: 'TOB',
      },
    ],
  },
  {
    name: 'Vatican City State (Holy See)',
    code: 'VA',
    phoneCode: '379',
    currency: 'EUR',
    currencySymbol: '€',

    emoji: '🇻🇦',

    states: [],
  },
  {
    name: 'Venezuela',
    code: 'VE',
    phoneCode: '58',
    currency: 'VEF',
    currencySymbol: 'Bs',

    emoji: '🇻🇪',

    states: [
      {
        name: 'Amazonas',
        stateCode: 'Z',
      },
      {
        name: 'Anzoátegui',
        stateCode: 'B',
      },
      {
        name: 'Apure',
        stateCode: 'C',
      },
      {
        name: 'Aragua',
        stateCode: 'D',
      },
      {
        name: 'Barinas',
        stateCode: 'E',
      },
      {
        name: 'Bolívar',
        stateCode: 'F',
      },
      {
        name: 'Carabobo',
        stateCode: 'G',
      },
      {
        name: 'Cojedes',
        stateCode: 'H',
      },
      {
        name: 'Delta Amacuro',
        stateCode: 'Y',
      },
      {
        name: 'Falcón',
        stateCode: 'I',
      },
      {
        name: 'Federal Dependencies of Venezuela',
        stateCode: 'W',
      },
      {
        name: 'Guárico',
        stateCode: 'J',
      },
      {
        name: 'Lara',
        stateCode: 'K',
      },
      {
        name: 'Mérida',
        stateCode: 'L',
      },
      {
        name: 'Miranda',
        stateCode: 'M',
      },
      {
        name: 'Monagas',
        stateCode: 'N',
      },
      {
        name: 'Nueva Esparta',
        stateCode: 'O',
      },
      {
        name: 'Portuguesa',
        stateCode: 'P',
      },
      {
        name: 'Sucre',
        stateCode: 'R',
      },
      {
        name: 'Táchira',
        stateCode: 'S',
      },
      {
        name: 'Trujillo',
        stateCode: 'T',
      },
      {
        name: 'Vargas',
        stateCode: 'X',
      },
      {
        name: 'Yaracuy',
        stateCode: 'U',
      },
      {
        name: 'Zulia',
        stateCode: 'V',
      },
    ],
  },
  {
    name: 'Vietnam',
    code: 'VN',
    phoneCode: '84',
    currency: 'VND',
    currencySymbol: '₫',

    emoji: '🇻🇳',

    states: [
      {
        name: 'An Giang',
        stateCode: '44',
      },
      {
        name: 'Bà Rịa-Vũng Tàu',
        stateCode: '43',
      },
      {
        name: 'Bắc Giang',
        stateCode: '54',
      },
      {
        name: 'Bắc Kạn',
        stateCode: '53',
      },
      {
        name: 'Bạc Liêu',
        stateCode: '55',
      },
      {
        name: 'Bắc Ninh',
        stateCode: '56',
      },
      {
        name: 'Bến Tre',
        stateCode: '50',
      },
      {
        name: 'Bình Dương',
        stateCode: '57',
      },
      {
        name: 'Bình Định',
        stateCode: '31',
      },
      {
        name: 'Bình Phước',
        stateCode: '58',
      },
      {
        name: 'Bình Thuận',
        stateCode: '40',
      },
      {
        name: 'Cà Mau',
        stateCode: '59',
      },
      {
        name: 'Cao Bằng',
        stateCode: '04',
      },
      {
        name: 'Da Nang',
        stateCode: 'DN',
      },
      {
        name: 'Đắk Lắk',
        stateCode: '33',
      },
      {
        name: 'Đắk Nông',
        stateCode: '72',
      },
      {
        name: 'Điện Biên',
        stateCode: '71',
      },
      {
        name: 'Đồng Nai',
        stateCode: '39',
      },
      {
        name: 'Đồng Tháp',
        stateCode: '45',
      },
      {
        name: 'Gia Lai',
        stateCode: '30',
      },
      {
        name: 'Hà Giang',
        stateCode: '03',
      },
      {
        name: 'Hà Nam',
        stateCode: '63',
      },
      {
        name: 'Hà Tây',
        stateCode: '15',
      },
      {
        name: 'Hà Tĩnh',
        stateCode: '23',
      },
      {
        name: 'Hải Dương',
        stateCode: '61',
      },
      {
        name: 'Haiphong',
        stateCode: 'HP',
      },
      {
        name: 'Hanoi',
        stateCode: 'HN',
      },
      {
        name: 'Hậu Giang',
        stateCode: '73',
      },
      {
        name: 'Ho Chi Minh City',
        stateCode: 'SG',
      },
      {
        name: 'Hòa Bình',
        stateCode: '14',
      },
      {
        name: 'Hưng Yên',
        stateCode: '66',
      },
      {
        name: 'Khánh Hòa',
        stateCode: '34',
      },
      {
        name: 'Kiên Giang',
        stateCode: '47',
      },
      {
        name: 'Kon Tum',
        stateCode: '28',
      },
      {
        name: 'Lai Châu',
        stateCode: '01',
      },
      {
        name: 'Lâm Đồng',
        stateCode: '35',
      },
      {
        name: 'Lạng Sơn',
        stateCode: '09',
      },
      {
        name: 'Lào Cai',
        stateCode: '02',
      },
      {
        name: 'Long An',
        stateCode: '41',
      },
      {
        name: 'Nam Định',
        stateCode: '67',
      },
      {
        name: 'Nghệ An',
        stateCode: '22',
      },
      {
        name: 'Ninh Bình',
        stateCode: '18',
      },
      {
        name: 'Ninh Thuận',
        stateCode: '36',
      },
      {
        name: 'Phú Thọ',
        stateCode: '68',
      },
      {
        name: 'Phú Yên',
        stateCode: '32',
      },
      {
        name: 'Quảng Bình',
        stateCode: '24',
      },
      {
        name: 'Quảng Nam',
        stateCode: '27',
      },
      {
        name: 'Quảng Ngãi',
        stateCode: '29',
      },
      {
        name: 'Quảng Ninh',
        stateCode: '13',
      },
      {
        name: 'Quảng Trị',
        stateCode: '25',
      },
      {
        name: 'Sóc Trăng',
        stateCode: '52',
      },
      {
        name: 'Sơn La',
        stateCode: '05',
      },
      {
        name: 'Tây Ninh',
        stateCode: '37',
      },
      {
        name: 'Thái Bình',
        stateCode: '20',
      },
      {
        name: 'Thái Nguyên',
        stateCode: '69',
      },
      {
        name: 'Thanh Hóa',
        stateCode: '21',
      },
      {
        name: 'Thừa Thiên-Huế',
        stateCode: '26',
      },
      {
        name: 'Tiền Giang',
        stateCode: '46',
      },
      {
        name: 'Trà Vinh',
        stateCode: '51',
      },
      {
        name: 'Tuyên Quang',
        stateCode: '07',
      },
      {
        name: 'Vĩnh Long',
        stateCode: '49',
      },
      {
        name: 'Vĩnh Phúc',
        stateCode: '70',
      },
      {
        name: 'Yên Bái',
        stateCode: '06',
      },
    ],
  },
  {
    name: 'Virgin Islands (British)',
    code: 'VG',
    phoneCode: '+1-284',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇻🇬',

    states: [],
  },
  {
    name: 'Virgin Islands (US)',
    code: 'VI',
    phoneCode: '+1-340',
    currency: 'USD',
    currencySymbol: '$',

    emoji: '🇻🇮',

    states: [],
  },
  {
    name: 'Wallis And Futuna Islands',
    code: 'WF',
    phoneCode: '681',
    currency: 'XPF',
    currencySymbol: '₣',

    emoji: '🇼🇫',

    states: [],
  },
  {
    name: 'Western Sahara',
    code: 'EH',
    phoneCode: '212',
    currency: 'MAD',
    currencySymbol: 'MAD',

    emoji: '🇪🇭',

    states: [],
  },
  {
    name: 'Yemen',
    code: 'YE',
    phoneCode: '967',
    currency: 'YER',
    currencySymbol: '﷼',

    emoji: '🇾🇪',

    states: [
      {
        name: "'Adan Governorate",
        stateCode: 'AD',
      },
      {
        name: "'Amran Governorate",
        stateCode: 'AM',
      },
      {
        name: 'Abyan Governorate',
        stateCode: 'AB',
      },
      {
        name: "Al Bayda' Governorate",
        stateCode: 'BA',
      },
      {
        name: 'Al Hudaydah Governorate',
        stateCode: 'HU',
      },
      {
        name: 'Al Jawf Governorate',
        stateCode: 'JA',
      },
      {
        name: 'Al Mahrah Governorate',
        stateCode: 'MR',
      },
      {
        name: 'Al Mahwit Governorate',
        stateCode: 'MW',
      },
      {
        name: 'Dhamar Governorate',
        stateCode: 'DH',
      },
      {
        name: 'Hadhramaut Governorate',
        stateCode: 'HD',
      },
      {
        name: 'Hajjah Governorate',
        stateCode: 'HJ',
      },
      {
        name: 'Ibb Governorate',
        stateCode: 'IB',
      },
      {
        name: 'Lahij Governorate',
        stateCode: 'LA',
      },
      {
        name: "Ma'rib Governorate",
        stateCode: 'MA',
      },
      {
        name: 'Raymah Governorate',
        stateCode: 'RA',
      },
      {
        name: 'Saada Governorate',
        stateCode: 'SD',
      },
      {
        name: "Sana'a",
        stateCode: 'SA',
      },
      {
        name: "Sana'a Governorate",
        stateCode: 'SN',
      },
      {
        name: 'Shabwah Governorate',
        stateCode: 'SH',
      },
      {
        name: 'Socotra Governorate',
        stateCode: 'SU',
      },
      {
        name: "Ta'izz Governorate",
        stateCode: 'TA',
      },
    ],
  },
  {
    name: 'Zambia',
    code: 'ZM',
    phoneCode: '260',
    currency: 'ZMW',
    currencySymbol: 'ZK',

    emoji: '🇿🇲',

    states: [
      {
        name: 'Central Province',
        stateCode: '02',
      },
      {
        name: 'Copperbelt Province',
        stateCode: '08',
      },
      {
        name: 'Eastern Province',
        stateCode: '03',
      },
      {
        name: 'Luapula Province',
        stateCode: '04',
      },
      {
        name: 'Lusaka Province',
        stateCode: '09',
      },
      {
        name: 'Muchinga Province',
        stateCode: '10',
      },
      {
        name: 'Northern Province',
        stateCode: '05',
      },
      {
        name: 'Northwestern Province',
        stateCode: '06',
      },
      {
        name: 'Southern Province',
        stateCode: '07',
      },
      {
        name: 'Western Province',
        stateCode: '01',
      },
    ],
  },
  {
    name: 'Zimbabwe',
    code: 'ZW',
    phoneCode: '263',
    currency: 'ZWL',
    currencySymbol: '$',

    emoji: '🇿🇼',

    states: [
      {
        name: 'Bulawayo Province',
        stateCode: 'BU',
      },
      {
        name: 'Harare Province',
        stateCode: 'HA',
      },
      {
        name: 'Manicaland',
        stateCode: 'MA',
      },
      {
        name: 'Mashonaland Central Province',
        stateCode: 'MC',
      },
      {
        name: 'Mashonaland East Province',
        stateCode: 'ME',
      },
      {
        name: 'Mashonaland West Province',
        stateCode: 'MW',
      },
      {
        name: 'Masvingo Province',
        stateCode: 'MV',
      },
      {
        name: 'Matabeleland North Province',
        stateCode: 'MN',
      },
      {
        name: 'Matabeleland South Province',
        stateCode: 'MS',
      },
      {
        name: 'Midlands Province',
        stateCode: 'MI',
      },
    ],
  },
];
