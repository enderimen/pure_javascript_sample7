const person = [
	{name:'Ender',year:1995},
	{name:'Yasin',year:1998},
	{name:'Oğuzhan',year:1997},
	{name:'Muhammed',year:1994}
];

const comments = [
	{text:'Hello World',id:869645},
	{text:'JS is very enjoy',id:199812},
	{text:'Nice Nice Nice',id:193297},
	{text:'Enough',id:129934}
];

function log(foo) {
	console.log(foo);
}

const isAdult = person.some(person => (new Date()).getFullYear()) - person.year >= 18;

log({isAdult});


const allAdult = person.every(person => (new Date()).getFullYear()) - person.year >= 18;

log({isAdult});


const comment = comments.find(comment => comment.id === 869645);

log(comment);