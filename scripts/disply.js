function displayRow{
    let table=document.getElementById("pets");
    let row="";
    //travel the array(for)
    //create the template
    row=`
    <tr>
        <td>${pets[1].name}<td>
        ${pets[1].age}
    </tr>
    `;
    //display the row on the html
    table.innerHTML=row;
}
