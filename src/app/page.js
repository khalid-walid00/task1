import Image from "next/image";
import Firstfunction from "./componants/firstfunction";
import Secoundfunction from "./componants/secoundfunction";
import ThirdFunction from "./componants/thirdFunction";
import Function4 from "./componants/Function4";
import Function5Map from "./componants/Function5/Function5Map";
import Function6 from "./componants/function6";
import Function7 from "./componants/Function7";
import Function8 from "./componants/Function8/Function8";
import Footer from "./componants/Footer";

export default function Home() {
  return (

<>
<div className=" bg-white overflow-x-hidden">
 <Firstfunction/>
 <Secoundfunction/>
 <ThirdFunction/>
 <Function4/>
 <Function5Map/>
 <Function6/>
 <Function5Map/>
 <Function7/>
 <Function8/>
  <Footer/>
</div>
</>
  );
}
