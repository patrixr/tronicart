package core

import (
	"raytracer/internal/colors"
	. "raytracer/internal/geometry"
	. "raytracer/internal/geometry/shapes"
)

type Material interface {
	Scatter(ray Ray, hit Intersection) (
		success bool,
		scatteredRay Ray,
	)

	AttenuationColor() colors.Color
}

// DiffusedMaterial
// ------------------------------------------------

type MatteMaterial struct {
	Color colors.Color
}

func (m *MatteMaterial) AttenuationColor() colors.Color {
	return m.Color
}

func (m *MatteMaterial) Scatter(ray Ray, hit Intersection) (
	success bool,
	scatteredRay Ray,
) {
	bounceDirection := hit.Normal.Normalize().Add(CreateRandomVector().Normalize())

	if bounceDirection.NearZero() {
		bounceDirection = hit.Normal
	}

	scatteredRay = CreateRay(hit.Point, bounceDirection)
	success = true
	return
}

// Metal
// ------------------------------------------------

type Metal struct {
	Color colors.Color
}

func (m *Metal) AttenuationColor() colors.Color {
	return m.Color
}

func (m *Metal) Scatter(ray Ray, hit Intersection) (
	success bool,
	scatteredRay Ray,
) {
	reflected := ray.Direction.Normalize().Reflect(hit.Normal)
	scatteredRay = CreateRay(hit.Point, reflected)
	success = true
	return
}
