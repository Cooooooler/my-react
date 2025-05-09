import { useState } from 'my-react';
import { createRoot } from 'react-dom';

function App() {
	const [num, update] = useState(100);
	return (
		<ul onClick={() => update(50)}>
			{new Array(num).fill(0).map((_, i) => {
				return <li key={i}>{i}</li>;
			})}
		</ul>
	);
}

const root = createRoot(document.getElementById('root'));
// root.render(<App />);
