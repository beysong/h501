import styles from './index.less';
import withRouter from 'umi/withRouter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// function BasicLayout(props) {
//   return <div className={styles.normal}>{props.children}</div>;
// }

const BasicLayout = withRouter(({ location, children }) => (
  <TransitionGroup component={null}>
    <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
      <div className={styles.pageWrapper}>{children}</div>
    </CSSTransition>
  </TransitionGroup>
));
export default BasicLayout;
