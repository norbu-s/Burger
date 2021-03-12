// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

    const changeBurgerBtns = document.querySelectorAll('.change-burger');


    if (changeBurgerBtns) {
      changeBurgerBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newSleep = e.target.getAttribute('data-newburger');

          const newBurgerName= {
            name: newName,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            body: JSON.stringify(newBurgerName),
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
  
    const createBurgerBtn = document.getElementById('create-form');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const newBurger = {
          name: document.getElementById('bu').value.trim()
        };

        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          body: JSON.stringify(newBurger),
        }).then(() => {
          document.getElementById('bu').value = '';
  
          
          console.log('Burger Added!');
          location.reload();
        });
      });
    }
  
    const deleteBurgerButton = document.querySelectorAll('.devour');
  
    deleteBurgerButton.forEach((button) => {
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
  