import "./3d.css"
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function Threed (){
return(
    <>
          <HelmetProvider>
        <div style={{ backgroundcolor: "#013440"}}>
          <Helmet>
            <style>{"body { background-color: #013440"}</style>
          </Helmet>
          <div className="back">
    <div >
    <h2 className="name">A.A</h2>
    </div>
    </div>
          </div>
      </HelmetProvider>
        </>
)
}