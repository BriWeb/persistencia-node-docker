from node

workdir /app

copy . .

cmd ["node", "index.js"]