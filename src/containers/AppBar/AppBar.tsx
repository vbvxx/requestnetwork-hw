import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter, RouteComponentProps } from "react-router";
import { routePathToTitle } from "../ContainerUtils";
import SwipeableTemporaryDrawer from "./Drawer";
import { RoutePath } from "../Routes";

interface State {
  drawerOpen: boolean;
}
interface OwnProps {}
type Props = AppBarProps &
  OwnProps &
  WithStyles<typeof styles> &
  RouteComponentProps;

class CustomAppBar extends React.Component<Props, State> {
  state = { drawerOpen: false };

  toggleDrawer = () => {
    this.setState(oldState => {
      return {
        drawerOpen: !oldState.drawerOpen
      };
    });
  };

  render() {
    //TODO: create
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
