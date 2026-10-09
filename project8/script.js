
const boxes = document.querySelectorAll("#box");
const selectBtn = document.querySelector("#select-all");
const deselectBtn = document.querySelector("#deselect-all");
const checkboxes = document.querySelectorAll(".check");

let lastChecked = null;

// Normal click on each box
boxes.forEach((box, index) => {
    box.addEventListener("click", (event) => {
        // If the user clicks the checkbox or label,
        // get its checkbox element
        const checkbox = box.querySelector(".check");

        // Shift + click feature
        if (event.shiftKey && lastChecked !== null) {
            const start = Math.min(lastChecked, index );
            const end = Math.max(  lastChecked,  index);
            
            console.log(start,end , lastChecked)
            // Select every checkbox between the two
            for (let i = start; i <= end; i++) {
                checkboxes[i].checked = true;
                boxes[i].classList.add("box-style");
            }
        } else {
            // Normal click behavior
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(
                new Event("change", { bubbles: true })
            );

        }

        // Remember the last clicked box
        lastChecked = index;
        
    });
});

// Keep box styling synchronized with checkbox state
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        boxes[index].classList.toggle("box-style",checkbox.checked);
    });
});




// Select all
selectBtn.addEventListener("click", () => {
    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = true;
        boxes[index].classList.add("box-style");
    });
});

// Deselect all
deselectBtn.addEventListener("click", () => {
    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = false;
        boxes[index].classList.remove("box-style");
    });

    lastChecked = null;
});


document.addEventListener("click", (event) => {
    if (event.shiftKey) {
        console.log("Shift is pressed!");
    } else {
        console.log("Shift is not pressed!");
    }
});