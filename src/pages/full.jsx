
import LevelCard from "../component/card";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Full() {

  return (
    <>
      <HelmetProvider>
        <div style={{ backgroundcolor: "#000" }}>
          <Helmet>
            <style>{"body { background-color: #000; }"}</style>
          </Helmet>
          <LevelCard />
        </div>
      </HelmetProvider>
    </>
  );
}

export default Full;
