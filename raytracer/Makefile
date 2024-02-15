.PHONY: tidy run build

tidy:
	go mod tidy

run:
	go run ./cmd/raytracer

build:
	CGO_ENABLED=0 go build ./cmd/raytracer
