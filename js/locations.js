// All restaurants information is here.
// id was manually inserted from foursquare api venue search. This hopefully can be improved in the future.
let restaurants = [
    { title: 'Japanese Restaurant Kurose',
      location: {lat: 48.7732258, lng: 9.1669856},
      id: "4f8701f8e4b02c4174f1714f",
      description: "For me the best Japanese restaurant in Stuttgart! Go for lunch menu, it's very a good deal. (FYI, they also have lunch menu at weekends.) "
    },
    { title: 'Mandu Restaurant',
      location: {lat: 48.778022, lng: 9.168204},
      id: "53a94fed498ecfdaec4725e3",
      description: "A nice Korean restaurant runned by real Koreans. "
    },
    { title: 'Valle',
      location: {lat: 48.782323, lng: 9.175981},
      id: "4b7c3749f964a52008852fe3",
      description: "My favourite italian restaurant in Stuttgart. They have really nice seadfood pasta and cheese pasta with truffle. "
    },
    { title: 'Sichuan China Restaurant',
      location: {lat: 48.774839, lng: 9.154952},
      id: "55c76b12498eff6d62ae767e",
      description: "Delicious Sichuan spicy food. "
    },
    { title: 'Café Seyffer´s',
      location: {lat: 48.773828, lng: 9.152580},
      id: "4b53237ef964a520039027e3",
      description: "One of my favourite coffee shop in Stuttgart. "
    },
    { title: 'Pukkis Thailändischer Lieferservice',
      location: {lat: 48.772642, lng: 9.183031},
      id: "5315c57c498ed34a02cade49",
      description: "The food is great in this Thai restaurant, and the owner is nice too. "
    },
    { title: 'Tay Ho',
      location: {lat: 48.774472, lng: 9.179051},
      id: "4b7da6d7f964a52056cc2fe3",
      description: "Very good deal of vietnamese food, my favourite vietnamese restaurant in Stuttgart. "
    },
    { title: 'Die Metzgerei',
      location: {lat: 48.774247, lng: 9.155906},
      id: "576c3580498e6dab9fac53ba",
      description: "They have very nice environment, and they also have very delicious bagels. "
    },
    { title: 'Konditorei Patisserie Meister Lampe',
      location: {lat: 48.774668, lng: 9.149445},
      id: "50b62b49e4b033ea1fcbd45e",
      description: "My favourite Japanese cake shop in Stuttgart! They sell the best cake in Stuttgart! "
    },

    { title: 'ABACCOS STEAKHOUSE Stuttgart',
      location: {lat: 48.774607, lng: 9.173051},
      id: "561fdb70498e757ef8bc062a",
      description: "Cook your own steak with hot stone. The service is nice, and they sell good quality meat. "
    },
    { title: 'Markthalle Stuttgart',
      location: {lat: 48.776464, lng: 9.179079},
      id: "4b6026cef964a52090d729e3",
      description: "They have some fresh fishes! You can buy sushi quality fishes here to make sushi. "
    },
    { title: 'Rich-Man',
      location: {lat: 48.775991, lng: 9.176864},
      id: "4b99414bf964a520f26d35e3",
      description: "Chinese restaurant with all you can eat hotpot, the owner is Taiwanese! 15 Euro per person. "
    },
    { title: 'Fu Gui Fang',
      location: {lat: 48.775942, lng: 9.177000},
      id: "4e46bd22fa76a07fde5dc0aa",
      description: "Chinese restaurant with really nice all you can eat hotpot. 20 Euro per person. "
    },
    { title: 'Udo Snack',
      location: {lat: 48.776165, lng: 9.174101},
      id: "4bab95d1f964a52064b63ae3",
      description: "Nice burger with good price!"
    },
    { title: 'Gelateria Kaiserbau',
      location: {lat: 48.764751, lng:9.168561},
      id: "4e04ad63ae60ed89a80307f9",
      description: "The best ice cream in Stuttgart! "
    },
    { title: 'Ganesha Restaurant',
      location: {lat: 48.780392, lng: 9.202536},
      id: "4b71a3bdf964a520f0522de3",
      description: "Delicious Indian food. Yummy yummy. "
    },
    { title: 'China Restaurant Palast',
      location: {lat: 48.778241, lng: 9.206977},
      id: "50c4ef5ce4b032fa83333034",
      description: "The Chinese restaurant I used to go every week, the owner is super nice!"
    },
    { title: 'Ambiente Africa',
      location: {lat: 48.777727, lng: 9.188168},
      id: "4b7ee121f964a520590630e3",
      description: "A very good African restaurant. Very authentic."
    },
    { title: 'FrischeParadies GmbH & Co. KG | NL Stuttgart',
      location: {lat: 48.782324, lng: 9.227604},
      id: "4bfca1f3ee20ef3beb313c5e",
      description: "The best place in Stuttgart you can get fresh fishes for making Sushi. Also the cheapest! "
    },
    { title: 'Tokio Dining',
      location: {lat: 48.795783, lng: 9.207646},
      id: "4cbc375cbac93704d192f67c",
      description: "Very authentic Japanese restaurant. "
    },
    { title: 'Hüftengold',
      location: {lat: 48.774116, lng: 9.184783},
      id: "4b5b27bbf964a5201de728e3",
      description: "Nice breakfast here."
    },
    { title: 'Shabu Shabu',
      location: {lat: 48.773803, lng: 9.186017},
      id: "4ca76e6d97c8a1cdb14e7aa5",
      description: "Chinese restaurant with amazing spicy food."
    },
    { title: 'Bibigo Set Korean Food',
      location: {lat: 48.775059, lng: 9.176334},
      id: "573b0c07498ecae395492d5c",
      description: "Good deal Korean BBQ. "
    },
    { title: 'Beykebab',
      location: {lat: 48.773730, lng: 9.173635},
      id: "4bb08d29f964a5207c4b3ce3",
      description: "My favourite doener in Stuttgart. "
    },
    { title: 'HIRO',
      location: {lat: 48.770196, lng: 9.149382},
      id: "50254374e4b073798194a1c9",
      description: "My second favourite Japanese restaurant in Stuttgart. "
    }
];
