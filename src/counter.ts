export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}

export function gameloop() {
  let play = true;
  let mousex = 0;
  let mousey = 0;
  let rotate = 0;
  let planeX = 100;

  document.addEventListener('mousemove', (e) => {
    mousex = e.clientX;
    mousey = e.clientY;
  });

  document
    .querySelector<HTMLButtonElement>('#counter')!
    .addEventListener('click', () => {
      play = !play;
      requestAnimationFrame(loop);
    });

  const plane = document.querySelector<SVGElement>('.plane')!;
  plane.style.offset = `path("M601 1C248 119 19.6667 74 1 30")`;

  function loop(timestamp: number) {
    var progress = timestamp - lastRender;

    update(progress);
    draw();
    lastRender = timestamp;
    requestAnimationFrame(loop);
  }

  const keyframes: Keyframe[] = [
    {
      translate: `${600}px ${Math.floor(200)}px`,
      //offsetPath: `path("M18.45,58.46s52.87-70.07,101.25-.75,101.75-6.23,101.75-6.23S246.38,5.59,165.33,9.08s-15,71.57-94.51,74.56S18.45,58.46,18.45,58.46Z")`,
      offsetDistance: '100%',
    },
  ];
  const keyframesOptions: KeyframeAnimationOptions = {
    duration: 50000,
    fill: 'both',
    easing: 'ease-in-out',
  };

  document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.code === 'Space') {
      planeX = planeX + 1;
      // requestAnimationFrame(loop);
    }

    switch (e.key) {
      case 'ArrowUp':
        // up arrow
        break;
      case 'ArrowDown':
        // down arrow
        break;
      case 'ArrowLeft':
        // left arrow
        planeX = planeX - 10;
        break;
      case 'ArrowRight':
        // right arrow
        planeX = planeX + 10;
        break;
    }
  });

  //keyframes[0].translate = `${300}px ${200}px`;

  plane.animate(keyframes, keyframesOptions);
  var lastRender = 0;
  requestAnimationFrame(loop);

  //   deltaX = x2 - x1;
  // deltaY = y2 - y1;
  // deg = Math.atan2(deltaY, deltaX)*180.0/Math.PI;
  const but = document.querySelector<HTMLButtonElement>('#counter')!;

  function update(progress: number) {
    // const x = plane.getBoundingClientRect().x;
    // const y = plane.getBoundingClientRect().y;

    // let calcX = mousex - x;
    // let calcY = y - mousey;
    // let calc_angle = Math.atan2(calcX, calcY);

    // if (calc_angle < 0) {
    //   // we don't want negative angles
    //   calc_angle += Math.PI * 2;
    //   // make negative angles positive by adding 360 degrees
    // }

    // if (true) {
    //   rotate = calc_angle * (180 / Math.PI);
    // }

    //keyframes[0].translate = `${mousex - 10}px ${mousey - 10}px`;

    but.innerHTML = `count is ${rotate}`;
    keyframes[0].rotate = `${rotate}deg`;
    keyframes[0].translate = `${planeX}px ${200}px`;

    plane.animate(keyframes, keyframesOptions);
  }
  function draw() {}
}
