package core

import (
	"os"
	"raytracer/internal/utils"

	"gopkg.in/yaml.v2"
)

func InitRaytracerFromConfig(path string) Raytracer {
	var rt Raytracer

	data, err := os.ReadFile(path)

	utils.PanicOnError(err)

	err = yaml.Unmarshal(data, &rt)

	utils.PanicOnError(err)

	return rt
}
