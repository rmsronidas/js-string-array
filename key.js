
const bottle ={
    brand: 'apple',
    price: 45,
    color: 'white',
    isClean: false

}
const values =Object.values(bottle);
console.log(values);

const subject={
    name: 'biology',
    teachar:'rasheda mam',
    exam_date: '30 Feb',
    chapters: ['first','secound','third']
}

const keys =Object.keys(subject);
console.log(keys);

const college={
    name: 'vnc',
    class:['11','12'],
    events:['science_fair','Bijoy_Dibos','21Feb'],
    unique:{
        color: 'blue',
        result:{
            gpa:'5',
            merit: 'top'
        }
    }

}

console.log(college.unique)