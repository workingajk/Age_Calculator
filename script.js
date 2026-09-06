function calc() {
    let name = document.getElementById("name");
    let date = document.getElementById("date");
    let result = document.getElementById("result");
    console.log(name.value);
    console.log(date.value);
    let dob = new Date(date.value);
    let now = new Date();
    let weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    // console.log(dob.getUTCDay);

    console.log(dob);
    let year = now.getFullYear() - dob.getFullYear();
    let month = now.getMonth() - dob.getMonth();
    let day = now.getDate() - dob.getDate();

    if (day < 0) {
        month--;

        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);

        day += previousMonth.getDate();
    }

    if (month < 0) {
        year--;
        month += 12;
    }

    let nextBday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());

    if (nextBday < now) {
        nextBday.setFullYear(now.getFullYear()+1)
    }

    const msInDay = 24 * 60 *60 * 1000

    const daysUntilBday = Math.ceil(
        (nextBday - now)/ msInDay
    )

    result.innerHTML = `
    <h2 class="text-center font-semibold">Hello ${name.value}</h2>
                <p>You are <span class="font-semibold"> ${year} years, ${month} months, ${day} days </span> old.</p>
                <p>Your were born on a ${weekdays[dob.getDay()]}</p>
                <p>Your next birhtday is in ${daysUntilBday} days</p>
    `;
}
