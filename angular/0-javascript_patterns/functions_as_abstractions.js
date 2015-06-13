function work() {
    console.log("Doing work");
}

function dowork(f) {
    console.log("About to start work");
    try {
        f();
    }
    catch (ex) {
        console.log(ex);
    }
    console.log("Ending work");
}
dowork(work);
