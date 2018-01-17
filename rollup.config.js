export default {
	input: 'src/toBeTested.js',
	output: [
		{
			format: 'umd',
			name: 'AddNpm',
			file: 'build/toBeTested.module.js'
		}
	]
};