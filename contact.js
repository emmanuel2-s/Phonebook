
let selectedRow = null;

document.addEventListener('DOMContentLoaded', getOutputs);

function onFormSubmit() {
    let data = showData();

    if (selectedRow === null) {
        newRow(data);
        storeInputTaskInLocalStorage(data);
    }

};


function myFunction() {
    document.getElementById('hide').style.display = 'block'
};


// const inp = document.getElementById('fname'),
//       phone =document.getElementById('number')
//       email =document.getElementById('FEmail')
//       relate =document.getElementById('relation');




function showData() {
    let data = {};
    data['Name'] = document.getElementById("fname").value;
    data['phone'] = document.getElementById("number").value;
    data['Email'] = document.getElementById("fEmail").value;
    data['Relationship'] = document.getElementById("relation").value;
    console.log(data);
    return data;

};

function newRow() {

    var table = document.getElementById('tb-con');
    var newRow = table.insertRow(table.length);
    var Name = newRow.insertCell(0);
    Name.innerHTML = document.getElementById('fname').value;
    var number = newRow.insertCell(1);
    number.innerHTML = document.getElementById('number').value;
    var Email = newRow.insertCell(2);
    Email.innerHTML = document.getElementById('fEmail').value;
    var relation = newRow.insertCell(3);
    relation.innerHTML = document.getElementById('relation').value;

    console.log(newRow)
}


function storeInputTaskInLocalStorage(data) {
    let contacts = JSON.parse(localStorage.getItem('contacts'))
    if (contacts === null) {
        contacts = [];
        contacts.push(data);
        localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
        const exists = contacts.find(x => x.Name === data.Name && x.Email === data.Email);
        if (exists) {
            return alert('Name and Email already exists.');

        } else {
            contacts.push(data);
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
    }
};


function getOutputs() {
    let contacts;
    if (localStorage.getItem('contacts') === null) {
        contacts = [];
    } else {
        contacts = JSON.parse(localStorage.getItem('contacts'));
    }

    contacts.forEach(function (data) {

        var table = document.getElementById('tdy');
        var newRow = table.insertRow(table.length);
        var Name = newRow.insertCell(0);
        Name.innerHTML = data?.Name;
        var phone = newRow.insertCell(1);
        phone.innerHTML = data?.phone;
        var Email = newRow.insertCell(2);
        Email.innerHTML = data?.Email;
        var Relationship = newRow.insertCell(3);
        Relationship.innerHTML = data?.Relationship

        console.log({ data });
        return data;
    }
    )
};

document.addEventListener('submit', onclick, function(){
    document.getElementById('tb-con').style.display = 'block'
})