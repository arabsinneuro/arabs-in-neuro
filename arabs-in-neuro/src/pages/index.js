import RootLayout from '../app/layout';
import HomePage from './home';

function RootPage() {
  return (
    <HomePage />
  )
}

RootPage.Layout = RootLayout;

export default RootPage;
