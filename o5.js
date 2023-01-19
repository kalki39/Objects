let obj = {
    a: 1,
    b: 2,
    c: 3,
}


// add some values: 

// obj.z = 10

// obj["hello world"] = 100


// console.log(obj)

// lets take two batt and ball 

let bat = {
    "height": 3,
    "weight": 200,
}

let ball = {
    "color": "white",
    "shape": "circle",
}


let cricket = {}

for(let t1 in bat){
    cricket[t1] = bat[t1]
    // console.log(t1, bat[t1])
}

for(let t2 in ball){
    cricket[t2] = ball[t2]
}

console.log(cricket)