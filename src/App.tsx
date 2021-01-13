import LogoIcon from "./components/LogoIcon";
import React from "react";
import { useTheme } from "@material-ui/core";

interface Props {
  title: string
}

export const App = (props: Props) => {
  const bgColor = useTheme().palette
  const classes = {
    container: {
      width: "100vw",
      height:"100vh",
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      backgroundColor: "#ffffff", 
      backgroundImage: `linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)`}
  }
 return (
  <div style={classes.container}>
    <LogoIcon />
  </div>
 )
}
