var exec = require('exec');
var fs = require('fs');

LOCAL_REPO         = "/teste";
REMOTE_REPO        = "git@github.com:dgsweb7/untrack.com.git";
DESIRED_BRANCH     = "master"; 

// function dirExistsSync (d) {
//   try { 
//   	fs.statSync(d); return true 
//   }
//   catch (er) { 
//   	return false 
//   }
// }

// console.log();

// if (dirExistsSync(LOCAL_REPO)) {
// 	fs.rmdir(LOCAL_REPO, function(e) {
// 		console.log(e);
// 	});
// }
// 	console.log('existe');
// } else {
// 	console.log('nao existe -> ' + LOCAL_REPO);
// }


// fs.stat('foo.txt', function(err, stat) {
//     if(err == null) {
//         console.log('File exists');
//     } else if(err.code == 'ENOENT') {
//         fs.writeFile('log.txt', 'Some log\n');
//     } else {
//         console.log('Some other error: ', err.code);
//     }
// });


exec(['git', 'pull'], function(err, out, code) {
  if (err instanceof Error)
    throw err;
  process.stderr.write(err);
  process.stdout.write(out);
  process.exit(code);
});