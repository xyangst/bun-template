const built = await Bun.build({
	entrypoints: ['./src/index.ts'],
	outdir: './dist',
	target: 'node',
	minify: {
		identifiers: true,
		syntax: true,
		whitespace: true,
	},
});

if (built.success) {
	console.log(built.outputs[0].size);
} else {
	console.log('build failed :(');
}
