fetch('MOCK_DATA.json')
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let product of products){
        out+=`
        <tr>
            <td>${product.id}</td>
            <td>
                <div id="name-column" }>
                    <img src = "${product.img_src}">
                    <span>${product.first_name} ${product.last_name}</span>
                </div>
            </td>
            <td>${product.gender}</td>
            <td>${product.class}</td>
            <td>${product.marks}</td>
            <td>${product.passing}</td>
            <td>${product.email}</td>
            
        </tr>
        `
    }
    placeholder.innerHTML = out;
    const searchButton = document.getElementById('searchBtn')
    
    const searchBar = document.getElementById('searchBar');
    
    const table = document.getElementById('myTable');
    searchButton.addEventListener('click',function(){
        const searchTerm = searchBar.value.toLowerCase();
        const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        for(let i=0; i<rows.length; i++)
        {
            const row = rows[i];
            const name = row.getElementsByTagName('td')[1].textContent.toLowerCase();
            if(name.includes(searchTerm)){
                row.style.display = '';
            }
            else row.style.display = 'none';
        }
    });

    const sortBtn = document.getElementById('sortBtnAsc');
    sortBtn.addEventListener('click', function(){
        const rows = Array.from(document.getElementsByTagName('tbody')[0].getElementsByTagName('tr'));
        rows.sort((a, b) => {
            const marksA = a.getElementsByTagName('td')[4].textContent.toLowerCase();
            const marksB = b.getElementsByTagName('td')[4].textContent.toLowerCase();
            if (marksA < marksB) {
                return -1;
            }
            if (marksA > marksB) {
                return 1;
            }
            return 0;
        });
        rows.forEach(row => document.getElementsByTagName('tbody')[0].appendChild(row));
    });

    const sortBtnDesc = document.getElementById('sortBtnDesc');
    sortBtnDesc.addEventListener('click', function(){
        const rows = Array.from(document.getElementsByTagName('tbody')[0].getElementsByTagName('tr'));
        rows.sort((a, b) => {
            const nameA = a.getElementsByTagName('td')[1].textContent.toLowerCase();
            const nameB = b.getElementsByTagName('td')[1].textContent.toLowerCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        });
        rows.forEach(row => document.getElementsByTagName('tbody')[0].appendChild(row));
    });

    const sortBtnMarks = document.getElementById('sortBtnMarks');
    sortBtnMarks.addEventListener('click',function(){
        const rows = Array.from(table.getElementsByTagName('tbody')[0].getElementsByTagName('tr'));
        rows.sort((a,b)=>{
            const aMark = parseInt(a.getElementsByTagName('td')[3].textContent);
            const bMark = parseInt(b.getElementsByTagName('td')[3].textContent);
            if(aMark > bMark) return 1;
            if(bMark > aMark) return -1;
            else return 0;
        })
        table.innerHTML = '';
        rows.forEach(row => table.appendChild(row))
    })

    const sortPassing = document.getElementById('sortPassing');
    sortPassing.addEventListener('click',function(){
        const rows = Array.from(table.getElementsByTagName('tbody')[0].getElementsByTagName('tr'));
        rows.sort((a,b)=>{
            const aPass = a.getElementsByTagName('td')[3].textContent.toLowerCase();
            const bPass = b.getElementsByTagName('td')[3].textContent.toLowerCase();
            return aPass == "true" ? -1 : 1 ;
        });
        const passingRows = rows.filter(row => {
            const passing = row.getElementsByTagName('td')[3].textContent.toLowerCase();
            return passing == "true";
        });
        table.innerHTML = "";
        passingRows.forEach(row => table.appendChild(row));
    })
    
})

// <--------Code to search items while typing for later use--------------->
// const table = document.getElementById('myTable');
//     searchBar.addEventListener('input',function(){
//         const searchTerm = searchBar.value.toLowerCase();
//         const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//         for(let i=0; i<rows.length; i++)
//         {
//             const row = rows[i];
//             const name = row.getElementsByTagName('td')[1].textContent.toLowerCase();
//             if(name.includes(searchTerm)){
//                 row.style.display = '';
//             }
//             else row.style.display = 'none';
//         }
//     });
