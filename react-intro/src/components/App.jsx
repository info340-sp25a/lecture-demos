import { HeaderComponent } from './Header.jsx';
import { MainContent } from './MainContent.jsx';

export function App(props) {

  //this is the App component

  return (
    <div>
      <HeaderComponent />
      {/* below is main content */}
      <MainContent />
      <footer>
        &copy; me;
      </footer>
    </div>
  )
}

