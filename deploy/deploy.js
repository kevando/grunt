var config = require('../config');
var sys = require('sys');
var exec = require('child_process').exec;
var prompt = require('prompt');

exports.deployToEnvironment = function (environment, isConfirmationRequired) {

    var servers = config.deploy[environment];

    if (!servers || servers.length == 0) {
        console.log("No servers found. Please update your configuration file.");
        return;
    }

    if (isConfirmationRequired) {
        console.log('Are you sure you want to deploy to production?');

        prompt.start();

        prompt.get(['confirmation'], function (err, result) {
            if (result.confirmation.toLowerCase() == 'yes') {
                deploy(0, servers);
            } else {
                console.log('---------------------------------');
                console.log('   Deployment cancelled.');
                console.log('---------------------------------');
            }
        });
    } else {
        console.log('No confirmation needed for this environment.');
        deploy(0, servers);
    }

};

function deploy(serverIndex, servers) {
    if (serverIndex < servers.length) {
        var child = exec('ssh -t Erwan@' + servers[serverIndex] + ' "sudo bash /var/deploy/deploy.sh"', function (error, stdout, stderr) {
            sys.print('stdout: ' + stdout);
            sys.print('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }

            // Only show server deployed progression if multiple servers
            if (servers.length > 1) {
                console.log('---------------------------------');
                console.log('   Server ' + (serverIndex + 1) + '/' + servers.length + ' complete.');
                console.log('---------------------------------');
            }

            serverIndex++;
            deploy(serverIndex, servers);
        });
    } else {
        console.log('---------------------------------');
        console.log('   Deployment complete.');
        console.log('---------------------------------');
    }
}
