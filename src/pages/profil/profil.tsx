import DataForm from "../../Components/profil/dataForm";
import MesPublication from "../../Components/profil/mesPublication";
import Navbar from "../../layouts/navbar";

function Profil() {
  return (
    <>
      <Navbar />
      <div className="h-25"></div>
      <DataForm />
      <MesPublication />
    </>
  );
}

export default Profil;