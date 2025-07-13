# Accessing
# Public
# Private
# Protector 


class Dog:
  def __init__(self,name,breed,age):
    self.name = name # Public
    self._breed = breed # Protected
    self.__age = age # Private 

  def get_info(self):
    print(f"Name {self.name} Breed {self._breed} age {self.__age}")
  
  def get_age(self):
    return self.__age
  def set_age(self,age):
    if age > 0:
        self.__age = age
    else:
      print("Invalid age")


dog = Dog("Buddy","Labrador",50)
print(dog.name)

print(dog._breed)

print(dog.get_age())
dog.set_age(10)
dog.get_info()
