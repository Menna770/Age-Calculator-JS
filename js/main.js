let today = new Date(),
    currentDay = today.getDate(),
    currentMonth = today.getMonth() + 1,
    currentYear = today.getFullYear(),
    
    yourBirthDay = document.getElementById("yourBirthDay"),
    yourBirthMonth = document.getElementById("yourBirthMonth"),
    yourBirthYear = document.getElementById("yourBirthYear"),
    selectedYear = today.getFullYear();

    calculateBtn = document.getElementById("calculate"),
    printAge = document.getElementById("printAge"),

    selectOptionD = 0,
    selectOptionY = 0,
    ageDays = 0,
    ageMonth = 0,
    ageYear = 0;


    // Select Year Options Genertor:
    for(let i = selectedYear - 121 ; i <= selectedYear ; i++) {
        selectOptionY = document.createElement("option");
        selectOptionY.value = selectOptionY.innerHTML = i;
        yourBirthYear.appendChild(selectOptionY);
        if(i == selectedYear) {
            selectOptionY.selected = true
        }
    }

    // Select Day Options Genertor:
    for( let i = 1 ; i <= 31 ; i++) {
        selectOptionD = document.createElement("option");
        selectOptionD.value = selectOptionD.innerHTML = i;
        yourBirthDay.appendChild(selectOptionD);
    }


    // Age Calculator Function:
    calculateBtn.addEventListener("click", (day,month,year) => {

        day = yourBirthDay.value,
        month = yourBirthMonth.value,
        year = yourBirthYear.value;

        // Days Conditions:
        if(currentDay < day)
        {
            ageDays = (currentDay  + 30) - day;
            currentMonth = currentMonth - 1;
        }

        else {
            ageDays = currentDay - day;
        };


        // Month Conditions:
        if(currentMonth < month)
        {
            ageMonth = (currentMonth  + 12) - month;
            currentYear = currentYear - 1;
        }

        else {
            ageMonth = currentMonth - month;
        };

        // Years Conditions:
        ageYear = currentYear - year;


        printAge.innerHTML = `Your Age is<br>
                            <span class="age">${ageYear}</span> Years
                            <span class="age">${ageMonth}</span> Months
                            <span class="age">${ageDays}</span> Days`;

        // Reset:
        currentDay = today.getDate();
        currentMonth = today.getMonth() + 1;
        currentYear = today.getFullYear();
    })