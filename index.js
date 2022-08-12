// Code your solution here
// findMatching()
// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match



// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']




// function findMatching(drivers, name){
    
//    return drivers.filter(function(drivers){
//       drivers.toLowerCase() === name.toLowerCase() 
        
//     });

function findMatching(drivers, string) {
    let answer = drivers.filter(drivers => drivers.toLowerCase() === string.toLowerCase())
    return answer

}

// fuzzyMatch()
// 1) returns a driver if beginning provided letters match
// 2) does not return drivers if only middle or ending letters match
// 3) does not return drivers if only middle or ending letters match

// expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);

function fuzzyMatch(drivers, string){
    let answer = drivers.filter(drivers => drivers.startsWith(string))
    return answer

}

// matchName()
// 1) accesses the data structure to check if name matches

// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' },
// ]

function matchName(driver, string){
    let answer = driver.filter(driver => driver.name === string)
    return answer

}