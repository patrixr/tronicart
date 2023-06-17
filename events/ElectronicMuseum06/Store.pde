class Store {
  
  public State currentState;
  public FlowField field;
  public ArrayList<FlowFieldParticle> particles;
  public ParticleOrchestrator orchestrator;
  public ArrayList<Segment> pyramidSegments;
  public ArrayList<ArrayList<PVector>> meshes;
  public int currentMeshIndex;
  public int ticksSpentInCurrentState = 0;
  public int kinectPointsDetected = 0;
  public ArrayList<PVector> kinectPoints;
  public PVector kinectPointsAverage;
  
  public void init() {
    currentState = State.PARKED; 
    field = new FlowField(width, height, FLOW_TILE_SIZE);
    particles = new ArrayList();
    orchestrator = new ParticleOrchestrator(field);
    
    var pyramidX = width / 2;
    var pyramidY = height / 2 - PYRAMID_SIZE / 2 + PYRAMID_SIZE / 8;
    
    pyramidSegments = new ArrayList(5) {{
     add(new Segment(pyramidX, pyramidY, pyramidX - PYRAMID_SIZE / 2, pyramidY + PYRAMID_SIZE / 2));
     add(new Segment(pyramidX, pyramidY, pyramidX + PYRAMID_SIZE /2, pyramidY + PYRAMID_SIZE / 2));
     add(new Segment(pyramidX, pyramidY + PYRAMID_SIZE * 0.75, pyramidX + PYRAMID_SIZE /2, pyramidY + PYRAMID_SIZE / 2));
     add(new Segment(pyramidX, pyramidY + PYRAMID_SIZE * 0.75, pyramidX - PYRAMID_SIZE /2, pyramidY + PYRAMID_SIZE / 2));
     add(new Segment(pyramidX, pyramidY, pyramidX, pyramidY + PYRAMID_SIZE * 0.75));
   }};
   
   ArrayList<PVector> vertices = new ArrayList(pyramidSegments.size() * pyramidSegments.get(0).vertices.length);
   for (int i = 0; i < pyramidSegments.size(); ++i) {
     var seg = pyramidSegments.get(i);
     for (int j = 0; j < seg.vertices.length; ++j) {
       vertices.add(seg.vertices[j]);
     }
   }
   
   meshes = new ArrayList(SOURCE_IMAGE_NAMES.size() + 1);
   meshes.add(vertices);
   currentMeshIndex = 0;
  }
  
  public ArrayList<PVector> vertices() {
    return meshes.get(currentMeshIndex % meshes.size()); 
  }
}

Store $ = new Store();
