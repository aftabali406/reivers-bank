// fetching users from database
fetch('http://localhost:3001/getUsers')
     .then(res => res.json())
     .then(data => loadHTMLTable(data))
    

function loadHTMLTable(data){
    const table = document.querySelector('table tbody');
    let tableHTML = "";
    data.forEach(function ({id,username,gender,account_no,balance}){
        tableHTML += "<tr>";
        tableHTML += `<td>${id}</td>`
        tableHTML += `<td>${username}</td>`
        tableHTML += `<td>${gender}</td>`
        tableHTML += `<td>${account_no}</td>`
        tableHTML += `<td><p class="balance">₹${balance}.00</p></td>`
        tableHTML += "</tr>";
    });
    table.innerHTML = tableHTML;

}

// Modal logic
const btnTransfer = document.querySelector('.transfer-btn');
const modalbg = document.querySelector('.modal-bg');
const modalclose = document.querySelector('.modal-close');


btnTransfer.addEventListener('click',function(){
modalbg.classList.add('bg-active');
});
modalclose.addEventListener('click',function(){
    modalbg.classList.remove('bg-active');
    });



    