---
pagination_next: getting-started/player-management
pagination_prev: getting-started/settings
---

# Gruppen-Management

##### Dieser Guide wird dir erklären, wie du das Gruppen-Management-Interface nutzt.

Die Gruppenverwaltung ist ein essentieller Teil der Administration deines Realms, da sie dir ermöglicht, Spieler in Gruppen aufzuteilen und ihnen Berechtigungen zu erteilen.

### Das Gruppen-Management-Interface öffnen

Als allererstes öffnest du das Realm-Verwaltungsmenü, indem du den Befehl `/realm` im Chat ausführst. Nun musst du den Knopf mit dem Titel "Gruppen-Management" drücken.

### Eine Gruppe erstellen

Um eine Gruppe zu erstellen drückst du auf das Plus-Symbol in der Gruppenverwaltung. Es erstellt eine Gruppe mit einem vorbestimmten Namen und ohne besondere Berechtigungen.

### Eine Gruppe bearbeiten

Um eine Gruppe zu bearbeiten, musst du auf den Namen der Gruppe in der oberen Liste an Gruppen in der Gruppenverwaltung klicken. 

###### Name, Prefix, Farbe und Priorität der Gruppe ändern

You can rename the group by clicking the edit icon next to its name. This will prompt you to input a new name into the chat.

You're also able to edit the tab list priority of your realm by incrementing or decrementing the number you can see next in the next line using the plus and minus icons. Next to it, there's also an option to edit the tab prefix for the group. If you want to have a prefix similar to the ones you see on Cytooxien, you can input `<tag:#HEX-CODE>PREFIX</tag>`, of course replace *Hex Code* and *PREFIX* with your desired hex code and your desired prefix text.

At the bottom of the group management, you can also change the color in which the players who that group's been assigned to are displayed in the tab list. Click the arrows to scroll through all the options of colors to find the one you prefer for that group.

###### How to make the group be automatically assigned to realm boosters

There's also an option to set whether the group will be automatically given to a player if they boost the server a specific number of times. Enable the checkbox next to the "Boosts" text to make the group be automatically given to a player when they boost this realm. You're also able to select the minimum number of times which a player should boost a server to receive this group.

###### How to edit the permissions which a group gives players

You're able to edit permissions by clicking the gear icon. At the top, you can see different categories of permissions. Each of them corresponds with either a plugin, the vanilla game or the realms system itself. Once you select a category, you're able to select whether the permission should be given, whether it shouldn't be modified or whether it should be explicitly denied. You're also able to add custom permissions using the last category. Click the plus icon and enter the permission which you want to add in the chat.

###### How to delete a group

In the top-right corner of the group settings, there's also an option to delete the group.

### How to use the `/group` command

To assign players to a group, execute the command `/group add <playername> <group name>` in game.

You're also able to remove players from a group by executing `/group remove <playername> <group name>`.