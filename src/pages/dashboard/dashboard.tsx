import DataForm from "../../Components/dashboard/dataForm";
import Navbar from "../../layouts/navbar";

function Dashboard() {
    return ( <>
        <Navbar />
        <div className="h-20"></div>
        <DataForm/>
    </> );
}

export default Dashboard;