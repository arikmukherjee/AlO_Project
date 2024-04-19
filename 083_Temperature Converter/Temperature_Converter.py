print("----------WELCOME----------")
print("Press C/c to get celcius temperature")
print("Press F/f to get fehrenheit temperature")
print("Press K/k to get kelvin temperature")
print("Enter your choice")
choice=str(input())

if(choice=='F' or choice=='f'):
  print("---Celcius to Fehrenheit---")
  print("Enter celcius temperature")
  celcius=float(input())
  fehrenheit=((9.0*(celcius/5))+32)
  print("Fehrenheit temperature is = ",fehrenheit)
elif(choice=='C' or choice=='c'):
  print("---Fehrenheit to Celcius---")
  print("Enter fehrenheit temperature")
  fehrenheit=float(input())
  celcius=((fehrenheit-32)*5)/9
  print("Fehrenheit temperature is = ",celcius)
elif(choice=='K' or choice=='k'):
  print("---Celcius to Kelvin---")
  print("Enter celcius temperature")
  celcius=float(input())
  kelvin=celcius+273.15
  print(kelvin,"K")
else:
  print("Invalid input")
  print("Press C/c to get celcius temperature")
  print("Press F/f to get fehrenheit temperature")
  print("Press K/k to get kelvin temperature")
