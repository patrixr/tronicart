package core

import (
	"image"
	"math"
	"raytracer/internal/colors"
	. "raytracer/internal/geometry"
	"raytracer/internal/utils"
)

type Raytracer struct {
	Size        int      `yaml:"size"`
	Viewport    Viewport `yaml:"viewport"`
	FocalLength float64  `yaml:"focal_length"`
	Camera      Camera   `yaml:"camera"`
	World       World    `yaml:"objects"`

	Aspect struct {
		W int `yaml:"w"`
		H int `yaml:"h"`
	} `yaml:"aspect_ratio"`

	Antialiasing struct {
		Samples int `yaml:"samples"`
	} `yaml:"antialiasing"`
}

// -----------------------------------------

func (rt *Raytracer) ScreenWidth() int {
	return rt.Size
}

// -----------------------------------------

func (rt *Raytracer) ScreenHeight() int {
	return (rt.Size * rt.Aspect.H) / rt.Aspect.W
}

// -----------------------------------------

func (rt *Raytracer) ViewPortHeight() float64 {
	return float64(rt.Viewport.Size)
}

// -----------------------------------------

func (rt *Raytracer) ViewPortWidth() float64 {
	return rt.ViewPortHeight() * (float64(rt.ScreenWidth()) / float64(rt.ScreenHeight()))
}

// -----------------------------------------
// Main method to render the scene
// -----------------------------------------

func (rt *Raytracer) Render() image.Image {
	w := rt.ScreenWidth()
	h := rt.ScreenHeight()
	img := image.NewNRGBA(image.Rect(0, 0, w, h))

	// Calculate the Vec3s across the horizontal and down the vertical viewport edges.
	viewportU := CreateVector(rt.ViewPortWidth(), 0, 0)
	viewportV := CreateVector(0, rt.ViewPortHeight(), 0)

	// Calculate the horizontal and vertical delta Vec3s from pixel to pixel.
	pixelDeltaU := viewportU.Div(float64(rt.ScreenWidth()))
	pixelDeltaV := viewportV.Div(float64(rt.ScreenHeight()))

	viewportUpperLeft := rt.Camera.Origin.
		SubZ(rt.FocalLength).  // distance between the camera and the viewport
		Sub(viewportU.Div(2)). // move to the left
		Add(viewportV.Div(2))  // move up

	rootPixel := viewportUpperLeft.Add(pixelDeltaU.Add(pixelDeltaV).Div(2))

	for y := 0; y < h; y++ {
		for x := 0; x < w; x++ {

			avg := colors.CreateColorAverage()

			realPixelLocation := rootPixel.
				Add(pixelDeltaU.Mul(float64(x))).
				Sub(pixelDeltaV.Mul(float64(y)))

			for s := 0; s < rt.Antialiasing.Samples; s++ {
				// Generate randomized variance to the pixel location per sample
				variance := CreateVector(
					utils.Rand(-0.5, 0.5)*pixelDeltaU.X,
					utils.Rand(-0.5, 0.5)*pixelDeltaV.Y,
					0,
				)

				// Add the variance to the real pixel location
				pixelLocation := realPixelLocation.Add(variance)

				ray := CreateRay(rt.Camera.Origin, pixelLocation.Sub(rt.Camera.Origin))

				avg.Add(rt.RayColor(ray, 10))
			}

			img.Set(x, y, avg.Color().WithGammaCorrection())
		}
	}

	return img
}

// -----------------------------------------
// Math
// -----------------------------------------

func (rt *Raytracer) RayColor(ray Ray, maxDepth int) colors.Color {

	if maxDepth <= 0 {
		return colors.Black()
	}

	limit := utils.CreateRange(0.0001, math.Inf(1))
	if intersects, hitpoint, obj := rt.World.Intersect(ray, limit); intersects {
		mat := obj.Material

		if scattered, bouncedRay := mat.Scatter(ray, hitpoint); scattered {
			//return rt.RayColor(bouncedRay, maxDepth-1).MultiplyScalar(0.5)
			return rt.RayColor(bouncedRay, maxDepth-1).Multiply(mat.AttenuationColor())
		}
		return colors.Black()
	}

	return rt.defaultRayColor(ray)
}

// -----------------------------------------

func (rt *Raytracer) defaultRayColor(ray Ray) colors.Color {
	unitDirection := ray.Direction.Normalize()
	t := 0.5 * (unitDirection.Y + 1.0)

	return colors.Color{
		uint8(255.0 * ((1.0 - t) + (t * 0.5))),
		uint8(255.0 * ((1.0 - t) + (t * 0.7))),
		uint8(255.0 * ((1.0 - t) + (t * 1.0))),
		255,
	}
}

// -----------------------------------------
// Debug
// -----------------------------------------

func (rt *Raytracer) PrintDetails() {
	utils.Log.Info("Dimensions", "w", rt.ScreenWidth(), "h", rt.ScreenHeight())
	utils.Log.Info("Viewport", "w", rt.ViewPortWidth(), "h", rt.ViewPortHeight())
	utils.Log.Info("Focal Length", "size", rt.FocalLength)
	utils.Log.Info("Camera", "origin", rt.Camera.Origin)
	utils.Log.Info("Aspect Ratio", "w", rt.Aspect.W, "h", rt.Aspect.H)
	utils.Log.Info("Objects", "count", len(rt.World.Objects))
	utils.Log.Info("Antialiasing", "samples", rt.Antialiasing.Samples)
}
