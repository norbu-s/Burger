// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

    if (changeSleepBtns) {
      changeSleepBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newSleep = e.target.getAttribute('data-newsleep');
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            body: JSON.stringify(newSleepState),
          }).then((response) => {

            if (response.ok) {
              console.log(`new burger added: ${newBurger}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    const createCatBtn = document.getElementById('create-form');
  
    if (createCatBtn) {
      createCatBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const newBurger = {
          name: document.getElementById('bu').value.trim(),
        };

        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById('ca').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Created a new cat!');
          location.reload();
        });
      });
    }
  
    // DELETE
    const deleteCatBtns = document.querySelectorAll('.devour');
  
    // Set up the event listeners for each delete button
    deleteCatBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
  
        // Send the delete request
        fetch(`/api/burgers/${id}`, {
          method: 'DELETE',
        }).then((res) => {
          console.log(res);
          console.log(`Devoured: ${id}`);
  
          // Reload the page
          location.reload();
        });
      });
    });
  });
  