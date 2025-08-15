let boids = [];
let pane;
const params = {
  seperateWeight: 2.5,
  alignWeight: 1.0,
  cohesionWeight: 1.0,
  collisionWeight: 180.0,

  perceptR: 80,
  seperateR: 35,
  collisionR: 90,

  minSpeed: 40,
  maxSpeed: 120,
  maxSteerForce: 80,

  shape: 'circle',
  color: '#3c96ff',
  alpha: 255,
  shadow: false,

  count: 450,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 标记面板为开启，供避让逻辑参考（移动端可改为折叠时设为 false）
  window.ZF_PANEL_OPEN = true;
  rectMode(CENTER);
  initUI();
  syncBoidCount();
  noStroke();
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (!params.shadow) {
    background(0);
  } else {
    noStroke(); fill(0, 25);
    rectMode(CORNER);
    rect(0, 0, width, height);
    rectMode(CENTER);
  }

  for (const b of boids) {
    b.update(boids, params);
    b.show(params);
  }
}

function initUI() {
  // Tweakpane v3 exposes global class `Tweakpane` with constructor Pane()
  pane = new Tweakpane.Pane({ container: document.getElementById('pane') });

  const g1 = pane.addFolder({ title: 'Behavior' });
  g1.addInput(params, 'seperateWeight', { min: 0, max: 20, step: 0.1 });
  g1.addInput(params, 'alignWeight',    { min: 0, max: 5,  step: 0.1 });
  g1.addInput(params, 'cohesionWeight', { min: 0, max: 10, step: 0.1 });

  const g2 = pane.addFolder({ title: 'Motion' });
  g2.addInput(params, 'maxSpeed',      { min: 20, max: 220, step: 1 });
  g2.addInput(params, 'maxSteerForce', { min: 0,  max: 200, step: 1 });

  const g3 = pane.addFolder({ title: 'Shape & Color' });
  g3.addInput(params, 'shape', { options: { circle: 'circle', square: 'square', triangle: 'triangle' } });
  g3.addInput(params, 'color', { view: 'color' });
  g3.addInput(params, 'alpha', { min: 10, max: 255, step: 1 });

  const g4 = pane.addFolder({ title: 'Shadow' });
  g4.addInput(params, 'shadow');

  const g5 = pane.addFolder({ title: 'Population / Export' });
  const countInput = g5.addInput(params, 'count', { min: 300, max: 600, step: 10 });
  countInput.on('change', syncBoidCount);
  g5.addButton({ title: 'Save PNG' }).on('click', () => saveCanvas('zenflow', 'png'));
}

function syncBoidCount() {
  const target = params.count | 0;
  if (boids.length < target) {
    for (let i = boids.length; i < target; i++) boids.push(new Boid());
  } else if (boids.length > target) {
    boids.length = target;
  }
}

