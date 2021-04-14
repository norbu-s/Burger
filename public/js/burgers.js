// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
    if (event) {
        console.info("DOM loaded");
    }

    const changeBurgerBtns = document.querySelectorAll(".change-burger");

    if (changeBurgerBtns) {
        changeBurgerBtns.forEach((button) => {
            button.addEventListener("click", (e) => {
                // Grabs the id of the element that goes by the name, "id"
                const id = e.target.getAttribute("data-id");
                const newSleep = e.target.getAttribute("data-newburger");

                const newBurgerName = {
                    name: newName,
                };

                fetch(`/burgers/${id}`, {
                    method: "PUT",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(newBurgerName),
                }).then((response) => {
                    if (response.ok) {
                        console.log(`new burger added: ${newBurger}`);
                        location.reload("/");
                    } else {
                        alert("something went wrong!");
                    }
                });
            });
        });
    }

    const submitForm = document.getElementById("createBurgers");

    submitForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const burgerName = document.getElementById("burgerName").value.trim();
        if (burgerName === "") {
            return;
        }
        const newBurger = {
            burger_name: burgerName,
        };

        fetch("/add", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBurger),
        }).then(() => {
            document.getElementById("burgerName").value = "";
            location.reload("");
        });
    });

    const devourBtn = document.querySelectorAll(".devour-button");

    devourBtn.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            const dataId = e.target.getAttribute("data-id");
            const id = parseInt(dataId);

            const devouredTrue = {
                devoured: true,
            };

            fetch(`/devour/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(devouredTrue),
            }).then((response) => {
                if (response.ok) {
                    location.reload("");
                } else {
                    alert("Oops, something went wrong!");
                }
            });
        });
    });
});