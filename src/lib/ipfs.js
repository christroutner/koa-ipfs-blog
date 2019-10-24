const IPFS = require("ipfs");
const fs = require('fs');
let ipfs;

async function startIPFS() {
    // starting ipfs node
    console.log("Starting...!");
    ipfs = new IPFS({
        repo: "./ipfs-data/ipfs-config/node",
        start: true,
        EXPERIMENTAL: {
            pubsub: true
        },
        // config: {
        //   Addresses: {
        //     Swarm: ["/ip4/0.0.0.0/tcp/8006", "/ip4/127.0.0.1/tcp/8007/ws"],
        //     API: "/ip4/127.0.0.1/tcp/8008",
        //     Gateway: "/ip4/127.0.0.1/tcp/8009"
        //   }
        // },
        relay: {
            enabled: true, // enable circuit relay dialer and listener
            hop: {
                enabled: true // enable circuit relay HOP (make this node a relay)
            }
        }
    });
    return ipfs
}

//Get the latest content from the IPFS network and Add into ipfs-data.
async function getContent(ipfs_node, hash) {

    // Get the latest content from the IPFS network.
    return new Promise((resolve, reject) => {
        ipfs_node.get(hash, async function (err, files) {
            if (err) reject(err);

            const pathStore = `${process.cwd()}/ipfs-data/` // Path to store new ipfs-data
            files.forEach(async (file) => { // Map files
                console.log(file)
                if (file.type === 'file') {   // Is File
                    fs.writeFile(`${pathStore}${file.path}`, file.content, (err) => {
                        // if (err) console.log(err);
                    });

                } else if(file.type === 'dir') { // Is Folder
                    fs.mkdir(`${pathStore}${file.path}`, { recursive: true }, (err) => {
                        //   if (err) console.log(err);
                    });
                }

            })
            resolve(true)
        })
    })
}
    //Adds an IPFS object to the pinset and also stores it to the IPFS repo.

async function pinAdd(ipfs_node, hash) {
    ipfs_node.pin.add(hash, function (err) {
        if (err) return err
    })

     //List all the objects pinned to local storage or under a specific hash.
   /* ipfs_node.pin.ls(hash,function (err, pinset) {
        if (err) {
            throw err
        }
        console.log(pinset)
    })*/

}

module.exports = { startIPFS, getContent, pinAdd }

