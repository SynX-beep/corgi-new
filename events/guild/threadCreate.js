//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by S7NX#6966 | https://discord.gg/corgi
 * @INFO
 * Work for corgi Development | https://corgi.eu
 * @INFO
 * Please mention him / corgi Development, when using this Code!
 * @INFO
 */
