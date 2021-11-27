import { Organization } from "./models/organization";
import { Offering } from "./models/offering";

Meteor.startup(function () {
  if (Meteor.call("organizations.isEmpty", {})) {
    [
      new Organization({
        name: "Antidiskriminierungsstelle Karlsruhe",
        description:
          "Hilfe bei der Integration in Deutschland für Menschen aus aller Welt",
        tags: [
          {
            label: "Flüchtlinge",
          },
          {
            label: "Rassismus",
          },
          {
            label: "Sprachen",
          },
        ],
        street: "Moltkestraße",
        houseNumber: "22",
        postcode: "76133",
        city: "Karlsruhe",
        telefon: "+49 (0) 721 13356-01",
        fax: "+49 (0) 721 13356-09",
        mailAdress: "stja@karlsruhe.de",
        imageUrl: "assets/orgaLogos/Anti-Diskriminierungsstelle-Karlsruhe-logo.png",
        latitude: 49.0152566,
        longitude: 8.3930343,
      }),
      new Organization({
        name: "kohl eG",
        description:
          "Begegnungszentrum für Menschen aus verschiedensten Kulturen im Herzen Karlsruhes",
        tags: [
          {
            label: "Flüchtlinge",
          },
          {
            label: "Rassismus",
          },
          {
            label: "Sprachen",
          },
        ],
        street: "Kronprinzenstraße",
        houseNumber: "69",
        postcode: "40217",
        city: "Düsseldorf",
        telefon: "+49 (0) 721 89 33 37 10",
        fax: "+49 (0) 721 89 33 37 19",
        mailAdress: "info@kohleg.de",
        imageUrl: "assets/orgaLogos/internationales_begegnungs_zentrum.png",
        latitude: 49.0103123,
        longitude: 8.3875047,
      }),
      new Organization({
        name: "Bürgerzentrum Innenstadt Karlsruhe",
        description:
          "Eine Begegnunsstätte für jedermann, eine Kooperation von Stadt und AWO",
        tags: [
          {
            label: "Flüchtlinge",
          },
          {
            label: "Senioren",
          },
          {
            label: "Junge Leute",
          },
          {
            label: "Häftlinge",
          },
        ],
        street: "Adlerstrasse",
        houseNumber: "33",
        postcode: "76133",
        city: "Karlsruhe",
        telefon: "0721 35007-0",
        fax: "0721 35007-170",
        mailAdress: "info@awo-karlsruhe.de",
        imageUrl: "assets/orgaLogos/buergerzentrum_innenstadt_karlsruhe.png",
        latitude: 49.0066503,
        longitude: 8.4083452,
      }),
      new Organization({
        name: "Stuttgarter Organisastion",
        description: "Testdaten für Stuttgart",
        tags: [
          {
            label: "Flüchtlinge",
          },
          {
            label: "Rassismus",
          },
          {
            label: "Drogensüchtige",
          },
        ],
        street: "Sindelfinger Straße",
        houseNumber: "11",
        postcode: "70599",
        city: "Stuttgart",
        telefon: "12345",
        fax: "123456",
        mailAdress: "info@stuttgart.de",
        imageUrl: "assets/icons/Logo.jpg",
        latitude: 48.71088253734705,
        longitude: 8.998179728267463,
      }),
      new Organization({
        name: "Kölner Organisastion",
        description: "Testdaten für Köln",
        tags: [
          {
            label: "Flüchtlinge",
          },
          {
            label: "Rassismus",
          },
          {
            label: "Junge Leute",
          },
        ],
        street: "Leverkusen",
        houseNumber: "11",
        postcode: "50733",
        city: "Köln",
        telefon: "54321",
        fax: "654321",
        mailAdress: "info@köln.de",
        imageUrl: "assets/icons/Logo.jpg",
        latitude: 51.03597688617721,
        longitude: 6.998504844171709,
      }),
    ].forEach(function (organization) {
      Meteor.call("organizations.insert", organization);
    });
  }

  if (Meteor.call("offerings.isEmpty", {})) {
    [
      new Offering({
        name: "Test Angebot Nr. 1",
        description: "Das hier ist das erste Angebot. Toll gemacht.",
        tags: [
          {
            label: "Flüchtlinge",
          },
          {
            label: "Rassismus",
          },
          {
            label: "Sprachen",
          },
        ],
        offeringTypes: [
          {
            label: "Vortrag",
          },
          {
            label: "Workshop",
          },
        ],

        street: "Kaiserallee",
        houseNumber: "12 D",
        postcode: "76133",
        city: "Karlsruhe",
        telefon: "0721 845341",
        fax: "",
        mailAdress: "freunde-fuer-fremde@gmx.de",

        organizationId: "rqAZvyu7txTKDLsh7",
        imageUrl: "assets/orgaLogos/freunde_fuer_fremde.png",
        price: "50€",

        latitude: 49.0103123,
        longitude: 8.3875047,

        contactPersonImage: "assets/orgaLogos/freunde_fuer_fremde.png",
        contactPersonDescription:
          "Hier steht der ganze Text zur Kontaktperson dann.",
      }),
      new Offering({
        name: "Test Angebot Nr. 2",
        description: "Das hier ist das zweite Angebot. Auch gut ja.",
        tags: [
          {
            label: "Flüchtlinge",
          },
          {
            label: "Rassismus",
          },
          {
            label: "Drogensüchtige",
          },
        ],
        offeringTypes: [
          {
            label: "Vortrag",
          },
        ],

        street: "Kaiserallee",
        houseNumber: "12 D",
        postcode: "76133",
        city: "Karlsruhe",
        telefon: "0721 845341",
        fax: "",
        mailAdress: "freunde-fuer-fremde@gmx.de",

        organizationId: "rqAZvyu7txTKDLsh7",
        imageUrl: "assets/orgaLogos/freunde_fuer_fremde.png",
        price: "75€",

        latitude: 49.0103123,
        longitude: 8.3875047,

        contactPersonImage: "assets/orgaLogos/freunde_fuer_fremde.png",
        contactPersonDescription:
          "Hier steht der ganze Text zur Kontaktperson dann.",
      }),
      new Offering({
        name: "Test Angebot Nr. 3",
        description: "Das hier ist das dritte Angebot.",
        tags: [
          {
            label: "Flüchtlinge",
          },
          {
            label: "Drogensüchtige",
          },
        ],
        offeringTypes: [
          {
            label: "Führung",
          },
        ],

        street: "Kaiserallee",
        houseNumber: "12 D",
        postcode: "76133",
        city: "Karlsruhe",
        telefon: "0721 845341",
        fax: "",
        mailAdress: "freunde-fuer-fremde@gmx.de",

        organizationId: "rqAZvyu7txTKDLsh7",
        imageUrl: "assets/orgaLogos/freunde_fuer_fremde.png",
        price: "80€",

        latitude: 49.0103123,
        longitude: 8.3875047,

        contactPersonImage: "assets/orgaLogos/freunde_fuer_fremde.png",
        contactPersonDescription:
          "Hier steht der ganze Text zur Kontaktperson dann.",
      }),
      new Offering({
        name: "Test Angebot Nr. 4",
        description: "Das hier ist das vierte Angebot.",
        tags: [
          {
            label: "Junge Leute",
          },
        ],
        offeringTypes: [
          {
            label: "Führung",
          },
        ],

        street: "Kaiserallee",
        houseNumber: "12 D",
        postcode: "76133",
        city: "Karlsruhe",
        telefon: "0721 845341",
        fax: "",
        mailAdress: "freunde-fuer-fremde@gmx.de",

        organizationId: "rqAZvyu7txTKDLsh7",
        imageUrl: "assets/orgaLogos/freunde_fuer_fremde.png",
        price: "80€",

        latitude: 49.0103123,
        longitude: 8.3875047,

        contactPersonImage: "assets/orgaLogos/freunde_fuer_fremde.png",
        contactPersonDescription:
          "Hier steht der ganze Text zur Kontaktperson dann.",
      }),

      new Offering({
        name: "Test Angebot Stuttgart",
        description: "Das hier ist ein echt tolles Testangebot für Stuttgart.",
        tags: [
          {
            label: "Flüchtlinge",
          },
          {
            label: "Rassismus",
          },
          {
            label: "Sprachen",
          },
        ],
        offeringTypes: [
          {
            label: "Führung",
          },
          {
            label: "Workshop",
          },
        ],

        street: "Sindelfinger Straße",
        houseNumber: "11",
        postcode: "70599",
        city: "Stuttgart",
        telefon: "12345",
        fax: "123456",
        mailAdress: "info@stuttgart.de",

        organizationId: "jhtgC4iMPuRSGAkem",
        imageUrl: "assets/icons/Logo.jpg",
        price: "75€",

        latitude: 48.71088253734705,
        longitude: 8.998179728267463,

        contactPersonImage: "assets/orgaLogos/freunde_fuer_fremde.png",
        contactPersonDescription:
          "Hier steht der ganze Text zur Kontaktperson dann.",
      }),
    ].forEach(function (offering) {
      Meteor.call("offerings.insert", offering);
    });
  }
});

export const cityNames = ["Karlsruhe", "Stuttgart", "Köln"];
export const tagList = [
  "Flüchtlinge",
  "Rassismus",
  "Sprachen",
  "Senioren",
  "Junge Leute",
  "Häftlinge",
  "Drogensüchtige",
];
export const offeringTypeList = ["Führung", "Vortrag", "Workshop"];

export const cityCoordinates = [
  {
    city: "Karlsruhe",
    latitude: 49.0068705,
    longitude: 8.4034195,
  },
  {
    city: "Stuttgart",
    latitude: 48.7784485,
    longitude: 9.1800132,
  },
  {
    city: "Köln",
    latitude: 50.938361,
    longitude: 6.959974,
  },
];
