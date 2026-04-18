public class Animal {
    private String name;
    private double hornLength;

    public Animal(String name, double hornLength) {
        this.name = name;
        this.hornLength = hornLength;
    }

    public void describe() {
        System.out.println(name + " has horns measuring " + hornLength + " cm.");
    }

    public static void main(String[] args) {
        Animal bull = new Animal("Bull", 85.0);
        bull.describe();
    }
}
