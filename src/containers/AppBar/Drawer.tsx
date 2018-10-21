import * as React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {
  withStyles,
  createStyles,
  WithStyles,
  List,
  ListItem
} from "@material-ui/core";
import { SubtitleLabel } from "src/components/SubtitleLabel";
import { routePathToTitle } from "../ContainerUtils";
import { RoutePath } from "../Routes";
import { ButtonLink } from "src/components/ButtonLink";

const styles = createStyles({
  list: {
    width: 250,
    padding: 0
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
