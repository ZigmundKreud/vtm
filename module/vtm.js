// Import Modules
import {DataLoader} from "./data.js";

/**
 * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
 */

Hooks.once("ready", async () => {

    console.debug("Importing data");

    // DataLoader.loadData("wod-vtm", "/modules/wod-vtm/data/json/fr", "archetypes");
    // DataLoader.loadData("wod-vtm", "/modules/wod-vtm/data/json/fr", "backgrounds");
    // DataLoader.loadData("wod-vtm", "/modules/wod-vtm/data/json/fr", "clans");
    // DataLoader.loadData("wod-vtm", "/modules/wod-vtm/data/json/fr", "disciplines");

    console.info("VTM Module Initialized.");
});
