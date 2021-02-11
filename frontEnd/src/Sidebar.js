import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import {Avatar, IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar_header">
          <Avatar src="https://cdn.pixabay.com/photo/2018/04/06/22/26/fractalius-3297208_960_720.jpg" />
          <div className="sidebar-headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <di className="sidebar_search">
          <div className="sidebar_searchContainer">
            <SearchOutlined />
            <input placeholder="Search or start new chat" type="text" />
          </div>
        </di>
        <div className="sidebar_chats">
           <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat /> 
        </div>
      </div>
    );
}

export default Sidebar
