// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function myClock(){
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();
    
    let formattedHour = currentHour < 10 ? `0${currentHour}` : currentHour;
    const formattedMinute = currentMinute < 10 ? `0${currentMinute}` : currentMinute;
    const formattedSecond = currentSecond < 10 ? `0${currentSecond}` : currentSecond;

    console.log(`${formattedHour}:${formattedMinute}:${formattedSecond}\n`);

    if (currentHour > 12) {
        currentHour -= 12;
        formattedHour = currentHour < 10 ? `0${currentHour}` : currentHour;

        console.log(`${formattedHour}:${formattedMinute}:${formattedSecond} PM\n`);
    } else {
        console.log(`${formattedHour}:${formattedMinute}:${formattedSecond} AM\n`);
    }
   
   
    // setTimeout(()=>{
    //     myClock();
    // }, 1000)
//when using setTimeout uncomment these

}


setInterval(() => {
    myClock();
    }, 1000)
//when using setInterval uncomment these


// myClock();   //setTimeout