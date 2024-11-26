import Education from "./education";
import Practical from "./practical";
import GeneralInfo from "./generalInfo";

function Cv() {
  return (
    <>
      <h1>Odin CV</h1>
      <GeneralInfo />
      <Education />
      <Practical />
    </>
  );
}

export default Cv;
