// array of challenges for kids to exercise their mental abilities

const challenges = ['Say or write the following numbers subtracting 2: 3 - 6 - 10 - 9 - 4 - 15 - 12 - 11 - 13 - 18 - 5 - 17 - 7',
 "Each time you hear a number raise your right leg, and if it's not a number, clap your hands: 8 - Circus - 3 - 7 - Shelf - 10 - CLown - 12 - Elefant - 1 - 2 - 4 - Joker - 9 - Magician - 5 - Show - 6 - Crowd - Lion - 0",
'Search in your surroundings: 2 blue objects, 2 yellow object, 2 red objects', "Think and write or say words with: 3 letters, 4 letters, 5 letters, 6 letters, 7 letters",
"Make a list of things you would take on a vacation trip (put it in alphabetic order and memorize it", "Without mentioning games, what other function would you give to a dice? (Invent 3 new functions)",
"Each time you hear the word 'sweet', jump, and when you hear the word 'salty', crunch: SWEET - SALTY - BURGUER - SWEET - SWEET - CANDY - SALTY - BREAD - SWEET - BURGER - SWEET - SALTY - SALTY - LOLLIPOP - SWEET",
"Each time your hear the name of a clothing item, jump; of a mean of transportation, clap your hands; of a food, clap your feet: MOTORCYCLE - T-SHIRT - AIRPLANE - CUCUMBER - CARROT - PAJAMA - DRESS - TRAIN - BUS - FISH - PANTS - SHIRT - CAR - BIKE - MEAT - COAT",
"Each time you hear the word 'house', give one step ahead: LIVING ROOM - KITCHEN - HOUSE - HOUSE - OFFICE - HOUSE - BATHROOM - HOUSE - BALCONY - HOUSE - HOUSE - BACKYARD - HOUSE - BEDROOM - HOUSE",
"Without drawing, tell a person how to draw a house", "Say the half of each following number: 12 - 8 - 6 - 14 - 18 - 16 - 2 - 20 - 24 - 28 - 44 - 66 - 40",
"Read the following text removing the word 'duck': This duck, is duck the duck, best duck, way duck, of duck, hiding duck, a duck, text duck, from duck, a distracted duck, reader duck, without duck, being duck, noticed duck.",
"Say or write the numbere that comes before the following ones: 4 - 2 - 1 - 3 - 6 - 5 - 7 - 8 - 9 - 15 - 18 - 12 - 16",
"Say in one minute: OBJECTS THAT EXIST IN A KITCHEN - OBJECTS THAT EXIST IN AN OFFICE - OBJECTS THAT EXIST IN A CLASSROOM",
"Say a word that starts with the same first syllable of each of the following words: BALD - NAP - DOLL - COW - LION - CAT - BACKPACK - BOOK - PENCIL - SHOE - DICE - DOMINO",
"Say 5 ridiculous uses for: A CAP - A SHOE - A CELLPHONE - A COMPUTER",
"Write or say the words in reverse order: Ex: 'laptop - potpal' - EGG - EYE - MISS - RUN - TRAVEL - BONE - SPECIAL - TEACHER - DANCE - HOSPITAL",
"Form as many words as you can using the following letters: E - O - P - T - R - Y",
"Hear the numbers the repeat them in the same order: 3 - 5 - 4 - 6 - 2 - 7 - 3 - 2 - 7 - 8 - 1 - 5 - 0 - 3 - 9 - 3 - 4 - 1 - 8 - 9"];

console.log(challenges.length)

const chosenChallenge = challenges[(Math.floor(Math.random()*19 + 1))];

console.log(chosenChallenge);
