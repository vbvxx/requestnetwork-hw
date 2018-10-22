import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { routePathToTitle } from "../ContainerUtils";
import { RoutePath } from "../Routes";
import SwipeableTemporaryDrawer from "./Drawer";

interface IState {
  drawerOpen: boolean;
}
interface IOwnProps {}
type Props = AppBarProps &
  IOwnProps &
  WithStyles<typeof styles> &
  RouteComponentProps;

class CustomAppBar extends React.Component<Props, IState> {
  state = { drawerOpen: false };

  toggleDrawer = () => {
    this.setState(oldState => {
      return {
        drawerOpen: !oldState.drawerOpen
      };
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {routePathToTitle(this.props.location.pathname as RoutePath)}
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableTemporaryDrawer
          open={this.state.drawerOpen}
          onClose={this.toggleDrawer}
        />
      </div>
    );
  }
}

const styles = createStyles({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  }
});

export default withStyles(styles)(withRouter(CustomAppBar));
