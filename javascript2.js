/* jshint browser: true */
var arrprops = [
	'Merry-Go-Round',
	'Water Cooler',
	'Toaster',
	'Jalopy',
	'TV',
	'DVD Player',
	'Computer',
	'Cell Phone',
	'Switch Board',
	'Stenographer',
	'Statue',
	'Sewing Machine',
	'Fire Hydrant',
	'Radiator',
	'Sun Lamp',
	'Car',
	'Dog',
	'Cat',
	'Scissors',
	'Pen',
	'Coffee Maker',
	'Tablet',
	'Magnifying Glass',
	'Top Hat',
	'Hammer',
	'Nail',
	'Pencil',
	'Rocket Ship',
	'Horn',
	'Bull Horn',
	'App',
	'Flag pole', 
	'Income Tax Forms',
	'Rain',
	'Billboard',
	'Suit of Armor',
	'Home Movie',
	'Vaction Slides/Photos',
	'Golf Cart',
	'Golf Bag',
	'Golf Clubs',
	'Golf Ball(s)',
	'Wallet',
	'Bandages',
	'Tape',
	'Paintbrush',
	'Fruit',
	'Fish',
	'Selfie Stick',
	'Lighter',
	'Camp Fire',
	'Microphone',
	'Fork',
	'Knife',
	'Spoon',
	'Boomerang',
	'Ukulele',
	'Motorcycle',
	'Newspaper', 
	'Bagpipes', 
	'Wedding gifts', 
	'Stilts', 
	'Outdoor grill', 
	'Cigarettes',
	'Cigars',  
	'Keyhole', 
	'Birthday cake', 
	'Roller skates/blades', 
	'Musical notes', 
	'Sky writing', 
	'Doorknob', 
	'Juke box', 
	'Water cooler',
	'Copy Machine',
	'Computer printer',
	'Washing Machine',
	'Clothes Dryer',
	'Blender',
	'Microwave',
	'Socks',
	'Pants',
	'Desk',  
	'Crib',
	'Train',
	'Drone',
	'Water Boiler',
	'Snow Blower',
	'Hammer',
	'Screw Driver',
	'Computer Mouse',
	'Video Game Console',
	'Eggs',
	'Food',
	'Tape',
	'Food Tray',
	'Toilet',
	'Stove/Kitchen Appliances',
	'Refridgerator',
	'Scissors',
	'knife',
	'Note Book',
	'Ash Tray',
	'Paint bucket',
	'Pencil Sharpener',
	'Duffel Bag',
	'Back Pack',
	'Pacifier',
	'Basket',
	'Hockey Puck',
	'Hockey Stick',
	'Step Stool',
	'Ladder',
	'Plunger',
	'Razor',
	'Soap',
	'Sink',
	'Speakers',
	'PA System',
	'Rubber Stamps',
	'Tires',
	'Lawn Chairs',
	'Lawn Ornaments',
	'Christmas Ornaments',
	'Christmas Tree',
	'Menora',
	'Hang Glider',
	'Kite',
	'Selfie Stick',
	'Cell Phone',
	'Smartphone',
	'Lamp',
	'Bookcase',
	'Table',
	'Tree',
	'Bush',
	'Fire Hydrant',
	'Fence',
	'Couch',
	'Loveseat',
	'Overstuffed Chair',
	'Automan',
	'Slingshot',
	'Bow and Arrow',
	'Sword',
	'Picture Frame',
	'Laptop',
	'ATM',
	'Coffee Maker',
	'Sugar Skull',
	'Apple',
	'Carrot',
	'Banana',
	'Banana Peel',
	'Tablet',
	'Pillow',
	'Carton of Eggs',
	'Books',
	'Baby Monitor',
	'Remote Control',
	'Guitar',
	'Piano',
	'Mask',
	'Trombone',
	'Tire Iron',
	'Coffee Mug',
	'Flashlight',
	'Mirror',
	'Cane',
	'Umbrella',
	'Ladder',
	'Headphones',
	'Box of Chocolates',
	'Gift', 
	'Treasure Chest',
	'Balloons',
	'Key',
	'Pillow',
	'Map',
	'Yo-Yo',
	'Hammer',
	'Camera',
	'Vase',
	'Garden Hose',
	'Crowbar',
	'Knife',
	'Paper Bag',
	'Bandages',
	'Blanket'
];


function props() {
	"use strict";
	var randomNumber = Math.floor(Math.random() * (arrprops.length));
	document.getElementById('props').innerHTML = arrprops[randomNumber];
}
