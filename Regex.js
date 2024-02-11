// let res1 = new RegExp('abc')
// console.log(res1.test("abc"))

// let res2 = /abc/.test("abc")
// console.log(res2)

// let res3 = /\d./.test("abc yerd")
// console.log(res3)

//  let res4 = /\d./.test("....hello")
//  console.log(res4)

//  let res5 = /\d./.test("t123happy")
//  console.log(res5)

// // //part 4
//  const set = /[0123456789]/.test("in 1992") 
//  console.log( set )

//  const set1 = /[012345678]/.test("in 99") 
//  console.log( set1 )

//  const set2 = /[012345678]/.test("in") 
//  console.log( set2 )

//  const set3 = /\d{3}/.test("3")
//  console.log(set3)

//  const set4 = /\d[3,]/.test("019")
//  console.log(set4)

//  const set5 = /\d[3,8]/.test("ade1bu6,90")
//  console.log(set5)

// //quantifiers (+)
 const set6 = /hello[0-9]+/.test("hi 0")
 console.log(set6)

 const set7 = /hello.[0-9]+/.test("hello 0")
 console.log(set7)

 const set8 = /hello[0-9]+/.test("hello12west")
 console.log(set8)

// //quantifiers (*)
 const set9 = /hello[0-9]*/.test("hello")
 console.log(set9)

 const set10 = /hello[0-9]*/.test("hello001")
 console.log(set10)

 const set11 = /\S@\S[0-9]?.\s/.test("hello001")
 console.log(set11)

 const set12 = /\S@\S[0-9]?.\S/.test("michael@john12ope")
 console.log(set12)

 const set13 = /^\S+@\S+\.?\S+$/.test("michael@gmail.com")
 console.log(set13)

// //exec
 let match = /\d+/.exec('one two 100')
 console.log(match)

 let match1 = /\d+/.exec('one two')
 console.log(match1)

 let match2 = /^\S+.\S+.\d+$/.exec("one two 10009")
 console.log(match2)