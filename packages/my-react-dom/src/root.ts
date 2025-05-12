import {
	createContainer,
	updateContainer
} from 'my-react-reconciler/src/fiberReconciler';
import { Container } from './hostConfig';
import { ReactElemenType } from 'my-shared/ReactTypes';

// ReactDOM.createRoot(root).render(<App />);
export function createRoot(container: Container) {
	const root = createContainer(container);
	return {
		render(element: ReactElemenType) {
			updateContainer(element, root);
		}
	};
}
