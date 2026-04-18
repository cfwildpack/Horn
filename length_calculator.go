package main

import "fmt"

func calculateTotalGrowth(initial int, years int, growthPerYear int) int {
	return initial + (years * growthPerYear)
}

func main() {
	total := calculateTotalGrowth(20, 5, 5)
	fmt.Printf("Total horn length after 5 years: %d cm\n", total)
}
