// @flow
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { routerShape } from 'found/lib/PropTypes';
import AppComponent from '@wonderboymusic/graphql-wordpress-components/lib/App';
import IntlProvider from 'decorators/IntlProvider';
import Settings from 'components/Settings';

type AppProps = {
  viewer: {
    settings: Object,
    navMenu: Object,
    sidebar: Object,
  },
  children: any,
  router: any,
};

@IntlProvider
class App extends React.Component<AppProps> {
  static defaultProps = {
    children: null,
  };

  static childContextTypes = {
    router: routerShape.isRequired,
  };

  removeTransitionHook = () => null;

  constructor(props: AppProps, context: any) {
    super(props, context);

    this.removeTransitionHook = props.router.addTransitionHook(this.onTransition);
  }

  componentWillUnmount() {
    this.removeTransitionHook();
  }

  onTransition = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  getChildContext() {
    return {
      router: this.props.router,
    };
  }

  render() {
    const { viewer: { settings, navMenu, sidebar }, children } = this.props;

    return [
      <Settings key="settings" settings={settings} />,
      <AppComponent key="app" {...{ settings, navMenu, sidebar }}>
        {children}
      </AppComponent>,
    ];
  }
}

export default createFragmentContainer(
  App,
  graphql`
    fragment App_viewer on Viewer {
      settings {
        title
        description
        language
      }
      navMenu(id: $menuID) {
        id
        name
        items {
          id
          title
          url
          parent
          order
          type
          typeName
          typeSlug
          dataSlug
          dataID
        }
      }
      sidebar(id: $sidebarID) {
        widgets {
          id
          classname
          content {
            rendered
          }
        }
      }
    }
  `
);
