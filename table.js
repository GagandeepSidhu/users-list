var LIST = [
    {"S.no.":"1","Name":"Gagan","Email":"gagan@gmail.com"},
    {"S.no":"2","Name":"Nipun","Email":"nipun@gmail.com"},
    {"S.no.":"3","Name":"Dikhit","Email":"dikshi@gmail.com"}
];


function buildTable(data) {

    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var headRow = document.createElement("tr");
    table.className="table";

    table.idName="myTable";
    ["S.no.","Name","Email"].forEach(function(value) {
        var th=document.createElement("th");
        th.appendChild(document.createTextNode(value));
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
    data.forEach(function(value) {
        var tr = document.createElement("tr");
        for (var i in value) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(value[i]));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    return table;
}

function fillValue(){
    var existingTable = document.getElementById("myTable");
    var newRow = existingTable.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(-1);
    var cell5 = newRow.insertCell(-1);
    var rowN = LIST.length+1;
    cell1.innerHTML = LIST.length + 1 ;
    cell2.innerHTML = document.getElementById("name").value;
    cell3.innerHTML = document.getElementById("emid").value;
    cell4.innerHTML = "<input id='delete_" +rowN + "' name='generate' type='button' value='Delete' onclick='deleteRow(this)'>";
    cell5.innerHTML = "<input id='edit_button' name='generate' type='button' value='Edit' onclick='updateRow()'>";
    LIST.push({"S.no.":LIST.length + 1,"Name":document.getElementById("name").value,"Email":document.getElementById("emid").value});
}


    function deleteRow(nbtn) {
        //  console.log(nbtn.id);
        var splitline = nbtn.id.split("_")[1];
        // console.log(splitline);
        var addTab = document.getElementById("myTable");
        addTab.deleteRow(nbtn.parentNode.parentNode.rowIndex);
        if (splitline) {
            LIST.splice(splitline - 1, 1);
        }
    }

        function updateRow() {
            var x = document.getElementById('myTable').rows;
            var y = x[4].cells;
            y[1].innerHTML = "hello ";
        }

        // function updateRow(y) {
        //     var name = document.getElementById("myTable"+y);
        //
        // }

window.onload=function() {
    document.getElementById("content").appendChild(buildTable(LIST));
}
