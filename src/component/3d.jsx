import "./3d.css"
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function Threed (){
return(
    <>
          <HelmetProvider>
        <div style={{ backgroundcolor: "#013440",maxwidth: "max-content",}}>
          <Helmet>
            <style>{"body { background-color: #013440"}</style>
          </Helmet>
          
          <div className="container text-center  back">
    
      <div className="parent">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L0,96L1440,96L1440,320L0,320L0,320Z"></path></svg>
      </div>
      <div className="parentf">
      </div>
      <div className="parents">
      </div>
      <div className="parentt">
      </div>
      <div className="parentfo">
      </div>
      <div className="row">
      <div className="col first">
    <h2 className="name first">አዲስ አበባ</h2>
    </div>
    <div className="col">
    <h2 className="name second">ባህር ዳር</h2>
  </div>
  <div class="col ">
    <h2 className="name third">መቐለ</h2>
    </div>
  <div class="col ">
    <h2 className="name fourth">አፋር</h2>
    </div>
    <div className="col">

    <h2 className="name  fifth">ድሬዳዋ</h2>
    </div>
    <div className="col">

<h2 className="name  sixth">ሀረር</h2>
</div>
    <div className="col">

<h2 className="name  seventh">አዳማ</h2>
</div>
    <div className="col">

<h2 className="name  eigth">ጂጂጋ</h2>
</div>
 
    </div>
    </div>
          </div>
      </HelmetProvider>
        </>
)
}