import React, { useState } from "react";
import Style from "./PageSidebar.styles";
import {
  GophieLogo,
  MovieReel,
  MusicNotes,
  ExpandIcon,
  CollapseIcon,
  GoToIcon,
} from "../../utils/icons";
import { Link, useLocation } from "react-router-dom";

const PageSidebar = (props) => {
  let pathname = window.location.pathname;
  const [isMovieDropdown, setMovieDropdown] = useState(false);
  const location = useLocation();

  const handleMovieDropdown = () => {
    setMovieDropdown(!isMovieDropdown);
  };

  return (
    <Style.Sidebar>
      <Style.Sidebar__Logo>
        <GophieLogo />
      </Style.Sidebar__Logo>

      <Style.Sidebar__Main>
        <Style.Sidebar__Nav>
          <Style.Sidebar__NavListItem>
            <Style.Sidebar__NavLink
              className={`${
                pathname.match("/Server1") ||
                pathname.match("/Server2") ||
                pathname.match("/Server3") ||
                pathname.match("/Server4") ||
                pathname.match("/Server5") ||
                pathname.match("/Server6") ||
                pathname.match("/Server7")
                  ? "active"
                  : ""
              } dropdown-header`}
              onClick={handleMovieDropdown}
              data-tour="movies"
              data-value="movies"
            >
              <Style.DropDown__TitleContainer>
                <MovieReel /> Movies{" "}
                {isMovieDropdown ? <ExpandIcon /> : <CollapseIcon />}
              </Style.DropDown__TitleContainer>
            </Style.Sidebar__NavLink>
          </Style.Sidebar__NavListItem>

          <Style.DropDown__Content
            className={`${isMovieDropdown ? "open" : ""} ${
              location.pathname === "/music" ? "music-page" : ""
            }`}
          >
            <Style.Sidebar__NavListItem>
              <Style.Sidebar__NavLink
                className={`${pathname.match("/Server1") ? "active" : ""}`}
                onClick={props.handleServerChange}
                onChange={props.handleServerChange}
                data-tour="server1"
                data-value="Server1"
              >
                Server1 <small>(Movies)</small>
              </Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>

            <Style.Sidebar__NavListItem>
              <Style.Sidebar__NavLink
                className={`${pathname.match("/Server2") ? "active" : ""}`}
                onClick={props.handleServerChange}
                onChange={props.handleServerChange}
                data-tour="server2"
                data-value="Server2"
              >
                Server2 <small>(Anime)</small>
              </Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>

            <Style.Sidebar__NavListItem>
              <Style.Sidebar__NavLink
                className={`${pathname.match("/Server3") ? "active" : ""}`}
                onClick={props.handleServerChange}
                onChange={props.handleServerChange}
                data-tour="server3"
                data-value="Server3"
              >
                Server3 <small>(HD)</small>
              </Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>

            <Style.Sidebar__NavListItem>
              <Style.Sidebar__NavLink
                className={`${pathname.match("/Server4") ? "active" : ""}`}
                onClick={props.handleServerChange}
                onChange={props.handleServerChange}
                data-tour="server4"
                data-value="Server4"
              >
                Server4 <small>(Series)</small>
              </Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>

            <Style.Sidebar__NavListItem>
              <Style.Sidebar__NavLink
                className={`${pathname.match("/Server5") ? "active" : ""}`}
                onClick={props.handleServerChange}
                onChange={props.handleServerChange}
                data-tour="server5"
                data-value="Server5"
              >
                Server5 <small>(Movies)</small>
              </Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>

            <Style.Sidebar__NavListItem>
              <Style.Sidebar__NavLink
                className={`${pathname.match("/Server6") ? "active" : ""}`}
                onClick={props.handleServerChange}
                onChange={props.handleServerChange}
                data-tour="server6"
                data-value="Server6"
              >
                Server6 <small>(Korean)</small>
              </Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>

            <Style.Sidebar__NavListItem>
              <Style.Sidebar__NavLink
                className={`${pathname.match("/Server7") ? "active" : ""}`}
                onClick={props.handleServerChange}
                onChange={props.handleServerChange}
                data-tour="server6"
                data-value="Server7"
              >
                Server7 <small>(Anime)</small>
              </Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>
          </Style.DropDown__Content>

          <Style.Sidebar__NavListItem>
            <Link to="/music">
              <Style.Sidebar__NavLink
                className={`${pathname.match("/music") ? "active" : ""}`}
                onClick={props.handleServerChange}
                data-tour="music"
                data-value="music"
              >
                <Style.DropDown__TitleContainer>
                  <MusicNotes /> Music <GoToIcon />
                </Style.DropDown__TitleContainer>
              </Style.Sidebar__NavLink>
            </Link>
          </Style.Sidebar__NavListItem>
        </Style.Sidebar__Nav>

        <Style.Sidebar__Footer>
          <h3>
            Gophie.cam —{" "}
            <small>
              {" "}
              <Style.Sidebar__FooterLink to={"/terms"}>
                Terms
              </Style.Sidebar__FooterLink>
            </small>
          </h3>
          <p>Copyright © Gophie 2021. All Right Reserved</p>
        </Style.Sidebar__Footer>
      </Style.Sidebar__Main>
    </Style.Sidebar>
  );
};

export default PageSidebar;
