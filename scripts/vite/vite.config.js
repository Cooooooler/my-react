import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';
import { resolvePkgPath } from '../rollup/utils';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), replace({ __DEV__: true, preventAssignment: true })],
	resolve: {
		alias: [
			{
				find: 'my-react',
				replacement: resolvePkgPath('my-react')
			},
			{
				find: 'my-react-dom',
				replacement: resolvePkgPath('my-react-dom')
			},
			{
				find: 'hostConfig',
				replacement: path.resolve(
					resolvePkgPath('my-react-dom'),
					'./src/hostConfig.ts'
				)
			},
			{
				find: 'react/jsx-runtime',
				replacement: path.resolve(
					resolvePkgPath('my-react'),
					'./jsx-dev-runtime.ts'
				)
			},
			{
				find: 'react/jsx-dev-runtime',
				replacement: path.resolve(
					resolvePkgPath('my-react'),
					'./jsx-dev-runtime.ts'
				)
			}
		]
	}
});
