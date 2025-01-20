import React from "react";
import { Box } from "@mui/material";

const VerticalSpacer = ({ height = "50px" }) => {
  return <Box sx={{ display: "block", height }} />;
};

export default VerticalSpacer;
