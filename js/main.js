let yourDay = document.getElementById("yourDay"),
    yourMonth = document.getElementById("yourMonth"),
    yourYear = document.getElementById("yourYear"),
    
    today = new Date(),
    currentDay = today.getDate(),
    currentMonth = today.getMonth() + 1,
    currentYear = today.getFullYear(),

    ageDays = 0,
    ageMonth = 0,
    ageYear = 0,
    
    calculateBtn = document.getElementById("calculate"),
    printAge = document.getElementById("printAge"),
    
    selectY = document.getElementById("selectY"),
    selectYear = today.getFullYear();

    selectM = document.getElementById("selectM"),
    selectMonth = today.getMonth();

    selectD = document.getElementById("selectD"),
    selectDay = today.getDate(),

    selectOptionD = 0,
    selectOptionY = 0;


    //Select Year Options Genertor:
    for( let i = selectYear - 121; i <= selectYear; i++) {
        selectOptionY = document.createElement("option");
        selectOptionY.value = selectOptionY.innerHTML = i;
        selectY.appendChild(selectOptionY);
        if(i == selectYear) {
            selectOptionY.selected = true
        }
    }

    //Select Day Options Genertor:
    for( let i = 1 ; i <= 31 ; i++) {
        selectOptionD = document.createElement("option");
        selectOptionD.value = selectOptionD.innerHTML = i;
        selectD.appendChild(selectOptionD);
    }


    //Calculate Function:
    calculateBtn.addEventListener("click", (day,month,year) => {

        day = selectD.value,
        month = selectM.value,
        year = selectY.value;

        //Days Conditions:
        if(currentDay < day)
        {
            ageDays = (currentDay  + 30) - day;
            currentMonth = currentMonth - 1;
        }

        else {
            ageDays = currentDay - day;
        };

        //Month Conditions:
        if(currentMonth < month)
        {
            ageMonth = (currentMonth  + 12) - month;
            currentYear = currentYear - 1;
        }

        else {
            ageMonth = currentMonth - month;
        };

        //Years:
        ageYear = currentYear - year;

        printAge.innerHTML = `Your Age is<br>
                            <span class="age">${ageYear}</span> Years
                            <span class="age">${ageMonth}</span> Months
                            <span class="age">${ageDays}</span> Days`;

        //Reset:
        currentDay = today.getDate();
        currentMonth = today.getMonth() + 1;
        currentYear = today.getFullYear();
    })