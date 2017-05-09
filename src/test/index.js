require('./hello.css')

require.ensure(['./test.js'],require=>{
	require('./test.js')
},'fc')