class Segment {

  public PVector p1;
  public PVector p2;
  public PVector[] vertices;
  
  public Segment(PVector p1, PVector p2) {
    this.p1 = p1;
    this.p2 = p2;
    
    var distance = p1.dist(p2);
    var distBetweenVertices = 10;
    var lerpStep = distBetweenVertices / distance;
    var verticeCount = ceil(distance / distBetweenVertices);

    vertices = new PVector[verticeCount];
    for (int i = 0; i < verticeCount; i++) {
      vertices[i] = PVector.lerp(p1, p2, i * lerpStep);
    }
  }
  
  public Segment(float x1, float y1, float x2, float y2) {
    this(new PVector(x1, y1), new PVector(x2, y2));
  }
  
  public float x1() { return p1.x; };
  public float x2() { return p2.x; };
  public float y1() { return p1.y; };
  public float y2() { return p2.y; };
}
