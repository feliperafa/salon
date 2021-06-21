import React from "react";
import { useHistory } from "react-router-dom";
import '../../styles/components/sidebar/SideBar.css'

export default function Sidebar() {
  const { goBack } = useHistory();
  return (
    <aside className="app-sidebar">
      <div className="mapMarkerImg" />
      <footer>
        <div className="button-next" onClick={goBack}>
          <div className="next-arrow"></div>
        </div>
      </footer>
    </aside>
  );
}
