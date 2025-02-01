# Parent class

class Dog:
  def sound(self):
    print("Dog sound")


# child class
class Labrador(Dog):
  def sound(self):
    print("Labrador sound")

# child class
class Beagle(Dog):
  def sound(self):
    print("Beagle sound")



dogs = [Dog(), Labrador(), Beagle()]

for dog in dogs:
  dog.sound()