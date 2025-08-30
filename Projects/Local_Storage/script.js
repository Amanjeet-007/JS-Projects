const btn = document.getElementById("add");
const input = document.querySelector("input");
const list = document.querySelector(".li")
const all_btn = document.getElementById("clear")
const message = document.querySelector(".massage")

// localhost methods session storage (5mb)
// > localStorage.setItem()
// > localStorage.getItem()
// > localStorage.removeItem()
// > localStorage.updateIteam()

// Show tasks
function show() {
    list.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        if (!key) continue;
        list.innerHTML += `
        <li data-key="${key}">
            <div class="text">${value}</div>
            <button class="delete">Delete</button>
        </li>`;
    }

    // attach delete listeners to each button
    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach(el => {
        el.addEventListener("click", () => {
            const item = el.parentElement;
            const key = item.getAttribute("data-key");
            localStorage.removeItem(key);
            show(); // refresh after delete
        });
    });
}

// Add task
function add() {
    if (!input.value) {
        message.innerText = "* Please Add Text (content).";
    } else {
        message.innerText = "";
        localStorage.setItem(Date.now(), input.value); // unique key
        input.value = ""; // clear input
        show();
    }
}

// Delete all tasks
function all_delete() {
    localStorage.clear();
    list.innerHTML = "";
}

// Main function
function main() {
    show(); 
    btn.addEventListener("click", add);
    all_btn.addEventListener("click", all_delete);
}

main();
