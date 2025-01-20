import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const FilterMenu = ({ open, handleClose, filters, setFilters }) => {
  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [value]: !prevFilters[category][value],
      },
    }));
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Filter Menu
        </Typography>
        {/* Year Filter */}
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Year
        </Typography>
        <FormGroup>
          {Object.keys(filters.year).map((year) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.year[year]}
                  onChange={() => handleCheckboxChange("year", year)}
                />
              }
              label={year}
              key={year}
            />
          ))}
        </FormGroup>

        {/* Type Filter */}
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Type
        </Typography>
        <FormGroup>
          {Object.keys(filters.type).map((type) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.type[type]}
                  onChange={() => handleCheckboxChange("type", type)}
                />
              }
              label={type}
              key={type}
            />
          ))}
        </FormGroup>

        {/* Context Filter */}
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Context
        </Typography>
        <FormGroup>
          {Object.keys(filters.context).map((context) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.context[context]}
                  onChange={() => handleCheckboxChange("context", context)}
                />
              }
              label={context}
              key={context}
            />
          ))}
        </FormGroup>

        {/* Languages Filter */}
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Languages
        </Typography>
        <FormGroup>
          {Object.keys(filters.languages).map((language) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.languages[language]}
                  onChange={() => handleCheckboxChange("languages", language)}
                />
              }
              label={language}
              key={language}
            />
          ))}
        </FormGroup>

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          fullWidth
          onClick={handleClose}
        >
          Apply Filters
        </Button>
      </Box>
    </Modal>
  );
};

export default FilterMenu;
