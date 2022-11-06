const N = document.querySelector('.n');
const N1 = document.querySelector('.n2');
const N2 = document.querySelector('.n3');
const N3 = document.querySelector('.n4');
const N4 = document.querySelector('.n5');
const N5 = document.querySelector('.n6');
const N6 = document.querySelector('.n7');
const N7 = document.querySelector('.n8');
const N8 = document.querySelector('.n9');
const N9 = document.querySelector('.n10');
const N10 = document.querySelector('.n11');
const N11 = document.querySelector('.n12');
const Nav = document.querySelector('nav');
const Dev = document.querySelector('.dev');
const Ple = document.querySelector('.ple');

const T = document.querySelector('.t');
const T1 = document.querySelector('.t1');
const T2 = document.querySelector('.t2');
const T3 = document.querySelector('.t3');
const T4 = document.querySelector('.t4');
const T5 = document.querySelector('.t5');
const T6 = document.querySelector('.t6');
const T7 = document.querySelector('.t7');
const T8 = document.querySelector('.t8');
const T9 = document.querySelector('.t9');
const T10 = document.querySelector('.t10');
const T11 = document.querySelector('.t11');
const T12 = document.querySelector('.t12');
const T13 = document.querySelector('.t13');
const T14 = document.querySelector('.t14');
const T15 = document.querySelector('.t15');
const T16 = document.querySelector('.t16');
const T17 = document.querySelector('.t17');
const T18 = document.querySelector('.t18');
const T19 = document.querySelector('.t19');
const T20 = document.querySelector('.t20');
const T21 = document.querySelector('.t21');
const T22 = document.querySelector('.t22');
const T23 = document.querySelector('.t23');
const T24 = document.querySelector('.t24');
const T25 = document.querySelector('.t25');
const T26 = document.querySelector('.t26');
const T27 = document.querySelector('.t27');
const T28 = document.querySelector('.t28');
const T29 = document.querySelector('.t29');
const T30 = document.querySelector('.t30');
const T31 = document.querySelector('.t31');
const T32 = document.querySelector('.t32');
const T33 = document.querySelector('.t33');
const T34 = document.querySelector('.t34');
const T35 = document.querySelector('.t35');
const T36 = document.querySelector('.t36');
const T37 = document.querySelector('.t37');
const T38 = document.querySelector('.t38');
const Y = document.querySelector('.y');

const tm = new TimelineMax();
tm.to(N, 0.6, { autoAlpha: 1, transition: 1.7 });
tm.to(Nav, 0.3, { autoAlpha: 1, transition: 1.5 });
tm.to(Dev, 2, { x: 383, ease: 'power4.out' });
tm.to(Ple, 1, { x: -228, ease: 'power4.out' }, '-=1.7');

let controller = new ScrollMagic.Controller();
const tl = new TimelineLite();
tl.to(N, 0.3, { autoAlpha: 0, transition: 0.8 });
tl.to(N1, 0.3, { autoAlpha: 1 });
tl.to(N1, 0.3, { autoAlpha: 0, transition: 0.8 });
tl.to(N2, 0.3, { autoAlpha: 1 });
tl.to(N2, 0.3, { autoAlpha: 0, transition: 0.8 });
tl.to(N3, 0.3, { autoAlpha: 1 });
tl.to(N3, 0.3, { autoAlpha: 0, transition: 0.8 });
tl.to(N4, 0.3, { autoAlpha: 1 });
tl.to(N4, 0.3, { autoAlpha: 0, transition: 0.8 });
tl.to(N5, 0.3, { autoAlpha: 1 });
tl.to(N5, 0.3, { autoAlpha: 0, transition: 0.8 });
tl.to(N6, 0.3, { autoAlpha: 1 });
tl.to(N6, 0.3, { autoAlpha: 0, transition: 0.8 });
tl.to(N7, 0.3, { autoAlpha: 1 });
tl.to(N7, 0.3, { autoAlpha: 0, transition: 0.8 });
tl.to(N8, 0.3, { autoAlpha: 1 });
tl.to(N8, 0.3, { autoAlpha: 0, transition: 0.8 });
tl.to(N9, 0.3, { autoAlpha: 1 });
tl.to(N9, 0.3, { autoAlpha: 0, transition: 0.8 });
tl.to(N10, 0.3, { autoAlpha: 1 });
tl.to(N10, 0.3, { autoAlpha: 0, transition: 0.8 });
tl.to(N11, 0.3, { autoAlpha: 1 });

let scrollScene = new ScrollMagic.Scene({
  triggerElement: '.wrapper',
  triggerHook: 0,
  duration: '1000%',
})
  .setTween(tl)
  .setPin('.wrapper')
  .addTo(controller);

let scene = new ScrollMagic.Controller();

const kr = new TimelineLite();

kr.to(T6, 4, { autoAlpha: 1 });
kr.to(T6, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T7, 4, { autoAlpha: 1 });
kr.to(T7, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T8, 4, { autoAlpha: 1 });
kr.to(T8, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T9, 4, { autoAlpha: 1 });
kr.to(T9, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T10, 4, { autoAlpha: 1 });
kr.to(T10, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T11, 4, { autoAlpha: 1 });
kr.to(T11, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T12, 4, { autoAlpha: 1 });
kr.to(T12, 4, { autoAlpha: 0, transition: 0.8 });

kr.to(T14, 4, { autoAlpha: 1 });
kr.to(T14, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T15, 4, { autoAlpha: 1 });
kr.to(T15, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T16, 4, { autoAlpha: 1 });
kr.to(T16, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T17, 4, { autoAlpha: 1 });
kr.to(T17, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T18, 4, { autoAlpha: 1 });
kr.to(T18, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T19, 4, { autoAlpha: 1 });
kr.to(T19, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T20, 4, { autoAlpha: 1 });
kr.to(T20, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T21, 4, { autoAlpha: 1 });
kr.to(T21, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T22, 4, { autoAlpha: 1 });
kr.to(T22, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T23, 4, { autoAlpha: 1 });
kr.to(T23, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T24, 4, { autoAlpha: 1 });
kr.to(T24, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T25, 4, { autoAlpha: 1 });
kr.to(T25, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T26, 4, { autoAlpha: 1 });
kr.to(T26, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T27, 4, { autoAlpha: 1 });
kr.to(T27, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T28, 4, { autoAlpha: 1 });
kr.to(T28, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T29, 4, { autoAlpha: 1 });
kr.to(T29, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T30, 4, { autoAlpha: 1 });
kr.to(T30, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T31, 4, { autoAlpha: 1 });
kr.to(T31, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T32, 4, { autoAlpha: 1 });
kr.to(T32, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T33, 4, { autoAlpha: 1 });
kr.to(T33, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T34, 4, { autoAlpha: 1 });
kr.to(T34, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T35, 4, { autoAlpha: 1 });
kr.to(T35, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T36, 4, { autoAlpha: 1 });
kr.to(T36, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T37, 4, { autoAlpha: 1 });
kr.to(T37, 4, { autoAlpha: 0, transition: 0.8 });
kr.to(T38, 4, { autoAlpha: 1 });
let again = new ScrollMagic.Scene({
  triggerElement: '.wrappe',
  triggerHook: 0,
  duration: '1000%',
  offset: 70,
})
  .setTween(kr)
  .setPin('.wrappe')
  .addTo(scene);
let move = new ScrollMagic.Controller();
const yr = new TimelineLite();
yr.to(Y, 3, { y: -150, rotation: 10 });
yr.to(Y, 3, { y: -160, rotation: -10 });
yr.to(Y, 3, { y: -170, rotation: 15 });
yr.to(Y, 3, { y: -280, rotation: -15 });
yr.to(Y, 3, { y: -290, rotation: 0, x: 200 });
yr.to(Y, 3, { y: -395, rotation: 0, x: -230 });
yr.to(Y, 3, { y: -450, rotation: 0, x: 300 });
yr.to(Y, 3, { y: -600, rotation: 0, x: 0 });
yr.to(Y, 3, { y: -750, rotation: 0 });
yr.to(Y, 3, { y: -800, rotation: 0 });
yr.to(Y, 3, { y: -950, rotation: 0 });
yr.to(Y, 3, { y: -1000, rotation: 0 });
yr.to(Y, 3, { y: -1020, rotation: 0 });
yr.to(Y, 3, { y: -1050, rotation: 20 });

yr.to(Y, 3, { y: -4000, x: -600 });
let aain = new ScrollMagic.Scene({
  triggerElement: '.wrapp',
  triggerHook: 0,
  duration: '1000%',
  offset: 600,
})
  .setTween(yr)
  .setPin('.wrapp')
  .addTo(scene);
