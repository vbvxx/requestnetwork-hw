import * as React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme
} from "@material-ui/core/styles";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu/";
import { withRouter, RouteComponentProps } from "react-router";
import { pathToTitle } from "./ContainerUtils";

interface OwnProps {}
type Props = AppBarProps &
  OwnProps &
  WithStyles<typeof styles> &
  RouteComponentProps;

const CustomAppBar: React.SFC<Props> = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon open={false} />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {pathToTitle(props.location.pathname)}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  });

export default withStyles(styles)(withRouter(CustomAppBar));
