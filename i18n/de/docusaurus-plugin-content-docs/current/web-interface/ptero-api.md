---
pagination_next: null
pagination_prev: web-interface/profile
---

# Pterodactyl API

[//]: # (TODO: Give more detailed examples + add more content)

##### This guide will show you how to use the Pterodactyl API to control your realms

### What can the Pterodactyl API be used for

The Pterodactyl API can be used for various actions such as starting and stopping servers, retrieving a console output or modify files.

### How do you use the API

In order to use the API, you first need to create an API key. An explanation for that can be found [here](./profile#how-to-create-an-api-key).

To access the API, you need to provide the API key in the authorization header as a bearer token. Here's an example for a basic structure for an HTTP request in Python:

```python
import requests 

PANEL_URL = "https://realms.cytooxien.de"
API_KEY = "<your api key>"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json"
}

url = f"{PANEL_URL}/api/client"
response = requests.get(url, headers=headers)
```

Here's an example of a use case of the API:

```python
import requests 

PANEL_URL = "https://realms.cytooxien.de"
API_KEY = "<your api key>"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json"
}

url = f"{PANEL_URL}/api/client"
response = requests.get(url, headers=headers)

if response.status_code == 200:
    servers = response.json()["data"]
    for server in servers:
        print(f"Server Name: {server['attributes']['name']}, UUID: {server['attributes']['uuid']}")
else:
        print(f"Error: {response.status_code}, {response.text}")        
```

This will make an api request to retrieve the servers of a user.

For more detailed documentation on the API routes of the Pterodactyl API, you can check out this website: [https://dashflo.net/docs/api/pterodactyl/v1/](https://dashflo.net/docs/api/pterodactyl/v1/https://dashflo.net/docs/api/pterodactyl/v1/)