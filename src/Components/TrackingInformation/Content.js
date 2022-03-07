import React, { useState } from "react";
import TrackForm from "../TrackingShipment/TrackForm";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18next from "i18next";

function Content({ data }) {
  const { i18n, t } = useTranslation(["content"]);
  const [nextSearch, setNextSearch] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  console.log(data);
  console.log(localStorage);

  return (
    <div
      className={
        localStorage.i18nextLng == "ar" ? "main-content-ar" : "main-content"
      }
    >
      <div className="left-side">
        <div className="shipment-number">
          <h3>
            {t("shipmentnumber")}
            {data.TrackingNumber}
          </h3>
        </div>
        <div className="shipment-status">
          <h1
            style={{ fontWeight: "bold" }}
            className={
              data.CurrentStatus.state === "DELIVERED" ? "green" : "red"
            }
          >{`${t("deliverstate")}`}</h1>
          <div className="shipment-info">
            <p>
              {t("date")} : {`${data.CurrentStatus.timestamp.slice(0, 10)}`}
            </p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <TrackForm />
      </div>
      <div className="grid-info">
        <div>
          <h1 style={{ textAlign: "center" }}>{t("track")}</h1>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{t("datenumber")}</TableCell>
                <TableCell align="right">{t("time")}</TableCell>
                <TableCell align="right">{t("activity")}</TableCell>
                <TableCell align="right">{t("hub")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.TransitEvents.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.timestamp.slice(0, 10)}
                  </TableCell>
                  <TableCell align="right">
                    {row.timestamp.slice(11, 19)}
                  </TableCell>
                  <TableCell align="right">{row.state}</TableCell>
                  <TableCell align="right">{row.hub}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Content;
