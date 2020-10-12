var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');

var img = new Image();
img.src = "img/dax3.png";
var img2 = new Image();
img2.src = "img/zt.png";
var imgGray = new Image();
imgGray.src = "img/ztgry.png";
var imgPunkhoo = new Image();
imgPunkhoo.src = "img/panghu.png";
var imgDoraemon=new Image();
imgDoraemon.src="img/meng5.png";
var imgXiaofu=new Image();
imgXiaofu.src="img/fu.png";
var imgFireball=new Image();
imgFireball.src="img/huo3.png";
var imgBack=new Image();
imgBack.src="img/back.png";
var imgNew=new Image();
imgNew.src="img/daxiong2.png";
var imgGuai=new Image();
imgGuai.src="img/guai.png";

var w = 40;
var h = 60;


function Nobita() {
    var _this = this;
    this.frameX = 0;
    this.frameY = 0;
    this.x = 30;
    this.y = 30;
    this.v = 5;
    this.moveTop = true;
    this.moveLeft = true;
    this.moveRight = true;
    this.moveDown = true;
    this.dead=false;
    this.imgBack=false;
    this.count=0;

    this.draw = function () {
        ctx.beginPath();
        ctx.drawImage(img, _this.frameX * img.width / 4, _this.frameY * img.height / 4,
            img.width / 4, img.height / 4, _this.x, _this.y, img.width / 4, img.height / 4)

    };
    this.drawNew=function () {
        ctx.beginPath();
        ctx.drawImage(imgNew, _this.frameX * imgNew.width / 4, _this.frameY * imgNew.height / 4,
            imgNew.width / 4, imgNew.height / 4, _this.x, _this.y, imgNew.width / 4, imgNew.height / 4)
    };

    this.updatePos = function () {

        if (_this.x <= 30 && _this.y <= 810 || _this.x == 120 && _this.y >= 30 && _this.y < 90 + 60 || _this.x == 840 && _this.y > 150 && _this.y < 240
            || _this.x == 930 && _this.y > 0 && _this.y < 720 || _this.x == 1020 && _this.y > 570 && _this.y < 600 + h || _this.x == 1110 && _this.y > 480 && _this.y <= 810
            || _this.x == 1020 && _this.y > 300 && _this.y < 570 || _this.x == 1110 && _this.y > 210 && _this.y < 390 || _this.x == 1020 && _this.y > 30 && _this.y < 300
            || _this.x == 1110 && _this.y > 0 && _this.y < 120 || _this.x == 1200 && _this.y > 30 && _this.y < 210 || _this.x == 1650 && _this.y > 30 && _this.y < 210 ||
            _this.x == 1500 && _this.y > 120 && _this.y < 270 || _this.x == 1560 && _this.y > 180 && _this.y < 660 || _this.x == 1650 && _this.y > 210 && _this.y < 450
            || _this.x == 1650 && _this.y > 450 && _this.y < 810 || _this.x == 1470 && _this.y > 270 && _this.y < 660 || _this.x == 1380 && _this.y > 210 && _this.y < 360
            || _this.x == 1200 && _this.y > 210 && _this.y < 660 || _this.x == 1290 && _this.y > 570 && _this.y < 660 || _this.x == 1380 && _this.y > 480 && _this.y < 810
            || _this.x == 1290 && _this.y > 300 && _this.y < 570) {
            _this.moveLeft = false;
        } else {
            _this.moveLeft = true;
        }

        if (_this.x <= 1800 && _this.y <= 30 || _this.y == 150 && _this.x > 90 - 40 && _this.x <= 70 + 40 || _this.y == 240 && _this.x > 0 && _this.x < 840
            || _this.y == 450 + img.height / 4 && _this.x > 50 && _this.x < 900 || _this.y == 720 && _this.x > 860 && _this.x < 890 + w || _this.y == 660 && _this.x > 900 && _this.x < 1020
            || _this.y == 570 && _this.x > 950 && _this.x < 1020 || _this.y == 390 && _this.x > 900 && _this.x < 990 || _this.y == 480 && _this.x > 990 && _this.x < 1200
            || _this.y == 390 && _this.x > 1040 && _this.x < 1110 || _this.y == 300 && _this.x > 950 && _this.x < 1080 || _this.y == 120 && _this.x > 1040 && _this.x < 1110
            || _this.y == 120 && _this.x > 1130 && _this.x < 1620 || _this.y == 210 && _this.x > 1580 && _this.x < 1800 || _this.y == 210 && _this.x > 990 && _this.x < 1500
            || _this.y == 270 && _this.x > 1430 && _this.x < 1560 || _this.y == 660 && _this.x > 1490 && _this.x < 1560 || _this.y == 450 && _this.x > 1520 && _this.x < 1650
            || _this.y == 660 && _this.x > 1400 && _this.x < 1470 || _this.y == 450 && _this.x > 1310 && _this.x < 1470 || _this.y == 360 && _this.x > 1310 && _this.x < 1470
            || _this.y == 300 && _this.x > 1130 && _this.x < 1380 || _this.y == 660 && _this.x > 1130 && _this.x < 1290 || _this.y == 570 && _this.x > 1220 && _this.x < 1380) {
            _this.moveTop = false;
        } else {
            _this.moveTop = true;
        }

        if (_this.x >= 1770 - w && _this.y >= 30 || _this.x == 90 - 40 && _this.y >= 30 && _this.y < 90 + h || _this.x == 90 - w && _this.y > 420 && _this.y < 450 + h
            || _this.x == 860&& _this.y > 0 && _this.y < 720 || _this.x == 1040 && _this.y > 480 && _this.y <= 810 || _this.x == 950 && _this.y > 300 && _this.y < 570 || _this.x == 1040 &&
            _this.y > 210 && _this.y < 390 || _this.x == 950 && _this.y > 30 && _this.y < 300 || _this.x == 1040 && _this.y > 0 && _this.y < 120 || _this.x == 1130 && _this.y > 30 && _this.y < 180
            || _this.x == 1580 && _this.y > 30 && _this.y < 210 || _this.x == 1430 && _this.y > 180 && _this.y < 270 || _this.x == 1490 && _this.y > 210 && _this.y < 660 || _this.x == 1580 && _this.y > 210 && _this.y < 450
            || _this.x == 1580 && _this.y > 450 && _this.y < 810 || _this.x == 1400 && _this.y > 270 && _this.y < 660 || _this.x == 1310 && _this.y > 360 && _this.y < 450 || _this.x == 1310 && _this.y > 210 && _this.y < 360
            || _this.x == 1130 && _this.y > 210 && _this.y < 660 || _this.x == 1310 && _this.y > 480 && _this.y < 810 || _this.x == 1220 && _this.y > 300 && _this.y < 570) {
            _this.moveRight = false;
            console.log(_this.x, _this.y,img.width / 4);
        } else {
            _this.moveRight = true;
        }

        if (_this.x <= 1800 && _this.y >= 780 - h || _this.y == 210 - h && _this.x > 0 && _this.x < 840 || _this.y == 420 && _this.x > 50 && _this.x < 900
            || _this.y == 570 && _this.x > 900 && _this.x < 1020 || _this.y == 480 && _this.x > 1040 && _this.x < 1110 || _this.y == 300 && _this.x > 900 && _this.x < 1020
            || _this.y == 390 && _this.x > 990 && _this.x < 1200 || _this.y == 210 && _this.x > 950 && _this.x < 1110 || _this.y == 30 && _this.x > 950 && _this.x < 1020 ||
            _this.y == 30 && _this.x > 1130 && _this.x < 1650 || _this.y == 120 && _this.x > 1580 && _this.x < 1800 || _this.y == 120 && _this.x > 990 && _this.x < 1500 ||
            _this.y == 180 && _this.x > 1430 && _this.x < 1560 || _this.y == 210 && _this.x > 1580 && _this.x < 1650 || _this.y == 360 && _this.x > 1520 && _this.x < 1650
            || _this.y == 450 && _this.x > 1580 && _this.x < 1650 || _this.y == 360 && _this.x > 1310 && _this.x < 1470 || _this.y == 270 && _this.x > 1310 && _this.x < 1470
            || _this.y == 210 && _this.x > 1130 && _this.x < 1380 || _this.y == 570 && _this.x > 1130 && _this.x < 1290 || _this.y == 300 && _this.x > 1220 && _this.x < 1290
            || _this.y == 480 && _this.x > 1220 && _this.x < 1380) {
            _this.moveDown = false;
        } else {
            _this.moveDown = true;
        }



    };

    document.onkeydown=function (e) {

        if(e.keyCode==65){
            _this.frameX=++_this.frameX>=4?0:_this.frameX;
            _this.frameY=1;
            if(_this.moveLeft){
                _this.x-=_this.v
            }

        }else if(e.keyCode==87){
            _this.frameX=++_this.frameX>=4?0:_this.frameX;
            _this.frameY=3;
            if(_this.moveTop){
                _this.y-=_this.v
            }

        }else if(e.keyCode==68){
            _this.frameX=++_this.frameX>=4?0:_this.frameX;
            _this.frameY=2;
            if(_this.moveRight){
                _this.x+=_this.v;

            }

        }else if(e.keyCode==83){
            _this.frameX=++_this.frameX>=4?0:_this.frameX;
            _this.frameY=0;
            if(_this.moveDown){
                _this.y+=_this.v
            }
        }else if(e.keyCode==69){
            if(_this.x>1650 && _this.x<1682 &&_this.y>90 && _this.y<122){
                _this.imgBack=true;
            }
        }



    };
    this.drawBack=function () {
        _this.count++;
        if(_this.imgBack){
            ctx.clearRect(0,0,cvs.width,cvs.height);
            ctx.beginPath();
            ctx.drawImage(imgBack,500,80);
            if(_this.count>=500){
                self.location="bigTwo.html";
                _this.count=0
            }


        }
    };

}

function Brick() {
    var _this = this;
    this.x = 0;
    this.y = 0;
    this.bx = 0;
    this.by = 780;
    this.lx = 0;
    this.ly = 30;
    this.rx = 1770;
    this.ry = 30;

    this.draw = function () {
        ctx.beginPath();
        ctx.drawImage(img2, _this.x, _this.y); //画上面的墙
        ctx.beginPath();
        ctx.drawImage(img2, _this.bx, _this.by);//画下面的墙
        ctx.beginPath();
        ctx.drawImage(img2, _this.lx, _this.ly);//画左边的墙
        ctx.beginPath();
        ctx.drawImage(img2, _this.rx, _this.ry); //画右边的墙

    };

    this.drawGry = function () {
        ctx.beginPath();
        ctx.drawImage(imgGray, 900, _this.y)
    };
    this.drawGry1 = function () {
        ctx.beginPath();
        ctx.drawImage(imgGray, _this.x, 210)
    };
    this.drawGry2 = function () {
        ctx.beginPath();
        ctx.drawImage(imgGray, _this.x, 480)
    };
    this.drawGryAll = function () {
        ctx.beginPath();
        ctx.drawImage(imgGray, 90, 30);
        ctx.drawImage(imgGray, 90, 60);
        ctx.drawImage(imgGray, 90, 90);
        ctx.drawImage(imgGray, 90, 120);
        ctx.drawImage(imgGray, 930, 630);
        ctx.drawImage(imgGray, 960, 630);
        ctx.drawImage(imgGray, 990, 630);
        ctx.drawImage(imgGray, 1080, 630);
        ctx.drawImage(imgGray, 1080, 750);
        ctx.drawImage(imgGray, 1080, 720);
        ctx.drawImage(imgGray, 1080, 690);
        ctx.drawImage(imgGray, 1080, 660);
        ctx.drawImage(imgGray, 1080, 630);
        ctx.drawImage(imgGray, 1080, 600);
        ctx.drawImage(imgGray, 1080, 570);
        ctx.drawImage(imgGray, 1080, 540);
        ctx.drawImage(imgGray, 930, 360);
        ctx.drawImage(imgGray, 960, 360);
        ctx.drawImage(imgGray, 990, 360);
        ctx.drawImage(imgGray, 990, 390);
        ctx.drawImage(imgGray, 990, 420);
        ctx.drawImage(imgGray, 990, 450);
        ctx.drawImage(imgGray, 990, 480);
        ctx.drawImage(imgGray, 990, 510);
        ctx.drawImage(imgGray, 990, 540);
        ctx.drawImage(imgGray, 1020, 450);
        ctx.drawImage(imgGray, 1050, 450);
        ctx.drawImage(imgGray, 1080, 450);
        ctx.drawImage(imgGray, 1110, 450);
        ctx.drawImage(imgGray, 1140, 450);
        ctx.drawImage(imgGray, 1170, 450);
        ctx.drawImage(imgGray, 1170, 480);
        ctx.drawImage(imgGray, 1170, 510);
        ctx.drawImage(imgGray, 1170, 540);
        ctx.drawImage(imgGray, 1170, 570);
        ctx.drawImage(imgGray, 1170, 600);
        ctx.drawImage(imgGray, 1170, 630);
        ctx.drawImage(imgGray, 1200, 630);
        ctx.drawImage(imgGray, 1230, 630);
        ctx.drawImage(imgGray, 1260, 630);
        ctx.drawImage(imgGray, 1350, 750);
        ctx.drawImage(imgGray, 1350, 720);
        ctx.drawImage(imgGray, 1350, 690);
        ctx.drawImage(imgGray, 1350, 660);
        ctx.drawImage(imgGray, 1350, 630);
        ctx.drawImage(imgGray, 1350, 600);
        ctx.drawImage(imgGray, 1350, 570);
        ctx.drawImage(imgGray, 1350, 540);
        ctx.drawImage(imgGray, 1320, 540);
        ctx.drawImage(imgGray, 1290, 540);
        ctx.drawImage(imgGray, 1260, 540);
        ctx.drawImage(imgGray, 1260, 510);
        ctx.drawImage(imgGray, 1260, 480);
        ctx.drawImage(imgGray, 1260, 450);
        ctx.drawImage(imgGray, 1260, 420);
        ctx.drawImage(imgGray, 1260, 390);
        ctx.drawImage(imgGray, 1260, 360);
        ctx.drawImage(imgGray, 1350, 420);
        ctx.drawImage(imgGray, 1410, 420);
        ctx.drawImage(imgGray, 1440, 420);
        ctx.drawImage(imgGray, 1380, 420);
        ctx.drawImage(imgGray, 1440, 450);
        ctx.drawImage(imgGray, 1440, 480);
        ctx.drawImage(imgGray, 1440, 510);
        ctx.drawImage(imgGray, 1440, 540);
        ctx.drawImage(imgGray, 1440, 570);
        ctx.drawImage(imgGray, 1440, 600);
        ctx.drawImage(imgGray, 1440, 630);
        ctx.drawImage(imgGray, 1530, 630);
        ctx.drawImage(imgGray, 1530, 600);
        ctx.drawImage(imgGray, 1530, 570);
        ctx.drawImage(imgGray, 1530, 540);
        ctx.drawImage(imgGray, 1530, 510);
        ctx.drawImage(imgGray, 1530, 480);
        ctx.drawImage(imgGray, 1530, 450);
        ctx.drawImage(imgGray, 1530, 420);
        ctx.drawImage(imgGray, 1530, 390);
        ctx.drawImage(imgGray, 1530, 420);
        ctx.drawImage(imgGray, 1560, 420);
        ctx.drawImage(imgGray, 1590, 420);
        ctx.drawImage(imgGray, 1620, 720);
        ctx.drawImage(imgGray, 1620, 750);
        ctx.drawImage(imgGray, 1620, 420);
        ctx.drawImage(imgGray, 1620, 510);
        ctx.drawImage(imgGray, 1620, 540);
        ctx.drawImage(imgGray, 1620, 570);
        ctx.drawImage(imgGray, 1620, 600);
        ctx.drawImage(imgGray, 1620, 630);
        ctx.drawImage(imgGray, 1620, 660);
        ctx.drawImage(imgGray, 1620, 690);
        ctx.drawImage(imgGray, 990, 210);
        ctx.drawImage(imgGray, 990, 240);
        ctx.drawImage(imgGray, 990, 270);
        ctx.drawImage(imgGray, 990, 180);
        ctx.drawImage(imgGray, 990, 150);
        ctx.drawImage(imgGray, 990, 120);
        ctx.drawImage(imgGray, 990, 90);
        ctx.drawImage(imgGray, 1080, 30);
        ctx.drawImage(imgGray, 1080, 60);
        ctx.drawImage(imgGray, 1080, 90);
        ctx.drawImage(imgGray, 1110, 180);
        ctx.drawImage(imgGray, 1080, 180);
        ctx.drawImage(imgGray, 1050, 180);
        ctx.drawImage(imgGray, 1020, 180);
        ctx.drawImage(imgGray, 1020, 270);
        ctx.drawImage(imgGray, 1050, 270);
        ctx.drawImage(imgGray, 1080, 270);
        ctx.drawImage(imgGray, 1080, 300);
        ctx.drawImage(imgGray, 1080, 330);
        ctx.drawImage(imgGray, 1080, 360);
        ctx.drawImage(imgGray, 1170, 420);
        ctx.drawImage(imgGray, 1170, 450);
        ctx.drawImage(imgGray, 1170, 420);
        ctx.drawImage(imgGray, 1170, 390);
        ctx.drawImage(imgGray, 1170, 360);
        ctx.drawImage(imgGray, 1170, 330);
        ctx.drawImage(imgGray, 1170, 300);
        ctx.drawImage(imgGray, 1170, 270);
        ctx.drawImage(imgGray, 1140, 180);
        ctx.drawImage(imgGray, 1170, 180);
        ctx.drawImage(imgGray, 1200, 180);
        ctx.drawImage(imgGray, 1230, 180);
        ctx.drawImage(imgGray, 1260, 180);
        ctx.drawImage(imgGray, 1290, 180);
        ctx.drawImage(imgGray, 1290, 270);
        ctx.drawImage(imgGray, 1260, 270);
        ctx.drawImage(imgGray, 1230, 270);
        ctx.drawImage(imgGray, 1200, 270);
        ctx.drawImage(imgGray, 1320, 270);
        ctx.drawImage(imgGray, 1350, 270);
        ctx.drawImage(imgGray, 1350, 300);
        ctx.drawImage(imgGray, 1350, 330);
        ctx.drawImage(imgGray, 1380, 330);
        ctx.drawImage(imgGray, 1440, 360);
        ctx.drawImage(imgGray, 1440, 390);
        ctx.drawImage(imgGray, 1410, 330);
        ctx.drawImage(imgGray, 1440, 330);
        ctx.drawImage(imgGray, 1380, 180);
        ctx.drawImage(imgGray, 1350, 180);
        ctx.drawImage(imgGray, 1320, 180);
        ctx.drawImage(imgGray, 1410, 180);
        ctx.drawImage(imgGray, 1440, 180);
        ctx.drawImage(imgGray, 1470, 180);
        ctx.drawImage(imgGray, 1470, 210);
        ctx.drawImage(imgGray, 1470, 240);
        ctx.drawImage(imgGray, 1500, 240);
        ctx.drawImage(imgGray, 1530, 240);
        ctx.drawImage(imgGray, 1530, 270);
        ctx.drawImage(imgGray, 1530, 300);
        ctx.drawImage(imgGray, 1530, 330);
        ctx.drawImage(imgGray, 1530, 360);
        ctx.drawImage(imgGray, 1530, 390);
        ctx.drawImage(imgGray, 1620, 390);
        ctx.drawImage(imgGray, 1620, 360);
        ctx.drawImage(imgGray, 1620, 330);
        ctx.drawImage(imgGray, 1620, 300);
        ctx.drawImage(imgGray, 1620, 270);
        ctx.drawImage(imgGray, 1620, 180);
        ctx.drawImage(imgGray, 1650, 180);
        ctx.drawImage(imgGray, 1680, 180);
        ctx.drawImage(imgGray, 1710, 180);
        ctx.drawImage(imgGray, 1740, 180);
        ctx.drawImage(imgGray, 1590, 90);
        ctx.drawImage(imgGray, 1620, 90);
        ctx.drawImage(imgGray, 1620, 120);
        ctx.drawImage(imgGray, 1620, 150);
        ctx.drawImage(imgGray, 1560, 90);
        ctx.drawImage(imgGray, 1530, 90);
        ctx.drawImage(imgGray, 1500, 90);
        ctx.drawImage(imgGray, 1470, 90);
        ctx.drawImage(imgGray, 1440, 90);
        ctx.drawImage(imgGray, 1410, 90);
        ctx.drawImage(imgGray, 1380, 90);
        ctx.drawImage(imgGray, 1350, 90);
        ctx.drawImage(imgGray, 1320, 90);
        ctx.drawImage(imgGray, 1290, 90);
        ctx.drawImage(imgGray, 1260, 90);
        ctx.drawImage(imgGray, 1230, 90);
        ctx.drawImage(imgGray, 1200, 90);
        ctx.drawImage(imgGray, 1170, 90);
        ctx.drawImage(imgGray, 1170, 120);
        ctx.drawImage(imgGray, 1170, 150);


    };

}

function Punkhoo(x, y) {
    var _this = this;
    this.frameX = 0;
    this.frameY = 0;
    this.x = x;
    this.y = y;
    this.v = 1;
    this.dt = 0;
    this.dx = 0;
    this.draw = function () {
        ctx.beginPath();
        ctx.drawImage(imgPunkhoo, _this.frameX * img.width / 4, _this.frameY * img.height / 4,
            img.width / 4, img.height / 4, _this.x, _this.y, img.width / 4, img.height / 4)
    };
    this.updatePos = function () {
        _this.y += _this.v * _this.dt;
        _this.x += _this.v * _this.dx;
        _this.frameX = ++_this.frameX >= 4 ? 0 : _this.frameX;
        if (_this.y == 30 ) {
            _this.frameY = 0;
            _this.dt = 1;
        }
        if (_this.y == 150) {
            _this.frameY = 3;
            _this.dt = -1;
        }
        if (_this.x == 30) {
            _this.frameY = 2;
            _this.dx = 1
        }
        if (_this.x == 415) {
            _this.frameY = 1;
            _this.dx = -1;
        }
        if (_this.x == 450) {
            _this.frameY = 2;
            _this.dx = 1
        }
        if (_this.x == 860) {
            _this.frameY = 1;
            _this.dx = -1
        }
        if(_this.y==520){
            _this.frameY = 0;
            _this.dt = 1;
        }
        if(_this.y==720){
            _this.frameY = 3;
            _this.dt = -1;
        }
    };
}

function Xiaofu(x,y) {
    var _this=this;
    this.x=x;
    this.y=y;
    this.frameX=0;
    this.frameY=3;
    this.count=0;

    this.draw=function () {
        ctx.beginPath();
        ctx.drawImage(imgXiaofu,_this.frameX * img.width / 4, _this.frameY * img.height / 4,
            img.width / 4, img.height / 4, _this.x, _this.y, img.width / 4, img.height / 4)
    };
    this.updatePos=function () {
        _this.count++;
        if(_this.count>=450){
            _this.frameX = ++_this.frameX >= 4 ? 0 : _this.frameX;
            _this.count=0;
        }
    }
}

function Doraemon() {
    var _this=this;
    this.x=1710;
    this.y=110;
    this.frameX=0;
    this.frameY=0;
    this.count=0;

    this.draw=function () {
        ctx.beginPath();
        ctx.drawImage(imgDoraemon, _this.frameX * imgDoraemon.width / 5, _this.frameY ,
            imgDoraemon.width / 5, imgDoraemon.height , _this.x, _this.y, imgDoraemon.width / 5, imgDoraemon.height )
    };
    this.updatePos=function () {
        _this.count++;
        if(_this.count>=15){
            _this.frameX = ++_this.frameX >= 5 ? 0 : _this.frameX;
            _this.frameY = 0;
            _this.count=0
        }

    };

}

function  Fireball(x,y) {
    var _this=this;
    this.v=1;
    this.x=x;
    this.y=y;
    this.dead=false;
    this.draw=function () {
        ctx.beginPath();
        ctx.drawImage(imgFireball,_this.x,_this.y)
    };
    this.updatePos=function () {
        var dt=1;
        _this.y-=_this.v*dt;
        if(_this.x==1030 && _this.y==480 || _this.x==1120 && _this.y==480 ||_this.x==1300 && _this.y==570||_this.x==1300 && _this.y==450
            ||_this.x==1390 && _this.y==450 ||_this.x==1490 && _this.y==270 || _this.x==1570 && _this.y==450|| _this.x==1680 && _this.y==210 ){
           _this.dead=true
        }else {
            _this.dead=false
        }
    }
}

function Enemy(x,y) {
    var _this=this;
    this.x=x;
    this.y=y;
    this.v=2;
    this.frameX=0;
    this.frameY=0;
    this.draw=function () {
        ctx.beginPath();
        ctx.drawImage(imgGuai,_this.frameX * imgGuai.width / 4, _this.frameY * imgGuai.height / 4,
            imgGuai.width / 4, imgGuai.height / 4, _this.x, _this.y, imgGuai.width / 4, imgGuai.height / 4);
    };

}