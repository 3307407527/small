var gGame = null;


function gameStart() {
    gGame = new Game();
    gGame.update();
}
function Game() {
    var _this = this;
    this.punkhoos = [];
    this.xiaofus = [];
    this.fireballs = [];

    this.obj = [
        {x: 200, y: 30},
        {x: 300, y: 150},
        {x: 400, y: 30},
        {x: 500, y: 150},
        {x: 600, y: 30},
        {x: 700, y: 150},
        {x: 800, y: 30},
        {x: 30, y: 240},
        {x: 415, y: 300},
        {x: 30, y: 360},
        {x: 415, y: 420},
        {x: 450, y: 240},
        {x: 860, y: 300},
        {x: 450, y: 360},
        {x: 860, y: 420},
        {x: 415, y: 510},
        {x: 30, y: 570},
        {x: 415, y: 630},
        {x: 30, y: 700},
        {x: 500, y: 520},
        {x: 600, y: 720},
        {x: 700, y: 520},
        {x: 800, y: 720}

    ];
    this.objFu = [
        {x: 1030, y: 720},
        {x: 1120, y: 720},
        {x: 1300, y: 720},
        {x: 1390, y: 720},
        {x: 1490, y: 720},
        {x: 1570, y: 720},
        {x: 1680, y: 720}
    ];
    this.objBall = [
        {x: 1030, y: 700},
        {x: 1120, y: 700},
        {x: 1300, y: 700},
        {x: 1390, y: 700},
        {x: 1490, y: 700},
        {x: 1570, y: 700},
        {x: 1680, y: 700}
    ];
    this.frame = 0;
    this.lastFram = 0;
    this.CDCode = 450;
    this.nobita = new Nobita();
    this.brick = new Brick();
    this.doraemon = new Doraemon();


    for (var i = 0; i < this.obj.length; i++) {
        this.punkhoos.push(new Punkhoo(this.obj[i].x, this.obj[i].y))
    }

    for (var i = 0; i < this.objFu.length; i++) {
        this.xiaofus.push(new Xiaofu(this.objFu[i].x, this.objFu[i].y))
    }


    this.update = function () {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        _this.frame++;
        _this.getWall();
        _this.nobita.draw();
        _this.nobita.updatePos();
        _this.brick.drawGryAll();
        _this.doraemon.draw();
        _this.doraemon.updatePos();

        _this.punkhoos.forEach(function (val) {
            val.draw();
            val.updatePos();
            if (Math.abs(val.x - _this.nobita.x) <= 30 && Math.abs(_this.nobita.y - val.y) <= 50) {
                _this.nobita.dead = true;
            }
        });

        _this.xiaofus.forEach(function (val) {
            val.draw();
            val.updatePos();
            if (Math.abs(val.x - _this.nobita.x) <= 30 && Math.abs(_this.nobita.y - val.y) <= 20) {
                _this.nobita.dead = true;
            }
        });
        for (var i = 0; i < _this.objBall.length; i++) {
            if (_this.frame >= _this.lastFram + _this.CDCode) {
                _this.fireballs.push(new Fireball(_this.objBall[i].x, _this.objBall[i].y));
            }
        }
        if (_this.frame >= _this.lastFram + _this.CDCode) {
            _this.lastFram = _this.frame;
        }

        _this.fireballs.forEach(function (val,index) {
            val.draw();
            val.updatePos();
            if(Math.abs(val.x-_this.nobita.x)<=30 && Math.abs(val.y-_this.nobita.y)<=50){
                _this.nobita.dead=true;
                val.dead=true;
            }
            if(val.dead){
                _this.fireballs.splice(index,1)
            }
        });
        if (_this.nobita.dead) {
            _this.nobita.x = 30;
            _this.nobita.y = 30;
            _this.nobita.dead = false;
        }

        _this.nobita.drawBack();
        window.requestAnimationFrame(_this.update);
    };


    this.getWall = function () {
        for (var i = 0; i <= 60; i++) {
            if (_this.brick.x <= 1800) {
                _this.brick.x += 30 * i;
            }
            _this.brick.draw();
            _this.brick.x = 0;
        }
        for (var j = 0; j <= 60; j++) {
            if (_this.brick.bx <= 1800) {
                _this.brick.bx += 30 * j;
            }
            _this.brick.draw();
            _this.brick.bx = 0;
        }
        for (var k = 0; k <= 25; k++) {
            if (_this.brick.ly <= 780) {
                _this.brick.ly += 30 * k
            }
            _this.brick.draw();
            _this.brick.ly = 0;
        }
        for (var l = 0; l <= 25; l++) {
            if (_this.brick.ry <= 780) {
                _this.brick.ry += 30 * l
            }
            _this.brick.draw();
            _this.brick.ry = 0
        }
        for (var i = 1; i <= 23; i++) {
            if (_this.brick.y <= 780) {
                _this.brick.y += 30 * i
            }
            _this.brick.drawGry();
            _this.brick.y = 0
        }
        for (var i = 1; i <= 27; i++) {
            if (_this.brick.x <= 840) {
                _this.brick.x += 30 * i
            }
            _this.brick.drawGry1();
            _this.brick.x = 0;
        }
        for (var i = 3; i <= 29; i++) {
            if (_this.brick.x <= 900) {
                _this.brick.x += 30 * i
            }
            _this.brick.drawGry2();
            _this.brick.x = 0;
        }

    };

}
