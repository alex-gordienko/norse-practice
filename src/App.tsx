import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import Header from './shared/components/Header';
import ProfileEditor from './shared/components/ProfileEditor';
import theme from './styles/variables';
import lighten from './styles/themes/lighten';
import Container from './shared/components/Container';
import 'normalize.css';

const Home = () => <p>Home</p>;
const News = () => <p>News</p>;
const About = () => <p>About Us</p>;

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header theme={lighten} />
      <Container>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/about-us" component={About} />
        </Switch>
      </Container>
      <ProfileEditor
        skillsList={['Java', 'JavaScript', 'SQL', 'FrontEnd']}
        theme={lighten}
        mode="Edit"
        userName="Alex Gordienko"
      />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
