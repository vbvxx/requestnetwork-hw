import * as React from "react";
import { RouteComponentProps } from "react-router";
import { ButtonLink } from "src/components/ButtonLink";
import { RoutePath } from "../Routes";
import { ColumnCenter } from "src/components/ColumnCenter";
import { PageTitle } from "src/components/PageTitle";
import { RowCenter } from "src/components/RowCenter";

interface OwnProps {
  routeProps: RouteComponentProps;
}
type Props = OwnProps;

const Home: React.SFC<Props> = props => (
  <ColumnCenter>
    <PageTitle>Welcome</PageTitle>
    <RowCenter>
      <ButtonLink path={RoutePath.Employer} name="Employer" />
      <ButtonLink path={RoutePath.Employee} name="Employee" />
    </RowCenter>
  </ColumnCenter>
);

export default Home;
