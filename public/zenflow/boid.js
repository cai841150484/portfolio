class Boid {
  constructor() {
    this.pos = createVector(random(width), random(height));
    const angle = random(TWO_PI);
    this.vel = p5.Vector.fromAngle(angle).mult(random(50, 120)); // px/s
    this.acc = createVector(0, 0);
    this.drawSize = 12;
  }

  update(boids, params) {
    const sep = this.separation(boids, params).mult(params.seperateWeight);
    const ali = this.alignment(boids, params).mult(params.alignWeight);
    const coh = this.cohesion(boids, params).mult(params.cohesionWeight);
    const col = this.collision(params).mult(params.collisionWeight);

    this.acc.set(0, 0).add(sep).add(ali).add(coh).add(col).limit(params.maxSteerForce);

    const dt = Math.min(deltaTime, 50) / 1000; // clamp for stutters
    this.vel.add(p5.Vector.mult(this.acc, dt));

    const sp = this.vel.mag();
    if (sp < params.minSpeed) this.vel.setMag(params.minSpeed);
    if (sp > params.maxSpeed) this.vel.setMag(params.maxSpeed);

    this.pos.add(p5.Vector.mult(this.vel, dt));
    this.edges();
  }

  separation(boids, p) {
    const steer = createVector(0, 0); let count = 0;
    for (const other of boids) {
      if (other === this) continue;
      const d = p5.Vector.dist(this.pos, other.pos);
      if (d > 0 && d < p.seperateR) {
        const diff = p5.Vector.sub(this.pos, other.pos);
        diff.div(d * d); // stronger near-field repulsion
        steer.add(diff); count++;
      }
    }
    if (count > 0) steer.div(count);
    return steer;
  }

  alignment(boids, p) {
    const sum = createVector(0, 0); let count = 0;
    for (const other of boids) {
      if (other === this) continue;
      const d = p5.Vector.dist(this.pos, other.pos);
      if (d < p.perceptR) { sum.add(other.vel); count++; }
    }
    if (count > 0) sum.div(count);
    return sum;
  }

  cohesion(boids, p) {
    const center = createVector(0, 0); let count = 0;
    for (const other of boids) {
      if (other === this) continue;
      const d = p5.Vector.dist(this.pos, other.pos);
      if (d < p.perceptR) { center.add(other.pos); count++; }
    }
    if (count > 0) {
      center.div(count);
      return p5.Vector.sub(center, this.pos);
    }
    return createVector(0, 0);
  }

  collision(p) {
    // 未按下（鼠标/触摸）时不触发避让，避免移动端无触控也产生持续排斥
    const hasTouch = typeof touches !== 'undefined' && touches && touches.length > 0;
    if (!(mouseIsPressed || hasTouch)) return createVector(0, 0);

    // 侧边面板安全区（仅在面板展开时启用），由全局标记控制
    const panelOpen = typeof window !== 'undefined' && !!window.ZF_PANEL_OPEN;
    const panelW = panelOpen ? 320 : 0;

    const safeX = Math.max(mouseX, panelW);
    const m = createVector(safeX, mouseY);
    const d = p5.Vector.dist(this.pos, m);
    if (d < p.collisionR) return p5.Vector.sub(this.pos, m).normalize();
    return createVector(0, 0);
  }

  edges() {
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

  show(params) {
    const c = color(params.color);
    c.setAlpha(params.alpha);
    fill(c); noStroke();

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());

    const s = this.drawSize;
    if (params.shape === 'circle') {
      ellipse(0, 0, s, s);
    } else if (params.shape === 'square') {
      rectMode(CENTER);
      rect(0, 0, s, s);
    } else {
      triangle(0, -s * 0.7, -s * 0.5, s * 0.5, s * 0.5, s * 0.5);
    }
    pop();
  }
}

