// All site copy lives here, one object per locale.
// Facts we know are baked in; the ones still open (exact date, street addresses,
// dress code / colour theme) stay as { PLACEHOLDERS } in the same voice.

export const LOCALES = ['en', 'nl'];
export const DEFAULT_LOCALE = 'en';
export const OTHER = { en: 'nl', nl: 'en' };

// Page routes shared across locales. `slug` is '' for the home page.
export const PAGES = ['', 'story', 'details', 'travel', 'rsvp', 'faq'];

export const content = {
  en: {
    htmlLang: 'en',
    langName: 'EN',
    otherLangName: 'NL',
    brand: 'Rick & Jikke',
    metaDescription: "Rick & Jikke are getting married — two less fish in the sea.",
    themeLabel: 'Toggle paper / midnight',
    skip: 'Skip to content',
    placeholderNote:
      'A few things — the exact date, addresses and dress code — are still on the way.',
    nav: [
      { slug: '', label: 'Home' },
      { slug: 'story', label: 'Our story' },
      { slug: 'details', label: 'Details' },
      { slug: 'travel', label: 'Travel & stay' },
      { slug: 'rsvp', label: 'RSVP' },
      { slug: 'faq', label: 'FAQ' },
    ],
    cta: { rsvp: 'RSVP', details: 'The details', back: 'Back home' },

    home: {
      title: "We're getting married",
      date: '{ DATE }',
      tagline: 'Two less fish in the sea',
      intro:
        'Everything you need is right here — the where, the when, and how to get between the two. Scroll on for the fun stuff.',
      factsKicker: 'The essentials',
      facts: {
        dateLabel: 'Date',
        dateValue: '{ DATE }',
        ceremonyLabel: 'Ceremony',
        ceremonyVenue: 'Hasseltse Kapel',
        ceremonyTime: '18:30 – 20:00',
        partyLabel: 'Party',
        partyVenue: 'Bet Koolen',
        partyTime: '20:30 – 01:00',
        invitedNote: "(if you're invited to both)",
        transport: 'We arrange transport between the two venues — hop on if you need it.',
        contactLead: 'Something up on the day? Call Rick on',
        contactTel: '+31637403994',
        contactDisplay: '+31 6 37403994',
      },
      linksKicker: 'Everything else',
      links: [
        { slug: 'travel', hash: 'transport', icon: 'car', label: 'Transport', note: 'Between the two venues' },
        { slug: 'travel', hash: 'stay', icon: 'bed', label: 'Where to sleep', note: 'Rooms & getting home' },
        { slug: 'details', hash: 'dress', icon: 'palette', label: 'Dress & colours', note: 'The look of the day' },
        { slug: 'rsvp', hash: 'song', icon: 'note', label: 'Request a song', note: 'Get us on the floor' },
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
        { label: 'When', value: '{ DAY, DATE }', sub: 'Ceremony from 18:30' },
        { label: 'Ceremony', value: 'Hasseltse Kapel', sub: '18:30 – 20:00 · { ADDRESS }' },
        { label: 'Party', value: 'Bet Koolen', sub: '20:30 – 01:00 · { ADDRESS }' },
        { label: 'Dress code', value: '{ To follow }', sub: 'Colour theme still in the works', id: 'dress' },
      ],
      transport: {
        note: "(if you're invited to both)",
        line: 'We arrange transport between Hasseltse Kapel and Bet Koolen — hop on if you need it.',
        contactLead: 'Something up on the day? Call Rick on',
        contactTel: '+31637403994',
        contactDisplay: '+31 6 37403994',
      },
    },

    travel: {
      title: 'Transport & stay',
      quote: 'Getting you there and home again',
      blocks: [
        {
          id: 'transport',
          h: 'Transport',
          p: 'We run transport between Hasseltse Kapel (ceremony) and Bet Koolen (party). Hop on if you need it — it’s there for you, not compulsory. { Departure times and pickup spot to follow. }',
        },
        { id: 'stay', h: 'Where to sleep', p: 'A block of rooms is held at { HOTEL NAME }. Mention "{ BOOKING CODE }" for the wedding rate.' },
        { h: 'Getting there', p: '{ Directions, parking and the nearest station. }' },
      ],
    },

    rsvp: {
      title: 'Party on!',
      intro: 'Let us know if you can make it. It genuinely helps us plan the good stuff.',
      nameLabel: 'M',
      options: [
        { value: 'yes', label: "Yes, I'm RSVP-ing like a champ" },
        { value: 'no', label: 'No, my sofa wins this round' },
      ],
      guestsLabel: 'Number of guests',
      dietaryLabel: 'Dietary notes',
      songLabel: 'A song that gets you on the floor',
      deadline: 'RSVP by { DATE } — regrets last forever.',
      submit: 'Send it',
      backendNote: 'Heads up: the form still needs wiring to a real inbox before it can send.',
    },

    faq: {
      title: 'Good questions',
      quote: 'The things people always ask',
      items: [
        { q: 'Can I bring a plus-one?', a: '{ Your plus-one policy in one clear line. }' },
        { q: 'Are kids welcome?', a: '{ The kids answer — adults-only, or bring the whole crew. }' },
        { q: 'What time should I actually arrive?', a: 'Ceremony starts 18:30 at Hasseltse Kapel — aim to be seated by 18:20.' },
        { q: 'How do I get to the party?', a: 'The party is at Bet Koolen from 20:30. We arrange transport between the two venues — use it if you need it.' },
        { q: 'Gifts?', a: '{ Registry, honeymoon fund, or "just come and dance". }' },
        { q: 'When does it end?', a: 'We dance until 01:00. Kiss us at midnight and then { the real answer }.' },
      ],
    },

    footer: {
      big: "We can't wait to celebrate with you",
      sig: 'Rick & Jikke · { DATE }',
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
    metaDescription: 'Rick & Jikke gaan trouwen — twee vissen minder in de zee.',
    themeLabel: 'Wissel papier / midnight',
    skip: 'Naar de inhoud',
    placeholderNote:
      'Een paar dingen — de exacte datum, adressen en dresscode — volgen nog.',
    nav: [
      { slug: '', label: 'Home' },
      { slug: 'story', label: 'Ons verhaal' },
      { slug: 'details', label: 'Details' },
      { slug: 'travel', label: 'Reizen & slapen' },
      { slug: 'rsvp', label: 'RSVP' },
      { slug: 'faq', label: 'Vragen' },
    ],
    cta: { rsvp: 'RSVP', details: 'De details', back: 'Terug naar home' },

    home: {
      title: 'We gaan trouwen',
      date: '{ DATUM }',
      tagline: 'Twee vissen minder in de zee',
      intro:
        'Alles wat je nodig hebt staat hier — waar, wanneer en hoe je tussen de twee komt. Scroll door voor de leuke dingen.',
      factsKicker: 'Het belangrijkste',
      facts: {
        dateLabel: 'Datum',
        dateValue: '{ DATUM }',
        ceremonyLabel: 'Ceremonie',
        ceremonyVenue: 'Hasseltse Kapel',
        ceremonyTime: '18:30 – 20:00',
        partyLabel: 'Feest',
        partyVenue: 'Bet Koolen',
        partyTime: '20:30 – 01:00',
        invitedNote: '(als je voor beide bent uitgenodigd)',
        transport: 'Wij regelen vervoer tussen de twee locaties — stap in als je het nodig hebt.',
        contactLead: 'Iets aan de hand op de dag zelf? Bel Rick op',
        contactTel: '+31637403994',
        contactDisplay: '+31 6 37403994',
      },
      linksKicker: 'De rest',
      links: [
        { slug: 'travel', hash: 'transport', icon: 'car', label: 'Vervoer', note: 'Tussen de twee locaties' },
        { slug: 'travel', hash: 'stay', icon: 'bed', label: 'Slapen', note: 'Kamers & thuiskomen' },
        { slug: 'details', hash: 'dress', icon: 'palette', label: 'Kleding & kleuren', note: 'De look van de dag' },
        { slug: 'rsvp', hash: 'song', icon: 'note', label: 'Verzoeknummer', note: 'Krijg ons op de dansvloer' },
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
        { label: 'Wanneer', value: '{ DAG, DATUM }', sub: 'Ceremonie vanaf 18:30' },
        { label: 'Ceremonie', value: 'Hasseltse Kapel', sub: '18:30 – 20:00 · { ADRES }' },
        { label: 'Feest', value: 'Bet Koolen', sub: '20:30 – 01:00 · { ADRES }' },
        { label: 'Dresscode', value: '{ Volgt }', sub: 'Kleurenthema is nog in de maak', id: 'dress' },
      ],
      transport: {
        note: '(als je voor beide bent uitgenodigd)',
        line: 'Wij regelen vervoer tussen Hasseltse Kapel en Bet Koolen — stap in als je het nodig hebt.',
        contactLead: 'Iets aan de hand op de dag zelf? Bel Rick op',
        contactTel: '+31637403994',
        contactDisplay: '+31 6 37403994',
      },
    },

    travel: {
      title: 'Vervoer & slapen',
      quote: 'Heen, terug en veilig thuis',
      blocks: [
        {
          id: 'transport',
          h: 'Vervoer',
          p: 'Wij regelen vervoer tussen Hasseltse Kapel (ceremonie) en Bet Koolen (feest). Gebruik het als je wil — het is er voor je, verplicht is het niet. { Vertrektijden en opstapplek volgen. }',
        },
        { id: 'stay', h: 'Slapen', p: 'We houden kamers vast bij { HOTEL }. Noem "{ BOEKINGSCODE }" voor het bruiloftstarief.' },
        { h: 'Zo kom je er', p: '{ Route, parkeren en het dichtstbijzijnde station. }' },
      ],
    },

    rsvp: {
      title: 'Feesten maar!',
      intro: 'Laat je ons weten of je erbij bent? Dat helpt ons enorm met de leuke dingen regelen.',
      nameLabel: 'M',
      options: [
        { value: 'yes', label: 'Ja, ik kom als een kampioen' },
        { value: 'no', label: 'Nee, mijn bank wint deze ronde' },
      ],
      guestsLabel: 'Aantal gasten',
      dietaryLabel: 'Dieetwensen',
      songLabel: 'Een nummer waarop jij de dansvloer op moet',
      deadline: 'Reageer vóór { DATUM } — afzeggen kan achteraf niet meer.',
      submit: 'Versturen',
      backendNote: 'Let op: het formulier moet nog gekoppeld worden aan een echte inbox voordat het kan versturen.',
    },

    faq: {
      title: 'Goeie vragen',
      quote: 'Wat mensen altijd vragen',
      items: [
        { q: 'Mag ik iemand meenemen?', a: '{ Je introducé-beleid in één duidelijke zin. }' },
        { q: 'Zijn kinderen welkom?', a: '{ Het kinderen-antwoord — alleen volwassenen, of neem de hele meute mee. }' },
        { q: 'Hoe laat moet ik er echt zijn?', a: 'De ceremonie begint om 18:30 in de Hasseltse Kapel — zorg dat je rond 18:20 zit.' },
        { q: 'Hoe kom ik bij het feest?', a: 'Het feest is bij Bet Koolen vanaf 20:30. Wij regelen vervoer tussen de twee locaties — gebruik het als je het nodig hebt.' },
        { q: 'Cadeaus?', a: '{ Verlanglijst, huwelijksreisfonds, of "kom gewoon dansen". }' },
        { q: 'Tot hoe laat duurt het?', a: 'We dansen tot 01:00. Kus ons om middernacht en daarna { het echte antwoord }.' },
      ],
    },

    footer: {
      big: 'We kunnen niet wachten om het met jullie te vieren',
      sig: 'Rick & Jikke · { DATUM }',
      fine: 'Met liefde gemaakt. Details volgen.',
    },

    notFound: {
      code: '404',
      line: 'Deze pagina is naar het feest vertrokken.',
    },
  },
};
