package main

import (
	"raytracer/internal/core"
	"raytracer/internal/utils"
)

func main() {
	utils.Log.Info("Initiating render")

	raytracer := core.InitRaytracerFromConfig("config.yml")

	raytracer.PrintDetails()

	img := raytracer.Render()

	utils.ExportImage(img, "output.png")
}
