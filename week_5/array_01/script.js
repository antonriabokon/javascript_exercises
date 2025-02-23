
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

teamMembers.forEach(member => console.log(member));

teamMembers.shift();
console.log(teamMembers); 

teamMembers.pop();
console.log(teamMembers); 

teamMembers.unshift('Alex');
console.log(teamMembers); 

teamMembers.push('Linda');
console.log(teamMembers); 

let newTeamMembers = teamMembers.slice(2);
console.log(newTeamMembers); 

let mikeIndex = teamMembers.indexOf('Mike');
console.log(mikeIndex); 

let jakeIndex = teamMembers.indexOf('Jake');
console.log(jakeIndex); 

teamMembers.splice(mikeIndex, 1, 'Carol', 'Bruce');
console.log(teamMembers);

let updatedTeam = teamMembers.concat('Bob');
console.log(updatedTeam); 
console.log(teamMembers); 

let copiedTeam = teamMembers.slice();
console.log(copiedTeam); 

let newMembers = ['Tina', 'Dean'];
let mergedTeam = teamMembers.concat(newMembers);
console.log(mergedTeam); 


teamMembers.forEach((member, index) => {
  if (member === 'John') {
    johnPositions.push(index);
  }
});
console.log(johnPositions);

let uppercaseTeam = teamMembers.map(member => member.toUpperCase());
console.log(uppercaseTeam); 

teamMembers.sort();
console.log(teamMembers); 


teamMembers.reverse();
console.log(teamMembers); 


let hasJohn = teamMembers.includes('John');
console.log(hasJohn); 


let allMoreThanThree = teamMembers.every(member => member.length > 3);
console.log(allMoreThanThree); 