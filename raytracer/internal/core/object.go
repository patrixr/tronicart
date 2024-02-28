package core

import (
	. "raytracer/internal/geometry"
	. "raytracer/internal/geometry/shapes"
	"raytracer/internal/utils"

	"github.com/mitchellh/mapstructure"
)

type World struct {
	Objects []Object
}

type Object struct {
	Shape    Shape
	Material Material
}

func (world *World) Intersect(ray Ray, limit utils.Range) (bool, Intersection, *Object) {
	hitAnything := false
	closestSoFar := limit.Max
	intersection := Intersection{}
	var hitObject *Object

	for index, obj := range world.Objects {
		hit, tempIntersection := obj.Shape.Intersect(ray, limit)

		if hit && tempIntersection.Dist < closestSoFar {
			hitAnything = true
			closestSoFar = tempIntersection.Dist
			intersection = tempIntersection
			hitObject = &world.Objects[index]
		}
	}

	return hitAnything, intersection, hitObject
}

func (s *World) UnmarshalYAML(unmarshal func(interface{}) error) error {
	objs := make([]map[string]interface{}, 0, 50)

	utils.PanicOnError(unmarshal(&objs))

	for _, o := range objs {
		obj := Object{}
		obj.Shape = DecodeShape(o)
		obj.Material = DecodeMaterial(o)
		s.Objects = append(s.Objects, obj)
	}

	return nil
}

func DecodeShape(data map[string]interface{}) Shape {
	shapeType := data["type"]

	if shapeType == "sphere" {
		sphere := Sphere{}
		utils.PanicOnError(
			mapstructure.Decode(data, &sphere),
		)
		return &sphere
	}

	utils.Log.Fatal("Unknown shape type ", shapeType)
	return nil
}

func DecodeMaterial(data map[string]interface{}) Material {
	materialType := data["material"]

	if materialType == "matte" {
		mat := MatteMaterial{}
		utils.PanicOnError(
			mapstructure.Decode(data, &mat),
		)
		return &mat
	} else if materialType == "transparent" {
		transparent := Transparent{}
		utils.PanicOnError(
			mapstructure.Decode(data, &transparent),
		)
		return &transparent
	} else if materialType == "metal" {
		metal := Metal{}
		utils.PanicOnError(
			mapstructure.Decode(data, &metal),
		)
		return &metal
	}

	utils.Log.Fatal("Unknown material ", materialType)
	return nil
}
