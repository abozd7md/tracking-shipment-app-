import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useEffect, useState } from "react";
import i18next from "i18next";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  const { i18n, t } = useTranslation(["nav"]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (localStorage.getItem("18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <nav
        className={
          localStorage.i18nextLng == "ar" ? "nav-container-ar" : "nav-container"
        }
      >
        <div
          className={
            localStorage.i18nextLng == "ar" ? "nav-list-ar" : "nav-list"
          }
        >
          <div className="bosta-logo">
            <img src={t("logo")} alt="LOGO" />
          </div>
          <ul>
            <li>{t("home")}</li>
            <li>{t("price")}</li>
            <li>{t("contactsales")}</li>
            <li>{t("careers")}</li>
          </ul>
        </div>
        {/* Nav List Elements End */}
        <div
          className={
            localStorage.i18nextLng == "ar"
              ? "user-information-ar"
              : "user-information"
          }
        >
          <div>
            <h3>{t("trackingshipment")}</h3>
          </div>
          <div>
            <h3>{t("signin")}</h3>
          </div>
          <div className="mini-menu">
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="error"
              variant="contained"
            >
              <MenuIcon />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>{t("home")}</MenuItem>
              <MenuItem onClick={handleClose}>{t("price")}</MenuItem>
              <MenuItem onClick={handleClose}>{t("contactsales")}</MenuItem>
              <MenuItem onClick={handleClose}>{t("careers")}</MenuItem>
            </Menu>
          </div>
          <div className="lang">
            <select
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLangChange}
            >
              <option value="ar">عربي</option>
              <option value="en">Eng</option>
            </select>
          </div>
        </div>
        {/*User-Information div end */}
      </nav>
    </div>
  );
}

export default Nav;
