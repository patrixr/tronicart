package core

import (
	. "raytracer/internal/geometry"
)

type Camera struct {
	Origin Vec3 `yaml:"origin"`
}

type Viewport struct {
	Size int `yaml:"size"`
}

func CreateCamera() Camera {
	return Camera{
		Origin: Vec3{0.0, 0.0, 0.0},
	}
}
