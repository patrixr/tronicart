.PHONY: tidy run build

tidy:
	go mod tidy

demo:
	go run ./cli.go demo

run:
	go run ./cli.go

wasm:
	GOARCH=wasm GOOS=js go build -o web/raytracer.wasm ./main.go

build: wasm

dev: wasm
	npx --yes live-server ./web
