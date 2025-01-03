import Navbar from "@/components/Layouts/Navbar";
import { Box } from "@mui/material";

export default function Home() {

  return (
    <Box className="flex justify-center h-screen">
      <Box className="max-w-full w-full">
        <Navbar />
        <Box className="p-4 box-border border border-green-300">
          <aside>
            <h1>Music Player</h1>
          </aside>
        </Box>
      </Box>
    </Box>
  );
}
