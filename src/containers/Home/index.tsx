import * as React from "react";
import { RouteComponentProps } from "react-router";
import { ButtonLink } from "src/components/ButtonLink";
import { RoutePath } from "../Routes";

interface OwmProps {
  routeProps: RouteComponentProps;
}

interface State {
  transactionHash?: string;
}
type Props = OwmProps;

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      transactionHash: undefined
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <h1>Welcome</h1>
        <div style={styles.buttonsContainer}>
          <ButtonLink path={RoutePath.Employer} name="Employer" />
          <ButtonLink path={RoutePath.Employee} name="Employee" />
        </div>
      </div>
    );
  }
}

export default Home;

const styles: {
  container: React.CSSProperties;
  buttonsContainer: React.CSSProperties;
} = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
};
