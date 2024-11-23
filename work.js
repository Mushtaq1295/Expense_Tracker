document.addEventListener('DOMContentLoaded',function(){
    const E_name = document.getElementById("ename");
    const E_cost = document.getElementById("ecost");
    const End = document.getElementById('end');
    const Total = document.getElementById('total');
    const Work = document.querySelector('.workingDiv');

    let count = 0;

    document.getElementById('addBtn').addEventListener('click',function(){
        const name = E_name.value;
        const cost = parseFloat(E_cost.value.trim());

        if(name === '' || isNaN(cost)){
            alert('Provide Data');
            return;
        }
        const newItem = document.createElement('div');
        newItem.className = 'end';
        newItem.textContent = `${name}   $${cost}`;
        // Work.appendChild(newItem);



        const removeButton = document.createElement('button');
        removeButton.textContent = 'delete';
        removeButton.addEventListener('click', function () {
            Work.removeChild(newItem); // Remove the item div
            count -= cost; // Deduct the item's cost from the total
            Total.innerText = `$${count}`;
            if (count === 0) {
                Work.classList.add('hidden'); // Hide the container if no items are left
            }
        });

        newItem.appendChild(removeButton);
        Work.appendChild(newItem);
        Work.classList.remove('hidden');


        E_name.value = '';
        E_cost.value = '';
    
        
        count += cost;
        console.log(count)
        Total.innerText = `$${count}`
    })
})