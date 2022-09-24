import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";

const Feed = () => (
  <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box
      sx={{
        height: { sx: "auto", md: "92vh" },
        borderRight: "1px solid #3d3d3d",
        px: { sx: 0, md: 2 },
      }}
    >
      <SideBar />
      <Typography
        className="copyright"
        varient="body2"
        sx={{ mt: 1.5, color: "#fff" }}
      >
        Copyright 2022 Phone Khaing Hein
      </Typography>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          varient="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New
          <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
      </Box>
    </Box>
  </Stack>
);

export default Feed;
