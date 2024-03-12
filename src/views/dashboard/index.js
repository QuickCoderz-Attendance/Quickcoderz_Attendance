import { Box } from "@mui/material"
import Sidebar from "./layouts/sidebar"
import Footer from "./layouts/footer"

const Dashboard = () => {

    return(
      <Box className="page-wrapper">
        <Sidebar />
        <Footer />
      </Box>
    )
}

export default Dashboard