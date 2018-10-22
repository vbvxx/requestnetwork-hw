import {
  createStyles,
  List,
  ListItem,
  withStyles,
  WithStyles
} from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import * as React from "react";
import { SubtitleLabel } from "src/components/ButtonLabel";
import { ButtonLink } from "src/components/ButtonLink";
import { routePathToTitle } from "../ContainerUtils";
import { RoutePath } from "../Routes";

const styles = createStyles({
  list: {
    padding: 0,
    width: 250
  },
  listItem: {
    padding: 0
  }
});

interface OwnProps {
  open: boolean;
  onClose: () => void;
}

type Props = OwnProps & WithStyles<typeof styles>;

class SwipeableTemporaryDrawer extends React.Component<Props> {
  onOpen = () => {};

  render() {
    const { classes } = this.props;

    const navigationList = (
      <List className={classes.list}>
        {[RoutePath.Home, RoutePath.Employer, RoutePath.Employee].map(path => (
          <ListItem key={path} className={classes.listItem}>
            <ButtonLink path={path} onClick={this.props.onClose}>
              <SubtitleLabel text={routePathToTitle(path)} />
            </ButtonLink>
          </ListItem>
        ))}
      </List>
    );

    return (
      <div>
        <SwipeableDrawer
          open={this.props.open}
          onClose={this.props.onClose}
          onOpen={this.onOpen}
        >
          {navigationList}
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(SwipeableTemporaryDrawer);
