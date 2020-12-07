import React from 'react'
import { IncomingMessage } from './IncomingMessage'
import { OutogoingMessage } from './OutogoingMessage'
import { SendMessage } from './SendMessage'

export const Messages = () => {
    
    const msgs = [1,2,3,4,5,6,7,8,9]
    return (
        
        <div className="mesgs">

        {/* <!-- Historia inicio --> */}
        <div className="msg_history">


            {
                msgs.map( msg => (
                   (msg % 2 )
                   ? <IncomingMessage key={ msg }/>
                   : <OutogoingMessage key={ msg }/>
                ))
            }
           

           

            

        </div>
        {/* <!-- Historia Fin --> */}

       <SendMessage />

    </div>
    )
}
