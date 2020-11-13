console.log('Запрос на сервер...');
//resolve
const p = new Promise(function(resolve, reject){
    setTimeout(() => {
    console.log('Подготовка данных...');
    const dataObj = {
        name: 'Денис',
        age: 19,
        sayHello: function(){
            console.log('Привет');
        }
    }
    resolve(dataObj)
}, 2000)
})


p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.work = 'Web developer'
            data.homeAnimal = 'Dog'
            resolve(data)
        })
    })
})
.then(clientData => {
    clientData.salary = 5000
    return clientData
})
.then(newData => {
    console.log(`Данные получены ${JSON.stringify(newData)}`);
})

//reject
console.log('Запрос на сервер...');

const p = new Promise(function(resolve, reject){
    setTimeout(() => {
    console.log('Подготовка данных...');
    const dataObj = {
        name: 'Денис',
        age: 19,
        sayHello: function(){
            console.log('Привет');
        }
    }
    resolve(dataObj)
}, 2000)
})


p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.work = 'Web developer'
            data.homeAnimal = 'Dog'
            reject(data)
        })
    })
})
.then(clientData => {
    clientData.salary = 5000
    return clientData
})
.then(newData => {
    console.log(`Данные получены ${JSON.stringify(newData)}`);
})
.catch(()=>{
    console.error('У нас произошла ошибка')
})
.finally(()=> {
    console.log('Покедова');
})

//функции all и race

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}

test(1000)
.then(()=>{
    console.log(`1s задержки`);
})


Promise.all([test(1000), test(2000)])
.then(()=>{
    console.log('ALL');
})

Promise.race([test(1000), test(5000)])
.then(()=>{
    console.log('race');
})