class ParticleOrchestrator {
   public ArrayList<FlowFieldParticle> particles;
   public FlowField field;
   
   public ParticleOrchestrator(FlowField f) {
       particles = new ArrayList(); 
       field = f;
   }
  
  public void spawnParticles(int count) {
    for (int i = 0; i < count; ++i) {
      spawnParticle();
    }
  }
  
  public void spawnParticle() { 
    spawnParticle(random(width), random(height));
  }
  
  public void spawnParticle(float x, float y) { 
    //var pos = ($.currentState == State.PARKED) ? randomParkingPosition() : new PVector(
    //  random(width),
    //  random(height)
    //);
    
    var p = new FlowFieldParticle(field, x, y);
    
    if ($.currentState == State.PARKED) {
      p.forcedTargetPosition = randomParkingPosition(); 
    } else {
      p.forcedTargetPosition = null; 
    }
    
    particles.add(p);
  }
  
  public void draw() {
     particles.removeIf((p) -> {
       p.draw();
       return p.dead;
    });
  }
  
  public void parkParticles() {    
    particles.forEach(p -> {
      p.forcedTargetPosition = randomParkingPosition();
    });
  }
  
  public void flowParticles() {
    particles.forEach(p -> p.forcedTargetPosition = null);
  }
  
  public int particleCount() {
    return this.particles.size();
  }
  
  public PVector randomParkingPosition() {
      var randIdx = floor(random(0, $.vertices().size()));
      return $.vertices().get(randIdx).copy();
  }
}
