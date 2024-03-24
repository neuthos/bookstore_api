const books = [
  {
    author: 'Chinua Achebe',
    cover_image: 'images/things-fall-apart.jpg',
    title: 'Things Fall Apart',
  },
  {
    author: 'Hans Christian Andersen',
    cover_image: 'images/fairy-tales.jpg',
    title: 'Fairy tales',
  },
  {
    author: 'Dante Alighieri',
    cover_image: 'images/the-divine-comedy.jpg',
    title: 'The Divine Comedy',
  },
  {
    author: 'Unknown',
    cover_image: 'images/the-epic-of-gilgamesh.jpg',
    title: 'The Epic Of Gilgamesh',
  },
  {
    author: 'Unknown',
    cover_image: 'images/the-book-of-job.jpg',
    title: 'The Book Of Job',
  },
  {
    author: 'Unknown',
    cover_image: 'images/one-thousand-and-one-nights.jpg',
    title: 'One Thousand and One Nights',
  },
  {
    author: 'Unknown',
    cover_image: 'images/njals-saga.jpg',
    title: "Nj\u00e1l's Saga",
  },
  {
    author: 'Jane Austen',
    cover_image: 'images/pride-and-prejudice.jpg',
    title: 'Pride and Prejudice',
  },
  {
    author: 'Honor\u00e9 de Balzac',
    cover_image: 'images/le-pere-goriot.jpg',
    title: 'Le P\u00e8re Goriot',
  },
  {
    author: 'Samuel Beckett',
    cover_image: 'images/molloy-malone-dies-the-unnamable.jpg',
    title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
  },
  {
    author: 'Giovanni Boccaccio',
    cover_image: 'images/the-decameron.jpg',
    title: 'The Decameron',
  },
  {
    author: 'Jorge Luis Borges',
    cover_image: 'images/ficciones.jpg',
    title: 'Ficciones',
  },
  {
    author: 'Emily Bront\u00eb',
    cover_image: 'images/wuthering-heights.jpg',
    title: 'Wuthering Heights',
  },
  {
    author: 'Albert Camus',
    cover_image: 'images/l-etranger.jpg',
    title: 'The Stranger',
  },
  {
    author: 'Paul Celan',
    cover_image: 'images/poems-paul-celan.jpg',
    title: 'Poems',
  },
  {
    author: 'Louis-Ferdinand C\u00e9line',
    cover_image: 'images/voyage-au-bout-de-la-nuit.jpg',
    title: 'Journey to the End of the Night',
  },
  {
    author: 'Miguel de Cervantes',
    cover_image: 'images/don-quijote-de-la-mancha.jpg',
    title: 'Don Quijote De La Mancha',
  },
  {
    author: 'Geoffrey Chaucer',
    cover_image: 'images/the-canterbury-tales.jpg',
    title: 'The Canterbury Tales',
  },
  {
    author: 'Anton Chekhov',
    cover_image: 'images/stories-of-anton-chekhov.jpg',
    title: 'Stories',
  },
  {
    author: 'Joseph Conrad',
    cover_image: 'images/nostromo.jpg',
    title: 'Nostromo',
  },
  {
    author: 'Charles Dickens',
    cover_image: 'images/great-expectations.jpg',
    title: 'Great Expectations',
  },
  {
    author: 'Denis Diderot',
    cover_image: 'images/jacques-the-fatalist.jpg',
    title: 'Jacques the Fatalist',
  },
  {
    author: 'Alfred D\u00f6blin',
    cover_image: 'images/berlin-alexanderplatz.jpg',
    title: 'Berlin Alexanderplatz',
  },
  {
    author: 'Fyodor Dostoevsky',
    cover_image: 'images/crime-and-punishment.jpg',
    title: 'Crime and Punishment',
  },
  {
    author: 'Fyodor Dostoevsky',
    cover_image: 'images/the-idiot.jpg',
    title: 'The Idiot',
  },
  {
    author: 'Fyodor Dostoevsky',
    cover_image: 'images/the-possessed.jpg',
    title: 'The Possessed',
  },
  {
    author: 'Fyodor Dostoevsky',
    cover_image: 'images/the-brothers-karamazov.jpg',
    title: 'The Brothers Karamazov',
  },
  {
    author: 'George Eliot',
    cover_image: 'images/middlemarch.jpg',
    title: 'Middlemarch',
  },
  {
    author: 'Ralph Ellison',
    cover_image: 'images/invisible-man.jpg',
    title: 'Invisible Man',
  },
  {
    author: 'Euripides',
    cover_image: 'images/medea.jpg',
    title: 'Medea',
  },
  {
    author: 'William Faulkner',
    cover_image: 'images/absalom-absalom.jpg',
    title: 'Absalom, Absalom!',
  },
  {
    author: 'William Faulkner',
    cover_image: 'images/the-sound-and-the-fury.jpg',
    title: 'The Sound and the Fury',
  },
  {
    author: 'Gustave Flaubert',
    cover_image: 'images/madame-bovary.jpg',
    title: 'Madame Bovary',
  },
  {
    author: 'Gustave Flaubert',
    cover_image: 'images/l-education-sentimentale.jpg',
    title: 'Sentimental Education',
  },
  {
    author: 'Federico Garc\u00eda Lorca',
    cover_image: 'images/gypsy-ballads.jpg',
    title: 'Gypsy Ballads',
  },
  {
    author: 'Gabriel Garc\u00eda M\u00e1rquez',
    cover_image: 'images/one-hundred-years-of-solitude.jpg',
    title: 'One Hundred Years of Solitude',
  },
  {
    author: 'Gabriel Garc\u00eda M\u00e1rquez',
    cover_image: 'images/love-in-the-time-of-cholera.jpg',
    title: 'Love in the Time of Cholera',
  },
  {
    author: 'Johann Wolfgang von Goethe',
    cover_image: 'images/faust.jpg',
    title: 'Faust',
  },
  {
    author: 'Nikolai Gogol',
    cover_image: 'images/dead-souls.jpg',
    title: 'Dead Souls',
  },
  {
    author: 'G\u00fcnter Grass',
    cover_image: 'images/the-tin-drum.jpg',
    title: 'The Tin Drum',
  },
  {
    author: 'Jo\u00e3o Guimar\u00e3es Rosa',
    cover_image: 'images/the-devil-to-pay-in-the-backlands.jpg',
    title: 'The Devil to Pay in the Backlands',
  },
  {
    author: 'Knut Hamsun',
    cover_image: 'images/hunger.jpg',
    title: 'Hunger',
  },
  {
    author: 'Ernest Hemingway',
    cover_image: 'images/the-old-man-and-the-sea.jpg',
    title: 'The Old Man and the Sea',
  },
  {
    author: 'Homer',
    cover_image: 'images/the-iliad-of-homer.jpg',
    title: 'Iliad',
  },
  {
    author: 'Homer',
    cover_image: 'images/the-odyssey-of-homer.jpg',
    title: 'Odyssey',
  },
  {
    author: 'Henrik Ibsen',
    cover_image: 'images/a-Dolls-house.jpg',
    title: "A Doll's House",
  },
  {
    author: 'James Joyce',
    cover_image: 'images/ulysses.jpg',
    title: 'Ulysses',
  },
  {
    author: 'Franz Kafka',
    cover_image: 'images/stories-of-franz-kafka.jpg',
    title: 'Stories',
  },
  {
    author: 'Franz Kafka',
    cover_image: 'images/the-trial.jpg',
    title: 'The Trial',
  },
  {
    author: 'Franz Kafka',
    cover_image: 'images/the-castle.jpg',
    title: 'The Castle',
  },
  {
    author: 'K\u0101lid\u0101sa',
    cover_image: 'images/the-recognition-of-shakuntala.jpg',
    title: 'The recognition of Shakuntala',
  },
  {
    author: 'Yasunari Kawabata',
    cover_image: 'images/the-sound-of-the-mountain.jpg',
    title: 'The Sound of the Mountain',
  },
  {
    author: 'Nikos Kazantzakis',
    cover_image: 'images/zorba-the-greek.jpg',
    title: 'Zorba the Greek',
  },
  {
    author: 'D. H. Lawrence',
    cover_image: 'images/sons-and-lovers.jpg',
    title: 'Sons and Lovers',
  },
  {
    author: 'Halld\u00f3r Laxness',
    cover_image: 'images/independent-people.jpg',
    title: 'Independent People',
  },
  {
    author: 'Giacomo Leopardi',
    cover_image: 'images/poems-giacomo-leopardi.jpg',
    title: 'Poems',
  },
  {
    author: 'Doris Lessing',
    cover_image: 'images/the-golden-notebook.jpg',
    title: 'The Golden Notebook',
  },
  {
    author: 'Astrid Lindgren',
    cover_image: 'images/pippi-longstocking.jpg',
    title: 'Pippi Longstocking',
  },
  {
    author: 'Lu Xun',
    cover_image: 'images/diary-of-a-madman.jpg',
    title: 'Diary of a Madman',
  },
  {
    author: 'Naguib Mahfouz',
    cover_image: 'images/children-of-gebelawi.jpg',
    title: 'Children of Gebelawi',
  },
  {
    author: 'Thomas Mann',
    cover_image: 'images/buddenbrooks.jpg',
    title: 'Buddenbrooks',
  },
  {
    author: 'Thomas Mann',
    cover_image: 'images/the-magic-mountain.jpg',
    title: 'The Magic Mountain',
  },
  {
    author: 'Herman Melville',
    cover_image: 'images/moby-dick.jpg',
    title: 'Moby Dick',
  },
  {
    author: 'Michel de Montaigne',
    cover_image: 'images/essais.jpg',
    title: 'Essays',
  },
  {
    author: 'Elsa Morante',
    cover_image: 'images/history.jpg',
    title: 'History',
  },
  {
    author: 'Toni Morrison',
    cover_image: 'images/beloved.jpg',
    title: 'Beloved',
  },
  {
    author: 'Murasaki Shikibu',
    cover_image: 'images/the-tale-of-genji.jpg',
    title: 'The Tale of Genji',
  },
  {
    author: 'Robert Musil',
    cover_image: 'images/the-man-without-qualities.jpg',
    title: 'The Man Without Qualities',
  },
  {
    author: 'Vladimir Nabokov',
    cover_image: 'images/lolita.jpg',
    title: 'Lolita',
  },
  {
    author: 'George Orwell',
    cover_image: 'images/nineteen-eighty-four.jpg',
    title: 'Nineteen Eighty-Four',
  },
  {
    author: 'Ovid',
    cover_image: 'images/the-metamorphoses-of-ovid.jpg',
    title: 'Metamorphoses',
  },
  {
    author: 'Fernando Pessoa',
    cover_image: 'images/the-book-of-disquiet.jpg',
    title: 'The Book of Disquiet',
  },
  {
    author: 'Edgar Allan Poe',
    cover_image: 'images/tales-and-poems-of-edgar-allan-poe.jpg',
    title: 'Tales',
  },
  {
    author: 'Marcel Proust',
    cover_image: 'images/a-la-recherche-du-temps-perdu.jpg',
    title: 'In Search of Lost Time',
  },
  {
    author: 'Fran\u00e7ois Rabelais',
    cover_image: 'images/gargantua-and-pantagruel.jpg',
    title: 'Gargantua and Pantagruel',
  },
  {
    author: 'Juan Rulfo',
    cover_image: 'images/pedro-paramo.jpg',
    title: 'Pedro P\u00e1ramo',
  },
  {
    author: 'Rumi',
    cover_image: 'images/the-masnavi.jpg',
    title: 'The Masnavi',
  },
  {
    author: 'Salman Rushdie',
    cover_image: 'images/midnights-children.jpg',
    title: "Midnight's Children",
  },
  {
    author: 'Saadi',
    cover_image: 'images/bostan.jpg',
    title: 'Bostan',
  },
  {
    author: 'Tayeb Salih',
    cover_image: 'images/season-of-migration-to-the-north.jpg',
    title: 'Season of Migration to the North',
  },
  {
    author: 'Jos\u00e9 Saramago',
    cover_image: 'images/blindness.jpg',
    title: 'Blindness',
  },
  {
    author: 'William Shakespeare',
    cover_image: 'images/hamlet.jpg',
    title: 'Hamlet',
  },
  {
    author: 'William Shakespeare',
    cover_image: 'images/king-lear.jpg',
    title: 'King Lear',
  },
  {
    author: 'William Shakespeare',
    cover_image: 'images/othello.jpg',
    title: 'Othello',
  },
  {
    author: 'Sophocles',
    cover_image: 'images/oedipus-the-king.jpg',
    title: 'Oedipus the King',
  },
  {
    author: 'Stendhal',
    cover_image: 'images/le-rouge-et-le-noir.jpg',
    title: 'The Red and the Black',
  },
  {
    author: 'Laurence Sterne',
    cover_image: 'images/the-life-and-opinions-of-tristram-shandy.jpg',
    title: 'The Life And Opinions of Tristram Shandy',
  },
  {
    author: 'Italo Svevo',
    cover_image: 'images/confessions-of-zeno.jpg',
    title: 'Confessions of Zeno',
  },
  {
    author: 'Jonathan Swift',
    cover_image: 'images/gullivers-travels.jpg',
    title: "Gulliver's Travels",
  },
  {
    author: 'Leo Tolstoy',
    cover_image: 'images/war-and-peace.jpg',
    title: 'War and Peace',
  },
  {
    author: 'Leo Tolstoy',
    cover_image: 'images/anna-karenina.jpg',
    title: 'Anna Karenina',
  },
  {
    author: 'Leo Tolstoy',
    cover_image: 'images/the-death-of-ivan-ilyich.jpg',
    title: 'The Death of Ivan Ilyich',
  },
  {
    author: 'Mark Twain',
    cover_image: 'images/the-adventures-of-huckleberry-finn.jpg',
    title: 'The Adventures of Huckleberry Finn',
  },
  {
    author: 'Valmiki',
    cover_image: 'images/ramayana.jpg',
    title: 'Ramayana',
  },
  {
    author: 'Virgil',
    cover_image: 'images/the-aeneid.jpg',
    title: 'The Aeneid',
  },
  {
    author: 'Vyasa',
    cover_image: 'images/the-mahab-harata.jpg',
    title: 'Mahabharata',
  },
  {
    author: 'Walt Whitman',
    cover_image: 'images/leaves-of-grass.jpg',
    title: 'Leaves of Grass',
  },
  {
    author: 'Virginia Woolf',
    cover_image: 'images/mrs-dalloway.jpg',
    title: 'Mrs Dalloway',
  },
  {
    author: 'Virginia Woolf',
    cover_image: 'images/to-the-lighthouse.jpg',
    title: 'To the Lighthouse',
  },
  {
    author: 'Marguerite Yourcenar',
    cover_image: 'images/memoirs-of-hadrian.jpg',
    title: 'Memoirs of Hadrian',
  },
];

export default books;
