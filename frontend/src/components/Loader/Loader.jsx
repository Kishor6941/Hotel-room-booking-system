import { useState } from "react";
import "./Loader.scss"
import { HashLoader } from "react-spinners";

const Loader = () =>  {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    
    return (
      <div style={{marginTop:"150px"}}>
        <div className="sweet-loading">
          <HashLoader
            color='#000'
            loading={loading}
            css=''
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  };

export default Loader