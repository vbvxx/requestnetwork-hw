import * as React from "react";
import { RouteComponentProps } from "react-router";
import { OutlinedButtonLink } from "src/components/ButtonLink";
import { RoutePath } from "../Routes";
import { ColumnCenter } from "src/components/ColumnCenter";
import { PageTitle } from "src/components/PageTitle";
import { RowCenter } from "src/components/RowCenter";
import { SubtitleLabel } from "src/components/SubtitleLabel";
import { pathToTitle } from "../ContainerUtils";

interface OwnProps {
  routeProps: RouteComponentProps;
}
type Props = OwnProps;

const Home: React.SFC<Props> = props => (
  <ColumnCenter>
    <PageTitle>Welcome</PageTitle>
    <RowCenter>
      <OutlinedButtonLink path={RoutePath.Employer} style={{ margin: 50 }}>
        <SubtitleLabel text={pathToTitle(RoutePath.Employer)} />
      </OutlinedButtonLink>
      <OutlinedButtonLink path={RoutePath.Employee} style={{ margin: 50 }}>
        <SubtitleLabel text={pathToTitle(RoutePath.Employee)} />
      </OutlinedButtonLink>
    </RowCenter>
  </ColumnCenter>
);

export default Home;
