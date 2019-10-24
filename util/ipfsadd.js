const IPFS = require("ipfs");
const shell = require('shelljs')


async function addFile() {
    const ipfs_node = new IPFS({
        repo: "./ipfs-data/ipfs-config/nodeUpload",
        start: true,
        EXPERIMENTAL: {
            pubsub: true
        },
        config: {
            Addresses: {
                Swarm: ["/ip4/0.0.0.0/tcp/4006",
                    "/ip4/127.0.0.1/tcp/4007/ws"],
                API: "/ip4/127.0.0.1/tcp/4008",
                Gateway: "/ip4/127.0.0.1/tcp/4009"
            }
        },
        relay: {
            enabled: true, // enable circuit relay dialer and listener
            hop: {
                enabled: true // enable circuit relay HOP (make this node a relay)
            }
        }
    });

    ipfs_node.on("ready", async () => {
        console.log('Ipfs Ready!')

        ipfs_node.addFromFs('./util/ipfs-upload', { recursive: true }, (err, result) => {
            if (err) { throw err }
            if (result.length < 2) { throw "No files to load"; }
            console.log(result)
            const lastHash = result.length <= 2 ?
                result[result.length - 1].hash : //For one file to upload
                result[result.length - 2].hash
            //   shell.exec(`export WIF=Kx5tAyoyrpvQuqjQ6S5pvB5TeGWqQbGGvkNYkoBZ3Dq3HD6kHQk4`)
            shell.exec(`memo-push -p ${lastHash}`);





        })


    })
    process.stdin.resume();
    /*  
*/

}
addFile();

