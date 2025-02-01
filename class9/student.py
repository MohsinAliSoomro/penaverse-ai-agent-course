""" Start of class """
class Student:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        print("run constructor")

    def get_info(self):
        print(f"Name {self.name} and age {self.age}")
    def update_age(self,age:int):
        self.age = age
    def update_name(self,name:str):
        self.name = "Name"
""" End of class """


s1 = Student("Mohsin",27)
s2 = Student("Ali",28)

s1.update_age(30)
# print(s1.age)
s1.get_info()
s2.get_info()