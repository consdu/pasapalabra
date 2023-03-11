const allQuestions = [
  {
    letter: 'a',
    status: null,
    questions: [
      {
        question:
          'Con la A : Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo.',
        answer: 'arteria',
      },
      {
        question:
          'Con la A : Trozo de cualquier material ardiendo pero sin llama.',
        answer: 'ascua',
      },
      {
        question:
          'Con la A : Dicho de una supuesta criatura extraterrestre : Apoderarse de alguien.',
        answer: 'abducir',
      },
    ],
  },
  {
    letter: 'b',
    status: null,
    questions: [
      {
        question:
          'Con la B : En los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula.',
        answer: 'bitácora',
      },
      {
        question:
          'Con la B : Líquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos.',
        answer: 'bilis',
      },
      {
        question:
          'Con la B : Juego que ha sacado de quicio a todos los ISDI Coders en las sesiones de precurso.',
        answer: 'bingo',
      },
    ],
  },
  {
    letter: 'c',
    status: null,
    questions: [
      {
        question:
          'Con la C : Persona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes.',
        answer: 'cicerone',
      },
      {
        question:
          'Con la C : Estilo de pintura que comenzó en Francia a principios de este siglo y que se caracteriza por representar figuras y objetos mediante formas geométricas.',
        answer: 'cubismo',
      },
      {
        question: 'Con la C : Niño, crío, bebé.',
        answer: 'churumbel',
      },
    ],
  },
  {
    letter: 'd',
    status: null,
    questions: [
      {
        question:
          'Con la D : Actividad que realiza un país para mantener buenas relaciones con el resto de países.',
        answer: 'diplomacia',
      },
      {
        question:
          'Con la D : Signo ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse.',
        answer: 'diéresis',
      },
      {
        question:
          'Con la D : Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida.',
        answer: 'diarrea',
      },
    ],
  },
  {
    letter: 'e',
    status: null,
    questions: [
      {
        question:
          'Con la E : Cada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra.',
        answer: 'equinoccio',
      },
      {
        question:
          'Con la E : Línea que se forma en la piel cuando ésta se ha estirado excesivamente.',
        answer: 'estría',
      },
      {
        question:
          'Con la E : Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación.',
        answer: 'ectoplasma',
      },
    ],
  },
  {
    letter: 'f',
    status: null,
    questions: [
      {
        question:
          'Con la F : Ciencia que estudia las funciones de los órganos de los seres vivos.',
        answer: 'fisiología',
      },
      {
        question: 'Con la F : Sonido de una letra.',
        answer: 'fonema',
      },
      {
        question:
          'Con la F : Que no requiere gran esfuerzo, capacidad o dificultad.',
        answer: 'facil',
      },
    ],
  },
  {
    letter: 'g',
    status: null,
    questions: [
      {
        question:
          'Con la G : Cada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo.',
        answer: 'glaciación',
      },
      {
        question:
          'Con la G : Se dice de las personas que viven en las grandes llanuras de Argentina y Uruguay y llevan el ganado de un lado a otro.',
        answer: 'gaucho',
      },
      {
        question:
          'Con la G : Conjunto enorme de estrellas, polvo interestelar, gases y partículas.',
        answer: 'galaxia',
      },
    ],
  },
  {
    letter: 'h',
    status: null,
    questions: [
      {
        question:
          'Con la H : Planta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís, y también en medicina porque ayuda a hacer la digestión.',
        answer: 'hinojo',
      },
      {
        question:
          'Con la H : Poesía o composición musical en alabanza de alguien o algo, como la que se dedica a un país.',
        answer: 'himno',
      },
      {
        question: 'Con la H : Suicidio ritual japonés por desentrañamiento.',
        answer: 'harakiri',
      },
    ],
  },
  {
    letter: 'i',
    status: null,
    questions: [
      {
        question:
          'Con la I : Capacidad para inventar cosas o para pensar y hablar con gracia.',
        answer: 'ingenio',
      },
      {
        question:
          'Con la I : Mineral capaz de atraer el hierro u otros metales.',
        answer: 'imán',
      },
      {
        question: 'Con la I : Templo cristiano.',
        answer: 'iglesia',
      },
    ],
  },
  {
    letter: 'j',
    status: null,
    questions: [
      {
        question:
          'Con la J : Mineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno. ',
        answer: 'jade',
      },
      {
        question: 'Con la J : Cría del jabalí.',
        answer: 'jabato',
      },
      {
        question:
          'Con la J : Variedad salvaje del cerdo que sale en la película El Rey León, de nombre Pumba',
        answer: 'jabali',
      },
    ],
  },
  {
    letter: 'k',
    status: null,
    questions: [
      {
        question: 'Con la K : Variedad de manteca que usa en cosmetica. ',
        answer: 'karite',
      },
      {
        question:
          'Con la K : Piloto japonés que se lanzaba en su avión contra un barco u otro objetivo enemigo para destruirlo, aunque muriera al hacerlo.',
        answer: 'kamikaze',
      },
      {
        question: 'Con la K : Artes marciales de China',
        answer: 'kung fu',
      },
    ],
  },
  {
    letter: 'l',
    status: null,
    questions: [
      {
        question:
          'Con la L : Gusano muy largo de color rojizo que se alimenta de sustancias que hay en la tierra.',
        answer: 'lombriz',
      },
      {
        question:
          'Con la L : 	Frase que expresa la forma en que debe actuar una persona.',
        answer: 'lema',
      },
      {
        question: 'Con la L : Hombre lobo',
        answer: 'licantropo',
      },
    ],
  },
  {
    letter: 'm',
    status: null,
    questions: [
      {
        question:
          'Con la M : Prenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo.',
        answer: 'miriñaque',
      },
      {
        question:
          'Con la M : Nombre que se daba a los musulmanes que vivían en los reinos cristianos de la península ibérica',
        answer: 'mudéjar',
      },
      {
        question:
          'Con la M : Persona que huye del trato con otras personas o siente gran aversión hacia ellas.',
        answer: 'misantropo',
      },
    ],
  },
  {
    letter: 'n',
    status: null,
    questions: [
      {
        question:
          'Con la N : En las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos.',
        answer: 'ninfa',
      },
      {
        question:
          'Con la N : Árbol grande con la corteza lisa y de color gris cuyo fruto es la nuez.',
        answer: 'nogal',
      },
      {
        question: 'Con la N : Demostración de poca inteligencia.',
        answer: 'necedad',
      },
    ],
  },
  {
    letter: 'ñ',
    status: null,
    questions: [
      {
        question:
          'Contiene la Ñ :	Ave parecida al avestruz, pero más pequeña y con tres dedos en cada pie.',
        answer: 'ñandú',
      },
      {
        question: 'Contiene la Ñ : Cursi o demasiado delicado.',
        answer: 'ñoño',
      },
      {
        question:
          'Contiene la Ñ : Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.',
        answer: 'señal',
      },
    ],
  },
  {
    letter: 'o',
    status: null,
    questions: [
      {
        question:
          'Con la O : Palabra que imita el sonido que hace un animal o una cosa.',
        answer: 'onomatopeya',
      },
      {
        question:
          'Con la O : Se dice del color que es una mezcla de amarillo y marrón.',
        answer: 'ocre',
      },
      {
        question:
          'Con la O : Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien.',
        answer: 'orco',
      },
    ],
  },
  {
    letter: 'p',
    status: null,
    questions: [
      {
        question:
          'Con la P : Edificio que es parte de un conjunto, de otro edificio más grande, o que está muy cerca de él.',
        answer: 'pabellón',
      },
      {
        question:
          'Con la P : Conjunto de reglas o ceremonias que hay que cumplir en los actos oficiales o solemnes.',
        answer: 'protocolo',
      },
      {
        question:
          'Con la P : Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft.',
        answer: 'protoss',
      },
    ],
  },
  {
    letter: 'q',
    status: null,
    questions: [
      {
        question:
          'Con la Q : Cosa que, sin ser real, alguien la imagina como posible o verdadera.',
        answer: 'quimera',
      },
      {
        question:
          'Con la Q : Pueblo indio que habita en Perú y que vivía allí antes del descubrimiento de América.',
        answer: 'quechua',
      },
      {
        question:
          'Con la Q : Producto obtenido por la maduración de la cuajada de la leche.',
        answer: 'queso',
      },
    ],
  },
  {
    letter: 'r',
    status: null,
    questions: [
      {
        question:
          'Con la R : Pez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes.',
        answer: 'rémora',
      },
      {
        question:
          'Con la R : Tabla o elemento similar que se coloca contra la pared para poner en ella objetos.',
        answer: 'repisa',
      },
      {
        question: 'Con la R : Roedor.',
        answer: 'raton',
      },
    ],
  },
  {
    letter: 's',
    status: null,
    questions: [
      {
        question:
          'Con la S : Traje negro y largo parecido a una túnica que llevan algunos curas y religiosos.',
        answer: 'sotana',
      },
      {
        question:
          'Con la S : Nombre de dos momentos del año que marcan el inicio del verano y el comienzo del invierno.',
        answer: 'solisticio',
      },
      {
        question:
          'Con la S : Comunidad salvadora de todo desarrollador informático.',
        answer: 'stackoverflow',
      },
    ],
  },
  {
    letter: 't',
    status: null,
    questions: [
      {
        question:
          'Con la T : Escrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte, sobre todo con su dinero o sus pertenencias.',
        answer: 'testamento',
      },
      {
        question:
          'Con la T : Capa de la atmósfera más cercana a la superficie de la Tierra, en la que tienen lugar los fenómenos del tiempo meteorológico.',
        answer: 'troposfera',
      },
      {
        question:
          'Con la T : Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.',
        answer: 'terminator',
      },
    ],
  },
  {
    letter: 'u',
    status: null,
    questions: [
      {
        question:
          'Con la U : Conjunto de casas y edificios que suelen ser parecidos y donde hay tiendas, parques y otros espacios que necesitan las personas que allí viven.',
        answer: 'urbanización',
      },
      {
        question:
          'Con la U : Algo que es bueno y que deseamos pero que es imposible o muy difícil de realizar.',
        answer: 'utopía',
      },
      {
        question:
          'Con la U : Escritor y filósofo español de la generación del 98 autor del libro Niebla en 1914.',
        answer: 'unamuno',
      },
    ],
  },
  {
    letter: 'v',
    status: null,
    questions: [
      {
        question:
          'Con la V : Pájaro de color casi siempre negro o pardo que tiene el pico delgado, las alas muy largas y la cola en forma de horquilla. Vuela muy rápido.',
        answer: 'vencejo',
      },
      {
        question:
          'Con la V : Parte hacia afuera que tienen las gorras por delante y que sirve para que el sol no nos haga daño en los ojos.',
        answer: 'visera',
      },
      {
        question:
          'Con la V : Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa.',
        answer: 'vikingos',
      },
    ],
  },
  {
    letter: 'w',
    status: null,
    questions: [
      {
        question:
          'Con la W : Licor con mucho alcohol que se hace al fermentar la cebada o algunos otros cereales.',
        answer: 'whisky',
      },
      {
        question: 'Con la W : Película del oeste americano.',
        answer: 'western',
      },
      {
        question:
          'Contiene la W : Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso.',
        answer: 'sandwich',
      },
    ],
  },
  {
    letter: 'x',
    status: null,
    questions: [
      {
        question:
          'Con la X : Manera de hacer grabados sobre madera, dejando vacías las partes que deben quedar blancas en el dibujo.',
        answer: 'xilografía',
      },
      {
        question: 'Con la X : Odio o antipatía hacia los extranjeros.',
        answer: 'xenófobia',
      },
      {
        question:
          'Contiene la X : Toxina bacteriana utilizada en cirujía estética.',
        answer: 'botox',
      },
    ],
  },
  {
    letter: 'y',
    status: null,
    questions: [
      {
        question:
          'Con la Y : Mamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío.',
        answer: 'yak',
      },
      {
        question:
          'Con la Y : Elemento químico de color oscuro que se encuentra en el suelo en forma de sales, así como en las algas y otros animales marinos.',
        answer: 'yodo',
      },
      {
        question:
          'Contiene la Y : Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos.',
        answer: 'peyote',
      },
    ],
  },
  {
    letter: 'z',
    status: null,
    questions: [
      {
        question:
          'Con la Z : Banda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación.',
        answer: 'zócalo',
      },
      {
        question: 'Con la Z : Lugar donde hay muchas zarzas.',
        answer: 'zarzal',
      },
      {
        question:
          'Con la Z : Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional.',
        answer: 'peyote',
      },
    ],
  },
];

const getGameQuestions = (data) => {
  const getRandomIndex = () => {
    return Math.floor(Math.random() * 3);
  };

  let gameQuestions = data.map((item) => {
    const randomIndex = getRandomIndex();
    return {
      letter: item.letter,
      status: null,
      question: item.questions[randomIndex].question,
      answer: item.questions[randomIndex].answer,
    };
  });
  return gameQuestions;
};

export { allQuestions, getGameQuestions };
