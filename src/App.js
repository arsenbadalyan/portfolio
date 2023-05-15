import './App.css';
import Content from './Content';
import Sidebar from './Sidebar';

function App() 
{
	return (
		<div className="App font-mono">
            <div className="flex">
                <div className="w-[20vw]">
                    <Sidebar/>
                </div>
                <div className="w-[80vw]">
                    <Content/>
                </div>
            </div>
		</div>
	);
}

export default App;
