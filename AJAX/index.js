
getCustomers();


function getCustomers(){
    $.ajax({
        url: "http://localhost:8080/api/customers",
        method: "GET",
        success: function(data) {
            /*
            Cach truyen thong
            let str = "";
            for(let i = 0; i< data.length;i++){
                str += `
                <tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].firstName}</td>
                    <td>${data[i].lastName}</td>
                    <td>Action</td>
                </tr>
                `
            }
            // document.getElementById("tb-customer").innerHTML = str;
            // $("#tb-customer").html(str)
            $("table > tbody").html(str)

             */

            let arrCustomers = data.map((c, i, arr)=>{
                return `
                <tr>
                <td>${c.id}</td>
                <td>${c.firstName}</td>
                <td>${c.lastName}</td>
                <td>
                    <a href="javascript:void(0)">Delete</a>
                    <a href="javascript:void(0)" onclick="handleUpdate()">Update</a>
                </td>
                </tr>
            `;
            })

            $("table > tbody").html(arrCustomers.join(""))
        },
        error: function(xhr, status, error) {
            // Xử lý lỗi
        }
    });
}

function handleUpdate(){

}
function handleShowFrmCreate(){
    $("form").show();
}
function handleFrmSave(){
    // document.getElementById("txtFirstName").value;
    let txtFirstName = $("#txtFirstName").val()
    let txtLastName = $("#txtLastName").val()
    $.ajax({
        url: "http://localhost:8080/api/customers",
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify({
            firstName : txtFirstName,
            lastName: txtLastName
        }),
        success: data =>{
            // getCustomers();
            let str = `
                <tr>
                    <td>${data.id}</td>
                    <td>${data.firstName}</td>
                    <td>${data.lastName}</td>
                    <td>Action</td>
                </tr>
                `
            $("#tb-customer").append(str);

        }
    })
}
