#include <iostream>
using namespace std;

class HornStructure {
public:
    double calculateStrength(double density, double thickness) {
        return density * thickness;
    }
};

int main() {
    HornStructure hs;
    double strength = hs.calculateStrength(1.2, 3.5);
    cout << "Horn Structural Strength Index: " << strength << endl;
    return 0;
}
