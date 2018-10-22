import * as React from "react";
import { RouteComponentProps } from "react-router";
import { SubtitleLabel } from "src/components/ButtonLabel";
import { OutlinedButtonLink } from "src/components/ButtonLink";
import { ColumnCenter } from "src/components/ColumnCenter";
import { PageTitle } from "src/components/PageTitle";
import { RowCenter } from "src/components/RowCenter";
import { routePathToTitle } from "../ContainerUtils";
import { RoutePath } from "../Routes";

interface IOwnProps {
  routeProps: RouteComponentProps;
}
type Props = IOwnProps;

const Home: React.SFC<Props> = props => (
  <ColumnCenter>
    <PageTitle>Welcome</PageTitle>
    <RowCenter>
      <OutlinedButtonLink path={RoutePath.Employer} style={{ margin: 50 }}>
        <SubtitleLabel text={routePathToTitle(RoutePath.Employer)} />
      </OutlinedButtonLink>
      <OutlinedButtonLink path={RoutePath.Employee} style={{ margin: 50 }}>
        <SubtitleLabel text={routePathToTitle(RoutePath.Employee)} />
      </OutlinedButtonLink>
    </RowCenter>
  </ColumnCenter>
);

export default Home;
