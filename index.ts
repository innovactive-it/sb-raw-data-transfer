
export function createPacket (raw : Buffer){
    var packetVersion : number = 1;
    var version = raw[0] * 256 + raw[1];
    if(version > packetVersion){
        throw new Error("Packet Version Exception: parsed packet version refers to a newer package version. Please install newer version of package.");
    }
    console.log(version);
}