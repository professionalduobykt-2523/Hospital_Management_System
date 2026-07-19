const btn = document.querySelector('#submit');
const tbody = document.querySelector('#patientTableBody');
const form = document.querySelector('#patientForm');



//Store Data in mongoDB


btn.addEventListener('click', async () => {
    
    let Name = document.querySelector('#name').value;
    let Age = document.querySelector('#age').value;
    let Disease = document.querySelector('#disease').value;

    if (!Name || !Age || !Disease) {
        alert("Please, Fill Name , Age and Disease field");
        return;
    }

    const orignalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
    btn.disabled = true;


    try {
        const data = await fetch("/record", {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ Name, Age, Disease })
        });

        if(data.ok){
            btn.innerHTML = orignalText;
            btn.disabled = false;
            alert("Data Successfully Added");
            fetchrecord();
            form.reset();
        }
    }
    catch (error) {
        console.log(error);
    }

});


// Fetch Data to the Server and Display 


async function fetchrecord() {


    tbody.innerHTML = "";
    try {
        const res = await fetch("/record");
        const record = await res.json();

        record.forEach((i) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
                <td>#   ${i._id.substring(0,6)}</td>
                <td><i class="fa-regular fa-circle-user" style="margin-left: 5px"></i>    ${i.Name}</td>
                <td>${i.Age}</td>
                <td>${i.Disease}</td>
                <td>${new Date(i.date).toLocaleDateString()}</td>
                <td><button class = "btn-delete" onclick = "DeleteByid('${i._id}')">Delete</button></td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.log(error);
    }
};

fetchrecord();


//Delete Data 



async function DeleteByid(id) {
    try {
        const response = await fetch(`/record/delete/${id}`, {
            method: 'DELETE'
        });

        const result = await response.json();
        alert(result.message);

        tbody.innerHTML = "";
        fetchrecord();

    } catch (error) {
        console.log(error);
    }
}




























