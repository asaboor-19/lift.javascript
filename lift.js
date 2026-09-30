function moveLift(floor) {

    let lift = document.getElementById("lift");

    if (floor == 0) {
        lift.style.bottom = "0px";
    }

    else if (floor == 1) {
        lift.style.bottom = "100px";
    }

    else if (floor == 2) {
        lift.style.bottom = "200px";
    }

    else if (floor == 3) {
        lift.style.bottom = "300px";
    }

    else if (floor == 4) {
        lift.style.bottom = "400px";
    }
}