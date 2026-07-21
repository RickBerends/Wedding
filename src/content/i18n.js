// All site copy lives here, one object per locale.
// Real details are intentionally placeholders — written as { LIKE THIS } — so the
// structure and voice are locked in and only the facts need filling later.

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
      'This site is a work in progress — dates, venue and program are placeholders for now.',
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
      names: 'Rick & Jikke',
      date: '{ DATE } · { VENUE }',
      tagline: 'Two less fish in the sea',
      intro:
        "We're throwing a party and you're on the list. The important bits — where to be, when, and where to sleep it off — are all in here.",
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
        { label: 'When', value: '{ DAY, DATE }', sub: '{ Ceremony START TIME }' },
        { label: 'Ceremony', value: '{ VENUE NAME }', sub: '{ ADDRESS }' },
        { label: 'Party', value: '{ RECEPTION VENUE }', sub: '{ ADDRESS }' },
        { label: 'Dress code', value: '{ DRESS CODE }', sub: '{ one-line note }' },
      ],
      timelineTitle: 'The run of the day',
      timelineNote: 'The full timeline is revealed a little closer to the day. Watch this space.',
    },

    travel: {
      title: 'Where to stay',
      quote: 'For everyone travelling in',
      blocks: [
        { h: 'Sleep', p: 'A block of rooms is held at { HOTEL NAME }. Mention "{ BOOKING CODE }" for the wedding rate.' },
        { h: 'Getting there', p: '{ Directions, parking and the nearest station. }' },
        { h: 'From out of town', p: '{ Notes for guests travelling further — shuttles, timings, anything handy. }' },
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
        { q: 'What time should I actually arrive?', a: '{ Real arrival time vs. the time on the invite. }' },
        { q: 'Gifts?', a: '{ Registry, honeymoon fund, or "just come and dance". }' },
        { q: 'Where do I park?', a: '{ Parking and public-transport notes. }' },
        { q: 'When does it end?', a: 'Kiss me at midnight — and then { the real answer }.' },
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
      'Deze site is nog in de maak — datum, locatie en programma zijn voorlopig placeholders.',
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
      names: 'Rick & Jikke',
      date: '{ DATUM } · { LOCATIE }',
      tagline: 'Twee vissen minder in de zee',
      intro:
        'We geven een feest en jij staat op de lijst. Het belangrijkste — waar, wanneer en waar je kunt bijkomen — vind je hier.',
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
        { label: 'Wanneer', value: '{ DAG, DATUM }', sub: '{ Ceremonie AANVANG }' },
        { label: 'Ceremonie', value: '{ LOCATIE }', sub: '{ ADRES }' },
        { label: 'Feest', value: '{ FEESTLOCATIE }', sub: '{ ADRES }' },
        { label: 'Dresscode', value: '{ DRESSCODE }', sub: '{ korte toelichting }' },
      ],
      timelineTitle: 'Het verloop van de dag',
      timelineNote: 'Het volledige programma volgt dichter bij de dag. Houd deze plek in de gaten.',
    },

    travel: {
      title: 'Waar te slapen',
      quote: 'Voor iedereen die van ver komt',
      blocks: [
        { h: 'Slapen', p: 'We houden kamers vast bij { HOTEL }. Noem "{ BOEKINGSCODE }" voor het bruiloftstarief.' },
        { h: 'Zo kom je er', p: '{ Route, parkeren en het dichtstbijzijnde station. }' },
        { h: 'Van ver', p: '{ Tips voor gasten die verder reizen — pendeldienst, tijden, handigheden. }' },
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
        { q: 'Hoe laat moet ik er echt zijn?', a: '{ De echte aankomsttijd versus de tijd op de kaart. }' },
        { q: 'Cadeaus?', a: '{ Verlanglijst, huwelijksreisfonds, of "kom gewoon dansen". }' },
        { q: 'Waar kan ik parkeren?', a: '{ Parkeer- en OV-tips. }' },
        { q: 'Tot hoe laat duurt het?', a: 'Kus me om middernacht — en daarna { het echte antwoord }.' },
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
