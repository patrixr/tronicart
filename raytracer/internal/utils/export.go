package utils

import (
	"image"
	"image/jpeg"
	"image/png"
	"os"
	"path/filepath"
	"strings"
)

/**
 * ExportImage exports an image to a file
 *
 */
func ExportImage(image image.Image, path string) {
	ext := strings.ToLower(filepath.Ext(path))

	if ext != ".png" && ext != ".jpg" && ext != ".jpeg" {
		Log.Fatal("Unsupported file format " + ext)
	}

	file, err := os.Create(path)

	PanicOnError(err)

	defer file.Close()

	if ext == ".png" {
		png.Encode(file, image)
	} else {
		jpeg.Encode(file, image, nil)
	}

	Log.Info("Image exported to " + path)
}
