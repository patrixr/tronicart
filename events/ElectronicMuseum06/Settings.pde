
boolean ALLOW_RECORDING = true;
int DEBUG_LEVEL = 0;
boolean FULLSCREEN = false;
int FULLSCREEN_DISPLAY = 2;
boolean DEBUG = DEBUG_LEVEL > 0;
int WINDOW_HEIGHT = 1080;
int WINDOW_WIDTH = 720;
int FLOW_TILE_SIZE = WINDOW_WIDTH / 50;
float PYRAMID_SIZE = WINDOW_WIDTH / 2;
int MAX_SPAWN_PARTICLES = 50;
int MAX_PARTICLES = 7000;
int PARTICLE_PROXIMITY_THRESHOLD = 1;
boolean KINECT_ENABLED = false;
boolean REVERSE_PARTICLE_GROWTH_WITH_KINECT_MODE = true;
float TARGET_IMAGE_WIDTH = WINDOW_WIDTH * 0.75;
boolean LOADED_VERTICES_FROM_SOURCE_IMAGES = true;
int MIN_PARTICLE_LIFESPAN = 300;
int MAX_PARTICLE_LIFESPAN = 700;
int MAX_PARTICLE_LIFESPAN_WITH_KINECT = 50;
int MESH_PIXEL_GAP = 3;
float PARTICLE_SPEED = 2;
float PARTICLE_SPEED_DURING_KINECT_MODE = 3.5;
int KINECT_SCALE_FACTOR = 700;
int KINECT_STATE_POINT_THRESHHOLD = 150; // we consider the kinect mode activated if we have that many points
int CHANGE_MESH_VERY_N_FRAMES = 1600;
int ALTERNATE_STATES_EVERY_N_FRAMES = CHANGE_MESH_VERY_N_FRAMES / 2;
ArrayList<String> SOURCE_IMAGE_NAMES = new ArrayList() {{
  add("emuseum.png");
  add("typhoon.png");
  add("cat.png");
  add("pyramids.png");
  add("horus.png");
  add("logo.png");
}};
