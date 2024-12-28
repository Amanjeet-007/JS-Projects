const btn = document.getElementById("button");
const DisYear = document.querySelector(".years span");
const DisMonth = document.querySelector(".months span");
const DisDay = document.querySelector(".days span");
const Message = document.querySelector(".message");
const weeks = document.querySelector(".weeks span");
const totalDays = document.querySelector(".totalDay span");

btn.addEventListener("click", () => {
    const dateOfBirth = document.getElementById("date").value;

    if (dateOfBirth) {
        Message.innerText = "";

        // Date of birth and current date stored here
        const dob = new Date(dateOfBirth);
        const today = new Date();

        // Calculate years
        let years = today.getFullYear() - dob.getFullYear();

        // Calculate months and adjust years if necessary
        let months = today.getMonth() - dob.getMonth();
        if (months < 0) {
            years -= 1;
            months += 12;
        }

        // Calculate days and adjust months if necessary
        let days = today.getDate() - dob.getDate();
        if (days < 0) {
            months -= 1;
            if (months < 0) {
                years -= 1;
                months += 11; // Wrap around for year adjustment
            }
            // Get days in the previous month
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
        }

        // Calculate total weeks and days
        const totalDaysElapsed = Math.floor((today - dob) / (1000 * 60 * 60 * 24));
        const totalWeeksElapsed = Math.floor(totalDaysElapsed / 7);

        // Display all data
        DisYear.innerText = `${years}`;
        DisMonth.innerText = `${months}`;
        DisDay.innerText = `${days}`;
        weeks.innerText = `${totalWeeksElapsed}`;
        totalDays.innerText = `${totalDaysElapsed}`;
    } else {
        // If no input from user
        Message.innerText = "*Please Enter Your Date of Birth";
    }
});
