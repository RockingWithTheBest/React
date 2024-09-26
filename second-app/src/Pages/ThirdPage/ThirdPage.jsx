
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 const ThirdPage = () =>{
    return(
        <div>
        <h1>Pop - GeeksforGeeks</h1>
        <Popup trigger=
            {<button>Open Modal</button>} 
            modal nested>{
                close =>(
                    <div className="modal">
                        <div className="content">Welcome to GFG!! </div>
                        <div>
                            <button onClick = {() => close()}>Modal</button>
                        </div>
                    </div>
                )
            }
                
            </Popup>
    </div>
    )
    
}

export default ThirdPage;