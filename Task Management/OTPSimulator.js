 //2.OTP Countdown Simulator (Console App)
        
      //  Simulate OTP sending flow in Node.js:
        
       // Show “OTP Sent Successfully”
        console.log("OTP sent succusfully")
       // Start 10-second countdown
        //Allow resend only after countdown ends
        let seconds=10
       let intervalid= setInterval(() => {
            seconds--;
            console.log(`resend OTP after ${seconds}`)
            if(seconds==0)
        {
            console.log("resend OTP")
            clearInterval(intervalid)
        }
        }, 1000);
