package shapes

import (
	. "raytracer/internal/geometry"
	"raytracer/internal/utils"
)

type Intersection struct {
	Dist          float64
	Point         Vec3
	Normal        Vec3
	OutwardFacing bool
}

type Shape interface {
	Intersect(ray Ray, limit utils.Range) (bool, Intersection)
}
