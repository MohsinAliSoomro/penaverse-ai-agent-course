
class Dog:
  species = "Canine"
  def __init__(self,name,age):
    self.name = name
    self.age = age


dog1 = Dog("Buddy",3)
dog2 = Dog("Charlie",10)

print(dog1.name)
print(dog1.age)
print(dog1.species)

dog1.name ="Max"
print(dog1.name)


# interitance
class Labrador(Dog):
  def sound(self):
    print("Labrador wolf")


labrador = Labrador("labrador",50)

print(labrador.age)
print(labrador.name)
labrador.sound()



# Parend class
