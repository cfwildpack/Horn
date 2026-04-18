class Horn:
    def __init__(self, length=10, growth_rate=5):
        self.length = length
        self.growth_rate = growth_rate
        self.age = 0

    def grow_one_year(self):
        self.length += self.growth_rate
        self.age += 1
        print(f"Year {self.age}: Horn length is now {self.length} cm")

    def status(self):
        print(f"Age: {self.age} years")
        print(f"Horn Length: {self.length} cm")

if __name__ == "__main__":
    horn = Horn()
    horn.grow_one_year()
    horn.status()
