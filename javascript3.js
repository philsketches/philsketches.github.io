/* jshint browser: true */
var arrcaptions = [
	'Hes at an age where he should know better',
	'Ive had a rather trying day.',
	'That reminds me of a funny story',
	'When does the main feature start',
	'Hes all thumbs',
	'Im all ears',
	'Thanks for a pleasant evening',
	'Hes quite a stickler for convention',
	'I just washed my hair and cant do a thing with it',
	'Use your head',
	'Thems fightin words pardner',
	'I admire your devotion to duty',
	'Lets leave early and beat the crowd',
	'Im tired of working for peanuts',
	'Hi big boy',
	'Its so simple,even a child could assemble it',
	'Gesudheit!',
	'His admiration for you knows no bounds',
	'You mean this old rag',
	'Dinner is ready!',
	'My feet are killing me',
	'Youre silly to jump at the first man who comes along',
	'Am I boring you',
	'I yeild to the gentelman from Ohio',
	'Shall we join the ladies?',
	'If not satisfied double your money back!',
	'May I have a few moments of your time?',
	'Why dont you pick on someone your own size',
	'Two seats together,please',
	'Imediate seating in the orchestra',
	'Filler up',
	'Look no hands',
	'Please dont feed the animals',
	'I realise this is carrying coals to Newcastle',
	'I refuse to answer on the grounds it might incriminate me',
	'Why dont we eat out for a change',
	'Take a powder, moriarty.',
	'She loves me,she loves me not',
	'Preted you dont notice him', 
	'Face the front of the car, please',
	'May I remove my coat?',
	'Move to the rear of the bus, please',
	'By george, I wish I had said that!',
	'How do you want your eggs this morning',
	'Can I add you to my linked in network?', 
	'I just feel sort of out of things',
	'But,can she cook?',
	'Is this seat taken?',
	'Lets not put the cart before the horse',
	'I can lick him with my eyes shut',
	'How late are you open?',
	'Its good to hear your voice',
	'Hes got a chip on his shoulder',
	'Youre going to meet a tall, dark,handsome man',
	'Just keep your shirt on',
	'I can lick any guy in the house',
	'Under new management',
	'In What denominations do you want it?',
	'Ill have to sleep on that proposition',
	'Im working my way through college',
	'Mind if I smoke?',
	'Sorry, Mr.Taber is all tied up,',
	'Take your dirty old hands off me',
	'Is the lady of the house in?', 
	'Can you support them in the style which theyre accustomed?',
	'Aww, be yourself',
	'Get a load of this',
	'Youre getting under my skin',
	'Going my way bud?',
	'May I have a word with you',
	'Hes as drunk as a lord',
	'Well dear, be good', 
	'Shine, mister?',
	'He can dish it out,but can he take it?',
	'of all the things to shove down my throat'
];


function captions() {
	"use strict";
	var randomNumber = Math.floor(Math.random() * (arrcaptions.length));
	document.getElementById('captions').innerHTML = arrcaptions[randomNumber];
}