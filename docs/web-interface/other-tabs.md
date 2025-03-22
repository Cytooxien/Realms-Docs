---
pagination_next: web-interface/profile
pagination_prev: web-interface/file-manager
---

# Other features

##### Explanations of other features the web interface offers

## Properties

This tab shows information about the realm.

| Name           | Description                                                                                                       |
|----------------|-------------------------------------------------------------------------------------------------------------------|
| Realm ID       | The unique identifier for the realm. If you experience technical issues, developers will need this to assist you. |
| Owner Name     | The player who owns the realm.                                                                                    |
| Boost Level    | The current boost level of the realm.                                                                             |
| Server Version | The Minecraft version the realm is running.                                                                       |
| Paused         | Indicates whether the realm is paused.                                                                            |

## Settings

This tab shows server-related information for the realm.

You can also use SFTP to access the realm's files. The password for SFTP is your [profile](./profile) password.

## Activity

This tab shows the actions of players with realm access. If there are file issues, you can trace which user made the change.

The log will automatically reset if the realm is unloaded.

| Type                           | Description                                        |
|--------------------------------|----------------------------------------------------|
| `server:subuser.create`        | A new user was created (user logged in).           |
| `server:console.command`       | A user executed a command.                         |
| `server:power.stop`            | A user stopped the server.                         |
| `server:power.restart`         | A user restarted the server.                       |
| `server:power.start`           | A user started the server.                         |
| `server:file.read`             | A user viewed a file's content.                    |
| `server:file.write`            | A user modified or created a file.                 |
| `server:file.create-directory` | A user created a directory.                        |
| `server:file.delete`           | A user deleted a file.                             |
| `server:file.rename`           | A user renamed or moved a file.                    |
| `server:file.compress`         | A user compressed one or more files.               |
| `server:file.decompress`       | A user decompressed an archive.                    |
| `server:file.uploaded`         | A user uploaded a file.                            |
| `server:file.download`         | A user downloaded a file.                          |