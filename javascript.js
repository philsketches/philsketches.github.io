/* jshint browser: true */
var arrpeople = [
	'Father',
	'Mother',
	'Husband',
	'Wife',
	'Politician',
	'Butcher',
	'Doorman',
	'Milkman',
	'Boyfriend',
	'Girlfriend',
	'Stenographer',
	'Waitress',
	'Salesman',
	'Waiter',
	'Baseball Player',
	'Coal Miner',
	'Big Foot',
	'The Lochness Monster',
	'Woman',
	'Man',
	'Child',
	'Dog',
	'Cat',
	'President',
	'Police',
	'Fire Fighter',
	'EMT',
	'Doctor',
	'Nurse',
	'Teacher',
	'Alien',
	'Dracula',
	'Zombie',
	'Wolfman',
	'Frankensteins Monster',
	'Soldier',
	'Pope',
	'Priest',
	'Nun',
	'Hipster',
	'Gangster',
	'Cowboy/girl',
	'Singer',
	'Rocker',
	'Biker',
	'Football Player',
	'Golfer',
	'Swimmer',
	'Basketball Player',
	'Zoo Keeper',
	'College Student',
	'Bear',
	'Angel',
	'God',
	'Toddler',
	'Santa',
	'Satan',
	'Easter Bunny',
	'Turtle',
	'Aemeoba',
	'Frog',
	'Rich Man',
	'Poor Man',
	'Seal',
	'Scuba Diver',
	'Astronaut',
	'Plumber',
	'Witch',
	'Astronomer',
	'Fortune Teller',
	'Matador',
	'Lion Tamer',
	'Taxi Driver',
	'Snake Charmer',
	'Shoe Salesman',
	'Bus Driver',
	'Cartoonist',
	'Parent',
	'Ghost',
	'Equestrian',
	'Pedestrian',
	'Farmer',
	'Bird Watcher',
	'Minister',
	'TV Commentator',
	'Stock Broker',
	'Weather Man',
	'Psychiatrist',
	'Opera Singer',
	'Sculptor',
	'Artist',
	'Poet',
	'Mermaid',
	'Horse Jockey',
	'Manicurist',
	'Judo Expert',
	'Bowler',
	'House Painter',
	'Parrot',
	'Pirate',
	'Figure Skater',
	'Hockey Player',
	'Dog Catcher',
	'School Graduate',
	'Tourist',
	'Newlyweds',
	'Nudist(s)',
	'Accountant',
	'Riveter',
	'Construction Worker',
	'Mover',
	'Chicken Plucker',
	'Baby',
	'Chef',
	'Exterminator',
	'Boss',
	'Maid',
	'Trash Collecter',
	'Mechanic',
	'Fish',
	'Bull',
	'Cow',
	'Wizard',
	'Robot(s)',
	'Umpire',
	'Mother in law',
	'Elephant',
	'Lawyer',
	'Monkey',
	'Shark',
	'Yeti',
	'Mountain Climber',
	'Vultures',
	'Rapunzel',
	'Pinochio',
	'Guru',
	'Sheep',
	'King',
	'Queen',
	'Judge',
	'St Bernard Rescue Dog',
	'Stork',
	'Mouse',
	'Little Red Riding Hood',
	'Whale(S)',
	'Worm',
	'Snail',
	'Crab',
	'Lobster',
	'Dolphin',
	'Sea Horse',
	'Zues',
	'Posidon',
	'Centaur(s)',
	'St. Peter',
	'Superhero(s)',
	'Sisyphus',
	'Humpty Dumpty',
	'Pilot',
	'Dragon',
	'Cupid',
	'Leprechaun',
	'Paper Boy',
	'Paper Girl',
	'Alter Server',
	'Atlas',
	'The Thinker',
	'Hobo',
	'Alligator'
	'Easter Bunny',
	'Cinderella',
	'Chicken & Egg',
	'Caveman',
	'Hansel & Gretel',
	'Little Engine',
	'Big Fish',
	'Little Fish',
	'Rat',
	'Monster',
	'Octopus',
	'Spider',
	'Janitor'
	'Ram',
	'Dinosaur',
	'Moses',
	'Jesus',
	'3 little pigs',
	'Snail',
	'Slug',
	'Unicorn',
	'Dragon',
	'Knight',
	'Cyclops',
	'King Kong',
	'Godzilla',
	'Giraffe',
	'Lion',
	'Tiger',
	'Skelleton/s',
	'Girraffe',
	'Elephant',
	'Bear',
	'Doll',
	'Cow',
	'Pig',
	'Soldier',
	'Nanny'
	
	

	
];


function people() {
	"use strict";
	var randomNumber = Math.floor(Math.random() * (arrpeople.length));
	document.getElementById('people').innerHTML = arrpeople[randomNumber];
}
