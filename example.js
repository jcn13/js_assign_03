let dayTime = 'Morning'
function greetings(name){
	return function(timeSets){
		let phrase = (`Good ${timeSets} ${name}!`)
		return phrase
	}
}
let morning = greetings('Joao')
console.log(morning(dayTime))
// Good Morning Joao!

let evening = greetings('Thalita')
console.log(evening(dayTime = 'Evening'))
// Good Evening Thalita!