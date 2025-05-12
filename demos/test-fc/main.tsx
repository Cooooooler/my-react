import { useState } from 'my-react';
import ReactDOM from 'my-react-dom/client';

const jsx = (
	<div>
		<span>hello my-react</span>
	</div>
);

function App() {
	const [count, setCount] = useState(120);
	setTimeout(() => {
		setCount(count + 1);
	}, 2000);
	return <span>{count}</span>;
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(jsx);
root.render(<App />);
