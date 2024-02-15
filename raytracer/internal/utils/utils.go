package utils

type Range struct {
	Min float64
	Max float64
}

func CreateRange(min float64, max float64) Range {
	return Range{Min: min, Max: max}
}

func PanicOnError(err error) {
	if err != nil {
		panic(err)
	}
}
