import { Routes, Route} from "react-router-dom";
import Projects from "../views/pages/admin/projects";
import Home from "../views/pages/admin/Home/index"
import AddEmployee from "../views/pages/admin/Employees/addEmployee";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/employee" element={<AddEmployee />} />
    </Routes> 
  )
}

export default AllRoutes