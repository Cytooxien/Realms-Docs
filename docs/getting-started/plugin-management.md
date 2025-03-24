---
pagination_next: getting-started/world-management
pagination_prev: getting-started/player-management
---

# Plugin Management

##### You'll learn how to manage your plugins using the plugin management interface here

If you want to enhance your players' experience on your realm, you may want to install plugins onto it. Plugins can range from just a few simple commands to entire game modes.

To access the plugin management interface, execute the command `/plugins` in game.

### Overview

At the top you can see a list of predefined plugins which you can install from in-game without needing to download something from the internet.

Below that list, you can see a list of the plugins which have been installed on your realm. If a plugin is highlighted in a green color, it's enabled and it runs. If a plugin doesn't have that highlight, it means that it either had an issue in the startup which caused it to turn itself off, or you've installed the plugin while the realm is running. If it's the first case, you need to look at the server log to determine the issue. In the second case, a restart of your realm fixes the issue.

There's a maximum allowed number of plugins which you can install on your realm. It is determined by the boost level of the realm. System plugins such as *PacketListenerApi, ViaVersion, ViaBackwards, ProtocollLib and Realms-API* are excluded from it.


### How to install and uninstall plugins from within the plugin management interface

If your realm doesn't have any boosts, you can only choose from a predefined list of plugins to install onto your server. The current list includes: *OldCombatMechanics, DecentHolograms, PacketEvents, IllegalStack, Skript, Shopkeepers, Vault, EssentialsSpawn, mcMMO, VoxelSniper, GriefPrevention, PlotSquared, goBrush, Essentials, WorldGuard, ChestShop, PlaceholderAPI, SkBee, Vulcan and ArmorStandTools*.

To install a plugin from this list, left click it, and after that restart your realm.

To uninstall a plugin, left-click the plugin you want to uninstall in the "Installed plugins" menu. You can't uninstall system plugins, and you can't uninstall plugins which are pre-installed with your server template.

### How to install custom plugins

To install custom plugins, you first need to open the [file manager in the web interface](../web-interface/file-manager). After you've done that, find the folder "plugins" and open it. Once you've opened this folder, you can upload any plugins you want from your computer. Drag the file into the file manager, and unless its file size is larger than 100 MB, it'll get uploaded.