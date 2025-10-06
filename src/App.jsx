import Navbar from './components/Navbar/Navbar';
import SummaryCard from './components/SummaryCard/SummaryCard';
import TideContainer from './components/TideContainer/TideContainer';
import './index.css'

function App() {
  return (
    <>
      <div className="flex flex-col gap-5 bg-[#060F28] w-screen h-screen">
        <Navbar />

        <SummaryCard />

        <TideContainer />
      </div>
    </>
  );
}

export default App;
