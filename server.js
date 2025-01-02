const WebSocket = require("ws");
const msgpack = require("msgpack-lite");

const server = new WebSocket.Server({ port: 8080 });

const { sin, cos, sqrt, random, floor, pow } = Math;

function randInt(min, max) {
  return Math.floor(random() * (max - min) + min);
}

function randFloat(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function sendToWS(ws, ...data) {
  if (ws) {
    ws.send(msgpack.encode([...data]));
  }
}

function sendToAll(...data) {
  let encoded = msgpack.encode([...data]);
  for (let i = 0; i < players.length; i++) {
    players[i].ws.send(encoded);
  }
}

function randomFloat(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function randomInt(min, max) {
  return ~~(Math.random() * (max - min + 1)) + min;
}

function getDirection(ax, ay, bx, by) {
  return Math.atan2(by - ay, bx - ax);
}

function getDistance(ax, ay, bx, by) {
  return Math.hypot(by - ay, bx - ax);
}

const br = Math.floor,
  Sr = Math.abs,
  Ti = Math.cos,
  Mi = Math.sin,
  Mh = Math.sqrt;

function checkCollision(u, p, w) {
  // very important. needs to be cleaned up
  w = w || 1;
  const x = u.x - p.x,
    b = u.y - p.y;
  let $ = u.scale + p.scale;
  if (Math.abs(x) <= $ || Math.abs(b) <= $) {
    $ = u.scale + p.scale;
    let v = sqrt(x * x + b * b) - $;
    if (v <= 0) {
      const S = getDirection(u.x, u.y, p.x, p.y);
      (v = (v * 1) / 2),
        (u.x += v * Ti(S)),
        (u.y += v * Mi(S)),
        (p.x -= v * Ti(S)),
        (p.y -= v * Mi(S));

      return true; //p.zIndex > u.zIndex && (u.zIndex = p.zIndex), !0;
    }
  }
  return !1;
}

function objectCheckCollision(u, p, w) {
  // very important. needs to be cleaned up
  w = w || 1;
  const x = u.x - p.x,
    b = u.y - p.y;
  let $ = u.scale + p.scale;
  if (Math.abs(x) <= $ || Math.abs(b) <= $) {
    $ = u.scale + p.scale;
    let v = sqrt(x * x + b * b) - $;
    if (v <= 0) {
      const S = getDirection(u.x, u.y, p.x, p.y);
      (u.x = p.x + -$ * Ti(S)),
        (u.y = p.y + -$ * Mi(S)),
        (u.xVel *= 0.75),
        (u.yVel *= 0.75);

      //if (p.scale == 50 * 0.6) {
      //  const R = 1.5 * (35);
      //  (u.xVel += R * Ti(S)), (u.yVel += R * Mi(S));
      //}
      return p.zIndex > u.zIndex && (u.zIndex = p.zIndex), !0;
    }
  }
  return !1;
}

class Object {
  constructor(x, y, type, name, typer, sid = objects.length) {
    this.sid = sid;
    this.x = x;
    this.y = y;
    this.xWiggle = 0;
    this.yWiggle = 0;
    this.name = name;
    this.type = typer;

    this.object = true;

    let insersects = objects.filter(
      (a) => getDistance(a.x, a.y, this.x, this.y) <= type * 50 + a.scale
    );
    this.scale = insersects.length ? 0 : type * 50;

    this.update = (delta) => {
      if (this.xWiggle) this.xWiggle *= Math.pow(0.99, delta);
      if (this.yWiggle) this.yWiggle *= Math.pow(0.99, delta);
    };
  }
}

const PI2 = Math.PI * 2;
const PI = Math.PI;
function dAng(ang1, ang2) {
  let d = Math.abs(ang1 - ang2);
  d = d % PI2;
  if (d > PI) {
    d = PI2 - d;
  }
  return d;
}

/*

    areaCount: 7,
    treesPerArea: 9,
    bushesPerArea: 3,
    totalRocks: 32,
    goldOres: 7,

we split map into chunks! each chunk would be 1440x1440 size
9 trees per chunk
3 bushes per chunk
32 rocks per chunk
7 gold ores in total (around entire map)
*/

let objects = [];

const points = [
  { x: 6364.3, y: 13285 },
  { x: 6364.3, y: 13115 },
  { x: 6398.5, y: 12948.5 },
  { x: 6398.5, y: 13451.5 },
  { x: 6465.5, y: 12792.3 },
  { x: 6685.8, y: 12535.7 },
  { x: 6562.6, y: 12652.8 },
  { x: 6465.5, y: 13607.7 },
  { x: 6562.6, y: 13747.2 },
  { x: 6685.8, y: 13864.3 },
  { x: 6830.1, y: 13954.2 },
  { x: 6989.5, y: 14013.2 },
  { x: 7157.5, y: 14038.9 },
  { x: 7971.9, y: 12868.7 },
  { x: 8022.8, y: 13030.9 },
  { x: 8208, y: 13200 },
  { x: 7872, y: 13200 },
  { x: 8022.8, y: 13369.1 },
  { x: 7889.4, y: 13679.9 },
  { x: 7971.9, y: 13531.3 },
  { x: 7778.7, y: 13808.8 },
  { x: 7491.7, y: 13987.7 },
  { x: 7644.3, y: 13912.9 },
  { x: 7327.2, y: 14030.3 },
  { x: 6830.1, y: 12445.8 },
  { x: 6989.5, y: 12386.8 },
  { x: 7157.5, y: 12361.1 },
  { x: 7327.2, y: 12369.7 },
  { x: 7491.7, y: 12412.3 },
  { x: 7644.3, y: 12487.1 },
  { x: 7778.7, y: 12591.2 },
  { x: 7889.4, y: 12720.1 },
];

const adjustedPoints = points.map((point) => ({
  x: point.x * (6000 / 14400),
  y: point.y * (6000 / 14400),
}));

adjustedPoints.forEach((point) => {
  objects.push(new Object(point.x, point.y, 0.2, "stone", 1));
});

for (let i = 0; i < 6; i++) {
  objects.push(
    new Object(randomInt(250, 5750), randomInt(250, 5750), 5, "gold", 4)
  );
}

for (let j = 0; j < 6000; j += 600) {
  for (let i = 0; i < 6000; i += 600) {
    //for (let k = 0; k < 2; k++) {
    objects.push(
      new Object(randomInt(i, i + 600), randomInt(j, j + 600), 1.8, "stone", 1)
    );
    //}

    if (j < 4400) {
      for (let k = 0; k < 1; k++) {
        objects.push(
          new Object(randomInt(i, i + 600), randomInt(j, j + 600), 2, "tree", 2)
        );
      }

      for (let k = 0; k < 2; k++) {
        objects.push(
          new Object(
            randomInt(i, i + 600),
            randomInt(j, j + 600),
            1.5,
            "bush",
            3
          )
        );
      }
    }
  }
}

objects = objects.filter((object) => object.scale > 0);

class Player {
  constructor(sid, ip, name) {
    this.alive = true;
    this.sid = sid;
    this.ip = null; //ip;
    this.x = randInt(0, 6000);
    this.y = randInt(0, 6000);
    this.moveDir = undefined;
    this.speed = 50;
    this.xVel = 0;
    this.yVel = 0;
    this.scale = 35;
    this.dir = 0;
    this.name = name.slice(0, 15) || "unknown";
    this.freezed = false;
    this.reloads = {
      0: 0,
    };
  }

  updateVelocity() {
    let speedMult = 1;

    if (this.y <= 1000) {
      speedMult *= 0.33;
    } else if (this.y >= 6000 / 2 - 500 / 2 && this.y <= 6000 / 2 + 500 / 2) {
      speedMult *= 0.33;
      this.xVel += 0.35 * 111;
    }

    const cosineMovement = this.moveDir == undefined ? 0 : cos(this.moveDir);
    const sineMovement = this.moveDir == undefined ? 0 : sin(this.moveDir);
    let distance = sqrt(cosineMovement ** 2 + sineMovement ** 2);

    if (distance > 0) {
      this.xVel += (cosineMovement / distance) * this.speed * speedMult;
      this.yVel += (sineMovement / distance) * this.speed * speedMult;
    }

    const decayFactor = pow(0.993, this.y <= 1000 ? 33 : 111);
    this.xVel *= decayFactor;
    this.yVel *= decayFactor;

    if (Math.abs(this.xVel) < 0.01) this.xVel = 0;
    if (Math.abs(this.yVel) < 0.01) this.yVel = 0;

    this.x += this.xVel;
    this.y += this.yVel;

    let tmpmp = [
      ...players.map((p) => p.player),
      ...objects.filter((a) => getDistance(this.x, this.y, a.x, a.y) <= 600),
    ];
    distance = getDistance(0, 0, this.xVel * 111, this.yVel * 111);
    let depth = Math.min(4, Math.max(1, Math.round(distance / 40)));
    let weight = 1 / depth;
    let visitedObjects = {};

    for (let i = 0; i < depth; ++i) {
      // if(this.xVel) this.x += this.xVel * delta * weight;
      // if(this.yVel) this.y += this.yVel * delta * weight;

      for (let j = 0; j < tmpmp.length; ++j) {
        let tmpObj = tmpmp[j];
        if (
          !visitedObjects[tmpObj.sid] &&
          (tmpObj.object
            ? objectCheckCollision(this, tmpObj, weight)
            : checkCollision(this, tmpObj, weight))
        ) {
          visitedObjects[tmpObj.sid] = true;

          if (!this.alive) break;
        }
      }
    }

    this.x = Math.min(6000 - this.scale, Math.max(this.scale, this.x));
    this.y = Math.min(6000 - this.scale, Math.max(this.scale, this.y));

    this.reloads[0] -= 111;

    if (this.autoGather) {
      // for now we only care about tool hammer i dont code for sustainability

      if (this.reloads[0] <= 0) {
        this.reloads[0] = 400;

        // this will be 360 hit atp
        let eff = players.filter(
          (a) =>
            //a.alive &&
            getDistance(a.player.x, a.player.y, this.x, this.y) <= 125 &&
            a.player.sid != this.sid &&
            dAng(
              getDirection(this.x, this.y, a.player.x, a.player.y),
              this.dir
            ) <=
              PI / 2.6
        );

        let buildingsHit = objects.filter(
          (a) =>
            getDistance(a.x, a.y, this.x, this.y) <= 65 + 35 + a.scale &&
            dAng(getDirection(this.x, this.y, a.x, a.y), this.dir) <= PI / 2.6
        );

        sendToAll(["h", [this.sid, 0, buildingsHit]]);
        //players.find((a) => a.player.sid == this.sid).ws.send(encoded);

        eff.forEach((effec) => {
          let player = effec.player;

          player.health -= 25;

          sendToAll(["o", [player.sid, -25]]);

          if (player.health <= 0) player.alive = false;

          player.xVel +=
            160 * cos(getDirection(this.x, this.y, player.x, player.y));
          player.yVel +=
            160 * sin(getDirection(this.x, this.y, player.x, player.y));
        });
      }
    }
  }
}

let aiTypes = [
  {
    id: 0,
    killScore: 150,
    health: 500,
    weightM: 0.8,
    speed: 95e-5,
    turnSpeed: 0.001,
    scale: 72,
    drop: ["food", 50],
  },
  {
    id: 1,
    killScore: 200,
    health: 800,
    weightM: 0.6,
    speed: 85e-5,
    turnSpeed: 0.001,
    scale: 72,
    drop: ["food", 80],
  },
];

class AI {
  constructor(sid, x, y, type) {
    this.sid = sid;
    this.isAI = true;

    this.x = x;
    this.y = y;

    const data = aiTypes[type];
    this.startX = data.fixedSpawn ? x : null;
    this.startY = data.fixedSpawn ? y : null;

    this.xVel = 0;
    this.yVel = 0;
    this.zIndex = 0;
    this.dir = 0;
    this.dirPlus = 0;
    this.src = data.src;

    if (data.name) this.name = data.name;
    if ((this.name || "").startsWith("💀")) this.isVolcanoAi = true;

    this.weightM = data.weightM;
    this.speed = data.speed;
    this.killScore = data.killScore;
    this.turnSpeed = data.turnSpeed;
    this.scale = data.scale;
    this.maxHealth = data.health;
    this.health = this.maxHealth;
    this.leapForce = data.leapForce;
    this.chargePlayer = data.chargePlayer;
    this.viewRange = data.viewRange;
    this.drop = data.drop;
    this.dmg = data.dmg;
    this.hostile = data.hostile;
    this.dontRun = data.dontRun;
    this.hitDelay = data.hitDelay;
    this.hitScare = data.hitScare;
    this.spriteMlt = data.spriteMlt;
    this.nameScale = data.nameScale;
    this.colDmg = data.colDmg;
    this.noTrap = data.noTrap;
    this.spawnDelay = data.spawnDelay;
    this.minSpawnRange = data.minSpawnRange;
    this.maxSpawnRange = data.maxSpawnRange;

    this.hitWait = 0;
    this.waitCount = 1000;
    this.moveCount = 0;
    this.targetDir = 0;

    this.active = true;
    this.alive = true;
    this.runFrom = null;
    this.chargeTarget = null;
    this.dmgOverTime = {};
  }

  updateVelocity(d = 111) {
    if (!this.active) return;

    /*
    if (this.spawnCounter) {
      this.spawnCounter -= d * this.getVolcanoAggression();
      if (this.spawnCounter <= 0) {
        this.spawnCounter = 0;
        if (this.minSpawnRange || this.maxSpawnRange) {
          const min = r.mapScale * this.minSpawnRange;
          const max = r.mapScale * this.maxSpawnRange;
          this.x = s.randInt(min, max);
          this.y = s.randInt(min, max);
        } else {
          this.x = this.startX || s.randInt(0, r.mapScale);
          this.y = this.startY || s.randInt(0, r.mapScale);
        }
      }
      return;
    }
    

    c -= d;
    if (c <= 0) {
      if (this.dmgOverTime.dmg) {
        this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer);
        this.dmgOverTime.time -= 1;
        if (this.dmgOverTime.time <= 0) this.dmgOverTime.dmg = 0;
      }
      c = 1000;
    }
    */

    let isCharging = false;
    let speedModifier = 1;

    if (
      !this.zIndex &&
      !this.lockMove &&
      this.y >= 6000 / 2 - 500 / 2 &&
      this.y <= 6000 / 2 + 500 / 2
    ) {
      speedModifier = 0.33;
      this.xVel += 0.0011 * d;
    }

    if (this.lockMove) {
      this.xVel = 0;
      this.yVel = 0;
    } else if (this.waitCount > 0) {
      this.waitCount -= d;
      if (this.waitCount <= 0) {
        /*
        if (this.chargePlayer) {
          let closestPlayer = null;
          let closestDist = null;

          for (const player of i) {
            if (
              player.alive &&
              !(player.skin && player.skin.bullRepel) &&
              s.getDistance(this.x, this.y, player.x, player.y) <= this.viewRange
            ) {
              const distance = s.getDistance(this.x, this.y, player.x, player.y);
              if (!closestPlayer || distance < closestDist) {
                closestPlayer = player;
                closestDist = distance;
              }
            }
          }

          if (closestPlayer) {
            this.chargeTarget = closestPlayer;
            this.moveCount = s.randInt(8000, 12000);
          } else {
            this.moveCount = s.randInt(1000, 2000);
            this.targetDir = s.randFloat(-Math.PI, Math.PI);
          }
        } else {
          this.moveCount = s.randInt(4000, 10000);
          this.targetDir = s.randFloat(-Math.PI, Math.PI);
        }
        */

        this.moveCount = randInt(4000, 10000);
        this.targetDir = randFloat(-Math.PI, Math.PI);
      }
    } else if (this.moveCount > 0) {
      let speed = this.speed * speedModifier * (1 + 0.3 * 1); //* this.getVolcanoAggression();

      /*
      if (
        this.runFrom &&
        this.runFrom.active &&
        !(this.runFrom.isPlayer && !this.runFrom.alive)
      ) {
        this.targetDir = getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y);
        speed *= 1.42;
      } else if (this.chargeTarget && this.chargeTarget.alive) {
        this.targetDir = getDirection(
          this.chargeTarget.x,
          this.chargeTarget.y,
          this.x,
          this.y
        );
        speed *= 1.75;
        isCharging = true;
      }*/

      if (this.hitWait) speed *= 0.3;

      if (this.dir !== this.targetDir) {
        this.dir %= Math.PI * 2;
        const diff = (this.dir - this.targetDir + Math.PI * 2) % (Math.PI * 2);
        const adjust = Math.min(
          Math.abs(diff - Math.PI * 2),
          diff,
          this.turnSpeed * d
        );
        const direction = diff - Math.PI >= 0 ? 1 : -1;
        this.dir += direction * adjust;
        this.dir %= Math.PI * 2;
      }

      this.xVel += speed * d * Math.cos(this.dir);
      this.yVel += speed * d * Math.sin(this.dir);
      this.moveCount -= d;

      if (this.moveCount <= 0) {
        this.runFrom = null;
        this.chargeTarget = null;
        this.waitCount = 1500; //this.hostile ? 1500 : s.randInt(1500, 6000);
      }
    }

    this.zIndex = 0;
    this.lockMove = false;

    const distance = getDistance(0, 0, this.xVel * d, this.yVel * d);
    const steps = Math.min(4, Math.max(1, Math.round(distance / 40)));
    const stepSize = 1 / steps;

    for (let step = 0; step < steps; step++) {
      if (this.xVel) this.x += this.xVel * d * stepSize;
      if (this.yVel) this.y += this.yVel * d * stepSize;
    }

    if (this.xVel) this.xVel *= Math.pow(0.993, d);
    if (this.yVel) this.yVel *= Math.pow(0.993, d);

    const radius = this.scale;
    if (this.x - radius < 0) {
      this.x = radius;
      this.xVel = 0;
    } else if (this.x + radius > 6000) {
      this.x = 6000 - radius;
      this.xVel = 0;
    }

    if (this.y - radius < 0) {
      this.y = radius;
      this.yVel = 0;
    } else if (this.y + radius > 6000) {
      this.y = 6000 - radius;
      this.yVel = 0;
    }
  }
}

let ais = [];
for (let i = 0; i < 14; i++) {
  ais.push(new AI(ais.length, Math.random() * 6000, Math.random() * 6000, 0));
}

for (let i = 0; i < 14; i++) {
  ais.push(new AI(ais.length, Math.random() * 6000, Math.random() * 6000, 1));
}

let players = [];
let availableSIDs = [];

function getAvailableSID() {
  if (availableSIDs.length > 0) {
    return availableSIDs.shift();
  }
  return players.length;
}

server.on("connection", (ws, req) => {
  if (players.length > 40) return;

  ws.onopen = function () {};

  ws.onmessage = function (event) {
    const data = msgpack.decode(new Uint8Array(event.data));

    if (data[0] === "sp") {
      /*
      if (ws?.player?.sid && !ws?.player?.alive && ws?.player) {
        // means its for respawning

        ws.player.name = data[1];
        ws.player.health = 100;
        ws.player.alive = true;

        ws.player.x = randInt(35, 5965);
        ws.player.y = randInt(35, 5965);

        players.forEach((p) => {
          const isCurrentPlayer = p.ws === ws;
          const encoded = msgpack.encode([["2", [ws.player, isCurrentPlayer]]]);
          p.ws.send(encoded);
        });
      } else {*/
        const sid = getAvailableSID();
        const newPlayer = new Player(
          sid,
          req.headers["x-forwarded-for"] || req.socket.remoteAddress,
          data[1]
        );

        players.forEach((p) => {
          const encoded = msgpack.encode([["2", [p.player, false]]]);
          ws.send(encoded);
        });

        players.push({ ws, player: newPlayer });
        ws.player = newPlayer;

        const encoded = msgpack.encode([
          ["g", [objects.filter((object) => object.scale > 0)]],
        ]);
        ws.send(encoded);

        players.forEach((p) => {
          const isCurrentPlayer = p.ws === ws;
          const encoded = msgpack.encode([["2", [newPlayer, isCurrentPlayer]]]);
          p.ws.send(encoded);
        });
      //}
    } else if (data[0] === "m") {
      ws.player.moveDir = data[1];
    } else if (data[0] === "d") {
      if (Number(data[1]) == NaN) return;
      if (ws.player.freezed) return;
      ws.player.dir = data[1];
    } else if (data[0] === "6") {
      if (!!data[1]) {
        ws.player.chatMessage = data[1].slice(0, 40);

        if (data[1] == process.env.adminpassword) ws.player.admin = true;

        if (data[1].startsWith("!") && ws.player.admin) {
          let cmd = data[1].slice(1).split(" ")[0];
          let args = data[1].slice(2).split(" ")[1];

          if (cmd == "tp") {
            let player = players.find((a) => a.player.sid == args[0]);
            if (!player) return;
            ws.player.x = player.player.x;
            ws.player.y = player.player.y;
          } else if (cmd == "kick") {
            players.find((a) => a.player.sid == args[0])?.ws?.close();
          } else if (cmd == "bring") {
            let player = players.find((a) => a.player.sid == args[0]);
            if (!player) return;
            player.player.x = ws.player.x;
            player.player.y = ws.player.y;
          } else if (cmd == "freeze") {
            let player = players.find((a) => a.player.sid == args[0]);
            player.player.freezed = !player.player.freezed;
          }
        }

        players.forEach((p) => {
          const encoded = msgpack.encode([
            ["6", [ws.player.sid, ws.player.chatMessage]],
          ]);
          p.ws.send(encoded);
        });
      }
    } else if (data[0] === "0") {
      const encoded = msgpack.encode([["0", [data[1]]]]);
      ws.send(encoded);
    } else if (data[0] === "h") {
      if (!data[1]) {
        ws.player.lockDir = !ws.player.lockDir;
      } else {
        ws.player.autoGather = !ws.player.autoGather;
      }

      console.log(data);
    }
  };

  ws.onclose = function () {
    let index = players.findIndex((p) => p.ws === ws);
    if (index !== -1) {
      let player = players.splice(index, 1)[0];
      availableSIDs.push(player.player.sid);
      availableSIDs.sort((a, b) => a - b);

      players.forEach((p) => {
        const encoded = msgpack.encode([["r", [player.player.sid]]]);
        p.ws.send(encoded);
      });
    }
  };
});

let tc = 0;
setInterval(() => {
  tc++;
  players.forEach((playerData) => {
    const tmp = playerData.player;
    tmp.updateVelocity();
  });

  ais.forEach((ai) => {
    ai.updateVelocity();
  });

  sendToAll(["1", players.map((p) => p.player)]);
  sendToAll(["a", ais]);
  sendToAll([
    "l",
    players
      .map((p) => p.player)
      .sort((z, x) => z.sid - x.sid)
      .slice(0, 10),
  ]);
}, 111);
