import React from "react"

export default function Main(){
    return(
        <div className="body">
           <h1>Facts about React</h1>
             <ul className = "facts">
               <li><span>FaceBook-Created:</span> 
                    React, developed by Facebook in 2013, simplifies UI building.</li> 
                <li><span>Efficient Virtual DOM:</span>
                     React's virtual DOM optimizes rendering for performance.</li>
                <li><span>Reusable Components:</span> 
                     React's component-based approach promotes modular and reusable UI.</li>
                 <li><span>Strong Ecosystem, Community:</span> 
                     React has a thriving ecosystem and active community.</li>
                 <li><span>Unidirectional Data Flow:</span> React's data flows in a single direction, simplifying state management and debugging.</li>
             </ul>
         </div>
    )
}