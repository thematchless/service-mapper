# service-mapper
A small service which creates a landing page for my traefik environment. 

You can change the displayed services by changing the `services.json`:

```json
{
  "icon": "http://image.tld",
  "link": "traefik.tld",
  "name": "Traefik"
}
```

# commands
 - `npm run start`
 - `npn run build`
 - `npm run test`
 - `npm run eject`
 
# Dokerfile included
This project includes a `Dokerfile` to simply build this as a container.