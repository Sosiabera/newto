
import LevelCard from "../component/card";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Full() {

  return (
    <>
      <HelmetProvider>
        <div style={{ backgroundcolor: "#5e787d" }}>
          <Helmet>
            <style>{"body { background-color: #5e787d; }"}</style>
          </Helmet>
          <LevelCard />
        </div>
      </HelmetProvider>
    </>
  );
}

export default Full;
