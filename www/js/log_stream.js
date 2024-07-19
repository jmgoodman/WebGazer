var eyeLogger = async function(data, clock) {
    if(!data)
        return;
    var logstring = `x: ${data.x}; y: ${data.y}; elapsedTime: ${clock}`;
    console.log(logstring);
}

webgazer.setGazeListener(eyeLogger).begin();


