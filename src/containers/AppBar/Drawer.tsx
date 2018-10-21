import * as React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {
  withStyles,
  createStyles,
  WithStyles,
  List,
  ListItem
} from "@material-ui/core";
import { DrawerLabel } from "src/components/DrawerLabel";
import { routePathToTitle } from "../ContainerUtils";
import { RoutePath } from "../Routes";
import { Link } from "react-router-dom";

const styles = createStyles({
  list: {
    width: 250
  }
});

interface OwnProps {
  open: boolean;
  onClose: () => void;
}

type Props = OwnProps & WithStyles<typeof styles>;

class SwipeableTemporaryDrawer extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    const navigationList = (
      <List className={classes.list}>
        {[RoutePath.Home, RoutePath.Employer, RoutePath.Employee].map(path => (
          <ListItem
            component={({ innerRef, ...props }) => (
              <Link {...props} to={path} />
            )}
            key={path}
            onClick={this.props.onClose}
          >
            <DrawerLabel text={routePathToTitle(path)} />
          </ListItem>
        ))}
      </List>
    );

    return (
      <div>
        <SwipeableDrawer
          open={this.props.open}
          onClose={this.props.onClose}
          onOpen={() => {
            console.log("ON OPEN");
          }}
        >
          {navigationList}
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(SwipeableTemporaryDrawer);
