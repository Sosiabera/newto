

import Arrow from "../component/arrow";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Full() {

  return (
    <>
      <HelmetProvider>
        <div style={{ backgroundcolor: "#000" }}>
          <Helmet>
            <style>{"body { background-color: #000; }"}</style>
          </Helmet>
          <Arrow />
        </div>
      </HelmetProvider>
    </>
  );
}

export default Full;
