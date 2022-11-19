const cli = require('cli');
const yargs = require('yargs');
const { getToken } = require('./auth');

const usage = "node src/index.js --file FILE --expiresIn TIME[120s, 2h, 1d]";

const options = yargs
    .usage(usage)
    .option('f', { 
        alias: 'file', 
        describe: 'A file to store your access token.', 
        type: 'string', 
        demandOption: false 
    })
    .option('help', {
        alias: 'help', 
        describe: 'Provides a help menu.', 
        type: "boolean", demandOption: 
        false
    })
    .option('exp', {
        alias: 'expiresIn', 
        describe: 'Valid period for access token (ex: 120s, 2h, 1d).', 
        type: "string", 
        demandOption: false 
    })
    .help(true)
    .argv;

const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const main = async () => {
    const expiration = (argv.expiration == null) ? '365d' : argv.expiration;

    if (argv.help) {
        yargs.showHelp();
    } else if (argv.file == null) {
        const file = './.tmp-cli/token.json';
        cli.spinner('Waiting for login through browser');
        await getToken(file, expiration);
        cli.spinner('Successful! You can find your access token at ./.tmp-cli/token.json', true);
    } else {
        cli.spinner('Waiting for login through browser');
        if (await getToken(argv.file, expiration) == true) {
            cli.spinner(`Successful! You can find your access token at ${argv.file}`, true);
        } else {
            cli.spinner('Failed!', true);
        }
    }
}

main();
