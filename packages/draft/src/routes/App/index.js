import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';
import 'styles/inject';
import Home from './Home';
import Videos from './Videos';
import Video from './Video';
import {
  PageWrapper,
  Header,
  Title,
  Content,
  Primary,
  PrimaryWrapper,
  Secondary,
  Footer,
} from './styled';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header>
          <Title>
            <Link to="/">High for This.</Link>
          </Title>
        </Header>
        <Content>
          <Primary>
            <PrimaryWrapper>
              <Switch>
                <Route path="/video/:slug" component={Video} />
                <Route path="/videos/:year(\d{4})" component={Videos} />
                <Route exact path="/" component={Home} />
              </Switch>
            </PrimaryWrapper>
          </Primary>
          <Secondary>SECONDARY</Secondary>
        </Content>
        <Footer>
          © Scott Taylor ...&nbsp; Brooklyn, NY ...{' '}
          <a href="https://twitter.com/wonderboymusic">@wonderboymusic</a>&nbsp; ... Powered by
          GraphQL / React / Emotion
        </Footer>
      </PageWrapper>
    </ThemeProvider>
  );
}
