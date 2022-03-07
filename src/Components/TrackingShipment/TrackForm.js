import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Content from "../TrackingInformation/Content";
import { formLabelClasses } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function TrackForm() {
  const { i18n, t } = useTranslation(["trackform"]);

  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [shipmentValues, setShipmentValues] = useState();
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    setIsLoading(true);
    fetch(`https://tracking.bosta.co/shipments/track/${inputValue}`)
      .then((user) => user.json())
      .then((data) => {
        setShipmentValues(data);
      });
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="error" />
      </Box>
    );
  }
  if (!isLoading && shipmentValues) {
    return <Content data={shipmentValues} />;
  }

  return (
    <div className="track-center">
      <form className="track-form">
        <div>
          <input
            type="text"
            placeholder={t("placeholder")}
            value={inputValue}
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        <div>
          <SearchIcon
            style={{ color: "red" }}
            className="search-icon"
            onClick={handleClick}
          />
        </div>
      </form>
    </div>
  );
}

export default TrackForm;
