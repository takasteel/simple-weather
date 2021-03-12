import { Search } from "./components/Search";
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1>Simple Weather</h1>
      <Search />
    </div>
  );
}

export default App;
