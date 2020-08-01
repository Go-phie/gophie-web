import React from "react";
import Style from "./PageSidebar.styles";
import { GophieLogo } from "../../utils/icons";
import { greekFromEnglish } from "../../utils";

const PageSidebar = (server) => {
  return (
    <Style.Sidebar>
      <Style.Sidebar__Logo>
        <GophieLogo />
      </Style.Sidebar__Logo>
      <Style.Sidebar__Nav>
            <Style.Sidebar__NavListItem>
                <Style.Sidebar__NavLink className={greekFromEnglish(server) === "Server1" ? "active": "" } to={"/Server1"} >Server1</Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>
            
            <Style.Sidebar__NavListItem>
                <Style.Sidebar__NavLink className={greekFromEnglish(server) === "Server2" ? "active": "" } to={"/Server2"} >Server2</Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>

            <Style.Sidebar__NavListItem>
                <Style.Sidebar__NavLink className={greekFromEnglish(server) === "Server3" ? "active": "" } to={"/Server3"} >Server3</Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>

            <Style.Sidebar__NavListItem>
              <Style.Sidebar__NavLink className={greekFromEnglish(server) === "Server4" ? "active": "" } to={"/Server4"} >Server4</Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>

            <Style.Sidebar__NavListItem>
                <Style.Sidebar__NavLink className={greekFromEnglish(server) === "Server5" ? "active": "" } to={"/Server5"} >Server5</Style.Sidebar__NavLink>
            </Style.Sidebar__NavListItem>
      </Style.Sidebar__Nav>

      <div></div>
    </Style.Sidebar>
  );
};

export default PageSidebar;
