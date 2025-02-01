""" Start of class """
class Student:
    def __init__(self,name,age):
        self.name = name
        self.ge = age
        print("run constructor")

    def get_info(self):
        print(f"Name {self.name} and age {self.age}")
""" End of class """


s1 = Student("Mohsin",27)
s2 = Student("Ali",28)

# print(s1.__age)
s1.get_info()
s2.get_info()