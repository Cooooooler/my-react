import {
	createContainer,
	updateContainer
} from 'react-reconciler/src/fiberReconciler';
import { Container } from './hostConfig';
import { ReactElementType } from 'shared/ReactTypes';
import { initEvent } from './SyntheticEvent';
// ReactDOM.createRoot(root).render(<App />);
function createRoot(container: Container) {
	if (!container) {
		throw new Error('container is required');
	}
	const root = createContainer(container);
	console.log(root);
	
	return {
		render(element: ReactElementType) {
			initEvent(container, 'click');
			return updateContainer(element, root);
		}
	};
}

export { createRoot };
