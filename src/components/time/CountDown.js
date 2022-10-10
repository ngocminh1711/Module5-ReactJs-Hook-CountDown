import {useEffect, useState} from "react";


function CountDown () {
    const [time, setTime] = useState(10)



    useEffect(()=> {
     const myTimeOut =  setTimeout(()=> {
            setTime(time - 1 )
        }, 1000)

        return () => {
            if ( time === 1 ) {
                clearTimeout(myTimeOut)
                alert('time out')
                setTime(10)
            }
            console.log(time)
        }

    })


    return (
        <div>
            <p>Count down from { time }</p>
        </div>
    )



}
export default CountDown;