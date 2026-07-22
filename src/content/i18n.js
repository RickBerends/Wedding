// All site copy lives here, one object per locale.
// Facts we know are baked in; the ones still open (exact date, street addresses,
// dress code / colour theme) stay as { PLACEHOLDERS } in the same voice.

export const LOCALES = ['en', 'nl'];
export const DEFAULT_LOCALE = 'en';
export const OTHER = { en: 'nl', nl: 'en' };

// Page routes shared across locales. `slug` is '' for the home page.
export const PAGES = ['', 'story', 'details', 'transport', 'stay', 'dresscode', 'faq'];

export const content = {
  en: {
    htmlLang: 'en',
    langName: 'EN',
    otherLangName: 'NL',
    brand: 'Rick & Jikke',
    metaDescription: 'Rick & Jikke are getting married.',
    themeLabel: 'Toggle paper / midnight',
    skip: 'Skip to content',
    placeholderNote:
      'A few things — the exact date, addresses and dress code — are still on the way.',
    nav: [
      { slug: '', label: 'Home' },
      { slug: 'story', label: 'Our story' },
      { slug: 'details', label: 'Details' },
      { slug: 'transport', label: 'Transport' },
      { slug: 'stay', label: 'Where to stay' },
      { slug: 'dresscode', label: 'Dresscode' },
      { slug: 'faq', label: 'FAQ' },
    ],
    cta: { details: 'The details', back: 'Back home' },

    home: {
      kicker: "Here's to forever",
      title: "We're getting married",
      dateDow: 'Saturday',
      dateNum: '11/12/2027',
      intro:
        'Everything you need is right here — the where, the when, and how to get between the two. Scroll on for the fun stuff.',
      factsKicker: 'The essentials',
      facts: {
        dateLabel: 'Date',
        dateValue: 'Saturday 11/12/2027',
        ceremonyLabel: 'Ceremony',
        ceremonyVenue: 'Hasseltse Kapel',
        ceremonyTime: '18:30 – 20:00',
        partyLabel: 'Party',
        partyVenue: 'Bet Kolen',
        partyTime: '20:30 – 01:00',
        invitedNote: 'Going to both the ceremony and the party?',
        transport: 'We arrange transport between the two venues — hop on if you need it.',
        contactLead: 'Something up on the day?',
        contactCall: 'Call Rick on',
        contactTel: '+31637403994',
        contactDisplay: '+31 6 37403994',
      },
      linksKicker: 'Everything else',
      links: [
        { slug: 'transport', icon: 'car', label: 'Transport', note: 'Getting you there and home again' },
        { slug: 'stay', icon: 'bed', label: 'Where to sleep', note: 'Rooms for the night' },
        { slug: 'dresscode', icon: 'palette', label: 'Dresscode', note: 'What to wear' },
        { slug: 'story', icon: 'rings', label: 'Our story', note: 'How we got here' },
        { slug: 'faq', icon: 'question', label: 'Good questions', note: 'The things people ask' },
      ],
    },

    story: {
      title: 'Our story',
      quote: 'How we got here',
      blocks: [
        { h: 'How we met', p: '{ The how-we-met story goes here — keep it short and a little bit funny. }' },
        { h: 'The proposal', p: '{ Who asked, where, and how badly the surprise nearly got spoiled. }' },
        { h: 'The short version', p: '{ For the skimmers: the one-sentence version of us. }' },
      ],
    },

    details: {
      title: 'The details',
      quote: 'Loud headline, quiet facts',
      cards: [
        { label: 'When', value: 'Saturday 11/12/2027', sub: 'Ceremony from 18:30' },
        { label: 'Ceremony', value: 'Hasseltse Kapel', sub: '18:30 – 20:00 · Hasseltplein 7, Tilburg' },
        { label: 'Party', value: 'Bet Kolen', sub: '20:30 – 01:00 · Broekhovenseweg 111, Tilburg' },
      ],
      transport: {
        note: 'Going to both the ceremony and the party?',
        line: 'We arrange transport between Hasseltse Kapel and Bet Kolen — hop on if you need it.',
        contactLead: 'Something up on the day?',
        contactCall: 'Call Rick on',
        contactTel: '+31637403994',
        contactDisplay: '+31 6 37403994',
      },
    },

    dresscode: {
      title: 'Dresscode',
      quote: 'What to wear',
      note: "{ Dresscode to follow — we're still deciding. Check back a little closer to the day. }",
    },

    transport: {
      title: 'Transport',
      quote: 'Getting you there and home again',
      blocks: [
        {
          h: 'Hasseltse Kapel — the ceremony',
          p: 'Hasseltplein 7, 5042 AB Tilburg.',
          items: [
            'Free parking in the streets around the square, plus paid parking in front of the hospital.',
            'Buses run to the venue — the nearest stop is Hasseltstraat (lines 7, 300 and 301), about a minute’s walk.',
            'Bikes go in the designated bike parking at the side of the venue.',
            'Please arrive on time — aim to be seated no later than 18:20.',
          ],
        },
        {
          h: 'Bet Kolen — the party',
          p: 'Broekhovenseweg 111, 5021 LC Tilburg.',
          items: [
            'Paid parking is available in the area.',
            'It’s about a 15-minute drive or bike ride from the ceremony.',
            'The bus won’t get you there in time — but we arrange quick transport for anyone who wants to use it.',
            'Bikes can be parked { spot to follow }.',
            'Please don’t park at the Jumbo — their gate closes for the night and you’ll be locked in.',
          ],
        },
        {
          h: 'Getting home',
          p: 'Stay safe — please don’t drink and drive.',
          items: [
            'Share a taxi.',
            'Bring a designated driver.',
            'Book a hotel — see the Where to stay page.',
          ],
        },
      ],
    },

    stay: {
      title: 'Where to stay',
      quote: 'Somewhere to rest those dancing feet',
      intro:
        'Normally everyone is always welcome to stay with us — but for our big day we kindly ask you to arrange your own accommodation.',
      hotels: {
        h: 'A few places nearby',
        p: 'Some options in and around Tilburg, in no particular order:',
        items: [
          { name: 'Stadsslaperij B&B', url: 'https://destadsslaperij.nl' },
          { name: 'Villa la Vida', url: 'https://villa-la-vida.nl' },
          { name: 'Bastion Hotel Tilburg', url: 'https://www.bastionhotels.com/en-gb/hotels/hotel-tilburg' },
          { name: 'Van der Valk Hotel Tilburg', url: 'https://www.valkhoteltilburg.com' },
          { name: 'Mercure Hotel Tilburg Centrum', url: 'https://mercure-tilburg.nl/en/' },
          { name: 'City Hotel Tilburg', url: 'https://www.cityhoteltilburg.nl' },
        ],
      },
      walk: {
        h: 'Getting back to your room',
        p: 'Depending on your love for a tipsy walk, some hotels are within walking distance — please check what fits your preferences before booking. Otherwise we recommend booking a taxi or asking your hotel to arrange one.',
      },
      pickup: {
        h: 'Till the end of the night',
        p: 'We would love to have you with us until the very end. If you are arranging transport, 01:00 – 01:15 would be the ideal window for pick-up.',
      },
    },

    faq: {
      title: 'Good questions',
      quote: 'The things people always ask',
      items: [
        { q: 'Can I bring a plus-one?', a: '{ Your plus-one policy in one clear line. }' },
        { q: 'Are kids welcome?', a: '{ The kids answer — adults-only, or bring the whole crew. }' },
        { q: 'What time should I actually arrive?', a: 'Ceremony starts 18:30 at Hasseltse Kapel — aim to be seated by 18:20.' },
        { q: 'How do I get to the party?', a: 'The party is at Bet Kolen from 20:30. We arrange transport between the two venues — use it if you need it.' },
        { q: 'Gifts?', a: '{ Registry, honeymoon fund, or "just come and dance". }' },
        { q: 'When does it end?', a: 'We dance until 01:00. Kiss us at midnight and then { the real answer }.' },
      ],
    },

    footer: {
      big: "We can't wait to celebrate with you",
      sig: 'Rick & Jikke · 11/12/2027',
      fine: 'Made with love. Details to follow.',
    },

    notFound: {
      code: '404',
      line: 'This page ran off to the afterparty.',
    },
  },

  nl: {
    htmlLang: 'nl',
    langName: 'NL',
    otherLangName: 'EN',
    brand: 'Rick & Jikke',
    metaDescription: 'Rick & Jikke gaan trouwen.',
    themeLabel: 'Wissel papier / midnight',
    skip: 'Naar de inhoud',
    placeholderNote:
      'Een paar dingen — de exacte datum, adressen en dresscode — volgen nog.',
    nav: [
      { slug: '', label: 'Home' },
      { slug: 'story', label: 'Ons verhaal' },
      { slug: 'details', label: 'Details' },
      { slug: 'transport', label: 'Vervoer' },
      { slug: 'stay', label: 'Slapen' },
      { slug: 'dresscode', label: 'Dresscode' },
      { slug: 'faq', label: 'Vragen' },
    ],
    cta: { details: 'De details', back: 'Terug naar home' },

    home: {
      kicker: 'Voor altijd',
      title: 'We gaan trouwen',
      dateDow: 'Zaterdag',
      dateNum: '11/12/2027',
      intro:
        'Alles wat je nodig hebt staat hier — waar, wanneer en hoe je tussen de twee komt. Scroll door voor de leuke dingen.',
      factsKicker: 'Het belangrijkste',
      facts: {
        dateLabel: 'Datum',
        dateValue: 'Zaterdag 11/12/2027',
        ceremonyLabel: 'Ceremonie',
        ceremonyVenue: 'Hasseltse Kapel',
        ceremonyTime: '18:30 – 20:00',
        partyLabel: 'Feest',
        partyVenue: 'Bet Kolen',
        partyTime: '20:30 – 01:00',
        invitedNote: 'Ga je naar de ceremonie én het feest?',
        transport: 'Wij regelen vervoer tussen de twee locaties — stap in als je het nodig hebt.',
        contactLead: 'Iets aan de hand op de dag zelf?',
        contactCall: 'Bel Rick op',
        contactTel: '+31637403994',
        contactDisplay: '+31 6 37403994',
      },
      linksKicker: 'De rest',
      links: [
        { slug: 'transport', icon: 'car', label: 'Vervoer', note: 'Heen, terug en veilig thuis' },
        { slug: 'stay', icon: 'bed', label: 'Slapen', note: 'Een bed voor de nacht' },
        { slug: 'dresscode', icon: 'palette', label: 'Dresscode', note: 'Wat je aantrekt' },
        { slug: 'story', icon: 'rings', label: 'Ons verhaal', note: 'Hoe we hier kwamen' },
        { slug: 'faq', icon: 'question', label: 'Goeie vragen', note: 'Wat mensen altijd vragen' },
      ],
    },

    story: {
      title: 'Ons verhaal',
      quote: 'Hoe we hier kwamen',
      blocks: [
        { h: 'Hoe we elkaar ontmoetten', p: '{ Het hoe-we-elkaar-ontmoetten-verhaal — kort en met een knipoog. }' },
        { h: 'Het aanzoek', p: '{ Wie vroeg wie, waar, en hoe bijna de verrassing verklapt werd. }' },
        { h: 'De korte versie', p: '{ Voor de snelle lezer: wij in één zin. }' },
      ],
    },

    details: {
      title: 'De details',
      quote: 'Luide kop, rustige feiten',
      cards: [
        { label: 'Wanneer', value: 'Zaterdag 11/12/2027', sub: 'Ceremonie vanaf 18:30' },
        { label: 'Ceremonie', value: 'Hasseltse Kapel', sub: '18:30 – 20:00 · Hasseltplein 7, Tilburg' },
        { label: 'Feest', value: 'Bet Kolen', sub: '20:30 – 01:00 · Broekhovenseweg 111, Tilburg' },
      ],
      transport: {
        note: 'Ga je naar de ceremonie én het feest?',
        line: 'Wij regelen vervoer tussen Hasseltse Kapel en Bet Kolen — stap in als je het nodig hebt.',
        contactLead: 'Iets aan de hand op de dag zelf?',
        contactCall: 'Bel Rick op',
        contactTel: '+31637403994',
        contactDisplay: '+31 6 37403994',
      },
    },

    dresscode: {
      title: 'Dresscode',
      quote: 'Wat je aantrekt',
      note: '{ Dresscode volgt — we zijn er nog over aan het beslissen. Kom later nog eens terug. }',
    },

    transport: {
      title: 'Vervoer',
      quote: 'Heen, terug en veilig thuis',
      blocks: [
        {
          h: 'Hasseltse Kapel — de ceremonie',
          p: 'Hasseltplein 7, 5042 AB Tilburg.',
          items: [
            'Gratis parkeren in de straten rond het plein, en betaald parkeren voor het ziekenhuis.',
            'De bus stopt vlak bij de kapel — de dichtstbijzijnde halte is Hasseltstraat (lijn 7, 300 en 301), ongeveer een minuut lopen.',
            'Fietsen kun je kwijt in de fietsenstalling aan de zijkant van de locatie.',
            'Kom op tijd — zorg dat je uiterlijk 18:20 zit.',
          ],
        },
        {
          h: 'Bet Kolen — het feest',
          p: 'Broekhovenseweg 111, 5021 LC Tilburg.',
          items: [
            'Betaald parkeren is beschikbaar in de buurt.',
            'Het is ongeveer 15 minuten rijden of fietsen vanaf de ceremonie.',
            'Met de bus ben je niet op tijd — maar wij regelen snel vervoer voor wie daar gebruik van wil maken.',
            'Fietsen kun je parkeren { plek volgt nog }.',
            'Parkeer niet bij de Jumbo — hun hek gaat ’s avonds dicht en dan sta je vast.',
          ],
        },
        {
          h: 'Veilig thuis',
          p: 'Kom veilig thuis — rij niet met drank op.',
          items: [
            'Deel een taxi.',
            'Neem een BOB.',
            'Boek een hotel — zie de pagina Waar te slapen.',
          ],
        },
      ],
    },

    stay: {
      title: 'Waar te slapen',
      quote: 'Even bijkomen na het dansen',
      intro:
        'Normaal ben je altijd welkom om bij ons te blijven slapen — maar voor onze grote dag vragen we jullie vriendelijk om zelf een overnachting te regelen.',
      hotels: {
        h: 'Een paar plekken in de buurt',
        p: 'Wat opties in en rond Tilburg, in willekeurige volgorde:',
        items: [
          { name: 'Stadsslaperij B&B', url: 'https://destadsslaperij.nl' },
          { name: 'Villa la Vida', url: 'https://villa-la-vida.nl' },
          { name: 'Bastion Hotel Tilburg', url: 'https://www.bastionhotels.com/en-gb/hotels/hotel-tilburg' },
          { name: 'Van der Valk Hotel Tilburg', url: 'https://www.valkhoteltilburg.com' },
          { name: 'Mercure Hotel Tilburg Centrum', url: 'https://mercure-tilburg.nl/en/' },
          { name: 'City Hotel Tilburg', url: 'https://www.cityhoteltilburg.nl' },
        ],
      },
      walk: {
        h: 'Terug naar je kamer',
        p: 'Afhankelijk van je liefde voor een aangeschoten wandeling liggen sommige hotels op loopafstand — check vóór het boeken even wat bij je past. Anders raden we aan een taxi te boeken of je hotel er een te laten regelen.',
      },
      pickup: {
        h: 'Tot het einde van de nacht',
        p: 'We hebben jullie het liefst tot het allerlaatste moment bij ons. Regel je vervoer? Dan is 01:00 – 01:15 het ideale moment om opgehaald te worden.',
      },
    },

    faq: {
      title: 'Goeie vragen',
      quote: 'Wat mensen altijd vragen',
      items: [
        { q: 'Mag ik iemand meenemen?', a: '{ Je introducé-beleid in één duidelijke zin. }' },
        { q: 'Zijn kinderen welkom?', a: '{ Het kinderen-antwoord — alleen volwassenen, of neem de hele meute mee. }' },
        { q: 'Hoe laat moet ik er echt zijn?', a: 'De ceremonie begint om 18:30 in de Hasseltse Kapel — zorg dat je rond 18:20 zit.' },
        { q: 'Hoe kom ik bij het feest?', a: 'Het feest is bij Bet Kolen vanaf 20:30. Wij regelen vervoer tussen de twee locaties — gebruik het als je het nodig hebt.' },
        { q: 'Cadeaus?', a: '{ Verlanglijst, huwelijksreisfonds, of "kom gewoon dansen". }' },
        { q: 'Tot hoe laat duurt het?', a: 'We dansen tot 01:00. Kus ons om middernacht en daarna { het echte antwoord }.' },
      ],
    },

    footer: {
      big: 'We kunnen niet wachten om het met jullie te vieren',
      sig: 'Rick & Jikke · 11/12/2027',
      fine: 'Met liefde gemaakt. Details volgen.',
    },

    notFound: {
      code: '404',
      line: 'Deze pagina is naar het feest vertrokken.',
    },
  },
};
